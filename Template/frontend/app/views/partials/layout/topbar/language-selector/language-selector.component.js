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
var router_1 = require("@angular/router");
// RxJS
var operators_1 = require("rxjs/operators");
var LanguageSelectorComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     */
    function LanguageSelectorComponent(translationService, router) {
        this.translationService = translationService;
        this.router = router;
        this.languages = [
            {
                lang: 'en',
                name: 'English',
                flag: './assets/media/svg/flags/226-united-states.svg'
            },
            {
                lang: 'ch',
                name: 'Mandarin',
                flag: './assets/media/svg/flags/015-china.svg'
            },
            {
                lang: 'es',
                name: 'Spanish',
                flag: './assets/media/svg/flags/128-spain.svg'
            },
            {
                lang: 'jp',
                name: 'Japanese',
                flag: './assets/media/svg/flags/063-japan.svg'
            },
            {
                lang: 'de',
                name: 'German',
                flag: './assets/media/svg/flags/162-germany.svg'
            },
            {
                lang: 'fr',
                name: 'French',
                flag: './assets/media/svg/flags/195-france.svg'
            },
        ];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setSelectedLanguage();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationStart; }))
            .subscribe(function (event) {
            _this.setSelectedLanguage();
        });
    };
    /**
     * Set language
     *
     * @param lang: any
     */
    LanguageSelectorComponent.prototype.setLanguage = function (lang) {
        var _this = this;
        this.languages.forEach(function (language) {
            if (language.lang === lang) {
                language.active = true;
                _this.language = language;
            }
            else {
                language.active = false;
            }
        });
        this.translationService.setLanguage(lang);
    };
    /**
     * Set selected language
     */
    LanguageSelectorComponent.prototype.setSelectedLanguage = function () {
        this.setLanguage(this.translationService.getSelectedLanguage());
    };
    __decorate([
        core_1.Input()
    ], LanguageSelectorComponent.prototype, "iconType", void 0);
    LanguageSelectorComponent = __decorate([
        core_1.Component({
            selector: 'kt-language-selector',
            templateUrl: './language-selector.component.html',
        })
    ], LanguageSelectorComponent);
    return LanguageSelectorComponent;
}());
exports.LanguageSelectorComponent = LanguageSelectorComponent;
