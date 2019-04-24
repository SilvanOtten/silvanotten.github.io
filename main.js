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
	"./pages/contact/contact.module": [
		"./src/app/pages/contact/contact.module.ts",
		"pages-contact-contact-module"
	],
	"./pages/page-not-found/page-not-found.module": [
		"./src/app/pages/page-not-found/page-not-found.module.ts",
		"pages-page-not-found-page-not-found-module"
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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts");

// Angular


// Components


var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    },
    {
        path: 'contact',
        loadChildren: './pages/contact/contact.module#ContactModule'
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
                _pages_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
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

module.exports = "<div class=\"header\">\r\n    <app-header></app-header>\r\n</div>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\">\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 32px; }\n\n.content {\n  height: calc(100vh - 48px);\n  padding: 32px 0 16px 0; }\n\n.footer {\n  height: 16px; }\n\n@media (max-width: 530px) {\n  .content {\n    height: calc(100vh - 64px);\n    padding-top: 64px;\n    margin: 0; } }\n\n::ng-deep * :focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev, ::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0k7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFNBQVMsRUFBQSxFQUNWOztBQTJCTDtFQUVNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmc6IDMycHggMCAxNnB4IDA7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGNvbG9yczogKFxyXG4gIHRleHR5OiAjRkZGLFxyXG4gIGJhY2tncm91bmQ6ICMzMzMsXHJcbiAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICBkYXJreTogIzExMSxcclxuICBvcmFuZ3k6IHJnYigyNTUsIDE2NiwgMCksXHJcbiAgLy8gbmVzdGVkIG1hcFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgZGFya3k6IHJnYmEoMTcsIDE3LCAxNywgMC41KSxcclxuICApXHJcbik7XHJcblxyXG4vLyByZXRyaWV2ZSBjb2xvciBmcm9tICRjb2xvcnMgbWFwIGllLiBgY29sb3IoYmFzZSwgcHJpbWFyeSlgXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6bnVsbCkge1xyXG4gIC8vIGNvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIG1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICA6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

// Angular


// Components

// Routing

// UI


// Bootstrap

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel class=\"carousel\">\n  <ng-container *ngFor=\"let slide of slides\">\n    <ng-template ngbSlide>\n      <img [src]=\"slide.image\">\n      <div class=\"carousel-caption\">\n        <h3>{{ slide.label }}</h3>\n        <div class=\"description\">\n          <div class=\"description-text\">&nbsp; {{ slide.description }} &nbsp;</div>\n        </div>\n      </div>\n    </ng-template>\n  </ng-container>\n</ngb-carousel>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 32px; }\n\n.content {\n  height: calc(100vh - 48px);\n  padding: 32px 0 16px 0; }\n\n.footer {\n  height: 16px; }\n\n@media (max-width: 530px) {\n  .content {\n    height: calc(100vh - 64px);\n    padding-top: 64px;\n    margin: 0; } }\n\n::ng-deep * :focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev, ::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.carousel, img {\n  width: 100%;\n  height: 200px; }\n\n.description {\n  display: flex;\n  justify-content: center; }\n\n.description-text {\n  background-color: rgba(17, 17, 17, 0.5); }\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGVla19kXFxEZXNrdG9wXFxMaXZlXFxzaWx2YW5vdHRlbi5naXRodWIuaW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGVla19kXFxEZXNrdG9wXFxMaXZlXFxzaWx2YW5vdHRlbi5naXRodWIuaW8vc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQVRBO0lBV00sMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixTQUFTLEVBQUEsRUFDVjs7QUEyQkw7RUFFTSxhQUFhLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZSxFQUFBOztBQ25EakI7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQU9qQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx1Q0RjNEIsRUFBQTs7QUNYaEM7RUFFSSxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmc6IDMycHggMCAxNnB4IDA7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGNvbG9yczogKFxyXG4gIHRleHR5OiAjRkZGLFxyXG4gIGJhY2tncm91bmQ6ICMzMzMsXHJcbiAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICBkYXJreTogIzExMSxcclxuICBvcmFuZ3k6IHJnYigyNTUsIDE2NiwgMCksXHJcbiAgLy8gbmVzdGVkIG1hcFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgZGFya3k6IHJnYmEoMTcsIDE3LCAxNywgMC41KSxcclxuICApXHJcbik7XHJcblxyXG4vLyByZXRyaWV2ZSBjb2xvciBmcm9tICRjb2xvcnMgbWFwIGllLiBgY29sb3IoYmFzZSwgcHJpbWFyeSlgXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6bnVsbCkge1xyXG4gIC8vIGNvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIG1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICA6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4lZGltZW5zaW9ucy1zaGFyZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gICAgQGV4dGVuZCAlZGltZW5zaW9ucy1zaGFyZWQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRyYW5zcGFyZW50eSwgZGFya3kpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgQGV4dGVuZCAlZGltZW5zaW9ucy1zaGFyZWQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imagePath = '../../../assets/images/';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.slides = [
            {
                image: this.imagePath + 'wall.jpg',
                label: 'Nature',
                description: 'Discover and explore the possibilities in nature'
            },
            {
                image: this.imagePath + 'pineapple.jpg',
                label: 'Relaxed',
                description: 'Take to relax and be creative'
            },
            {
                image: this.imagePath + 'lamps.jpg',
                label: 'Nightowl',
                description: 'Available all day'
            },
            {
                image: this.imagePath + 'skyline.jpg',
                label: 'International',
                description: 'Let\'s go places'
            },
            {
                image: this.imagePath + 'cooking.jpg',
                label: 'Cooking',
                description: 'Good food good life'
            },
        ];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

// Angular


// Component

// Bootstrap

var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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

module.exports = ".header {\n  height: 32px; }\n\n.content {\n  height: calc(100vh - 48px);\n  padding: 32px 0 16px 0; }\n\n.footer {\n  height: 16px; }\n\n@media (max-width: 530px) {\n  .content {\n    height: calc(100vh - 64px);\n    padding-top: 64px;\n    margin: 0; } }\n\n::ng-deep * :focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev, ::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.navbar {\n  background-color: #111;\n  padding: 0 5vw; }\n\n.fa-angular, .fa-bootstrap {\n  color: #ffa600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9mb290ZXIvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFx1aVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0k7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFNBQVMsRUFBQSxFQUNWOztBQTJCTDtFQUVNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUE7O0FDbkRqQjtFQUNJLHNCRHdCUztFQ3ZCVCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0RvQnNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICBwYWRkaW5nOiAzMnB4IDAgMTZweCAwO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICAgICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQXBwIHN0eWxlIGVsZW1lbnRzXHJcbiRjb2xvcnM6IChcclxuICB0ZXh0eTogI0ZGRixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiByZ2IoMjU1LCAxNjYsIDApLFxyXG4gIC8vIG5lc3RlZCBtYXBcclxuICB0cmFuc3BhcmVudHk6IChcclxuICAgIGRhcmt5OiByZ2JhKDE3LCAxNywgMTcsIDAuNSksXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gcmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50Om51bGwpIHtcclxuICAvLyBjb2xvciB2YXJpYW50IGlzIG9wdGlvbmFsXHJcbiAgQGlmICgkY29sb3ItdmFyaWFudCAhPSBudWxsKSB7XHJcbiAgICAvLyBtYXAgaW5jZXB0aW9uXHJcbiAgICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSksICRjb2xvci12YXJpYW50KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgKiB7XHJcbiAgOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLm5hdmJhciB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya3kpO1xyXG4gICAgcGFkZGluZzogMCA1dnc7XHJcbn1cclxuXHJcbi5mYS1hbmd1bGFyLCAuZmEtYm9vdHN0cmFwIHtcclxuICAgIGNvbG9yOiBjb2xvcihvcmFuZ3kpO1xyXG59XHJcblxyXG5cclxuIl19 */"

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

module.exports = "<nav class=\"navbar navbar-dark fixed-top\">\n\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link title\" routerLink=\"\">Silvan<div class=\"dot\">.</div></a>\n      <a class=\"nav-item nav-link\" [class.active]=\"isActive('home')\" routerLink=\"\">Home</a>\n      <a class=\"nav-item nav-link\" [class.active]=\"isActive('about')\" routerLink=\"/about\">About</a>\n      <a class=\"nav-item nav-link\" [class.active]=\"isActive('contact')\" routerLink=\"/contact\">Contact</a>\n    </div>\n  </div>\n\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"https://github.com/silvanotten\">\n        <i class=\"fab fa-github\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"mailto:silvan.otten@windesheim.nl\" placement=\"bottom\" ngbTooltip=\"{{ email }}\">\n        <i class=\"fas fa-envelope\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"https://linkedin.com/in/silvanotten\">\n        <i class=\"fab fa-linkedin\"></i>\n      </a>\n      <a class=\"nav-item nav-link discord\" placement=\"bottom\" ngbTooltip=\"{{ discord }}\" target=\"_blank\">\n        <i class=\"fab fa-discord\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"https://www.facebook.com/silvan.otten\">\n        <i class=\"fab fa-facebook\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"https://www.youtube.com/watch?v=G1IbRujko-A\">\n        <i class=\"fas fa-hat-wizard\"></i>\n      </a>\n    </div>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 32px; }\n\n.content {\n  height: calc(100vh - 48px);\n  padding: 32px 0 16px 0; }\n\n.footer {\n  height: 16px; }\n\n@media (max-width: 530px) {\n  .content {\n    height: calc(100vh - 64px);\n    padding-top: 64px;\n    margin: 0; } }\n\n::ng-deep * :focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev, ::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.navbar {\n  background-color: #111;\n  padding: 0 4vw;\n  align-content: center; }\n\n.title {\n  color: !important;\n  margin: 0 2vw 0 0;\n  font-size: 2em; }\n\n.dot {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: #ffa600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9oZWFkZXIvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFx1aVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0k7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFNBQVMsRUFBQSxFQUNWOztBQTJCTDtFQUVNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUE7O0FDbkRqQjtFQUNJLHNCRHdCUztFQ3ZCVCxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0kscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0RVc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmc6IDMycHggMCAxNnB4IDA7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGNvbG9yczogKFxyXG4gIHRleHR5OiAjRkZGLFxyXG4gIGJhY2tncm91bmQ6ICMzMzMsXHJcbiAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICBkYXJreTogIzExMSxcclxuICBvcmFuZ3k6IHJnYigyNTUsIDE2NiwgMCksXHJcbiAgLy8gbmVzdGVkIG1hcFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgZGFya3k6IHJnYmEoMTcsIDE3LCAxNywgMC41KSxcclxuICApXHJcbik7XHJcblxyXG4vLyByZXRyaWV2ZSBjb2xvciBmcm9tICRjb2xvcnMgbWFwIGllLiBgY29sb3IoYmFzZSwgcHJpbWFyeSlgXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6bnVsbCkge1xyXG4gIC8vIGNvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIG1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICA6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4ubmF2YmFyIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJreSk7XHJcbiAgICBwYWRkaW5nOiAwIDR2dztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiBjb2xvcih0ZXh0KSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDJ2dyAwIDA7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IGNvbG9yKG9yYW5neSk7XHJcbn0iXX0= */"

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
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isActive = function (url) {
        return this.router.url.includes(url);
    };
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