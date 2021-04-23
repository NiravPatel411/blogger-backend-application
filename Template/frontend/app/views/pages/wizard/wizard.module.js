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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// Metronic
var partials_module_1 = require("../../partials/partials.module");
var core_module_1 = require("../../../core/core.module");
var wizard_component_1 = require("./wizard.component");
var wizard1_component_1 = require("./wizard1/wizard1.component");
var wizard2_component_1 = require("./wizard2/wizard2.component");
var wizard3_component_1 = require("./wizard3/wizard3.component");
var wizard4_component_1 = require("./wizard4/wizard4.component");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var ng_inline_svg_1 = require("ng-inline-svg");
var WizardModule = /** @class */ (function () {
    function WizardModule() {
    }
    WizardModule = __decorate([
        core_1.NgModule({
            declarations: [
                wizard_component_1.WizardComponent,
                wizard1_component_1.Wizard1Component,
                wizard2_component_1.Wizard2Component,
                wizard3_component_1.Wizard3Component,
                wizard4_component_1.Wizard4Component,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: wizard_component_1.WizardComponent,
                        children: [
                            {
                                path: 'wizard-1',
                                component: wizard1_component_1.Wizard1Component,
                            },
                            {
                                path: 'wizard-2',
                                component: wizard2_component_1.Wizard2Component,
                            },
                            {
                                path: 'wizard-3',
                                component: wizard3_component_1.Wizard3Component,
                            },
                            {
                                path: 'wizard-4',
                                component: wizard4_component_1.Wizard4Component,
                            },
                        ],
                    },
                ]),
                select_1.MatSelectModule,
                input_1.MatInputModule,
                ng_inline_svg_1.InlineSVGModule,
            ],
        })
    ], WizardModule);
    return WizardModule;
}());
exports.WizardModule = WizardModule;
