webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-sidenav-container, mat-sidenav , mat-sidenav-content {\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n  overflow: auto;\r\n\r\n}\r\n\r\nmat-icon {\r\ncolor: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\nmain {\r\n  z-index: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav mode=\"over\" align=\"start\" #sidenav>\r\n    <app-sidenav></app-sidenav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <app-header (onSidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n    <app-locator></app-locator>\r\n    <main style=\"margin-top: 50px;min-height: 1200px\">\r\n\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n    <mat-toolbar color=\"primary\" style=\"\r\n    bottom: 0;\r\n position: fixed;\r\n  z-index: 2;\r\n  height: 56px;\r\n  background-color: #3042a9;\r\n  padding: 8px 16px;\r\n      font-weight: 700;\r\n    line-height: 16px;\r\n    font-size: 13px;\r\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\">\r\n      <p>\r\n      </p>\r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_youtube_service__ = __webpack_require__("./src/app/service/youtube.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(mdIconRegistry, sanitizer, dataSource, youtubeSerivce) {
        this.imageUrl = '/img';
        dataSource.get(this.imageUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["mergeAll"])())
            .subscribe(function (_imageName) {
            return mdIconRegistry
                .addSvgIcon(_imageName, sanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/' + _imageName + ".svg"));
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__service_data_source_service__["a" /* DataSource */],
            __WEBPACK_IMPORTED_MODULE_5__service_youtube_service__["a" /* YoutubeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tester_tester_module__ = __webpack_require__("./src/app/tester/tester.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__category_category_module__ = __webpack_require__("./src/app/category/category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topic_topic_module__ = __webpack_require__("./src/app/topic/topic.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_10__category_category_module__["a" /* CategoryModule */],
                __WEBPACK_IMPORTED_MODULE_11__topic_topic_module__["a" /* TopicModule */],
                __WEBPACK_IMPORTED_MODULE_8__tester_tester_module__["a" /* TesterModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* HashLocationStrategy */] },
                { provide: __WEBPACK_IMPORTED_MODULE_5__app_tokens__["c" /* BACKEND_URL_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_5__app_tokens__["d" /* PROD_ENV_BACKEND_URL */] },
                { provide: __WEBPACK_IMPORTED_MODULE_5__app_tokens__["b" /* ADMIN_GITHUB_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_5__app_tokens__["a" /* ADMIN_GITHUB_NAME */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BACKEND_URL_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADMIN_GITHUB_TOKEN; });
/* unused harmony export DEV_ENV_BACKEND_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PROD_ENV_BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_GITHUB_NAME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BACKEND_URL_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('BACKEND_URL_TOKEN');
var ADMIN_GITHUB_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('ADMIN GITHUB NAME');
var DEV_ENV_BACKEND_URL = '/rest/';
var PROD_ENV_BACKEND_URL = 'https://' + location.hostname + '/rest/';
var ADMIN_GITHUB_NAME = 'SiWoo-Kim';


/***/ }),

/***/ "./src/app/category/category-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-drawer-container, mat-drawer, mat-drawer-content {\r\n  min-height: 800px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" fxLayout >\n  <mat-drawer mode=\"side\" opened=\"true\" #drawer  fxFlex=\"250px\" >\n    <app-panel [panelLists]=\"panelLists\"></app-panel>\n  </mat-drawer>\n  <mat-drawer-content fxFlex.lt-sm=\"100%\" style=\"padding: 0\">\n    <app-panel-bar\n      [drawerOpen]=\"drawer.opened\"\n      (onDrawerToggle)=\"drawer.toggle()\"\n      backLink=\"/category/main\"\n      backLinkDescription=\"Category Main\" ></app-panel-bar>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/category/category-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_short_category_model__ = __webpack_require__("./src/app/model/short-category.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryBootstrapComponent = /** @class */ (function () {
    function CategoryBootstrapComponent(categoryRepository) {
        var _this = this;
        this.categoryRepository = categoryRepository;
        this.panelLists = [];
        this.categoryRepository
            .allShorts()
            .subscribe(function (_shortCategories) {
            return _this.panelLists = __WEBPACK_IMPORTED_MODULE_2__model_short_category_model__["a" /* ShortCategory */].toPanelList(_shortCategories);
        });
    }
    CategoryBootstrapComponent.prototype.ngOnInit = function () {
    };
    CategoryBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-bootstrap',
            template: __webpack_require__("./src/app/category/category-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/category/category-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__["a" /* CategoryRepository */]])
    ], CategoryBootstrapComponent);
    return CategoryBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/category/category-main/category-main.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-card {\r\n  margin: 15px;\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n  font-weight: 600;\r\n}\r\n\r\nmat-card-title {\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n  font-weight: 600;\r\n}\r\n\r\n.mat-card-image {\r\n  height: 200px;\r\n}\r\n\r\nmat-card-footer {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\nmat-card-content p {\r\n  min-height: 130px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-main/category-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\" fxLayout=\"row no-wrap\" fxLayoutAlign=\"center\" >\n  <app-model-card\n    fxFlex=\"30%\" fxFlex.lt-lg=\"45%\" fxFlex.lt-md=\"100%\"\n    *ngFor=\"let cardItem of cardItems\"\n    [cardItem]=\"cardItem\" ></app-model-card>\n</div>\n"

/***/ }),

/***/ "./src/app/category/category-main/category-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_category_model__ = __webpack_require__("./src/app/model/category.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryMainComponent = /** @class */ (function () {
    function CategoryMainComponent(categoryRepository) {
        var _this = this;
        this.categoryRepository = categoryRepository;
        this.cardItems = [];
        this.categoryRepository.all()
            .subscribe(function (_categories) {
            _this.categories = _categories;
            _this.categories.forEach(function (category) { return _this.cardItems.push(__WEBPACK_IMPORTED_MODULE_2__model_category_model__["a" /* Category */].toCardItem(category)); });
        });
    }
    CategoryMainComponent.prototype.ngOnInit = function () {
    };
    CategoryMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-main',
            template: __webpack_require__("./src/app/category/category-main/category-main.component.html"),
            styles: [__webpack_require__("./src/app/category/category-main/category-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__["a" /* CategoryRepository */]])
    ], CategoryMainComponent);
    return CategoryMainComponent;
}());



/***/ }),

/***/ "./src/app/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_bootstrap_component__ = __webpack_require__("./src/app/category/category-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_main_category_main_component__ = __webpack_require__("./src/app/category/category-main/category-main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'category', component: __WEBPACK_IMPORTED_MODULE_6__category_bootstrap_component__["a" /* CategoryBootstrapComponent */], children: [
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__category_main_category_main_component__["a" /* CategoryMainComponent */] },
            { path: '', redirectTo: 'main', pathMatch: 'full' }
        ]
    }
];
var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__category_bootstrap_component__["a" /* CategoryBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__category_main_category_main_component__["a" /* CategoryMainComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/model/category.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name, imgName, description, type, language) {
        this.id = id;
        this.name = name;
        this.imgName = imgName;
        this.description = description;
        this.type = type;
        this.language = language;
    }
    Category.toCardItem = function (category) {
        return {
            name: category.name,
            svgName: category.imgName,
            meta: category.language.type,
            metaSvg: category.language.imgName,
            imgLocation: '/assets/img/png/' + category.imgName + '.png',
            description: category.description,
            dataLocation: '/topic/' + category.name + '/main'
        };
    };
    return Category;
}());



/***/ }),

/***/ "./src/app/model/description.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Description; });
var Description = /** @class */ (function () {
    function Description(title, description, code, children) {
        this.title = title;
        this.description = description;
        this.code = code;
        this.children = children;
    }
    return Description;
}());



/***/ }),

/***/ "./src/app/model/github.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitHub; });
var GitHub = /** @class */ (function () {
    function GitHub(name, company, location, url, avatarUrl, htmlUrl, blog, repoCounts) {
        this.name = name;
        this.company = company;
        this.location = location;
        this.url = url;
        this.avatarUrl = avatarUrl;
        this.htmlUrl = htmlUrl;
        this.blog = blog;
        this.repoCounts = repoCounts;
    }
    return GitHub;
}());



/***/ }),

/***/ "./src/app/model/short-category.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_panel_panel_list_model__ = __webpack_require__("./src/app/shared/panel/panel-list.model.ts");

var ShortCategory = /** @class */ (function () {
    function ShortCategory(id, name, topics) {
        this.id = id;
        this.name = name;
        this.topics = topics;
    }
    ShortCategory.toPanelList = function (categories) {
        var panelists = [];
        categories.forEach(function (_shortCategory) {
            var panelListItems = [];
            _shortCategory.topics.forEach(function (_shortTopic) {
                var panelListItem = new __WEBPACK_IMPORTED_MODULE_0__shared_panel_panel_list_model__["b" /* PanelListItem */](_shortTopic.name, "/topic/" + _shortCategory.name + "/" + _shortTopic.name);
                panelListItems.push(panelListItem);
            });
            var panelList = new __WEBPACK_IMPORTED_MODULE_0__shared_panel_panel_list_model__["a" /* PanelList */](_shortCategory.name, "/topic/" + _shortCategory.name + "/main", panelListItems);
            panelists.push(panelList);
        });
        return panelists;
    };
    return ShortCategory;
}());



/***/ }),

/***/ "./src/app/model/topic.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic(id, name, description, shortDescription, basicTime, rating, difficulty, category, index) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.shortDescription = shortDescription;
        this.basicTime = basicTime;
        this.rating = rating;
        this.difficulty = difficulty;
        this.category = category;
        this.index = index;
    }
    Topic.toCardItem = function (topic) {
        return {
            name: topic.name,
            svgName: topic.category.imgName,
            meta: topic.basicTime.created ? topic.basicTime.created : null,
            metaSvg: topic.category.language.imgName,
            imgLocation: '/assets/img/png/' + topic.category.imgName + '.png',
            description: topic.shortDescription,
            dataLocation: '/topic/' + topic.category.name + '/' + topic.name
        };
    };
    return Topic;
}());



/***/ }),

/***/ "./src/app/model/youtube.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Youtube; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_model_card_card_item_model__ = __webpack_require__("./src/app/shared/model-card/card-item.model.ts");

var Youtube = /** @class */ (function () {
    function Youtube(id, title, publishDate, description, thumbnailUrl, videoUrl) {
        this.id = id;
        this.title = title;
        this.publishDate = publishDate;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.videoUrl = videoUrl || "https://www.youtube.com/watch?v=" + this.id;
    }
    Youtube.toCardItem = function (youtube) {
        return new __WEBPACK_IMPORTED_MODULE_0__shared_model_card_card_item_model__["a" /* CardItem */](youtube.title, 'youtube-img', youtube.publishDate.toLocaleDateString(), null, youtube.thumbnailUrl, youtube.description, youtube.videoUrl);
    };
    return Youtube;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tester_tester_component__ = __webpack_require__("./src/app/tester/tester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_bootstrap_component__ = __webpack_require__("./src/app/shared/bootstrap.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'bootstrap', component: __WEBPACK_IMPORTED_MODULE_3__shared_bootstrap_component__["a" /* BootstrapComponent */] },
    { path: '', redirectTo: 'bootstrap', pathMatch: 'full' },
    { path: 'tester', component: __WEBPACK_IMPORTED_MODULE_2__tester_tester_component__["a" /* TesterComponent */] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/service/category-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__param_rule_model__ = __webpack_require__("./src/app/service/param-rule.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryRepository = /** @class */ (function () {
    function CategoryRepository(dataSource) {
        this.dataSource = dataSource;
        this.categoryUrl = '/category';
    }
    CategoryRepository.prototype.all = function () {
        return this.dataSource.get(this.categoryUrl);
    };
    CategoryRepository.prototype.allNames = function () {
        return this.dataSource
            .get(this.categoryUrl, new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["e" /* REQUEST_NAME */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["e" /* REQUEST_NAME */].value));
    };
    CategoryRepository.prototype.allShorts = function () {
        return this.dataSource.get(this.categoryUrl, new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["f" /* REQUEST_SHORT */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["f" /* REQUEST_SHORT */].value));
    };
    CategoryRepository.prototype.allShortByCategoryName = function (categoryName) {
        if (!categoryName)
            return null;
        return this.dataSource.get(this.categoryUrl, new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["f" /* REQUEST_SHORT */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["f" /* REQUEST_SHORT */].value)
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["a" /* BY_CATEGORY_NAME */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["a" /* BY_CATEGORY_NAME */].value)
            .set('value', categoryName));
    };
    CategoryRepository.prototype.byName = function (name) {
        if (!name) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(null);
        }
        return this.dataSource
            .get(this.categoryUrl, new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["b" /* BY_NAME */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["b" /* BY_NAME */].value)
            .set('value', name));
    };
    CategoryRepository.prototype.testPost = function (category) {
        if (!category) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(null);
        }
        return this.dataSource.post(this.categoryUrl, category);
    };
    CategoryRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_source_service__["a" /* DataSource */]])
    ], CategoryRepository);
    return CategoryRepository;
}());



/***/ }),

/***/ "./src/app/service/data-source.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DataSource = /** @class */ (function () {
    function DataSource(http, backendUrl) {
        this.http = http;
        this.backendUrl = backendUrl;
    }
    DataSource.prototype.get = function (url, params) {
        return this.http.get(this.concatUrl(url), { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retry"])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    DataSource.prototype.post = function (url, body) {
        return this.http.post(this.concatUrl(url), body)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retry"])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    DataSource.prototype.concatUrl = function (url) {
        if (url.startsWith("/")) {
            url = url.substr(1);
        }
        return "" + this.backendUrl + url;
    };
    DataSource.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            throw error.error;
        }
        // return an ErrorObservable with a user-facing error messages
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    ;
    DataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_tokens__["c" /* BACKEND_URL_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String])
    ], DataSource);
    return DataSource;
}());



/***/ }),

/***/ "./src/app/service/github-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitHubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitHubService = /** @class */ (function () {
    function GitHubService(dataSource) {
        this.dataSource = dataSource;
        this.githubUrl = 'github';
    }
    GitHubService.prototype.byName = function (name) {
        if (!name || name.length < 1)
            return;
        return this.dataSource.get(this.githubUrl + "/" + name);
    };
    GitHubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_source_service__["a" /* DataSource */]])
    ], GitHubService);
    return GitHubService;
}());



/***/ }),

/***/ "./src/app/service/language-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__param_rule_model__ = __webpack_require__("./src/app/service/param-rule.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageRepository = /** @class */ (function () {
    function LanguageRepository(dataSource) {
        this.dataSource = dataSource;
        this.languageUrl = 'language';
    }
    LanguageRepository.prototype.searchAny = function (value) {
        /*if(value == null || value.length == 0) return null;*/
        return this.dataSource.get(this.languageUrl, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_2__param_rule_model__["c" /* BY_SPECIFICATION */].key, __WEBPACK_IMPORTED_MODULE_2__param_rule_model__["c" /* BY_SPECIFICATION */].value)
            .set('value', value));
    };
    LanguageRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_source_service__["a" /* DataSource */]])
    ], LanguageRepository);
    return LanguageRepository;
}());



/***/ }),

/***/ "./src/app/service/message-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageResolver = /** @class */ (function () {
    function MessageResolver(dataSource) {
        this.dataSource = dataSource;
        this.messageUrl = 'message';
    }
    MessageResolver.prototype.getBundle = function (codes) {
        return this.dataSource.get(this.messageUrl, new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set('value', codes.slice().toString()));
    };
    MessageResolver.prototype.messageByCode = function (code, bundles) {
        if (!bundles || !code)
            return;
        var message = bundles.find(function (_message) { return _message.code == code; });
        if (message) {
            return message.code;
        }
        else {
            return bundles
                .find(function (_message) {
                var lastSegment = _message.code.substr(_message.code.lastIndexOf('.') + 1);
                return lastSegment == code;
            }).message;
        }
    };
    MessageResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_source_service__["a" /* DataSource */]])
    ], MessageResolver);
    return MessageResolver;
}());



/***/ }),

/***/ "./src/app/service/paragraph-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__param_rule_model__ = __webpack_require__("./src/app/service/param-rule.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParagraphRepository = /** @class */ (function () {
    function ParagraphRepository(dataSource) {
        this.dataSource = dataSource;
        this.paragraphUrl = 'paragraph';
    }
    //The method returns the paragraph of which parent is null
    ParagraphRepository.prototype.byTopicName = function (topicName) {
        if (!topicName || topicName.length < 1) {
            return null;
        }
        return this.dataSource.get(this.paragraphUrl, new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["d" /* BY_TOPIC_NAME */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["d" /* BY_TOPIC_NAME */].value)
            .set('value', topicName));
    };
    ParagraphRepository.prototype.byTopicNameAndCategoryName = function (categoryName, topicName) {
        return this.dataSource.get(this.paragraphUrl + "/" + categoryName + "/" + topicName);
    };
    ParagraphRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_source_service__["a" /* DataSource */]])
    ], ParagraphRepository);
    return ParagraphRepository;
}());



/***/ }),

/***/ "./src/app/service/param-rule.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ParamRule */
/* unused harmony export BY_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BY_CATEGORY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BY_TOPIC_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BY_SPECIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_SHORT; });
var ParamRule = /** @class */ (function () {
    function ParamRule(key, value) {
        this.key = key;
        this.value = value;
    }
    return ParamRule;
}());

/*BY PARAMS*/
var BY_ID = new ParamRule('by', 'id');
var BY_NAME = new ParamRule('by', 'name');
var BY_CATEGORY_NAME = new ParamRule('by', 'categoryName');
var BY_TOPIC_NAME = new ParamRule('by', 'topicName');
var BY_SPECIFICATION = new ParamRule('by', 'specification');
/*REQUEST PARAMS*/
var REQUEST_NAME = new ParamRule('request', 'name');
var REQUEST_SHORT = new ParamRule('request', 'short');


/***/ }),

/***/ "./src/app/service/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_resolver_service__ = __webpack_require__("./src/app/service/message-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__youtube_service__ = __webpack_require__("./src/app/service/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_repository_service__ = __webpack_require__("./src/app/service/github-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_repository_service__ = __webpack_require__("./src/app/service/token-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__language_repository_service__ = __webpack_require__("./src/app/service/language-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__paragraph_repository_service__ = __webpack_require__("./src/app/service/paragraph-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__data_source_service__["a" /* DataSource */],
                __WEBPACK_IMPORTED_MODULE_3__message_resolver_service__["a" /* MessageResolver */],
                __WEBPACK_IMPORTED_MODULE_4__youtube_service__["a" /* YoutubeService */],
                __WEBPACK_IMPORTED_MODULE_6__token_repository_service__["a" /* TokenRepository */],
                __WEBPACK_IMPORTED_MODULE_5__github_repository_service__["a" /* GitHubService */],
                /*repository*/
                __WEBPACK_IMPORTED_MODULE_8__topic_repository_service__["a" /* TopicRepository */],
                __WEBPACK_IMPORTED_MODULE_7__category_repository_service__["a" /* CategoryRepository */],
                __WEBPACK_IMPORTED_MODULE_10__paragraph_repository_service__["a" /* ParagraphRepository */],
                __WEBPACK_IMPORTED_MODULE_9__language_repository_service__["a" /* LanguageRepository */],
            ],
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/service/token-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenRepository = /** @class */ (function () {
    function TokenRepository(dataSource) {
        this.dataSource = dataSource;
        this.tokenUrl = 'private/token';
    }
    TokenRepository.prototype.getToken = function (apiName) {
        return this.dataSource
            .get(this.tokenUrl + "/" + apiName);
    };
    TokenRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_source_service__["a" /* DataSource */]])
    ], TokenRepository);
    return TokenRepository;
}());



/***/ }),

/***/ "./src/app/service/topic-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__param_rule_model__ = __webpack_require__("./src/app/service/param-rule.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicRepository = /** @class */ (function () {
    function TopicRepository(dataSource) {
        this.dataSource = dataSource;
        this.topicUrl = 'topic';
    }
    TopicRepository.prototype.byCategoryName = function (_categoryName) {
        return this.dataSource.get(this.topicUrl, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set(__WEBPACK_IMPORTED_MODULE_3__param_rule_model__["a" /* BY_CATEGORY_NAME */].key, __WEBPACK_IMPORTED_MODULE_3__param_rule_model__["a" /* BY_CATEGORY_NAME */].value)
            .set('value', _categoryName));
    };
    TopicRepository.prototype.byTopicNameAndCategoryName = function (categoryName, topicName) {
        return this.dataSource.get(this.topicUrl + "/" + categoryName + "/" + topicName);
    };
    TopicRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_source_service__["a" /* DataSource */]])
    ], TopicRepository);
    return TopicRepository;
}());



/***/ }),

/***/ "./src/app/service/youtube.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_youtube_model__ = __webpack_require__("./src/app/model/youtube.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_repository_service__ = __webpack_require__("./src/app/service/token-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeService = /** @class */ (function () {
    function YoutubeService(http, tokenRepository) {
        var _this = this;
        this.http = http;
        this.tokenRepository = tokenRepository;
        this.apiName = 'youtube';
        this.tokenRepository.getToken(this.apiName)
            .subscribe(function (_apiToken) { return _this.apiToken = _apiToken; });
    }
    YoutubeService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + this.apiToken.token,
            "part=snippet",
            "type=video",
            "maxResults=9"
        ].join('&');
        var queryUrl = this.apiToken.url + "?" + params;
        return this.http.get(queryUrl)
            .map(function (response) {
            return response['items'].map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__model_youtube_model__["a" /* Youtube */](item.id.videoId, item.snippet.title, new Date(item.snippet.publishedAt), item.snippet.description, item.snippet.thumbnails.high.url);
            });
        })
            .delay(1000);
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__token_repository_service__["a" /* TokenRepository */]])
    ], YoutubeService);
    return YoutubeService;
}());



/***/ }),

/***/ "./src/app/shared/bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nfigure.mat-figure {\r\n  border: 1px solid #0f0f10;\r\n}\r\n\r\napp-git-user {\r\n  margin-top: 25px;\r\n  padding: 15px 15px 0;\r\n}\r\n\r\nmat-grid-tile {\r\n  overflow: auto;\r\n}\r\n\r\n.grid.container {\r\n  padding-top: 45px;\r\n}\r\n\r\nmat-grid-tile-header, mat-grid-tile-footer {\r\n  background-color: #fdfdfd !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list class=\"mat-typography mt-3 pt-0 p-3\" cols=\"4\" gutterSize=\"15px\" rowHeight=\"400px\" >\n  <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n    <mat-grid-tile-header>\n      <mat-icon [svgIcon]=\"'github-img'\" ></mat-icon>\n    </mat-grid-tile-header>\n    <app-git-user [github]=\"github\" ></app-git-user>\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n    <mat-grid-tile-header>\n      <mat-icon color=\"primary\" style=\"font-size: 2em\">list</mat-icon>&nbsp; Recent Content\n    </mat-grid-tile-header>\n      <mat-list role=\"list\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n        <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n        <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n      </mat-list>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n    <mat-grid-tile-header>Third Column</mat-grid-tile-header>\n    <div fxLayout=\"column\">\n      <h2 class=\"ui header\">Dogs Roles with Humans</h2>\n      <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>\n    </div>\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" >\n    <mat-grid-tile-header>Fourth Column</mat-grid-tile-header>\n    <div fxLayout=\"column\">\n      <h2 class=\"ui header\">Dogs Roles with Humans</h2>\n      <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>\n    </div>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/shared/bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_github_repository_service__ = __webpack_require__("./src/app/service/github-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent(githubRepository, adminName) {
        var _this = this;
        this.githubRepository = githubRepository;
        this.adminName = adminName;
        this.githubRepository
            .byName(this.adminName)
            .subscribe(function (_github) { return _this.github = _github; });
    }
    BootstrapComponent.prototype.ngOnInit = function () {
    };
    BootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bootstrap',
            template: __webpack_require__("./src/app/shared/bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/shared/bootstrap.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_tokens__["b" /* ADMIN_GITHUB_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_github_repository_service__["a" /* GitHubService */], String])
    ], BootstrapComponent);
    return BootstrapComponent;
}());



/***/ }),

/***/ "./src/app/shared/description/description.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.content-container {\r\n  padding: 20px 50px 50px 20px;\r\n}\r\n\r\npre {\r\n  background: rgba(0,0,0,.01);\r\n  border: .5px solid rgba(0,0,0,.03);\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin: 16px auto;\r\n  overflow-x: auto;\r\n  font-size: 14px;\r\n  padding: 20px;\r\n  font-family: Roboto Mono,monospace;\r\n}\r\n\r\n.content-header {\r\n  font-size: 20px;\r\n  display: block;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  font-size: 1.17em;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  color: rgba(0,0,0,.87);\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n.content-paragraph {\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  display: block;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  -webkit-margin-start: 0px;\r\n  font-weight: 400;\r\n  color: rgba(0,0,0,.87);\r\n  -webkit-margin-end: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/description/description.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  class=\"content-container\" >\n  <h3 class=\"content-header\">\n    {{ index }} &nbsp; {{ description.title}}\n    <mat-divider ></mat-divider>\n  </h3>\n  <p class=\"content-paragraph\" [innerHtml]=\"description.description\"></p>\n  <pre>{{ description.code}}</pre>\n</div>\n<app-description *ngFor=\"let child of description.children;let childIndex = index;\"\n                 [index]=\"index + '-' + (childIndex + 1)\"\n                 [description]=\"child\"></app-description>\n"

/***/ }),

/***/ "./src/app/shared/description/description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_description_model__ = __webpack_require__("./src/app/model/description.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_description_model__["a" /* Description */])
    ], DescriptionComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], DescriptionComponent.prototype, "index", void 0);
    DescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-description',
            template: __webpack_require__("./src/app/shared/description/description.component.html"),
            styles: [__webpack_require__("./src/app/shared/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/shared/git-user/git-user.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.ui.two div.value {\r\n  font-size: 1.5em !important;\r\n}\r\n\r\n.button-groups {\r\n  margin-top: 15px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.git-user-header .ui.label {\r\n  color: #0f0f10;\r\n}\r\n\r\n.git-user-subheader mat-icon {\r\n  font-size: 1em;\r\n}\r\n\r\n.git-user-header, .git-user-subheader {\r\n  font-size: 25px;\r\n  font-weight: 400;\r\n  margin: 0 0 16px 0;\r\n  padding: 0;\r\n}\r\n\r\n.git-user-header-content {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 25px;\r\n  margin: 0 0 24px 0;\r\n  padding: 15px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/git-user/git-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned stackable grid\">\n  <div class=\"row p-3\">\n    <div class=\"ten wide column\">\n      <h3 class=\"ui header dividing ml-2 git-user-header\" fxLayout fxLayoutAlign=\"space-between center\">\n        Git User :  {{github?.name}}\n        <i class=\"ui label\">{{github?.company}}</i>\n      </h3>\n      <p class=\"git-user-header-content\">\n        GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team repositories, we're your all-in-one platform for collaborative development.\n      </p>\n      <h3 class=\"ui header git-user-subheader\">\n        <mat-icon class=\"material-icons\">extension</mat-icon> About Git</h3>\n      <div class=\"ui two statistics\">\n        <div class=\"ui violet statistic\">\n          <div class=\"value\">\n            {{ github?.repoCounts }}\n          </div>\n          <div class=\"label\">\n            Repositories\n          </div>\n        </div>\n        <div class=\"ui orange statistic\">\n          <div class=\"label\">\n            Commits\n          </div>\n          <div class=\"value\">\n            518\n          </div>\n        </div>\n      </div>\n      <mat-divider></mat-divider>\n    </div>\n    <div class=\"four wide right floated column\">\n      <img src=\"{{github?.avatarUrl}}\" class=\"ui large bordered rounded image\" alt=\"{{github?.name}}'s avatar\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"button-groups center aligned column\" fxLayout fxLayoutGap=\"20px\">\n      <a mat-raised-button fxFlex=\"50%\" href=\"{{github?.htmlUrl}}\" color=\"primary\">Repository</a>\n      <a mat-raised-button fxFlex=\"50%\" href=\"{{github?.blog}}\" color=\"accent\">Another Blog</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/git-user/git-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_github_model__ = __webpack_require__("./src/app/model/github.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitUserComponent = /** @class */ (function () {
    function GitUserComponent() {
    }
    GitUserComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_github_model__["a" /* GitHub */])
    ], GitUserComponent.prototype, "github", void 0);
    GitUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-git-user',
            template: __webpack_require__("./src/app/shared/git-user/git-user.component.html"),
            styles: [__webpack_require__("./src/app/shared/git-user/git-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GitUserComponent);
    return GitUserComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  height: 56px;\r\n  padding: 8px 16px;\r\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.search-field {\r\n  display: contents !important;\r\n  color: white;\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  font-size: 13px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.app-header-right {\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar class=\"app-header\" color=\"primary\">\n  <div class=\"header-container\" style=\"width: 100%\"\n       fxLayout\n       fxLayoutAlign=\"space-between center\">\n    <mat-nav-list class=\"app-header-left\" dense>\n      <span mat-list-item >\n        <a mat-icon-button (click)=\"onSidenavToggle.emit()\">\n          <mat-icon>list</mat-icon>\n        </a>\n      </span>\n      <span mat-list-item >\n        <a mat-icon-button routerLink=\"/bootstrap\" >\n          <mat-icon >home</mat-icon>\n        </a>\n      </span>\n      <span mat-list-item >\n        <a mat-icon-button routerLink=\"/category\" >\n          <mat-icon>dashboard</mat-icon>\n        </a>\n      </span>\n      <span mat-list-item >\n        <a mat-icon-button routerLink=\"/tester\" >\n          <mat-icon >warning</mat-icon>\n        </a>\n      </span>\n    </mat-nav-list>\n    <div class=\"app-header-right\" fxHide.lt-sm=\"true\">\n      <mat-form-field class=\"search-field\" color=\"primary\" >\n        <input matInput placeholder=\"Term\"\n               [formControl]=\"searchInput\"\n               (focus)=\"searchHidden=false\"\n               (blur)=\"searchHidden=true\"/>\n        <span matPrefix>* &nbsp;</span>\n        <mat-icon matSuffix>search</mat-icon>\n        <mat-hint align=\"start\"><strong> Find topics </strong></mat-hint>\n        <mat-hint align=\"end\">0 / 15</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n</mat-toolbar>\n<app-search-header [searchForm]=\"searchInput\" *ngIf=\"!searchHidden\"></app-search-header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.onSidenavToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.searchHidden = true;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "onSidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/locator/locator.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.app-locator {\r\n  top: 50px;\r\n  border: 0;\r\n  outline: 0;\r\n  font-size: 12px;\r\n  padding: 5px 0 0 15px;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  color: #cecece;\r\n  vertical-align: baseline;\r\n  height: 55px;\r\n  line-height: 40px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  vertical-align: middle;\r\n}\r\n\r\n.app-locator * {\r\n  color: #cecece;\r\n  background-color: inherit;\r\n}\r\n\r\n.app-locator .ui.small {\r\n  padding: 0;\r\n  margin-left: 5px;\r\n}\r\n\r\n.app-locator a {\r\n  color: #cecece;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/locator/locator.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-locator\" color=\"primary\">\n  <div class=\"ui small breadcrumb\" *ngFor=\"let segment of urlSegments;let isLast = last\">\n    <a class=\"section\"> {{ segment }}</a>\n    <i class=\"right chevron icon divider\" *ngIf=\"!isLast\"></i>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/locator/locator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocatorComponent = /** @class */ (function () {
    function LocatorComponent(router) {
        var _this = this;
        this.router = router;
        this.urlSegments = [];
        this.router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (event) { return event.urlAfterRedirects; })).subscribe(function (url) { return _this.extractUrlSegment(url); });
    }
    LocatorComponent.prototype.ngOnInit = function () {
    };
    LocatorComponent.prototype.extractUrlSegment = function (url) {
        var temp = url.split('/');
        var index;
        while ((index = temp.findIndex(function (_segment) { return _segment === '' || _segment === null; })) != -1) {
            temp.splice(index, 1);
        }
        temp.forEach(function (segment, index) {
            temp[index] = decodeURIComponent(segment);
        });
        var lastSegment = temp[temp.length - 1];
        if (lastSegment == null) {
            this.urlSegments = temp.slice();
        }
        if (lastSegment.indexOf('=') !== -1 && lastSegment.indexOf('?') !== -1) {
            temp[temp.length - 1] = lastSegment.substr(0, lastSegment.indexOf('?'));
        }
        this.urlSegments = ['/'].concat(temp);
    };
    LocatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locator',
            template: __webpack_require__("./src/app/shared/locator/locator.component.html"),
            styles: [__webpack_require__("./src/app/shared/locator/locator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LocatorComponent);
    return LocatorComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var materials = [
    __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatStepperModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDividerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: materials,
            exports: materials,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/model-card/card-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardItem; });
var CardItem = /** @class */ (function () {
    function CardItem(name, svgName, meta, metaSvg, imgLocation, description, dataLocation) {
        this.name = name;
        this.svgName = svgName;
        this.meta = meta;
        this.metaSvg = metaSvg;
        this.imgLocation = imgLocation;
        this.description = description;
        this.dataLocation = dataLocation;
    }
    return CardItem;
}());



/***/ }),

/***/ "./src/app/shared/model-card/model-card.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-card {\r\n  margin: 15px;\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n  font-weight: 600;\r\n}\r\n\r\nmat-card-title {\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n  font-weight: 600;\r\n}\r\n\r\n.mat-card-image {\r\n  height: 200px;\r\n}\r\n\r\nmat-card-footer {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\nmat-card-content p {\r\n  min-height: 130px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/model-card/model-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-header>\n    <mat-icon mat-card-avatar\n              *ngIf=\"cardItem.svgName\"\n              [svgIcon]=\"cardItem.svgName\"></mat-icon>\n    <mat-card-title>{{ cardItem.name }}</mat-card-title>\n    <mat-card-subtitle fxLayout fxLayoutAlign=\"space-between center\">\n      <mat-icon  [svgIcon]=\"cardItem.metaSvg\"></mat-icon>\n      <div class=\"ui label ml-2\" fxHide.lt-md=\"true\">\n        {{ cardItem.meta }}\n      </div>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <img *ngIf=\"cardItem.imgLocation\"  mat-card-image [src]=\"cardItem.imgLocation\" >\n  <mat-card-content>\n    <p>\n      {{ cardItem.description }}\n    </p>\n  </mat-card-content>\n  <mat-card-actions fxLayout fxLayoutAlign=\"space-evenly center\">\n    <button mat-button color=\"primary\" routerLink=\"{{ cardItem.dataLocation }}\">Get Start</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/model-card/model-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_item_model__ = __webpack_require__("./src/app/shared/model-card/card-item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelCardComponent = /** @class */ (function () {
    function ModelCardComponent() {
    }
    ModelCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__card_item_model__["a" /* CardItem */])
    ], ModelCardComponent.prototype, "cardItem", void 0);
    ModelCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-model-card',
            template: __webpack_require__("./src/app/shared/model-card/model-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/model-card/model-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModelCardComponent);
    return ModelCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/panel-bar/panel-bar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.menu-bar {\r\n  background-color:  #d9c8ff;\r\n  height: 32px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/panel-bar/panel-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"menu-bar\">\n  <button [color]=\"drawerOpen ? 'primary' : 'accent'\" mat-icon-button\n          [matTooltip]=\"drawerOpen ? 'Open panel!' : 'Close panel!'\"\n          (click)=\"onDrawerToggle.emit()\">\n    <mat-icon [color]=\"drawerOpen ? 'primary' : 'accent'\" >\n      {{drawerOpen ? 'arrow_back' : 'arrow_forward'}}\n    </mat-icon>\n  </button>\n  <button mat-icon-button\n          routerLink=\"{{ backLink }}\"\n          [matTooltip]=\"backLinkDescription\"\n          color=\"primary\">\n    <mat-icon>view_compact</mat-icon>\n  </button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/panel-bar/panel-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelBarComponent = /** @class */ (function () {
    function PanelBarComponent() {
        this.drawerOpen = true;
        this.onDrawerToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PanelBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PanelBarComponent.prototype, "backLink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PanelBarComponent.prototype, "backLinkDescription", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PanelBarComponent.prototype, "drawerOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PanelBarComponent.prototype, "onDrawerToggle", void 0);
    PanelBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-panel-bar',
            template: __webpack_require__("./src/app/shared/panel-bar/panel-bar.component.html"),
            styles: [__webpack_require__("./src/app/shared/panel-bar/panel-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelBarComponent);
    return PanelBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/panel/panel-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PanelListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelList; });
var PanelListItem = /** @class */ (function () {
    function PanelListItem(name, link) {
        this.name = name;
        this.link = link;
    }
    ;
    return PanelListItem;
}());

var PanelList = /** @class */ (function () {
    function PanelList(name, link, items) {
        this.name = name;
        this.link = link;
        this.items = items;
    }
    return PanelList;
}());



/***/ }),

/***/ "./src/app/shared/panel/panel.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-expansion-panel.mat-expansion-panel {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n\r\n.panel-container {\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n.category-list-item, div.mat-list-item-content {\r\n  padding: 0 !important;\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n.panel-header {\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n.btn-block {\r\n  height: 35px;\r\n  text-align: start;\r\n}\r\n\r\n\r\n.mat-expansion-panel-content, .mat-expansion-panel-body {\r\n  padding: 0 0px 0 0 !important;\r\n}\r\n\r\n\r\n.nested-list {\r\n  padding: 0 0px 0 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"panel-container\">\n  <mat-expansion-panel *ngFor=\"let list of panelLists\"\n                       class=\"panel-header\"\n                       mat-list-item\n                       [routerLinkActive]=\"'active'\"\n                       [disabled]=\"isEmpty(list)\">\n    <mat-expansion-panel-header class=\"panel-header\">\n      <mat-panel-title>{{ list.name }}</mat-panel-title>\n    </mat-expansion-panel-header>\n    <mat-nav-list dense>\n      <button\n        class=\"category-list-item btn-block\"\n        mat-button\n        mat-list-item\n        color=\"primary\"\n        [routerLinkActive]=\"'active'\"\n        routerLink=\"{{ list.link }}\">\n        {{ list.name }} Topic Main\n      </button>\n      <mat-list-item\n        class=\"category-list-item\"\n        *ngFor=\"let item of list.items;let i = index\"\n        [routerLinkActive]=\"'active'\"\n        routerLink=\"{{ item.link }}\">\n        {{ i+1 }}.&nbsp; {{ item.name }}\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-expansion-panel>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/shared/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () { };
    PanelComponent.prototype.isEmpty = function (list) {
        return !list.items || list.items.length == 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PanelComponent.prototype, "panelLists", void 0);
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-panel',
            template: __webpack_require__("./src/app/shared/panel/panel.component.html"),
            styles: [__webpack_require__("./src/app/shared/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/search-header/search-header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.search-field {\r\n  display: contents !important;\r\n  color: white;\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  font-size: 13px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.app-header-right {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nmat-list .mat-subheader{\r\n  font-weight: 700;\r\n}\r\n\r\nmat-list h4.mat-line {\r\n  text-align: start;\r\n  font-weight: 500;\r\n  line-height: 1.5;\r\n}\r\n\r\nmat-list p.mat-line {\r\n  text-align: end;\r\n}\r\n\r\n.app-search-result {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: #ededf1;\r\n  z-index: 2;\r\n  overflow: auto;\r\n  text-align: center;\r\n  padding: 30px 30px 0;\r\n  max-height: 800px;\r\n  font-size: 12px;\r\n  top: 56px;\r\n  height: auto;\r\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);;\r\n}\r\n\r\n.result-content {\r\n  padding: 0px 50px 50px 50px;\r\n}\r\n\r\n.no-result-content {\r\n  padding: 0px 50px 50px 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/search-header/search-header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-search-result\"\n             fxLayout=\"row no-wrap\"\n             fxLayoutAlign=\"space-evenly center\">\n  <div class=\"no-result-content\" fxFlex=\"100%\" *ngIf=\"resultEmpty\" >\n    <mat-list>\n      <h3 mat-subheader>No Result</h3>\n      <mat-divider></mat-divider>\n    </mat-list>\n  </div>\n  <div class=\"result-content\" fxFlex=\"30%\" *ngIf=\"!resultEmpty\">\n    <mat-list>\n      <h3 mat-subheader>Language</h3>\n      <mat-divider></mat-divider>\n      <mat-list-item *ngFor=\"let language of languages\">\n        <h4 mat-line >{{ language.name }}</h4>\n        <i class=\"ui label grey\" ><i class=\"ui icon leaf\"></i> {{ language.type }}</i>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"result-result-content\" fxFlex=\"30%\"\n       fxLayout=\"column\"\n       fxLayoutAlign=\"start\">\n    <mat-list dense>\n    </mat-list>\n  </div>\n  <div class=\"result-result-content\" fxFlex=\"30%\"\n       fxLayout=\"column\"\n       fxLayoutAlign=\"start\">\n    <mat-list dense>\n    </mat-list>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/search-header/search-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_language_repository_service__ = __webpack_require__("./src/app/service/language-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchHeaderComponent = /** @class */ (function () {
    function SearchHeaderComponent(languageRepository) {
        this.languageRepository = languageRepository;
    }
    SearchHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["debounceTime"])(500), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["switchMap"])(function (value) { return _this.languageRepository.searchAny(value); })).subscribe(function (_languages) { return _this.languages = _languages; });
    };
    Object.defineProperty(SearchHeaderComponent.prototype, "resultEmpty", {
        get: function () {
            return this.languages == null || this.languages.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */])
    ], SearchHeaderComponent.prototype, "searchForm", void 0);
    SearchHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-header',
            template: __webpack_require__("./src/app/shared/search-header/search-header.component.html"),
            styles: [__webpack_require__("./src/app/shared/search-header/search-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_language_repository_service__["a" /* LanguageRepository */]])
    ], SearchHeaderComponent);
    return SearchHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bootstrap_component__ = __webpack_require__("./src/app/shared/bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidenav_sidenav_component__ = __webpack_require__("./src/app/shared/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locator_locator_component__ = __webpack_require__("./src/app/shared/locator/locator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__panel_panel_component__ = __webpack_require__("./src/app/shared/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_card_model_card_component__ = __webpack_require__("./src/app/shared/model-card/model-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__panel_bar_panel_bar_component__ = __webpack_require__("./src/app/shared/panel-bar/panel-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_header_search_header_component__ = __webpack_require__("./src/app/shared/search-header/search-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__git_user_git_user_component__ = __webpack_require__("./src/app/shared/git-user/git-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__description_description_component__ = __webpack_require__("./src/app/shared/description/description.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__locator_locator_component__["a" /* LocatorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_12__panel_bar_panel_bar_component__["a" /* PanelBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__model_card_model_card_component__["a" /* ModelCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__git_user_git_user_component__["a" /* GitUserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__description_description_component__["a" /* DescriptionComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bootstrap_component__["a" /* BootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__locator_locator_component__["a" /* LocatorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__model_card_model_card_component__["a" /* ModelCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__panel_bar_panel_bar_component__["a" /* PanelBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_header_search_header_component__["a" /* SearchHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__git_user_git_user_component__["a" /* GitUserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__description_description_component__["a" /* DescriptionComponent */],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n:host {\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  margin: 0;\r\n  font-size: 13px;\r\n}\r\nmat-toolbar {\r\n  height: 20px;\r\n}\r\nh3, h4, mat-toolbar, mat-list-item {\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  margin: 0;\r\n  font-size: 13px;\r\n}\r\n.app-sidenav {\r\n  width: 100%;\r\n  padding-top: 0;\r\n}\r\nmat-list-item mat-icon{\r\n  margin-right: 15px;\r\n}\r\nmat-expansion-panel.app-nested-list {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\nmat-expansion-panel.app-nested-list mat-expansion-panel-header {\r\n  padding: 0 15px;\r\n}\r\nmat-expansion-panel.app-nested-list mat-list-item {\r\n  padding: 0 15px;\r\n}\r\n.mat-expansion-panel-content, .mat-expansion-panel-body {\r\n  padding: 0 15px 0 0 !important;\r\n}\r\n.nested-list {\r\n  padding: 0 15px 0 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list class=\"app-sidenav\">\n    <mat-list-item>\n      <mat-icon>help_outline</mat-icon>&nbsp; <h3> {{ messageResolver.messageByCode('guide',messages) }} </h3>\n    </mat-list-item>\n    <mat-expansion-panel class=\"app-nested-list\"\n                         mat-list-item\n                         *ngFor=\"let category of categories\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h3> {{ category.name }}</h3>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <mat-toolbar>\n        {{ category.name }} {{ messageResolver.messageByCode('topics', messages) }}\n      </mat-toolbar>\n      <mat-nav-list class=\"nested-list\">\n        <mat-list-item class=\"nested-list\"\n                       *ngFor=\"let topic of category.topics\"\n                       routerLinkActive=\"active\"\n                       [routerLink]=\"['/topic',category.name,topic.name]\">\n          <h4>{{ topic.name }}</h4>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-expansion-panel>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_message_resolver_service__ = __webpack_require__("./src/app/service/message-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(categoryRepository, messageResolver) {
        var _this = this;
        this.categoryRepository = categoryRepository;
        this.messageResolver = messageResolver;
        this.messages = [
            { code: 'label.sidenav.guide' },
            { code: 'label.sidenav.topics' }
        ];
        this.categoryRepository.allShorts()
            .subscribe(function (_categories) { return _this.categories = _categories; });
        var codes = this.messages
            .map(function (message) { return message.code; });
        this.messageResolver.getBundle(codes)
            .subscribe(function (_message) { return _this.messages = _message; });
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/shared/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./src/app/shared/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__["a" /* CategoryRepository */],
            __WEBPACK_IMPORTED_MODULE_2__service_message_resolver_service__["a" /* MessageResolver */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/tester/form/category-form/category-form.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  margin-top: 15px;\r\n\r\n  width: 100%;\r\n}\r\n\r\n.ui.segment {\r\n  width: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tester/form/category-form/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui raised piled segments\"\n     fxLayout=\"column\"\n     fxLayoutAlign=\"center center\">\n  <div class=\"ui segment\">\n    <h2 class=\"ui header\">Demo Category Form</h2>\n  </div>\n  <form [formGroup]=\"form\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center center\"\n        class=\"ui segment segments\"\n        (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input type=\"text\"\n             name=\"name\"\n             [formControl]=\"inputName\"\n             matInput\n             required\n             minlength=\"3\"\n             maxlength=\"20\"\n             placeholder=\"카테고리 이름\">\n      <mat-hint align=\"start\">카테고리 이름을 입력하세요</mat-hint>\n      <mat-hint align=\"end\"> {{ inputName.value?.length }} / 20</mat-hint>\n      <mat-error>\n        카테고리 이름이 유효하지 않아요!  <mat-icon>mood_bad</mat-icon>\n      </mat-error>\n\n      <mat-error *ngIf=\"inputName.hasError('duplicateName')\">\n        카테고리 이름이 이미 존재합니다! <mat-icon>mood_bad</mat-icon>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select formControlName=\"language\" placeholder=\"Select one\">\n        <mat-option [value]=\"'javascript'\">JAVASCRIPT</mat-option>\n        <mat-option [value]=\"'typescript'\">TYPESCRIPT</mat-option>\n        <mat-option [value]=\"'java'\">JAVA</mat-option>\n      </mat-select>\n      <mat-hint>Language을 선택하세요</mat-hint>\n      <mat-error>무조건 하나는 선택해야되요! <mat-icon>mood_bad</mat-icon></mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"description-field\">\n      <textarea\n             name=\"description\"\n             formControlName=\"description\"\n             rows=\"8\"\n             matInput\n             required\n             placeholder=\"설명\">\n      </textarea>\n      <mat-hint>카테고리 설명을 입력하세요</mat-hint>\n      <mat-error>카테고리 설명이 유효하지 않아요! <mat-icon>mood_bad</mat-icon></mat-error>\n    </mat-form-field>\n    <div class=\"ui segment\">\n      <button type=\"submit\" class=\"btn-block\" mat-raised-button color=\"primary\">Submit</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tester/form/category-form/category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_language_repository_service__ = __webpack_require__("./src/app/service/language-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryFormComponent = /** @class */ (function () {
    function CategoryFormComponent(fb, matSnackbar, languageRepository, categoryRepository) {
        var _this = this;
        this.fb = fb;
        this.matSnackbar = matSnackbar;
        this.languageRepository = languageRepository;
        this.categoryRepository = categoryRepository;
        this.submit = false;
        this.duplicateName = false;
        this.form = fb.group({
            'name': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].min(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].max(20)],],
            'description': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].max(1000)]],
            'language': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,]]
        });
        this.inputName = this.form.controls['name'];
        this.inputName
            .valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["debounceTime"])(500), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function (value) { return _this.categoryRepository.byName(value); }))
            .subscribe(function (_category) {
            if (_category) {
                _this.inputName.setErrors({ 'duplicateName': true });
            }
            else {
                /*ignore*/
            }
        });
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
    };
    CategoryFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        console.log(this.inputName.errors);
        if (this.form.valid && !this.duplicateName) {
            this.submit = true;
            this.categoryRepository.testPost({
                name: this.inputName.value,
                description: this.form.controls['description'].value,
            }).subscribe(function (data) { return console.log('data' + data); }, function (error) {
                console.log(error);
                var messages = error;
                messages.forEach(function (message) { return _this.matSnackbar.open(message.field + ": " + message.message, null, { duration: 3000 }); });
            });
            this.form.reset();
        }
    };
    CategoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-form',
            template: __webpack_require__("./src/app/tester/form/category-form/category-form.component.html"),
            styles: [__webpack_require__("./src/app/tester/form/category-form/category-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__service_language_repository_service__["a" /* LanguageRepository */],
            __WEBPACK_IMPORTED_MODULE_3__service_category_repository_service__["a" /* CategoryRepository */]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/tester/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-category-form></app-category-form>\r\n"

/***/ }),

/***/ "./src/app/tester/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/tester/form/form.component.html"),
            styles: [__webpack_require__("./src/app/tester/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/tester/model/article.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(title, link, votes) {
        if (votes === void 0) { votes = 0; }
        this.title = title;
        this.link = link;
        this.votes = votes;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
    };
    Article.prototype.voteDown = function () {
        var temp = this.votes - 1;
        this.votes = temp >= 0 ? temp : 0;
    };
    Article.prototype.domain = function () {
        try {
            var domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return Article;
}());



/***/ }),

/***/ "./src/app/tester/route/auth-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_source_service__ = __webpack_require__("./src/app/service/data-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthManager = /** @class */ (function () {
    function AuthManager(dataSource) {
        this.dataSource = dataSource;
        this.loginUrl = 'simple/login';
    }
    AuthManager.prototype.login = function (user, password) {
        var _this = this;
        return this.dataSource.post(this.loginUrl, {
            id: user,
            password: password
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (_response) {
            console.log(_response);
            _this.loginUser = _response ? _response : null;
            return _response != null;
        }));
    };
    AuthManager.prototype.logout = function () {
        this.loginUser = null;
    };
    AuthManager.prototype.getUser = function () {
        return this.loginUser;
    };
    AuthManager.prototype.isLoggedIn = function () {
        return this.loginUser != null;
    };
    AuthManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_source_service__["a" /* DataSource */]])
    ], AuthManager);
    return AuthManager;
}());



/***/ }),

/***/ "./src/app/tester/route/log-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_manager_service__ = __webpack_require__("./src/app/tester/route/auth-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogInGuard = /** @class */ (function () {
    function LogInGuard(authManager) {
        this.authManager = authManager;
    }
    LogInGuard.prototype.canActivate = function (route, state) {
        return this.authManager.isLoggedIn();
    };
    LogInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_manager_service__["a" /* AuthManager */]])
    ], LogInGuard);
    return LogInGuard;
}());



/***/ }),

/***/ "./src/app/tester/route/protected/protected.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/route/protected/protected.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p class=\"well\">\n  My precious resource...\n</p>\n"

/***/ }),

/***/ "./src/app/tester/route/protected/protected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProtectedComponent = /** @class */ (function () {
    function ProtectedComponent() {
    }
    ProtectedComponent.prototype.ngOnInit = function () {
    };
    ProtectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-protected',
            template: __webpack_require__("./src/app/tester/route/protected/protected.component.html"),
            styles: [__webpack_require__("./src/app/tester/route/protected/protected.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProtectedComponent);
    return ProtectedComponent;
}());



/***/ }),

/***/ "./src/app/tester/route/route.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"container-fluid mat-typography\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div class=\"login m-3\">\n    <app-simple-login></app-simple-login>\n  </div>\n\n  <div class=\"mt-3\">\n    <button mat-raised-button\n            [routerLink]=\"['/tester','protected']\"\n            color=\"accent\">Go to Protected Resource</button>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/tester/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_manager_service__ = __webpack_require__("./src/app/tester/route/auth-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteComponent = /** @class */ (function () {
    function RouteComponent(auth) {
        this.auth = auth;
    }
    RouteComponent.prototype.ngOnInit = function () {
    };
    RouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-route',
            template: __webpack_require__("./src/app/tester/route/route.component.html"),
            styles: [__webpack_require__("./src/app/tester/route/route.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_manager_service__["a" /* AuthManager */]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/tester/route/simple-login/simple-login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/route/simple-login/simple-login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"well\" *ngIf=\"authManager.getUser()\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n  Logged in as <b> {{ authManager.getUser() | json }}</b>\n  <mat-divider></mat-divider>\n  <button mat-button (click)=\"logout()\" class=\"pt-3\">Log out</button>\n</div>\n<mat-toolbar color=\"accent\" *ngIf=\"message\">\n  {{ message }}\n</mat-toolbar>\n<div class=\"login-container mt-3\" *ngIf=\"!authManager.getUser()\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n  <mat-form-field style=\"width: 100%\">\n    <input matInput #idInput placeholder=\"ID\">\n  </mat-form-field>\n  <mat-form-field style=\"width: 100%\">\n    <input matInput type=\"password\" #passwordInput placeholder=\"Password\">\n  </mat-form-field>\n\n  <div class=\"btn-groups\">\n    <button mat-raised-button (click)=\"login(idInput.value, passwordInput.value)\">Login</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tester/route/simple-login/simple-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_manager_service__ = __webpack_require__("./src/app/tester/route/auth-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLoginComponent = /** @class */ (function () {
    function SimpleLoginComponent(authManager) {
        this.authManager = authManager;
        this.message = '';
    }
    SimpleLoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.message = '';
        this.authManager
            .login(username, password)
            .subscribe(function (data) { console.log(data); }, function (error) {
            _this.message = 'Incorrect Crendentials.';
            console.log('error');
            setTimeout(function () {
                this.message = '';
            }.bind(_this), 2500);
        });
    };
    SimpleLoginComponent.prototype.logout = function () {
        this.authManager.logout();
        return false;
    };
    SimpleLoginComponent.prototype.ngOnInit = function () {
    };
    SimpleLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-login',
            template: __webpack_require__("./src/app/tester/route/simple-login/simple-login.component.html"),
            styles: [__webpack_require__("./src/app/tester/route/simple-login/simple-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_manager_service__["a" /* AuthManager */]])
    ], SimpleLoginComponent);
    return SimpleLoginComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-nav-list>\r\n    <a mat-button routerLink=\"/tester/reddit\" >Reddit</a>\r\n    <a mat-button routerLink=\"/tester/inventory\" >Inventory</a>\r\n    <a mat-button routerLink=\"/tester/form\" >Form</a>\r\n    <a mat-button routerLink=\"/tester/youtube\" >Youtube</a>\r\n    <a mat-button routerLink=\"/tester/route\" >Route</a>\r\n  </mat-nav-list>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/tester/tester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TesterComponent = /** @class */ (function () {
    function TesterComponent() {
    }
    TesterComponent.prototype.ngOnInit = function () {
    };
    TesterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tester',
            template: __webpack_require__("./src/app/tester/tester.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester.component.css")]
        })
    ], TesterComponent);
    return TesterComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tester_component__ = __webpack_require__("./src/app/tester/tester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tester_reddit_main_reddit_reddit_component__ = __webpack_require__("./src/app/tester/tester/reddit-main/reddit/reddit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tester_reddit_main_article_article_component__ = __webpack_require__("./src/app/tester/tester/reddit-main/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tester_reddit_main_reddit_main_component__ = __webpack_require__("./src/app/tester/tester/reddit-main/reddit-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tester_inventory_main_inventory_main_component__ = __webpack_require__("./src/app/tester/tester/inventory-main/inventory-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tester_inventory_main_category_short_list_category_short_list_component__ = __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tester_inventory_main_category_short_list_category_short_row_category_short_row_component__ = __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-short-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tester_inventory_main_category_short_list_category_short_row_category_img_category_img_component__ = __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-img/category-img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tester_inventory_main_category_short_list_category_short_row_category_details_category_details_component__ = __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-details/category-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tester_echo_echo_component__ = __webpack_require__("./src/app/tester/tester/echo/echo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__form_form_component__ = __webpack_require__("./src/app/tester/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__form_category_form_category_form_component__ = __webpack_require__("./src/app/tester/form/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__youtube_youtube_component__ = __webpack_require__("./src/app/tester/youtube/youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__youtube_youtube_search_youtube_search_component__ = __webpack_require__("./src/app/tester/youtube/youtube-search/youtube-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__youtube_youtube_search_service__ = __webpack_require__("./src/app/tester/youtube/youtube-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__youtube_youtube_card_youtube_card_component__ = __webpack_require__("./src/app/tester/youtube/youtube-card/youtube-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__route_route_component__ = __webpack_require__("./src/app/tester/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__route_auth_manager_service__ = __webpack_require__("./src/app/tester/route/auth-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__route_simple_login_simple_login_component__ = __webpack_require__("./src/app/tester/route/simple-login/simple-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__route_protected_protected_component__ = __webpack_require__("./src/app/tester/route/protected/protected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__route_log_in_guard__ = __webpack_require__("./src/app/tester/route/log-in.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    {
        path: 'tester', component: __WEBPACK_IMPORTED_MODULE_7__tester_component__["a" /* TesterComponent */],
        children: [
            { path: 'reddit', component: __WEBPACK_IMPORTED_MODULE_10__tester_reddit_main_reddit_main_component__["a" /* RedditMainComponent */] },
            { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_11__tester_inventory_main_inventory_main_component__["a" /* InventoryMainComponent */] },
            { path: 'form', component: __WEBPACK_IMPORTED_MODULE_17__form_form_component__["a" /* FormComponent */] },
            { path: 'youtube', component: __WEBPACK_IMPORTED_MODULE_19__youtube_youtube_component__["a" /* YoutubeComponent */] },
            { path: 'route', component: __WEBPACK_IMPORTED_MODULE_23__route_route_component__["a" /* RouteComponent */] },
            { path: 'protected', component: __WEBPACK_IMPORTED_MODULE_26__route_protected_protected_component__["a" /* ProtectedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__route_log_in_guard__["a" /* LogInGuard */]] },
        ]
    },
];
var TesterModule = /** @class */ (function () {
    function TesterModule() {
    }
    TesterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__youtube_youtube_search_service__["a" /* YOUTUBE_API_TOKENS */],
                __WEBPACK_IMPORTED_MODULE_21__youtube_youtube_search_service__["b" /* YoutubeSearchService */],
                __WEBPACK_IMPORTED_MODULE_24__route_auth_manager_service__["a" /* AuthManager */],
                __WEBPACK_IMPORTED_MODULE_27__route_log_in_guard__["a" /* LogInGuard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__tester_component__["a" /* TesterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tester_reddit_main_reddit_reddit_component__["a" /* RedditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tester_reddit_main_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__tester_reddit_main_reddit_main_component__["a" /* RedditMainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tester_inventory_main_inventory_main_component__["a" /* InventoryMainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tester_inventory_main_category_short_list_category_short_list_component__["a" /* CategoryShortListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tester_inventory_main_category_short_list_category_short_row_category_short_row_component__["a" /* CategoryShortRowComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tester_inventory_main_category_short_list_category_short_row_category_img_category_img_component__["a" /* CategoryImgComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tester_inventory_main_category_short_list_category_short_row_category_details_category_details_component__["a" /* CategoryDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__tester_echo_echo_component__["a" /* EchoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__form_category_form_category_form_component__["a" /* CategoryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_19__youtube_youtube_component__["a" /* YoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__youtube_youtube_search_youtube_search_component__["a" /* YoutubeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__youtube_youtube_card_youtube_card_component__["a" /* YoutubeCardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__route_route_component__["a" /* RouteComponent */],
                __WEBPACK_IMPORTED_MODULE_25__route_simple_login_simple_login_component__["a" /* SimpleLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__route_protected_protected_component__["a" /* ProtectedComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */]
            ]
        })
    ], TesterModule);
    return TesterModule;
}());



/***/ }),

/***/ "./src/app/tester/tester/echo/echo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/echo/echo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  echo works!\n</p>\n"

/***/ }),

/***/ "./src/app/tester/tester/echo/echo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchoComponent = /** @class */ (function () {
    function EchoComponent() {
    }
    EchoComponent.prototype.ngOnInit = function () {
    };
    EchoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-echo',
            template: __webpack_require__("./src/app/tester/tester/echo/echo.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/echo/echo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EchoComponent);
    return EchoComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui items divided p-5\">\n  <app-category-short-row\n    *ngFor=\"let foobar of categories\"\n    [category]=\"foobar\"\n    (click)=\"selected(foobar)\"\n    [class.active]=\"isSelect(category)\"></app-category-short-row>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryShortListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryShortListComponent = /** @class */ (function () {
    function CategoryShortListComponent() {
        this.onSelectCategory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CategoryShortListComponent.prototype.ngOnInit = function () {
    };
    CategoryShortListComponent.prototype.selected = function (category) {
        this.currentCategory = category;
        this.onSelectCategory.emit(category);
    };
    CategoryShortListComponent.prototype.isSelect = function (category) {
        if (!category || !this.currentCategory) {
            return false;
        }
        return this.currentCategory.id === category.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CategoryShortListComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CategoryShortListComponent.prototype, "onSelectCategory", void 0);
    CategoryShortListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-short-list',
            template: __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-list.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryShortListComponent);
    return CategoryShortListComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-details/category-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-details/category-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"category-detail\">\n  <div class=\"ui label\"><i class=\"code icon\"></i> {{category.type}}</div>\n  <div class=\"ui label\"><i class=\"globe icon\"></i> {{category.language.name}}</div>\n  <div class=\"ui label\"><i class=\"terminal icon\"></i> {{category.language.type}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-details/category-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_category_model__ = __webpack_require__("./src/app/model/category.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryDetailsComponent = /** @class */ (function () {
    function CategoryDetailsComponent() {
    }
    CategoryDetailsComponent.prototype.ngOnInit = function () {
        console.log(this.category);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_category_model__["a" /* Category */])
    ], CategoryDetailsComponent.prototype, "category", void 0);
    CategoryDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-details',
            template: __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-details/category-details.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-details/category-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryDetailsComponent);
    return CategoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-img/category-img.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-img/category-img.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"{{ '/assets/img/svg/' + category.imgName + '.svg' }}\" alt=\"{{category.name}}\">\n"

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-img/category-img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_category_model__ = __webpack_require__("./src/app/model/category.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryImgComponent = /** @class */ (function () {
    function CategoryImgComponent() {
        this.cssClass = 'ui small image';
    }
    CategoryImgComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], CategoryImgComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_category_model__["a" /* Category */])
    ], CategoryImgComponent.prototype, "category", void 0);
    CategoryImgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-img',
            template: __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-img/category-img.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-img/category-img.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryImgComponent);
    return CategoryImgComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-short-row.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n:host {\r\n  padding-bottom: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-short-row.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-category-img [category]=\"category\"></app-category-img>\n<div class=\"content\" >\n  <a class=\"header ui grey\">{{ category.name }}</a>\n  <div class=\"meta extra\" >\n    <app-category-details [category]=\"category\"></app-category-details>\n  </div>\n  <div style=\"padding: 15px\" >\n    {{ category.description }}\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-short-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryShortRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_category_model__ = __webpack_require__("./src/app/model/category.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryShortRowComponent = /** @class */ (function () {
    function CategoryShortRowComponent() {
        this.cssClass = 'item';
    }
    CategoryShortRowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], CategoryShortRowComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_category_model__["a" /* Category */])
    ], CategoryShortRowComponent.prototype, "category", void 0);
    CategoryShortRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-short-row',
            template: __webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-short-row.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/inventory-main/category-short-list/category-short-row/category-short-row.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryShortRowComponent);
    return CategoryShortRowComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/inventory-main/inventory-main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/inventory-main.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"app-category-list container\" >\n  <app-category-short-list\n    [categories]=\"categories\"\n    (onSelectCategory)=\"categoryWasSelected($event)\"></app-category-short-list>\n</div>\n"

/***/ }),

/***/ "./src/app/tester/tester/inventory-main/inventory-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryMainComponent = /** @class */ (function () {
    function InventoryMainComponent(categoryRepository) {
        var _this = this;
        this.categoryRepository = categoryRepository;
        this.rendered = false;
        this.categoryRepository.all()
            .subscribe(function (_categories) { return _this.categories = _categories; });
    }
    InventoryMainComponent.prototype.categoryWasSelected = function (category) {
        console.log('Category clicked ', category);
    };
    InventoryMainComponent.prototype.ngOnInit = function () {
    };
    InventoryMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inventory-main',
            template: __webpack_require__("./src/app/tester/tester/inventory-main/inventory-main.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/inventory-main/inventory-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_repository_service__["a" /* CategoryRepository */]])
    ], InventoryMainComponent);
    return InventoryMainComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/reddit-main/article/article.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/reddit-main/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"app-article\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"15px\">\n  <div class=\"ui statistic inverted\" style=\"padding: 25px\" fxFlex=\"10%\">\n    <div class=\"value\">\n      {{ article.votes }}\n    </div>\n    <div class=\"label\">\n      Points\n    </div>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"row start\" fxFlex=\"300px\">\n    <div class=\"mt-3\">\n      <a class=\"ui grey header inverted dividing\" href=\"{{ article.link }}\" >\n        {{ article.title }}\n      </a>\n\n      <p class=\"text-muted\">\n        ({{ article.domain() }})\n      </p>\n    </div>\n    <mat-list fxLayout dense>\n      <mat-list-item (click)=\"voteUp()\"  >\n        <a mat-button color=\"accent\">\n          <i class=\"arrow up icon\" style=\"display: contents\"></i>\n          upvote\n        </a>\n      </mat-list-item>\n      <mat-list-item (click)=\"voteDown()\">\n        <a mat-button color=\"accent\">\n          <i class=\"arrow down icon\" style=\"display: contents\"></i>\n          downvote\n        </a>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tester/tester/reddit-main/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_article_model__ = __webpack_require__("./src/app/tester/model/article.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () { };
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_article_model__["a" /* Article */])
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__("./src/app/tester/tester/reddit-main/article/article.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/reddit-main/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/reddit-main/reddit-main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/tester/reddit-main/reddit-main.component.html":
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <app-reddit (onAddArticle)=\"articles.push($event)\"></app-reddit>\n  <app-article *ngFor=\"let foobar of sortedArticles()\" [article]=\"foobar\"></app-article>\n</section>\n"

/***/ }),

/***/ "./src/app/tester/tester/reddit-main/reddit-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedditMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_article_model__ = __webpack_require__("./src/app/tester/model/article.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedditMainComponent = /** @class */ (function () {
    function RedditMainComponent() {
        this.articles = [
            new __WEBPACK_IMPORTED_MODULE_1__model_article_model__["a" /* Article */]('Angular', 'http://angular.io', 0),
            new __WEBPACK_IMPORTED_MODULE_1__model_article_model__["a" /* Article */]('Spring', 'http://spring.io', 0),
            new __WEBPACK_IMPORTED_MODULE_1__model_article_model__["a" /* Article */]('Hibernate', 'http://hibernate.org', 0),
        ];
    }
    RedditMainComponent.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditMainComponent.prototype.ngOnInit = function () {
    };
    RedditMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reddit-main',
            template: __webpack_require__("./src/app/tester/tester/reddit-main/reddit-main.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/reddit-main/reddit-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedditMainComponent);
    return RedditMainComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester/reddit-main/reddit/reddit.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  width: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tester/tester/reddit-main/reddit/reddit.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"ui segment inverted\"\n      #f=\"ngForm\"\n      (ngSubmit)=\"addArticle(f)\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\">\n  <h3 class=\"ui header \">\n    A Reddit for language preference\n    <mat-divider></mat-divider>\n  </h3>\n  <p>\n    Enter your main language.\n  </p>\n  <mat-form-field >\n    <input matInput\n           name=\"title\"\n           ngModel\n           minlength=\"2\"\n           maxlength=\"15\"\n           required\n           placeholder=\"Enter a framework for vote\"\n           #newTitle>\n    <mat-error>Invalid enter</mat-error>\n  </mat-form-field>\n  <mat-form-field >\n    <input\n      type=\"url\"\n      name=\"link\"\n      matInput\n      required\n      ngModel\n      pattern=\"(http:|https:)+[^\\s]+[\\w]\"\n      placeholder=\"Enter a link\"\n      #newLink>\n    <mat-hint>Start with http: or https:</mat-hint>\n    <mat-error>Invalid enter</mat-error>\n  </mat-form-field>\n  <button type=\"submit\" mat-button>Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/tester/tester/reddit-main/reddit/reddit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_article_model__ = __webpack_require__("./src/app/tester/model/article.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedditComponent = /** @class */ (function () {
    function RedditComponent() {
        this.onAddArticle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    RedditComponent.prototype.ngOnInit = function () {
    };
    RedditComponent.prototype.addArticle = function (f) {
        if (f.valid) {
            this.onAddArticle.emit(new __WEBPACK_IMPORTED_MODULE_1__model_article_model__["a" /* Article */](f.value['title'], f.value['link']));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], RedditComponent.prototype, "onAddArticle", void 0);
    RedditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reddit',
            template: __webpack_require__("./src/app/tester/tester/reddit-main/reddit/reddit.component.html"),
            styles: [__webpack_require__("./src/app/tester/tester/reddit-main/reddit/reddit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedditComponent);
    return RedditComponent;
}());



/***/ }),

/***/ "./src/app/tester/youtube/youtube-card/youtube-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/youtube/youtube-card/youtube-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-top: 15px;\n    font-size: 12px;\n    font-size: 12px;\n    font-weight: 300;\">\n  <mat-card-header>\n    <mat-card-title>{{ result?.title }}</mat-card-title>\n    <mat-card-subtitle>{{ result?.publishDate | date : 'short' }}</mat-card-subtitle>\n  </mat-card-header>\n  <img matCardImage src=\"{{result?.thumbnailUrl}}\">\n  <mat-card-content>\n    {{result?.description}}\n  </mat-card-content>\n  <mat-toolbar>\n    <a mat-raised-button class=\"btn-block\" color=\"primary\" href=\"{{result?.videoUrl}}\">Watch</a>\n  </mat-toolbar>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/tester/youtube/youtube-card/youtube-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_search_result_model__ = __webpack_require__("./src/app/tester/youtube/youtube-search-result.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeCardComponent = /** @class */ (function () {
    function YoutubeCardComponent() {
    }
    YoutubeCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__youtube_search_result_model__["a" /* YoutubeSearchResult */])
    ], YoutubeCardComponent.prototype, "result", void 0);
    YoutubeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-youtube-card',
            template: __webpack_require__("./src/app/tester/youtube/youtube-card/youtube-card.component.html"),
            styles: [__webpack_require__("./src/app/tester/youtube/youtube-card/youtube-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YoutubeCardComponent);
    return YoutubeCardComponent;
}());



/***/ }),

/***/ "./src/app/tester/youtube/youtube-search-result.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSearchResult; });
var YoutubeSearchResult = /** @class */ (function () {
    function YoutubeSearchResult(id, title, publishDate, description, thumbnailUrl, videoUrl) {
        this.id = id;
        this.title = title;
        this.publishDate = publishDate;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.videoUrl = videoUrl || "https://www.youtube.com/watch?v=" + this.id;
    }
    return YoutubeSearchResult;
}());



/***/ }),

/***/ "./src/app/tester/youtube/youtube-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YOUTUBE_API_TOKENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YoutubeSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_search_result_model__ = __webpack_require__("./src/app/tester/youtube/youtube-search-result.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var YOUTUBE_API_KEY = "AIzaSyA3chLLN2HSYHqvSW21pjKciucR0SR18ec";
var YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var YOUTUBE_API_TOKENS = [
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];
var YoutubeSearchService = /** @class */ (function () {
    function YoutubeSearchService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    YoutubeSearchService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + this.apiKey,
            "part=snippet",
            "type=video",
            "maxResults=6"
        ].join('&');
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl).map(function (response) {
            return response['items'].map(function (item) {
                console.log(item);
                return new __WEBPACK_IMPORTED_MODULE_2__youtube_search_result_model__["a" /* YoutubeSearchResult */](item.id.videoId, item.snippet.title, item.snippet.publishedAt, item.snippet.description, item.snippet.thumbnails.high.url);
            });
        });
    };
    YoutubeSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(YOUTUBE_API_KEY)),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(YOUTUBE_API_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, String])
    ], YoutubeSearchService);
    return YoutubeSearchService;
}());



/***/ }),

/***/ "./src/app/tester/youtube/youtube-search/youtube-search.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  width: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tester/youtube/youtube-search/youtube-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h2 class=\"ui header dividing\">Search</h2>\n<mat-form-field>\n  <input matInput #searchInput placeholder=\"Search\" minlength=\"2\">\n  <mat-hint align=\"start\">More than 2 characters </mat-hint>\n  <mat-hint align=\"end\">{{ searchInput.value.length }} / 2</mat-hint>\n</mat-form-field>\n\n"

/***/ }),

/***/ "./src/app/tester/youtube/youtube-search/youtube-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_search_service__ = __webpack_require__("./src/app/tester/youtube/youtube-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeSearchComponent = /** @class */ (function () {
    function YoutubeSearchComponent(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    YoutubeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.el.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (e) { return e.target.value; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (value) { return value.length > 2; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(500), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function () { return _this.loading.next(true); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (query) { return _this.youtube.search(query); }))
            .subscribe(function (results) {
            _this.loading.emit(false);
            _this.results.next(results);
        }, function (err) {
            _this.loading.emit(false);
        }, function () {
            _this.loading.emit(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], YoutubeSearchComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], YoutubeSearchComponent.prototype, "results", void 0);
    YoutubeSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-youtube-search',
            template: __webpack_require__("./src/app/tester/youtube/youtube-search/youtube-search.component.html"),
            styles: [__webpack_require__("./src/app/tester/youtube/youtube-search/youtube-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__youtube_search_service__["b" /* YoutubeSearchService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], YoutubeSearchComponent);
    return YoutubeSearchComponent;
}());



/***/ }),

/***/ "./src/app/tester/youtube/youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tester/youtube/youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n  <app-youtube-search\n    (results)=\"updateResults($event)\"\n    (loading)=\"loading = $event\"></app-youtube-search>\n\n  <div class=\"result-content\"\n       fxLayout=\"row no-wrap\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start\">\n    <app-youtube-card\n      *ngFor=\"let foobar of results\"\n      [result]=\"foobar\"\n      fxFlex=\"30%\"></app-youtube-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tester/youtube/youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent() {
    }
    YoutubeComponent.prototype.ngOnInit = function () {
    };
    YoutubeComponent.prototype.updateResults = function ($event) {
        this.results = $event;
    };
    YoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-youtube',
            template: __webpack_require__("./src/app/tester/youtube/youtube.component.html"),
            styles: [__webpack_require__("./src/app/tester/youtube/youtube.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YoutubeComponent);
    return YoutubeComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "mat-drawer-container, mat-drawer, mat-drawer-content {\r\n  min-height: 800px;\r\n  width: 100%;\r\n}\r\n\r\nmat-drawer-content {\r\n  padding: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topic/topic-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" fxLayout >\n  <mat-drawer mode=\"side\" opened=\"true\" #drawer  fxFlex=\"250px\" >\n    <app-panel [panelLists]=\"panelLists\"></app-panel>\n  </mat-drawer>\n  <mat-drawer-content\n    fxFlex.lt-sm=\"100%\">\n    <app-panel-bar [drawerOpen]=\"drawer.opened\"\n                   (onDrawerToggle)=\"drawer.toggle()\"\n                   backLink=\"/category/main\"\n                   backLinkDescription=\"Category Main\"></app-panel-bar>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/topic/topic-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_short_category_model__ = __webpack_require__("./src/app/model/short-category.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicBootstrapComponent = /** @class */ (function () {
    function TopicBootstrapComponent(categoryRepository, route) {
        var _this = this;
        this.categoryRepository = categoryRepository;
        this.route = route;
        this.panelLists = [];
        this.categoryRepository
            .allShorts()
            .subscribe(function (_shortCategories) {
            return _this.panelLists = __WEBPACK_IMPORTED_MODULE_3__model_short_category_model__["a" /* ShortCategory */].toPanelList(_shortCategories);
        });
    }
    TopicBootstrapComponent.prototype.ngOnInit = function () {
    };
    TopicBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-bootstrap',
            template: __webpack_require__("./src/app/topic/topic-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/topic/topic-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_category_repository_service__["a" /* CategoryRepository */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TopicBootstrapComponent);
    return TopicBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic-main/topic-main.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.introduction{\r\n  font-weight: 400;\r\n  padding: 20px 50px 50px 20px;\r\n}\r\n\r\n.introduction h2 {\r\n  color: black;\r\n}\r\n\r\n.meta-meta {\r\n  text-align: end;\r\n}\r\n\r\n.introduction p {\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n}\r\n\r\n.meta-icon {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.introduction-content {\r\n  font-size: 15px;\r\n  line-height: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topic/topic-main/topic-main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group\n  (selectedIndexChange)=\"activateYoutube($event)\">\n  <mat-tab label=\"INTRODUCTION\">\n    <div class=\"introduction mt-2\">\n      <div class=\"meta\">\n        <h2>\n          <mat-icon class=\"meta-icon\" [svgIcon]=\"category?.imgName\" ></mat-icon>\n          {{ category?.name }}</h2>\n        <div class=\"meta-meta\">\n          <div class=\"ui label\"><i class=\"ui icon object group\"></i> {{ category?.type }}</div>\n          <div class=\"ui label\"><i class=\"ui icon object group\"></i> {{ category?.language.name }}</div>\n        </div>\n        <mat-divider></mat-divider>\n      </div>\n      <p class=\"introduction-content mt-2 mb-2 p-3\" >\n        {{ category?.description }}\n      </p>\n      <mat-divider></mat-divider>\n    </div>\n    <div class=\"introduction\" fxLayout=\"row no-wrap\" fxLayoutAlign=\"center center\">\n      <app-model-card\n        fxFlex=\"30%\"\n        fxFlex.lt-lg=\"45%\"\n        fxFlex.lt-md=\"100%\"\n        *ngFor=\"let item of topicCardItems\"\n        [cardItem]=\"item\"></app-model-card>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Youtube Reference\">\n    <app-topic-youtube-reference *ngIf=\"renderYoutube\" [categoryName]=\"category?.name\"></app-topic-youtube-reference>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/topic/topic-main/topic-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_category_repository_service__ = __webpack_require__("./src/app/service/category-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_category_model__ = __webpack_require__("./src/app/model/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_topic_model__ = __webpack_require__("./src/app/model/topic.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TopicMainComponent = /** @class */ (function () {
    function TopicMainComponent(route, categoryRepository, topicRepository) {
        var _this = this;
        this.route = route;
        this.categoryRepository = categoryRepository;
        this.topicRepository = topicRepository;
        //For fetching data after click tab
        this.renderYoutube = false;
        this.route.parent.params
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (param) { return param['categoryName']; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (_categoryName) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.categoryRepository.byName(_categoryName), _this.topicRepository.byCategoryName(_categoryName));
        })).subscribe(function (_a) {
            var category = _a[0], topics = _a[1];
            _this.topicCardItems = [];
            _this.category = category;
            _this.topics = topics;
            _this.categoryCardItem = __WEBPACK_IMPORTED_MODULE_5__model_category_model__["a" /* Category */].toCardItem(_this.category);
            _this.topics.forEach(function (_topic) { return _this.topicCardItems.push(__WEBPACK_IMPORTED_MODULE_7__model_topic_model__["a" /* Topic */].toCardItem(_topic)); });
        });
    }
    TopicMainComponent.prototype.ngOnInit = function () {
    };
    TopicMainComponent.prototype.activateYoutube = function ($event) {
        if ($event == 1) {
            this.renderYoutube = true;
        }
    };
    TopicMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-main',
            template: __webpack_require__("./src/app/topic/topic-main/topic-main.component.html"),
            styles: [__webpack_require__("./src/app/topic/topic-main/topic-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__service_category_repository_service__["a" /* CategoryRepository */],
            __WEBPACK_IMPORTED_MODULE_6__service_topic_repository_service__["a" /* TopicRepository */]])
    ], TopicMainComponent);
    return TopicMainComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic-main/topic-youtube-reference/topic-youtube-reference.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.introduction {\r\n  font-weight: 400;\r\n  padding: 20px 50px 50px 20px;\r\n}\r\n\r\n.introduction h2 {\r\n  color: black;\r\n}\r\n\r\n.meta-meta {\r\n  text-align: end;\r\n}\r\n\r\n.introduction-content {\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n}\r\n\r\n.progress-spinner-content {\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  color: #3f51b5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topic/topic-main/topic-youtube-reference/topic-youtube-reference.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"introduction mt-2 mat-typography\">\n  <h2 class=\"mat-h2 ui dividing\">\n    <mat-icon color=\"primary\">theaters</mat-icon>\n    References\n  </h2>\n  <p class=\"introduction-content\">\n    Share knowledge on the world’s largest online learning in Youtube.\n  </p>\n  <mat-divider></mat-divider>\n</div>\n<div *ngIf=\"loading\"\n     fxLayout=\"column\"\n     fxLayoutAlign=\"center center\">\n  <mat-progress-spinner [diameter]=\"200\" mode=\"indeterminate\"></mat-progress-spinner>\n  <p class=\"progress-spinner-content\" >\n    Fetching Videos...\n  </p>\n</div>\n<div class=\"introduction\"\n     *ngIf=\"!loading\"\n     fxLayout=\"row no-wrap\"\n     fxLayoutAlign=\"center center\">\n  <app-model-card\n    fxFlex=\"30%\"\n    fxFlex.lt-lg=\"45%\"\n    fxFlex.lt-md=\"100%\"\n    *ngFor=\"let item of cardItems\"\n    [cardItem]=\"item\"></app-model-card>\n</div>\n"

/***/ }),

/***/ "./src/app/topic/topic-main/topic-youtube-reference/topic-youtube-reference.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicYoutubeReferenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_youtube_service__ = __webpack_require__("./src/app/service/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_youtube_model__ = __webpack_require__("./src/app/model/youtube.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicYoutubeReferenceComponent = /** @class */ (function () {
    function TopicYoutubeReferenceComponent(youtube) {
        this.youtube = youtube;
        this.cardItems = [];
    }
    TopicYoutubeReferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.youtube.search(this.categoryName)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function () { return console.log('Start to deploy'); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["filter"])(function () { return _this.categoryName.length > 0; }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["mergeAll"])(), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (youtube) { return __WEBPACK_IMPORTED_MODULE_3__model_youtube_model__["a" /* Youtube */].toCardItem(youtube); }))
            .subscribe(function (cardItem) { return _this.cardItems.push(cardItem); }, function (error) { console.log(error); _this.loading = false; }, function () { return _this.loading = false; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TopicYoutubeReferenceComponent.prototype, "categoryName", void 0);
    TopicYoutubeReferenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-youtube-reference',
            template: __webpack_require__("./src/app/topic/topic-main/topic-youtube-reference/topic-youtube-reference.component.html"),
            styles: [__webpack_require__("./src/app/topic/topic-main/topic-youtube-reference/topic-youtube-reference.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_youtube_service__["a" /* YoutubeService */]])
    ], TopicYoutubeReferenceComponent);
    return TopicYoutubeReferenceComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic-paragraph/topic-paragraph.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.introduction {\r\n  font-weight: 400;\r\n  padding: 20px 50px 50px 20px;\r\n}\r\n\r\n.introduction h2 {\r\n  color: black;\r\n}\r\n\r\n.introduction h2 span {\r\n  margin-top: 15px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.meta-meta {\r\n  text-align: end;\r\n}\r\n\r\n.introduction p {\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n}\r\n\r\nmat-tab-group {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.meta-icon {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.introduction-content {\r\n  font-size: 15px;\r\n  line-height: 25px;\r\n}\r\n\r\n.content-container {\r\n  padding: 20px 50px 50px 20px;\r\n}\r\n\r\npre {\r\n  background: rgba(0,0,0,.01);\r\n  border: .5px solid rgba(0,0,0,.03);\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin: 16px auto;\r\n  overflow-x: auto;\r\n  font-size: 14px;\r\n  padding: 20px;\r\n  font-family: Roboto Mono,monospace;\r\n}\r\n\r\n.content-header {\r\n  font-size: 20px;\r\n\r\n  display: block;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  font-size: 1.17em;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  color: rgba(0,0,0,.87);\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n.content-paragraph {\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  display: block;\r\n  -webkit-margin-before: 1em;\r\n  -webkit-margin-after: 1em;\r\n  -webkit-margin-start: 0px;\r\n  font-weight: 400;\r\n  color: rgba(0,0,0,.87);\r\n  -webkit-margin-end: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topic/topic-paragraph/topic-paragraph.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group\n  class=\"mat-typography\">\n  <mat-tab label=\"INTRODUCTION\">\n    <div class=\"introduction mt-2\">\n      <div class=\"meta\">\n        <h2 fxLayout fxLayoutAlign=\" center\">\n          <mat-icon class=\"meta-icon\" [svgIcon]=\"topic?.category.imgName\" ></mat-icon>\n          <span>{{ topic?.name }}</span>\n        </h2>\n        <div class=\"meta-meta\">\n          <div class=\"ui label\"><i class=\"ui icon clock outline\"></i>\n            {{ topic?.basicTime?.created | date : 'medium' }}\n          </div>\n          <div class=\"ui label\"><i class=\"ui icon clock outline\"></i>\n            {{ topic?.basicTime?.updated | date : 'medium' }}\n            <span *ngIf=\"!topic?.basicTime?.updated\" >No updated</span>\n          </div>\n        </div>\n        <mat-divider></mat-divider>\n      </div>\n      <p class=\"introduction-content mt-2 mb-2 p-3\" >\n        {{ topic?.shortDescription }}\n      </p>\n      <mat-divider ></mat-divider>\n    </div>\n    <div class=\"content-container\">\n      <h3 class=\"content-header\">\n        Short Description About topic\n        <mat-divider ></mat-divider>\n      </h3>\n      <p class=\"content-paragraph\">\n        {{ topic?.description }}\n      </p>\n    </div>\n\n    <app-description *ngFor=\"let paragraph of paragraphs;let i = index\"\n                     [index]=\"i + 1\"\n                     [description]=\"paragraph\"  >\n\n    </app-description>\n\n\n  </mat-tab>\n  <mat-tab label=\"API\">\n\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/topic/topic-paragraph/topic-paragraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicParagraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_paragraph_repository_service__ = __webpack_require__("./src/app/service/paragraph-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicParagraphComponent = /** @class */ (function () {
    function TopicParagraphComponent(paragraphRepository, topicRepository, route) {
        var _this = this;
        this.paragraphRepository = paragraphRepository;
        this.topicRepository = topicRepository;
        this.route = route;
        this.route.params.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (params) { return _this.topicName = params['topicName']; }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["switchMap"])(function () { return _this.route.parent.params; }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (params) { return _this.categoryName = params['categoryName']; }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["switchMap"])(function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.topicRepository.byTopicNameAndCategoryName(_this.categoryName, _this.topicName), _this.paragraphRepository.byTopicNameAndCategoryName(_this.categoryName, _this.topicName));
        })).subscribe(function (_a) {
            var _topic = _a[0], _paragraphs = _a[1];
            _this.topic = _topic;
            _this.paragraphs = _paragraphs;
        });
    }
    TopicParagraphComponent.prototype.ngOnInit = function () {
    };
    TopicParagraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-paragraph',
            template: __webpack_require__("./src/app/topic/topic-paragraph/topic-paragraph.component.html"),
            styles: [__webpack_require__("./src/app/topic/topic-paragraph/topic-paragraph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_paragraph_repository_service__["a" /* ParagraphRepository */],
            __WEBPACK_IMPORTED_MODULE_5__service_topic_repository_service__["a" /* TopicRepository */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], TopicParagraphComponent);
    return TopicParagraphComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_bootstrap_component__ = __webpack_require__("./src/app/topic/topic-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_main_topic_main_component__ = __webpack_require__("./src/app/topic/topic-main/topic-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topic_main_topic_youtube_reference_topic_youtube_reference_component__ = __webpack_require__("./src/app/topic/topic-main/topic-youtube-reference/topic-youtube-reference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topic_paragraph_topic_paragraph_component__ = __webpack_require__("./src/app/topic/topic-paragraph/topic-paragraph.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'topic/:categoryName', component: __WEBPACK_IMPORTED_MODULE_4__topic_bootstrap_component__["a" /* TopicBootstrapComponent */],
        children: [
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_5__topic_main_topic_main_component__["a" /* TopicMainComponent */] },
            { path: ':topicName', component: __WEBPACK_IMPORTED_MODULE_8__topic_paragraph_topic_paragraph_component__["a" /* TopicParagraphComponent */] }
        ]
    }
];
var TopicModule = /** @class */ (function () {
    function TopicModule() {
    }
    TopicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__topic_bootstrap_component__["a" /* TopicBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_5__topic_main_topic_main_component__["a" /* TopicMainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__topic_main_topic_youtube_reference_topic_youtube_reference_component__["a" /* TopicYoutubeReferenceComponent */],
                __WEBPACK_IMPORTED_MODULE_8__topic_paragraph_topic_paragraph_component__["a" /* TopicParagraphComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            ]
        })
    ], TopicModule);
    return TopicModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map