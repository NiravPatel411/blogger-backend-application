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
/**
 * Scroll to top
 */
var ScrollTopDirective = /** @class */ (function () {
    /**
     * Directive Constructor
     * @param el: ElementRef
     */
    function ScrollTopDirective(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ScrollTopDirective.prototype.ngAfterViewInit = function () {
        this.scrollTop = new KTScrolltop(this.el.nativeElement, this.options);
    };
    /**
     * Returns ScrollTop
     */
    ScrollTopDirective.prototype.getScrollTop = function () {
        return this.scrollTop;
    };
    __decorate([
        core_1.Input()
    ], ScrollTopDirective.prototype, "options", void 0);
    ScrollTopDirective = __decorate([
        core_1.Directive({
            selector: '[ktScrollTop]'
        })
    ], ScrollTopDirective);
    return ScrollTopDirective;
}());
exports.ScrollTopDirective = ScrollTopDirective;
