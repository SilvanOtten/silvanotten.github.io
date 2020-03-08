(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projects-projects-module"],{

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mx-auto\">\n  <div class=\"card-body center\">\n    <h4 class=\"card-title\"> {{ project.title }}</h4>\n    <img class=\"card-img-bottom\" [src]=\"project.url\" alt=\"Card image\">\n    <button class=\"btn btn-primary stretched-link\" (click)=\"open(project)\">View More</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n.italic {\n  font-style: italic; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/* Grid Widths */\n\n.grid-1 {\n  width: 16.6666666%; }\n\n.grid-2 {\n  width: 33.3333333%; }\n\n.grid-3 {\n  width: 50%; }\n\n.grid-4 {\n  width: 66.6666666%; }\n\n.grid-5 {\n  width: 83.3333333%; }\n\n.grid-6 {\n  width: 100%; }\n\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n\n/* End Grid */\n\n.card {\n  padding-right: 5px;\n  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.25); }\n\n.card:hover {\n    box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.5); }\n\n.card img {\n    padding-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0XFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxxQkFBcUIsRUFBQSxFQUN0Qjs7QUEyQ0g7RUFFSSxhQUFhLEVBQUE7O0FBSWpCOztFQUVFLGVBQWUsRUFBQTs7QUFHakIsZ0JBQUE7O0FBQ0E7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRTs7O0lBR0UsVUFBVSxFQUFBLEVBQ1g7O0FBRUgsYUFBQTs7QUN2R0E7RUFDRSxrQkFBa0I7RUFHbEIsK0NBQStDLEVBQUE7O0FBSmpEO0lBU0ksOENBQThDLEVBQUE7O0FBVGxEO0lBYUksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhZ2UgZWxlbWVudHNcclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiA1MnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTVlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uaXRhbGljIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNTc2cHgpIHtcclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MGVtKSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGlzLWRhcms6ICMwMjMxNWE7XHJcbiRpcy1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuJGt2ci1ncmVlbjogIzIyNmM2NTtcclxuJGt2ci1ncmV5OiAjNGM1MjU1O1xyXG5cclxuJGNvbG9yczogKFxyXG4gIGlzLWRhcms6ICRpcy1kYXJrLFxyXG4gIGlzLWxpZ2h0OiAkaXMtbGlnaHQsXHJcbiAga3ZyLWdyZWVuOiAka3ZyLWdyZWVuLFxyXG4gIGt2ci1ncmV5OiAka3ZyLWdyZXksXHJcbiAgdGV4dHk6ICNmZmYsXHJcbiAgYmFja2dyb3VuZDogIzMzMyxcclxuICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gIGRhcmt5OiAjMTExLFxyXG4gIG9yYW5neTogI2ZmYTYwMCxcclxuICBncmV5eTogI2JiYixcclxuICBsaWdodHk6IChcclxuICAgIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgICBrdnItZ3JlZW46IGxpZ2h0ZW4oJGt2ci1ncmVlbiwgNSUpLFxyXG4gICAga3ZyLWdyZXk6IGxpZ2h0ZW4oJGt2ci1ncmV5LCA1MCUpXHJcbiAgKSxcclxuICB0cmFuc3BhcmVudHk6IChcclxuICAgIGJsYWNreTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgZGFya3k6IHJnYmEoMTUsIDE1LCAxNSwgMC41KVxyXG4gIClcclxuKTtcclxuXHJcbi8vIFJldHJpZXZlIGNvbG9yIGZyb20gJGNvbG9ycyBtYXAgaWUuIGBjb2xvcihiYXNlLCBwcmltYXJ5KWBcclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudDogbnVsbCkge1xyXG4gIC8vIENvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIE1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogR3JpZCBXaWR0aHMgKi9cclxuLmdyaWQtMSB7XHJcbiAgd2lkdGg6IDE2LjY2NjY2NjYlO1xyXG59XHJcbi5ncmlkLTIge1xyXG4gIHdpZHRoOiAzMy4zMzMzMzMzJTtcclxufVxyXG4uZ3JpZC0zIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5ncmlkLTQge1xyXG4gIHdpZHRoOiA2Ni42NjY2NjY2JTtcclxufVxyXG4uZ3JpZC01IHtcclxuICB3aWR0aDogODMuMzMzMzMzMyU7XHJcbn1cclxuLmdyaWQtNiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmdyaWQtMixcclxuICAuZ3JpZC0zLFxyXG4gIC5ncmlkLTQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuLyogRW5kIEdyaWQgKi9cclxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/project-modal/project-modal.component */ "./src/app/modals/project-modal/project-modal.component.ts");

// Angular

// Bootstrap

// Components

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(ngbModal) {
        this.ngbModal = ngbModal;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.open = function (project) {
        var modalRef = this.ngbModal.open(src_app_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__["ProjectModalComponent"]);
        modalRef.componentInstance.project = project;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"center projects\">Projects</h1>\n\n  <div class=\"card-columns\">\n    <ng-container *ngFor=\"let project of projects\">\n      <app-project [project]=project></app-project>\n    </ng-container>\n  </div>\n\n  <br />\n\n</div>"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n.italic {\n  font-style: italic; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n/* Grid Widths */\n\n.grid-1 {\n  width: 16.6666666%; }\n\n.grid-2 {\n  width: 33.3333333%; }\n\n.grid-3 {\n  width: 50%; }\n\n.grid-4 {\n  width: 66.6666666%; }\n\n.grid-5 {\n  width: 83.3333333%; }\n\n.grid-6 {\n  width: 100%; }\n\n@media screen and (max-width: 576px) {\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    width: 90%; } }\n\n/* End Grid */\n\n.projects {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  text-align: center; }\n\n@media (max-width: 875px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n\n@media (max-width: 575px) {\n  .card-columns {\n    -webkit-column-count: 1;\n    column-count: 1; }\n  .card {\n    width: 60%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxccGFnZXNcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UscUJBQXFCLEVBQUEsRUFDdEI7O0FBMkNIO0VBRUksYUFBYSxFQUFBOztBQUlqQjs7RUFFRSxlQUFlLEVBQUE7O0FBR2pCLGdCQUFBOztBQUNBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7OztJQUdFLFVBQVUsRUFBQSxFQUNYOztBQUVILGFBQUE7O0FDdkdBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTtJQUNFLHVCQUF1QjtJQUV2QixlQUFlLEVBQUEsRUFDaEI7O0FBR0g7RUFDRTtJQUNFLHVCQUF1QjtJQUV2QixlQUFlLEVBQUE7RUFHakI7SUFDRSxVQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1NWVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFwcCBzdHlsZSBlbGVtZW50c1xyXG4kaXMtZGFyazogIzAyMzE1YTtcclxuJGlzLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4ka3ZyLWdyZWVuOiAjMjI2YzY1O1xyXG4ka3ZyLWdyZXk6ICM0YzUyNTU7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgaXMtZGFyazogJGlzLWRhcmssXHJcbiAgaXMtbGlnaHQ6ICRpcy1saWdodCxcclxuICBrdnItZ3JlZW46ICRrdnItZ3JlZW4sXHJcbiAga3ZyLWdyZXk6ICRrdnItZ3JleSxcclxuICB0ZXh0eTogI2ZmZixcclxuICBiYWNrZ3JvdW5kOiAjMzMzLFxyXG4gIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgZGFya3k6ICMxMTEsXHJcbiAgb3Jhbmd5OiAjZmZhNjAwLFxyXG4gIGdyZXl5OiAjYmJiLFxyXG4gIGxpZ2h0eTogKFxyXG4gICAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICAgIGt2ci1ncmVlbjogbGlnaHRlbigka3ZyLWdyZWVuLCA1JSksXHJcbiAgICBrdnItZ3JleTogbGlnaHRlbigka3ZyLWdyZXksIDUwJSlcclxuICApLFxyXG4gIHRyYW5zcGFyZW50eTogKFxyXG4gICAgYmxhY2t5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICBkYXJreTogcmdiYSgxNSwgMTUsIDE1LCAwLjUpXHJcbiAgKVxyXG4pO1xyXG5cclxuLy8gUmV0cmlldmUgY29sb3IgZnJvbSAkY29sb3JzIG1hcCBpZS4gYGNvbG9yKGJhc2UsIHByaW1hcnkpYFxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiBudWxsKSB7XHJcbiAgLy8gQ29sb3IgdmFyaWFudCBpcyBvcHRpb25hbFxyXG4gIEBpZiAoJGNvbG9yLXZhcmlhbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gTWFwIGluY2VwdGlvblxyXG4gICAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpLCAkY29sb3ItdmFyaWFudCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICoge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBHcmlkIFdpZHRocyAqL1xyXG4uZ3JpZC0xIHtcclxuICB3aWR0aDogMTYuNjY2NjY2NiU7XHJcbn1cclxuLmdyaWQtMiB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG59XHJcbi5ncmlkLTMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmdyaWQtNCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY2NjYlO1xyXG59XHJcbi5ncmlkLTUge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzJTtcclxufVxyXG4uZ3JpZC02IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuZ3JpZC0yLFxyXG4gIC5ncmlkLTMsXHJcbiAgLmdyaWQtNCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4vKiBFbmQgR3JpZCAqL1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4ucHJvamVjdHMge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODc1cHgpIHtcclxuICAuY2FyZC1jb2x1bW5zIHtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuY2FyZC1jb2x1bW5zIHtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAxO1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICBjb2x1bW4tY291bnQ6IDE7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/project-modal/project-modal.component */ "./src/app/modals/project-modal/project-modal.component.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(modalService) {
        this.modalService = modalService;
        this.projectUrlPath = '/assets/images/projects/';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        // TO-DO: Retrieve from service
        this.projects = [
            {
                title: 'Graduation',
                description: 'Realtime monitoring in a complex distributed software system.',
                url: this.projectUrlPath + 'infosupport.jpg'
            },
            {
                title: 'Continuous Delivery',
                description: 'Minor at the Hogeschool Utrecht by Info Support, building complex applications from front to back with C# / .NET Core. ' +
                    'Using K8s, Specflow, Docker, MoQ, RabbitMQ with a focus on automation in Azure.',
                url: this.projectUrlPath + 'hu.png'
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
    };
    ProjectsComponent.prototype.open = function (project) {
        var modalRef = this.modalService.open(src_app_modals_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__["ProjectModalComponent"]);
        modalRef.componentInstance.project = project;
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var src_app_components_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/project/project.component */ "./src/app/components/project/project.component.ts");

// Angular



// Components


var routes = [
    {
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }
];
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                src_app_components_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-projects-projects-module.js.map