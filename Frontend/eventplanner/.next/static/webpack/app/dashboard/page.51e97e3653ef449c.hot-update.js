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

/***/ "(app-pages-browser)/./app/UserContext.js":
/*!****************************!*\
  !*** ./app/UserContext.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider auto */ \nvar _s = $RefreshSig$();\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUserState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setTokenState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Load user and token from localStorage on app initialization\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            const storedUser = localStorage.getItem('user');\n            const storedToken = localStorage.getItem('token');\n            console.log('Initializing UserContext...');\n            console.log('Stored user:', storedUser);\n            console.log('Stored token:', storedToken);\n            if (storedUser) {\n                setUserState(JSON.parse(storedUser));\n            }\n            if (storedToken) {\n                setTokenState(storedToken);\n            }\n        }\n    }[\"UserProvider.useEffect\"], []);\n    // Save user to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            if (user) {\n                console.log('Saving user to localStorage:', user);\n                localStorage.setItem('user', JSON.stringify(user));\n            } else {\n                console.log('Clearing user from localStorage.');\n                localStorage.removeItem('user');\n            }\n        }\n    }[\"UserProvider.useEffect\"], [\n        user\n    ]);\n    // Save token to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            if (token) {\n                console.log('Saving token to localStorage:', token);\n                localStorage.setItem('token', token);\n            } else {\n                console.log('Clearing token from localStorage.');\n                localStorage.removeItem('token');\n            }\n        }\n    }[\"UserProvider.useEffect\"], [\n        token\n    ]);\n    // Method to set the user state\n    const setUser = (newUser, newToken)=>{\n        console.log('Attempting to set user:', newUser);\n        if (newUser && newUser.email) {\n            setUserState({\n                userId: newUser.userId,\n                username: newUser.username,\n                email: newUser.email,\n                profilePic: newUser.profilePic || null\n            });\n            setTokenState(newToken);\n        } else {\n            console.error('Error: Missing required fields in user object:', newUser);\n        }\n    };\n    // Logout function\n    const logout = ()=>{\n        console.log('Logging out user.');\n        setUserState(null);\n        setTokenState(null);\n        localStorage.removeItem('user');\n        localStorage.removeItem('token');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            token,\n            setUser,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\need\\\\tee\\\\newest\\\\Frontend\\\\eventplanner\\\\app\\\\UserContext.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"Vmgk2QF8kRnYYXxg++G5MHoe3SY=\");\n_c = UserProvider;\nUserProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired\n};\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Vc2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0U7QUFDL0I7QUFFNUIsTUFBTUssNEJBQWNKLG9EQUFhQSxHQUFHO0FBRXBDLE1BQU1LLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNRLE9BQU9DLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFFeEMsOERBQThEO0lBQzlEQyxnREFBU0E7a0NBQUM7WUFDUixNQUFNUyxhQUFhQyxhQUFhQyxPQUFPLENBQUM7WUFDeEMsTUFBTUMsY0FBY0YsYUFBYUMsT0FBTyxDQUFDO1lBRXpDRSxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkw7WUFDNUJJLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGO1lBRTdCLElBQUlILFlBQVk7Z0JBQ2RILGFBQWFTLEtBQUtDLEtBQUssQ0FBQ1A7WUFDMUI7WUFFQSxJQUFJRyxhQUFhO2dCQUNmSixjQUFjSTtZQUNoQjtRQUNGO2lDQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUNaLGdEQUFTQTtrQ0FBQztZQUNSLElBQUlLLE1BQU07Z0JBQ1JRLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NUO2dCQUM1Q0ssYUFBYU8sT0FBTyxDQUFDLFFBQVFGLEtBQUtHLFNBQVMsQ0FBQ2I7WUFDOUMsT0FBTztnQkFDTFEsUUFBUUMsR0FBRyxDQUFDO2dCQUNaSixhQUFhUyxVQUFVLENBQUM7WUFDMUI7UUFDRjtpQ0FBRztRQUFDZDtLQUFLO0lBRVQsNkNBQTZDO0lBQzdDTCxnREFBU0E7a0NBQUM7WUFDUixJQUFJTyxPQUFPO2dCQUNUTSxRQUFRQyxHQUFHLENBQUMsaUNBQWlDUDtnQkFDN0NHLGFBQWFPLE9BQU8sQ0FBQyxTQUFTVjtZQUNoQyxPQUFPO2dCQUNMTSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pKLGFBQWFTLFVBQVUsQ0FBQztZQUMxQjtRQUNGO2lDQUFHO1FBQUNaO0tBQU07SUFFViwrQkFBK0I7SUFDL0IsTUFBTWEsVUFBVSxDQUFDQyxTQUFTQztRQUN4QlQsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQk87UUFDdkMsSUFBSUEsV0FBV0EsUUFBUUUsS0FBSyxFQUFFO1lBQzVCakIsYUFBYTtnQkFDWGtCLFFBQVFILFFBQVFHLE1BQU07Z0JBQ3RCQyxVQUFVSixRQUFRSSxRQUFRO2dCQUMxQkYsT0FBT0YsUUFBUUUsS0FBSztnQkFDcEJHLFlBQVlMLFFBQVFLLFVBQVUsSUFBSTtZQUNwQztZQUNBbEIsY0FBY2M7UUFDaEIsT0FBTztZQUNMVCxRQUFRYyxLQUFLLENBQUMsa0RBQWtETjtRQUNsRTtJQUNGO0lBRUEsa0JBQWtCO0lBQ2xCLE1BQU1PLFNBQVM7UUFDYmYsUUFBUUMsR0FBRyxDQUFDO1FBQ1pSLGFBQWE7UUFDYkUsY0FBYztRQUNkRSxhQUFhUyxVQUFVLENBQUM7UUFDeEJULGFBQWFTLFVBQVUsQ0FBQztJQUMxQjtJQUVBLHFCQUNFLDhEQUFDakIsWUFBWTJCLFFBQVE7UUFDbkJDLE9BQU87WUFDTHpCO1lBQ0FFO1lBQ0FhO1lBQ0FRO1FBQ0Y7a0JBRUN4Qjs7Ozs7O0FBR1AsRUFBRTtHQWpGV0Q7S0FBQUE7QUFtRmJBLGFBQWE0QixTQUFTLEdBQUc7SUFDdkIzQixVQUFVSCx3REFBYyxDQUFDZ0MsVUFBVTtBQUNyQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxcbmVlZFxcdGVlXFxuZXdlc3RcXEZyb250ZW5kXFxldmVudHBsYW5uZXJcXGFwcFxcVXNlckNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlblN0YXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBMb2FkIHVzZXIgYW5kIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlIG9uIGFwcCBpbml0aWFsaXphdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyBVc2VyQ29udGV4dC4uLicpO1xyXG4gICAgY29uc29sZS5sb2coJ1N0b3JlZCB1c2VyOicsIHN0b3JlZFVzZXIpO1xyXG4gICAgY29uc29sZS5sb2coJ1N0b3JlZCB0b2tlbjonLCBzdG9yZWRUb2tlbik7XHJcblxyXG4gICAgaWYgKHN0b3JlZFVzZXIpIHtcclxuICAgICAgc2V0VXNlclN0YXRlKEpTT04ucGFyc2Uoc3RvcmVkVXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdG9yZWRUb2tlbikge1xyXG4gICAgICBzZXRUb2tlblN0YXRlKHN0b3JlZFRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFNhdmUgdXNlciB0byBsb2NhbFN0b3JhZ2Ugd2hlbiBpdCBjaGFuZ2VzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgdXNlciB0byBsb2NhbFN0b3JhZ2U6JywgdXNlcik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0NsZWFyaW5nIHVzZXIgZnJvbSBsb2NhbFN0b3JhZ2UuJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgLy8gU2F2ZSB0b2tlbiB0byBsb2NhbFN0b3JhZ2Ugd2hlbiBpdCBjaGFuZ2VzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2F2aW5nIHRva2VuIHRvIGxvY2FsU3RvcmFnZTonLCB0b2tlbik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDbGVhcmluZyB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZS4nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuXSk7XHJcblxyXG4gIC8vIE1ldGhvZCB0byBzZXQgdGhlIHVzZXIgc3RhdGVcclxuICBjb25zdCBzZXRVc2VyID0gKG5ld1VzZXIsIG5ld1Rva2VuKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBzZXQgdXNlcjonLCBuZXdVc2VyKTtcclxuICAgIGlmIChuZXdVc2VyICYmIG5ld1VzZXIuZW1haWwpIHtcclxuICAgICAgc2V0VXNlclN0YXRlKHtcclxuICAgICAgICB1c2VySWQ6IG5ld1VzZXIudXNlcklkLFxyXG4gICAgICAgIHVzZXJuYW1lOiBuZXdVc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgIGVtYWlsOiBuZXdVc2VyLmVtYWlsLFxyXG4gICAgICAgIHByb2ZpbGVQaWM6IG5ld1VzZXIucHJvZmlsZVBpYyB8fCBudWxsLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VG9rZW5TdGF0ZShuZXdUb2tlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogTWlzc2luZyByZXF1aXJlZCBmaWVsZHMgaW4gdXNlciBvYmplY3Q6JywgbmV3VXNlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gTG9nb3V0IGZ1bmN0aW9uXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0xvZ2dpbmcgb3V0IHVzZXIuJyk7XHJcbiAgICBzZXRVc2VyU3RhdGUobnVsbCk7XHJcbiAgICBzZXRUb2tlblN0YXRlKG51bGwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICAgIHNldFVzZXIsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Vc2VyUHJvdmlkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9wVHlwZXMiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXJTdGF0ZSIsInRva2VuIiwic2V0VG9rZW5TdGF0ZSIsInN0b3JlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJzZXRVc2VyIiwibmV3VXNlciIsIm5ld1Rva2VuIiwiZW1haWwiLCJ1c2VySWQiLCJ1c2VybmFtZSIsInByb2ZpbGVQaWMiLCJlcnJvciIsImxvZ291dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/UserContext.js\n"));

/***/ })

});