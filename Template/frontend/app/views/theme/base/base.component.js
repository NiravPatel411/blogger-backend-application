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
// Object-Path
var objectPath = require("object-path");
var layout_config_1 = require("../../../core/_config/layout.config");
var menu_config_1 = require("../../../core/_config/menu.config");
var page_config_1 = require("../../../core/_config/page.config");
var auth_1 = require("../../../core/auth");
var store_1 = require("@ngrx/store");
var BaseComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * param layoutConfigService: LayoutConfigService
     * param menuConfigService: MenuConfigService
     * param pageConfigService: PageConfigService
     * param htmlClassService: HtmlClassService
     * param store
     * param permissionsService
     */
    function BaseComponent(layoutConfigService, menuConfigService, pageConfigService, htmlClassService, store, permissionsService) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.store = store;
        this.permissionsService = permissionsService;
        // Public variables
        this.selfLayout = 'default';
        this.contentClasses = '';
        this.contentContainerClasses = '';
        this.subheaderDisplay = true;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.loadRolesWithPermissions();
        // register configs by demos
        this.layoutConfigService.loadConfigs(new layout_config_1.LayoutConfig().configs);
        this.menuConfigService.loadConfigs(new menu_config_1.MenuConfig().configs);
        this.pageConfigService.loadConfigs(new page_config_1.PageConfig().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        var subscription = this.layoutConfigService.onConfigUpdated$.subscribe(function (layoutConfig) {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            _this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(subscription);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.layoutConfigService.getConfig();
        // Load UI from Layout settings
        this.selfLayout = objectPath.get(config, 'self.layout');
        this.asideSelfDisplay = objectPath.get(config, 'aside.self.display');
        this.subheaderDisplay = objectPath.get(config, 'subheader.display');
        this.contentClasses = this.htmlClassService.getClasses('content', true).toString();
        this.contentContainerClasses = this.htmlClassService.getClasses('content_container', true).toString();
        this.contentExtended = objectPath.get(config, 'content.extended');
        // let the layout type change
        var subscription = this.layoutConfigService.onConfigUpdated$.subscribe(function (cfg) {
            setTimeout(function () {
                _this.selfLayout = objectPath.get(cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(subscription);
    };
    /**
     * On destroy
     */
    BaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
        // https://www.npmjs.com/package/ngx-permissions
        this.permissionsService.flushPermissions();
    };
    /**
     * NGX Permissions, init roles
     */
    BaseComponent.prototype.loadRolesWithPermissions = function () {
        var _this = this;
        this.currentUserPermissions$ = this.store.pipe(store_1.select(auth_1.currentUserPermissions));
        var subscription = this.currentUserPermissions$.subscribe(function (res) {
            if (!res || res.length === 0) {
                return;
            }
            _this.permissionsService.flushPermissions();
            res.forEach(function (pm) { return _this.permissionsService.addPermission(pm.name); });
        });
        this.unsubscribe.push(subscription);
    };
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'kt-base',
            templateUrl: './base.component.html',
            styleUrls: ['./base.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
