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
var router_1 = require("@angular/router");
var HeaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param router: Router
     * @param layoutRefService: LayoutRefService
     * @param layoutConfigService: LayoutConfigService
     * @param loader: LoadingBarService
     * @param htmlClassService: HtmlClassService
     */
    function HeaderComponent(router, layoutRefService, layoutConfigService, loader, htmlClassService) {
        var _this = this;
        this.router = router;
        this.layoutRefService = layoutRefService;
        this.layoutConfigService = layoutConfigService;
        this.loader = loader;
        this.htmlClassService = htmlClassService;
        // Public properties
        this.headerClasses = '';
        this.headerContainerClasses = '';
        this.headerMenuClasses = '';
        this.headerLogo = '';
        this.headerAttributes = {};
        this.headerMenuSelfDisplay = true;
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof router_1.RouteConfigLoadStart) {
                _this.loader.increment(35);
            }
            if (event instanceof router_1.RouteConfigLoadEnd) {
                _this.loader.increment(75);
            }
            if (event instanceof router_1.NavigationEnd || event instanceof router_1.NavigationCancel) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
            }
        });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderComponent.prototype.ngOnInit = function () {
        this.headerClasses = this.htmlClassService.getClasses('header', true).toString();
        this.headerAttributes = this.htmlClassService.getAttributes('header');
        this.headerLogo = this.getLogo();
        this.headerMenuSelfDisplay = this.layoutConfigService.getConfig('header.menu.self.display');
        this.headerContainerClasses = this.htmlClassService.getClasses('header_container', true).toString();
        this.headerMenuClasses = this.htmlClassService.getClasses('header_menu', true).toString();
        // header width fluid
        // animate the header minimize the height on scroll down. to be removed, not applicable for default demo
        /*if (objectPath.get(config, 'header.self.fixed.desktop.enabled') || objectPath.get(config, 'header.self.fixed.desktop')) {
          // header minimize on scroll down
          this.ktHeader.nativeElement.setAttribute('data-ktheader-minimize', '1');
        }*/
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // keep header element in the service
        this.layoutRefService.addElement('header', this.ktHeader.nativeElement);
    };
    HeaderComponent.prototype.getLogo = function () {
        var result = 'logo-light.png';
        var headerSelfTheme = this.layoutConfigService.getConfig('header.self.theme') || '';
        if (headerSelfTheme === 'light') {
            result = 'logo-dark.png';
        }
        else {
            if (headerSelfTheme === 'dark') {
                result = 'logo-light.png';
            }
        }
        return "./assets/media/logos/" + result;
    };
    __decorate([
        core_1.ViewChild('ktHeader', { static: true })
    ], HeaderComponent.prototype, "ktHeader", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
