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
var Widget7WeeklySalesComponent = /** @class */ (function () {
    function Widget7WeeklySalesComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.cssClasses = '';
        this.chartOptions = {};
        this.fontFamily = '';
        this.colorsGrayGray500 = '';
        this.colorsGrayGray200 = '';
        this.colorsGrayGray300 = '';
        this.colorsThemeBaseDanger = '';
        this.colorsThemeBasePrimary = '';
        this.colorsThemeLightPrimary = '';
        this.colorsThemeBaseSuccess = '';
        this.colorsThemeLightSuccess = '';
        this.fontFamily = this.layoutConfigService.getConfig('js.fontFamily');
        this.colorsGrayGray500 = this.layoutConfigService.getConfig('js.colors.gray.gray500');
        this.colorsGrayGray200 = this.layoutConfigService.getConfig('js.colors.gray.gray200');
        this.colorsGrayGray300 = this.layoutConfigService.getConfig('js.colors.gray.gray300');
        this.colorsThemeBaseDanger = this.layoutConfigService.getConfig('js.colors.theme.base.danger');
        this.colorsThemeBasePrimary = this.layoutConfigService.getConfig('js.colors.theme.base.primary');
        this.colorsThemeLightPrimary = this.layoutConfigService.getConfig('js.colors.theme.light.primary');
        this.colorsThemeBaseSuccess = this.layoutConfigService.getConfig('js.colors.theme.base.success');
        this.colorsThemeLightSuccess = this.layoutConfigService.getConfig('js.colors.theme.light.success');
    }
    Widget7WeeklySalesComponent.prototype.ngOnInit = function () {
        this.chartOptions = this.getChartOptions();
    };
    Widget7WeeklySalesComponent.prototype.getChartOptions = function () {
        return {
            series: [
                {
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40]
                }
            ],
            chart: {
                type: 'area',
                height: 150,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [this.colorsThemeBaseSuccess]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: this.colorsGrayGray300,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        fontFamily: this.fontFamily
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: this.colorsGrayGray500,
                        fontSize: '12px',
                        fontFamily: this.fontFamily
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    fontFamily: this.fontFamily
                },
                y: {
                    // tslint:disable-next-line
                    formatter: function (val) {
                        return '$' + val + ' thousands';
                    }
                }
            },
            colors: [this.colorsThemeLightSuccess],
            markers: {
                colors: this.colorsThemeLightSuccess,
                strokeColor: [this.colorsThemeBaseSuccess],
                strokeWidth: 3
            }
        };
    };
    __decorate([
        core_1.Input()
    ], Widget7WeeklySalesComponent.prototype, "cssClasses", void 0);
    Widget7WeeklySalesComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget7-weekly-sales',
            templateUrl: './widget7-weekly-sales.component.html'
        })
    ], Widget7WeeklySalesComponent);
    return Widget7WeeklySalesComponent;
}());
exports.Widget7WeeklySalesComponent = Widget7WeeklySalesComponent;
