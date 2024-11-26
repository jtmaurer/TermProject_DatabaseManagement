/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/exenv";
exports.ids = ["vendor-chunks/exenv"];
exports.modules = {

/***/ "(ssr)/./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\r\n  Copyright (c) 2015 Jed Watson.\r\n  Based on code that is Copyright 2013-2015, Facebook, Inc.\r\n  All rights reserved.\r\n*/\r\n/* global define */\r\n\r\n(function () {\r\n\t'use strict';\r\n\r\n\tvar canUseDOM = !!(\r\n\t\ttypeof window !== 'undefined' &&\r\n\t\twindow.document &&\r\n\t\twindow.document.createElement\r\n\t);\r\n\r\n\tvar ExecutionEnvironment = {\r\n\r\n\t\tcanUseDOM: canUseDOM,\r\n\r\n\t\tcanUseWorkers: typeof Worker !== 'undefined',\r\n\r\n\t\tcanUseEventListeners:\r\n\t\t\tcanUseDOM && !!(window.addEventListener || window.attachEvent),\r\n\r\n\t\tcanUseViewport: canUseDOM && !!window.screen\r\n\r\n\t};\r\n\r\n\tif (true) {\r\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\r\n\t\t\treturn ExecutionEnvironment;\r\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\t} else {}\r\n\r\n}());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBNEU7QUFDakYsRUFBRSxtQ0FBTztBQUNUO0FBQ0EsR0FBRztBQUFBLGtHQUFDO0FBQ0osR0FBRyxLQUFLLEVBSU47QUFDRjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanRtYXVcXFByb2plY3RzXFxUZXJtUHJvamVjdF9EYXRhYmFzZU1hbmFnZW1lbnRcXEZyb250ZW5kXFxldmVudHBsYW5uZXJcXG5vZGVfbW9kdWxlc1xcZXhlbnZcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxyXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxyXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiovXHJcbi8qIGdsb2JhbCBkZWZpbmUgKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgY2FuVXNlRE9NID0gISEoXHJcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXHJcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxyXG5cdCk7XHJcblxyXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcclxuXHJcblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcclxuXHJcblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcclxuXHJcblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcclxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXHJcblxyXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cclxuXHJcblx0fTtcclxuXHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xyXG5cdH1cclxuXHJcbn0oKSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/exenv/index.js\n");

/***/ })

};
;