/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/* Remove default margin */\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video, button {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role=list],\\nol[role=list] {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\ninput {\\n  outline: none;\\n  border: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n\\n  *,\\n*::before,\\n*::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.preloader {\\n  width: 100vw;\\n  background-color: #d9f9ff;\\n  position: fixed;\\n  top: 5rem;\\n  bottom: 0;\\n  z-index: 99;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.err {\\n  background-color: #EC6E4C;\\n  color: #CAF7FF;\\n  font-size: 2.8rem;\\n  font-weight: bold;\\n}\\n\\n.loader {\\n  height: 6rem;\\n  width: 6rem;\\n  transform-origin: bottom center;\\n  animation: rotate 3s linear infinite;\\n}\\n\\n.circle {\\n  display: inline-block;\\n  background-color: #004d71;\\n  height: 3rem;\\n  width: 3rem;\\n  border-radius: 50%;\\n  transform: scale(0);\\n  animation: grow 1.5s linear infinite;\\n  margin: -0.7rem;\\n}\\n\\n.circle:nth-child(2) {\\n  background-color: #EC6E4C;\\n  animation-delay: 0.75s;\\n}\\n\\n@keyframes rotate {\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n@keyframes grow {\\n  50% {\\n    transform: scale(1);\\n  }\\n}\\n.activate {\\n  display: flex;\\n}\\n\\n.deactivate {\\n  display: none;\\n}\\n\\n.fadeoutbcg {\\n  background-color: transparent;\\n}\\n\\n.daily {\\n  margin: 1rem 0;\\n  padding: 1rem 1.5rem;\\n  background-color: rgba(255, 255, 255, 0.35);\\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.05) inset;\\n  border-radius: 1rem;\\n  display: grid;\\n  grid-template-areas: \\\"date\\\" \\\"desc\\\" \\\"temp\\\" \\\"icon\\\";\\n}\\n\\n.day-detail:nth-of-type(1) {\\n  grid-area: desc;\\n  font-size: 1.8rem;\\n  align-self: start;\\n  color: #004d71;\\n}\\n\\n.day-detail:nth-of-type(2) {\\n  grid-area: temp;\\n  font-size: 2.2rem;\\n  font-weight: bold;\\n  color: #004d71;\\n  align-self: start;\\n}\\n\\n.day-detail:nth-of-type(3) {\\n  grid-area: icon;\\n  align-self: center;\\n}\\n\\n.day-detail:nth-of-type(4) {\\n  grid-area: date;\\n  justify-self: end;\\n  font-size: 1.4rem;\\n  color: #EC6E4C;\\n}\\n\\n.day-detail:nth-of-type(5) {\\n  grid-area: hum;\\n}\\n\\n.day-detail:nth-of-type(6) {\\n  grid-area: wind;\\n}\\n\\n.day-detail:nth-of-type(7) {\\n  grid-area: pres;\\n}\\n\\n.day-detail:nth-of-type(8) {\\n  grid-area: uv;\\n}\\n\\n.day-detail:nth-of-type(9) {\\n  grid-area: rise;\\n}\\n\\n.day-detail:nth-of-type(10) {\\n  grid-area: set;\\n}\\n\\n.day-detail:nth-of-type(11) {\\n  grid-area: dew;\\n}\\n\\n#daily-icon {\\n  width: 45px;\\n  height: auto;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n  background-color: rgba(202, 247, 255, 0.47);\\n  color: #507D95;\\n}\\n\\n.content-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n::placeholder {\\n  color: #cbcbcb;\\n}\\n\\ninput {\\n  border-radius: 1rem;\\n  padding: 0 1rem;\\n  box-shadow: 0 0 15px 20px rgba(255, 255, 255, 0.4);\\n  color: #004d71;\\n}\\n\\ni {\\n  color: #507D95;\\n}\\n\\n.navbar {\\n  width: 100%;\\n  height: 5rem;\\n  background: rgba(202, 247, 255, 0.47);\\n  padding: 1rem 1.5rem;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  box-shadow: 0 0 1rem #507D95;\\n  z-index: 100;\\n}\\n\\n#icon {\\n  background-color: #004d7122;\\n  border-radius: 50%;\\n  box-shadow: 0 0 10px 11px #004d7122;\\n}\\n\\n.icon {\\n  position: relative;\\n}\\n\\n.icon::before {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 5em;\\n  height: 5em;\\n  position: absolute;\\n  z-index: -5;\\n  top: -1em;\\n  left: -2em;\\n  background-color: #004d7122;\\n  border-radius: 50%;\\n  box-shadow: 0 0 10px 11px #004d7122;\\n}\\n\\n.icon::after {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 4.5em;\\n  height: 4.5em;\\n  position: absolute;\\n  z-index: -3;\\n  top: -2em;\\n  left: 0.5em;\\n  background-color: #004d7122;\\n  border-radius: 50%;\\n  box-shadow: 0 0 10px 11px #004d7122;\\n}\\n\\n.btn {\\n  background-color: Transparent;\\n}\\n\\n.btn:hover {\\n  cursor: pointer;\\n}\\n.btn:hover i {\\n  color: #EC6E4C;\\n}\\n\\n.weather-content {\\n  width: 100%;\\n  padding: 10px 20px;\\n  display: grid;\\n  grid-template-areas: \\\"current\\\" \\\"detail-h\\\" \\\"detail\\\" \\\"forcast-h\\\" \\\"forcast\\\";\\n  justify-content: center;\\n}\\n\\n.current-weather {\\n  grid-area: current;\\n  overflow: hidden;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.detailed {\\n  grid-area: detail-h;\\n}\\n\\n.detailed-info {\\n  grid-area: detail;\\n}\\n\\n.forcast {\\n  grid-area: forcast-h;\\n}\\n\\n.daily-forcast {\\n  grid-area: forcast;\\n}\\n\\n.date-time-place {\\n  padding: 3rem 0 1.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: baseline;\\n  align-items: center;\\n  line-height: 1;\\n}\\n.date-time-place #location {\\n  font-size: 2.2rem;\\n}\\n.date-time-place .btn {\\n  font-size: small;\\n}\\n\\n.weather-info {\\n  background-color: rgba(255, 255, 255, 0.45);\\n  border-radius: 25%;\\n  box-shadow: 0 0 15px 15px rgba(255, 255, 255, 0.4);\\n  width: fit-content;\\n}\\n.weather-info #desc {\\n  font-size: 2.6rem;\\n  text-align: center;\\n  color: #004d71;\\n}\\n.weather-info .main-temp {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.weather-info .main-temp .temperature {\\n  width: 100px;\\n  height: 100px;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n.weather-info .main-temp .temperature #temp {\\n  font-size: 4.6rem;\\n  line-height: 0.8;\\n  color: #004d71;\\n}\\n.weather-info .main-temp .temperature #feels {\\n  font-size: 1.4rem;\\n}\\n\\n.h2 {\\n  font-size: 1.8rem;\\n  font-weight: normal;\\n  color: #EC6E4C;\\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.074);\\n}\\n\\n.detailed {\\n  padding-top: 2rem;\\n}\\n\\n.detailed::before {\\n  content: \\\"\\\";\\n  display: block;\\n  background-color: #507D95;\\n  width: 100%;\\n  height: 1px;\\n}\\n\\n.detailed-info {\\n  padding-left: 1rem;\\n  line-height: 1.3;\\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.074);\\n  display: grid;\\n  grid-template-areas: \\\"prec prec\\\" \\\"hum vis\\\" \\\"wind dew\\\" \\\"uv rise\\\" \\\"press set\\\";\\n}\\n.detailed-info #humidity {\\n  grid-area: hum;\\n}\\n.detailed-info #visibility {\\n  grid-area: vis;\\n}\\n.detailed-info #wind {\\n  grid-area: wind;\\n}\\n.detailed-info #dew {\\n  grid-area: dew;\\n}\\n.detailed-info #uv {\\n  grid-area: uv;\\n}\\n.detailed-info #pressure {\\n  grid-area: press;\\n}\\n.detailed-info #sunrise {\\n  grid-area: rise;\\n}\\n.detailed-info #sunset {\\n  grid-area: set;\\n}\\n.detailed-info #prec {\\n  grid-area: prec;\\n}\\n\\n.forcast {\\n  color: #004d71;\\n  font-weight: bold;\\n  padding-top: 2.5rem;\\n}\\n\\n.forcast::before {\\n  content: \\\"\\\";\\n  display: block;\\n  background-color: #507D95;\\n  width: 100%;\\n  height: 1px;\\n}\\n\\n.daily-forcast {\\n  width: 100%;\\n  display: flex;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: flex-start;\\n  flex-flow: wrap;\\n}\\n\\n.daily {\\n  max-width: 150px;\\n  width: 15rem;\\n  height: 23rem;\\n  overflow: hidden;\\n}\\n\\nfooter {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 2rem;\\n}\\n\\n@media screen and (min-width: 410px) {\\n  .weather-content {\\n    grid-auto-columns: 80%;\\n  }\\n\\n  .current-weather {\\n    align-self: center;\\n  }\\n}\\n@media screen and (min-width: 600px) {\\n  .weather-content {\\n    padding: 20px 50px;\\n    display: grid;\\n    grid-template-areas: \\\"current detail-h\\\" \\\"current detail\\\" \\\"forcast-h forcast-h\\\" \\\"forcast forcast\\\";\\n    justify-content: center;\\n    align-items: center;\\n    grid-template-columns: 1fr 1.5fr;\\n    column-gap: 2.5rem;\\n  }\\n\\n  .current-weather {\\n    grid-area: current;\\n    overflow: visible;\\n  }\\n\\n  .detailed {\\n    grid-area: detail-h;\\n    align-self: center;\\n    font-size: 2rem;\\n  }\\n\\n  .detailed-info {\\n    grid-area: detail;\\n    align-self: start;\\n    font-size: 1.8rem;\\n  }\\n\\n  .forcast {\\n    grid-area: forcast-h;\\n    padding-top: 5rem;\\n  }\\n\\n  .daily-forcast {\\n    grid-area: forcast;\\n  }\\n\\n  .forcast {\\n    width: 80%;\\n    justify-self: center;\\n  }\\n\\n  .daily {\\n    width: 100%;\\n  }\\n}\\n@media screen and (min-width: 816px) {\\n  .weather-content {\\n    width: 80%;\\n  }\\n\\n  .detailed-info {\\n    width: fit-content;\\n    column-gap: 5rem;\\n  }\\n\\n  .daily-forcast {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: space-between;\\n    flex-wrap: wrap;\\n  }\\n\\n  .daily {\\n    margin: 0.5rem;\\n  }\\n\\n  .forcast {\\n    width: 100%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n//import { displayCurrent, displayDaily } from \"./newDom\";\r\n\r\nasync function getCoords(city) {\r\n  const response = await fetch((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCoordURL)(city), { mode: \"cors\" });\r\n  const result = await response.json();\r\n  const coords = {\r\n    lat: result[0][\"lat\"],\r\n    lon: result[0][\"lon\"],\r\n  };\r\n  return coords;\r\n}\r\n\r\nasync function getWeather(city) {\r\n  const coords = await getCoords(city);\r\n  const response = await fetch((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWeatherURL)(coords[\"lat\"], coords[\"lon\"]), {\r\n    mode: \"cors\",\r\n  });\r\n  const weatherData = await response.json();\r\n\r\n  return weatherData;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\r\n\n\n//# sourceURL=webpack://weather-app/./src/data.js?");

/***/ }),

/***/ "./src/dataToDiv.js":
/*!**************************!*\
  !*** ./src/dataToDiv.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateDiv\": () => (/* binding */ dateDiv),\n/* harmony export */   \"descDiv\": () => (/* binding */ descDiv),\n/* harmony export */   \"dewDiv\": () => (/* binding */ dewDiv),\n/* harmony export */   \"feelsDiv\": () => (/* binding */ feelsDiv),\n/* harmony export */   \"humidityDiv\": () => (/* binding */ humidityDiv),\n/* harmony export */   \"iconDiv\": () => (/* binding */ iconDiv),\n/* harmony export */   \"locationDiv\": () => (/* binding */ locationDiv),\n/* harmony export */   \"minMaxTempDiv\": () => (/* binding */ minMaxTempDiv),\n/* harmony export */   \"precipitationDiv\": () => (/* binding */ precipitationDiv),\n/* harmony export */   \"pressureDiv\": () => (/* binding */ pressureDiv),\n/* harmony export */   \"sunriseDiv\": () => (/* binding */ sunriseDiv),\n/* harmony export */   \"sunsetDiv\": () => (/* binding */ sunsetDiv),\n/* harmony export */   \"tempDiv\": () => (/* binding */ tempDiv),\n/* harmony export */   \"timeDiv\": () => (/* binding */ timeDiv),\n/* harmony export */   \"uvDiv\": () => (/* binding */ uvDiv),\n/* harmony export */   \"visibilityDiv\": () => (/* binding */ visibilityDiv),\n/* harmony export */   \"windDiv\": () => (/* binding */ windDiv)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n\r\n\r\n\r\nfunction locationDiv(city) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(\"location\");\r\n  div.innerHTML = city;\r\n  return div;\r\n}\r\n\r\nfunction dateDiv(id, clss, timeStamp) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.timeConverter_date)(timeStamp);\r\n  return div;\r\n}\r\n\r\nfunction timeDiv(id, clss, timeStamp) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `updated ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.timeConverter_time)(timeStamp)}`;\r\n  return div;\r\n}\r\n\r\nfunction iconDiv(id, clss, src) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(null, clss);\r\n  const img = document.createElement(\"img\");\r\n  img.id = id;\r\n  img.src = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getIconURL)(src);\r\n  img.alt = \"weather icon\";\r\n  div.append(img);\r\n  return div;\r\n}\r\n\r\nfunction descDiv(id, clss, description) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.capitalize)(description);\r\n  return div;\r\n}\r\n\r\nfunction sunriseDiv(id, clss, timeStamp) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Sunrise ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.timeConverter_time)(timeStamp)}`;\r\n  return div;\r\n}\r\n\r\nfunction sunsetDiv(id, clss, timeStamp) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Sunset ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.timeConverter_time)(timeStamp)}`;\r\n  return div;\r\n}\r\n\r\nfunction tempDiv(id, clss, temp) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `${Math.round(temp)}??`;\r\n  return div;\r\n}\r\n\r\nfunction minMaxTempDiv(id, clss, min, max) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `${Math.round(min)}??/${Math.round(max)}??`;\r\n  return div;\r\n}\r\n\r\nfunction feelsDiv(id, clss, temp) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Feels like ${Math.round(temp)}??`;\r\n  return div;\r\n}\r\n\r\nfunction dewDiv(id, clss, dew) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Dew point ${Math.round(dew).toFixed(1)}??`;\r\n  return div;\r\n}\r\n\r\nfunction pressureDiv(id, clss, pressure) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Pressure ${pressure}hpa`;\r\n  return div;\r\n}\r\n\r\nfunction humidityDiv(id, clss, humidity) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Humidity ${humidity}%`;\r\n  return div;\r\n}\r\n\r\nfunction visibilityDiv(id, clss, visibility) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Visibility ${Math.round(visibility / 1000)}km`;\r\n  return div;\r\n}\r\n\r\nfunction windDiv(id, clss, wind) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Wind speed ${wind}m/s`;\r\n  return div;\r\n}\r\n\r\nfunction uvDiv(id, clss, uv) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n  div.innerHTML = `Uv ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.uvConverter)(Math.round(uv))}`;\r\n  return div;\r\n}\r\n\r\nfunction precipitationDiv(id, clss, obj) {\r\n  if (obj[\"rain\"]) {\r\n    const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n    div.innerHTML = `Rain precipitation last hour ${obj.rain[\"1h\"]}mm`;\r\n    return div;\r\n  } else if (obj[\"snow\"]) {\r\n    const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.makeOutputDiv)(id, clss);\r\n    div.innerHTML = `Snow precipitation last hour ${obj.rain[\"1h\"]}mm`;\r\n    return div;\r\n  } else {\r\n    return \"\";\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/dataToDiv.js?");

/***/ }),

/***/ "./src/dateTimePlace.js":
/*!******************************!*\
  !*** ./src/dateTimePlace.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n\r\n\r\n\r\nconst parent = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.getOutputDiv)(\".date-time-place\");\r\n\r\nfunction makeBtn() {\r\n  const btn = document.createElement(\"button\");\r\n  btn.classList = \"btn\";\r\n  btn.innerHTML = `<i class=\"fa fa-rotate-right\"></i>`;\r\n  btn.onclick = _domUtils__WEBPACK_IMPORTED_MODULE_0__.reload;\r\n  return btn;\r\n}\r\n\r\nfunction makeDTP(arr) {\r\n  parent.append(arr[0]);\r\n  parent.append(arr[1]);\r\n  arr[2].append(makeBtn());\r\n  parent.append(arr[2]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDTP);\r\n\n\n//# sourceURL=webpack://weather-app/./src/dateTimePlace.js?");

/***/ }),

/***/ "./src/detailed.js":
/*!*************************!*\
  !*** ./src/detailed.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n\r\n\r\nconst parent = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.getOutputDiv)(\".detailed-info\");\r\n\r\nfunction makeDetailed(arr) {\r\n  arr.forEach((element) => {\r\n    parent.append(element);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDetailed);\r\n\n\n//# sourceURL=webpack://weather-app/./src/detailed.js?");

/***/ }),

/***/ "./src/domUtils.js":
/*!*************************!*\
  !*** ./src/domUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCity\": () => (/* binding */ getCity),\n/* harmony export */   \"getOutputDiv\": () => (/* binding */ getOutputDiv),\n/* harmony export */   \"makeOutputDiv\": () => (/* binding */ makeOutputDiv),\n/* harmony export */   \"reload\": () => (/* binding */ reload),\n/* harmony export */   \"removeChildren\": () => (/* binding */ removeChildren)\n/* harmony export */ });\n/* harmony import */ var _renderWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWeather */ \"./src/renderWeather.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"./src/loader.js\");\n\r\n\r\n\r\nfunction removeAllChildNodes(parent) {\r\n  while (parent.firstChild) {\r\n    parent.removeChild(parent.firstChild);\r\n  }\r\n}\r\n\r\nfunction removeChildren() {\r\n  const parentArr = [\r\n    getOutputDiv(\".date-time-place\"),\r\n    getOutputDiv(\".weather-info\"),\r\n    getOutputDiv(\".detailed-info\"),\r\n    getOutputDiv(\".daily-forcast\"),\r\n  ];\r\n\r\n  parentArr.forEach((parent) => {\r\n    removeAllChildNodes(parent);\r\n  });\r\n}\r\n\r\nfunction reload() {\r\n  removeChildren();\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_1__.loaded)((0,_renderWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n}\r\n\r\nfunction getOutputDiv(selector) {\r\n  const div = document.querySelector(selector);\r\n  if (div === null) {\r\n    throw new Error(`div ${selector} was not found on your page`);\r\n  }\r\n  return div;\r\n}\r\n\r\nfunction makeOutputDiv(id, clss) {\r\n  const div = document.createElement(\"div\");\r\n  div.id = id;\r\n  div.className = clss;\r\n  return div;\r\n}\r\n\r\nfunction getCity() {\r\n  return document.getElementById(\"city-input\").value;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/domUtils.js?");

/***/ }),

/***/ "./src/forcast.js":
/*!************************!*\
  !*** ./src/forcast.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n\r\n\r\nconst parent = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.getOutputDiv)(\".daily-forcast\");\r\n\r\nfunction makeForcastDiv(i, arr) {\r\n  const div = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.makeOutputDiv)(`day${i}`, \"daily\");\r\n  arr.forEach((element) => {\r\n    div.append(element);\r\n  });\r\n\r\n  parent.append(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeForcastDiv);\r\n\n\n//# sourceURL=webpack://weather-app/./src/forcast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _renderWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderWeather */ \"./src/renderWeather.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader */ \"./src/loader.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_loader__WEBPACK_IMPORTED_MODULE_3__.loaded)((0,_renderWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\nconst form = document.querySelector(\"form\");\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault(); // prevent actual submit\r\n  (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.removeChildren)();\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_3__.loaded)((0,_renderWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loaded\": () => (/* binding */ loaded)\n/* harmony export */ });\nconst preloader = document.getElementById(\"preloader\");\r\nconst loader = document.querySelector(\".loader\");\r\nconst err = document.querySelector(\".err\");\r\n\r\nfunction activate(div) {\r\n  div.classList.remove(\"deactivate\");\r\n  div.classList.add(\"activate\");\r\n}\r\nfunction activateLoader() {\r\n  activate(loader);\r\n  activate(preloader);\r\n}\r\nfunction deactivate(div) {\r\n  div.classList.remove(\"activate\");\r\n  div.classList.add(\"deactivate\");\r\n}\r\n\r\nasync function loaded(rendered) {\r\n  activateLoader();\r\n  const done = await rendered;\r\n\r\n  if (done) {\r\n    deactivate(err);\r\n    setTimeout(() => {\r\n      deactivate(loader);\r\n      deactivate(preloader);\r\n    }, 1500);\r\n  } else {\r\n    deactivate(loader);\r\n    activate(err);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/loader.js?");

/***/ }),

/***/ "./src/mainInfo.js":
/*!*************************!*\
  !*** ./src/mainInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeMainInfo\": () => (/* binding */ makeMainInfo)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n\r\n\r\nconst parent = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.getOutputDiv)(\".weather-info\");\r\n\r\nfunction makeMainInfo(desc, temp, feels, icon) {\r\n  parent.append(desc);\r\n  const mainTemp = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.makeOutputDiv)(null, \"main-temp\");\r\n  const temperature = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.makeOutputDiv)(null, \"temperature\");\r\n  temperature.append(temp);\r\n  temperature.append(feels);\r\n  mainTemp.append(temperature);\r\n  mainTemp.append(icon);\r\n  parent.append(mainTemp);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/mainInfo.js?");

/***/ }),

/***/ "./src/renderWeather.js":
/*!******************************!*\
  !*** ./src/renderWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _dataToDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataToDiv */ \"./src/dataToDiv.js\");\n/* harmony import */ var _dateTimePlace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateTimePlace */ \"./src/dateTimePlace.js\");\n/* harmony import */ var _mainInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainInfo */ \"./src/mainInfo.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _detailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailed */ \"./src/detailed.js\");\n/* harmony import */ var _forcast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forcast */ \"./src/forcast.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function renderWeather() {\r\n  let city = (0,_domUtils__WEBPACK_IMPORTED_MODULE_4__.getCity)();\r\n  if (city === \"\") {\r\n    city = \"London\";\r\n  } else {\r\n    city = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.capitalize)(city);\r\n  }\r\n  try {\r\n    const { alert, current, daily } = await (0,_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\r\n\r\n    const arrDTP = [\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.locationDiv(city),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.dateDiv(\"date\", null, current.dt),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.timeDiv(\"time\", null, current.dt),\r\n    ];\r\n    (0,_dateTimePlace__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrDTP);\r\n\r\n    const arrMain = [\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.descDiv(\"desc\", \"\", current.weather[\"0\"].description),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.tempDiv(\"temp\", \"\", current.temp),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.feelsDiv(\"feels\", \"\", current.feels_like),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.iconDiv(\"icon\", \"icon\", current.weather[\"0\"].icon),\r\n    ];\r\n    (0,_mainInfo__WEBPACK_IMPORTED_MODULE_3__.makeMainInfo)(...arrMain);\r\n\r\n    const arrDetailed = [\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.precipitationDiv(\"prec\", \"\", current),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.humidityDiv(\"humidity\", \"\", current.humidity),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.windDiv(\"wind\", \"\", current.wind_speed),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.visibilityDiv(\"visibility\", \"\", current.visibility),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.pressureDiv(\"pressure\", \"\", current.pressure),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.uvDiv(\"uv\", \"\", current.uvi),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.sunriseDiv(\"sunrise\", \"\", current.sunrise),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.sunsetDiv(\"sunset\", \"\", current.sunset),\r\n      _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.dewDiv(\"dew\", \"\", current.dew_point),\r\n    ];\r\n    (0,_detailed__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrDetailed);\r\n\r\n    for (let i = 1; i < 8; i++) {\r\n      let arrDaily = [\r\n        _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.descDiv(\"desc\", \"day-detail\", daily[i].weather[0].description),\r\n        _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.minMaxTempDiv(\r\n          \"temp\",\r\n          \"day-detail\",\r\n          daily[i].temp.min,\r\n          daily[i].temp.max\r\n        ),\r\n        _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.iconDiv(\"icon\", \"day-detail icon\", daily[i].weather[0].icon),\r\n        _dataToDiv__WEBPACK_IMPORTED_MODULE_1__.dateDiv(\"date\", \"day-detail\", daily[i].dt),\r\n      ];\r\n      (0,_forcast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(i, arrDaily);\r\n    }\r\n  } catch (err) {\r\n    console.log(err);\r\n    return false;\r\n  }\r\n\r\n  return true;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeather);\r\n\n\n//# sourceURL=webpack://weather-app/./src/renderWeather.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize),\n/* harmony export */   \"getCoordURL\": () => (/* binding */ getCoordURL),\n/* harmony export */   \"getIconURL\": () => (/* binding */ getIconURL),\n/* harmony export */   \"getWeatherURL\": () => (/* binding */ getWeatherURL),\n/* harmony export */   \"timeConverter_date\": () => (/* binding */ timeConverter_date),\n/* harmony export */   \"timeConverter_time\": () => (/* binding */ timeConverter_time),\n/* harmony export */   \"uvConverter\": () => (/* binding */ uvConverter)\n/* harmony export */ });\nfunction getCoordURL(city) {\r\n  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`;\r\n}\r\n\r\nfunction getWeatherURL(lat, lon) {\r\n  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`;\r\n}\r\n\r\nfunction getIconURL(code) {\r\n  return `https://openweathermap.org/img/wn/${code}@2x.png`;\r\n}\r\n\r\nfunction timeConverter_date(unix_timestamp) {\r\n  let timestamp = new Date(unix_timestamp * 1000);\r\n  let date = timestamp.getDate();\r\n  let month = timestamp.getMonth() + 1;\r\n  let year = timestamp.getFullYear();\r\n\r\n  return `${date}.${month}.${year}`;\r\n}\r\n\r\nfunction timeConverter_time(unix_timestamp) {\r\n  let timestamp = new Date(unix_timestamp * 1000);\r\n  let hour = timestamp.getHours();\r\n  let min = timestamp.getMinutes();\r\n\r\n  if (min < 10 && hour < 10) return `0${hour}:0${min}`;\r\n  else if (min < 10) return `${hour}:0${min}`;\r\n  else if (hour < 10) return `0${hour}:${min}`;\r\n  else return `${hour}:${min}`;\r\n}\r\n\r\nfunction capitalize(str) {\r\n  const arr = str.split(\" \");\r\n  const capitalized = arr.map(\r\n    (word) => word.charAt(0).toUpperCase() + word.slice(1)\r\n  );\r\n  return capitalized.join(\" \");\r\n}\r\n\r\nfunction uvConverter(index) {\r\n  if (index < 3) return \"low\";\r\n  if (index < 6) return \"moderate\";\r\n  if (index < 8) return \"high\";\r\n  if (index < 11) return \"very high\";\r\n  if (index > 10) return \"extreme\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;