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
 * Setup off Convas
 */
var OffcanvasDirective = /** @class */ (function () {
    /**
     * Directive Constructor
     * @param el: ElementRef
     */
    function OffcanvasDirective(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    OffcanvasDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.offcanvas = new KTOffcanvas(_this.el.nativeElement, _this.options);
        });
    };
    /**
     * Returns the offCanvas
     */
    OffcanvasDirective.prototype.getOffcanvas = function () {
        return this.offcanvas;
    };
    __decorate([
        core_1.Input()
    ], OffcanvasDirective.prototype, "options", void 0);
    OffcanvasDirective = __decorate([
        core_1.Directive({
            selector: '[ktOffcanvas]',
            exportAs: 'ktOffcanvas',
        })
    ], OffcanvasDirective);
    return OffcanvasDirective;
}());
exports.OffcanvasDirective = OffcanvasDirective;
