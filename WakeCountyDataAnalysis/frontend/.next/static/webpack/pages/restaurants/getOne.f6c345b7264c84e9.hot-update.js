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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DictionaryTable = (param)=>{\n    let { city , year  } = param;\n    _s();\n    const [dictionary, setDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:5000/restaurants/getRestaurants\", {\n            \"city\": city,\n            \"year\": year\n        }).then((response)=>{\n            setDictionary(response.data);\n            console.log(dictionary);\n        // console.log(dictionary.ADDRESS1)\n        }).catch((error)=>{\n            console.error(\"Error fetching dictionary:\", error);\n        });\n    }, [\n        year,\n        city\n    ]);\n    if (!dictionary) {\n        // If dictionary is null, don't render the table\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p1\", {\n                className: \"my-4 px-8\",\n                children: \"Make a selection for city and year\"\n            }, void 0, false, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-4 px-8 min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Dictionary Table\"\n            }, void 0, false, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 31,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"w-full border-collapse border border-gray-300 bg-black text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: Object.keys(dictionary[0]).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"py-2 px-4 border border-gray-300\",\n                                    children: key\n                                }, key, false, {\n                                    fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: dictionary.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: Object.values(row).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-2 px-4 border border-gray-300\",\n                                        children: value\n                                    }, index, false, {\n                                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, undefined))\n                            }, index, false, {\n                                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 32,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n        lineNumber: 30,\n        columnNumber: 1\n    }, undefined);\n};\n_s(DictionaryTable, \"lwp3nQrXgBZjN+9rvD43QwQ3wCA=\");\n_c = DictionaryTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DictionaryTable);\nvar _c;\n$RefreshReg$(_c, \"DictionaryTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RhYmxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLE1BQU1JLGtCQUFrQixTQUFpQjtRQUFoQixFQUFDQyxLQUFJLEVBQUNDLEtBQUksRUFBQzs7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFFakRDLGdEQUFTQSxDQUFDLElBQU07UUFDZEMsa0RBQVUsQ0FBQyxvREFBb0Q7WUFBQyxRQUFPRTtZQUFNLFFBQU9DO1FBQUksR0FDckZJLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWTtZQUNoQkgsY0FBY0csU0FBU0MsSUFBSTtZQUMzQkMsUUFBUUMsR0FBRyxDQUFDUDtRQUVaLG1DQUFtQztRQUNyQyxHQUNDUSxLQUFLLENBQUNDLENBQUFBLFFBQVM7WUFDZEgsUUFBUUcsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDSixHQUFHO1FBQUNWO1FBQUtEO0tBQUs7SUFFZCxJQUFJLENBQUNFLFlBQVk7UUFDZixnREFBZ0Q7UUFDaEQscUJBQ0UsOERBQUNVO3NCQUNDLDRFQUFDQztnQkFBR0MsV0FBVTswQkFBWTs7Ozs7Ozs7Ozs7SUFHaEMsQ0FBQztJQUVELHFCQUNGLDhEQUFDRjtRQUFJRSxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRTtnQkFBTUYsV0FBVTs7a0NBQ2YsOERBQUNHO2tDQUNDLDRFQUFDQztzQ0FDRUMsT0FBT0MsSUFBSSxDQUFDbEIsVUFBVSxDQUFDLEVBQUUsRUFBRW1CLEdBQUcsQ0FBQyxDQUFDQyxvQkFDL0IsOERBQUNDO29DQUFhVCxXQUFVOzhDQUFvQ1E7bUNBQW5EQTs7Ozs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDRTtrQ0FDRXRCLFdBQVdtQixHQUFHLENBQUMsQ0FBQ0ksS0FBS0Msc0JBQ3BCLDhEQUFDUjswQ0FDRUMsT0FBT1EsTUFBTSxDQUFDRixLQUFLSixHQUFHLENBQUMsQ0FBQ08sT0FBT0Ysc0JBQzlCLDhEQUFDRzt3Q0FBZWYsV0FBVTtrREFBb0NjO3VDQUFyREY7Ozs7OytCQUZKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFqQjtHQW5ETTNCO0tBQUFBO0FBcUROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvdGFibGUudHN4P2E2NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBEaWN0aW9uYXJ5VGFibGUgPSAoe2NpdHkseWVhcn0pID0+IHtcbiAgY29uc3QgW2RpY3Rpb25hcnksIHNldERpY3Rpb25hcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvcmVzdGF1cmFudHMvZ2V0UmVzdGF1cmFudHMnLCB7XCJjaXR5XCI6Y2l0eSAsXCJ5ZWFyXCI6eWVhcn0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldERpY3Rpb25hcnkocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpY3Rpb25hcnkpXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaWN0aW9uYXJ5LkFERFJFU1MxKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRpY3Rpb25hcnk6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFt5ZWFyLGNpdHldKTtcblxuICBpZiAoIWRpY3Rpb25hcnkpIHtcbiAgICAvLyBJZiBkaWN0aW9uYXJ5IGlzIG51bGwsIGRvbid0IHJlbmRlciB0aGUgdGFibGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHAxIGNsYXNzTmFtZT1cIm15LTQgcHgtOFwiPk1ha2UgYSBzZWxlY3Rpb24gZm9yIGNpdHkgYW5kIHllYXI8L3AxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cIm15LTQgcHgtOCBtaW4tdy1mdWxsXCI+XG4gIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkRpY3Rpb25hcnkgVGFibGU8L2gxPlxuICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1jb2xsYXBzZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWJsYWNrIHRleHQtd2hpdGVcIj5cbiAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIHtPYmplY3Qua2V5cyhkaWN0aW9uYXJ5WzBdKS5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgIDx0aCBrZXk9e2tleX0gY2xhc3NOYW1lPVwicHktMiBweC00IGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj57a2V5fTwvdGg+XG4gICAgICAgICkpfVxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgIHtkaWN0aW9uYXJ5Lm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMocm93KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+e3ZhbHVlfTwvdGQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdHI+XG4gICAgICApKX1cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuPC9kaXY+XG5cblxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWN0aW9uYXJ5VGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGljdGlvbmFyeVRhYmxlIiwiY2l0eSIsInllYXIiLCJkaWN0aW9uYXJ5Iiwic2V0RGljdGlvbmFyeSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJwMSIsImNsYXNzTmFtZSIsImgxIiwidGFibGUiLCJ0aGVhZCIsInRyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInRoIiwidGJvZHkiLCJyb3ciLCJpbmRleCIsInZhbHVlcyIsInZhbHVlIiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/table.tsx\n"));

/***/ })

});