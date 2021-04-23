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
// Object-Path
var objectPath = require("object-path");
var SubheaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param uiService: HtmlClassService
     */
    function SubheaderComponent(layoutConfigService, uiService) {
        this.layoutConfigService = layoutConfigService;
        this.uiService = uiService;
        // Public properties
        // subheader layout
        this.layout = 'subheader-v1';
        this.width = 'fluid';
        this.clear = false;
        this.displayDesc = false;
        this.displayDaterangepicker = true;
        this.fixed = true;
        this.style = 'solid';
        this.subheaderClasses = '';
        this.subheaderContainerClasses = '';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SubheaderComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        this.layout = objectPath.get(config, 'subheader.layout');
        this.fixed = objectPath.get(config, 'subheader.fixed');
        this.clear = objectPath.get(config, 'subheader.clear');
        this.style = objectPath.get(config, 'subheader.style');
        this.displayDesc = objectPath.get(config, 'subheader.displayDesc');
        this.displayDaterangepicker = objectPath.get(config, 'subheader.displayDaterangepicker');
        this.subheaderClasses = this.uiService.getClasses('subheader', true).toString();
        this.subheaderContainerClasses = this.uiService.getClasses('subheader_container', true).toString();
    };
    SubheaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-subheader',
            templateUrl: './subheader.component.html',
        })
    ], SubheaderComponent);
    return SubheaderComponent;
}());
exports.SubheaderComponent = SubheaderComponent;
