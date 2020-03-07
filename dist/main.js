(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/about/about.module": [
		"./src/app/pages/about/about.module.ts",
		"pages-about-about-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/page-not-found/page-not-found.module": [
		"./src/app/pages/page-not-found/page-not-found.module.ts",
		"pages-page-not-found-page-not-found-module"
	],
	"./pages/projects/projects.module": [
		"./src/app/pages/projects/projects.module.ts",
		"pages-projects-projects-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// Angular


var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    },
    {
        path: 'projects',
        loadChildren: './pages/projects/projects.module#ProjectsModule'
    },
    {
        path: '**',
        loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\">\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBR1o7RUFDRTtJQUNFLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTVlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MGVtKSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGlzLWRhcms6ICMwMjMxNWE7XHJcbiRpcy1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuJGt2ci1ncmVlbjogIzIyNmM2NTtcclxuJGt2ci1ncmV5OiAjNGM1MjU1O1xyXG5cclxuJGNvbG9yczogKFxyXG4gIGlzLWRhcms6ICRpcy1kYXJrLFxyXG4gIGlzLWxpZ2h0OiAkaXMtbGlnaHQsXHJcbiAga3ZyLWdyZWVuOiAka3ZyLWdyZWVuLFxyXG4gIGt2ci1ncmV5OiAka3ZyLWdyZXksXHJcbiAgdGV4dHk6ICNmZmYsXHJcbiAgYmFja2dyb3VuZDogIzMzMyxcclxuICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gIGRhcmt5OiAjMTExLFxyXG4gIG9yYW5neTogI2ZmYTYwMCxcclxuICBncmV5eTogI2JiYixcclxuICBsaWdodHk6IChcclxuICAgIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgICBrdnItZ3JlZW46IGxpZ2h0ZW4oJGt2ci1ncmVlbiwgNSUpLFxyXG4gICAga3ZyLWdyZXk6IGxpZ2h0ZW4oJGt2ci1ncmV5LCA1MCUpXHJcbiAgKSxcclxuICB0cmFuc3BhcmVudHk6IChcclxuICAgIGJsYWNreTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgZGFya3k6IHJnYmEoMTUsIDE1LCAxNSwgMC41KVxyXG4gIClcclxuKTtcclxuXHJcbi8vIFJldHJpZXZlIGNvbG9yIGZyb20gJGNvbG9ycyBtYXAgaWUuIGBjb2xvcihiYXNlLCBwcmltYXJ5KWBcclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudDogbnVsbCkge1xyXG4gIC8vIENvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIE1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// Angular


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Silvan Otten';
        // subscribe to router events and send page views to Google Analytics
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/project-modal/project-modal.component */ "./src/app/modals/project-modal/project-modal.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

// Angular


// Components

// Modal Components

// Routing

// UI


// Bootstrap

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectModalComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ],
            entryComponents: [_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectModalComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modals/project-modal/project-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modals/project-modal/project-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\"> {{ project.title }} </h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"card lesson-border\">\n    <img class=\"card-img-top center\" [src]=\"project.url\" alt=\"Project Image\">\n    <div class=\"card-body\">\n      {{ project.description }}\n    </div>\n  </div>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/modals/project-modal/project-modal.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modals/project-modal/project-modal.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:focus {\n  outline: none; }\n\nimg {\n  margin-top: 15px;\n  max-width: 300px; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3Byb2plY3QtbW9kYWwvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxtb2RhbHNcXHByb2plY3QtbW9kYWxcXHByb2plY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFhLEVBQUE7O0FBSWpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9wcm9qZWN0LW1vZGFsL3Byb2plY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modals/project-modal/project-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modals/project-modal/project-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function() { return ProjectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

// Angular

// Bootstrap

var ProjectModalComponent = /** @class */ (function () {
    function ProjectModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ProjectModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectModalComponent.prototype, "project", void 0);
    ProjectModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project-modal.component.html */ "./src/app/modals/project-modal/project-modal.component.html"),
            styles: [__webpack_require__(/*! ./project-modal.component.scss */ "./src/app/modals/project-modal/project-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ProjectModalComponent);
    return ProjectModalComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Made with <i class=\"fab fa-angular\"></i> and <i class=\"fab fa-bootstrap\"></i> by <a href=\"https://www.linkedin.com/in/silvanotten/\">Silvan</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.navbar {\n  background-color: #111;\n  padding: 0; }\n\n.fa-angular, .fa-bootstrap {\n  color: #ffa600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9mb290ZXIvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFx1aVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBR1o7RUFDRTtJQUNFLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBOztBQ3JFakI7RUFDSSxzQkRtQ1M7RUNsQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0QrQmEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogNTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDU3NnB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1NWVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFwcCBzdHlsZSBlbGVtZW50c1xyXG4kaXMtZGFyazogIzAyMzE1YTtcclxuJGlzLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4ka3ZyLWdyZWVuOiAjMjI2YzY1O1xyXG4ka3ZyLWdyZXk6ICM0YzUyNTU7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgaXMtZGFyazogJGlzLWRhcmssXHJcbiAgaXMtbGlnaHQ6ICRpcy1saWdodCxcclxuICBrdnItZ3JlZW46ICRrdnItZ3JlZW4sXHJcbiAga3ZyLWdyZXk6ICRrdnItZ3JleSxcclxuICB0ZXh0eTogI2ZmZixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiAjZmZhNjAwLFxyXG4gIGdyZXl5OiAjYmJiLFxyXG4gIGxpZ2h0eTogKFxyXG4gICAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICAgIGt2ci1ncmVlbjogbGlnaHRlbigka3ZyLWdyZWVuLCA1JSksXHJcbiAgICBrdnItZ3JleTogbGlnaHRlbigka3ZyLWdyZXksIDUwJSlcclxuICApLFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgYmxhY2t5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICBkYXJreTogcmdiYSgxNSwgMTUsIDE1LCAwLjUpXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gUmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiBudWxsKSB7XHJcbiAgLy8gQ29sb3IgdmFyaWFudCBpcyBvcHRpb25hbFxyXG4gIEBpZiAoJGNvbG9yLXZhcmlhbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gTWFwIGluY2VwdGlvblxyXG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpLCAkY29sb3ItdmFyaWFudCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICoge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5uYXZiYXIgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmt5KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mYS1hbmd1bGFyLCAuZmEtYm9vdHN0cmFwIHtcclxuICAgIGNvbG9yOiBjb2xvcihvcmFuZ3kpO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top\">\n    <div class=\"navbar-expand mr-auto navbar-nav\">\n        <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link title\" routerLink=\"\">Silvan<div class=\"dot\">.</div></a>\n            <div class=\"navbar-nav\" [hidden]=\"isExpanded\">\n                <a class=\"nav-item nav-link\" [class.active]=\"isActive('home')\" routerLink=\"\">Home</a>\n                <a class=\"nav-item nav-link\" [class.active]=\"isActive('about')\" routerLink=\"/about\">About</a>\n                <a class=\"nav-item nav-link\" [class.active]=\"isActive('projects')\" routerLink=\"/projects\">Projects</a>\n                <a class=\"nav-item nav-link\" [class.active]=\"isActive('not-found')\" routerLink=\"/not-found\">Not\n                    Found </a>\n            </div>\n        </div>\n        <div [hidden]=\"!isExpanded\" class=\"navbar-nav\">\n            <ng-template [ngTemplateOutlet]=\"MediaRef\"></ng-template>\n        </div>\n    </div>\n\n    <div class=\"hamburger fixed-top\">\n        <a id=\"hamburger-icon\" [class.active]=\"isExpanded\" title=\"Menu\" (click)=\"toggleExpand()\">\n            <span class=\"line line-1\"></span>\n            <span class=\"line line-2\"></span>\n            <span class=\"line line-3\"></span>\n        </a>\n    </div>\n\n    <div class=\"navbar-expand ml-auto navbar-nav media\">\n        <ng-template [ngTemplateOutlet]=\"MediaRef\"></ng-template>\n    </div>\n</nav>\n\n<ng-template #MediaRef>\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" href=\"https://github.com/silvanotten\">\n            <i class=\"fab fa-github\"></i>\n        </a>\n        <a class=\"nav-item nav-link\" href=\"mailto:silvan.otten@windesheim.nl\" placement=\"bottom\"\n            ngbTooltip=\"{{ email }}\">\n            <i class=\"fas fa-envelope\"></i>\n        </a>\n        <a class=\"nav-item nav-link\" href=\"https://linkedin.com/in/silvanotten\">\n            <i class=\"fab fa-linkedin\"></i>\n        </a>\n        <a class=\"nav-item nav-link discord\" placement=\"bottom\" ngbTooltip=\"{{ discord }}\" target=\"_blank\">\n            <i class=\"fab fa-discord\"></i>\n        </a>\n        <a class=\"nav-item nav-link\" href=\"https://www.facebook.com/silvan.otten\">\n            <i class=\"fab fa-facebook\"></i>\n        </a>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.navbar {\n  background-color: #111;\n  padding: 0 4vw; }\n\n.title {\n  color: !important;\n  font-size: 1.5em; }\n\n.fab,\n.fas {\n  font-size: 1.25em; }\n\n.dot {\n  display: inline-block;\n  margin: 0;\n  color: #ffa600; }\n\n@media (max-width: 530px) {\n  .media {\n    display: none; }\n  .hamburger {\n    display: inline-block !important;\n    top: -1.15em;\n    right: 2em;\n    text-align: right;\n    z-index: -1; } }\n\n.hamburger,\n.navbar-collapse {\n  display: none; }\n\n#hamburger-icon {\n  width: 2em;\n  height: 1em;\n  position: relative;\n  display: inline-block;\n  margin: 2em auto 1em auto;\n  cursor: pointer; }\n\n#hamburger-icon .line {\n    display: block;\n    background: #fff;\n    width: 2em;\n    height: 0.15em;\n    position: absolute;\n    border-radius: 0.075em;\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s; }\n\n#hamburger-icon .line.line-1 {\n      top: 0; }\n\n#hamburger-icon .line.line-2 {\n      top: 50%; }\n\n#hamburger-icon .line.line-3 {\n      top: 100%; }\n\n#hamburger-icon:hover .line-1, #hamburger-icon:focus .line-1 {\n    transform: translateY(-0.075em);\n    -webkit-transform: translateY(-0.075em);\n    -moz-transform: translateY(-0.075em); }\n\n#hamburger-icon:hover .line-3, #hamburger-icon:focus .line-3 {\n    transform: translateY(0.075em);\n    -webkit-transform: translateY(0.075em);\n    -moz-transform: translateY(0.075em); }\n\n#hamburger-icon.active .line-1 {\n    transform: translateY(0.5em) translateX(0) rotate(405deg);\n    -webkit-transform: translateY(0.5em) translateX(0) rotate(405deg);\n    -moz-transform: translateY(0.5em) translateX(0) rotate(405deg); }\n\n#hamburger-icon.active .line-2 {\n    opacity: 0; }\n\n#hamburger-icon.active .line-3 {\n    transform: translateY(-0.5em) translateX(0) rotate(-405deg);\n    -webkit-transform: translateY(-0.5em) translateX(0) rotate(-405deg);\n    -moz-transform: translateY(-0.5em) translateX(0) rotate(-405deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9oZWFkZXIvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFx1aVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBR1o7RUFDRTtJQUNFLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBOztBQ3JFakI7RUFDRSxzQkRtQ1c7RUNsQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUE2QjtFQUM3QixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxjRG1CZSxFQUFBOztBQ2hCakI7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQSxFQUNaOztBQUdIOztFQUVFLGFBQWEsRUFBQTs7QUFZZjtFQUNFLFVBUmM7RUFTZCxXQVZlO0VBV2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBaUQ7RUFDakQsZUFBZSxFQUFBOztBQU5qQjtJQVFJLGNBQWM7SUFDZCxnQkR6QlM7SUMwQlQsVUFqQlk7SUFrQlosY0FqQmdCO0lBa0JoQixrQkFBa0I7SUFDbEIsc0JBQStCO0lBQy9CLG9CQW5Ca0I7SUFvQmxCLDRCQXBCa0I7SUFxQmxCLHlCQXJCa0IsRUFBQTs7QUFLdEI7TUFrQk0sTUFBTSxFQUFBOztBQWxCWjtNQXFCTSxRQUFRLEVBQUE7O0FBckJkO01Bd0JNLFNBQVMsRUFBQTs7QUF4QmY7SUE4Qk0sK0JBQTRDO0lBQzVDLHVDQUFvRDtJQUNwRCxvQ0FBaUQsRUFBQTs7QUFoQ3ZEO0lBbUNNLDhCQUF1QztJQUN2QyxzQ0FBK0M7SUFDL0MsbUNBQTRDLEVBQUE7O0FBckNsRDtJQTBDTSx5REFBNEU7SUFDNUUsaUVBQW9GO0lBQ3BGLDhEQUFpRixFQUFBOztBQTVDdkY7SUErQ00sVUFBVSxFQUFBOztBQS9DaEI7SUFrRE0sMkRBQXNGO0lBQ3RGLG1FQUE4RjtJQUM5RixnRUFBMkYsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogNTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDU3NnB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1NWVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFwcCBzdHlsZSBlbGVtZW50c1xyXG4kaXMtZGFyazogIzAyMzE1YTtcclxuJGlzLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4ka3ZyLWdyZWVuOiAjMjI2YzY1O1xyXG4ka3ZyLWdyZXk6ICM0YzUyNTU7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgaXMtZGFyazogJGlzLWRhcmssXHJcbiAgaXMtbGlnaHQ6ICRpcy1saWdodCxcclxuICBrdnItZ3JlZW46ICRrdnItZ3JlZW4sXHJcbiAga3ZyLWdyZXk6ICRrdnItZ3JleSxcclxuICB0ZXh0eTogI2ZmZixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiAjZmZhNjAwLFxyXG4gIGdyZXl5OiAjYmJiLFxyXG4gIGxpZ2h0eTogKFxyXG4gICAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICAgIGt2ci1ncmVlbjogbGlnaHRlbigka3ZyLWdyZWVuLCA1JSksXHJcbiAgICBrdnItZ3JleTogbGlnaHRlbigka3ZyLWdyZXksIDUwJSlcclxuICApLFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgYmxhY2t5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICBkYXJreTogcmdiYSgxNSwgMTUsIDE1LCAwLjUpXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gUmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiBudWxsKSB7XHJcbiAgLy8gQ29sb3IgdmFyaWFudCBpcyBvcHRpb25hbFxyXG4gIEBpZiAoJGNvbG9yLXZhcmlhbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gTWFwIGluY2VwdGlvblxyXG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpLCAkY29sb3ItdmFyaWFudCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICoge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmt5KTtcclxuICBwYWRkaW5nOiAwIDR2dztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogY29sb3IodGV4dCkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uZmFiLFxyXG4uZmFzIHtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogY29sb3Iob3Jhbmd5KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgLm1lZGlhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaGFtYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMS4xNWVtO1xyXG4gICAgcmlnaHQ6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFtYnVyZ2VyLFxyXG4ubmF2YmFyLWNvbGxhcHNlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vLyBIYW1idXJnZXIgdmFyaWFibGVzXHJcbiRoZWlnaHQtaWNvbjogMWVtO1xyXG4kd2lkdGgtbGluZTogMmVtO1xyXG4kaGVpZ2h0LWxpbmU6IDAuMTVlbTtcclxuJHRyYW5zaXRpb24tdGltZTogMC41cztcclxuJHJvdGF0aW9uOiA0MDVkZWc7XHJcbiR0cmFuc2xhdGVZOiAoJGhlaWdodC1pY29uIC8gMik7XHJcbiR0cmFuc2xhdGVYOiAwO1xyXG5cclxuI2hhbWJ1cmdlci1pY29uIHtcclxuICB3aWR0aDogJHdpZHRoLWxpbmU7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0LWljb247XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46ICgkaGVpZ2h0LWljb24gKiAyKSBhdXRvICRoZWlnaHQtaWNvbiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAubGluZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yKHRleHR5KTtcclxuICAgIHdpZHRoOiAkd2lkdGgtbGluZTtcclxuICAgIGhlaWdodDogJGhlaWdodC1saW5lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGhlaWdodC1saW5lIC8gMjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi10aW1lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb24tdGltZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uLXRpbWU7XHJcbiAgICAmLmxpbmUtMSB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgICYubGluZS0yIHtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICB9XHJcbiAgICAmLmxpbmUtMyB7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIC5saW5lLTEge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGhlaWdodC1saW5lIC8gMiAqIC0xKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGhlaWdodC1saW5lIC8gMiAqIC0xKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGhlaWdodC1saW5lIC8gMiAqIC0xKTtcclxuICAgIH1cclxuICAgIC5saW5lLTMge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGhlaWdodC1saW5lIC8gMik7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRoZWlnaHQtbGluZSAvIDIpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgkaGVpZ2h0LWxpbmUgLyAyKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgLmxpbmUtMSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkdHJhbnNsYXRlWSkgdHJhbnNsYXRlWCgkdHJhbnNsYXRlWCkgcm90YXRlKCRyb3RhdGlvbik7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR0cmFuc2xhdGVZKSB0cmFuc2xhdGVYKCR0cmFuc2xhdGVYKSByb3RhdGUoJHJvdGF0aW9uKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHRyYW5zbGF0ZVkpIHRyYW5zbGF0ZVgoJHRyYW5zbGF0ZVgpIHJvdGF0ZSgkcm90YXRpb24pO1xyXG4gICAgfVxyXG4gICAgLmxpbmUtMiB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAubGluZS0zIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR0cmFuc2xhdGVZICogLTEpIHRyYW5zbGF0ZVgoJHRyYW5zbGF0ZVgpIHJvdGF0ZSgkcm90YXRpb24gKiAtMSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR0cmFuc2xhdGVZICogLTEpIHRyYW5zbGF0ZVgoJHRyYW5zbGF0ZVgpIHJvdGF0ZSgkcm90YXRpb24gKiAtMSk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR0cmFuc2xhdGVZICogLTEpIHRyYW5zbGF0ZVgoJHRyYW5zbGF0ZVgpIHJvdGF0ZSgkcm90YXRpb24gKiAtMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// Angular


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.discord = 'Niamus#0931';
        this.email = 'silvan.otten@windesheim.nl';
        this.isExpanded = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onResize = function () {
        this.isExpanded = false;
    };
    HeaderComponent.prototype.isActive = function (url) {
        return this.router.url.includes(url);
    };
    HeaderComponent.prototype.toggleExpand = function () {
        this.isExpanded = !this.isExpanded;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "onResize", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eek_d\Desktop\Live\silvanotten.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map