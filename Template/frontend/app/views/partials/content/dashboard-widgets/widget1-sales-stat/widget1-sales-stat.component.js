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
var Widget1SalesStatComponent = /** @class */ (function () {
    function Widget1SalesStatComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.cssClasses = '';
        this.chartOptions = {};
        this.fontFamily = '';
        this.colorsGrayGray500 = '';
        this.colorsGrayGray200 = '';
        this.colorsGrayGray300 = '';
        this.colorsThemeBaseDanger = '';
        this.fontFamily = this.layoutConfigService.getConfig('js.fontFamily');
        this.colorsGrayGray500 = this.layoutConfigService.getConfig('js.colors.gray.gray500');
        this.colorsGrayGray200 = this.layoutConfigService.getConfig('js.colors.gray.gray200');
        this.colorsGrayGray300 = this.layoutConfigService.getConfig('js.colors.gray.gray300');
        this.colorsThemeBaseDanger = this.layoutConfigService.getConfig('js.colors.theme.base.danger');
    }
    Widget1SalesStatComponent.prototype.ngOnInit = function () {
        this.chartOptions = this.getChartOptions();
    };
    Widget1SalesStatComponent.prototype.getChartOptions = function () {
        var strokeColor = '#D13647';
        return {
            series: [
                {
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40, 40, 40]
                }
            ],
            chart: {
                type: 'area',
                height: 200,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: strokeColor,
                    opacity: 0.5
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
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [strokeColor]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
                }
            },
            yaxis: {
                min: 0,
                max: 80,
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
            colors: ['transparent'],
            markers: {
                colors: this.colorsThemeBaseDanger,
                strokeColor: [strokeColor],
                strokeWidth: 3
            }
        };
    };
    __decorate([
        core_1.Input()
    ], Widget1SalesStatComponent.prototype, "cssClasses", void 0);
    Widget1SalesStatComponent = __decorate([
        core_1.Component({
            selector: 'kt-widget1-sales-stat',
            templateUrl: './widget1-sales-stat.component.html',
        })
    ], Widget1SalesStatComponent);
    return Widget1SalesStatComponent;
}());
exports.Widget1SalesStatComponent = Widget1SalesStatComponent;
