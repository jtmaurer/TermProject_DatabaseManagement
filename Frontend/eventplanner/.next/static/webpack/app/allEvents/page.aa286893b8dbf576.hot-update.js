"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/allEvents/page",{

/***/ "(app-pages-browser)/./app/allEvents/page.js":
/*!*******************************!*\
  !*** ./app/allEvents/page.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/allEvents/page.css\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Hero */ \"(app-pages-browser)/./app/allEvents/components/Hero.js\");\n/* harmony import */ var _component_filters_FilteredList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/filters/FilteredList */ \"(app-pages-browser)/./app/component/filters/FilteredList.js\");\n/* harmony import */ var _component_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/components/Footer */ \"(app-pages-browser)/./app/component/components/Footer.js\");\n/* harmony import */ var _component_Hdr2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Hdr2 */ \"(app-pages-browser)/./app/component/Hdr2.js\");\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UserContext */ \"(app-pages-browser)/./app/UserContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { user, logout } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_8__.UserContext);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            console.log('User in AccountPage:', user); // Debugging log\n            if (!user) {\n                router.push('/login');\n            }\n        }\n    }[\"Home.useEffect\"], [\n        user,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Hdr2__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\allEvents\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\allEvents\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_filters_FilteredList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\allEvents\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"allz\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\allEvents\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\allEvents\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\allEvents\\\\page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"cshQxm0WWjcN3MPaX+QXA8utkrs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbGxFdmVudHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWdFO0FBQzVDO0FBQ3dCO0FBQ047QUFDaUI7QUFDRztBQUNOO0FBQ2hCO0FBQ1M7QUFJN0MsTUFBTVcsT0FBTzs7SUFDWCxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFDLEdBQUdWLGlEQUFVQSxDQUFDTyxxREFBV0E7SUFDOUMsTUFBTUksU0FBU1YsMERBQVNBO0lBRXhCSCxnREFBU0E7MEJBQUM7WUFDUmMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkosT0FBTyxnQkFBZ0I7WUFDM0QsSUFBSSxDQUFDQSxNQUFNO2dCQUNURSxPQUFPRyxJQUFJLENBQUM7WUFDZDtRQUNGO3lCQUFHO1FBQUNMO1FBQU1FO0tBQU87SUFHakIscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ1QsdURBQUdBOzs7OzswQkFDSCw4REFBQ0osd0RBQUtBOzs7OzswQkFDUCw4REFBQ0MsdUVBQU1BOzs7OzswQkFHUCw4REFBQ1k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNYLG9FQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO0dBekJNRzs7UUFFV1Asc0RBQVNBOzs7S0FGcEJPO0FBMkJOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxuZWVkXFx0ZWVcXG5ld2VzdFxcRnJvbnRlbmRcXGV2ZW50cGxhbm5lclxcYXBwXFxhbGxFdmVudHNcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vcGFnZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgSGVybzIgZnJvbSAnLi9jb21wb25lbnRzL0hlcm8nO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudC9maWx0ZXJzL0ZpbHRlcmVkTGlzdCc7XHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vY29tcG9uZW50L2ZpbHRlcnMvRmlsdGVyZWRMaXN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgSGRyIGZyb20gJy4uL2NvbXBvbmVudC9IZHIyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9Vc2VyQ29udGV4dCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCBsb2dvdXR9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVXNlciBpbiBBY2NvdW50UGFnZTonLCB1c2VyKTsgLy8gRGVidWdnaW5nIGxvZ1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9LCBbdXNlciwgcm91dGVyXSk7XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGRyIC8+XHJcbiAgICAgICA8SGVybzIgLz5cclxuICAgICAgPEV2ZW50cyAvPiBcclxuICAgICAgey8qRXZlbnRzIEZvciBZb3VcclxuICAgICAgPEV2ZW50TGlzdCAvPiovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxseic+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiSGVybzIiLCJFdmVudHMiLCJFdmVudExpc3QiLCJGb290ZXIiLCJIZHIiLCJVc2VyQ29udGV4dCIsIkhvbWUiLCJ1c2VyIiwibG9nb3V0Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/allEvents/page.js\n"));

/***/ })

});