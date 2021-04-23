"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Error2Component = /** @class */ (function () {
    function Error2Component() {
    }
    Error2Component.prototype.ngOnInit = function () {
    };
    Error2Component = __decorate([
        core_1.Component({
            selector: 'kt-error2',
            templateUrl: './error2.component.html',
            styleUrls: ['./error2.component.scss']
        })
    ], Error2Component);
    return Error2Component;
}());
exports.Error2Component = Error2Component;
