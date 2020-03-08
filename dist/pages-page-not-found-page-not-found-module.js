(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-not-found-page-not-found-module"],{

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"notFound\">\n    <h1>Oops!</h1>\n    <h2>404 - The Page can't be found</h2>\n  </div>\n  <a routerLink=\"\">Go To Homepage</a>\n</div>\n<img src=\"../../../assets/images/chicken-question.png\">"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n.italic {\n  font-style: italic; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/* Grid Widths */\n\n.grid-1 {\n  width: 16.6666666%; }\n\n.grid-2 {\n  width: 33.3333333%; }\n\n.grid-3 {\n  width: 50%; }\n\n.grid-4 {\n  width: 66.6666666%; }\n\n.grid-5 {\n  width: 83.3333333%; }\n\n.grid-6 {\n  width: 100%; }\n\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n\n/* End Grid */\n\nh1, h2, a {\n  user-select: none;\n  /* Standard */\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */ }\n\n@media (max-width: 685px) {\n  .notFound {\n    overflow: hidden; } }\n\n.container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.6;\n  text-align: center; }\n\n.notFound {\n  position: relative;\n  height: 220px;\n  margin: 0px auto 20px; }\n\nh1 {\n  font-size: 240px;\n  font-weight: 300;\n  text-transform: uppercase;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: -1; }\n\nh2 {\n  font-weight: 200;\n  text-transform: uppercase;\n  background-color: #fff;\n  padding: 12px 6px;\n  margin: auto;\n  position: absolute;\n  bottom: 0; }\n\na {\n  font-weight: 600;\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 12px 24px;\n  background: #ffa600;\n  font-size: 18px;\n  transition: 0.2s all; }\n\na:hover {\n    color: #ffa600;\n    background: #111; }\n\nimg {\n  margin: 10vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxccGFnZXNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQWZBO0lBaUJJLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBOztBQUdqQixnQkFBQTs7QUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFOzs7SUFHRSxVQUFVLEVBQUEsRUFDWDs7QUFFSCxhQUFBOztBQ3ZHQTtFQUNJLGlCQUFpQjtFQUFFLGFBQUE7RUFDbkIseUJBQXlCO0VBQUUsV0FBQTtFQUN2QixzQkFBc0I7RUFBRSxZQUFBO0VBQ3BCLHFCQUFxQjtFQUFFLGVBQUEsRUFBZ0I7O0FBR25EO0VBQ0k7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUROTDtFQ1VJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLHdDQUF3QztFQUVoQyxnQ0FBZ0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBZmxCO0VBbUJBLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBRUksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBRWhDLGdDQUFnQztFQUN4QyxXQUFXLEVBQUE7O0FBR2Y7RUFFSSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCRGJTO0VDY1QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdiO0VBRUksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXRHhCUztFQ3lCVCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CRHZCYTtFQ3dCYixlQUFlO0VBRWYsb0JBQW9CLEVBQUE7O0FBVnhCO0lBWVEsY0Q1QlM7SUM2QlQsZ0JEOUJLLEVBQUE7O0FDa0NiO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogNTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDU1ZW07XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDU3NnB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDBlbSkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk5JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQXBwIHN0eWxlIGVsZW1lbnRzXHJcbiRpcy1kYXJrOiAjMDIzMTVhO1xyXG4kaXMtbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiRrdnItZ3JlZW46ICMyMjZjNjU7XHJcbiRrdnItZ3JleTogIzRjNTI1NTtcclxuXHJcbiRjb2xvcnM6IChcclxuICBpcy1kYXJrOiAkaXMtZGFyayxcclxuICBpcy1saWdodDogJGlzLWxpZ2h0LFxyXG4gIGt2ci1ncmVlbjogJGt2ci1ncmVlbixcclxuICBrdnItZ3JleTogJGt2ci1ncmV5LFxyXG4gIHRleHR5OiAjZmZmLFxyXG4gIGJhY2tncm91bmQ6ICMzMzMsXHJcbiAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICBkYXJreTogIzExMSxcclxuICBvcmFuZ3k6ICNmZmE2MDAsXHJcbiAgZ3JleXk6ICNiYmIsXHJcbiAgbGlnaHR5OiAoXHJcbiAgICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gICAga3ZyLWdyZWVuOiBsaWdodGVuKCRrdnItZ3JlZW4sIDUlKSxcclxuICAgIGt2ci1ncmV5OiBsaWdodGVuKCRrdnItZ3JleSwgNTAlKVxyXG4gICksXHJcbiAgdHJhbnNwYXJlbnR5OiAoXHJcbiAgICBibGFja3k6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIGRhcmt5OiByZ2JhKDE1LCAxNSwgMTUsIDAuNSlcclxuICApXHJcbik7XHJcblxyXG4vLyBSZXRyaWV2ZSBjb2xvciBmcm9tICRjb2xvcnMgbWFwIGllLiBgY29sb3IoYmFzZSwgcHJpbWFyeSlgXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6IG51bGwpIHtcclxuICAvLyBDb2xvciB2YXJpYW50IGlzIG9wdGlvbmFsXHJcbiAgQGlmICgkY29sb3ItdmFyaWFudCAhPSBudWxsKSB7XHJcbiAgICAvLyBNYXAgaW5jZXB0aW9uXHJcbiAgICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSksICRjb2xvci12YXJpYW50KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgKiB7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEdyaWQgV2lkdGhzICovXHJcbi5ncmlkLTEge1xyXG4gIHdpZHRoOiAxNi42NjY2NjY2JTtcclxufVxyXG4uZ3JpZC0yIHtcclxuICB3aWR0aDogMzMuMzMzMzMzMyU7XHJcbn1cclxuLmdyaWQtMyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uZ3JpZC00IHtcclxuICB3aWR0aDogNjYuNjY2NjY2NiU7XHJcbn1cclxuLmdyaWQtNSB7XHJcbiAgd2lkdGg6IDgzLjMzMzMzMzMlO1xyXG59XHJcbi5ncmlkLTYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5ncmlkLTIsXHJcbiAgLmdyaWQtMyxcclxuICAuZ3JpZC00IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcbi8qIEVuZCBHcmlkICovXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbiVuby1zZWxlY3Qtc2hhcmVkIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCAqL1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUxMCsvRWRnZSAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjg1cHgpIHtcclxuICAgIC5ub3RGb3VuZCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG4gIFxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdEZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIEBleHRlbmQgJW5vLXNlbGVjdC1zaGFyZWQ7XHJcbiAgICBmb250LXNpemU6IDI0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuaDIge1xyXG4gICAgQGV4dGVuZCAlbm8tc2VsZWN0LXNoYXJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGV4dHkpO1xyXG4gICAgcGFkZGluZzogMTJweCA2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuICBcclxuYSB7XHJcbiAgICBAZXh0ZW5kICVuby1zZWxlY3Qtc2hhcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBjb2xvcih0ZXh0eSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogY29sb3Iob3Jhbmd5KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihvcmFuZ3kpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yKGRhcmt5KTtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogMTB2dztcclxufVxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.module.ts ***!
  \***************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");

// Angular



// Components

var routes = [
    {
        path: '',
        component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }
];
var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-page-not-found-page-not-found-module.js.map