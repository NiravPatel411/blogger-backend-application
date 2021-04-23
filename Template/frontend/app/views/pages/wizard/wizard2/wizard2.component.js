"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Wizard2Component = /** @class */ (function () {
    function Wizard2Component() {
        this.model = {
            fname: 'John',
            lname: 'Wick',
            phone: '+61412345678',
            email: 'john.wick@reeves.com',
            address1: 'Address Line 1',
            address2: 'Address Line 2',
            postcode: '3000',
            city: 'Melbourne',
            state: 'VIC',
            country: 'AU',
            delivery: 'overnight',
            packaging: 'regular',
            preferreddelivery: 'morning',
            locaddress1: 'Address Line 1',
            locaddress2: 'Address Line 2',
            locpostcode: '3072',
            loccity: 'Preston',
            locstate: 'VIC',
            loccountry: 'AU',
            ccname: 'John Wick',
            ccnumber: '4444 3333 2222 1111',
            ccmonth: '01',
            ccyear: '21',
            cccvv: '123',
        };
        this.submitted = false;
    }
    Wizard2Component.prototype.ngOnInit = function () {
    };
    Wizard2Component.prototype.ngAfterViewInit = function () {
        // Initialize form wizard
        var wizard = new KTWizard(this.el.nativeElement, {
            startStep: 1
        });
        // Validation before going to next page
        wizard.on('beforeNext', function (wizardObj) {
            // https://angular.io/guide/forms
            // https://angular.io/guide/form-validation
            // validate the form and use below function to stop the wizard's step
            // wizardObj.stop();
        });
        // Change event
        wizard.on('change', function () {
            setTimeout(function () {
                KTUtil.scrollTop();
            }, 500);
        });
    };
    Wizard2Component.prototype.onSubmit = function () {
        this.submitted = true;
    };
    __decorate([
        core_1.ViewChild('wizard', { static: true })
    ], Wizard2Component.prototype, "el", void 0);
    Wizard2Component = __decorate([
        core_1.Component({
            selector: 'kt-wizard2',
            templateUrl: './wizard2.component.html',
            styleUrls: ['./wizard2.component.scss']
        })
    ], Wizard2Component);
    return Wizard2Component;
}());
exports.Wizard2Component = Wizard2Component;
