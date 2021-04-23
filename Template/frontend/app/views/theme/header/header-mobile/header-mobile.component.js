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
var HeaderMobileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function HeaderMobileComponent(layoutConfigService, uiService) {
        this.layoutConfigService = layoutConfigService;
        this.uiService = uiService;
        // Public properties
        this.headerLogo = '';
        this.asideSelfDisplay = true;
        this.headerMenuSelfDisplay = true;
        this.headerMobileClasses = '';
        this.toggleOptions = {
            target: KTUtil.getBody(),
            targetState: 'topbar-mobile-on',
            toggleState: 'active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderMobileComponent.prototype.ngOnInit = function () {
        this.headerMobileClasses = this.uiService.getClasses('header_mobile', true).toString();
        this.headerLogo = this.getLogoUrl();
        this.asideSelfDisplay = this.layoutConfigService.getConfig('aside.self.display');
        this.headerMenuSelfDisplay = this.layoutConfigService.getConfig('header.menu.self.display');
    };
    HeaderMobileComponent.prototype.getLogoUrl = function () {
        var headerSelfTheme = this.layoutConfigService.getConfig('header.self.theme') || '';
        var brandSelfTheme = this.layoutConfigService.getConfig('brand.self.theme') || '';
        var result = 'logo-light.png';
        if (!this.asideSelfDisplay) {
            if (headerSelfTheme === 'light') {
                result = 'logo-dark.png';
            }
        }
        else {
            if (brandSelfTheme === 'light') {
                result = 'logo-dark.png';
            }
        }
        return "./assets/media/logos/" + result;
    };
    HeaderMobileComponent = __decorate([
        core_1.Component({
            selector: 'kt-header-mobile',
            templateUrl: './header-mobile.component.html',
            styleUrls: ['./header-mobile.component.scss'],
        })
    ], HeaderMobileComponent);
    return HeaderMobileComponent;
}());
exports.HeaderMobileComponent = HeaderMobileComponent;
