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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/dashboard/page.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Hdr2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Hdr2 */ \"(app-pages-browser)/./app/component/Hdr2.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"(app-pages-browser)/./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/components/Footer */ \"(app-pages-browser)/./app/component/components/Footer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AccountPage = ()=>{\n    _s();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('bob');\n    const [profilePic, setProfilePic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('https://i.gyazo.com/4446d7ff66010b8a004b3a94b592e7a3.png');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const handleSaveChanges = ()=>{\n        if (password !== confirmPassword) {\n            alert('Passwords do not match!');\n            return;\n        }\n        // Here you can handle saving changes (currently frontend-only)\n        alert('Profile updated successfully!');\n        setVisible(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"stuff\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Hdr2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pager\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"middlez\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"middle11\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bordss\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"bords11\",\n                                    children: \"My Account\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"middle33\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"profile-section\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"profile-image\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: profilePic,\n                                                alt: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"profile-info\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: [\n                                                        \"Username: \",\n                                                        username\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"Email: asdf@example.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"actions\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"action-button\",\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountPage, \"s8wtRy8SUH9O0azt/KRYvmAzY9g=\");\n_c = AccountPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPage);\nvar _c;\n$RefreshReg$(_c, \"AccountPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNvQjtBQUNvQjtBQUNKO0FBQ0o7QUFDb0I7QUFFcEQsTUFBTUssY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsaUJBQWlCQyxtQkFBbUIsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkQsTUFBTWUsb0JBQW9CO1FBQ3hCLElBQUlKLGFBQWFFLGlCQUFpQjtZQUNoQ0csTUFBTTtZQUNOO1FBQ0Y7UUFDQSwrREFBK0Q7UUFDL0RBLE1BQU07UUFDTlYsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakIsdURBQUdBOzs7OzswQkFDSiw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0M7b0NBQUdELFdBQVU7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTVCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNFO2dEQUFJQyxLQUFLWjtnREFBWWEsS0FBSTs7Ozs7Ozs7Ozs7c0RBRTVCLDhEQUFDTDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNLOzt3REFBRzt3REFBV2hCOzs7Ozs7OzhEQUNmLDhEQUFDaUI7OERBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJUCw4REFBQ1A7b0NBQUlDLFdBQVU7OENBR2IsNEVBQUNPO3dDQUFPUCxXQUFVO2tEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLMUMsOERBQUNmLG9FQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQWxETUM7S0FBQUE7QUFvRE4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXG5lZWRcXHRlZVxcbmV3ZXN0XFxGcm9udGVuZFxcZXZlbnRwbGFubmVyXFxhcHBcXGRhc2hib2FyZFxccGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCAnLi9wYWdlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhkciBmcm9tICcuLi9jb21wb25lbnQvSGRyMic7XHJcbmltcG9ydCBNb2RlbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50L2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmNvbnN0IEFjY291bnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCdib2InKTtcclxuICBjb25zdCBbcHJvZmlsZVBpYywgc2V0UHJvZmlsZVBpY10gPSB1c2VTdGF0ZSgnaHR0cHM6Ly9pLmd5YXpvLmNvbS80NDQ2ZDdmZjY2MDEwYjhhMDA0YjNhOTRiNTkyZTdhMy5wbmcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29uZmlybVBhc3N3b3JkLCBzZXRDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIGFsZXJ0KCdQYXNzd29yZHMgZG8gbm90IG1hdGNoIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBIZXJlIHlvdSBjYW4gaGFuZGxlIHNhdmluZyBjaGFuZ2VzIChjdXJyZW50bHkgZnJvbnRlbmQtb25seSlcclxuICAgIGFsZXJ0KCdQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3R1ZmZcIj5cclxuICAgICAgPEhkciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGV6XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZTExXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZHNzXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJvcmRzMTFcIj5NeSBBY2NvdW50PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZTMzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZVBpY30gYWx0PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Vc2VybmFtZToge3VzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5FbWFpbDogYXNkZkBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGRyIiwiTW9kZWwiLCJGb290ZXIiLCJBY2NvdW50UGFnZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInByb2ZpbGVQaWMiLCJzZXRQcm9maWxlUGljIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsImhhbmRsZVNhdmVDaGFuZ2VzIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.js\n"));

/***/ })

});