(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cover-letter/cover-letter.component */ "./src/app/components/cover-letter/cover-letter.component.ts");
/* harmony import */ var _components_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cv/cv.component */ "./src/app/components/cv/cv.component.ts");






const routes = [
    {
        path: '',
        component: _components_cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_2__["CoverLetterComponent"],
        data: { animation: 'isLeft' }
    },
    {
        path: 'cv',
        component: _components_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"],
        data: { animation: 'isRight' }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/animations/route.animations */ "./src/app/shared/animations/route.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    prepareRoute(outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_shared_animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["slider"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_shared_animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["slider"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cover_letter_cover_letter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cover-letter/cover-letter.module */ "./src/app/components/cover-letter/cover-letter.module.ts");
/* harmony import */ var _components_cv_cv_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cv/cv.module */ "./src/app/components/cv/cv.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _components_cover_letter_cover_letter_module__WEBPACK_IMPORTED_MODULE_5__["CoverLetterModule"],
            _components_cv_cv_module__WEBPACK_IMPORTED_MODULE_6__["CvModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _components_cover_letter_cover_letter_module__WEBPACK_IMPORTED_MODULE_5__["CoverLetterModule"],
        _components_cv_cv_module__WEBPACK_IMPORTED_MODULE_6__["CvModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _components_cover_letter_cover_letter_module__WEBPACK_IMPORTED_MODULE_5__["CoverLetterModule"],
                    _components_cv_cv_module__WEBPACK_IMPORTED_MODULE_6__["CvModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ButtonComponent {
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { text: "text", route: "route" }, decls: 3, vars: 2, consts: [[1, "button", 3, "routerLink"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.route);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  background: linear-gradient(#243f80, #007eaf);\n  display: inline-block;\n  padding: 0 35px;\n  font: 1.25rem/50px LatoBold, Tahoma, Helvetica, Arial, sans-serif;\n  border: none;\n  text-decoration: none;\n  color: #ffffff;\n  position: relative;\n  transition: all 0.4s;\n  white-space: nowrap;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  transition: all 0.4s;\n  transform: scale(0.5, 1);\n  border: 1px solid #243f80;\n}\n.button[_ngcontent-%COMP%]:hover {\n  color: #243f80;\n}\n.button[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: scale(1, 1);\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDeEJlO0VEeUJmLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUU7RUFDRSxjQ2hDUTtBRDhCWjtBQUlJO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC92YXJpYWJsZXNcIjtcclxuXHJcbi5idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkYXJrX2JsdWUsICRtYWluX2NvbG9yKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG4gIGZvbnQ6IDEuMjVyZW0vNTBweCBMYXRvQm9sZCwgVGFob21hLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jb2xvcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtfYmx1ZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRkYXJrX2JsdWU7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbn1cclxuIiwiLy9Db2xvcnNcclxuXHJcbiRtYWluX2NvbG9yOiAjMDA3ZWFmO1xyXG4kZGFya19ibHVlOiAjMjQzZjgwO1xyXG4kYmFja2dyb3VuZF9jb2xvcjogI2ZmZmZmZjtcclxuJGdyZXlfY29sb3I6ICM2NjY2NjY7O1xyXG4kd2hpdGVfY29sb3I6ICNmZmZmZmY7XHJcbiRibGFja19jb2xvcjogIzAwMDAwMDtcclxuXHJcbi8vQ29udGFpbmVyXHJcbiRjb250YWluZXI6IDkyMHB4O1xyXG5cclxuLy9NaXhpbnNcclxuQG1peGluIHRpdGxlKCkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiBsaWdodGVuKCRtYWluX2NvbG9yLCAxMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vL01lZGlhIHF1ZXJpZXNcclxuJHNtYWxsOiA1ODdweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], null, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], route: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/button/button.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/button/button.module.ts ***!
  \****************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ButtonModule {
}
ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                exports: [_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cover-letter/cover-letter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/cover-letter/cover-letter.component.ts ***!
  \*******************************************************************/
/*! exports provided: CoverLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverLetterComponent", function() { return CoverLetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");



const _c0 = function () { return ["cv"]; };
class CoverLetterComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoverLetterComponent.ɵfac = function CoverLetterComponent_Factory(t) { return new (t || CoverLetterComponent)(); };
CoverLetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoverLetterComponent, selectors: [["app-cover-letter"]], decls: 42, vars: 2, consts: [[1, "cover-letter"], [1, "cover-letter__container"], [1, "cover-letter__header"], [1, "cover-letter__header-logo"], ["src", "data:image/png;base64,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", "alt", ""], [1, "cover-letter__header-sender"], ["href", "tel:380934911599", 1, "cover-letter__header-sender-link"], ["href", "mailto:nikolskiy90@gmail.com", 1, "cover-letter__header-sender-link"], [1, "cover-letter__header-sender-socials"], [1, "cover-letter__header-sender-socials-item"], ["href", "https://t.me/santiagos90", "target", "_blank", 1, "cover-letter__header-sender-socials-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 32 32", "version", "1.1", 1, "cover-letter__header-sender-socials-svg"], ["fill", "#666666", "d", "M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11.09.722.558 1.155.894 1.394.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836.18.574.355.933.574 1.207.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02.04.011.067.015.118.023.773.234 1.394-.246 1.394-.246l.035-.028 2.883-2.625 4.832 3.707.11.047c1.007.442 2.027.196 2.566-.238.543-.437.754-.996.754-.996l.035-.09 3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047 1.872 1.872 0 0 0-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145-.078.062-.14.101-.465-.028l-5.91-4.531-3.57 3.254.75-4.79 9.656-9c.398-.37.265-.448.265-.448.028-.454-.601-.133-.601-.133l-12.176 7.543-.004-.02-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11 2.055-.863 3.574-1.496 3.66-1.53.082-.032.043-.032.102-.032z"], ["href", "https://www.linkedin.com/in/oleksandr-nikolskyi-329756183/", "target", "_blank", 1, "cover-letter__header-sender-socials-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 3333 3333", "shape-rendering", "geometricPrecision", "text-rendering", "geometricPrecision", "image-rendering", "optimizeQuality", "fill-rule", "evenodd", "clip-rule", "evenodd", 1, "cover-letter__header-sender-socials-svg"], ["fill", "#666666", "d", "M1465 1354h322v165h5c45-81 155-165 318-165 340 0 403 212 403 488v561h-336v-498c0-119-2-271-175-271-175 0-202 129-202 263v506h-336V1354zM1667 0c460 0 877 187 1179 488 302 302 488 718 488 1179 0 460-187 877-488 1179-302 302-718 488-1179 488-460 0-877-187-1179-488C186 2544 0 2128 0 1667c0-460 187-877 488-1179C790 186 1206 0 1667 0zm1093 573c-280-280-666-453-1093-453S853 293 574 573c-280 280-453 666-453 1093s173 814 453 1093c280 280 666 453 1093 453s814-173 1093-453c280-280 453-666 453-1093s-173-814-453-1093zm-1528 490c0 97-78 175-175 175s-175-78-175-175 78-175 175-175 175 78 175 175zm-350 291h350v1049H882V1354z"], ["href", "https://www.facebook.com/nikolskyy", "target", "_blank", 1, "cover-letter__header-sender-socials-link"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 1000 1000", "enable-background", "new 0 0 1000 1000", 1, "cover-letter__header-sender-socials-svg"], ["fill", "#666666", "d", "M425,355.4v95.1h-76.1v114H425v266.2H539V564.6h114.1v-114H539.1v-76.1c0-22.8,15.2-38,38-38h76.1V222.4H558C485.8,222.4,425,283.2,425,355.4L425,355.4z"], ["fill", "#666666", "d", "M500,10C230.5,10,10,230.5,10,500c0,269.4,220.5,490,490,490c269.5,0,490-220.5,490-490C990,230.5,769.5,10,500,10z M500,949.2C252.9,949.2,50.8,747,50.8,500C50.8,253,252.9,50.8,500,50.8S949.2,253,949.2,500C949.2,747,747.1,949.2,500,949.2z"], [1, "cover-letter__info"], [1, "cover-letter__info-hr"], [1, "cover-letter__transfer"], ["text", "Go to CV", 3, "route"]], template: function CoverLetterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Oleksandr Nikolskyi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+380934911599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "nikolskiy90@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dear Lohika HR-team,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " I would like to express my interest in applying for a part-time Front end developer position in your company. I saw that your company provides premium software engineering services to leading technology companies. I think that I would be well suited to the position, because I love doing web development and constantly evolving in this direction. I have attached my CV as well. I can be also reached by phone +380934911599 or on my email (nikolskiy90@gmail.com) any time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Looking forward to hearing from you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Best regards,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Oleksandr Nikolskyi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: [".cover-letter[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 20px;\n}\n.cover-letter__container[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 0 auto;\n}\n.cover-letter__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n}\n.cover-letter__header-logo[_ngcontent-%COMP%] {\n  width: 200px;\n  cursor: pointer;\n}\n.cover-letter__header-sender-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000000;\n}\n.cover-letter__header-sender-socials[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 30px 0 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cover-letter__header-sender-socials-item[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.cover-letter__header-sender-socials-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.cover-letter__header-sender-socials-link[_ngcontent-%COMP%]:hover   .cover-letter__header-sender-socials-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #007eaf;\n}\n.cover-letter__header-sender-socials-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transition: fill 0.2s ease-in-out;\n}\n.cover-letter__info[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.cover-letter__info-hr[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #007eaf;\n}\n.cover-letter__transfer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 587px) {\n  .cover-letter__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cover-letter__header-logo[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .cover-letter__header-sender-socials[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .cover-letter__header-sender-socials-item[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Zlci1sZXR0ZXIvY292ZXItbGV0dGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBQ0UsZ0JDR1E7RURGUixjQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRk47QUFNTTtFQUNFLHFCQUFBO0VBQ0EsY0NqQk07QURhZDtBQU9NO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUxSO0FBT1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxWO0FBUVE7RUFDRSxxQkFBQTtBQU5WO0FBU1k7RUFDRSxhQzNDRDtBRG9DYjtBQVlRO0VBQ0UsaUNBQUE7QUFWVjtBQWdCRTtFQUNFLG1CQUFBO0FBZEo7QUFnQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzdETztBRCtDYjtBQWtCRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQWhCSjtBQW9CQTtFQUVJO0lBQ0Usc0JBQUE7RUFsQko7RUFvQkk7SUFDRSxtQkFBQTtFQWxCTjtFQXNCTTtJQUNFLDJCQUFBO0VBcEJSO0VBc0JRO0lBQ0Usa0JBQUE7RUFwQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY292ZXItbGV0dGVyL2NvdmVyLWxldHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4uY292ZXItbGV0dGVyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogJGNvbnRhaW5lcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICYtbG9nbyB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtc2VuZGVyIHtcclxuICAgICAgJi1saW5rIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRibGFja19jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1zb2NpYWxzIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5jb3Zlci1sZXR0ZXJfX2hlYWRlci1zZW5kZXItc29jaWFscy1zdmcgcGF0aCB7XHJcbiAgICAgICAgICAgICAgZmlsbDogJG1haW5fY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtc3ZnIHBhdGgge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICYtaHIge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RyYW5zZmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgLmNvdmVyLWxldHRlciB7XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgJi1sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXNlbmRlciB7XHJcbiAgICAgICAgJi1zb2NpYWxzIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAmLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy9Db2xvcnNcclxuXHJcbiRtYWluX2NvbG9yOiAjMDA3ZWFmO1xyXG4kZGFya19ibHVlOiAjMjQzZjgwO1xyXG4kYmFja2dyb3VuZF9jb2xvcjogI2ZmZmZmZjtcclxuJGdyZXlfY29sb3I6ICM2NjY2NjY7O1xyXG4kd2hpdGVfY29sb3I6ICNmZmZmZmY7XHJcbiRibGFja19jb2xvcjogIzAwMDAwMDtcclxuXHJcbi8vQ29udGFpbmVyXHJcbiRjb250YWluZXI6IDkyMHB4O1xyXG5cclxuLy9NaXhpbnNcclxuQG1peGluIHRpdGxlKCkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiBsaWdodGVuKCRtYWluX2NvbG9yLCAxMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vL01lZGlhIHF1ZXJpZXNcclxuJHNtYWxsOiA1ODdweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoverLetterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cover-letter',
                templateUrl: './cover-letter.component.html',
                styleUrls: ['./cover-letter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/cover-letter/cover-letter.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/cover-letter/cover-letter.module.ts ***!
  \****************************************************************/
/*! exports provided: CoverLetterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverLetterModule", function() { return CoverLetterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cover_letter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-letter.component */ "./src/app/components/cover-letter/cover-letter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "./src/app/components/button/button.module.ts");





class CoverLetterModule {
}
CoverLetterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoverLetterModule });
CoverLetterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoverLetterModule_Factory(t) { return new (t || CoverLetterModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoverLetterModule, { declarations: [_cover_letter_component__WEBPACK_IMPORTED_MODULE_1__["CoverLetterComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]], exports: [_cover_letter_component__WEBPACK_IMPORTED_MODULE_1__["CoverLetterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoverLetterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cover_letter_component__WEBPACK_IMPORTED_MODULE_1__["CoverLetterComponent"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]],
                exports: [_cover_letter_component__WEBPACK_IMPORTED_MODULE_1__["CoverLetterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cv/cv.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/cv/cv.component.ts ***!
  \***********************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");




const _c0 = function () { return ["/"]; };
function CvComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class CvComponent {
    constructor() {
        this.isHidden = false;
    }
    onScroll() {
        this.isHidden = window.pageYOffset > 10;
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], hostBindings: function CvComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CvComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 96, vars: 1, consts: [[1, "cv", 3, "scroll"], [1, "cv__container"], [1, "cv__header"], [1, "cv__header-photo"], ["src", "./assets/images/avatar.jpg", "alt", "avatar"], [1, "cv__header-title"], ["class", "cv__header-transfer", 4, "ngIf"], [1, "cv__header-name"], [1, "cv__header-position"], [1, "cv__info"], [1, "cv__info-title"], [1, "cv__info-description"], [1, "cv__info-description-item"], [1, "cv__work"], [1, "cv__work-title"], [1, "cv__work-list"], [1, "cv__work-item"], [1, "cv__work-item-name"], [1, "cv__work-item-description"], [1, "cv-__work-item-description"], [1, "cv__education"], [1, "cv__education-title"], [1, "cv__education-list"], [1, "cv__education-item"], [1, "cv__education-item-name"], [1, "cv__education-item-description"], [1, "cv__hard-skills"], [1, "cv__hard-skills-title"], [1, "cv__hard-skills-description"], [1, "cv__hard-skills-description-item"], [1, "cv__soft-skills"], [1, "cv__soft-skills-title"], [1, "cv__soft-skills-description"], [1, "cv__soft-skills-description-item"], [1, "cv__header-transfer"], ["text", "Back", 3, "route"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CvComponent_Template_div_scroll_0_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvComponent_div_6_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oleksandr Nikolskyi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Front End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " I am a Front End Developer. I create responsive websites that allow the user to experience your website in the best and most appropriate way suited to the device they are using. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I was born and live in the beautiful city of Odessa. Actually, my life is incredibly interesting. I visited various parts of the world, talked with people of different nationalities, learned the cultures of different nations. I always maintain my body in great shape, because I prefer an active lifestyle and sports. I began to study programming on my own. This area of \u200B\u200Bactivity attracted me with the fact that you are constantly learning and in any case, your brain is in a constant tone. An elementary desire to develop is my main motivation, and without a constant influx of new knowledge I feel uneasy. The only person you need to be better is you yesterday. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Work experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " HYS Enterprise, Front end Developer (Angular) (10-2020 - present) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Development of functionality for a huge international company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hillel IT School, Front end Developer (Angular) (01-2020 - 10-2020) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Development of an internal product of the school - LMS - a platform for interaction between teacher and student ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Carnival Cruise Lines, Ordinary seaman (12-2016 - 07-2019) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Work under the supervision of bosun, maintenance of the ship in a good conditions, take part in mooring operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Boxing GYM \"Captain\" Personal trainer (04-2015 - 12-2016) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Conducting individual training in Thai boxing for children and adults ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 2nd Division of the State Executive Service of the Primorskyi District (03-2013 - 04-2015) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Execution of the court decisions and other bodies and officials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "IT School (2019)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " I successfully completed the courses of \"Front end Pro\" and \"Node.JS\" in \"Hillel IT School\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "University (2007 - 2012)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " National University \"Odessa Law academy\", Master of Law ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Professional hard skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Strong knowledge in HTML5/CSS3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Strong knowledge of JavaScript (ES5-ES6+) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Strong knowledge of TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Strong knowledge of Angular 2+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Work experience with Angular Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Work experience with Rxjs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Knowledge of React.JS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Knowledge and work experience with Node.JS and MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Upper-Intermediate English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Soft skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Devote my free time to self-development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Will check first if the answer to my question is in Google, then I\u2019ll ask my colleges and mentor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Proactive and ready for overtime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Self-organized and easygoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".cv[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.cv__container[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 0 auto;\n}\n.cv__header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cv__header-transfer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0.5;\n  transition: all 0.4s ease-in-out;\n  transform: scale(0.5);\n}\n.cv__header-transfer[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  opacity: 1;\n}\n.cv__header-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 22px;\n  font-weight: 600;\n  margin-left: 40px;\n  padding: 15px 15px 15px 0;\n  border-bottom: 3px solid #007eaf;\n}\n.cv__header-photo[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  overflow: hidden;\n}\n.cv__header-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.cv__header-name[_ngcontent-%COMP%] {\n  color: #007eaf;\n}\n.cv__info[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 20px;\n  border-bottom: 2px solid #007eaf;\n}\n.cv__info-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #007eaf;\n  font-weight: 600;\n  text-align: center;\n  margin: 0;\n  transition: all 0.2s ease-in-out;\n}\n.cv__info-title[_ngcontent-%COMP%]:hover {\n  color: #00a3e2;\n}\n.cv__education[_ngcontent-%COMP%], .cv__work[_ngcontent-%COMP%], .cv__hard-skills[_ngcontent-%COMP%], .cv__soft-skills[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid #007eaf;\n}\n.cv__education-title[_ngcontent-%COMP%], .cv__work-title[_ngcontent-%COMP%], .cv__hard-skills-title[_ngcontent-%COMP%], .cv__soft-skills-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #007eaf;\n  font-weight: 600;\n  text-align: center;\n  margin: 0;\n  transition: all 0.2s ease-in-out;\n}\n.cv__education-title[_ngcontent-%COMP%]:hover, .cv__work-title[_ngcontent-%COMP%]:hover, .cv__hard-skills-title[_ngcontent-%COMP%]:hover, .cv__soft-skills-title[_ngcontent-%COMP%]:hover {\n  color: #00a3e2;\n}\n.cv__education-list[_ngcontent-%COMP%], .cv__work-list[_ngcontent-%COMP%], .cv__hard-skills-list[_ngcontent-%COMP%], .cv__soft-skills-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 10px 0;\n  margin: 0;\n}\n.cv__education-item[_ngcontent-%COMP%], .cv__work-item[_ngcontent-%COMP%], .cv__hard-skills-item[_ngcontent-%COMP%], .cv__soft-skills-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(100px, 200px) 1fr;\n  grid-gap: 30px;\n  margin-bottom: 20px;\n}\n.cv__education-item[_ngcontent-%COMP%]:last-child, .cv__work-item[_ngcontent-%COMP%]:last-child, .cv__hard-skills-item[_ngcontent-%COMP%]:last-child, .cv__soft-skills-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cv__education-item-name[_ngcontent-%COMP%], .cv__work-item-name[_ngcontent-%COMP%], .cv__hard-skills-item-name[_ngcontent-%COMP%], .cv__soft-skills-item-name[_ngcontent-%COMP%] {\n  color: #007eaf;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n}\n.cv__education-item-name[_ngcontent-%COMP%]:hover, .cv__work-item-name[_ngcontent-%COMP%]:hover, .cv__hard-skills-item-name[_ngcontent-%COMP%]:hover, .cv__soft-skills-item-name[_ngcontent-%COMP%]:hover {\n  color: #00a3e2;\n}\n.cv__hard-skills-description[_ngcontent-%COMP%], .cv__soft-skills-description[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 20px;\n}\n.cv__soft-skills[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n@media screen and (max-width: 587px) {\n  .cv[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .cv__header[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    flex-direction: column;\n  }\n  .cv__header-title[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-left: 0;\n    padding: 15px;\n  }\n  .cv__header-photo[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .cv__work-item[_ngcontent-%COMP%], .cv__education-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n    margin-bottom: 25px;\n  }\n  .cv__work-item-name[_ngcontent-%COMP%], .cv__education-item-name[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .cv__hard-skills-description[_ngcontent-%COMP%], .cv__soft-skills-description[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdi9jdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQUdFO0VBQ0UsZ0JDSVE7RURIUixjQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FBRk47QUFJTTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBTUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBSk47QUFPSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN2Q2E7RUR3Q2IsZ0JBQUE7QUFMTjtBQU9NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxSO0FBU0k7RUFDRSxjQ3BETztBRDZDYjtBQVdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFUSjtBQVdJO0VDakRGLGVBQUE7RUFDQSxjQWJXO0VBY1gsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBRHlDRjtBQ3ZDRTtFQUNFLGNBQUE7QUR5Q0o7QUFLRTtFQUlFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBTko7QUFRSTtFQzlERixlQUFBO0VBQ0EsY0FiVztFQWNYLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUR5REY7QUN2REU7RUFDRSxjQUFBO0FEeURKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxnQkFBQTtBQUFSO0FBR007RUFDRSxjQy9GSztFRGdHTCxnQkFBQTtFQUNBLGdDQUFBO0FBRFI7QUFHUTtFQUNFLGNBQUE7QUFEVjtBQVNJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7QUFQTjtBQVdFO0VBQ0UsZ0JBQUE7QUFUSjtBQWFBO0VBQ0U7SUFDRSxhQUFBO0VBVkY7RUFZRTtJQUNFLGlCQUFBO0lBQ0Esc0JBQUE7RUFWSjtFQVlJO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFQVZOO0VBYUk7SUFDRSxtQkFBQTtFQVhOO0VBZ0JJO0lBQ0UsMEJBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFkTjtFQWdCTTtJQUNFLGtCQUFBO0VBZFI7RUFvQkk7SUFDRSwwQkFBQTtFQWxCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdi9jdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4uY3Yge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6ICRjb250YWluZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmLXRyYW5zZmVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJG1haW5fY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJi1waG90byB7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jb2xvcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtbmFtZSB7XHJcbiAgICAgIGNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2luZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW5fY29sb3I7XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIEBpbmNsdWRlIHRpdGxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZWR1Y2F0aW9uLFxyXG4gICZfX3dvcmssXHJcbiAgJl9faGFyZC1za2lsbHMsXHJcbiAgJl9fc29mdC1za2lsbHMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW5fY29sb3I7XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIEBpbmNsdWRlIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgICYtbGlzdCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAyMDBweCkgMWZyO1xyXG4gICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1uYW1lIHtcclxuICAgICAgICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigkbWFpbl9jb2xvciwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faGFyZC1za2lsbHMsXHJcbiAgJl9fc29mdC1za2lsbHMge1xyXG4gICAgJi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgICBncmlkLWdhcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvZnQtc2tpbGxzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAuY3Yge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICYtdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXBob3RvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fd29yaywgJl9fZWR1Y2F0aW9uIHtcclxuICAgICAgJi1pdGVtIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2hhcmQtc2tpbGxzLCAmX19zb2Z0LXNraWxscyB7XHJcbiAgICAgICYtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vQ29sb3JzXHJcblxyXG4kbWFpbl9jb2xvcjogIzAwN2VhZjtcclxuJGRhcmtfYmx1ZTogIzI0M2Y4MDtcclxuJGJhY2tncm91bmRfY29sb3I6ICNmZmZmZmY7XHJcbiRncmV5X2NvbG9yOiAjNjY2NjY2OztcclxuJHdoaXRlX2NvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2tfY29sb3I6ICMwMDAwMDA7XHJcblxyXG4vL0NvbnRhaW5lclxyXG4kY29udGFpbmVyOiA5MjBweDtcclxuXHJcbi8vTWl4aW5zXHJcbkBtaXhpbiB0aXRsZSgpIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICRtYWluX2NvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogbGlnaHRlbigkbWFpbl9jb2xvciwgMTApO1xyXG4gIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyaWVzXHJcbiRzbWFsbDogNTg3cHg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.scss']
            }]
    }], null, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/cv/cv.module.ts":
/*!********************************************!*\
  !*** ./src/app/components/cv/cv.module.ts ***!
  \********************************************/
/*! exports provided: CvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvModule", function() { return CvModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv.component */ "./src/app/components/cv/cv.component.ts");






class CvModule {
}
CvModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CvModule });
CvModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CvModule_Factory(t) { return new (t || CvModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CvModule, { declarations: [_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]], exports: [_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]],
                exports: [_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/animations/route.animations.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/route.animations.ts ***!
  \*******************************************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))
]);
function slideTo(direction) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'fixed',
                top: 0,
                [direction]: 0,
                width: '100%',
                height: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'fixed',
                [direction]: '-100%',
                width: '100%',
                height: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'fixed',
                    [direction]: '100%',
                    width: '100%',
                    height: '100%'
                }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'fixed',
                    [direction]: '0%',
                    width: '100%',
                    height: '100%'
                }))
            ])
        ])
    ];
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Lohika\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map