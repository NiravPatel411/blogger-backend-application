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
var QuickActionComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function QuickActionComponent() {
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-gear';
        // Set skin color, default to light
        this.skin = 'light';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    QuickActionComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * On init
     */
    QuickActionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], QuickActionComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], QuickActionComponent.prototype, "useSVG", void 0);
    __decorate([
        core_1.Input()
    ], QuickActionComponent.prototype, "bgImage", void 0);
    __decorate([
        core_1.Input()
    ], QuickActionComponent.prototype, "skin", void 0);
    QuickActionComponent = __decorate([
        core_1.Component({
            selector: 'kt-quick-action',
            templateUrl: './quick-action.component.html',
        })
    ], QuickActionComponent);
    return QuickActionComponent;
}());
exports.QuickActionComponent = QuickActionComponent;
