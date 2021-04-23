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
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.searchDisplay = true;
        this.notificationsDisplay = true;
        this.quickActionsDisplay = true;
        this.cartDisplay = true;
        this.quickPanelDisplay = true;
        this.languagesDisplay = true;
        this.userDisplay = true;
        this.userLayout = 'offcanvas';
        this.userDropdownStyle = 'light';
        this.searchDisplay = this.layoutConfigService.getConfig('extras.search.display');
        this.notificationsDisplay = this.layoutConfigService.getConfig('extras.notifications.display');
        this.quickActionsDisplay = this.layoutConfigService.getConfig('extras.quick-actions.display');
        this.cartDisplay = this.layoutConfigService.getConfig('extras.cart.display');
        this.quickPanelDisplay = this.layoutConfigService.getConfig('extras.quick-panel.display');
        this.languagesDisplay = this.layoutConfigService.getConfig('extras.languages.display');
        this.userDisplay = this.layoutConfigService.getConfig('extras.user.display');
        this.userLayout = this.layoutConfigService.getConfig('extras.user.layout');
        this.userDropdownStyle = this.layoutConfigService.getConfig('extras.user.dropdown.style');
    }
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'kt-topbar',
            templateUrl: './topbar.component.html',
            styleUrls: ['./topbar.component.scss'],
        })
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
