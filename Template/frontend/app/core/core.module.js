"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Anglar
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Layout Directives
// Services
var layout_1 = require("./_base/layout");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                // directives
                layout_1.ScrollTopDirective,
                layout_1.HeaderDirective,
                layout_1.OffcanvasDirective,
                layout_1.ToggleDirective,
                layout_1.MenuDirective,
                layout_1.TabClickEventDirective,
                layout_1.SparklineChartDirective,
                layout_1.ContentAnimateDirective,
                layout_1.StickyDirective,
                // pipes
                layout_1.TimeElapsedPipe,
                layout_1.JoinPipe,
                layout_1.GetObjectPipe,
                layout_1.SafePipe,
                layout_1.FirstLetterPipe,
            ],
            exports: [
                // directives
                layout_1.ScrollTopDirective,
                layout_1.HeaderDirective,
                layout_1.OffcanvasDirective,
                layout_1.ToggleDirective,
                layout_1.MenuDirective,
                layout_1.TabClickEventDirective,
                layout_1.SparklineChartDirective,
                layout_1.ContentAnimateDirective,
                layout_1.StickyDirective,
                // pipes
                layout_1.TimeElapsedPipe,
                layout_1.JoinPipe,
                layout_1.GetObjectPipe,
                layout_1.SafePipe,
                layout_1.FirstLetterPipe,
            ],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
