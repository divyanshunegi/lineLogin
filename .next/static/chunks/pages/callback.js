/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/callback"],{

/***/ "./pages/callback.tsx":
/*!****************************!*\
  !*** ./pages/callback.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_services_LineLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/services/LineLogin.service */ \"./src/services/LineLogin.service.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Callback = function() {\n    var _this1 = _this;\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loginSuccess = ref4[0], setLoginSuccess = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), error = ref1[0], setErrorMessage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), lineProfile = ref2[0], setLineProfile = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var getUserDetails = _asyncToGenerator(_Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(code) {\n        var lineLoginService, userProfile;\n        return _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log('getUserDetails', code);\n                    lineLoginService = _src_services_LineLogin_service__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInstance();\n                    _ctx.next = 4;\n                    return lineLoginService === null || lineLoginService === void 0 ? void 0 : lineLoginService.getUserProfile(code);\n                case 4:\n                    userProfile = _ctx.sent;\n                    setLineProfile(userProfile);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (router.query.code) {\n            var ref;\n            if (router === null || router === void 0 ? void 0 : (ref = router.query) === null || ref === void 0 ? void 0 : ref.error) {\n                setErrorMessage(router.query.error);\n            } else {\n                var ref3;\n                alert(router.query.code);\n                setLoginSuccess(!!(router === null || router === void 0 ? void 0 : (ref3 = router.query) === null || ref3 === void 0 ? void 0 : ref3.code));\n                getUserDetails(router.query.code);\n            }\n        }\n    }, [\n        router.query.code\n    ]);\n    var StatusView = function(props) {\n        var successStatus = \"Failed\";\n        var style = 'w-96 bg-red-600 opacity-30 pl-10 pr-10 pt-4 pb-4 rounded-2xl';\n        if (props.success) {\n            successStatus = \"Success\";\n        }\n        if (props.success) {\n            style = 'w-96 bg-green-600 opacity-30 pl-10 pr-10 pt-4 pb-4 rounded-2xl';\n        }\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: style,\n            __source: {\n                fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                lineNumber: 51,\n                columnNumber: 16\n            },\n            __self: _this1,\n            children: successStatus\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"flex w-screen h-screen bg-white justify-items-center items-center\",\n        __source: {\n            fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n            lineNumber: 58,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"h-auto w-auto bg-white shadow-2xl flex flex-col m-auto\",\n            __source: {\n                fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    className: \"text-2xl font-extrabold place-self-center mt-10 text-gray-700 p-3\",\n                    __source: {\n                        fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Thanks for trying LINE Demo Login\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                    className: \"place-self-center mt-1 text-gray-400 p-3 text-sm text-center\",\n                    __source: {\n                        fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Here are the stats for the login callback\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: \"p-8\",\n                    __source: {\n                        fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StatusView, {\n                            success: true,\n                            __source: {\n                                fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        error !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                            className: \"mt-5\",\n                            __source: {\n                                fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 40\n                            },\n                            __self: _this,\n                            children: [\n                                \"Error: \",\n                                error\n                            ]\n                        }) : null,\n                        lineProfile !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                    className: \"mt-5\",\n                                    __source: {\n                                        fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \"Name: \",\n                                        lineProfile.displayName\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                    className: \"mt-5\",\n                                    __source: {\n                                        fileName: \"/Users/divyanshunegi/GitHub/lineLogin2/pages/callback.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \"Id: \",\n                                        lineProfile.userId\n                                    ]\n                                })\n                            ]\n                        }) : null\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(Callback, \"groPX7FR9Bu8N+fFQOzYOJWWwfk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Callback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Callback);\nvar _c;\n$RefreshReg$(_c, \"Callback\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssR0FBRyxDQUFnRTtRQUM1RSxDQUFDO1FBQ0QsTUFBTSxzRUFBRUUsQ0FBRztZQUFDQyxTQUFTLEVBQUVILEtBQUs7Ozs7Ozs7c0JBQ25CRCxhQUFhOztJQUcxQixDQUFDO0lBRUQsTUFBTSxzRUFDREcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBbUU7Ozs7Ozs7d0ZBQzdFRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUF3RDs7Ozs7Ozs7cUZBQ2xFQyxDQUFFO29CQUFDRCxTQUFTLEVBQUMsQ0FBbUU7Ozs7Ozs7OEJBQUMsQ0FBaUM7O3FGQUNsSEUsQ0FBQztvQkFBQ0YsU0FBUyxFQUFDLENBQThEOzs7Ozs7OzhCQUFDLENBQXlDOztzRkFDcEhELENBQUc7b0JBQUNDLFNBQVMsRUFBRSxDQUFLOzs7Ozs7Ozs2RkFDaEJOLFVBQVU7NEJBQUNJLE9BQU8sRUFBRSxJQUFJOzs7Ozs7Ozt3QkFDdkJuQixLQUFLLEtBQUssSUFBSSx5RUFBSXVCLENBQUM7NEJBQUNGLFNBQVMsRUFBRSxDQUFNOzs7Ozs7OztnQ0FBRSxDQUFPO2dDQUFDckIsS0FBSzs7NkJBQVEsSUFBSTt3QkFDaEVFLFdBQVcsS0FBSyxJQUFJOztzR0FDakJxQixDQUFDO29DQUFDRixTQUFTLEVBQUUsQ0FBTTs7Ozs7Ozs7d0NBQUUsQ0FBTTt3Q0FBQ25CLFdBQVcsQ0FBQ3NCLFdBQVc7OztzR0FDbkRELENBQUM7b0NBQUNGLFNBQVMsRUFBRSxDQUFNOzs7Ozs7Ozt3Q0FBRSxDQUFJO3dDQUFDbkIsV0FBVyxDQUFDdUIsTUFBTTs7Ozs2QkFDM0MsSUFBSTs7Ozs7O0FBUTlCLENBQUM7R0F0RUs1QixRQUFROztRQVVLSixrREFBUzs7O0tBVnRCSSxRQUFRO0FBd0VkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2sudHN4P2QwNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmVMb2dpbkJ1dHRvbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTGluZUxvZ2luQnV0dG9uXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmVMb2dpblNlcnZpY2UgZnJvbSBcIi4uL3NyYy9zZXJ2aWNlcy9MaW5lTG9naW4uc2VydmljZVwiO1xuXG5jb25zdCBDYWxsYmFjayA9ICgpID0+IHtcblxuICAgIHR5cGUgTGluZVByb2ZpbGUgPSB7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IFtsb2dpblN1Y2Nlc3MsIHNldExvZ2luU3VjY2Vzc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgc3RyaW5nW10+KG51bGwpXG4gICAgY29uc3QgW2xpbmVQcm9maWxlLCBzZXRMaW5lUHJvZmlsZV0gPSB1c2VTdGF0ZTxMaW5lUHJvZmlsZSB8IG51bGw+KG51bGwpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGdldFVzZXJEZXRhaWxzID0gYXN5bmMgKGNvZGU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyRGV0YWlscycsIGNvZGUpXG4gICAgICAgIGNvbnN0IGxpbmVMb2dpblNlcnZpY2UgPSBMaW5lTG9naW5TZXJ2aWNlLmdldEluc3RhbmNlKClcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGUgPSBhd2FpdCBsaW5lTG9naW5TZXJ2aWNlPy5nZXRVc2VyUHJvZmlsZShjb2RlIGFzIHN0cmluZylcbiAgICAgICAgc2V0TGluZVByb2ZpbGUodXNlclByb2ZpbGUpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICBpZihyb3V0ZXIucXVlcnkuY29kZSl7XG4gICAgICAgICAgIGlmKHJvdXRlcj8ucXVlcnk/LmVycm9yKXtcbiAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShyb3V0ZXIucXVlcnkuZXJyb3IpXG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICBhbGVydChyb3V0ZXIucXVlcnkuY29kZSlcbiAgICAgICAgICAgICAgIHNldExvZ2luU3VjY2VzcyghIXJvdXRlcj8ucXVlcnk/LmNvZGUpXG4gICAgICAgICAgICAgICBnZXRVc2VyRGV0YWlscyhyb3V0ZXIucXVlcnkuY29kZSBhcyBzdHJpbmcpXG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgfSxbcm91dGVyLnF1ZXJ5LmNvZGVdKVxuXG4gICAgdHlwZSBQcm9wcyA9IHtcblxuICAgICAgICBzdWNjZXNzOiBib29sZWFuXG4gICAgfVxuXG4gICAgY29uc3QgU3RhdHVzVmlldyA6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3NTdGF0dXMgPSBcIkZhaWxlZFwiO1xuICAgICAgICBsZXQgc3R5bGUgPSAndy05NiBiZy1yZWQtNjAwIG9wYWNpdHktMzAgcGwtMTAgcHItMTAgcHQtNCBwYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICBpZihwcm9wcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzU3RhdHVzID0gXCJTdWNjZXNzXCJcbiAgICAgICAgfVxuICAgICAgICBpZihwcm9wcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBzdHlsZSA9ICd3LTk2IGJnLWdyZWVuLTYwMCBvcGFjaXR5LTMwIHBsLTEwIHByLTEwIHB0LTQgcGItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICB7c3VjY2Vzc1N0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGgtc2NyZWVuIGJnLXdoaXRlIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gdy1hdXRvIGJnLXdoaXRlIHNoYWRvdy0yeGwgZmxleCBmbGV4LWNvbCBtLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgcGxhY2Utc2VsZi1jZW50ZXIgbXQtMTAgdGV4dC1ncmF5LTcwMCBwLTNcIj5UaGFua3MgZm9yIHRyeWluZyBMSU5FIERlbW8gTG9naW48L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYWNlLXNlbGYtY2VudGVyIG10LTEgdGV4dC1ncmF5LTQwMCBwLTMgdGV4dC1zbSB0ZXh0LWNlbnRlclwiPkhlcmUgYXJlIHRoZSBzdGF0cyBmb3IgdGhlIGxvZ2luIGNhbGxiYWNrPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInAtOFwifT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXR1c1ZpZXcgc3VjY2Vzcz17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgeyBlcnJvciAhPT0gbnVsbCA/IDxwIGNsYXNzTmFtZT17XCJtdC01XCJ9PkVycm9yOiB7ZXJyb3J9PC9wPiA6IG51bGwgIH1cbiAgICAgICAgICAgICAgICAgICAgeyBsaW5lUHJvZmlsZSAhPT0gbnVsbCA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wibXQtNVwifT5OYW1lOiB7bGluZVByb2ZpbGUuZGlzcGxheU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcIm10LTVcIn0+SWQ6IHtsaW5lUHJvZmlsZS51c2VySWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8Lz4gOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxiYWNrO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluZUxvZ2luU2VydmljZSIsIkNhbGxiYWNrIiwibG9naW5TdWNjZXNzIiwic2V0TG9naW5TdWNjZXNzIiwiZXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJsaW5lUHJvZmlsZSIsInNldExpbmVQcm9maWxlIiwicm91dGVyIiwiZ2V0VXNlckRldGFpbHMiLCJjb2RlIiwibGluZUxvZ2luU2VydmljZSIsInVzZXJQcm9maWxlIiwiY29uc29sZSIsImxvZyIsImdldEluc3RhbmNlIiwiZ2V0VXNlclByb2ZpbGUiLCJxdWVyeSIsImFsZXJ0IiwiU3RhdHVzVmlldyIsInByb3BzIiwic3VjY2Vzc1N0YXR1cyIsInN0eWxlIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImRpc3BsYXlOYW1lIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/callback.tsx\n");

/***/ }),

/***/ "./src/services/LineLogin.service.tsx":
/*!********************************************!*\
  !*** ./src/services/LineLogin.service.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineLoginService; }\n/* harmony export */ });\n/* harmony import */ var _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nvar LineLoginService = function LineLoginService() {\n    \"use strict\";\n    _classCallCheck(this, LineLoginService);\n    this.getAccessToken = _asyncToGenerator(_Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(code) {\n        var rawResponse;\n        return _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('https://api.line.me/oauth2/v2.1/token', {\n                        method: 'POST',\n                        headers: {\n                            'Accept': 'application/json',\n                            'Content-Type': 'application/x-www-form-urlencoded'\n                        },\n                        body: \"grant_type=authorization_code&code=\" + code + \"&redirect_uri=http://localhost:3000/callback&client_id=1656797734&client_secret=2f7b9c56777928fa61e185abf41196fb&code_verifier=\"\n                    });\n                case 2:\n                    rawResponse = _ctx.sent;\n                    _ctx.next = 5;\n                    return rawResponse.json();\n                case 5:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    this.getUserProfile = _asyncToGenerator(_Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(code) {\n        var data, rawResponse;\n        return _Users_divyanshunegi_GitHub_lineLogin2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return this.getAccessToken(code);\n                case 2:\n                    data = _ctx.sent;\n                    if (!data.access_token) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    _ctx.next = 6;\n                    return fetch('https://api.line.me/v2/profile', {\n                        method: 'GET',\n                        headers: {\n                            'Accept': 'application/json',\n                            'Authorization': 'Bearer ' + data.access_token\n                        }\n                    });\n                case 6:\n                    rawResponse = _ctx.sent;\n                    _ctx.next = 9;\n                    return rawResponse.json();\n                case 9:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 12:\n                    return _ctx.abrupt(\"return\", {\n                        error: data.error_description\n                    });\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, this);\n    }).bind(this)).bind(this);\n};\nLineLoginService._instance = null;\nLineLoginService.getInstance = function() {\n    if (LineLoginService._instance === null) {\n        LineLoginService._instance = new LineLoginService();\n    }\n    return LineLoginService._instance;\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvTGluZUxvZ2luLnNlcnZpY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsZ0JBQWdCLFlBQWhCQSxnQkFBZ0I7OzBCQUFoQkEsZ0JBQWdCO0lBQXRCLElBdUNkLENBM0JVQyxjQUFjLG9KQUFHLFFBQVEsU0FBREMsSUFBWSxFQUFLLENBQUM7WUFDdkNDLFdBQVc7Ozs7OzJCQUFTQyxLQUFLLENBQUMsQ0FBdUMsd0NBQUUsQ0FBQzt3QkFDdEVDLE1BQU0sRUFBRSxDQUFNO3dCQUNkQyxPQUFPLEVBQUUsQ0FBQzs0QkFDTixDQUFRLFNBQUUsQ0FBa0I7NEJBQzVCLENBQWMsZUFBRSxDQUFtQzt3QkFDdkQsQ0FBQzt3QkFDREMsSUFBSSxFQUFFLENBQXFDLHVDQUFHTCxJQUFJLEdBQUcsQ0FBaUk7b0JBQzFMLENBQUM7O29CQVBLQyxXQUFXOzsyQkFRSkEsV0FBVyxDQUFDSyxJQUFJOzs7Ozs7OztJQUNqQyxDQUFDO0lBdEJVLElBdUNkLENBZlVDLGNBQWMsb0pBQUcsUUFBUSxTQUFEUCxJQUFZLEVBQUssQ0FBQztZQUN2Q1EsSUFBSSxFQUVBUCxXQUFXOzs7OzsyQkFGRixJQUFJLENBQUNGLGNBQWMsQ0FBQ0MsSUFBSTs7b0JBQXJDUSxJQUFJO3lCQUNOQSxJQUFJLENBQUNDLFlBQVk7Ozs7OzJCQUNTUCxLQUFLLENBQUMsQ0FBZ0MsaUNBQUUsQ0FBQzt3QkFDL0RDLE1BQU0sRUFBRSxDQUFLO3dCQUNiQyxPQUFPLEVBQUUsQ0FBQzs0QkFDTixDQUFRLFNBQUUsQ0FBa0I7NEJBQzVCLENBQWUsZ0JBQUUsQ0FBUyxXQUFDSSxJQUFJLENBQUNDLFlBQVk7d0JBQ2hELENBQUM7b0JBQ0wsQ0FBQzs7b0JBTktSLFdBQVc7OzJCQU9KQSxXQUFXLENBQUNLLElBQUk7Ozs7aURBRXRCLENBQUNJO3dCQUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0csaUJBQWlCO29CQUFBLENBQUM7Ozs7OztJQUU5QyxDQUFDOztBQXRDZ0JiLGdCQUFnQixDQUNsQmMsU0FBUyxHQUE0QixJQUFJO0FBRHZDZCxnQkFBZ0IsQ0FLbkJlLFdBQVcsR0FBRyxRQUFRLEdBQXdCLENBQUM7SUFDekQsRUFBRSxFQU5XZixnQkFBZ0IsQ0FNVGMsU0FBUyxLQUFLLElBQUksRUFBRSxDQUFDO1FBTjVCZCxnQkFBZ0IsQ0FPUmMsU0FBUyxHQUFHLEdBQUcsQ0FQdkJkLGdCQUFnQjtJQVE3QixDQUFDO0lBQ0QsTUFBTSxDQVRPQSxnQkFBZ0IsQ0FTTGMsU0FBUztBQUNyQyxDQUFDO0FBVmdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9MaW5lTG9naW4uc2VydmljZS50c3g/Nzk1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTG9naW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IExpbmVMb2dpblNlcnZpY2UgfCBudWxsID0gbnVsbFxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlID0gKCkgOiBMaW5lTG9naW5TZXJ2aWNlIHwgbnVsbCA9PiB7XG4gICAgICAgIGlmKExpbmVMb2dpblNlcnZpY2UuX2luc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBMaW5lTG9naW5TZXJ2aWNlLl9pbnN0YW5jZSA9IG5ldyBMaW5lTG9naW5TZXJ2aWNlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTGluZUxvZ2luU2VydmljZS5faW5zdGFuY2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoY29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmxpbmUubWUvb2F1dGgyL3YyLjEvdG9rZW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IFwiZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUmY29kZT1cIiArIGNvZGUgKyBcIiZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDozMDAwL2NhbGxiYWNrJmNsaWVudF9pZD0xNjU2Nzk3NzM0JmNsaWVudF9zZWNyZXQ9MmY3YjljNTY3Nzc5MjhmYTYxZTE4NWFiZjQxMTk2ZmImY29kZV92ZXJpZmllcj1cIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyUHJvZmlsZSA9IGFzeW5jIChjb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0QWNjZXNzVG9rZW4oY29kZSk7XG4gICAgICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubGluZS5tZS92Mi9wcm9maWxlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJytkYXRhLmFjY2Vzc190b2tlblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcjogZGF0YS5lcnJvcl9kZXNjcmlwdGlvbn1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lTG9naW5TZXJ2aWNlIiwiZ2V0QWNjZXNzVG9rZW4iLCJjb2RlIiwicmF3UmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwianNvbiIsImdldFVzZXJQcm9maWxlIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImVycm9yIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJfaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/LineLogin.service.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fdivyanshunegi%2FGitHub%2FlineLogin2%2Fpages%2Fcallback.tsx!":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fdivyanshunegi%2FGitHub%2FlineLogin2%2Fpages%2Fcallback.tsx! ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/callback\",\n      function () {\n        return __webpack_require__(/*! ./pages/callback.tsx */ \"./pages/callback.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/callback\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZjYWxsYmFjayZhYnNvbHV0ZVBhZ2VQYXRoPSUyRlVzZXJzJTJGZGl2eWFuc2h1bmVnaSUyRkdpdEh1YiUyRmxpbmVMb2dpbjIlMkZwYWdlcyUyRmNhbGxiYWNrLnRzeCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrREFBc0I7QUFDN0M7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2FiZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9jYWxsYmFja1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvY2FsbGJhY2sudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9jYWxsYmFja1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fdivyanshunegi%2FGitHub%2FlineLogin2%2Fpages%2Fcallback.tsx!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcallback&absolutePagePath=%2FUsers%2Fdivyanshunegi%2FGitHub%2FlineLogin2%2Fpages%2Fcallback.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);