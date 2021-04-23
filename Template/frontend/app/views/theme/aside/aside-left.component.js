"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var objectPath = require("object-path");
var AsideLeftComponent = /** @class */ (function () {
    /**
     * Component Constructor
     *
     * param htmlClassService: HtmlClassService
     * param menuAsideService
     * param layoutConfigService: LayoutConfigService
     * param router: Router
     * param render: Renderer2
     * param cdr: ChangeDetectorRef
     */
    function AsideLeftComponent(htmlClassService, menuAsideService, layoutConfigService, router, render, cdr) {
        this.htmlClassService = htmlClassService;
        this.menuAsideService = menuAsideService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.asideLogo = '';
        this.asideClasses = '';
        this.currentRouteUrl = '';
        this.menuCanvasOptions = {
            baseClass: 'aside',
            overlay: true,
            closeBy: 'kt_aside_close_btn',
            toggleBy: {
                target: 'kt_aside_mobile_toggle',
                state: 'mobile-toggle-active'
            }
        };
        this.menuOptions = {
            // submenu setup
            submenu: {
                desktop: {
                    // by default the menu mode set to accordion in desktop mode
                    default: 'dropdown',
                },
                tablet: 'accordion',
                mobile: 'accordion' // menu set to accordion in mobile mode
            },
            // accordion setup
            accordion: {
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        };
    }
    AsideLeftComponent.prototype.ngAfterViewInit = function () {
    };
    AsideLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            _this.currentRouteUrl = _this.router.url.split(/[?#]/)[0];
            _this.mobileMenuClose();
            _this.cdr.markForCheck();
        });
        var config = this.layoutConfigService.getConfig();
        if (objectPath.get(config, 'aside.menu.dropdown')) {
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown', '1');
            // tslint:disable-next-line:max-line-length
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown-timeout', objectPath.get(config, 'aside.menu.submenu.dropdown.hover-timeout'));
        }
        this.asideClasses = this.htmlClassService.getClasses('aside', true).toString();
        this.asideLogo = this.getAsideLogo();
        setTimeout(function () {
            _this.offcanvas = new KTOffcanvas(_this.asideMenuOffcanvas.nativeElement, _this.menuCanvasOptions);
        });
    };
    AsideLeftComponent.prototype.getAsideLogo = function () {
        var result = 'logo-light.png';
        var brandSelfTheme = this.layoutConfigService.getConfig('brand.self.theme') || '';
        if (brandSelfTheme === 'light') {
            result = 'logo-dark.png';
        }
        return "./assets/media/logos/" + result;
    };
    /**
     * Check Menu is active
     * @param item: any
     */
    AsideLeftComponent.prototype.isMenuItemIsActive = function (item) {
        if (item.submenu) {
            return this.isMenuRootItemIsActive(item);
        }
        if (!item.page) {
            return false;
        }
        return this.currentRouteUrl.indexOf(item.page) !== -1;
    };
    /**
     * Check Menu Root Item is active
     * @param item: any
     */
    AsideLeftComponent.prototype.isMenuRootItemIsActive = function (item) {
        var result = false;
        for (var _i = 0, _a = item.submenu; _i < _a.length; _i++) {
            var subItem = _a[_i];
            result = this.isMenuItemIsActive(subItem);
            if (result) {
                return true;
            }
        }
        return false;
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    AsideLeftComponent.prototype.mouseEnter = function (e) {
        var _this = this;
        // check if the left aside menu is fixed
        if (document.body.classList.contains('aside-fixed')) {
            if (this.outsideTm) {
                clearTimeout(this.outsideTm);
                this.outsideTm = null;
            }
            this.insideTm = setTimeout(function () {
                // if the left aside menu is minimized
                if (document.body.classList.contains('aside-minimize') && KTUtil.isInResponsiveRange('desktop')) {
                    // show the left aside menu
                    _this.render.removeClass(document.body, 'aside-minimize');
                    _this.render.addClass(document.body, 'aside-minimize-hover');
                }
            }, 50);
        }
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    AsideLeftComponent.prototype.mouseLeave = function (e) {
        var _this = this;
        if (document.body.classList.contains('aside-fixed')) {
            if (this.insideTm) {
                clearTimeout(this.insideTm);
                this.insideTm = null;
            }
            this.outsideTm = setTimeout(function () {
                // if the left aside menu is expand
                if (document.body.classList.contains('aside-minimize-hover') && KTUtil.isInResponsiveRange('desktop')) {
                    // hide back the left aside menu
                    _this.render.removeClass(document.body, 'aside-minimize-hover');
                    _this.render.addClass(document.body, 'aside-minimize');
                }
            }, 100);
        }
    };
    /**
     * Returns Submenu CSS Class Name
     * @param item: any
     */
    AsideLeftComponent.prototype.getItemCssClasses = function (item) {
        var classes = 'menu-item';
        if (objectPath.get(item, 'submenu')) {
            classes += ' menu-item-submenu';
        }
        if (!item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' menu-item-active menu-item-here';
        }
        if (item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' menu-item-open menu-item-here';
        }
        // custom class for menu item
        var customClass = objectPath.get(item, 'custom-class');
        if (customClass) {
            classes += ' ' + customClass;
        }
        if (objectPath.get(item, 'icon-only')) {
            classes += ' menu-item-icon-only';
        }
        return classes;
    };
    AsideLeftComponent.prototype.getItemAttrSubmenuToggle = function (item) {
        var toggle = 'hover';
        if (objectPath.get(item, 'toggle') === 'click') {
            toggle = 'click';
        }
        else if (objectPath.get(item, 'submenu.type') === 'tabs') {
            toggle = 'tabs';
        }
        else {
            // submenu toggle default to 'hover'
        }
        return toggle;
    };
    AsideLeftComponent.prototype.mobileMenuClose = function () {
        if (KTUtil.isBreakpointDown('lg') && this.offcanvas) { // Tablet and mobile mode
            this.offcanvas.hide(); // Hide offcanvas after general link click
        }
    };
    __decorate([
        core_1.ViewChild('asideMenuOffcanvas', { static: true })
    ], AsideLeftComponent.prototype, "asideMenuOffcanvas", void 0);
    __decorate([
        core_1.ViewChild('asideMenu', { static: true })
    ], AsideLeftComponent.prototype, "asideMenu", void 0);
    AsideLeftComponent = __decorate([
        core_1.Component({
            selector: 'kt-aside-left',
            templateUrl: './aside-left.component.html',
            styleUrls: ['./aside-left.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], AsideLeftComponent);
    return AsideLeftComponent;
}());
exports.AsideLeftComponent = AsideLeftComponent;
