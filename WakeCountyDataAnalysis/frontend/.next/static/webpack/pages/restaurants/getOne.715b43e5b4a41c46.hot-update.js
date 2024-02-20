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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DictionaryTable = (param)=>{\n    let { city , year  } = param;\n    _s();\n    const [dictionary, setDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // var backendIP = process.env.FLASK_APP_BACKEND_URI\n    var backendIP = \"http://127.0.0.1:5001\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const uri = \"\".concat(backendIP, \"/restaurants/getRestaurants?city=\").concat(city, \"&year=\").concat(year);\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(uri).then((response)=>{\n            setDictionary(response.data);\n            console.log(\"The dictionary is: \", response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching dictionary:\", error);\n        });\n    }, [\n        year,\n        city\n    ]);\n    if (dictionary.length == 0) {\n        // If dictionary is null, don't render the table\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-4 px-8\",\n                children: \"Make a selection for city and year\"\n            }, void 0, false, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-4 px-8 min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Dictionary Table\"\n            }, void 0, false, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"w-full border-collapse border border-gray-300 bg-black text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: Object.keys(dictionary[0]).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"py-2 px-4 border border-gray-300\",\n                                    children: key\n                                }, key, false, {\n                                    fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: dictionary.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: Object.values(row).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-2 px-4 border border-gray-300\",\n                                        children: value\n                                    }, index, false, {\n                                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, index, false, {\n                                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rishipatel/Desktop/Personal Projects/WakeCounty-NextJS/WakeCountyDataAnalysis/frontend/pages/components/table.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DictionaryTable, \"B3M3BehyghjMp7zwSe9u8Lmu8Kw=\");\n_c = DictionaryTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DictionaryTable);\nvar _c;\n$RefreshReg$(_c, \"DictionaryTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RhYmxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBSTFCLE1BQU1JLGtCQUFrQixTQUEyQztRQUExQyxFQUFDQyxLQUFJLEVBQUNDLEtBQUksRUFBMkI7O0lBRTVELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBSyxFQUFFO0lBQ25ELG9EQUFvRDtJQUNwRCxJQUFJUSxZQUFXO0lBRWZQLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSxNQUFNLEdBQWdETCxPQUE3Q0ksV0FBVSxxQ0FBZ0RILE9BQWJELE1BQUssVUFBYSxPQUFMQztRQUN6RUgsaURBQVMsQ0FBQ08sS0FDUEUsSUFBSSxDQUFDQyxDQUFBQSxXQUFZO1lBQ2hCTCxjQUFjSyxTQUFTQyxJQUFJO1lBQzNCQyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCSCxTQUFTQyxJQUFJO1FBQ2xELEdBQ0NHLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUztZQUNkSCxRQUFRRyxLQUFLLENBQUMsOEJBQThCQTtRQUM5QztJQUNKLEdBQUc7UUFBQ1o7UUFBTUQ7S0FBSztJQUdmLElBQUlFLFdBQVdZLE1BQU0sSUFBSSxHQUFHO1FBQzFCLGdEQUFnRDtRQUNoRCxxQkFDRSw4REFBQ0M7c0JBQ0MsNEVBQUNDO2dCQUFHQyxXQUFVOzBCQUFZOzs7Ozs7Ozs7OztJQUdoQyxDQUFDO0lBRUQscUJBQ0UsOERBQUNGO1FBQUlFLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBR0MsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNDO2dCQUFNRCxXQUFVOztrQ0FDZiw4REFBQ0U7a0NBQ0MsNEVBQUNDO3NDQUNFQyxPQUFPQyxJQUFJLENBQUNwQixVQUFVLENBQUMsRUFBRSxFQUFFcUIsR0FBRyxDQUFDLENBQUNDLG9CQUMvQiw4REFBQ0M7b0NBQWFSLFdBQVU7OENBQW9DTzttQ0FBbkRBOzs7Ozs7Ozs7Ozs7Ozs7a0NBSWYsOERBQUNFO2tDQUNFeEIsV0FBV3FCLEdBQUcsQ0FBQyxDQUFDSSxLQUFLQyxzQkFDcEIsOERBQUNSOzBDQUNFQyxPQUFPUSxNQUFNLENBQUNGLEtBQUtKLEdBQUcsQ0FBQyxDQUFDTyxPQUFPRixzQkFDOUIsOERBQUNHO3dDQUFlZCxXQUFVO2tEQUFvQ2E7dUNBQXJERjs7Ozs7K0JBRkpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3JCO0dBcERNN0I7S0FBQUE7QUFzRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy90YWJsZS50c3g/YTY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgYmFja2VuZElQIGZyb20gXCIuLi8uLi9iYWNrZW5kSVBcIlxuaW1wb3J0IHsgbG9nIH0gZnJvbSAnY29uc29sZSc7XG5cbmNvbnN0IERpY3Rpb25hcnlUYWJsZSA9ICh7Y2l0eSx5ZWFyfTp7Y2l0eTpzdHJpbmcseWVhcjpzdHJpbmd9KSA9PiB7XG4gIFxuICBjb25zdCBbZGljdGlvbmFyeSwgc2V0RGljdGlvbmFyeV0gPSB1c2VTdGF0ZTxbXT4oW10pO1xuICAvLyB2YXIgYmFja2VuZElQID0gcHJvY2Vzcy5lbnYuRkxBU0tfQVBQX0JBQ0tFTkRfVVJJXG4gIHZhciBiYWNrZW5kSVA9IFwiaHR0cDovLzEyNy4wLjAuMTo1MDAxXCJcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVyaSA9IGAke2JhY2tlbmRJUH0vcmVzdGF1cmFudHMvZ2V0UmVzdGF1cmFudHM/Y2l0eT0ke2NpdHl9JnllYXI9JHt5ZWFyfWA7XG4gICAgYXhpb3MuZ2V0KHVyaSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0RGljdGlvbmFyeShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZGljdGlvbmFyeSBpczogXCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRpY3Rpb25hcnk6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFt5ZWFyLCBjaXR5XSk7XG4gIFxuXG4gIGlmIChkaWN0aW9uYXJ5Lmxlbmd0aCA9PSAwKSB7XG4gICAgLy8gSWYgZGljdGlvbmFyeSBpcyBudWxsLCBkb24ndCByZW5kZXIgdGhlIHRhYmxlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJteS00IHB4LThcIj5NYWtlIGEgc2VsZWN0aW9uIGZvciBjaXR5IGFuZCB5ZWFyPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBweC04IG1pbi13LWZ1bGxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkRpY3Rpb25hcnkgVGFibGU8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItY29sbGFwc2UgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ibGFjayB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZGljdGlvbmFyeVswXSkubWFwKChrZXkpID0+IChcbiAgICAgICAgICAgICAgPHRoIGtleT17a2V5fSBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPntrZXl9PC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGljdGlvbmFyeS5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMocm93KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPnt2YWx1ZX08L3RkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWN0aW9uYXJ5VGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGljdGlvbmFyeVRhYmxlIiwiY2l0eSIsInllYXIiLCJkaWN0aW9uYXJ5Iiwic2V0RGljdGlvbmFyeSIsImJhY2tlbmRJUCIsInVyaSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImxlbmd0aCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInRoIiwidGJvZHkiLCJyb3ciLCJpbmRleCIsInZhbHVlcyIsInZhbHVlIiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/table.tsx\n"));

/***/ })

});