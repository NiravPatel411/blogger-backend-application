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
var Widget1TasksOverviewComponent = /** @class */ (function () {
    function Widget1TasksOverviewComponent() {
        this.cssClasses = '';
    }
    __decorate([
        core_1.Input()
    ], Widget1TasksOverviewComponent.prototype, "cssClasses", void 0);
    Widget1TasksOverviewComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget1-tasks-overview',
            templateUrl: './widget1-tasks-overview.component.html'
        })
    ], Widget1TasksOverviewComponent);
    return Widget1TasksOverviewComponent;
}());
exports.Widget1TasksOverviewComponent = Widget1TasksOverviewComponent;