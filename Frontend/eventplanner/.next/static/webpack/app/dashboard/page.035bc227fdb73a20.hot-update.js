"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.js":
/*!*******************************!*\
  !*** ./app/dashboard/page.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/dashboard/page.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Hdr2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Hdr2 */ \"(app-pages-browser)/./app/component/Hdr2.js\");\n/* harmony import */ var _component_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/components/Footer */ \"(app-pages-browser)/./app/component/components/Footer.js\");\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserContext */ \"(app-pages-browser)/./app/UserContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AccountPage = ()=>{\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"AccountPage.useEffect\": ()=>{\n            console.log('User in AccountPage:', user); // Debugging log\n            if (!user) {\n                router.push('/login');\n            }\n        }\n    }[\"AccountPage.useEffect\"], [\n        user,\n        router\n    ]);\n    const handleLogout = ()=>{\n        logout(); // Call the logout function\n        router.push('/login'); // Redirect to login page\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashstuff\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Hdr2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashpager\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dashmiddlez\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dashmiddle11\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dashbordss\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"dashbords11\",\n                                    children: \"My Account\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dashmiddle33\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dashprofile-section\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dashprofile-image\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: 'https://i.gyazo.com/4446d7ff66010b8a004b3a94b592e7a3.png',\n                                                alt: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dashprofile-info\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: [\n                                                        \"Username: \",\n                                                        (user === null || user === void 0 ? void 0 : user.username) || 'Not Available'\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Email: \",\n                                                        (user === null || user === void 0 ? void 0 : user.email) || 'Email not available'\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dashactions\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"action-button\",\n                                        onClick: handleLogout,\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountPage, \"KDtqtR6k68QcW75/8jzQ4kfheCc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = AccountPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPage);\nvar _c;\n$RefreshReg$(_c, \"AccountPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNvQjtBQUNpQztBQUNqQjtBQUNnQjtBQUNQO0FBQ0Q7QUFFNUMsTUFBTU8sY0FBYzs7SUFDbEIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR04saURBQVVBLENBQUNHLHFEQUFXQTtJQUN2QyxNQUFNSSxTQUFTSCwwREFBU0E7SUFFeEJMLGdEQUFTQTtpQ0FBQztZQUNSUyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCSCxPQUFPLGdCQUFnQjtZQUMzRCxJQUFJLENBQUNBLE1BQU07Z0JBQ1RDLE9BQU9HLElBQUksQ0FBQztZQUNkO1FBQ0Y7Z0NBQUc7UUFBQ0o7UUFBTUM7S0FBTztJQUVqQixNQUFNSSxlQUFlO1FBQ25CQyxVQUFVLDJCQUEyQjtRQUNyQ0wsT0FBT0csSUFBSSxDQUFDLFdBQVcseUJBQXlCO0lBQ2xEO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDYix1REFBR0E7Ozs7OzBCQUNKLDhEQUFDWTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNDO29DQUFHRCxXQUFVOzhDQUFjOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDRTtnREFDQ0MsS0FBSztnREFDTEMsS0FBSTs7Ozs7Ozs7Ozs7c0RBR1IsOERBQUNMOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0s7O3dEQUFHO3dEQUFXYixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1jLFFBQVEsS0FBSTs7Ozs7Ozs4REFDakMsOERBQUNDOzt3REFBRTt3REFBUWYsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNZ0IsS0FBSyxLQUFJOzs7Ozs7O2dEQUEwQjs7Ozs7Ozs7Ozs7Ozs4Q0FJeEQsOERBQUNUO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDUzt3Q0FBT1QsV0FBVTt3Q0FBZ0JVLFNBQVNiO2tEQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtqRSw4REFBQ1Qsb0VBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBbERNRzs7UUFFV0Qsc0RBQVNBOzs7S0FGcEJDO0FBb0ROLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxuZWVkXFx0ZWVcXG5ld2VzdFxcRnJvbnRlbmRcXGV2ZW50cGxhbm5lclxcYXBwXFxkYXNoYm9hcmRcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgJy4vcGFnZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGRyIGZyb20gJy4uL2NvbXBvbmVudC9IZHIyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL1VzZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IEFjY291bnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVXNlciBpbiBBY2NvdW50UGFnZTonLCB1c2VyKTsgLy8gRGVidWdnaW5nIGxvZ1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9LCBbdXNlciwgcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvZ291dCgpOyAvLyBDYWxsIHRoZSBsb2dvdXQgZnVuY3Rpb25cclxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTsgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hzdHVmZlwiPlxyXG4gICAgICA8SGRyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaHBhZ2VyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNobWlkZGxlelwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNobWlkZGxlMTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9yZHNzXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRhc2hib3JkczExXCI+TXkgQWNjb3VudDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNobWlkZGxlMzNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNocHJvZmlsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNocHJvZmlsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9eydodHRwczovL2kuZ3lhem8uY29tLzQ0NDZkN2ZmNjYwMTBiOGEwMDRiM2E5NGI1OTJlN2EzLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hwcm9maWxlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Vc2VybmFtZToge3VzZXI/LnVzZXJuYW1lIHx8ICdOb3QgQXZhaWxhYmxlJ308L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyPy5lbWFpbCB8fCAnRW1haWwgbm90IGF2YWlsYWJsZSd9PC9wPiB7LyogRGVidWcgZm9yIGVtYWlsICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiSGRyIiwiRm9vdGVyIiwiVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJBY2NvdW50UGFnZSIsInVzZXIiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImhhbmRsZUxvZ291dCIsImxvZ291dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJ1c2VybmFtZSIsInAiLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.js\n"));

/***/ })

});