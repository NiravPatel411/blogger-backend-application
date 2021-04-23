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
var CartComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function CartComponent() {
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-shopping-cart-1';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    CartComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * On init
     */
    CartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], CartComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], CartComponent.prototype, "iconType", void 0);
    __decorate([
        core_1.Input()
    ], CartComponent.prototype, "useSVG", void 0);
    __decorate([
        core_1.Input()
    ], CartComponent.prototype, "bgImage", void 0);
    CartComponent = __decorate([
        core_1.Component({
            selector: 'kt-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
