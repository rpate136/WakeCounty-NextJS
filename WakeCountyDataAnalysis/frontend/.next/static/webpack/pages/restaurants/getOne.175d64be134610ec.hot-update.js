"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/restaurants/getOne",{

/***/ "./pages/components/table.tsx":
/*!************************************!*\
  !*** ./pages/components/table.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DictionaryTable = ()=>{\n    _s();\n    const [dictionary, setDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://example.com/api/dictionary\").then((response)=>{\n            setDictionary(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching dictionary:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dictionary Table\"\n            }, void 0, false, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full border-collapse border border-gray-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-gray-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border border-gray-300 px-4 py-2\",\n                                    children: \"Key\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border border-gray-300 px-4 py-2\",\n                                    children: \"Value\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: Object.entries(dictionary).map((param, index)=>/*#__PURE__*/ {\n                            let [key, value] = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: index % 2 === 0 ? \"bg-gray-50\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border border-gray-300 px-4 py-2\",\n                                        children: key\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border border-gray-300 px-4 py-2\",\n                                        children: value\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DictionaryTable, \"ZqIDhrpZ5NHBtt515Xc/74f77v4=\");\n_c = DictionaryTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DictionaryTable);\nvar _c;\n$RefreshReg$(_c, \"DictionaryTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RhYmxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLE1BQU1JLGtCQUFrQixJQUFNOztJQUM1QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUU5Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkQyxpREFBUyxDQUFDLHFDQUNQSyxJQUFJLENBQUNDLENBQUFBLFdBQVk7WUFDaEJILGNBQWNHLFNBQVNDLElBQUk7UUFDN0IsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxRQUFTO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVk7OzBCQUNmLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUYsV0FBVTs7a0NBQ2YsOERBQUNHO2tDQUNDLDRFQUFDQzs0QkFBR0osV0FBVTs7OENBQ1osOERBQUNLO29DQUFHTCxXQUFVOzhDQUFtQzs7Ozs7OzhDQUNqRCw4REFBQ0s7b0NBQUdMLFdBQVU7OENBQW1DOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHckQsOERBQUNNO2tDQUNFQyxPQUFPQyxPQUFPLENBQUNsQixZQUFZbUIsR0FBRyxDQUFDLFFBQWVDLHNCQUM3QztnQ0FEK0IsQ0FBQ0MsS0FBS0MsTUFBTTttQ0FDM0MsOERBQUNSO2dDQUFlSixXQUFXVSxRQUFRLE1BQU0sSUFBSSxlQUFlLEVBQUU7O2tEQUM1RCw4REFBQ0c7d0NBQUdiLFdBQVU7a0RBQW9DVzs7Ozs7O2tEQUNsRCw4REFBQ0U7d0NBQUdiLFdBQVU7a0RBQW9DWTs7Ozs7OzsrQkFGM0NGOzs7Ozt3QkFHTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO0dBbENNckI7S0FBQUE7QUFvQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy90YWJsZS50c3g/YTY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IERpY3Rpb25hcnlUYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgW2RpY3Rpb25hcnksIHNldERpY3Rpb25hcnldID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vZXhhbXBsZS5jb20vYXBpL2RpY3Rpb25hcnknKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXREaWN0aW9uYXJ5KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRpY3Rpb25hcnk6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ215LTQnPlxuICAgICAgPGgxPkRpY3Rpb25hcnkgVGFibGU8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyLWNvbGxhcHNlIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtNCBweS0yXCI+S2V5PC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMlwiPlZhbHVlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGRpY3Rpb25hcnkpLm1hcCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT17aW5kZXggJSAyID09PSAwID8gJ2JnLWdyYXktNTAnIDogJyd9PlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC00IHB5LTJcIj57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMlwiPnt2YWx1ZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWN0aW9uYXJ5VGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGljdGlvbmFyeVRhYmxlIiwiZGljdGlvbmFyeSIsInNldERpY3Rpb25hcnkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ2YWx1ZSIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/table.tsx\n"));

/***/ })

});