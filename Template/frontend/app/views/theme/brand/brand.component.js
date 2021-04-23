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
var BrandComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     */
    function BrandComponent(layoutConfigService, htmlClassService) {
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
        // Public properties
        this.headerLogo = '';
        this.brandClasses = '';
        this.asideSelfMinimizeToggle = true;
        this.toggleOptions = {
            target: 'kt_body',
            targetState: 'aside-minimize',
            toggleState: 'active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BrandComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.getAsideLogo();
        this.brandClasses = this.htmlClassService.getClasses('brand', true).toString();
        this.asideSelfMinimizeToggle = this.layoutConfigService.getConfig('aside.self.minimize.toggle');
    };
    /**
     * On after view init
     */
    BrandComponent.prototype.ngAfterViewInit = function () {
    };
    BrandComponent.prototype.getAsideLogo = function () {
        var result = 'logo-light.png';
        var brandSelfTheme = this.layoutConfigService.getConfig('brand.self.theme') || '';
        if (brandSelfTheme === 'light') {
            result = 'logo-dark.png';
        }
        return "./assets/media/logos/" + result;
    };
    BrandComponent.prototype.toggleAsideClick = function () {
        document.body.classList.toggle('aside-minimize');
    };
    BrandComponent = __decorate([
        core_1.Component({
            selector: 'kt-brand',
            templateUrl: './brand.component.html',
        })
    ], BrandComponent);
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;
