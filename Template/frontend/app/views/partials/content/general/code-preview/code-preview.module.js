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
var common_1 = require("@angular/common");
var ngx_clipboard_1 = require("ngx-clipboard");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Perfect ScrollBar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var code_preview_component_1 = require("./code-preview.component");
// Core Module
var core_module_1 = require("../../../../../core/core.module");
// Highlight JS
var ngx_highlightjs_1 = require("ngx-highlightjs");
var CodePreviewModule = /** @class */ (function () {
    function CodePreviewModule() {
    }
    CodePreviewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_module_1.CoreModule,
                ngx_highlightjs_1.HighlightModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ngx_clipboard_1.ClipboardModule,
                // ngbootstrap
                ng_bootstrap_1.NgbTabsetModule,
                ng_bootstrap_1.NgbTooltipModule,
            ],
            exports: [code_preview_component_1.CodePreviewComponent],
            declarations: [code_preview_component_1.CodePreviewComponent]
        })
    ], CodePreviewModule);
    return CodePreviewModule;
}());
exports.CodePreviewModule = CodePreviewModule;
