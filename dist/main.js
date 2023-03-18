/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*:root {\n  --clr-neutral-100: #fff;\n  --clr-primary-500: rgb(204, 162, 107);\n\n  --ff-primary: 'Poppins', Arial;\n  --ff-accent: 'Great Vibes';\n}*/\n\n* {\n  margin: 0;\n  padding: 0;\n  /*font-family: var(--ff-primary);*/\n}\n\nmain {\n  border: 1px solid black;\n  width: clamp(450px, 90%, 1000px);\n  margin-inline: auto;\n  margin-top: 1em;\n  border-radius: 4px;\n}\n\nheader {\n  background-color: rgb(216, 92, 83);\n  color: white;\n  font-size: 1.5em;\n  padding: 0.2em;\n}\n\ncontainer {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.side-bar {\n  border-right: 1px solid black;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n.side-bar > * {\n  font-size: 16px;\n  padding: 0.6em;\n}\n\n.projects {\n  padding-top: 1em;\n}\n\n.content {\n  padding: 1em;\n}\n\n.add-todo,\n.add-project {\n  font-size: 2em;\n  border-radius: 14px;\n  padding-inline: 0.5em;\n}\n\n.task-popup {\n  padding: 5em;\n  /*display: none;*/\n}\n\n.task-form,\n.project-form,\n.edit-todo-form {\n  display: flex;\n  flex-direction: column;\n  max-width: 50%;\n  gap: 5px;\n  margin-inline: auto;\n}\n\n.project-form {\n  margin-bottom: 60px;\n}\n\n.todo-entry {\n  padding: 1em;\n  border: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n.todo-buttons {\n  display: flex;\n  gap: 6px;\n}\n.todo-buttons > * {\n  padding: 0.4em;\n}\n\n.projects-display {\n  display: flex;\n  flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;;;;;;EAME;;AAEF;EACE,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,gCAAgC;EAChC,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,cAAc;EACd,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*:root {\n  --clr-neutral-100: #fff;\n  --clr-primary-500: rgb(204, 162, 107);\n\n  --ff-primary: 'Poppins', Arial;\n  --ff-accent: 'Great Vibes';\n}*/\n\n* {\n  margin: 0;\n  padding: 0;\n  /*font-family: var(--ff-primary);*/\n}\n\nmain {\n  border: 1px solid black;\n  width: clamp(450px, 90%, 1000px);\n  margin-inline: auto;\n  margin-top: 1em;\n  border-radius: 4px;\n}\n\nheader {\n  background-color: rgb(216, 92, 83);\n  color: white;\n  font-size: 1.5em;\n  padding: 0.2em;\n}\n\ncontainer {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.side-bar {\n  border-right: 1px solid black;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n.side-bar > * {\n  font-size: 16px;\n  padding: 0.6em;\n}\n\n.projects {\n  padding-top: 1em;\n}\n\n.content {\n  padding: 1em;\n}\n\n.add-todo,\n.add-project {\n  font-size: 2em;\n  border-radius: 14px;\n  padding-inline: 0.5em;\n}\n\n.task-popup {\n  padding: 5em;\n  /*display: none;*/\n}\n\n.task-form,\n.project-form,\n.edit-todo-form {\n  display: flex;\n  flex-direction: column;\n  max-width: 50%;\n  gap: 5px;\n  margin-inline: auto;\n}\n\n.project-form {\n  margin-bottom: 60px;\n}\n\n.todo-entry {\n  padding: 1em;\n  border: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n.todo-buttons {\n  display: flex;\n  gap: 6px;\n}\n.todo-buttons > * {\n  padding: 0.4em;\n}\n\n.projects-display {\n  display: flex;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/AppLogic.js":
/*!*************************!*\
  !*** ./src/AppLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "TodoItem": () => (/* binding */ TodoItem)
/* harmony export */ });
/* harmony import */ var _DOMStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMStuff */ "./src/DOMStuff.js");
/* eslint-disable max-classes-per-file */



let count = 0;

class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = _DOMStuff__WEBPACK_IMPORTED_MODULE_0__.currentProjectHolder;
    // this.id = Date.now()
    this.id = count++; // maybe try math.random instead??
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
  }

  addTodoItem(todoItem) {
    this.toDos.push(todoItem);
  }

  removeTodoItem(id) {
    const todoIndex = this.toDos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.toDos.splice(todoIndex, 1);
      console.log(
        `todo item with ID ${id} was removed from project ${this.name} `
      );
    }
  }
}




/***/ }),

/***/ "./src/DOMStuff.js":
/*!*************************!*\
  !*** ./src/DOMStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProjectHolder": () => (/* binding */ currentProjectHolder),
/* harmony export */   "displayTodosFromSpecificProject": () => (/* binding */ displayTodosFromSpecificProject),
/* harmony export */   "insertProjectToSideBar": () => (/* binding */ insertProjectToSideBar),
/* harmony export */   "myProjects": () => (/* binding */ myProjects),
/* harmony export */   "projectSidebarButton": () => (/* binding */ projectSidebarButton)
/* harmony export */ });
/* harmony import */ var _AppLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogic */ "./src/AppLogic.js");
/* eslint-disable import/no-mutable-exports */



const myProjects = [];
let currentProjectHolder = 'Default';
let dataID;

function displayTodosFromSpecificProject(x, y) {
  const display = document.querySelector('.content-display');
  const todoEntry = document.createElement('div');
  todoEntry.classList.add('todo-entry');
  display.appendChild(todoEntry);
  const todoEntryContainer = document.createElement('div');
  todoEntryContainer.classList.add('todo-entry-container');
  todoEntry.appendChild(todoEntryContainer);

  const todoTitle = document.createElement('div');
  todoTitle.classList.add('todoTitle');
  todoTitle.innerText = `To-do: ${myProjects[x].toDos[y].title}`;
  todoEntryContainer.appendChild(todoTitle);

  // const todoDescription = document.createElement('div'); // comment this out later?
  // todoDescription.classList.add('todoDescription');
  // todoDescription.innerText = myProjects[x].toDos[y].description;
  // todoEntryContainer.appendChild(todoDescription);

  const todoDueDate = document.createElement('div');
  todoDueDate.classList.add('todoDueDate');
  // todoDueDate.innerText = `Due: ${format(
  //   new Date(myProjects[x].toDos[y].dueDate), // issue: due date MUST be set for format() to work, otherwise error
  //   'dd MMM yyyy'
  // )}`;
  todoDueDate.innerText = `Due: ${myProjects[x].toDos[y].dueDate}`;
  todoEntryContainer.appendChild(todoDueDate);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('todoPriority');
  todoPriority.innerText = `Priority: ${myProjects[x].toDos[y].priority}`; // comment this out later?
  todoEntryContainer.appendChild(todoPriority);

  const todoButtons = document.createElement('div');
  todoButtons.classList.add('todo-buttons');
  todoEntry.appendChild(todoButtons);

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.dataset.id = myProjects[x].toDos[y].id;
  editButton.innerHTML = 'edit';
  todoButtons.appendChild(editButton);

  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-button');
  trashButton.dataset.id = myProjects[x].toDos[y].id;
  trashButton.innerHTML = 'trash';
  todoButtons.appendChild(trashButton);

  const infoButton = document.createElement('button');
  infoButton.classList.add('info-button');
  infoButton.innerHTML = 'info';
  todoButtons.appendChild(infoButton);

  trashButton.addEventListener('click', (e) => {
    dataID = +e.target.getAttribute('data-id'); // TRASH BUTTON FUNCTIONALITY
    display.innerHTML = '';
    myProjects[x].removeTodoItem(dataID);

    // first we update the LS by rendering myProjects' values to LS
    for (let k = 0; k < myProjects.length; k++) {
      if (myProjects[k].name === currentProjectHolder) {
        localStorage.setItem(myProjects[k].name, JSON.stringify(myProjects[k]));
      }
    }
    // then we display it to the DOM
    if (myProjects[x].name === currentProjectHolder) {
      for (let j = 0; j < myProjects[x].toDos.length; j++) {
        displayTodosFromSpecificProject(x, j);
      }
    }
    console.table(myProjects);
  });

  editButton.addEventListener('click', (e) => {
    dataID = +e.target.getAttribute('data-id'); // FETCHES VALUES TO POPULATE EDIT FORM
    console.log(`now editing todo ID: ${dataID}`);
    if (myProjects[x].toDos[y].id === dataID) {
      document.getElementById('edit-title').value =
        myProjects[x].toDos[y].title;
      document.getElementById('edit-description').value =
        myProjects[x].toDos[y].description;
      document.getElementById('edit-due-date').value =
        myProjects[x].toDos[y].dueDate;
      document.getElementById('edit-priority').value =
        myProjects[x].toDos[y].priority;
    }
    return dataID;
  });
}

const confirmEditButton = document.getElementById('confirm-edit'); // EDIT BUTTON FUNCTIONALITY
confirmEditButton.addEventListener('click', () => {
  const display = document.querySelector('.content-display');
  display.innerHTML = '';
  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i].toDos.length; j++) {
      if (myProjects[i].toDos[j].id === dataID) {
        myProjects[i].toDos[j].title =
          document.getElementById('edit-title').value;
        myProjects[i].toDos[j].description =
          document.getElementById('edit-description').value;
        myProjects[i].toDos[j].dueDate =
          document.getElementById('edit-due-date').value;
        myProjects[i].toDos[j].priority =
          document.getElementById('edit-priority').value;
        console.log(myProjects);
        // now we render myProjects and update LS through the forloops below
        for (let k = 0; k < myProjects.length; k++) {
          if (myProjects[k].name === currentProjectHolder) {
            for (let l = 0; l < myProjects[k].toDos.length; l++) {
              displayTodosFromSpecificProject(k, l);

              localStorage.setItem(
                myProjects[k].name,
                JSON.stringify(myProjects[k])
              );
            }
          }
        }
      }
    }
  }
});

function insertProjectToSideBar() {
  const projectsDisplay = document.querySelector('.projects-display');
  const projectsNameInput = document.getElementById('project-name').value;
  if (projectsNameInput !== '') {
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = projectsNameInput;
    projectsDisplay.appendChild(projectsSidebar);
  }
}

function projectSidebarButton() {
  const projectB = document.querySelectorAll('.project-button');
  projectB.forEach((p) => {
    p.addEventListener('click', (e) => {
      const display = document.querySelector('.content-display');
      display.innerHTML = '';
      currentProjectHolder = e.target.innerHTML;

      for (let i = 0; i < myProjects.length; i++) {
        if (myProjects[i].name === currentProjectHolder) {
          for (let j = 0; j < myProjects[i].toDos.length; j++) {
            displayTodosFromSpecificProject(i, j);
          }
        }
      }
      console.log('You are now in project:', currentProjectHolder);
      document.querySelector(
        '.content-header'
      ).innerText = `Project: ${currentProjectHolder}`;
      return currentProjectHolder;
    });
  });
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _AppLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogic */ "./src/AppLogic.js");
/* harmony import */ var _DOMStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMStuff */ "./src/DOMStuff.js");




// const addItemButton = document.querySelector('.add-todo'); // POPUP FUNCTIONALITY STUFF

// addItemButton.addEventListener('click', () => {
//   console.log('wassup');
//   document.querySelector('.task-popup').style.display = 'block';
// });
// const addProjectButton = document.querySelector('.add-project'); // this will enable popup functionality
// addProjectButton.addEventListener('click', () => {
//   console.log('yo');
//   document.querySelector('.project-popup').style.display = 'block';
// });

const createTodoButton = document.getElementById('create');
const createProjectButton = document.getElementById('create-project');

const DefaultProjects = new _AppLogic__WEBPACK_IMPORTED_MODULE_1__.Project('Default');
_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.push(DefaultProjects);

// CREATE BUTTON ON PROJECT FORM
createProjectButton.addEventListener('click', () => {
  const projectsNameInput = document.getElementById('project-name').value;
  const theProject = new _AppLogic__WEBPACK_IMPORTED_MODULE_1__.Project(projectsNameInput);
  _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.push(theProject);

  (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.insertProjectToSideBar)();
  (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.projectSidebarButton)();
  console.table(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects);

  for (let i = 0; i < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.length; i++) {
    if (_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].name === projectsNameInput) {
      localStorage.setItem(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].name, JSON.stringify(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i]));
    }
  }
});

// features to add: project deletion button, more info popup for the todos, set limit of 3 projects max?

function LOCAL_STORAGE_STUFF() {
  // retrieves projects from LS and pushes it into myProjects
  for (let m = 1; m < Object.values(localStorage).length; m++) {
    const ourObjects = JSON.parse(Object.values(localStorage)[m]);
    const projectFromLS = new _AppLogic__WEBPACK_IMPORTED_MODULE_1__.Project(ourObjects.name);
    _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.push(projectFromLS);
  }
  // retrieves toDos from LS and pushes it into the projects in myProjects
  for (let q = 0; q < Object.values(localStorage).length; q++) {
    const ourObjects = JSON.parse(Object.values(localStorage)[q]);
    for (let r = 0; r < ourObjects.toDos.length; r++) {
      const todoFromLS = new _AppLogic__WEBPACK_IMPORTED_MODULE_1__.TodoItem(
        ourObjects.toDos[r].title,
        ourObjects.toDos[r].description,
        ourObjects.toDos[r].dueDate,
        ourObjects.toDos[r].priority
      );
      _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[q].toDos.push(todoFromLS);
    }
  }
  // displays myProjects/LS values and also the sidebar project buttons to the DOM:
  console.log(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects);
  for (let k = 0; k < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.length; k++) {
    const projectsDisplay = document.querySelector('.projects-display');
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[k].name;
    projectsDisplay.appendChild(projectsSidebar);
    (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.projectSidebarButton)();

    for (let l = 0; l < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[k].toDos.length; l++) {
      if (_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[k].name === _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.currentProjectHolder) {
        (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.displayTodosFromSpecificProject)(k, l);
      }
    }
  }
}
LOCAL_STORAGE_STUFF();

// CREATE BUTTON ON TODO FORM
createTodoButton.addEventListener('click', () => {
  const titleInput = document.getElementById('title').value;
  const descriptionInput = document.getElementById('description').value;
  const dueDateInput = document.getElementById('dueDate').value;
  const priorityInput = document.getElementById('priority').value;
  const todo = new _AppLogic__WEBPACK_IMPORTED_MODULE_1__.TodoItem(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput
  );

  for (let i = 0; i < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.length; i++) {
    const display = document.querySelector('.content-display');
    display.innerHTML = '';
    if (_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].name === _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.currentProjectHolder) {
      _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].addTodoItem(todo);
    }
  }

  for (let i = 0; i < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.length; i++) {
    for (let j = 0; j < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].toDos.length; j++) {
      if (_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].name === _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.currentProjectHolder) {
        (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.displayTodosFromSpecificProject)(i, j);
        localStorage.setItem(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].name, JSON.stringify(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i]));
      }
    }
  }
  console.table(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CLCtDQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLElBQUksd0RBQWlCLEVBQUU7QUFDekM7QUFDQTtBQUNBLFFBQVEsaURBQVUsYUFBYSwyREFBb0I7QUFDbkQsTUFBTSxpREFBVTtBQUNoQjtBQUNBOztBQUVBLGtCQUFrQixJQUFJLHdEQUFpQixFQUFFO0FBQ3pDLG9CQUFvQixJQUFJLGlEQUFVLGtCQUFrQjtBQUNwRCxVQUFVLGlEQUFVLGFBQWEsMkRBQW9CO0FBQ3JELFFBQVEsMEVBQStCO0FBQ3ZDLDZCQUE2QixpREFBVSx5QkFBeUIsaURBQVU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFVO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9BcHBMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9ET01TdHVmZi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qOnJvb3Qge1xcbiAgLS1jbHItbmV1dHJhbC0xMDA6ICNmZmY7XFxuICAtLWNsci1wcmltYXJ5LTUwMDogcmdiKDIwNCwgMTYyLCAxMDcpO1xcblxcbiAgLS1mZi1wcmltYXJ5OiAnUG9wcGlucycsIEFyaWFsO1xcbiAgLS1mZi1hY2NlbnQ6ICdHcmVhdCBWaWJlcyc7XFxufSovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLypmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7Ki9cXG59XFxuXFxubWFpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiBjbGFtcCg0NTBweCwgOTAlLCAxMDAwcHgpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDkyLCA4Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbn1cXG4uc2lkZS1iYXIgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDAuNmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYWRkLXRvZG8sXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHBhZGRpbmctaW5saW5lOiAwLjVlbTtcXG59XFxuXFxuLnRhc2stcG9wdXAge1xcbiAgcGFkZGluZzogNWVtO1xcbiAgLypkaXNwbGF5OiBub25lOyovXFxufVxcblxcbi50YXNrLWZvcm0sXFxuLnByb2plY3QtZm9ybSxcXG4uZWRpdC10b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4udG9kby1lbnRyeSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2RvLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG4udG9kby1idXR0b25zID4gKiB7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuXFxuLnByb2plY3RzLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyo6cm9vdCB7XFxuICAtLWNsci1uZXV0cmFsLTEwMDogI2ZmZjtcXG4gIC0tY2xyLXByaW1hcnktNTAwOiByZ2IoMjA0LCAxNjIsIDEwNyk7XFxuXFxuICAtLWZmLXByaW1hcnk6ICdQb3BwaW5zJywgQXJpYWw7XFxuICAtLWZmLWFjY2VudDogJ0dyZWF0IFZpYmVzJztcXG59Ki9cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKmZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTsqL1xcbn1cXG5cXG5tYWluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IGNsYW1wKDQ1MHB4LCA5MCUsIDEwMDBweCk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgOTIsIDgzKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07XFxufVxcbi5zaWRlLWJhciA+ICoge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMC42ZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5hZGQtdG9kbyxcXG4uYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDAuNWVtO1xcbn1cXG5cXG4udGFzay1wb3B1cCB7XFxuICBwYWRkaW5nOiA1ZW07XFxuICAvKmRpc3BsYXk6IG5vbmU7Ki9cXG59XFxuXFxuLnRhc2stZm9ybSxcXG4ucHJvamVjdC1mb3JtLFxcbi5lZGl0LXRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi50b2RvLWVudHJ5IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRvZG8tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxufVxcbi50b2RvLWJ1dHRvbnMgPiAqIHtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbn1cXG5cXG4ucHJvamVjdHMtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0SG9sZGVyLCBzYXZlVG9kb1RvTG9jYWwgfSBmcm9tICcuL0RPTVN0dWZmJztcblxubGV0IGNvdW50ID0gMDtcblxuY2xhc3MgVG9kb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0SG9sZGVyO1xuICAgIC8vIHRoaXMuaWQgPSBEYXRlLm5vdygpXG4gICAgdGhpcy5pZCA9IGNvdW50Kys7IC8vIG1heWJlIHRyeSBtYXRoLnJhbmRvbSBpbnN0ZWFkPz9cbiAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b0RvcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICB0aGlzLnRvRG9zLnB1c2godG9kb0l0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlVG9kb0l0ZW0oaWQpIHtcbiAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLnRvRG9zLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xuICAgIGlmICh0b2RvSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRvRG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGB0b2RvIGl0ZW0gd2l0aCBJRCAke2lkfSB3YXMgcmVtb3ZlZCBmcm9tIHByb2plY3QgJHt0aGlzLm5hbWV9IGBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG9JdGVtLCBQcm9qZWN0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdCB9IGZyb20gJy4vQXBwTG9naWMnO1xuXG5jb25zdCBteVByb2plY3RzID0gW107XG5sZXQgY3VycmVudFByb2plY3RIb2xkZXIgPSAnRGVmYXVsdCc7XG5sZXQgZGF0YUlEO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3NGcm9tU3BlY2lmaWNQcm9qZWN0KHgsIHkpIHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWRpc3BsYXknKTtcbiAgY29uc3QgdG9kb0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FbnRyeS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVudHJ5Jyk7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0VudHJ5KTtcbiAgY29uc3QgdG9kb0VudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FbnRyeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWVudHJ5LWNvbnRhaW5lcicpO1xuICB0b2RvRW50cnkuYXBwZW5kQ2hpbGQodG9kb0VudHJ5Q29udGFpbmVyKTtcblxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xuICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gYFRvLWRvOiAke215UHJvamVjdHNbeF0udG9Eb3NbeV0udGl0bGV9YDtcbiAgdG9kb0VudHJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgLy8gY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGNvbW1lbnQgdGhpcyBvdXQgbGF0ZXI/XG4gIC8vIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzY3JpcHRpb24nKTtcbiAgLy8gdG9kb0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IG15UHJvamVjdHNbeF0udG9Eb3NbeV0uZGVzY3JpcHRpb247XG4gIC8vIHRvZG9FbnRyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9EdWVEYXRlJyk7XG4gIC8vIHRvZG9EdWVEYXRlLmlubmVyVGV4dCA9IGBEdWU6ICR7Zm9ybWF0KFxuICAvLyAgIG5ldyBEYXRlKG15UHJvamVjdHNbeF0udG9Eb3NbeV0uZHVlRGF0ZSksIC8vIGlzc3VlOiBkdWUgZGF0ZSBNVVNUIGJlIHNldCBmb3IgZm9ybWF0KCkgdG8gd29yaywgb3RoZXJ3aXNlIGVycm9yXG4gIC8vICAgJ2RkIE1NTSB5eXl5J1xuICAvLyApfWA7XG4gIHRvZG9EdWVEYXRlLmlubmVyVGV4dCA9IGBEdWU6ICR7bXlQcm9qZWN0c1t4XS50b0Rvc1t5XS5kdWVEYXRlfWA7XG4gIHRvZG9FbnRyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvUHJpb3JpdHknKTtcbiAgdG9kb1ByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHtteVByb2plY3RzW3hdLnRvRG9zW3ldLnByaW9yaXR5fWA7IC8vIGNvbW1lbnQgdGhpcyBvdXQgbGF0ZXI/XG4gIHRvZG9FbnRyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvZG9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYnV0dG9ucycpO1xuICB0b2RvRW50cnkuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbnMpO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuICBlZGl0QnV0dG9uLmRhdGFzZXQuaWQgPSBteVByb2plY3RzW3hdLnRvRG9zW3ldLmlkO1xuICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICdlZGl0JztcbiAgdG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdHJhc2hCdXR0b24uY2xhc3NMaXN0LmFkZCgndHJhc2gtYnV0dG9uJyk7XG4gIHRyYXNoQnV0dG9uLmRhdGFzZXQuaWQgPSBteVByb2plY3RzW3hdLnRvRG9zW3ldLmlkO1xuICB0cmFzaEJ1dHRvbi5pbm5lckhUTUwgPSAndHJhc2gnO1xuICB0b2RvQnV0dG9ucy5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cbiAgY29uc3QgaW5mb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBpbmZvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2luZm8tYnV0dG9uJyk7XG4gIGluZm9CdXR0b24uaW5uZXJIVE1MID0gJ2luZm8nO1xuICB0b2RvQnV0dG9ucy5hcHBlbmRDaGlsZChpbmZvQnV0dG9uKTtcblxuICB0cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGF0YUlEID0gK2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpOyAvLyBUUkFTSCBCVVRUT04gRlVOQ1RJT05BTElUWVxuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gICAgbXlQcm9qZWN0c1t4XS5yZW1vdmVUb2RvSXRlbShkYXRhSUQpO1xuXG4gICAgLy8gZmlyc3Qgd2UgdXBkYXRlIHRoZSBMUyBieSByZW5kZXJpbmcgbXlQcm9qZWN0cycgdmFsdWVzIHRvIExTXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBteVByb2plY3RzLmxlbmd0aDsgaysrKSB7XG4gICAgICBpZiAobXlQcm9qZWN0c1trXS5uYW1lID09PSBjdXJyZW50UHJvamVjdEhvbGRlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShteVByb2plY3RzW2tdLm5hbWUsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHNba10pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhlbiB3ZSBkaXNwbGF5IGl0IHRvIHRoZSBET01cbiAgICBpZiAobXlQcm9qZWN0c1t4XS5uYW1lID09PSBjdXJyZW50UHJvamVjdEhvbGRlcikge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBteVByb2plY3RzW3hdLnRvRG9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QoeCwgaik7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUudGFibGUobXlQcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGRhdGFJRCA9ICtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTsgLy8gRkVUQ0hFUyBWQUxVRVMgVE8gUE9QVUxBVEUgRURJVCBGT1JNXG4gICAgY29uc29sZS5sb2coYG5vdyBlZGl0aW5nIHRvZG8gSUQ6ICR7ZGF0YUlEfWApO1xuICAgIGlmIChteVByb2plY3RzW3hdLnRvRG9zW3ldLmlkID09PSBkYXRhSUQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJykudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW3hdLnRvRG9zW3ldLnRpdGxlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZSA9XG4gICAgICAgIG15UHJvamVjdHNbeF0udG9Eb3NbeV0uZGVzY3JpcHRpb247XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpLnZhbHVlID1cbiAgICAgICAgbXlQcm9qZWN0c1t4XS50b0Rvc1t5XS5kdWVEYXRlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKS52YWx1ZSA9XG4gICAgICAgIG15UHJvamVjdHNbeF0udG9Eb3NbeV0ucHJpb3JpdHk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhSUQ7XG4gIH0pO1xufVxuXG5jb25zdCBjb25maXJtRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWVkaXQnKTsgLy8gRURJVCBCVVRUT04gRlVOQ1RJT05BTElUWVxuY29uZmlybUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1kaXNwbGF5Jyk7XG4gIGRpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbXlQcm9qZWN0c1tpXS50b0Rvcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKG15UHJvamVjdHNbaV0udG9Eb3Nbal0uaWQgPT09IGRhdGFJRCkge1xuICAgICAgICBteVByb2plY3RzW2ldLnRvRG9zW2pdLnRpdGxlID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpLnZhbHVlO1xuICAgICAgICBteVByb2plY3RzW2ldLnRvRG9zW2pdLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBteVByb2plY3RzW2ldLnRvRG9zW2pdLmR1ZURhdGUgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlJykudmFsdWU7XG4gICAgICAgIG15UHJvamVjdHNbaV0udG9Eb3Nbal0ucHJpb3JpdHkgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xuICAgICAgICAvLyBub3cgd2UgcmVuZGVyIG15UHJvamVjdHMgYW5kIHVwZGF0ZSBMUyB0aHJvdWdoIHRoZSBmb3Jsb29wcyBiZWxvd1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG15UHJvamVjdHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpZiAobXlQcm9qZWN0c1trXS5uYW1lID09PSBjdXJyZW50UHJvamVjdEhvbGRlcikge1xuICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBteVByb2plY3RzW2tdLnRvRG9zLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QoaywgbCk7XG5cbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgbXlQcm9qZWN0c1trXS5uYW1lLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHNba10pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gaW5zZXJ0UHJvamVjdFRvU2lkZUJhcigpIHtcbiAgY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWRpc3BsYXknKTtcbiAgY29uc3QgcHJvamVjdHNOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJykudmFsdWU7XG4gIGlmIChwcm9qZWN0c05hbWVJbnB1dCAhPT0gJycpIHtcbiAgICBjb25zdCBwcm9qZWN0c1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0c1NpZGViYXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcbiAgICBwcm9qZWN0c1NpZGViYXIuaW5uZXJIVE1MID0gcHJvamVjdHNOYW1lSW5wdXQ7XG4gICAgcHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RzU2lkZWJhcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvamVjdFNpZGViYXJCdXR0b24oKSB7XG4gIGNvbnN0IHByb2plY3RCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyk7XG4gIHByb2plY3RCLmZvckVhY2goKHApID0+IHtcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1kaXNwbGF5Jyk7XG4gICAgICBkaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgICAgY3VycmVudFByb2plY3RIb2xkZXIgPSBlLnRhcmdldC5pbm5lckhUTUw7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobXlQcm9qZWN0c1tpXS5uYW1lID09PSBjdXJyZW50UHJvamVjdEhvbGRlcikge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbXlQcm9qZWN0c1tpXS50b0Rvcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgZGlzcGxheVRvZG9zRnJvbVNwZWNpZmljUHJvamVjdChpLCBqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIG5vdyBpbiBwcm9qZWN0OicsIGN1cnJlbnRQcm9qZWN0SG9sZGVyKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcuY29udGVudC1oZWFkZXInXG4gICAgICApLmlubmVyVGV4dCA9IGBQcm9qZWN0OiAke2N1cnJlbnRQcm9qZWN0SG9sZGVyfWA7XG4gICAgICByZXR1cm4gY3VycmVudFByb2plY3RIb2xkZXI7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBteVByb2plY3RzLFxuICBpbnNlcnRQcm9qZWN0VG9TaWRlQmFyLFxuICBwcm9qZWN0U2lkZWJhckJ1dHRvbixcbiAgY3VycmVudFByb2plY3RIb2xkZXIsXG4gIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdCB9IGZyb20gJy4vQXBwTG9naWMnO1xuaW1wb3J0IHtcbiAgbXlQcm9qZWN0cyxcbiAgaW5zZXJ0UHJvamVjdFRvU2lkZUJhcixcbiAgcHJvamVjdFNpZGViYXJCdXR0b24sXG4gIGN1cnJlbnRQcm9qZWN0SG9sZGVyLFxuICBkaXNwbGF5VG9kb3NGcm9tU3BlY2lmaWNQcm9qZWN0LFxufSBmcm9tICcuL0RPTVN0dWZmJztcblxuLy8gY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpOyAvLyBQT1BVUCBGVU5DVElPTkFMSVRZIFNUVUZGXG5cbi8vIGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCd3YXNzdXAnKTtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbi8vIH0pO1xuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpOyAvLyB0aGlzIHdpbGwgZW5hYmxlIHBvcHVwIGZ1bmN0aW9uYWxpdHlcbi8vIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCd5bycpO1xuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuLy8gfSk7XG5cbmNvbnN0IGNyZWF0ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlJyk7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5cbmNvbnN0IERlZmF1bHRQcm9qZWN0cyA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XG5teVByb2plY3RzLnB1c2goRGVmYXVsdFByb2plY3RzKTtcblxuLy8gQ1JFQVRFIEJVVFRPTiBPTiBQUk9KRUNUIEZPUk1cbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICBjb25zdCB0aGVQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdHNOYW1lSW5wdXQpO1xuICBteVByb2plY3RzLnB1c2godGhlUHJvamVjdCk7XG5cbiAgaW5zZXJ0UHJvamVjdFRvU2lkZUJhcigpO1xuICBwcm9qZWN0U2lkZWJhckJ1dHRvbigpO1xuICBjb25zb2xlLnRhYmxlKG15UHJvamVjdHMpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChteVByb2plY3RzW2ldLm5hbWUgPT09IHByb2plY3RzTmFtZUlucHV0KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShteVByb2plY3RzW2ldLm5hbWUsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHNbaV0pKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBmZWF0dXJlcyB0byBhZGQ6IHByb2plY3QgZGVsZXRpb24gYnV0dG9uLCBtb3JlIGluZm8gcG9wdXAgZm9yIHRoZSB0b2Rvcywgc2V0IGxpbWl0IG9mIDMgcHJvamVjdHMgbWF4P1xuXG5mdW5jdGlvbiBMT0NBTF9TVE9SQUdFX1NUVUZGKCkge1xuICAvLyByZXRyaWV2ZXMgcHJvamVjdHMgZnJvbSBMUyBhbmQgcHVzaGVzIGl0IGludG8gbXlQcm9qZWN0c1xuICBmb3IgKGxldCBtID0gMTsgbSA8IE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKS5sZW5ndGg7IG0rKykge1xuICAgIGNvbnN0IG91ck9iamVjdHMgPSBKU09OLnBhcnNlKE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKVttXSk7XG4gICAgY29uc3QgcHJvamVjdEZyb21MUyA9IG5ldyBQcm9qZWN0KG91ck9iamVjdHMubmFtZSk7XG4gICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3RGcm9tTFMpO1xuICB9XG4gIC8vIHJldHJpZXZlcyB0b0RvcyBmcm9tIExTIGFuZCBwdXNoZXMgaXQgaW50byB0aGUgcHJvamVjdHMgaW4gbXlQcm9qZWN0c1xuICBmb3IgKGxldCBxID0gMDsgcSA8IE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKS5sZW5ndGg7IHErKykge1xuICAgIGNvbnN0IG91ck9iamVjdHMgPSBKU09OLnBhcnNlKE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKVtxXSk7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBvdXJPYmplY3RzLnRvRG9zLmxlbmd0aDsgcisrKSB7XG4gICAgICBjb25zdCB0b2RvRnJvbUxTID0gbmV3IFRvZG9JdGVtKFxuICAgICAgICBvdXJPYmplY3RzLnRvRG9zW3JdLnRpdGxlLFxuICAgICAgICBvdXJPYmplY3RzLnRvRG9zW3JdLmRlc2NyaXB0aW9uLFxuICAgICAgICBvdXJPYmplY3RzLnRvRG9zW3JdLmR1ZURhdGUsXG4gICAgICAgIG91ck9iamVjdHMudG9Eb3Nbcl0ucHJpb3JpdHlcbiAgICAgICk7XG4gICAgICBteVByb2plY3RzW3FdLnRvRG9zLnB1c2godG9kb0Zyb21MUyk7XG4gICAgfVxuICB9XG4gIC8vIGRpc3BsYXlzIG15UHJvamVjdHMvTFMgdmFsdWVzIGFuZCBhbHNvIHRoZSBzaWRlYmFyIHByb2plY3QgYnV0dG9ucyB0byB0aGUgRE9NOlxuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBteVByb2plY3RzLmxlbmd0aDsgaysrKSB7XG4gICAgY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWRpc3BsYXknKTtcbiAgICBjb25zdCBwcm9qZWN0c1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0c1NpZGViYXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcbiAgICBwcm9qZWN0c1NpZGViYXIuaW5uZXJIVE1MID0gbXlQcm9qZWN0c1trXS5uYW1lO1xuICAgIHByb2plY3RzRGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0c1NpZGViYXIpO1xuICAgIHByb2plY3RTaWRlYmFyQnV0dG9uKCk7XG5cbiAgICBmb3IgKGxldCBsID0gMDsgbCA8IG15UHJvamVjdHNba10udG9Eb3MubGVuZ3RoOyBsKyspIHtcbiAgICAgIGlmIChteVByb2plY3RzW2tdLm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0SG9sZGVyKSB7XG4gICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QoaywgbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5MT0NBTF9TVE9SQUdFX1NUVUZGKCk7XG5cbi8vIENSRUFURSBCVVRUT04gT04gVE9ETyBGT1JNXG5jcmVhdGVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG9JdGVtKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlJbnB1dFxuICApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1kaXNwbGF5Jyk7XG4gICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAobXlQcm9qZWN0c1tpXS5uYW1lID09PSBjdXJyZW50UHJvamVjdEhvbGRlcikge1xuICAgICAgbXlQcm9qZWN0c1tpXS5hZGRUb2RvSXRlbSh0b2RvKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG15UHJvamVjdHNbaV0udG9Eb3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChteVByb2plY3RzW2ldLm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0SG9sZGVyKSB7XG4gICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QoaSwgaik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG15UHJvamVjdHNbaV0ubmFtZSwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0c1tpXSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLnRhYmxlKG15UHJvamVjdHMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=