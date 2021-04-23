"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var partials_module_1 = require("../../partials/partials.module");
var core_module_1 = require("../../../core/core.module");
var router_1 = require("@angular/router");
var error_component_1 = require("./error.component");
var error1_component_1 = require("./error1/error1.component");
var error2_component_1 = require("./error2/error2.component");
var error3_component_1 = require("./error3/error3.component");
var error4_component_1 = require("./error4/error4.component");
var error5_component_1 = require("./error5/error5.component");
var error6_component_1 = require("./error6/error6.component");
var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        core_1.NgModule({
            declarations: [
                error_component_1.ErrorComponent,
                error1_component_1.Error1Component,
                error2_component_1.Error2Component,
                error3_component_1.Error3Component,
                error4_component_1.Error4Component,
                error5_component_1.Error5Component,
                error6_component_1.Error6Component,
            ],
            imports: [
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: error_component_1.ErrorComponent,
                        children: [
                            {
                                path: 'error-1',
                                component: error1_component_1.Error1Component,
                            },
                            {
                                path: 'error-2',
                                component: error2_component_1.Error2Component,
                            },
                            {
                                path: 'error-3',
                                component: error3_component_1.Error3Component,
                            },
                            {
                                path: 'error-4',
                                component: error4_component_1.Error4Component,
                            },
                            {
                                path: 'error-5',
                                component: error5_component_1.Error5Component,
                            },
                            {
                                path: 'error-6',
                                component: error6_component_1.Error6Component,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], ErrorModule);
    return ErrorModule;
}());
exports.ErrorModule = ErrorModule;
