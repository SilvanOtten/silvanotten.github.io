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

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.card {\n  padding-right: 5px;\n  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.25); }\n\n.card:hover {\n    box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.5); }\n\n.card img {\n    padding-bottom: 1.5em; }\n\n@media (max-width: 875px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n\n@media (max-width: 575px) {\n  .card-columns {\n    -webkit-column-count: 1;\n    column-count: 1; }\n  .card {\n    width: 75%;\n    margin-bottom: 2em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0XFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0U7SUFDRSxxQkFBcUIsRUFBQSxFQUN0Qjs7QUEyQ0g7RUFFSSxhQUFhLEVBQUE7O0FBSWpCOztFQUVFLGVBQWUsRUFBQTs7QUNyRWpCO0VBQ0Usa0JBQWtCO0VBR2xCLCtDQUErQyxFQUFBOztBQUpqRDtJQVNJLDhDQUE4QyxFQUFBOztBQVRsRDtJQWFJLHFCQUFxQixFQUFBOztBQUl6QjtFQUNFO0lBQ0UsdUJBQXVCO0lBRXZCLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsdUJBQXVCO0lBRXZCLGVBQWUsRUFBQTtFQUdqQjtJQUNFLFVBQVU7SUFDVixrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFnZSBlbGVtZW50c1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTVlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MGVtKSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBcHAgc3R5bGUgZWxlbWVudHNcclxuJGlzLWRhcms6ICMwMjMxNWE7XHJcbiRpcy1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuJGt2ci1ncmVlbjogIzIyNmM2NTtcclxuJGt2ci1ncmV5OiAjNGM1MjU1O1xyXG5cclxuJGNvbG9yczogKFxyXG4gIGlzLWRhcms6ICRpcy1kYXJrLFxyXG4gIGlzLWxpZ2h0OiAkaXMtbGlnaHQsXHJcbiAga3ZyLWdyZWVuOiAka3ZyLWdyZWVuLFxyXG4gIGt2ci1ncmV5OiAka3ZyLWdyZXksXHJcbiAgdGV4dHk6ICNmZmYsXHJcbiAgYmFja2dyb3VuZDogIzMzMyxcclxuICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gIGRhcmt5OiAjMTExLFxyXG4gIG9yYW5neTogI2ZmYTYwMCxcclxuICBncmV5eTogI2JiYixcclxuICBsaWdodHk6IChcclxuICAgIHBpbmt5OiBsaWdodGVuKGhvdHBpbmssIDEwJSksXHJcbiAgICBrdnItZ3JlZW46IGxpZ2h0ZW4oJGt2ci1ncmVlbiwgNSUpLFxyXG4gICAga3ZyLWdyZXk6IGxpZ2h0ZW4oJGt2ci1ncmV5LCA1MCUpXHJcbiAgKSxcclxuICB0cmFuc3BhcmVudHk6IChcclxuICAgIGJsYWNreTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgZGFya3k6IHJnYmEoMTUsIDE1LCAxNSwgMC41KVxyXG4gIClcclxuKTtcclxuXHJcbi8vIFJldHJpZXZlIGNvbG9yIGZyb20gJGNvbG9ycyBtYXAgaWUuIGBjb2xvcihiYXNlLCBwcmltYXJ5KWBcclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudDogbnVsbCkge1xyXG4gIC8vIENvbG9yIHZhcmlhbnQgaXMgb3B0aW9uYWxcclxuICBAaWYgKCRjb2xvci12YXJpYW50ICE9IG51bGwpIHtcclxuICAgIC8vIE1hcCBpbmNlcHRpb25cclxuICAgIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKSwgJGNvbG9yLXZhcmlhbnQpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAqIHtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzVweCkge1xyXG4gIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMjtcclxuICAgIGNvbHVtbi1jb3VudDogMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfVxyXG59Il19 */"

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

module.exports = "<div class=\"container\">\n  <h1 class=\"center projects\">Projects</h1>\n\n  <div class=\"card-columns\">\n    <ng-container *ngFor=\"let project of projects\">\n      <app-project [project]=project></app-project>\n    </ng-container>\n  </div>\n\n  <hr>\n</div>"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 52px;\n  padding-bottom: 2em; }\n\n@media (max-height: 576px) {\n  .footer {\n    display: none; } }\n\n.container {\n  max-width: 55em;\n  width: 90%; }\n\n@media screen and (max-width: 40em) {\n  .container {\n    width: 99% !important; } }\n\n::ng-deep *:focus {\n  outline: none; }\n\n::ng-deep .carousel-control-prev,\n::ng-deep .carousel-control-next {\n  cursor: pointer; }\n\n.projects {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxlZWtfZFxcRGVza3RvcFxcTGl2ZVxcc2lsdmFub3R0ZW4uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL0M6XFxVc2Vyc1xcZWVrX2RcXERlc2t0b3BcXExpdmVcXHNpbHZhbm90dGVuLmdpdGh1Yi5pby9zcmNcXGFwcFxccGFnZXNcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNFO0lBQ0UscUJBQXFCLEVBQUEsRUFDdEI7O0FBMkNIO0VBRUksYUFBYSxFQUFBOztBQUlqQjs7RUFFRSxlQUFlLEVBQUE7O0FDckVqQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhZ2UgZWxlbWVudHNcclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiA1MnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNTc2cHgpIHtcclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDU1ZW07XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDBlbSkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk5JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQXBwIHN0eWxlIGVsZW1lbnRzXHJcbiRpcy1kYXJrOiAjMDIzMTVhO1xyXG4kaXMtbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiRrdnItZ3JlZW46ICMyMjZjNjU7XHJcbiRrdnItZ3JleTogIzRjNTI1NTtcclxuXHJcbiRjb2xvcnM6IChcclxuICBpcy1kYXJrOiAkaXMtZGFyayxcclxuICBpcy1saWdodDogJGlzLWxpZ2h0LFxyXG4gIGt2ci1ncmVlbjogJGt2ci1ncmVlbixcclxuICBrdnItZ3JleTogJGt2ci1ncmV5LFxyXG4gIHRleHR5OiAjZmZmLFxyXG4gIGJhY2tncm91bmQ6ICMzMzMsXHJcbiAgcGlua3k6IGxpZ2h0ZW4oaG90cGluaywgMTAlKSxcclxuICBkYXJreTogIzExMSxcclxuICBvcmFuZ3k6ICNmZmE2MDAsXHJcbiAgZ3JleXk6ICNiYmIsXHJcbiAgbGlnaHR5OiAoXHJcbiAgICBwaW5reTogbGlnaHRlbihob3RwaW5rLCAxMCUpLFxyXG4gICAga3ZyLWdyZWVuOiBsaWdodGVuKCRrdnItZ3JlZW4sIDUlKSxcclxuICAgIGt2ci1ncmV5OiBsaWdodGVuKCRrdnItZ3JleSwgNTAlKVxyXG4gICksXHJcbiAgdHJhbnNwYXJlbnR5OiAoXHJcbiAgICBibGFja3k6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIGRhcmt5OiByZ2JhKDE1LCAxNSwgMTUsIDAuNSlcclxuICApXHJcbik7XHJcblxyXG4vLyBSZXRyaWV2ZSBjb2xvciBmcm9tICRjb2xvcnMgbWFwIGllLiBgY29sb3IoYmFzZSwgcHJpbWFyeSlgXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6IG51bGwpIHtcclxuICAvLyBDb2xvciB2YXJpYW50IGlzIG9wdGlvbmFsXHJcbiAgQGlmICgkY29sb3ItdmFyaWFudCAhPSBudWxsKSB7XHJcbiAgICAvLyBNYXAgaW5jZXB0aW9uXHJcbiAgICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSksICRjb2xvci12YXJpYW50KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgKiB7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLnByb2plY3RzIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

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
        this.projectUrlPath = '../../../../../../../assets/images/projects/';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
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