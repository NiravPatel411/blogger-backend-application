"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Lodash
var lodash_1 = require("lodash");
// Environment
var environment_1 = require("../../../../environments/environment");
var API_USERS_URL = 'api/users';
var API_PERMISSION_URL = 'api/permissions';
var API_ROLES_URL = 'api/roles';
var AuthService = /** @class */ (function () {
    function AuthService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // Authentication/Authorization
    AuthService.prototype.login = function (email, password) {
        if (!email || !password) {
            return rxjs_1.of(null);
        }
        return this.getAllUsers().pipe(operators_1.map(function (result) {
            if (result.length <= 0) {
                return null;
            }
            var user = lodash_1.find(result, function (item) {
                return (item.email.toLowerCase() === email.toLowerCase() && item.password === password);
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    };
    AuthService.prototype.register = function (user) {
        user.roles = [2]; // Manager
        user.accessToken = 'access-token-' + Math.random();
        user.refreshToken = 'access-token-' + Math.random();
        user.pic = './assets/media/users/default.jpg';
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders })
            .pipe(operators_1.map(function (res) {
            return res;
        }), operators_1.catchError(function (err) {
            return null;
        }));
    };
    AuthService.prototype.requestPassword = function (email) {
        return this.http.get(API_USERS_URL).pipe(operators_1.map(function (users) {
            if (users.length <= 0) {
                return null;
            }
            var user = lodash_1.find(users, function (item) {
                return (item.email.toLowerCase() === email.toLowerCase());
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }), operators_1.catchError(this.handleError('forgot-password', [])));
    };
    AuthService.prototype.getUserByToken = function () {
        var userToken = localStorage.getItem(environment_1.environment.authTokenKey);
        if (!userToken) {
            return rxjs_1.of(null);
        }
        return this.getAllUsers().pipe(operators_1.map(function (result) {
            if (result.length <= 0) {
                return null;
            }
            var user = lodash_1.find(result, function (item) {
                return (item.accessToken === userToken.toString());
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    };
    // Users
    // CREATE =>  POST: add a new user to the server
    AuthService.prototype.createUser = function (user) {
        var httpHeaders = new http_1.HttpHeaders();
        // Note: Add headers if needed (tokens/bearer)
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders });
    };
    // READ
    AuthService.prototype.getAllUsers = function () {
        return this.http.get(API_USERS_URL);
    };
    AuthService.prototype.getUserById = function (userId) {
        if (!userId) {
            return rxjs_1.of(null);
        }
        return this.http.get(API_USERS_URL + ("/" + userId));
    };
    // DELETE => delete the user from the server
    AuthService.prototype.deleteUser = function (userId) {
        var url = API_USERS_URL + "/" + userId;
        return this.http.delete(url);
    };
    // UPDATE => PUT: update the user on the server
    // tslint:disable-next-line
    AuthService.prototype.updateUser = function (_user) {
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_USERS_URL, _user, { headers: httpHeaders }).pipe(operators_1.catchError(function (err) {
            return rxjs_1.of(null);
        }));
    };
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    AuthService.prototype.findUsers = function (queryParams) {
        var _this = this;
        // This code imitates server calls
        return this.getAllUsers().pipe(operators_1.mergeMap(function (response) {
            var result = _this.httpUtils.baseFilter(response, queryParams, []);
            return rxjs_1.of(result);
        }));
    };
    // Permissions
    AuthService.prototype.getAllPermissions = function () {
        return this.http.get(API_PERMISSION_URL);
    };
    AuthService.prototype.getRolePermissions = function (roleId) {
        var _this = this;
        var allRolesRequest = this.http.get(API_PERMISSION_URL);
        var roleRequest = roleId ? this.getRoleById(roleId) : rxjs_1.of(null);
        return rxjs_1.forkJoin(allRolesRequest, roleRequest).pipe(operators_1.map(function (res) {
            var allPermissions = res[0];
            var role = res[1];
            if (!allPermissions || allPermissions.length === 0) {
                return [];
            }
            var rolePermission = role ? role.permissions : [];
            return _this.getRolePermissionsTree(allPermissions, rolePermission);
        }));
    };
    AuthService.prototype.getRolePermissionsTree = function (allPermission, rolePermissionIds) {
        var _this = this;
        if (allPermission === void 0) { allPermission = []; }
        if (rolePermissionIds === void 0) { rolePermissionIds = []; }
        var result = [];
        var root = lodash_1.filter(allPermission, function (item) { return !item.parentId; });
        lodash_1.each(root, function (rootItem) {
            rootItem._children = [];
            rootItem._children = _this.collectChildrenPermission(allPermission, rootItem.id, rolePermissionIds);
            rootItem.isSelected = (lodash_1.some(rolePermissionIds, function (id) { return id === rootItem.id; }));
            result.push(rootItem);
        });
        return result;
    };
    AuthService.prototype.collectChildrenPermission = function (allPermission, parentId, rolePermissionIds) {
        var _this = this;
        if (allPermission === void 0) { allPermission = []; }
        if (rolePermissionIds === void 0) { rolePermissionIds = []; }
        var result = [];
        // tslint:disable-next-line
        var _children = lodash_1.filter(allPermission, function (item) { return item.parentId === parentId; });
        if (_children.length === 0) {
            return result;
        }
        lodash_1.each(_children, function (childItem) {
            childItem._children = [];
            childItem._children = _this.collectChildrenPermission(allPermission, childItem.id, rolePermissionIds);
            childItem.isSelected = (lodash_1.some(rolePermissionIds, function (id) { return id === childItem.id; }));
            result.push(childItem);
        });
        return result;
    };
    // Roles
    AuthService.prototype.getAllRoles = function () {
        return this.http.get(API_ROLES_URL);
    };
    AuthService.prototype.getRoleById = function (roleId) {
        return this.http.get(API_ROLES_URL + ("/" + roleId));
    };
    // CREATE =>  POST: add a new role to the server
    AuthService.prototype.createRole = function (role) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_ROLES_URL, role, { headers: httpHeaders });
    };
    // UPDATE => PUT: update the role on the server
    AuthService.prototype.updateRole = function (role) {
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
    };
    // DELETE => delete the role from the server
    AuthService.prototype.deleteRole = function (roleId) {
        var url = API_ROLES_URL + "/" + roleId;
        return this.http.delete(url);
    };
    AuthService.prototype.findRoles = function (queryParams) {
        var _this = this;
        // This code imitates server calls
        return this.http.get(API_ROLES_URL).pipe(operators_1.mergeMap(function (res) {
            var result = _this.httpUtils.baseFilter(res, queryParams, []);
            return rxjs_1.of(result);
        }));
    };
    // Check Role Before deletion
    AuthService.prototype.isRoleAssignedToUsers = function (roleId) {
        return this.getAllUsers().pipe(operators_1.map(function (users) {
            // tslint:disable-next-line
            return lodash_1.some(users, function (user) { return lodash_1.some(user.roles, function (_roleId) { return _roleId === roleId; }); });
        }));
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
