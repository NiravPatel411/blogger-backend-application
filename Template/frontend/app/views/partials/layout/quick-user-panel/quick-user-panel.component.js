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
var store_1 = require("@ngrx/store");
var auth_1 = require("../../../../core/auth");
var QuickUserPanelComponent = /** @class */ (function () {
    function QuickUserPanelComponent(store) {
        this.store = store;
        // Public properties
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_user_close',
            toggleBy: 'kt_quick_user_toggle'
        };
    }
    /**
     * On init
     */
    QuickUserPanelComponent.prototype.ngOnInit = function () {
        this.user$ = this.store.pipe(store_1.select(auth_1.currentUser));
    };
    /**
     * Log out
     */
    QuickUserPanelComponent.prototype.logout = function () {
        this.store.dispatch(new auth_1.Logout());
    };
    QuickUserPanelComponent = __decorate([
        core_1.Component({
            selector: 'kt-quick-user-panel',
            templateUrl: './quick-user-panel.component.html',
            styleUrls: ['./quick-user-panel.component.scss']
        })
    ], QuickUserPanelComponent);
    return QuickUserPanelComponent;
}());
exports.QuickUserPanelComponent = QuickUserPanelComponent;
