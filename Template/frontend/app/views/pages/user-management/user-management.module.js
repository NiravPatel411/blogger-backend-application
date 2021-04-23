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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// NGRX
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
// Translate
var core_2 = require("@ngx-translate/core");
var partials_module_1 = require("../../partials/partials.module");
// Services
var crud_1 = require("../../../core/_base/crud");
// Shared
var crud_2 = require("../../partials/content/crud");
// Components
var user_management_component_1 = require("./user-management.component");
var users_list_component_1 = require("./users/users-list/users-list.component");
var user_edit_component_1 = require("./users/user-edit/user-edit.component");
var roles_list_component_1 = require("./roles/roles-list/roles-list.component");
var role_edit_dialog_component_1 = require("./roles/role-edit/role-edit.dialog.component");
var user_roles_list_component_1 = require("./users/_subs/user-roles/user-roles-list.component");
var change_password_component_1 = require("./users/_subs/change-password/change-password.component");
var address_component_1 = require("./users/_subs/address/address.component");
var social_networks_component_1 = require("./users/_subs/social-networks/social-networks.component");
// Material
var auth_1 = require("../../../core/auth");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var table_1 = require("@angular/material/table");
var autocomplete_1 = require("@angular/material/autocomplete");
var radio_1 = require("@angular/material/radio");
var icon_1 = require("@angular/material/icon");
var core_3 = require("@angular/material/core");
var progress_bar_1 = require("@angular/material/progress-bar");
var datepicker_1 = require("@angular/material/datepicker");
var card_1 = require("@angular/material/card");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var checkbox_1 = require("@angular/material/checkbox");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var snack_bar_1 = require("@angular/material/snack-bar");
var expansion_1 = require("@angular/material/expansion");
var tabs_1 = require("@angular/material/tabs");
var dialog_1 = require("@angular/material/dialog");
var tooltip_1 = require("@angular/material/tooltip");
var routes = [
    {
        path: '',
        component: user_management_component_1.UserManagementComponent,
        children: [
            {
                path: '',
                redirectTo: 'roles',
                pathMatch: 'full'
            },
            {
                path: 'roles',
                component: roles_list_component_1.RolesListComponent
            },
            {
                path: 'users',
                component: users_list_component_1.UsersListComponent
            },
            {
                path: 'users:id',
                component: users_list_component_1.UsersListComponent
            },
            {
                path: 'users/add',
                component: user_edit_component_1.UserEditComponent
            },
            {
                path: 'users/add:id',
                component: user_edit_component_1.UserEditComponent
            },
            {
                path: 'users/edit',
                component: user_edit_component_1.UserEditComponent
            },
            {
                path: 'users/edit/:id',
                component: user_edit_component_1.UserEditComponent
            },
        ]
    }
];
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                partials_module_1.PartialsModule,
                router_1.RouterModule.forChild(routes),
                store_1.StoreModule.forFeature('users', auth_1.usersReducer),
                effects_1.EffectsModule.forFeature([auth_1.UserEffects]),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule.forChild(),
                button_1.MatButtonModule,
                menu_1.MatMenuModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                table_1.MatTableModule,
                autocomplete_1.MatAutocompleteModule,
                radio_1.MatRadioModule,
                icon_1.MatIconModule,
                core_3.MatNativeDateModule,
                progress_bar_1.MatProgressBarModule,
                datepicker_1.MatDatepickerModule,
                card_1.MatCardModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                checkbox_1.MatCheckboxModule,
                progress_spinner_1.MatProgressSpinnerModule,
                snack_bar_1.MatSnackBarModule,
                expansion_1.MatExpansionModule,
                tabs_1.MatTabsModule,
                tooltip_1.MatTooltipModule,
                dialog_1.MatDialogModule
            ],
            providers: [
                crud_1.InterceptService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: crud_1.InterceptService,
                    multi: true
                },
                {
                    provide: dialog_1.MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'kt-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
                crud_1.HttpUtilsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService
            ],
            entryComponents: [
                crud_2.ActionNotificationComponent,
                role_edit_dialog_component_1.RoleEditDialogComponent
            ],
            declarations: [
                user_management_component_1.UserManagementComponent,
                users_list_component_1.UsersListComponent,
                user_edit_component_1.UserEditComponent,
                roles_list_component_1.RolesListComponent,
                role_edit_dialog_component_1.RoleEditDialogComponent,
                user_roles_list_component_1.UserRolesListComponent,
                change_password_component_1.ChangePasswordComponent,
                address_component_1.AddressComponent,
                social_networks_component_1.SocialNetworksComponent
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());
exports.UserManagementModule = UserManagementModule;
