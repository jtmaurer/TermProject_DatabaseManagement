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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider auto */ \nvar _s = $RefreshSig$();\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUserState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setTokenState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Load user and token from localStorage on app initialization\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            const storedUser = localStorage.getItem('user');\n            const storedToken = localStorage.getItem('token');\n            if (storedUser) {\n                setUserState(JSON.parse(storedUser));\n            }\n            if (storedToken) {\n                setTokenState(storedToken);\n            }\n        }\n    }[\"UserProvider.useEffect\"], []);\n    // Save user to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            if (user) {\n                localStorage.setItem('user', JSON.stringify(user));\n            } else {\n                localStorage.removeItem('user');\n            }\n        }\n    }[\"UserProvider.useEffect\"], [\n        user\n    ]);\n    // Save token to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            if (token) {\n                localStorage.setItem('token', token);\n            } else {\n                localStorage.removeItem('token');\n            }\n        }\n    }[\"UserProvider.useEffect\"], [\n        token\n    ]);\n    // Method to set the user state\n    const setUser = (newUser, newToken)=>{\n        setUserState(newUser);\n        setTokenState(newToken);\n    };\n    // Logout function\n    const logout = ()=>{\n        setUserState(null);\n        setTokenState(null);\n        localStorage.removeItem('user');\n        localStorage.removeItem('token');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            token,\n            setUser,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\UserContext.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"Vmgk2QF8kRnYYXxg++G5MHoe3SY=\");\n_c = UserProvider;\nUserProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired\n};\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Vc2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0U7QUFDL0I7QUFFNUIsTUFBTUssNEJBQWNKLG9EQUFhQSxHQUFHO0FBRXBDLE1BQU1LLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNRLE9BQU9DLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFFeEMsOERBQThEO0lBQzlEQyxnREFBU0E7a0NBQUM7WUFDUixNQUFNUyxhQUFhQyxhQUFhQyxPQUFPLENBQUM7WUFDeEMsTUFBTUMsY0FBY0YsYUFBYUMsT0FBTyxDQUFDO1lBRXpDLElBQUlGLFlBQVk7Z0JBQ2RILGFBQWFPLEtBQUtDLEtBQUssQ0FBQ0w7WUFDMUI7WUFFQSxJQUFJRyxhQUFhO2dCQUNmSixjQUFjSTtZQUNoQjtRQUNGO2lDQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUNaLGdEQUFTQTtrQ0FBQztZQUNSLElBQUlLLE1BQU07Z0JBQ1JLLGFBQWFLLE9BQU8sQ0FBQyxRQUFRRixLQUFLRyxTQUFTLENBQUNYO1lBQzlDLE9BQU87Z0JBQ0xLLGFBQWFPLFVBQVUsQ0FBQztZQUMxQjtRQUNGO2lDQUFHO1FBQUNaO0tBQUs7SUFFVCw2Q0FBNkM7SUFDN0NMLGdEQUFTQTtrQ0FBQztZQUNSLElBQUlPLE9BQU87Z0JBQ1RHLGFBQWFLLE9BQU8sQ0FBQyxTQUFTUjtZQUNoQyxPQUFPO2dCQUNMRyxhQUFhTyxVQUFVLENBQUM7WUFDMUI7UUFDRjtpQ0FBRztRQUFDVjtLQUFNO0lBRVYsK0JBQStCO0lBQy9CLE1BQU1XLFVBQVUsQ0FBQ0MsU0FBU0M7UUFDeEJkLGFBQWFhO1FBQ2JYLGNBQWNZO0lBQ2hCO0lBRUEsa0JBQWtCO0lBQ2xCLE1BQU1DLFNBQVM7UUFDYmYsYUFBYTtRQUNiRSxjQUFjO1FBQ2RFLGFBQWFPLFVBQVUsQ0FBQztRQUN4QlAsYUFBYU8sVUFBVSxDQUFDO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNmLFlBQVlvQixRQUFRO1FBQ25CQyxPQUFPO1lBQ0xsQjtZQUNBRTtZQUNBVztZQUNBRztRQUNGO2tCQUVDakI7Ozs7OztBQUdQLEVBQUU7R0E5RFdEO0tBQUFBO0FBZ0ViQSxhQUFhcUIsU0FBUyxHQUFHO0lBQ3ZCcEIsVUFBVUgsd0RBQWMsQ0FBQ3lCLFVBQVU7QUFDckMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXG5lZWRcXHRlZVxcbmV3ZXN0XFxGcm9udGVuZFxcZXZlbnRwbGFubmVyXFxhcHBcXFVzZXJDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5TdGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gTG9hZCB1c2VyIGFuZCB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZSBvbiBhcHAgaW5pdGlhbGl6YXRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgIGlmIChzdG9yZWRVc2VyKSB7XHJcbiAgICAgIHNldFVzZXJTdGF0ZShKU09OLnBhcnNlKHN0b3JlZFVzZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RvcmVkVG9rZW4pIHtcclxuICAgICAgc2V0VG9rZW5TdGF0ZShzdG9yZWRUb2tlbik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBTYXZlIHVzZXIgdG8gbG9jYWxTdG9yYWdlIHdoZW4gaXQgY2hhbmdlc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgLy8gU2F2ZSB0b2tlbiB0byBsb2NhbFN0b3JhZ2Ugd2hlbiBpdCBjaGFuZ2VzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIH1cclxuICB9LCBbdG9rZW5dKTtcclxuXHJcbiAgLy8gTWV0aG9kIHRvIHNldCB0aGUgdXNlciBzdGF0ZVxyXG4gIGNvbnN0IHNldFVzZXIgPSAobmV3VXNlciwgbmV3VG9rZW4pID0+IHtcclxuICAgIHNldFVzZXJTdGF0ZShuZXdVc2VyKTtcclxuICAgIHNldFRva2VuU3RhdGUobmV3VG9rZW4pO1xyXG4gIH07XHJcblxyXG4gIC8vIExvZ291dCBmdW5jdGlvblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldFVzZXJTdGF0ZShudWxsKTtcclxuICAgIHNldFRva2VuU3RhdGUobnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgc2V0VXNlcixcclxuICAgICAgICBsb2dvdXQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblVzZXJQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb3BUeXBlcyIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlclN0YXRlIiwidG9rZW4iLCJzZXRUb2tlblN0YXRlIiwic3RvcmVkVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRUb2tlbiIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwic2V0VXNlciIsIm5ld1VzZXIiLCJuZXdUb2tlbiIsImxvZ291dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/UserContext.js\n"));

/***/ })

});