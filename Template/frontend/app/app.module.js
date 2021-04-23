"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
// Angular
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var core_3 = require("@angular/material/core");
var overlay_1 = require("@angular/cdk/overlay");
// Angular in memory
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
// Perfect Scroll bar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// SVG inline
var ng_inline_svg_1 = require("ng-inline-svg");
// Env
var environment_1 = require("../environments/environment");
// Hammer JS
require("hammerjs");
// NGX Permissions
var ngx_permissions_1 = require("ngx-permissions");
// NGRX
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var router_store_1 = require("@ngrx/router-store");
var store_devtools_1 = require("@ngrx/store-devtools");
// State
var reducers_1 = require("./core/reducers");
// Components
var app_component_1 = require("./app.component");
// Modules
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var theme_module_1 = require("./views/theme/theme.module");
// Partials
var partials_module_1 = require("./views/partials/partials.module");
// Layout Services
var layout_1 = require("./core/_base/layout");
// Auth
var auth_module_1 = require("./views/pages/auth/auth.module");
var auth_1 = require("./core/auth");
// CRUD
var crud_1 = require("./core/_base/crud");
// Config
var layout_config_1 = require("./core/_config/layout.config");
// Highlight JS
var ngx_highlightjs_1 = require("ngx-highlightjs");
var xml_1 = require("highlight.js/lib/languages/xml");
var json_1 = require("highlight.js/lib/languages/json");
var scss_1 = require("highlight.js/lib/languages/scss");
var typescript_1 = require("highlight.js/lib/languages/typescript");
// tslint:disable-next-line:class-name
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelSpeed: 0.5,
    swipeEasing: true,
    minScrollbarLength: 40,
    maxScrollbarLength: 300
};
function initializeLayoutConfig(appConfig) {
    // initialize app by loading default demo layout config
    return function () {
        if (appConfig.getConfig() === null) {
            appConfig.loadConfigs(new layout_config_1.LayoutConfig().configs);
        }
    };
}
exports.initializeLayoutConfig = initializeLayoutConfig;
/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
function getHighlightLanguages() {
    return [
        { name: 'typescript', func: typescript_1.default },
        { name: 'scss', func: scss_1.default },
        { name: 'xml', func: xml_1.default },
        { name: 'json', func: json_1.default }
    ];
}
exports.getHighlightLanguages = getHighlightLanguages;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                animations_1.BrowserAnimationsModule,
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                environment_1.environment.isMockEnabled
                    ? angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(layout_1.FakeApiService, {
                        passThruUnknownUrl: true,
                        dataEncapsulation: false
                    })
                    : [],
                ngx_permissions_1.NgxPermissionsModule.forRoot(),
                ngx_highlightjs_1.HighlightModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                overlay_1.OverlayModule,
                store_1.StoreModule.forRoot(reducers_1.reducers, { metaReducers: reducers_1.metaReducers }),
                effects_1.EffectsModule.forRoot([]),
                router_store_1.StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
                store_devtools_1.StoreDevtoolsModule.instrument(),
                auth_module_1.AuthModule.forRoot(),
                core_2.TranslateModule.forRoot(),
                progress_spinner_1.MatProgressSpinnerModule,
                ng_inline_svg_1.InlineSVGModule.forRoot(),
                theme_module_1.ThemeModule
            ],
            exports: [],
            providers: [
                auth_1.AuthService,
                layout_1.LayoutConfigService,
                layout_1.LayoutRefService,
                layout_1.MenuConfigService,
                layout_1.PageConfigService,
                layout_1.KtDialogService,
                layout_1.DataTableService,
                layout_1.SplashScreenService,
                {
                    provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: platform_browser_1.HAMMER_GESTURE_CONFIG,
                    useClass: core_3.GestureConfig
                },
                {
                    // layout config initializer
                    provide: core_1.APP_INITIALIZER,
                    useFactory: initializeLayoutConfig,
                    deps: [layout_1.LayoutConfigService],
                    multi: true
                },
                {
                    provide: ngx_highlightjs_1.HIGHLIGHT_OPTIONS,
                    useValue: {
                        languages: getHighlightLanguages
                    }
                },
                // template services
                layout_1.SubheaderService,
                layout_1.MenuHorizontalService,
                layout_1.MenuAsideService,
                crud_1.HttpUtilsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
