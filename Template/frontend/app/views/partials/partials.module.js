"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng_apexcharts_1 = require("ng-apexcharts");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Perfect Scrollbar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// Core module
var core_module_1 = require("../../core/core.module");
// CRUD Partials
var crud_1 = require("./content/crud");
// Layout partials
var layout_1 = require("./layout");
var dashboard_widgets_1 = require("./content/dashboard-widgets");
// General
var notice_component_1 = require("./content/general/notice/notice.component");
var portlet_module_1 = require("./content/general/portlet/portlet.module");
// Extra module
var widget_module_1 = require("./content/widgets/widget.module");
// SVG inline
var ng_inline_svg_1 = require("ng-inline-svg");
var cart_component_1 = require("./layout/topbar/cart/cart.component");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var table_1 = require("@angular/material/table");
var autocomplete_1 = require("@angular/material/autocomplete");
var icon_1 = require("@angular/material/icon");
var radio_1 = require("@angular/material/radio");
var core_2 = require("@angular/material/core");
var progress_bar_1 = require("@angular/material/progress-bar");
var datepicker_1 = require("@angular/material/datepicker");
var card_1 = require("@angular/material/card");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var checkbox_1 = require("@angular/material/checkbox");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var snack_bar_1 = require("@angular/material/snack-bar");
var tabs_1 = require("@angular/material/tabs");
var tooltip_1 = require("@angular/material/tooltip");
var dialog_1 = require("@angular/material/dialog");
var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = __decorate([
        core_1.NgModule({
            declarations: [
                layout_1.ScrollTopComponent,
                notice_component_1.NoticeComponent,
                crud_1.ActionNotificationComponent,
                crud_1.DeleteEntityDialogComponent,
                crud_1.FetchEntityDialogComponent,
                crud_1.UpdateStatusDialogComponent,
                crud_1.AlertComponent,
                // topbar components
                layout_1.ContextMenu2Component,
                layout_1.ContextMenuComponent,
                layout_1.QuickPanelComponent,
                layout_1.QuickUserPanelComponent,
                layout_1.ScrollTopComponent,
                layout_1.SearchResultComponent,
                layout_1.SplashScreenComponent,
                layout_1.StickyToolbarComponent,
                layout_1.Subheader1Component,
                layout_1.Subheader2Component,
                layout_1.Subheader3Component,
                layout_1.SubheaderSearchComponent,
                layout_1.LanguageSelectorComponent,
                layout_1.NotificationComponent,
                layout_1.QuickActionComponent,
                layout_1.SearchDefaultComponent,
                layout_1.SearchDropdownComponent,
                layout_1.UserProfileComponent,
                layout_1.UserProfile2Component,
                layout_1.UserProfile3Component,
                layout_1.UserProfile4Component,
                cart_component_1.CartComponent,
                dashboard_widgets_1.Widget1SalesStatComponent,
                dashboard_widgets_1.Widget9RecentActivitiesComponent,
                dashboard_widgets_1.Widget12NewUsersComponent,
                dashboard_widgets_1.Widget7WeeklySalesComponent,
                dashboard_widgets_1.Widget1TasksOverviewComponent,
                dashboard_widgets_1.Widget2NewArrivalsComponent,
                dashboard_widgets_1.Widget3NewArrivalsAuthorsComponent,
                dashboard_widgets_1.Widget4TodoComponent,
                dashboard_widgets_1.Widget8TrendsComponent,
                dashboard_widgets_1.Dropdown1Component,
                dashboard_widgets_1.Dropdown2Component,
                dashboard_widgets_1.Dropdown3Component,
                dashboard_widgets_1.Dropdown4Component,
                dashboard_widgets_1.Dropdown5Component
            ],
            exports: [
                widget_module_1.WidgetModule,
                portlet_module_1.PortletModule,
                layout_1.ScrollTopComponent,
                notice_component_1.NoticeComponent,
                crud_1.ActionNotificationComponent,
                crud_1.DeleteEntityDialogComponent,
                crud_1.FetchEntityDialogComponent,
                crud_1.UpdateStatusDialogComponent,
                crud_1.AlertComponent,
                // topbar components
                layout_1.ContextMenu2Component,
                layout_1.ContextMenuComponent,
                layout_1.QuickPanelComponent,
                layout_1.QuickUserPanelComponent,
                layout_1.ScrollTopComponent,
                layout_1.SearchResultComponent,
                layout_1.SplashScreenComponent,
                layout_1.StickyToolbarComponent,
                layout_1.Subheader1Component,
                layout_1.Subheader2Component,
                layout_1.Subheader3Component,
                layout_1.SubheaderSearchComponent,
                layout_1.LanguageSelectorComponent,
                layout_1.NotificationComponent,
                layout_1.QuickActionComponent,
                layout_1.SearchDefaultComponent,
                layout_1.SearchDropdownComponent,
                layout_1.UserProfileComponent,
                layout_1.UserProfile2Component,
                layout_1.UserProfile3Component,
                layout_1.UserProfile4Component,
                cart_component_1.CartComponent,
                dashboard_widgets_1.Widget1SalesStatComponent,
                dashboard_widgets_1.Widget9RecentActivitiesComponent,
                dashboard_widgets_1.Widget12NewUsersComponent,
                dashboard_widgets_1.Widget7WeeklySalesComponent,
                dashboard_widgets_1.Widget1TasksOverviewComponent,
                dashboard_widgets_1.Widget2NewArrivalsComponent,
                dashboard_widgets_1.Widget3NewArrivalsAuthorsComponent,
                dashboard_widgets_1.Widget4TodoComponent,
                dashboard_widgets_1.Widget8TrendsComponent,
                dashboard_widgets_1.Dropdown1Component,
                dashboard_widgets_1.Dropdown2Component,
                dashboard_widgets_1.Dropdown3Component,
                dashboard_widgets_1.Dropdown4Component,
                dashboard_widgets_1.Dropdown5Component
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_inline_svg_1.InlineSVGModule,
                core_module_1.CoreModule,
                portlet_module_1.PortletModule,
                widget_module_1.WidgetModule,
                ng_apexcharts_1.NgApexchartsModule,
                // angular material modules
                button_1.MatButtonModule,
                menu_1.MatMenuModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                table_1.MatTableModule,
                autocomplete_1.MatAutocompleteModule,
                radio_1.MatRadioModule,
                icon_1.MatIconModule,
                core_2.MatNativeDateModule,
                progress_bar_1.MatProgressBarModule,
                datepicker_1.MatDatepickerModule,
                card_1.MatCardModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                checkbox_1.MatCheckboxModule,
                progress_spinner_1.MatProgressSpinnerModule,
                snack_bar_1.MatSnackBarModule,
                tabs_1.MatTabsModule,
                tooltip_1.MatTooltipModule,
                dialog_1.MatDialogModule,
                // ng-bootstrap modules
                ng_bootstrap_1.NgbDropdownModule,
                ng_bootstrap_1.NgbTabsetModule,
                ng_bootstrap_1.NgbTooltipModule,
            ],
        })
    ], PartialsModule);
    return PartialsModule;
}());
exports.PartialsModule = PartialsModule;
