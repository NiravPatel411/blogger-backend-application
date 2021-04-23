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
var documents = {
    title: 'Documents',
    type: 0,
    items: [
        {
            svgPath: 'assets/media/svg/files/doc.svg',
            title: 'AirPlus Requirements',
            description: 'by Grog John'
        },
        {
            svgPath: 'assets/media/svg/files/pdf.svg',
            title: 'TechNav Documentation',
            description: 'by Mary Brown'
        },
        {
            svgPath: 'assets/media/svg/files/xml.svg',
            title: 'All Framework Docs',
            description: 'by Nick Stone'
        },
        {
            svgPath: 'assets/media/svg/files/csv.svg',
            title: 'Finance & Accounting Reports',
            description: 'by Jhon Larson'
        }
    ]
};
var members = {
    title: 'Members',
    type: 1,
    items: [
        {
            imgPath: 'assets/media/users/300_20.jpg',
            title: 'Milena Gibson',
            description: 'UI Designer'
        },
        {
            imgPath: 'assets/media/users/300_15.jpg',
            title: 'Stefan JohnStefan',
            description: 'Marketing Manager'
        },
        {
            imgPath: 'assets/media/users/300_12.jpg',
            title: 'Anna Strong',
            description: 'Software Developer'
        },
        {
            imgPath: 'assets/media/users/300_16.jpg',
            title: 'Nick Bold',
            description: 'Project Coordinator'
        }
    ]
};
var files = {
    title: 'Files',
    type: 2,
    items: [
        {
            iconClasses: 'flaticon-psd text-primary',
            title: '79 PSD files generated',
            description: 'by Grog John'
        },
        {
            iconClasses: 'flaticon2-supermarket text-warning',
            title: '$2900 worth products sold',
            description: 'Total 234 items'
        },
        {
            iconClasses: 'flaticon-safe-shield-protection text-info',
            title: '4 New items submitted',
            description: 'Marketing Manager'
        },
        {
            iconClasses: 'flaticon-safe-shield-protection text-warning',
            title: '4 New items submitted',
            description: 'Marketing Manager'
        }
    ]
};
var SearchDropdownComponent = /** @class */ (function () {
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    function SearchDropdownComponent(cdr) {
        this.cdr = cdr;
        // Public properties
        this.layout = 'dropdown';
        // Set icon class name
        this.icon = 'flaticon2-search-1';
        this.type = 'success';
        this.data = null;
    }
    /**
     * On init
     */
    SearchDropdownComponent.prototype.ngOnInit = function () {
        // simulate result from API
    };
    /**
     * Search
     * @param e: Event
     */
    SearchDropdownComponent.prototype.search = function (e) {
        var _this = this;
        this.data = null;
        if (e.target.value.length > 1) {
            this.loading = true;
            // simulate getting search result
            setTimeout(function () {
                // Uncomment this. Right now it's just mock
                // this.data = this.searchInData(e.target.value);
                _this.data = [documents, members, files];
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
    SearchDropdownComponent.prototype.clear = function (e) {
        this.data = null;
        this.searchInput.nativeElement.value = '';
    };
    SearchDropdownComponent.prototype.openChange = function () {
        var _this = this;
        setTimeout(function () { return _this.searchInput.nativeElement.focus(); });
    };
    SearchDropdownComponent.prototype.showCloseButton = function () {
        return this.data && this.data.length && !this.loading;
    };
    __decorate([
        core_1.Input()
    ], SearchDropdownComponent.prototype, "layout", void 0);
    __decorate([
        core_1.Input()
    ], SearchDropdownComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], SearchDropdownComponent.prototype, "useSVG", void 0);
    __decorate([
        core_1.Input()
    ], SearchDropdownComponent.prototype, "type", void 0);
    __decorate([
        core_1.ViewChild('searchInput', { static: true })
    ], SearchDropdownComponent.prototype, "searchInput", void 0);
    SearchDropdownComponent = __decorate([
        core_1.Component({
            selector: 'kt-search-dropdown',
            templateUrl: './search-dropdown.component.html'
        })
    ], SearchDropdownComponent);
    return SearchDropdownComponent;
}());
exports.SearchDropdownComponent = SearchDropdownComponent;
