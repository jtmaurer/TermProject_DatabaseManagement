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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/dashboard/page.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _component_Hdr2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Hdr2 */ \"(app-pages-browser)/./app/component/Hdr2.js\");\n/* harmony import */ var _component_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/components/Footer */ \"(app-pages-browser)/./app/component/components/Footer.js\");\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UserContext */ \"(app-pages-browser)/./app/UserContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import useRouter for redirection\n\n\n\nconst AccountPage = ()=>{\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_6__.UserContext); // Access user from context\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // Router instance for redirection\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const [profilePic, setProfilePic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('https://i.gyazo.com/4446d7ff66010b8a004b3a94b592e7a3.png');\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"AccountPage.useEffect\": ()=>{\n            if (!user) {\n                // Redirect to sign-in page if user is not authenticated\n                router.push('/sign-in');\n                return;\n            }\n            if (user.userId) {\n                // Fetch user details using userId\n                fetch(\"http://localhost:8080/user-details?userId=\".concat(user.userId)).then({\n                    \"AccountPage.useEffect\": (response)=>{\n                        if (!response.ok) {\n                            throw new Error('Failed to fetch user details');\n                        }\n                        return response.json();\n                    }\n                }[\"AccountPage.useEffect\"]).then({\n                    \"AccountPage.useEffect\": (data)=>{\n                        setUsername(data.username);\n                        setEmail(data.email);\n                    }\n                }[\"AccountPage.useEffect\"]).catch({\n                    \"AccountPage.useEffect\": (error)=>{\n                        console.error('Error fetching user details:', error);\n                    }\n                }[\"AccountPage.useEffect\"]);\n            }\n        }\n    }[\"AccountPage.useEffect\"], [\n        user,\n        router\n    ]);\n    if (!user) {\n        // Optionally, render nothing while redirecting\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"stuff\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Hdr2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pager\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"middlez\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"middle11\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bordss\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"bords11\",\n                                    children: \"My Account\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"middle33\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"profile-section\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"profile-image\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: profilePic,\n                                                alt: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"profile-info\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: [\n                                                        \"Username: \",\n                                                        username || 'Loading...'\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Email: \",\n                                                        email || 'Loading...'\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"actions\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"action-button\",\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountPage, \"afU4FhS3feKJwBGxTDlGeqWM760=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AccountPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPage);\nvar _c;\n$RefreshReg$(_c, \"AccountPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVvQjtBQUMyQztBQUNuQixDQUFDLG1DQUFtQztBQUM1QztBQUNnQjtBQUNQO0FBRTdDLE1BQU1RLGNBQWM7O0lBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdOLGlEQUFVQSxDQUFDSSxxREFBV0EsR0FBRywyQkFBMkI7SUFDckUsTUFBTUcsU0FBU04sMERBQVNBLElBQUksa0NBQWtDO0lBQzlELE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0E7aUNBQUM7WUFDUixJQUFJLENBQUNRLE1BQU07Z0JBQ1Qsd0RBQXdEO2dCQUN4REMsT0FBT08sSUFBSSxDQUFDO2dCQUNaO1lBQ0Y7WUFFQSxJQUFJUixLQUFLUyxNQUFNLEVBQUU7Z0JBQ2Ysa0NBQWtDO2dCQUNsQ0MsTUFBTSw2Q0FBeUQsT0FBWlYsS0FBS1MsTUFBTSxHQUMzREUsSUFBSTs2Q0FBQyxDQUFDQzt3QkFDTCxJQUFJLENBQUNBLFNBQVNDLEVBQUUsRUFBRTs0QkFDaEIsTUFBTSxJQUFJQyxNQUFNO3dCQUNsQjt3QkFDQSxPQUFPRixTQUFTRyxJQUFJO29CQUN0Qjs0Q0FDQ0osSUFBSTs2Q0FBQyxDQUFDSzt3QkFDTGIsWUFBWWEsS0FBS2QsUUFBUTt3QkFDekJHLFNBQVNXLEtBQUtaLEtBQUs7b0JBQ3JCOzRDQUNDYSxLQUFLOzZDQUFDLENBQUNDO3dCQUNOQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtvQkFDaEQ7O1lBQ0o7UUFDRjtnQ0FBRztRQUFDbEI7UUFBTUM7S0FBTztJQUVqQixJQUFJLENBQUNELE1BQU07UUFDVCwrQ0FBK0M7UUFDL0MsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNvQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3pCLHVEQUFHQTs7Ozs7MEJBQ0osOERBQUN3QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNDO29DQUFHRCxXQUFVOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUk1Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDRTtnREFBSUMsS0FBS2xCO2dEQUFZbUIsS0FBSTs7Ozs7Ozs7Ozs7c0RBRTVCLDhEQUFDTDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNLOzt3REFBRzt3REFBV3hCLFlBQVk7Ozs7Ozs7OERBQzNCLDhEQUFDeUI7O3dEQUFFO3dEQUFRdkIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJeEIsOERBQUNnQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ087d0NBQU9QLFdBQVU7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsxQyw4REFBQ3hCLG9FQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQXJFTUU7O1FBRVdKLHNEQUFTQTs7O0tBRnBCSTtBQXVFTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxcbmVlZFxcdGVlXFxuZXdlc3RcXEZyb250ZW5kXFxldmVudHBsYW5uZXJcXGFwcFxcZGFzaGJvYXJkXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCAnLi9wYWdlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nOyAvLyBJbXBvcnQgdXNlUm91dGVyIGZvciByZWRpcmVjdGlvblxyXG5pbXBvcnQgSGRyIGZyb20gJy4uL2NvbXBvbmVudC9IZHIyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL1VzZXJDb250ZXh0JztcclxuXHJcbmNvbnN0IEFjY291bnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7IC8vIEFjY2VzcyB1c2VyIGZyb20gY29udGV4dFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBSb3V0ZXIgaW5zdGFuY2UgZm9yIHJlZGlyZWN0aW9uXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2ZpbGVQaWMsIHNldFByb2ZpbGVQaWNdID0gdXNlU3RhdGUoJ2h0dHBzOi8vaS5neWF6by5jb20vNDQ0NmQ3ZmY2NjAxMGI4YTAwNGIzYTk0YjU5MmU3YTMucG5nJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgLy8gUmVkaXJlY3QgdG8gc2lnbi1pbiBwYWdlIGlmIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcclxuICAgICAgcm91dGVyLnB1c2goJy9zaWduLWluJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXNlci51c2VySWQpIHtcclxuICAgICAgLy8gRmV0Y2ggdXNlciBkZXRhaWxzIHVzaW5nIHVzZXJJZFxyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXItZGV0YWlscz91c2VySWQ9JHt1c2VyLnVzZXJJZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRldGFpbHMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0VXNlcm5hbWUoZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgICBzZXRFbWFpbChkYXRhLmVtYWlsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgZGV0YWlsczonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXIsIHJvdXRlcl0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIC8vIE9wdGlvbmFsbHksIHJlbmRlciBub3RoaW5nIHdoaWxlIHJlZGlyZWN0aW5nXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWZmXCI+XHJcbiAgICAgIDxIZHIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlelwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUxMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRzc1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJib3JkczExXCI+TXkgQWNjb3VudDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUzM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVQaWN9IGFsdD1cIlByb2ZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+VXNlcm5hbWU6IHt1c2VybmFtZSB8fCAnTG9hZGluZy4uLid9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7ZW1haWwgfHwgJ0xvYWRpbmcuLi4nfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiSGRyIiwiRm9vdGVyIiwiVXNlckNvbnRleHQiLCJBY2NvdW50UGFnZSIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInByb2ZpbGVQaWMiLCJzZXRQcm9maWxlUGljIiwicHVzaCIsInVzZXJJZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.js\n"));

/***/ })

});