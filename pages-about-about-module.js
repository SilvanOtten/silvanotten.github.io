(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel class=\"carousel\">\r\n  <ng-container *ngFor=\"let slide of slides\">\r\n    <ng-template ngbSlide>\r\n      <img [src]=\"slide.image\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>{{ slide.label }}</h3>\r\n        <div class=\"description\">\r\n          <div class=\"description-text\">&nbsp; {{ slide.description }} &nbsp;</div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ng-container>\r\n</ngb-carousel>\r\n\r\n<div class=\"content\">\r\n  <h1>Hi!</h1>\r\n  <h4>I'm still working on this.</h4>\r\n  <h4>Contact Info is in the navigation bar.</h4>\r\n  <br>\r\n  <h6>Here's a duck</h6>\r\n  <img src=\"../../../assets/images/chicken-psyduck.png\">\r\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n.italic {\n  font-style: italic; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/* Grid Widths */\n\n.grid-1 {\n  width: 16.6666666%; }\n\n.grid-2 {\n  width: 33.3333333%; }\n\n.grid-3 {\n  width: 50%; }\n\n.grid-4 {\n  width: 66.6666666%; }\n\n.grid-5 {\n  width: 83.3333333%; }\n\n.grid-6 {\n  width: 100%; }\n\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n\n/* End Grid */\n\n.carousel, .carousel img {\n  width: 100%;\n  height: 200px; }\n\n.carousel img {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.carousel .description {\n  display: flex;\n  justify-content: center; }\n\n.carousel .description-text {\n  background-color: rgba(15, 15, 15, 0.5); }\n\n.content {\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQWZBO0lBaUJJLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBOztBQUdqQixnQkFBQTs7QUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFOzs7SUFHRSxVQUFVLEVBQUEsRUFDWDs7QUFFSCxhQUFBOztBQ3ZHQTtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFLSSxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBTHJCO0VBU0ksYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQVYzQjtFQWNJLHVDRCtCNEIsRUFBQTs7QUFuRGhDO0VDeUJFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1NWVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFwcCBzdHlsZSBlbGVtZW50c1xyXG4kaXMtZGFyazogIzAyMzE1YTtcclxuJGlzLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4ka3ZyLWdyZWVuOiAjMjI2YzY1O1xyXG4ka3ZyLWdyZXk6ICM0YzUyNTU7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgaXMtZGFyazogJGlzLWRhcmssXHJcbiAgaXMtbGlnaHQ6ICRpcy1saWdodCxcclxuICBrdnItZ3JlZW46ICRrdnItZ3JlZW4sXHJcbiAga3ZyLWdyZXk6ICRrdnItZ3JleSxcclxuICB0ZXh0eTogI2ZmZixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiAjZmZhNjAwLFxyXG4gIGdyZXl5OiAjYmJiLFxyXG4gIGxpZ2h0eTogKFxyXG4gICAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICAgIGt2ci1ncmVlbjogbGlnaHRlbigka3ZyLWdyZWVuLCA1JSksXHJcbiAgICBrdnItZ3JleTogbGlnaHRlbigka3ZyLWdyZXksIDUwJSlcclxuICApLFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgYmxhY2t5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICBkYXJreTogcmdiYSgxNSwgMTUsIDE1LCAwLjUpXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gUmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiBudWxsKSB7XHJcbiAgLy8gQ29sb3IgdmFyaWFudCBpcyBvcHRpb25hbFxyXG4gIEBpZiAoJGNvbG9yLXZhcmlhbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gTWFwIGluY2VwdGlvblxyXG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpLCAkY29sb3ItdmFyaWFudCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICoge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBHcmlkIFdpZHRocyAqL1xyXG4uZ3JpZC0xIHtcclxuICB3aWR0aDogMTYuNjY2NjY2NiU7XHJcbn1cclxuLmdyaWQtMiB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG59XHJcbi5ncmlkLTMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmdyaWQtNCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY2NjYlO1xyXG59XHJcbi5ncmlkLTUge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzJTtcclxufVxyXG4uZ3JpZC02IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuZ3JpZC0yLFxyXG4gIC5ncmlkLTMsXHJcbiAgLmdyaWQtNCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4vKiBFbmQgR3JpZCAqL1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4lZGltZW5zaW9ucy1zaGFyZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgQGV4dGVuZCAlZGltZW5zaW9ucy1zaGFyZWQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICBAZXh0ZW5kICVkaW1lbnNpb25zLXNoYXJlZDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRyYW5zcGFyZW50eSwgZGFya3kpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.imagePath = '../../../assets/images/';
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.slides = [
            {
                image: this.imagePath + 'pineapple.jpg',
                label: 'Communication',
                description: 'Excellent writing, good people skills, and the capacity to think critically and strategically.'
            },
            {
                image: this.imagePath + 'fruit.jpg',
                label: 'Passion and Commitment',
                description: 'Involved to solve real problems, aiming for success.'
            },
            {
                image: this.imagePath + 'lamps.jpg',
                label: 'Analyse',
                description: 'Let\'s figure things out.'
            },
            {
                image: this.imagePath + 'skyline.jpg',
                label: 'Creative',
                description: 'New and imaginative ideas into reality.'
            },
            {
                image: this.imagePath + 'cooking.jpg',
                label: 'Collaboration',
                description: 'Working together for a shared goal.'
            },
        ];
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

// Angular



// Components

// Bootstrap

var routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }
];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map