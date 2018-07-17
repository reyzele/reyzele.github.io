/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/common/Init.js":
/*!************************************!*\
  !*** ./src/scripts/common/Init.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.init = undefined;\n\nvar _catalog = __webpack_require__(/*! ./catalog */ \"./src/scripts/common/catalog.js\");\n\nvar _catalog2 = _interopRequireDefault(_catalog);\n\nvar _handleFunctions = __webpack_require__(/*! ./handleFunctions */ \"./src/scripts/common/handleFunctions.js\");\n\nvar _main = __webpack_require__(/*! ../main */ \"./src/scripts/main.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction init() {\n  var itemsList = document.querySelector('.basket__list');\n  var deleteItem = document.querySelector('#deleteItem');\n\n  (0, _handleFunctions.renderItems)(itemsList, _catalog2.default);\n  (0, _handleFunctions.renderTotalPrice)();\n\n  var items = itemsList.querySelectorAll('.basket__item');\n  var totalCount = 0;\n  var totalChecked = 0;\n\n  (0, _handleFunctions.setCount)(totalCount);\n\n  items.forEach(function (item, index) {\n    var checkbox = item.querySelector('.checkbox');\n    var countInput = item.querySelector('#count');\n\n    deleteItem.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      console.log(checkbox.checked);\n\n      if (checkbox.checked) {\n        (0, _handleFunctions.dataChange)(index, totalChecked);\n        init();\n      }\n\n      checkbox.checked = false;\n    }, false);\n\n    item.addEventListener('click', function (e) {\n      if (e.target.classList.contains('checkbox-template')) {\n        var input = e.target.previousElementSibling;\n\n        if (input.checked === false) {\n          totalCount += _catalog2.default[index].count;\n          totalChecked >= 0 && totalChecked++;\n        } else {\n          totalCount -= _catalog2.default[index].count;\n          totalChecked >= 0 && totalChecked--;\n        }\n        (0, _handleFunctions.setCount)(totalCount);\n      }\n    });\n\n    countInput.addEventListener('click', function (e) {\n\n      _main.overlay.open(e);\n      _main.overlay.setContent(e.target);\n    });\n  });\n}\n\nexports.init = init;\n\n//# sourceURL=webpack:///./src/scripts/common/Init.js?");

/***/ }),

/***/ "./src/scripts/common/catalog.js":
/*!***************************************!*\
  !*** ./src/scripts/common/catalog.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = [{\n  \"id\": 1,\n  \"name\": \"Нож складной WENGER Evolution ,\\\"Автобус\\\" ,13 функций, 85 мм.WENGER\",\n  \"count\": 5,\n  \"price\": 990,\n  \"img\": \"images/Layer1.png\"\n}, {\n  \"id\": 2,\n  \"name\": \"Рюкзак WENGER «NEO»\",\n  \"count\": 3,\n  \"price\": 5500,\n  \"img\": \"images/Layer2.png\"\n}, {\n  \"id\": 3,\n  \"name\": \"Перьевая ручка Waterman Hemisphere Essential, перо: нержавеющая сталь.WATERMAN\",\n  \"count\": 1,\n  \"price\": 3000,\n  \"img\": \"images/Layer3.png\"\n}];\n\n//# sourceURL=webpack:///./src/scripts/common/catalog.js?");

/***/ }),

/***/ "./src/scripts/common/handleFunctions.js":
/*!***********************************************!*\
  !*** ./src/scripts/common/handleFunctions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dataChange = exports.setCount = exports.renderTotalPrice = exports.renderItems = undefined;\n\nvar _catalog = __webpack_require__(/*! ./catalog */ \"./src/scripts/common/catalog.js\");\n\nvar _catalog2 = _interopRequireDefault(_catalog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction renderItems(itemsList, catalog) {\n  var template = document.querySelector('#item-template').innerHTML;\n  var render = Handlebars.compile(template);\n  Handlebars.registerHelper('inc', function (value) {\n    return parseInt(value) + 1;\n  });\n\n  itemsList.innerHTML = render({ items: catalog });\n  calculatePrice(catalog);\n}\n\nfunction renderTotalPrice() {\n  var subTotal = document.querySelector('#subTotal');\n  var taxTotal = document.querySelector('#taxTotal');\n  var totalPrice = document.querySelector('#totalPrice');\n\n  subTotal.innerHTML = Math.round(getSum(_catalog2.default)) + \" р\";\n  taxTotal.innerHTML = Math.round(getSum(_catalog2.default) * 0.18) + \" р\";\n  totalPrice.innerHTML = Math.round(getSum(_catalog2.default) + getSum(_catalog2.default) * 0.18) + \" р\";\n}\n\nfunction getSum(arr) {\n  return arr.reduce(function (sum, item) {\n    return sum + item.count * item.price;\n  }, 0);\n}\n\nfunction calculatePrice(arr) {\n  var totalPrice = document.querySelectorAll('#total');\n\n  totalPrice.forEach(function (item, index) {\n    var total = arr[index].price * arr[index].count;\n\n    item.innerHTML = total + \" р\";\n  });\n}\n\nfunction setCount(number) {\n  var countOfChecks = document.querySelector('#countOfChecks');\n\n  countOfChecks.innerHTML = number;\n}\n\nfunction dataChange(index, totalChecked) {\n  _catalog2.default.splice(index, totalChecked);\n\n  _catalog2.default.forEach(function (item, index) {\n    item.id = index + 1;\n  });\n}\n\nexports.renderItems = renderItems;\nexports.renderTotalPrice = renderTotalPrice;\nexports.setCount = setCount;\nexports.dataChange = dataChange;\n\n//# sourceURL=webpack:///./src/scripts/common/handleFunctions.js?");

/***/ }),

/***/ "./src/scripts/common/overlay.js":
/*!***************************************!*\
  !*** ./src/scripts/common/overlay.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createOverlay = undefined;\n\nvar _catalog = __webpack_require__(/*! ./catalog */ \"./src/scripts/common/catalog.js\");\n\nvar _catalog2 = _interopRequireDefault(_catalog);\n\nvar _Init = __webpack_require__(/*! ./Init */ \"./src/scripts/common/Init.js\");\n\nvar _main = __webpack_require__(/*! ../main */ \"./src/scripts/main.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction createOverlay(template) {\n  var fragment = document.createElement(\"div\");\n\n  fragment.innerHTML = template;\n\n  var overlayElement = fragment.querySelector(\".overlay\");\n  var price = fragment.querySelector(\"#price\");\n  var count = fragment.querySelector(\"#overlayCount\");\n  var minus = fragment.querySelector(\"#minus\");\n  var plus = fragment.querySelector(\"#plus\");\n  var total = fragment.querySelector(\"#overlayTotal\");\n  var closeOverlay = fragment.querySelector(\"#closeOverlay\");\n  var saveButton = fragment.querySelector(\"#saveButton\");\n  var itemID = void 0;\n  var overlayOpen = false;\n\n  fragment = null;\n\n  function setTotalPrice() {\n    total.innerHTML = count.value * price.innerHTML;\n  }\n\n  function closeOverlayFunc(e) {\n    var target = e.target;\n\n    while (overlayOpen && !target === target.classList.contains('overlay')) {\n      if (target.classList.contains('wrapper')) {\n        _main.overlay.close();\n        return 0;\n      } else {\n        target = target.parentElement;\n      }\n    }\n\n    return 0;\n  }\n\n  document.addEventListener('click', closeOverlayFunc, true);\n\n  overlayElement.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n\n    if (e.target === saveButton) {\n      _catalog2.default[itemID - 1].count = +count.value;\n      _main.overlay.close();\n      (0, _Init.init)();\n    } else if (e.target === closeOverlay) {\n      _main.overlay.close();\n    }\n  });\n\n  [minus, plus].forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      if (this === plus) {\n        count.value++;\n      } else if (this === minus) {\n        count.value <= 1 ? 1 : +count.value--;\n      }\n      setTotalPrice();\n    });\n  });\n\n  count.addEventListener('change', function () {\n    setTotalPrice();\n  });\n\n  function setPosition(elem) {\n    var posY = elem.pageY - overlayElement.offsetHeight / 2;\n    var posX = elem.pageX - overlayElement.offsetWidth / 2;\n\n    overlayElement.style.top = posY + 'px';\n    overlayElement.style.left = posX + 'px';\n  }\n\n  return {\n    open: function open(e) {\n      itemID = e.target.dataset.id;\n      document.body.appendChild(overlayElement);\n      setPosition(e);\n      overlayOpen = true;\n    },\n    close: function close() {\n      document.body.removeChild(overlayElement);\n      overlayOpen = false;\n    },\n    setContent: function setContent(content) {\n      price.innerHTML = content.dataset.price;\n      count.value = content.dataset.count;\n      total.innerHTML = content.dataset.count * content.dataset.price;\n    }\n  };\n}\n\nexports.createOverlay = createOverlay;\n\n//# sourceURL=webpack:///./src/scripts/common/overlay.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.overlay = undefined;\n\nvar _overlay = __webpack_require__(/*! ./common/overlay */ \"./src/scripts/common/overlay.js\");\n\nvar _Init = __webpack_require__(/*! ./common/Init */ \"./src/scripts/common/Init.js\");\n\nvar overlayTemplate = document.querySelector(\"#overlayTemplate\").innerHTML;\nvar overlay = (0, _overlay.createOverlay)(overlayTemplate);\n\n(0, _Init.init)();\n\nexports.overlay = overlay;\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ });