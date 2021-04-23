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
var CodePreviewComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function CodePreviewComponent(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CodePreviewComponent.prototype.ngOnInit = function () {
    };
    CodePreviewComponent.prototype.ngAfterViewInit = function () {
        // init code preview examples
        // see /src/assets/js/layout/extended/examples.js
        var elements = this.el.nativeElement.querySelectorAll('.example.example-compact');
        KTLayoutExamples.init(elements);
    };
    __decorate([
        core_1.Input()
    ], CodePreviewComponent.prototype, "viewItem", void 0);
    CodePreviewComponent = __decorate([
        core_1.Component({
            selector: 'kt-code-preview',
            templateUrl: './code-preview.component.html',
            styleUrls: ['./code-preview.component.scss'],
        })
    ], CodePreviewComponent);
    return CodePreviewComponent;
}());
exports.CodePreviewComponent = CodePreviewComponent;
