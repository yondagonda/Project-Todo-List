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


class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = _DOMStuff__WEBPACK_IMPORTED_MODULE_0__.currentProjectHolder;
    this.id = Date.now();
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
    } else {
      console.log(`could not find todoitem with ID ${id} in project`);
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
  todoTitle.innerText = myProjects[x].toDos[y].title;
  todoEntryContainer.appendChild(todoTitle);

  const todoDescription = document.createElement('div');
  todoDescription.classList.add('todoDescription');
  todoDescription.innerText = myProjects[x].toDos[y].description;
  todoEntryContainer.appendChild(todoDescription);

  const todoDueDate = document.createElement('div'); // this will need updating/changing
  todoDueDate.classList.add('todoDueDate');
  todoDueDate.innerText = myProjects[x].toDos[y].dueDate;
  todoEntryContainer.appendChild(todoDueDate);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('todoPriority');
  todoPriority.innerText = myProjects[x].toDos[y].priority;
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
    }
    return dataID;
  });
}

const confirmEditButton = document.getElementById('confirm-edit');
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
        console.log(myProjects); // now we render myProjects through the forloops below

        for (let k = 0; k < myProjects.length; k++) {
          if (myProjects[k].name === currentProjectHolder) {
            for (let l = 0; l < myProjects[k].toDos.length; l++) {
              displayTodosFromSpecificProject(k, l);
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
  (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.projectSidebarButton)(); // compounding click issue present
  console.table(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects);
});

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

  if (_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.currentProjectHolder === 'Default') {
    for (let k = 0; k < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[0].toDos.length; k++) {
      (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.displayTodosFromSpecificProject)(0, k);
    }
  } else {
    for (let i = 0; i < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects.length; i++) {
      for (let j = 0; j < _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].toDos.length; j++) {
        if (_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects[i].name === _DOMStuff__WEBPACK_IMPORTED_MODULE_2__.currentProjectHolder) {
          (0,_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.displayTodosFromSpecificProject)(i, j);
        }
      }
    }
  }
  console.table(_DOMStuff__WEBPACK_IMPORTED_MODULE_2__.myProjects);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25DLHNEQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBTztBQUNoQyxFQUFFLHNEQUFlOztBQUVqQixFQUFFLGlFQUFzQjtBQUN4QixFQUFFLCtEQUFvQixJQUFJO0FBQzFCLGdCQUFnQixpREFBVTtBQUMxQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixJQUFJLHdEQUFpQixFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRLGlEQUFVLGFBQWEsMkRBQW9CO0FBQ25ELE1BQU0saURBQVU7QUFDaEI7QUFDQTs7QUFFQSxNQUFNLDJEQUFvQjtBQUMxQixvQkFBb0IsSUFBSSxpRUFBMEIsRUFBRTtBQUNwRCxNQUFNLDBFQUErQjtBQUNyQztBQUNBLElBQUk7QUFDSixvQkFBb0IsSUFBSSx3REFBaUIsRUFBRTtBQUMzQyxzQkFBc0IsSUFBSSxpREFBVSxrQkFBa0I7QUFDdEQsWUFBWSxpREFBVSxhQUFhLDJEQUFvQjtBQUN2RCxVQUFVLDBFQUErQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBVTtBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvQXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvRE9NU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKjpyb290IHtcXG4gIC0tY2xyLW5ldXRyYWwtMTAwOiAjZmZmO1xcbiAgLS1jbHItcHJpbWFyeS01MDA6IHJnYigyMDQsIDE2MiwgMTA3KTtcXG5cXG4gIC0tZmYtcHJpbWFyeTogJ1BvcHBpbnMnLCBBcmlhbDtcXG4gIC0tZmYtYWNjZW50OiAnR3JlYXQgVmliZXMnO1xcbn0qL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpOyovXFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogY2xhbXAoNDUwcHgsIDkwJSwgMTAwMHB4KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCA5MiwgODMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJlbTtcXG59XFxuLnNpZGUtYmFyID4gKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAwLjZlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmFkZC10b2RvLFxcbi5hZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBwYWRkaW5nLWlubGluZTogMC41ZW07XFxufVxcblxcbi50YXNrLXBvcHVwIHtcXG4gIHBhZGRpbmc6IDVlbTtcXG4gIC8qZGlzcGxheTogbm9uZTsqL1xcbn1cXG5cXG4udGFzay1mb3JtLFxcbi5wcm9qZWN0LWZvcm0sXFxuLmVkaXQtdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLnRvZG8tZW50cnkge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG9kby1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG59XFxuLnRvZG8tYnV0dG9ucyA+ICoge1xcbiAgcGFkZGluZzogMC40ZW07XFxufVxcblxcbi5wcm9qZWN0cy1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7OztFQU1FOztBQUVGO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qOnJvb3Qge1xcbiAgLS1jbHItbmV1dHJhbC0xMDA6ICNmZmY7XFxuICAtLWNsci1wcmltYXJ5LTUwMDogcmdiKDIwNCwgMTYyLCAxMDcpO1xcblxcbiAgLS1mZi1wcmltYXJ5OiAnUG9wcGlucycsIEFyaWFsO1xcbiAgLS1mZi1hY2NlbnQ6ICdHcmVhdCBWaWJlcyc7XFxufSovXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLypmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7Ki9cXG59XFxuXFxubWFpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiBjbGFtcCg0NTBweCwgOTAlLCAxMDAwcHgpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDkyLCA4Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbn1cXG4uc2lkZS1iYXIgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDAuNmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYWRkLXRvZG8sXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHBhZGRpbmctaW5saW5lOiAwLjVlbTtcXG59XFxuXFxuLnRhc2stcG9wdXAge1xcbiAgcGFkZGluZzogNWVtO1xcbiAgLypkaXNwbGF5OiBub25lOyovXFxufVxcblxcbi50YXNrLWZvcm0sXFxuLnByb2plY3QtZm9ybSxcXG4uZWRpdC10b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4udG9kby1lbnRyeSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2RvLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG4udG9kby1idXR0b25zID4gKiB7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuXFxuLnByb2plY3RzLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdEhvbGRlciB9IGZyb20gJy4vRE9NU3R1ZmYnO1xuXG5jbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdElEID0gY3VycmVudFByb2plY3RIb2xkZXI7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9Eb3MgPSBbXTtcbiAgfVxuXG4gIGFkZFRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgdGhpcy50b0Rvcy5wdXNoKHRvZG9JdGVtKTtcbiAgfVxuXG4gIHJlbW92ZVRvZG9JdGVtKGlkKSB7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy50b0Rvcy5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICBpZiAodG9kb0luZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50b0Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgdG9kbyBpdGVtIHdpdGggSUQgJHtpZH0gd2FzIHJlbW92ZWQgZnJvbSBwcm9qZWN0ICR7dGhpcy5uYW1lfSBgXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgY291bGQgbm90IGZpbmQgdG9kb2l0ZW0gd2l0aCBJRCAke2lkfSBpbiBwcm9qZWN0YCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG9JdGVtLCBQcm9qZWN0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5pbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdCB9IGZyb20gJy4vQXBwTG9naWMnO1xuXG5jb25zdCBteVByb2plY3RzID0gW107XG5sZXQgY3VycmVudFByb2plY3RIb2xkZXIgPSAnRGVmYXVsdCc7XG5sZXQgZGF0YUlEO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3NGcm9tU3BlY2lmaWNQcm9qZWN0KHgsIHkpIHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWRpc3BsYXknKTtcbiAgY29uc3QgdG9kb0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FbnRyeS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVudHJ5Jyk7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0VudHJ5KTtcbiAgY29uc3QgdG9kb0VudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FbnRyeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWVudHJ5LWNvbnRhaW5lcicpO1xuICB0b2RvRW50cnkuYXBwZW5kQ2hpbGQodG9kb0VudHJ5Q29udGFpbmVyKTtcblxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xuICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gbXlQcm9qZWN0c1t4XS50b0Rvc1t5XS50aXRsZTtcbiAgdG9kb0VudHJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzY3JpcHRpb24nKTtcbiAgdG9kb0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IG15UHJvamVjdHNbeF0udG9Eb3NbeV0uZGVzY3JpcHRpb247XG4gIHRvZG9FbnRyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIHRoaXMgd2lsbCBuZWVkIHVwZGF0aW5nL2NoYW5naW5nXG4gIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9EdWVEYXRlJyk7XG4gIHRvZG9EdWVEYXRlLmlubmVyVGV4dCA9IG15UHJvamVjdHNbeF0udG9Eb3NbeV0uZHVlRGF0ZTtcbiAgdG9kb0VudHJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcblxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG9Qcmlvcml0eScpO1xuICB0b2RvUHJpb3JpdHkuaW5uZXJUZXh0ID0gbXlQcm9qZWN0c1t4XS50b0Rvc1t5XS5wcmlvcml0eTtcbiAgdG9kb0VudHJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG5cbiAgY29uc3QgdG9kb0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgndG9kby1idXR0b25zJyk7XG4gIHRvZG9FbnRyeS5hcHBlbmRDaGlsZCh0b2RvQnV0dG9ucyk7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG4gIGVkaXRCdXR0b24uZGF0YXNldC5pZCA9IG15UHJvamVjdHNbeF0udG9Eb3NbeV0uaWQ7XG4gIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJ2VkaXQnO1xuICB0b2RvQnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0cmFzaC1idXR0b24nKTtcbiAgdHJhc2hCdXR0b24uZGF0YXNldC5pZCA9IG15UHJvamVjdHNbeF0udG9Eb3NbeV0uaWQ7XG4gIHRyYXNoQnV0dG9uLmlubmVySFRNTCA9ICd0cmFzaCc7XG4gIHRvZG9CdXR0b25zLmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICBjb25zdCBpbmZvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGluZm9CdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5mby1idXR0b24nKTtcbiAgaW5mb0J1dHRvbi5pbm5lckhUTUwgPSAnaW5mbyc7XG4gIHRvZG9CdXR0b25zLmFwcGVuZENoaWxkKGluZm9CdXR0b24pO1xuXG4gIHRyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkYXRhSUQgPSArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7IC8vIFRSQVNIIEJVVFRPTiBGVU5DVElPTkFMSVRZXG4gICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBteVByb2plY3RzW3hdLnJlbW92ZVRvZG9JdGVtKGRhdGFJRCk7XG4gICAgaWYgKG15UHJvamVjdHNbeF0ubmFtZSA9PT0gY3VycmVudFByb2plY3RIb2xkZXIpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbXlQcm9qZWN0c1t4XS50b0Rvcy5sZW5ndGg7IGorKykge1xuICAgICAgICBkaXNwbGF5VG9kb3NGcm9tU3BlY2lmaWNQcm9qZWN0KHgsIGopO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLnRhYmxlKG15UHJvamVjdHMpO1xuICB9KTtcblxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkYXRhSUQgPSArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7IC8vIEZFVENIRVMgVkFMVUVTIFRPIFBPUFVMQVRFIEVESVQgRk9STVxuICAgIGNvbnNvbGUubG9nKGBub3cgZWRpdGluZyB0b2RvIElEOiAke2RhdGFJRH1gKTtcbiAgICBpZiAobXlQcm9qZWN0c1t4XS50b0Rvc1t5XS5pZCA9PT0gZGF0YUlEKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpLnZhbHVlID1cbiAgICAgICAgbXlQcm9qZWN0c1t4XS50b0Rvc1t5XS50aXRsZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJykudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW3hdLnRvRG9zW3ldLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUlEO1xuICB9KTtcbn1cblxuY29uc3QgY29uZmlybUVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1lZGl0Jyk7XG5jb25maXJtRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWRpc3BsYXknKTtcbiAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG15UHJvamVjdHNbaV0udG9Eb3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChteVByb2plY3RzW2ldLnRvRG9zW2pdLmlkID09PSBkYXRhSUQpIHtcbiAgICAgICAgbXlQcm9qZWN0c1tpXS50b0Rvc1tqXS50aXRsZSA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbXlQcm9qZWN0c1tpXS50b0Rvc1tqXS5kZXNjcmlwdGlvbiA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7IC8vIG5vdyB3ZSByZW5kZXIgbXlQcm9qZWN0cyB0aHJvdWdoIHRoZSBmb3Jsb29wcyBiZWxvd1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGlmIChteVByb2plY3RzW2tdLm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0SG9sZGVyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IG15UHJvamVjdHNba10udG9Eb3MubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgZGlzcGxheVRvZG9zRnJvbVNwZWNpZmljUHJvamVjdChrLCBsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpbnNlcnRQcm9qZWN0VG9TaWRlQmFyKCkge1xuICBjb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtZGlzcGxheScpO1xuICBjb25zdCBwcm9qZWN0c05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZTtcblxuICBpZiAocHJvamVjdHNOYW1lSW5wdXQgIT09ICcnKSB7XG4gICAgY29uc3QgcHJvamVjdHNTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHNTaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgcHJvamVjdHNTaWRlYmFyLmlubmVySFRNTCA9IHByb2plY3RzTmFtZUlucHV0O1xuICAgIHByb2plY3RzRGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0c1NpZGViYXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RTaWRlYmFyQnV0dG9uKCkge1xuICBjb25zdCBwcm9qZWN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpO1xuICBwcm9qZWN0Qi5mb3JFYWNoKChwKSA9PiB7XG4gICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZGlzcGxheScpO1xuICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGN1cnJlbnRQcm9qZWN0SG9sZGVyID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG15UHJvamVjdHNbaV0ubmFtZSA9PT0gY3VycmVudFByb2plY3RIb2xkZXIpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG15UHJvamVjdHNbaV0udG9Eb3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QoaSwgaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnWW91IGFyZSBub3cgaW4gcHJvamVjdDonLCBjdXJyZW50UHJvamVjdEhvbGRlcik7XG4gICAgICByZXR1cm4gY3VycmVudFByb2plY3RIb2xkZXI7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBteVByb2plY3RzLFxuICBpbnNlcnRQcm9qZWN0VG9TaWRlQmFyLFxuICBwcm9qZWN0U2lkZWJhckJ1dHRvbixcbiAgY3VycmVudFByb2plY3RIb2xkZXIsXG4gIGRpc3BsYXlUb2Rvc0Zyb21TcGVjaWZpY1Byb2plY3QsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdCB9IGZyb20gJy4vQXBwTG9naWMnO1xuaW1wb3J0IHtcbiAgLy8gbXlUb2RvcywgVEhJUyBIQVMgQkVDT01FIE9CU09MRVRFLCBERUxFVEU/XG4gIG15UHJvamVjdHMsXG4gIGluc2VydFByb2plY3RUb1NpZGVCYXIsXG4gIHByb2plY3RTaWRlYmFyQnV0dG9uLFxuICBjdXJyZW50UHJvamVjdEhvbGRlcixcbiAgZGlzcGxheVRvZG9zRnJvbVNwZWNpZmljUHJvamVjdCxcbn0gZnJvbSAnLi9ET01TdHVmZic7XG5cbi8vIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTsgLy8gUE9QVVAgRlVOQ1RJT05BTElUWSBTVFVGRlxuXG4vLyBhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnd2Fzc3VwJyk7XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4vLyB9KTtcbi8vIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTsgLy8gdGhpcyB3aWxsIGVuYWJsZSBwb3B1cCBmdW5jdGlvbmFsaXR5XG4vLyBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygneW8nKTtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbi8vIH0pO1xuXG5jb25zdCBjcmVhdGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuXG5jb25zdCBEZWZhdWx0UHJvamVjdHMgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xubXlQcm9qZWN0cy5wdXNoKERlZmF1bHRQcm9qZWN0cyk7XG5cbi8vIENSRUFURSBCVVRUT04gT04gUFJPSkVDVCBGT1JNXG5jcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgY29uc3QgdGhlUHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RzTmFtZUlucHV0KTtcbiAgbXlQcm9qZWN0cy5wdXNoKHRoZVByb2plY3QpO1xuXG4gIGluc2VydFByb2plY3RUb1NpZGVCYXIoKTtcbiAgcHJvamVjdFNpZGViYXJCdXR0b24oKTsgLy8gY29tcG91bmRpbmcgY2xpY2sgaXNzdWUgcHJlc2VudFxuICBjb25zb2xlLnRhYmxlKG15UHJvamVjdHMpO1xufSk7XG5cbi8vIENSRUFURSBCVVRUT04gT04gVE9ETyBGT1JNXG5jcmVhdGVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG9JdGVtKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlJbnB1dFxuICApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1kaXNwbGF5Jyk7XG4gICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAobXlQcm9qZWN0c1tpXS5uYW1lID09PSBjdXJyZW50UHJvamVjdEhvbGRlcikge1xuICAgICAgbXlQcm9qZWN0c1tpXS5hZGRUb2RvSXRlbSh0b2RvKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudFByb2plY3RIb2xkZXIgPT09ICdEZWZhdWx0Jykge1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbXlQcm9qZWN0c1swXS50b0Rvcy5sZW5ndGg7IGsrKykge1xuICAgICAgZGlzcGxheVRvZG9zRnJvbVNwZWNpZmljUHJvamVjdCgwLCBrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG15UHJvamVjdHNbaV0udG9Eb3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKG15UHJvamVjdHNbaV0ubmFtZSA9PT0gY3VycmVudFByb2plY3RIb2xkZXIpIHtcbiAgICAgICAgICBkaXNwbGF5VG9kb3NGcm9tU3BlY2lmaWNQcm9qZWN0KGksIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUudGFibGUobXlQcm9qZWN0cyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==