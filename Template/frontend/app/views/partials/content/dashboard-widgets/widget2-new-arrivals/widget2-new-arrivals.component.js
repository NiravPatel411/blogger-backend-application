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
var Widget2NewArrivalsComponent = /** @class */ (function () {
    function Widget2NewArrivalsComponent() {
        this.cssClasses = '';
        this.currentTab = 'Day';
    }
    Widget2NewArrivalsComponent.prototype.setCurrentTab = function (tab) {
        this.currentTab = tab;
    };
    __decorate([
        core_1.Input()
    ], Widget2NewArrivalsComponent.prototype, "cssClasses", void 0);
    Widget2NewArrivalsComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget2-new-arrivals',
            templateUrl: './widget2-new-arrivals.component.html',
        })
    ], Widget2NewArrivalsComponent);
    return Widget2NewArrivalsComponent;
}());
exports.Widget2NewArrivalsComponent = Widget2NewArrivalsComponent;
