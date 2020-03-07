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

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.carousel, .carousel img {\n  width: 100%;\n  height: 200px; }\n\n.carousel img {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.carousel .description {\n  display: flex;\n  justify-content: center; }\n\n.carousel .description-text {\n  background-color: rgba(15, 15, 15, 0.5); }\n\n.content {\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUxBO0lBT0kscUJBQXFCLEVBQUEsRUFDdEI7O0FBMkNIO0VBRUksYUFBYSxFQUFBOztBQUlqQjs7RUFFRSxlQUFlLEVBQUE7O0FDckVqQjtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFLSSxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBTHJCO0VBU0ksYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQVYzQjtFQWNJLHVDRDJCNEIsRUFBQTs7QUEvQ2hDO0VDeUJFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTVlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MGVtKSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGlzLWRhcms6ICMwMjMxNWE7XHJcbiRpcy1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuJGt2ci1ncmVlbjogIzIyNmM2NTtcclxuJGt2ci1ncmV5OiAjNGM1MjU1O1xyXG5cclxuJGNvbG9yczogKFxyXG4gIGlzLWRhcms6ICRpcy1kYXJrLFxyXG4gIGlzLWxpZ2h0OiAkaXMtbGlnaHQsXHJcbiAga3ZyLWdyZWVuOiAka3ZyLWdyZWVuLFxyXG4gIGt2ci1ncmV5OiAka3ZyLWdyZXksXHJcbiAgdGV4dHk6ICNmZmYsXHJcbiAgYmFja2dyb3VuZDogIzMzMyxcclxuICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gIGRhcmt5OiAjMTExLFxyXG4gIG9yYW5neTogI2ZmYTYwMCxcclxuICBncmV5eTogI2JiYixcclxuICBsaWdodHk6IChcclxuICAgIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgICBrdnItZ3JlZW46IGxpZ2h0ZW4oJGt2ci1ncmVlbiwgNSUpLFxyXG4gICAga3ZyLWdyZXk6IGxpZ2h0ZW4oJGt2ci1ncmV5LCA1MCUpXHJcbiAgKSxcclxuICB0cmFuc3BhcmVudHk6IChcclxuICAgIGJsYWNreTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgZGFya3k6IHJnYmEoMTUsIDE1LCAxNSwgMC41KVxyXG4gIClcclxuKTtcclxuXHJcbi8vIFJldHJpZXZlIGNvbG9yIGZyb20gJGNvbG9ycyBtYXAgaWUuIGBjb2xvcihiYXNlLCBwcmltYXJ5KWBcclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudDogbnVsbCkge1xyXG4gIC8vIENvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIE1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4lZGltZW5zaW9ucy1zaGFyZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgQGV4dGVuZCAlZGltZW5zaW9ucy1zaGFyZWQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICBAZXh0ZW5kICVkaW1lbnNpb25zLXNoYXJlZDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRyYW5zcGFyZW50eSwgZGFya3kpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"

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