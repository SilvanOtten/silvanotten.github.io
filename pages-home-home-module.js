(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/components/spotlight/spotlight.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/spotlight/spotlight.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"spotlight\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"grid-3\">\n        <img src=\"../../../assets/images/projects/infosupport.jpg\">\n      </div>\n      <div class=\"grid-3\">\n        <h1>Info Support</h1>\n        <p>Internship.</p>\n        <p>I'm developing a Proof of Concept for realtime monitoring within a Distributed Software System</p>\n        <a href=\"http://www.infosupport.com/\" class=\"shiny\">View Project</a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/spotlight/spotlight.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/spotlight/spotlight.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n.italic {\n  font-style: italic; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/* Grid Widths */\n\n.grid-1 {\n  width: 16.6666666%; }\n\n.grid-2 {\n  width: 33.3333333%; }\n\n.grid-3 {\n  width: 50%; }\n\n.grid-4 {\n  width: 66.6666666%; }\n\n.grid-5 {\n  width: 83.3333333%; }\n\n.grid-6 {\n  width: 100%; }\n\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n\n/* End Grid */\n\n.spotlight {\n  background-color: #02315a;\n  padding: 3em 1em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  text-align: center; }\n\n.spotlight img {\n    width: 80%;\n    max-width: 300px;\n    min-width: 200px;\n    margin-bottom: 20px; }\n\n.spotlight p {\n    color: white;\n    font-size: 1.1em;\n    margin-bottom: 35px; }\n\n.spotlight h1 {\n    color: white;\n    font-size: 2.5em; }\n\n.spotlight a {\n    color: #fff;\n    text-decoration: none;\n    border: 3px solid white;\n    padding: 6px 35px;\n    border-radius: 3px;\n    font-size: 1.2em;\n    margin-bottom: 10px; }\n\n@media (min-width: 50em) {\n  .spotlight {\n    padding: 5em;\n    text-align: left; } }\n\n.shiny {\n  display: inline-block;\n  position: relative;\n  overflow: hidden; }\n\n.shiny:before {\n    content: \"\";\n    background-color: rgba(255, 255, 255, 0.5);\n    height: 100%;\n    width: 3em;\n    position: absolute;\n    top: 0;\n    left: -4.5em;\n    -webkit-transform: skewX(-45deg) translateX(0);\n            transform: skewX(-45deg) translateX(0); }\n\n.shiny:hover:before {\n    -webkit-transform: skewX(-45deg) translateX(15em);\n            transform: skewX(-45deg) translateX(15em);\n    transition: all 0.5s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcG90bGlnaHQvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3BvdGxpZ2h0L0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcc3BvdGxpZ2h0XFxzcG90bGlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBOztBQUdqQixnQkFBQTs7QUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFOzs7SUFHRSxVQUFVLEVBQUEsRUFDWDs7QUFFSCxhQUFBOztBQ3ZHQTtFQUNFLHlCRHlCZTtFQ3hCZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFMcEI7SUFRSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFYdkI7SUFlSSxZRFl5QjtJQ1h6QixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBakJ2QjtJQXFCSSxZRE15QjtJQ0x6QixnQkFBZ0IsRUFBQTs7QUF0QnBCO0lBMEJJLFdEV1M7SUNWVCxxQkFBcUI7SUFFckIsdUJERnlCO0lDR3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFBLEVBQ2pCOztBQUdIO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFIbEI7SUFLSSxXQUFXO0lBQ1gsMENERGdDO0lDRWhDLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBOztBQVoxQztJQWdCTSxpREFBeUM7WUFBekMseUNBQXlDO0lBQ3pDLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcG90bGlnaHQvc3BvdGxpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1NWVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFwcCBzdHlsZSBlbGVtZW50c1xyXG4kaXMtZGFyazogIzAyMzE1YTtcclxuJGlzLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4ka3ZyLWdyZWVuOiAjMjI2YzY1O1xyXG4ka3ZyLWdyZXk6ICM0YzUyNTU7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgaXMtZGFyazogJGlzLWRhcmssXHJcbiAgaXMtbGlnaHQ6ICRpcy1saWdodCxcclxuICBrdnItZ3JlZW46ICRrdnItZ3JlZW4sXHJcbiAga3ZyLWdyZXk6ICRrdnItZ3JleSxcclxuICB0ZXh0eTogI2ZmZixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiAjZmZhNjAwLFxyXG4gIGdyZXl5OiAjYmJiLFxyXG4gIGxpZ2h0eTogKFxyXG4gICAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICAgIGt2ci1ncmVlbjogbGlnaHRlbigka3ZyLWdyZWVuLCA1JSksXHJcbiAgICBrdnItZ3JleTogbGlnaHRlbigka3ZyLWdyZXksIDUwJSlcclxuICApLFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgYmxhY2t5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICBkYXJreTogcmdiYSgxNSwgMTUsIDE1LCAwLjUpXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gUmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiBudWxsKSB7XHJcbiAgLy8gQ29sb3IgdmFyaWFudCBpcyBvcHRpb25hbFxyXG4gIEBpZiAoJGNvbG9yLXZhcmlhbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gTWFwIGluY2VwdGlvblxyXG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpLCAkY29sb3ItdmFyaWFudCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICoge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBHcmlkIFdpZHRocyAqL1xyXG4uZ3JpZC0xIHtcclxuICB3aWR0aDogMTYuNjY2NjY2NiU7XHJcbn1cclxuLmdyaWQtMiB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG59XHJcbi5ncmlkLTMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmdyaWQtNCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY2NjYlO1xyXG59XHJcbi5ncmlkLTUge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzJTtcclxufVxyXG4uZ3JpZC02IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuZ3JpZC0yLFxyXG4gIC5ncmlkLTMsXHJcbiAgLmdyaWQtNCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4vKiBFbmQgR3JpZCAqL1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uc3BvdGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihpcy1kYXJrKTtcclxuICBwYWRkaW5nOiAzZW0gMWVtO1xyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IGNvbG9yKGlzLWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgY29sb3I6IGNvbG9yKGlzLWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBjb2xvcih0ZXh0eSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihsaWdodHksIGlzLWRhcmspO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgY29sb3IoaXMtbGlnaHQpO1xyXG4gICAgcGFkZGluZzogNnB4IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MGVtKSB7XHJcbiAgLnNwb3RsaWdodCB7XHJcbiAgICBwYWRkaW5nOiA1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnNoaW55IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRyYW5zcGFyZW50eSwgYmxhY2t5KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtNC41ZW07XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC00NWRlZykgdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKSB0cmFuc2xhdGVYKDE1ZW0pO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/spotlight/spotlight.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/spotlight/spotlight.component.ts ***!
  \*************************************************************/
/*! exports provided: SpotlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotlightComponent", function() { return SpotlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpotlightComponent = /** @class */ (function () {
    function SpotlightComponent() {
    }
    SpotlightComponent.prototype.ngOnInit = function () {
    };
    SpotlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spotlight',
            template: __webpack_require__(/*! ./spotlight.component.html */ "./src/app/components/spotlight/spotlight.component.html"),
            styles: [__webpack_require__(/*! ./spotlight.component.scss */ "./src/app/components/spotlight/spotlight.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpotlightComponent);
    return SpotlightComponent;
}());



/***/ }),

/***/ "./src/app/education-row/education-row.component.html":
/*!************************************************************!*\
  !*** ./src/app/education-row/education-row.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"grid-2\">\n    <h2>{{ education.title }}</h2>\n    <p>{{ education.timespan }}</p>\n  </div>\n  <div class=\"grid-4\">\n    <ul>\n      <span class=\"italic\"> {{ education.description }}</span>\n      <ng-container *ngFor=\"let characteristic of education.characteristics\">\n        <li>{{ characteristic }}</li>\n      </ng-container>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/education-row/education-row.component.scss":
/*!************************************************************!*\
  !*** ./src/app/education-row/education-row.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n.italic {\n  font-style: italic; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/* Grid Widths */\n\n.grid-1 {\n  width: 16.6666666%; }\n\n.grid-2 {\n  width: 33.3333333%; }\n\n.grid-3 {\n  width: 50%; }\n\n.grid-4 {\n  width: 66.6666666%; }\n\n.grid-5 {\n  width: 83.3333333%; }\n\n.grid-6 {\n  width: 100%; }\n\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n\n/* End Grid */\n\n.row {\n  padding-top: 2em;\n  padding-bottom: 1em; }\n\n.row h2 {\n    margin-bottom: 0; }\n\n.row h2,\n  .row p {\n    text-align: center; }\n\n.row span {\n    line-height: 2em; }\n\n@media screen and (min-width: 40em) {\n  .education h2,\n  .education p {\n    text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uLXJvdy9DOlxcVXNlcnNcXGVla19kXFxEZXNrdG9wXFxMaXZlXFxzaWx2YW5vdHRlbi5naXRodWIuaW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWR1Y2F0aW9uLXJvdy9DOlxcVXNlcnNcXGVla19kXFxEZXNrdG9wXFxMaXZlXFxzaWx2YW5vdHRlbi5naXRodWIuaW8vc3JjXFxhcHBcXGVkdWNhdGlvbi1yb3dcXGVkdWNhdGlvbi1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLHFCQUFxQixFQUFBLEVBQ3RCOztBQTJDSDtFQUVJLGFBQWEsRUFBQTs7QUFJakI7O0VBRUUsZUFBZSxFQUFBOztBQUdqQixnQkFBQTs7QUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFOzs7SUFHRSxVQUFVLEVBQUEsRUFDWDs7QUFFSCxhQUFBOztBQ3ZHQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFGckI7SUFLSSxnQkFBZ0IsRUFBQTs7QUFMcEI7O0lBVUksa0JBQWtCLEVBQUE7O0FBVnRCO0lBY0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0U7O0lBR0ksZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9lZHVjYXRpb24tcm93L2VkdWNhdGlvbi1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlIGVsZW1lbnRzXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogNTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDU1ZW07XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDU3NnB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDBlbSkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk5JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQXBwIHN0eWxlIGVsZW1lbnRzXHJcbiRpcy1kYXJrOiAjMDIzMTVhO1xyXG4kaXMtbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiRrdnItZ3JlZW46ICMyMjZjNjU7XHJcbiRrdnItZ3JleTogIzRjNTI1NTtcclxuXHJcbiRjb2xvcnM6IChcclxuICBpcy1kYXJrOiAkaXMtZGFyayxcclxuICBpcy1saWdodDogJGlzLWxpZ2h0LFxyXG4gIGt2ci1ncmVlbjogJGt2ci1ncmVlbixcclxuICBrdnItZ3JleTogJGt2ci1ncmV5LFxyXG4gIHRleHR5OiAjZmZmLFxyXG4gIGJhY2tncm91bmQ6ICMzMzMsXHJcbiAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICBkYXJreTogIzExMSxcclxuICBvcmFuZ3k6ICNmZmE2MDAsXHJcbiAgZ3JleXk6ICNiYmIsXHJcbiAgbGlnaHR5OiAoXHJcbiAgICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gICAga3ZyLWdyZWVuOiBsaWdodGVuKCRrdnItZ3JlZW4sIDUlKSxcclxuICAgIGt2ci1ncmV5OiBsaWdodGVuKCRrdnItZ3JleSwgNTAlKVxyXG4gICksXHJcbiAgdHJhbnNwYXJlbnR5OiAoXHJcbiAgICBibGFja3k6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIGRhcmt5OiByZ2JhKDE1LCAxNSwgMTUsIDAuNSlcclxuICApXHJcbik7XHJcblxyXG4vLyBSZXRyaWV2ZSBjb2xvciBmcm9tICRjb2xvcnMgbWFwIGllLiBgY29sb3IoYmFzZSwgcHJpbWFyeSlgXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6IG51bGwpIHtcclxuICAvLyBDb2xvciB2YXJpYW50IGlzIG9wdGlvbmFsXHJcbiAgQGlmICgkY29sb3ItdmFyaWFudCAhPSBudWxsKSB7XHJcbiAgICAvLyBNYXAgaW5jZXB0aW9uXHJcbiAgICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSksICRjb2xvci12YXJpYW50KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgKiB7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEdyaWQgV2lkdGhzICovXHJcbi5ncmlkLTEge1xyXG4gIHdpZHRoOiAxNi42NjY2NjY2JTtcclxufVxyXG4uZ3JpZC0yIHtcclxuICB3aWR0aDogMzMuMzMzMzMzMyU7XHJcbn1cclxuLmdyaWQtMyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uZ3JpZC00IHtcclxuICB3aWR0aDogNjYuNjY2NjY2NiU7XHJcbn1cclxuLmdyaWQtNSB7XHJcbiAgd2lkdGg6IDgzLjMzMzMzMzMlO1xyXG59XHJcbi5ncmlkLTYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5ncmlkLTIsXHJcbiAgLmdyaWQtMyxcclxuICAuZ3JpZC00IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcbi8qIEVuZCBHcmlkICovXHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIGgyLFxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC5lZHVjYXRpb24ge1xyXG4gICAgaDIsXHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/education-row/education-row.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/education-row/education-row.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationRowComponent", function() { return EducationRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var EducationRowComponent = /** @class */ (function () {
    function EducationRowComponent() {
    }
    EducationRowComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EducationRowComponent.prototype, "education", void 0);
    EducationRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education-row',
            template: __webpack_require__(/*! ./education-row.component.html */ "./src/app/education-row/education-row.component.html"),
            styles: [__webpack_require__(/*! ./education-row.component.scss */ "./src/app/education-row/education-row.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationRowComponent);
    return EducationRowComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header style=\"background: url(../../../assets/images/mountain.jpg)\">\n  <img class=\"headshot\" src=\"../../../assets/images/headshot.jpg\">\n  <h1>Silvan Otten</h1>\n  <p>Software Developer</p>\n</header>\n\n<div class=\"container\">\n  <section class=\"center\">\n    <h1>Welcome!</h1>\n    <p>\n      I'm a fourth year student at the University of Windesheim, Zwolle.\n      Currently developing my knowledge and experience within agile environments.\n      I consider my greatest strengths to be my eagerness to learn new skills, pro-activity, and my ability\n      to handle an everchanging environment with a positive mindset.\n    </p>\n  </section>\n  <hr />\n\n  <section class=\"objective\">\n    <h3>B.Sc. Information & Communication Technology from Windesheim, University of Applied Sciences.</h3>\n    <h6 class=\"italic\">Estimated July 2021</h6>\n  </section>\n\n  <hr />\n\n  <div class=\"education-row\" *ngFor=\"let education of educations;\">\n    <app-education-row [education]=education></app-education-row>\n  </div>\n\n  <hr />\n\n</div>\n\n<!-- <app-spotlight></app-spotlight> -->\n\n<div class=\"container\">\n  <!-- <hr /> -->\n\n  <section>\n    <div class=\"row\">\n      <div class=\"grid-2\">\n        <h1>Languages</h1>\n        <ul>\n          <li>Angular</li>\n          <li>TypeScript / JavaScript</li>\n          <li>C# / .NET</li>\n          <li>Linq / SQL / ExpressJS</li>\n          <li>HTML / CSS</li>\n        </ul>\n      </div>\n\n      <div class=\"grid-2\">\n        <h1>Methods</h1>\n        <ul>\n          <li>Scrum / Agile</li>\n          <li>MVC</li>\n          <li>Git</li>\n          <li>Test Driven Development</li>\n          <li>Story Mapping</li>\n        </ul>\n      </div>\n\n      <div class=\"grid-2\">\n        <h1>Goals</h1>\n        <ul>\n          <li>Fullstack</li>\n          <li>UI / UX</li>\n          <li>Optimization</li>\n          <li>Data Analyses</li>\n          <li>Self-Improvement</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <hr />\n\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Oxygen);\n@import url(https://fonts.googleapis.com/css?family=Lato);\n.content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n.container {\n  max-width: 55em;\n  width: 90%; }\n.italic {\n  font-style: italic; }\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n::ng-deep *:focus {\n  outline: none; }\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n/* Grid Widths */\n.grid-1 {\n  width: 16.6666666%; }\n.grid-2 {\n  width: 33.3333333%; }\n.grid-3 {\n  width: 50%; }\n.grid-4 {\n  width: 66.6666666%; }\n.grid-5 {\n  width: 83.3333333%; }\n.grid-6 {\n  width: 100%; }\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n/* End Grid */\n/* General */\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  font-family: \"Oxygen\"; }\nh1,\nh2,\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 300; }\nhr {\n  border-top: 1px solid #bbb;\n  border-bottom: none;\n  margin-top: 3em;\n  margin-bottom: 2em; }\n/* End General */\n/* Header */\nheader {\n  margin-bottom: 4em;\n  text-align: center;\n  height: 555px; }\nheader .headshot {\n    margin-top: 100px;\n    width: height;\n    height: 175px;\n    border-radius: 50%;\n    box-shadow: 15px 0px 40px -12px rgba(0, 0, 0, 0.75); }\nheader h1 {\n    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);\n    letter-spacing: 0.05em;\n    font-weight: 700;\n    margin-top: 75px; }\nheader p {\n    font-size: 1.5em; }\nheader h1,\n  header p {\n    color: #fff;\n    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.5); }\n/* End Header */\n/* Section */\nsection h1 {\n  font-size: 1.8em;\n  margin-bottom: 1em; }\nsection ul li,\nsection ol li {\n  margin-left: -10px;\n  line-height: 1.8; }\n.center {\n  text-align: center; }\n.row {\n  margin-right: margin-left;\n  margin-left: -1%; }\n.row:before, .row:after {\n    content: \" \";\n    display: table; }\n/* End Section */\n/* Objective */\n.objective {\n  line-height: 2;\n  margin-bottom: 0;\n  text-align: center;\n  margin: 0 auto; }\n@media screen and (min-width: 40em) {\n  .objective {\n    width: 70%; } }\n/* End Objective */\n/* Education */\n.education-row {\n  border-bottom: dotted 1px #ccc; }\n.education-row:last-of-type {\n    border: none; }\n/* End Education */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGVla19kXFxEZXNrdG9wXFxMaXZlXFxzaWx2YW5vdHRlbi5naXRodWIuaW8vc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDJEQUFZO0FBQ1oseURBQVk7QUNEWjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7QUFHWjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDtBQUdIO0VBQ0U7SUFDRSxxQkFBcUIsRUFBQSxFQUN0QjtBQTJDSDtFQUVJLGFBQWEsRUFBQTtBQUlqQjs7RUFFRSxlQUFlLEVBQUE7QUFHakIsZ0JBQUE7QUFDQTtFQUNFLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxVQUFVLEVBQUE7QUFFWjtFQUNFLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFOzs7SUFHRSxVQUFVLEVBQUEsRUFDWDtBQUVILGFBQUE7QURyR0EsWUFBQTtBQUNBOzs7RUFLRSxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7QUFHdkI7OztFQUdFLCtCQUErQjtFQUMvQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLDBCQ3NCVztFRHJCWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBRXBCLGdCQUFBO0FBRUEsV0FBQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7QUFIZjtJQU1JLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUdsQixtREFBbUQsRUFBQTtBQVp2RDtJQWdCSSx1Q0FBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQW5CcEI7SUF1QkksZ0JBQWdCLEVBQUE7QUF2QnBCOztJQTRCSSxXQ25CUztJRG9CVCx1Q0FBdUMsRUFBQTtBQUczQyxlQUFBO0FBRUEsWUFBQTtBQUNBO0VBRUksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBSHRCOztFQVFJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0FBRmxCO0lBTUksWUFBWTtJQUNaLGNBQWMsRUFBQTtBQUdsQixnQkFBQTtBQUVBLGNBQUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUdoQjtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7QUFFSCxrQkFBQTtBQUVBLGNBQUE7QUFDQTtFQUNFLDhCQUE4QixFQUFBO0FBRGhDO0lBSUksWUFBWSxFQUFBO0FBSWhCLGtCQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3h5Z2VuKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8pO1xyXG5cclxuLyogR2VuZXJhbCAqL1xyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk94eWdlblwiO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBjb2xvcihncmV5eSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbi8qIEVuZCBHZW5lcmFsICovXHJcblxyXG4vKiBIZWFkZXIgKi9cclxuaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTU1cHg7XHJcblxyXG4gIC5oZWFkc2hvdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiBoZWlnaHQ7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNXB4IDBweCA0MHB4IC0xMnB4ICMwMDAwMDBiZjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTVweCAwcHggNDBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAwcHggNDBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogY29sb3IodGV4dHkpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxufVxyXG4vKiBFbmQgSGVhZGVyICovXHJcblxyXG4vKiBTZWN0aW9uICovXHJcbnNlY3Rpb24ge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgfVxyXG5cclxuICB1bCBsaSxcclxuICBvbCBsaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tcmlnaHQ6IG1hcmdpbi1sZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMSU7XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbn1cclxuLyogRW5kIFNlY3Rpb24gKi9cclxuXHJcbi8qIE9iamVjdGl2ZSAqL1xyXG4ub2JqZWN0aXZlIHtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC5vYmplY3RpdmUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuLyogRW5kIE9iamVjdGl2ZSAqL1xyXG5cclxuLyogRWR1Y2F0aW9uICovXHJcbi5lZHVjYXRpb24tcm93IHtcclxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4ICNjY2M7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEVuZCBFZHVjYXRpb24gKi9cclxuIiwiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1NWVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFwcCBzdHlsZSBlbGVtZW50c1xyXG4kaXMtZGFyazogIzAyMzE1YTtcclxuJGlzLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4ka3ZyLWdyZWVuOiAjMjI2YzY1O1xyXG4ka3ZyLWdyZXk6ICM0YzUyNTU7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgaXMtZGFyazogJGlzLWRhcmssXHJcbiAgaXMtbGlnaHQ6ICRpcy1saWdodCxcclxuICBrdnItZ3JlZW46ICRrdnItZ3JlZW4sXHJcbiAga3ZyLWdyZXk6ICRrdnItZ3JleSxcclxuICB0ZXh0eTogI2ZmZixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiAjZmZhNjAwLFxyXG4gIGdyZXl5OiAjYmJiLFxyXG4gIGxpZ2h0eTogKFxyXG4gICAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICAgIGt2ci1ncmVlbjogbGlnaHRlbigka3ZyLWdyZWVuLCA1JSksXHJcbiAgICBrdnItZ3JleTogbGlnaHRlbigka3ZyLWdyZXksIDUwJSlcclxuICApLFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgYmxhY2t5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICBkYXJreTogcmdiYSgxNSwgMTUsIDE1LCAwLjUpXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gUmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiBudWxsKSB7XHJcbiAgLy8gQ29sb3IgdmFyaWFudCBpcyBvcHRpb25hbFxyXG4gIEBpZiAoJGNvbG9yLXZhcmlhbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gTWFwIGluY2VwdGlvblxyXG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpLCAkY29sb3ItdmFyaWFudCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICoge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBHcmlkIFdpZHRocyAqL1xyXG4uZ3JpZC0xIHtcclxuICB3aWR0aDogMTYuNjY2NjY2NiU7XHJcbn1cclxuLmdyaWQtMiB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG59XHJcbi5ncmlkLTMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmdyaWQtNCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY2NjYlO1xyXG59XHJcbi5ncmlkLTUge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzJTtcclxufVxyXG4uZ3JpZC02IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuZ3JpZC0yLFxyXG4gIC5ncmlkLTMsXHJcbiAgLmdyaWQtNCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4vKiBFbmQgR3JpZCAqL1xyXG4iXX0= */"

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
/* harmony import */ var src_app_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/project-modal/project-modal.component */ "./src/app/modals/project-modal/project-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

// Angular

// Modal Components

// Bootstrap

var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
        this.projectUrlPath = '../../../assets/images/projects/';
    }
    HomeComponent.prototype.ngOnInit = function () {
        // TO-DO: Retrieve from service
        this.projects = [
            {
                title: 'Continuous Delivery',
                description: 'Minor at the Hogeschool Utrecht by Info Support, building complex applications from front to back with C# / .NET Core. ' +
                    'Using K8s, Specflow, Docker, MoQ, RabbitMQ with a focus on automation in Azure.',
                url: this.projectUrlPath + 'infosupport.jpg'
            },
            {
                title: 'Kavelruilonline',
                description: 'Project for the minor Web & Analytics at Windesheim. ' +
                    'Developed a brand new platform to facilitate lot exchanges within a multidisciplanary scrum team of four!',
                url: this.projectUrlPath + 'logo-kro.png'
            },
            {
                title: 'TSP',
                description: 'Displaying simulations with Java presenting various solutions to the Travelling Salesman Problem' +
                    'based on different algorithms(brute force, nearest neighbour and a swapping algorithm).',
                url: this.projectUrlPath + 'tsp.jpg'
            },
            {
                title: 'Driving Analyses',
                description: 'Proof of Concept for the National Railroad commissioned by Info Support. ' +
                    'Mobile Application to help machinists get insight into their driving style.',
                url: this.projectUrlPath + 'ns.png'
            },
            {
                title: 'Platform Game',
                description: 'Real time 2D platform game written in C#. Map creation, obstacle interaction, inventory system. ' +
                    'Improved my Object Oriented Programming skills in C#.',
                url: this.projectUrlPath + 'game.jpg'
            },
            {
                title: 'SuperBuddy',
                description: 'Internship developing a Native Progressive Web Application in NativeScript. ' +
                    'Designed a cross-platform mobile app to help delivery crew pick consumer goods.',
                url: this.projectUrlPath + 'superbuddy.png'
            },
            {
                title: 'Peer Assessment',
                description: 'Lead a project devolping a website environment for students to learn and improve SQL with eachother. ' +
                    'This helped improve the level of my PhP, SQL, HTML and CSS skills.',
                url: this.projectUrlPath + 'pat.jpg'
            }
        ];
        // TO-DO: Retrieve from service
        this.educations = [
            {
                title: 'Windesheim',
                timespan: 'Sept. 2016 - Present',
                description: 'Information & Communication Technology',
                characteristics: ['Software Engineering', 'Scrum & Agile Methodology', 'Design Patterns & Algorithms and Datastructures', 'Web & App Development with Analytics']
            },
            {
                title: 'Info Support',
                timespan: 'Feb. 2020 - April 2020',
                description: 'Realtime Monitoring in Distributed Systems',
                characteristics: ['Internship', 'Trace Context W3C Implementation', 'Full Stack Monitoring', '.NET Core 3.x / Framework 4.x / Blazor / MVC']
            },
            {
                title: 'Hogeschool Utrecht',
                timespan: 'Sept. 2019 - Feb. 2020',
                description: 'Continuous Delivery in Large and Complex Software Systems',
                characteristics: ['Building big applications from front to back with C# / .NET Core',
                    'Complex systems with K8s, Specflow, Docker, MoQ, RabbitMQ', 'Focus on Process Automation']
            },
            {
                title: 'Windesheim',
                timespan: 'Sept. 2010 - June 2011',
                description: 'Business Economics',
                characteristics: ['Accounting & Financial Management', 'Management & Financial Accounting', 'Internal and External Business Factors']
            },
            {
                title: 'University of Twente',
                timespan: 'Sept. 2009 - June 2010',
                description: 'Industrial Design Engineering',
                characteristics: ['Creatively designing Consumer Products', 'Applied Physics and Material Sciences']
            },
            {
                title: 'CSG. De Heemgaard',
                timespan: 'Sept. 2003 - June 2009',
                description: 'Nature and Health Sciences - Pre-university Degree',
                characteristics: ['Math, Biology, Physics, Chemistry, and Economics']
            }
        ];
    };
    HomeComponent.prototype.open = function (project) {
        var modalRef = this.modalService.open(src_app_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_2__["ProjectModalComponent"]);
        modalRef.componentInstance.project = project;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var src_app_components_spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/spotlight/spotlight.component */ "./src/app/components/spotlight/spotlight.component.ts");
/* harmony import */ var src_app_education_row_education_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/education-row/education-row.component */ "./src/app/education-row/education-row.component.ts");

// Angular



// Components



var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                src_app_education_row_education_row_component__WEBPACK_IMPORTED_MODULE_6__["EducationRowComponent"],
                src_app_components_spotlight_spotlight_component__WEBPACK_IMPORTED_MODULE_5__["SpotlightComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            entryComponents: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map