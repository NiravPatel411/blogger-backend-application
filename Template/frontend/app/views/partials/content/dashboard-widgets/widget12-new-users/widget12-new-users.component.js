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
var Widget12NewUsersComponent = /** @class */ (function () {
    function Widget12NewUsersComponent(layoutConfigService) {
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
        this.fontFamily = this.layoutConfigService.getConfig('js.fontFamily');
        this.colorsGrayGray500 = this.layoutConfigService.getConfig('js.colors.gray.gray500');
        this.colorsGrayGray200 = this.layoutConfigService.getConfig('js.colors.gray.gray200');
        this.colorsGrayGray300 = this.layoutConfigService.getConfig('js.colors.gray.gray300');
        this.colorsThemeBaseDanger = this.layoutConfigService.getConfig('js.colors.theme.base.danger');
        this.colorsThemeBasePrimary = this.layoutConfigService.getConfig('js.colors.theme.base.primary');
        this.colorsThemeLightPrimary = this.layoutConfigService.getConfig('js.colors.theme.light.primary');
    }
    Widget12NewUsersComponent.prototype.ngOnInit = function () {
        this.chartOptions = this.getChartOptions();
    };
    Widget12NewUsersComponent.prototype.getChartOptions = function () {
        return {
            series: [
                {
                    name: 'Net Profit',
                    data: [40, 40, 30, 30, 35, 35, 50]
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
                colors: [this.colorsThemeBasePrimary]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
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
                min: 0,
                max: 55,
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
                },
                marker: {
                    show: false
                }
            },
            colors: [this.colorsThemeLightPrimary],
            markers: {
                colors: this.colorsThemeLightPrimary,
                strokeColor: [this.colorsThemeBasePrimary],
                strokeWidth: 3
            }
        };
    };
    __decorate([
        core_1.Input()
    ], Widget12NewUsersComponent.prototype, "cssClasses", void 0);
    Widget12NewUsersComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget12-new-users',
            templateUrl: './widget12-new-users.component.html'
        })
    ], Widget12NewUsersComponent);
    return Widget12NewUsersComponent;
}());
exports.Widget12NewUsersComponent = Widget12NewUsersComponent;
