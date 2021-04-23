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
// RxJS
var operators_1 = require("rxjs/operators");
// Object-Path
var objectPath = require("object-path");
var MenuHorizontalComponent = /** @class */ (function () {
    /**
     * Component Conctructor
     *
     * @param el: ElementRef
     * @param htmlClassService: HtmlClassService
     * @param menuHorService: MenuHorService
     * @param menuConfigService: MenuConfigService
     * @param layoutConfigService: LayouConfigService
     * @param router: Router
     * @param render: Renderer2
     * @param cdr: ChangeDetectorRef
     */
    function MenuHorizontalComponent(el, htmlClassService, menuHorService, menuConfigService, layoutConfigService, router, render, cdr) {
        this.el = el;
        this.htmlClassService = htmlClassService;
        this.menuHorService = menuHorService;
        this.menuConfigService = menuConfigService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        // Public properties
        this.currentRouteUrl = '';
        this.asideSelfDisplay = '';
        this.menuOptions = {
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            accordion: {
                slideSpeed: 200,
                expandAll: false // allow having multiple expanded accordions in the menu
            },
            dropdown: {
                timeout: 50
            }
        };
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'header-menu-wrapper',
            closeBy: 'kt_header_menu_mobile_close_btn',
            toggleBy: {
                target: 'kt_header_mobile_toggle',
                state: 'mobile-toggle-active'
            }
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    MenuHorizontalComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * On init
     */
    MenuHorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rootArrowEnabled = this.layoutConfigService.getConfig('header.menu.self.rootArrow');
        this.currentRouteUrl = this.router.url;
        setTimeout(function () {
            _this.offcanvas = new KTOffcanvas(_this.headerMenuOffcanvas.nativeElement, _this.offcanvasOptions);
        });
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            _this.currentRouteUrl = _this.router.url;
            _this.mobileMenuClose();
            _this.cdr.markForCheck();
        });
    };
    /**
     * Return Css Class Name
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemCssClasses = function (item) {
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
        if (objectPath.get(item, 'resizer')) {
            classes += ' menu-item-resize';
        }
        var menuType = objectPath.get(item, 'submenu.type') || 'classic';
        if ((objectPath.get(item, 'root') && menuType === 'classic')
            || parseInt(objectPath.get(item, 'submenu.width'), 10) > 0) {
            classes += ' menu-item-rel';
        }
        var customClass = objectPath.get(item, 'custom-class');
        if (customClass) {
            classes += ' ' + customClass;
        }
        if (objectPath.get(item, 'icon-only')) {
            classes += ' menu-item-icon-only';
        }
        return classes;
    };
    /**
     * Returns Attribute SubMenu Toggle
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemAttrSubmenuToggle = function (item) {
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
    /**
     * Returns Submenu CSS Class Name
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemMenuSubmenuClass = function (item) {
        var classes = '';
        var alignment = objectPath.get(item, 'alignment') || 'right';
        if (alignment) {
            classes += ' menu-submenu-' + alignment;
        }
        var type = objectPath.get(item, 'type') || 'classic';
        if (type === 'classic') {
            classes += ' menu-submenu-classic';
        }
        if (type === 'tabs') {
            classes += ' menu-submenu-tabs';
        }
        if (type === 'mega') {
            if (objectPath.get(item, 'width')) {
                classes += ' menu-submenu-fixed';
            }
        }
        if (objectPath.get(item, 'pull')) {
            classes += ' menu-submenu-pull';
        }
        return classes;
    };
    /**
     * Check Menu is active
     * @param item: any
     */
    MenuHorizontalComponent.prototype.isMenuItemIsActive = function (item) {
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
    MenuHorizontalComponent.prototype.isMenuRootItemIsActive = function (item) {
        if (item.submenu.items) {
            for (var _i = 0, _a = item.submenu.items; _i < _a.length; _i++) {
                var subItem = _a[_i];
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (item.submenu.columns) {
            for (var _b = 0, _c = item.submenu.columns; _b < _c.length; _b++) {
                var subItem = _c[_b];
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (typeof item.submenu[Symbol.iterator] === 'function') {
            for (var _d = 0, _e = item.submenu; _d < _e.length; _d++) {
                var subItem = _e[_d];
                var active = this.isMenuItemIsActive(subItem);
                if (active) {
                    return true;
                }
            }
        }
        return false;
    };
    MenuHorizontalComponent.prototype.mobileMenuClose = function () {
        if (KTUtil.isBreakpointDown('lg') && this.offcanvas) { // Tablet and mobile mode
            this.offcanvas.hide(); // Hide offcanvas after general link click
        }
    };
    __decorate([
        core_1.ViewChild('headerMenuOffcanvas', { static: true })
    ], MenuHorizontalComponent.prototype, "headerMenuOffcanvas", void 0);
    __decorate([
        core_1.Input()
    ], MenuHorizontalComponent.prototype, "headerLogo", void 0);
    __decorate([
        core_1.Input()
    ], MenuHorizontalComponent.prototype, "headerMenuSelfDisplay", void 0);
    __decorate([
        core_1.Input()
    ], MenuHorizontalComponent.prototype, "headerMenuClasses", void 0);
    MenuHorizontalComponent = __decorate([
        core_1.Component({
            selector: 'kt-menu-horizontal',
            templateUrl: './menu-horizontal.component.html',
            styleUrls: ['./menu-horizontal.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], MenuHorizontalComponent);
    return MenuHorizontalComponent;
}());
exports.MenuHorizontalComponent = MenuHorizontalComponent;
