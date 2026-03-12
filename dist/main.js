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

/***/ "../solution/src/constants.js":
/*!************************************!*\
  !*** ../solution/src/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resultsURL: () => (/* binding */ resultsURL)\n/* harmony export */ });\nconst resultsURL = `http://localhost:3000/results`;\n\n//# sourceURL=webpack://starter/../solution/src/constants.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resultsURL: () => (/* binding */ resultsURL)\n/* harmony export */ });\nconst resultsURL = `http://localhost:3000/results`;\n\n//# sourceURL=webpack://starter/./src/constants.js?");

/***/ }),

/***/ "./src/formUtils.js":
/*!**************************!*\
  !*** ./src/formUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerEventListeners: () => (/* binding */ registerEventListeners)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nconst prepareResultForSubmit = formData => {\r\n    console.log(formData);\r\n    console.log(formData.length);\r\n    let result = {};\r\n    for(let i = 0, j = formData.length -1; i < j; i++) {\r\n        result[formData[i].name] = formData[i].value;\r\n    }\r\n    return result;\r\n}\r\n\r\nconst submitResult = result => {\r\n    let resultToSubmit = JSON.stringify(result);\r\n     return fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.resultsURL, {\r\n        method: \"POST\",\r\n        body: JSON.stringify(resultToSubmit),\r\n        mode: \"cors\",\r\n        headers: {\r\n        \"Content-Type\": \"application/json\"}\r\n\r\n} )\r\n\r\n    .then(response => {\r\n        if (response.ok) {\r\n            alert(\"Data submitted correctly!!\");\r\n        } else {\r\n            throw new Error(\"Something went wrong!\");\r\n        }\r\n    }\r\n    )\r\n\r\n    .catch(error => {\r\n        alert(error.message);\r\n    })\r\n\r\n};\r\n\r\nconst checkForReactUnited = formValues => {\r\n    let searchText = `react united`;\r\n    let homeTeam = formValues[0].value.toLowerCase();\r\n    let awayTeam = formValues[2].value.toLowerCase();\r\n    return (homeTeam.indexOf(searchText) === -1 && awayTeam.indexOf(searchText) === -1);\r\n}\r\n\r\nconst handleSubmit = event => {\r\n            event.preventDefault();\r\n    if(checkForReactUnited(event.target)) {\r\n        alert(`React United not included in result!`);\r\n    }\r\n    else {\r\n        let result = prepareResultForSubmit(event.target);\r\n        submitResult(result);\r\n    };\r\n}\r\n\r\nconst registerEventListeners = () => {\r\n    let form = document.querySelector('#result');\r\n    form.addEventListener('submit', handleSubmit);\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/formUtils.js?");

/***/ }),

/***/ "./src/getResultsUtils.js":
/*!********************************!*\
  !*** ./src/getResultsUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResults: () => (/* binding */ getResults)\n/* harmony export */ });\n/* harmony import */ var _solution_src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../solution/src/constants */ \"../solution/src/constants.js\");\n\r\n\r\n\r\nconst populateResults = results => {\r\n    let resultsDisplay = document.createElement('section');\r\n    let resultsPlaceholder = document.querySelector('div#resultsPlaceholder');\r\n    let resultsArticle = document.querySelector('article#results');\r\n\r\n    results.forEach(result => {\r\n        let resultDisplay = document.createElement('p');\r\n        resultDisplay.textContent = `${result.home} ${result.homeScore} - ${result.awayScore} ${result.away}`;\r\n        resultsDisplay.appendChild(resultDisplay);\r\n    });\r\n\r\n    resultsArticle.replaceChild(resultsDisplay, resultsPlaceholder);\r\n}\r\n\r\nconst getResults = () => {\r\n    return fetch(_solution_src_constants__WEBPACK_IMPORTED_MODULE_0__.resultsURL)\r\n        .then(results => {\r\n            if (results.ok) {\r\n                return results = results.json();\r\n            }\r\n            else {\r\n                throw new Error(`Data isn't fetched!!`)\r\n\r\n            }\r\n        }\r\n        )\r\n        .then(results => {\r\n            let reactRangersResults = results;\r\n            populateResults(reactRangersResults);\r\n        }\r\n        )\r\n        .catch(error => {\r\n            console.log(error.message);\r\n        })\r\n    }\r\n\r\n\n\n//# sourceURL=webpack://starter/./src/getResultsUtils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getResultsUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getResultsUtils.js */ \"./src/getResultsUtils.js\");\n/* harmony import */ var _formUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formUtils.js */ \"./src/formUtils.js\");\n\n\n\n(0,_formUtils_js__WEBPACK_IMPORTED_MODULE_1__.registerEventListeners)();\n(0,_getResultsUtils_js__WEBPACK_IMPORTED_MODULE_0__.getResults)();\n\n//# sourceURL=webpack://starter/./src/index.js?");

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
/******/ 			// no module.id needed
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