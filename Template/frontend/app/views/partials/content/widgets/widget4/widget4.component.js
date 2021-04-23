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
// Lodash
var lodash_1 = require("lodash");
var Widget4Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function Widget4Component(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Widget4Component.prototype.ngOnInit = function () {
        // dummy data
        if (!this.data) {
            this.data = lodash_1.shuffle([
                {
                    pic: './assets/media/files/doc.svg',
                    title: 'Metronic Documentation',
                    url: 'https://keenthemes.com.my/metronic',
                }, {
                    pic: './assets/media/files/jpg.svg',
                    title: 'Project Launch Evgent',
                    url: 'https://keenthemes.com.my/metronic',
                }, {
                    pic: './assets/media/files/pdf.svg',
                    title: 'Full Developer Manual For 4.7',
                    url: 'https://keenthemes.com.my/metronic',
                }, {
                    pic: './assets/media/files/javascript.svg',
                    title: 'Make JS Development',
                    url: 'https://keenthemes.com.my/metronic',
                }, {
                    pic: './assets/media/files/zip.svg',
                    title: 'Download Ziped version OF 5.0',
                    url: 'https://keenthemes.com.my/metronic',
                }, {
                    pic: './assets/media/files/pdf.svg',
                    title: 'Finance Report 2016/2017',
                    url: 'https://keenthemes.com.my/metronic',
                },
            ]);
        }
    };
    __decorate([
        core_1.Input()
    ], Widget4Component.prototype, "data", void 0);
    __decorate([
        core_1.ContentChild('actionTemplate', { static: true })
    ], Widget4Component.prototype, "actionTemplate", void 0);
    Widget4Component = __decorate([
        core_1.Component({
            selector: 'kt-widget4',
            templateUrl: './widget4.component.html',
            styleUrls: ['./widget4.component.scss']
        })
    ], Widget4Component);
    return Widget4Component;
}());
exports.Widget4Component = Widget4Component;
