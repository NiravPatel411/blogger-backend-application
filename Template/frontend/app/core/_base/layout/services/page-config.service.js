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
// RxJS
var rxjs_1 = require("rxjs");
// Object-Path
var objectPath = require("object-path");
// Lodash
var lodash_1 = require("lodash");
var PageConfigService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param router: Router
     */
    function PageConfigService(router) {
        this.router = router;
        // register on config changed event and set default config
        this.onConfigUpdated$ = new rxjs_1.Subject();
    }
    /**
     * Get current page config based on route
     */
    PageConfigService.prototype.getCurrentPageConfig = function (path) {
        var configPath = this.cleanUrl(this.router.url);
        if (path) {
            configPath += '.' + path;
        }
        // get page config by path
        return objectPath.get(this.pageConfig, configPath);
    };
    /**
     * Set existing config with a new value
     * @param value: any
     * @param sav: boolean?
     */
    PageConfigService.prototype.setConfig = function (value, save) {
        this.pageConfig = lodash_1.merge(this.pageConfig, value);
        if (save) {
            // not implemented
        }
        // fire off an event that all subscribers will listen
        this.onConfigUpdated$.next(this.pageConfig);
    };
    /**
     * Load confgis
     *
     * @param config: any
     */
    PageConfigService.prototype.loadConfigs = function (config) {
        this.pageConfig = config;
        this.onConfigUpdated$.next(this.pageConfig);
    };
    /**
     * Remove unnecessary params from URL
     * param url
     */
    PageConfigService.prototype.cleanUrl = function (url) {
        // remove first route (demo name) from url router
        if (new RegExp(/^\/demo/).test(url)) {
            var urls = url.split('/');
            urls.splice(0, 2);
            url = urls.join('/');
        }
        if (url.charAt(0) === '/') {
            url = url.substr(1);
        }
        // we get the page title from config, using url path.
        // we need to remove query from url ?id=1 before we use the path to search in array config.
        var finalUrl = url.replace(/\//g, '.');
        if (finalUrl.indexOf('?') !== -1) {
            finalUrl = finalUrl.substring(0, finalUrl.indexOf('?'));
        }
        return finalUrl;
    };
    PageConfigService = __decorate([
        core_1.Injectable()
    ], PageConfigService);
    return PageConfigService;
}());
exports.PageConfigService = PageConfigService;
