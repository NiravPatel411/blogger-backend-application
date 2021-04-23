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
var ISearchResult = /** @class */ (function () {
    function ISearchResult() {
    }
    return ISearchResult;
}());
var SearchDefaultComponent = /** @class */ (function () {
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    function SearchDefaultComponent(cdr) {
        this.cdr = cdr;
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-search-1';
    }
    /**
     * On init
     */
    SearchDefaultComponent.prototype.ngOnInit = function () {
        // simulate result from API
        // type 0|1 as separator or item
        this.result = [
            {
                text: 'Documents',
                type: 0,
            }, {
                svg: 'assets/media/svg/files/doc.svg',
                text: 'Annual finance report',
                type: 1,
            }, {
                svg: 'assets/media/svg/files/pdf.svg',
                text: 'Company meeting schedule',
                type: 1,
            }, {
                svg: 'assets/media/svg/files/xml.svg',
                text: 'Project quotations',
                type: 1,
            }, {
                text: 'Customers',
                type: 0,
            }, {
                img: 'assets/media/users/300_20.jpg',
                text: 'Amanda Anderson',
                type: 1,
            }, {
                img: 'assets/media/users/300_15.jpg',
                text: 'Kennedy Lloyd',
                type: 1,
            }, {
                img: 'assets/media/users/300_12.jpg',
                text: 'Megan Weldon',
                type: 1,
            }, {
                img: 'assets/media/users/300_16.jpg',
                text: 'Marc-André ter Stegen',
                type: 1,
            }, {
                text: 'Files',
                type: 0,
            }, {
                icon: 'flaticon-psd text-primary',
                text: 'Revenue report',
                type: 1,
            }, {
                icon: 'flaticon2-supermarket text-warning',
                text: 'Anual finance report',
                type: 1,
            }, {
                icon: 'flaticon-safe-shield-protection text-info',
                text: 'Tax calculations',
                type: 1,
            }, {
                icon: 'flaticon-safe-shield-protection text-warning',
                text: '4 New items submitted',
                type: 1,
            },
        ];
    };
    /**
     * Search
     * @param e: Event
     */
    SearchDefaultComponent.prototype.search = function (e) {
        var _this = this;
        this.data = null;
        if (e.target.value.length > 2) {
            this.loading = true;
            // simulate getting search result
            setTimeout(function () {
                _this.data = _this.result;
                _this.loading = false;
                _this.cdr.markForCheck();
            }, 500);
        }
    };
    /**
     * Clear search
     *
     * @param e: Event
     */
    SearchDefaultComponent.prototype.clear = function (e) {
        this.data = null;
        this.searchInput.nativeElement.value = '';
    };
    __decorate([
        core_1.Input()
    ], SearchDefaultComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], SearchDefaultComponent.prototype, "useSVG", void 0);
    __decorate([
        core_1.ViewChild('searchInput', { static: true })
    ], SearchDefaultComponent.prototype, "searchInput", void 0);
    SearchDefaultComponent = __decorate([
        core_1.Component({
            selector: 'kt-search-default',
            templateUrl: './search-default.component.html',
        })
    ], SearchDefaultComponent);
    return SearchDefaultComponent;
}());
exports.SearchDefaultComponent = SearchDefaultComponent;
