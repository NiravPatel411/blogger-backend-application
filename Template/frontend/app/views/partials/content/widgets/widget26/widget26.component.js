"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Widget26Component = /** @class */ (function () {
    function Widget26Component() {
    }
    Widget26Component.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], Widget26Component.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], Widget26Component.prototype, "desc", void 0);
    __decorate([
        core_1.Input()
    ], Widget26Component.prototype, "options", void 0);
    Widget26Component = __decorate([
        core_1.Component({
            selector: 'kt-widget26',
            templateUrl: './widget26.component.html',
            styleUrls: ['./widget26.component.scss']
        })
    ], Widget26Component);
    return Widget26Component;
}());
exports.Widget26Component = Widget26Component;
