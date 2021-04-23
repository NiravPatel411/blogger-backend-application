"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicPagination = {
    beforeCodeTitle: 'Basic pagination',
    htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Default pagination:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    No direction links:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n  <div class=\"example-preview\">\n    <span>\n      With boundary links:\n    </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n   <div>\n     <pre>Current page: {{page}}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-basic',\n    templateUrl: './pagination-basic.html'\n})\nexport class NgbdPaginationBasic {\n    page = 4;\n}\n\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var advancedPagination = {
    beforeCodeTitle: 'Advanced pagination',
    htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Restricted size, no rotation:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    Restricted size with rotation:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    Restricted size with rotation and no ellipses:\n  </span>\n  <div>\n\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\"\n      [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n  <div class=\"example-preview\">\n    <div>\n      <pre>Current page: {{page2}}</pre>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-advanced',\n    templateUrl: './pagination-advanced.html'\n})\nexport class NgbdPaginationAdvanced {\n    page = 1;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var paginationSize = {
    beforeCodeTitle: 'Pagination size',
    htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-size',\n    templateUrl: './pagination-size.html'\n})\nexport class NgbdPaginationSize {\n    currentPage = 3;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var paginationAlignment = {
    beforeCodeTitle: 'Pagination alignment',
    htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Change the alignment of pagination components with flexbox utilities\n  </span>\n  <div>\n    <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n    <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n  </div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-justify',\n    templateUrl: './pagination-justify.html'\n})\nexport class NgbdPaginationJustify {\n    page = 4;\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var disabledPagination = {
    beforeCodeTitle: 'Disabled pagination',
    htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Pagination control can be disabled:</span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page4\" [disabled]='isDisabled'></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"toggleDisabled()\">\n      Toggle disabled\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-pagination-disabled',\n    templateUrl: './pagination-disabled.html'\n})\nexport class NgbdPaginationDisabled {\n    page = 3;\n    isDisabled = true;\n\n    toggleDisabled() {\n        this.isDisabled = !this.isDisabled;\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var globalConfiguration = {
    beforeCodeTitle: 'Global configuration',
    htmlCode: "\n<div class=\"example-preview\">\n  <h3>Self closing</h3>\n  <span>\n\tThis pagination uses custom default values\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page5\" [size]=\"'sm'\" [boundaryLinks]=\"'true'\"></ngb-pagination>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-pagination-config',\n    templateUrl: './pagination-config.html',\n    providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers\n})\nexport class NgbdPaginationConfig {\n    page = 4;\n\n    constructor(config: NgbPaginationConfig) {\n        // customize default values of paginations used by this component tree\n        config.size = 'sm';\n        config.boundaryLinks = true;\n    }\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(config) {
        this.exampleBasicPagination = basicPagination;
        this.exampleAdvancedPagination = advancedPagination;
        this.examplePaginationSize = paginationSize;
        this.examplePaginationAlignment = paginationAlignment;
        this.exampleDisabledPagination = disabledPagination;
        this.exampleGlobalConfiguration = globalConfiguration;
        this.page = 4;
        this.page2 = 1;
        this.page3 = 4;
        this.currentPage = 3;
        this.page4 = 3;
        this.isDisabled = true;
        this.page5 = 4;
        // customize default values of paginations used by this component tree
        // config.size = 'sm';
        // config.boundaryLinks = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'kt-pagination',
            templateUrl: './pagination.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
