"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/UserContext.js":
/*!****************************!*\
  !*** ./app/UserContext.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider auto */ \nvar _s = $RefreshSig$();\n\n\n// Create the UserContext\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null,\n    token: null,\n    setUser: ()=>{},\n    logout: ()=>{}\n});\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUserState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setTokenState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Load user and token from localStorage on app initialization\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            const storedUser = localStorage.getItem(\"user\");\n            const storedToken = localStorage.getItem(\"token\");\n            if (storedUser) {\n                setUserState(JSON.parse(storedUser));\n            }\n            if (storedToken) {\n                setTokenState(storedToken);\n            }\n        }\n    }[\"UserProvider.useEffect\"], []);\n    // Save user to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            if (user) {\n                localStorage.setItem(\"user\", JSON.stringify(user));\n            } else {\n                localStorage.removeItem(\"user\");\n            }\n        }\n    }[\"UserProvider.useEffect\"], [\n        user\n    ]);\n    // Save token to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            if (token) {\n                localStorage.setItem(\"token\", token);\n            } else {\n                localStorage.removeItem(\"token\");\n            }\n        }\n    }[\"UserProvider.useEffect\"], [\n        token\n    ]);\n    // Method to set the user state\n    const setUser = (newUser, newToken)=>{\n        setUserState(newUser); // Ensure newUser contains email\n        setTokenState(newToken);\n    };\n    // Logout function\n    const logout = ()=>{\n        setUserState(null);\n        setTokenState(null);\n        localStorage.removeItem(\"user\");\n        localStorage.removeItem(\"token\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            token,\n            setUser,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\UserContext.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"Vmgk2QF8kRnYYXxg++G5MHoe3SY=\");\n_c = UserProvider;\n// PropTypes for validation\nUserProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired\n};\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Vc2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0U7QUFDL0I7QUFFbkMseUJBQXlCO0FBQ2xCLE1BQU1LLDRCQUFjSixvREFBYUEsQ0FBQztJQUN2Q0ssTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFNBQVMsS0FBTztJQUNoQkMsUUFBUSxLQUFPO0FBQ2pCLEdBQUc7QUFFSSxNQUFNQyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNMLE1BQU1NLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDSyxPQUFPTSxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXhDLDhEQUE4RDtJQUM5REMsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTVcsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1lBQ3hDLE1BQU1DLGNBQWNGLGFBQWFDLE9BQU8sQ0FBQztZQUV6QyxJQUFJRixZQUFZO2dCQUNkRixhQUFhTSxLQUFLQyxLQUFLLENBQUNMO1lBQzFCO1lBRUEsSUFBSUcsYUFBYTtnQkFDZkosY0FBY0k7WUFDaEI7UUFDRjtpQ0FBRyxFQUFFO0lBRUwsNENBQTRDO0lBQzVDZCxnREFBU0E7a0NBQUM7WUFDUixJQUFJRyxNQUFNO2dCQUNSUyxhQUFhSyxPQUFPLENBQUMsUUFBUUYsS0FBS0csU0FBUyxDQUFDZjtZQUM5QyxPQUFPO2dCQUNMUyxhQUFhTyxVQUFVLENBQUM7WUFDMUI7UUFDRjtpQ0FBRztRQUFDaEI7S0FBSztJQUVULDZDQUE2QztJQUM3Q0gsZ0RBQVNBO2tDQUFDO1lBQ1IsSUFBSUksT0FBTztnQkFDVFEsYUFBYUssT0FBTyxDQUFDLFNBQVNiO1lBQ2hDLE9BQU87Z0JBQ0xRLGFBQWFPLFVBQVUsQ0FBQztZQUMxQjtRQUNGO2lDQUFHO1FBQUNmO0tBQU07SUFFViwrQkFBK0I7SUFDL0IsTUFBTUMsVUFBVSxDQUFDZSxTQUFTQztRQUN4QlosYUFBYVcsVUFBVSxnQ0FBZ0M7UUFDdkRWLGNBQWNXO0lBQ2hCO0lBRUEsa0JBQWtCO0lBQ2xCLE1BQU1mLFNBQVM7UUFDYkcsYUFBYTtRQUNiQyxjQUFjO1FBQ2RFLGFBQWFPLFVBQVUsQ0FBQztRQUN4QlAsYUFBYU8sVUFBVSxDQUFDO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNqQixZQUFZb0IsUUFBUTtRQUNuQkMsT0FBTztZQUNMcEI7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQ0U7Ozs7OztBQUdQLEVBQUU7R0E5RFdEO0tBQUFBO0FBZ0ViLDJCQUEyQjtBQUMzQkEsYUFBYWlCLFNBQVMsR0FBRztJQUN2QmhCLFVBQVVQLHdEQUFjLENBQUN5QixVQUFVO0FBQ3JDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxuZWVkXFx0ZWVcXG5ld2VzdFxcRnJvbnRlbmRcXGV2ZW50cGxhbm5lclxcYXBwXFxVc2VyQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgVXNlckNvbnRleHRcclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgdXNlcjogbnVsbCxcclxuICB0b2tlbjogbnVsbCxcclxuICBzZXRVc2VyOiAoKSA9PiB7fSxcclxuICBsb2dvdXQ6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuU3RhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIExvYWQgdXNlciBhbmQgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2Ugb24gYXBwIGluaXRpYWxpemF0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgaWYgKHN0b3JlZFVzZXIpIHtcclxuICAgICAgc2V0VXNlclN0YXRlKEpTT04ucGFyc2Uoc3RvcmVkVXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdG9yZWRUb2tlbikge1xyXG4gICAgICBzZXRUb2tlblN0YXRlKHN0b3JlZFRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFNhdmUgdXNlciB0byBsb2NhbFN0b3JhZ2Ugd2hlbiBpdCBjaGFuZ2VzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgLy8gU2F2ZSB0b2tlbiB0byBsb2NhbFN0b3JhZ2Ugd2hlbiBpdCBjaGFuZ2VzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuXSk7XHJcblxyXG4gIC8vIE1ldGhvZCB0byBzZXQgdGhlIHVzZXIgc3RhdGVcclxuICBjb25zdCBzZXRVc2VyID0gKG5ld1VzZXIsIG5ld1Rva2VuKSA9PiB7XHJcbiAgICBzZXRVc2VyU3RhdGUobmV3VXNlcik7IC8vIEVuc3VyZSBuZXdVc2VyIGNvbnRhaW5zIGVtYWlsXHJcbiAgICBzZXRUb2tlblN0YXRlKG5ld1Rva2VuKTtcclxuICB9O1xyXG5cclxuICAvLyBMb2dvdXQgZnVuY3Rpb25cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VyU3RhdGUobnVsbCk7XHJcbiAgICBzZXRUb2tlblN0YXRlKG51bGwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gUHJvcFR5cGVzIGZvciB2YWxpZGF0aW9uXHJcblVzZXJQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb3BUeXBlcyIsIlVzZXJDb250ZXh0IiwidXNlciIsInRva2VuIiwic2V0VXNlciIsImxvZ291dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlclN0YXRlIiwic2V0VG9rZW5TdGF0ZSIsInN0b3JlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkVG9rZW4iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsIm5ld1VzZXIiLCJuZXdUb2tlbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/UserContext.js\n"));

/***/ })

});