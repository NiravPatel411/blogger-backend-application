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
var Widget8TrendsComponent = /** @class */ (function () {
    function Widget8TrendsComponent() {
        this.cssClasses = '';
    }
    __decorate([
        core_1.Input()
    ], Widget8TrendsComponent.prototype, "cssClasses", void 0);
    Widget8TrendsComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget8-trends',
            templateUrl: './widget8-trends.component.html'
        })
    ], Widget8TrendsComponent);
    return Widget8TrendsComponent;
}());
exports.Widget8TrendsComponent = Widget8TrendsComponent;
