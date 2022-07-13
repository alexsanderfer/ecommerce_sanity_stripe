"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/success",{

/***/ "./pages/success.js":
/*!**************************!*\
  !*** ./pages/success.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Success = () => {\n  _s();\n\n  const {\n    setCartItems,\n    setTotalPrice,\n    setTotalQuantities\n  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    localStorage.clear();\n    setCartItems([]);\n    setTotalPrice(0);\n    setTotalQuantities(0);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'success-wrapper'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'success'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: 'icon'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsBagCheckFill, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Obrigado pela sua compra!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"email-msg\"\n  }, \"Verifique o recibo na sua caixa de entradas do email informado na compra\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: 'description'\n  }, \"Se voc\\xEA tiver qualquer d\\xFAvida, envie um e-mail para\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: 'email',\n    href: 'mailto:alexfernandes90@outlook.pt'\n  }, \"alexfernandes90@outlook.pt\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n    href: '/'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: 'button',\n    width: '300px',\n    className: 'btn'\n  }, \"Continue Comprando\"))));\n};\n\n_s(Success, \"Kk9NjDCUx7aMn4cFStP1baX8xEE=\", false, function () {\n  return [_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateContext];\n});\n\n_c = Success;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Success);\n\nvar _c;\n\n$RefreshReg$(_c, \"Success\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdWNjZXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1NLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ3BCLFFBQU07QUFBRUMsSUFBQUEsWUFBRjtBQUFnQkMsSUFBQUEsYUFBaEI7QUFBK0JDLElBQUFBO0FBQS9CLE1BQXNETixzRUFBZSxFQUEzRTtBQUNBRixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZFMsSUFBQUEsWUFBWSxDQUFDQyxLQUFiO0FBQ0FKLElBQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7QUFDQUMsSUFBQUEsYUFBYSxDQUFDLENBQUQsQ0FBYjtBQUNBQyxJQUFBQSxrQkFBa0IsQ0FBQyxDQUFELENBQWxCO0FBQ0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFO0FBQWhCLGtCQUNFO0FBQUssYUFBUyxFQUFFO0FBQWhCLGtCQUNFO0FBQUcsYUFBUyxFQUFFO0FBQWQsa0JBQ0UsMkRBQUMsMERBQUQsT0FERixDQURGLGVBSUUsbUdBSkYsZUFLRTtBQUFHLGFBQVMsRUFBQztBQUFiLGdGQUxGLGVBTUU7QUFBRyxhQUFTLEVBQUU7QUFBZCwrRUFFRTtBQUFHLGFBQVMsRUFBRSxPQUFkO0FBQXVCLFFBQUksRUFBRTtBQUE3QixrQ0FGRixDQU5GLGVBWUUsMkRBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBWixrQkFDRTtBQUFRLFFBQUksRUFBRSxRQUFkO0FBQXdCLFNBQUssRUFBRSxPQUEvQjtBQUF3QyxhQUFTLEVBQUU7QUFBbkQsMEJBREYsQ0FaRixDQURGLENBREY7QUFzQkQsQ0EvQkQ7O0dBQU1IO1VBQ3dESDs7O0tBRHhERztBQWlDTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdWNjZXNzLmpzP2YyMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVN0YXRlQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQge0JzQmFnQ2hlY2tGaWxsfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgU3VjY2VzcyA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRDYXJ0SXRlbXMsIHNldFRvdGFsUHJpY2UsIHNldFRvdGFsUXVhbnRpdGllcyB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIHNldENhcnRJdGVtcyhbXSlcbiAgICBzZXRUb3RhbFByaWNlKDApXG4gICAgc2V0VG90YWxRdWFudGl0aWVzKDApXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc3VjY2Vzcy13cmFwcGVyJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Y2Nlc3MnfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXsnaWNvbid9PlxuICAgICAgICAgIDxCc0JhZ0NoZWNrRmlsbCAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMj5PYnJpZ2FkbyBwZWxhIHN1YSBjb21wcmEhPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdlbWFpbC1tc2cnPlZlcmlmaXF1ZSBvIHJlY2libyBuYSBzdWEgY2FpeGEgZGUgZW50cmFkYXMgZG8gZW1haWwgaW5mb3JtYWRvIG5hIGNvbXByYTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXsnZGVzY3JpcHRpb24nfT5cbiAgICAgICAgICBTZSB2b2PDqiB0aXZlciBxdWFscXVlciBkw7p2aWRhLCBlbnZpZSB1bSBlLW1haWwgcGFyYVxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17J2VtYWlsJ30gaHJlZj17J21haWx0bzphbGV4ZmVybmFuZGVzOTBAb3V0bG9vay5wdCd9PlxuICAgICAgICAgICAgYWxleGZlcm5hbmRlczkwQG91dGxvb2sucHRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9eydidXR0b24nfSB3aWR0aD17JzMwMHB4J30gY2xhc3NOYW1lPXsnYnRuJ30+XG4gICAgICAgICAgICBDb250aW51ZSBDb21wcmFuZG9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VjY2VzcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU3RhdGVDb250ZXh0IiwiQnNCYWdDaGVja0ZpbGwiLCJMaW5rIiwiU3VjY2VzcyIsInNldENhcnRJdGVtcyIsInNldFRvdGFsUHJpY2UiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/success.js\n");

/***/ })

});