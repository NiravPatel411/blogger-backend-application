"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = require("../../../../../core/_base/layout");
// Angular
var core_1 = require("@angular/core");
var PortletHeaderComponent = /** @class */ (function () {
    function PortletHeaderComponent(el, platformId, ktDialogService) {
        this.el = el;
        this.platformId = platformId;
        this.ktDialogService = ktDialogService;
        this.viewLoading = false;
        this.classes = 'card-header';
        this.lastScrollTop = 0;
        this.subscriptions = [];
        this.isScrollDown = false;
        this.stickyDirective = new layout_1.StickyDirective(this.el, this.platformId);
    }
    PortletHeaderComponent.prototype.onResize = function () {
        this.updateStickyPosition();
    };
    PortletHeaderComponent.prototype.onScroll = function () {
        this.updateStickyPosition();
        var st = window.pageYOffset || document.documentElement.scrollTop;
        this.isScrollDown = st > this.lastScrollTop;
        this.lastScrollTop = st <= 0 ? 0 : st;
    };
    PortletHeaderComponent.prototype.updateStickyPosition = function () {
        var _this = this;
        if (this.sticky) {
            Promise.resolve(null).then(function () {
                // get boundary top margin for sticky header
                var headerElement = document.querySelector('.header');
                var subheaderElement = document.querySelector('.subheader');
                var headerMobileElement = document.querySelector('.header-mobile');
                var height = 0;
                if (headerElement != null) {
                    // mobile header
                    if (window.getComputedStyle(headerElement).height === '0px') {
                        height += headerMobileElement.offsetHeight;
                    }
                    else {
                        // desktop header
                        if (document.body.classList.contains('header-minimize-topbar')) {
                            // hardcoded minimized header height
                            height = 60;
                        }
                        else {
                            // normal fixed header
                            if (document.body.classList.contains('header-fixed')) {
                                height += headerElement.offsetHeight;
                            }
                            if (document.body.classList.contains('subheader-fixed')) {
                                height += subheaderElement.offsetHeight;
                            }
                        }
                    }
                }
                _this.stickyDirective.marginTop = height;
            });
        }
    };
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PortletHeaderComponent.prototype.ngOnInit = function () {
        if (this.sticky) {
            this.stickyDirective.ngOnInit();
        }
    };
    PortletHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // append custom class
        this.classes += this.class ? ' ' + this.class : '';
        // hide icon's parent node if no icon provided
        this.hideIcon = this.refIcon.nativeElement.children.length === 0;
        // hide tools' parent node if no tools template is provided
        this.hideTools = this.refTools.nativeElement.children.length === 0;
        if (this.sticky) {
            this.updateStickyPosition();
            this.stickyDirective.ngAfterViewInit();
        }
        // initialize loading dialog
        if (this.viewLoading$) {
            var loadingSubscription = this.viewLoading$.subscribe(function (res) { return _this.toggleLoading(res); });
            this.subscriptions.push(loadingSubscription);
        }
    };
    PortletHeaderComponent.prototype.toggleLoading = function (_incomingValue) {
        this.viewLoading = _incomingValue;
        if (_incomingValue && !this.ktDialogService.checkIsShown()) {
            this.ktDialogService.show();
        }
        if (!this.viewLoading && this.ktDialogService.checkIsShown()) {
            this.ktDialogService.hide();
        }
    };
    PortletHeaderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
        if (this.sticky) {
            this.stickyDirective.ngOnDestroy();
        }
    };
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "noTitle", void 0);
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "sticky", void 0);
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "viewLoading$", void 0);
    __decorate([
        core_1.HostBinding('class')
    ], PortletHeaderComponent.prototype, "classes", void 0);
    __decorate([
        core_1.HostBinding('attr.ktSticky')
    ], PortletHeaderComponent.prototype, "stickyDirective", void 0);
    __decorate([
        core_1.ViewChild('refIcon', { static: true })
    ], PortletHeaderComponent.prototype, "refIcon", void 0);
    __decorate([
        core_1.ViewChild('refTools', { static: true })
    ], PortletHeaderComponent.prototype, "refTools", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], PortletHeaderComponent.prototype, "onResize", null);
    __decorate([
        core_1.HostListener('window:scroll', ['$event'])
    ], PortletHeaderComponent.prototype, "onScroll", null);
    PortletHeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-portlet-header',
            styleUrls: ['portlet-header.component.scss'],
            template: "\n\t\t<div class=\"card-title\" [hidden]=\"noTitle\">\n\t\t\t<span class=\"card-icon\" #refIcon [hidden]=\"hideIcon || !icon\">\n\t\t\t\t<ng-content *ngIf=\"!icon\" select=\"[ktPortletIcon]\"></ng-content>\n\t\t\t\t<i *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n\t\t\t</span>\n\t\t\t<ng-content *ngIf=\"!title\" select=\"[ktPortletTitle]\"></ng-content>\n\t\t\t<h3 *ngIf=\"title\" class=\"card-label\" [innerHTML]=\"title\"></h3>\n\t\t</div>\n\t\t<div class=\"card-toolbar\" #refTools [hidden]=\"hideTools\">\n\t\t\t<ng-content select=\"[ktPortletTools]\"></ng-content>\n\t\t</div>"
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID))
    ], PortletHeaderComponent);
    return PortletHeaderComponent;
}());
exports.PortletHeaderComponent = PortletHeaderComponent;
