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
// Portlet
var portlet_body_component_1 = require("./portlet-body.component");
var portlet_header_component_1 = require("./portlet-header.component");
var portlet_footer_component_1 = require("./portlet-footer.component");
var PortletComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el: ElementRef
     * @param loader: LoadingBarService
     * @param layoutConfigService: LayoutConfigService
     */
    function PortletComponent(el, loader, layoutConfigService) {
        this.el = el;
        this.loader = loader;
        this.layoutConfigService = layoutConfigService;
        this.loader.complete();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PortletComponent.prototype.ngOnInit = function () {
    };
    /**
     * After view init
     */
    PortletComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input()
    ], PortletComponent.prototype, "loading$", void 0);
    __decorate([
        core_1.Input()
    ], PortletComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input()
    ], PortletComponent.prototype, "class", void 0);
    __decorate([
        core_1.ViewChild('portlet', { static: true })
    ], PortletComponent.prototype, "portlet", void 0);
    __decorate([
        core_1.ViewChild(portlet_header_component_1.PortletHeaderComponent, { static: true })
    ], PortletComponent.prototype, "header", void 0);
    __decorate([
        core_1.ViewChild(portlet_body_component_1.PortletBodyComponent, { static: true })
    ], PortletComponent.prototype, "body", void 0);
    __decorate([
        core_1.ViewChild(portlet_footer_component_1.PortletFooterComponent, { static: true })
    ], PortletComponent.prototype, "footer", void 0);
    PortletComponent = __decorate([
        core_1.Component({
            selector: 'kt-portlet',
            templateUrl: './portlet.component.html',
            exportAs: 'ktPortlet'
        })
    ], PortletComponent);
    return PortletComponent;
}());
exports.PortletComponent = PortletComponent;
