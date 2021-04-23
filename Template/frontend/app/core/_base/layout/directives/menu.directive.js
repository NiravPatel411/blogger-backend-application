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
/**
 * Configure menu
 */
var MenuDirective = /** @class */ (function () {
    /**
     * Directive Constructor
     * @param el: ElementRef
     */
    function MenuDirective(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    MenuDirective.prototype.ngAfterViewInit = function () {
        this.setupOptions();
        this.menu = new KTMenu(this.el.nativeElement, this.options);
    };
    /**
     * Return the menu
     */
    MenuDirective.prototype.getMenu = function () {
        return this.menu;
    };
    /**
     * Setup menu options
     */
    MenuDirective.prototype.setupOptions = function () {
        // init aside menu
        var menuDesktopMode = 'accordion';
        if (this.el.nativeElement.getAttribute('data-menu-dropdown') === '1') {
            menuDesktopMode = 'dropdown';
        }
        if (typeof objectPath.get(this.options, 'submenu.desktop') === 'object') {
            objectPath.set(this.options, 'submenu.desktop', menuDesktopMode);
        }
    };
    __decorate([
        core_1.Input()
    ], MenuDirective.prototype, "options", void 0);
    MenuDirective = __decorate([
        core_1.Directive({
            selector: '[ktMenu]',
            exportAs: 'ktMenu',
        })
    ], MenuDirective);
    return MenuDirective;
}());
exports.MenuDirective = MenuDirective;
