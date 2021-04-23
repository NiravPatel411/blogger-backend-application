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
// NGRX
var store_1 = require("@ngrx/store");
var auth_1 = require("../../../../../core/auth");
var UserProfile3Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserProfile3Component(store) {
        this.store = store;
        this.avatar = true;
        this.greeting = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserProfile3Component.prototype.ngOnInit = function () {
        this.user$ = this.store.pipe(store_1.select(auth_1.currentUser));
    };
    /**
     * Log out
     */
    UserProfile3Component.prototype.logout = function () {
        this.store.dispatch(new auth_1.Logout());
    };
    __decorate([
        core_1.Input()
    ], UserProfile3Component.prototype, "avatar", void 0);
    __decorate([
        core_1.Input()
    ], UserProfile3Component.prototype, "greeting", void 0);
    __decorate([
        core_1.Input()
    ], UserProfile3Component.prototype, "badge", void 0);
    __decorate([
        core_1.Input()
    ], UserProfile3Component.prototype, "icon", void 0);
    UserProfile3Component = __decorate([
        core_1.Component({
            selector: 'kt-user-profile3',
            templateUrl: './user-profile3.component.html',
        })
    ], UserProfile3Component);
    return UserProfile3Component;
}());
exports.UserProfile3Component = UserProfile3Component;
