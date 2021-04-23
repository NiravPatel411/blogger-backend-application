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
var Widget9RecentActivitiesComponent = /** @class */ (function () {
    function Widget9RecentActivitiesComponent() {
        this.cssClasses = '';
    }
    __decorate([
        core_1.Input()
    ], Widget9RecentActivitiesComponent.prototype, "cssClasses", void 0);
    Widget9RecentActivitiesComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget9-recent-activities',
            templateUrl: './widget9-recent-activities.component.html'
        })
    ], Widget9RecentActivitiesComponent);
    return Widget9RecentActivitiesComponent;
}());
exports.Widget9RecentActivitiesComponent = Widget9RecentActivitiesComponent;
