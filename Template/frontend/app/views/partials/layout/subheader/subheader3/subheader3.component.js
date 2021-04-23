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
var Subheader3Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param subheaderService: SubheaderService
     */
    function Subheader3Component(subheaderService) {
        this.subheaderService = subheaderService;
        // Public properties
        this.fixed = true;
        this.clear = false;
        this.width = 'fluid';
        this.subheaderClasses = '';
        this.subheaderContainerClasses = '';
        this.displayDesc = false;
        this.displayDaterangepicker = true;
        this.today = Date.now();
        this.title = '';
        this.desc = '';
        this.breadcrumbs = [];
        // Private properties
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Subheader3Component.prototype.ngOnInit = function () {
    };
    /**
     * After view init
     */
    Subheader3Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriptions.push(this.subheaderService.title$.subscribe(function (bt) {
            // breadcrumbs title sometimes can be undefined
            if (bt) {
                Promise.resolve(null).then(function () {
                    _this.title = bt.title;
                    _this.desc = bt.desc;
                });
            }
        }));
        this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(function (bc) {
            Promise.resolve(null).then(function () {
                _this.breadcrumbs = bc;
            });
        }));
    };
    /**
     * On destroy
     */
    Subheader3Component.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "fixed", void 0);
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "clear", void 0);
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "width", void 0);
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "subheaderClasses", void 0);
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "subheaderContainerClasses", void 0);
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "displayDesc", void 0);
    __decorate([
        core_1.Input()
    ], Subheader3Component.prototype, "displayDaterangepicker", void 0);
    Subheader3Component = __decorate([
        core_1.Component({
            selector: 'kt-subheader3',
            templateUrl: './subheader3.component.html',
            styleUrls: ['./subheader3.component.scss']
        })
    ], Subheader3Component);
    return Subheader3Component;
}());
exports.Subheader3Component = Subheader3Component;
