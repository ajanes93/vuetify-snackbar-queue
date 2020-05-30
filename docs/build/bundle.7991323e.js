/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "build/" + ({"compiler":"compiler"}[chunkId]||chunkId) + "." + {"compiler":"38ee72f1"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VSnackbarQueue.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VSnackbarQueue.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\n * A wrapper component for VSnackbar which supports queueing functionality\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VSnackbarQueue',\n  data: function data() {\n    return {\n      processing: false,\n      timeoutId: false\n    };\n  },\n  props: {\n    /**\n     * Position snackbar absolute\n     */\n    absolute: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * Auto height prop for snackbar\n     */\n    autoHeight: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * Position snackbar bottom\n     */\n    bottom: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * The color of the close button\n     */\n    closeButtonColor: {\n      type: String,\n      default: 'white'\n    },\n\n    /**\n     * The icon of the close button\n     */\n    closeButtonIcon: {\n      type: String,\n      default: 'close'\n    },\n\n    /**\n     * Array for items to display [{id: '', color: '', message: ''}]\n     */\n    items: {\n      type: Array,\n      required: true\n    },\n\n    /**\n     * Position snackbar left\n     */\n    left: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * Position snackbar multiline\n     */\n    multiLine: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * The color of the next button\n     */\n    nextButtonColor: {\n      type: String,\n      default: 'white'\n    },\n\n    /**\n     * The text to display in the next button\n     */\n    nextButtonText: {\n      type: String,\n      default: 'Next'\n    },\n\n    /**\n     * Position snackbar right\n     */\n    right: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * Number of milliseconds to display each snackbar for\n     */\n    timeout: {\n      type: Number,\n      default: 6000\n    },\n\n    /**\n     * Position snackbar top\n     */\n    top: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\n     * Position snackbar vertical\n     */\n    vertical: {\n      type: Boolean,\n      default: false\n    }\n  },\n  methods: {\n    processItems: function processItems() {\n      var vm = this;\n      vm.processing = true;\n\n      if (vm.items && Array.isArray(vm.items) && vm.items.length > 0) {\n        var item = vm.items[0];\n        return vm.timeoutId = setTimeout(function () {\n          vm.removeItem(item.id);\n        }, vm.timeout);\n      }\n\n      vm.processing = false;\n    },\n    removeItem: function removeItem(id) {\n      var vm = this;\n      clearTimeout(vm.timeoutId);\n      /**\n       * Emit remove event\n       * @event remove\n       * @type {number}\n       */\n\n      this.$emit('remove', id);\n\n      if (vm.items.length > 0) {\n        return vm.processItems();\n      }\n    }\n  },\n  watch: {\n    items: function items() {\n      this.processItems();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"33453fe7-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VSnackbarQueue.vue?vue&type=template&id=64c9bd66&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33453fe7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VSnackbarQueue.vue?vue&type=template&id=64c9bd66& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    _vm._l(_vm.items, function(item, i) {\n      return _c(\n        \"v-snackbar\",\n        {\n          key: item.id,\n          attrs: {\n            value: i === 0,\n            timeout: _vm.timeout,\n            color: item.color,\n            top: _vm.top,\n            right: _vm.right,\n            absolute: _vm.absolute,\n            \"auto-height\": _vm.autoHeight,\n            bottom: _vm.bottom,\n            left: _vm.left,\n            \"multi-line\": _vm.multiLine,\n            vertical: _vm.vertical\n          }\n        },\n        [\n          _vm._v(\" \" + _vm._s(item.message) + \" \"),\n          _vm.items.length > 1\n            ? _c(\n                \"v-btn\",\n                {\n                  attrs: { color: _vm.nextButtonColor, flat: \"\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.removeItem(item.id)\n                    }\n                  }\n                },\n                [\n                  _vm._v(\n                    \" \" +\n                      _vm._s(_vm.nextButtonText) +\n                      \" (\" +\n                      _vm._s(_vm.items.length - 1) +\n                      \" more) \"\n                  )\n                ]\n              )\n            : _c(\n                \"v-btn\",\n                {\n                  attrs: { icon: \"\", color: _vm.closeButtonColor, flat: \"\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.removeItem(item.id)\n                    }\n                  }\n                },\n                [_c(\"v-icon\", [_vm._v(_vm._s(_vm.closeButtonIcon))])],\n                1\n              )\n        ],\n        1\n      )\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2233453fe7-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=VSnackbarQueue&file=.%2FVSnackbarQueue.vue&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/VSnackbarQueue.md":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=VSnackbarQueue&file=.%2FVSnackbarQueue.vue&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/VSnackbarQueue.md ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '# VSnackbarQueue\\n\\n> Simple plugin for queueing v-snackbars in Vuetify\\n>\\n> -   Extends VSnackbar component and adds items\\\\[] prop\\n> -   Queues Snackbars displaying one at a time \\n\\n### Plugin Usage\\n\\n> Import as plugin in your main.js file\\n\\n```text\\n//main.js\\nimport Vue from \\'vue\\'\\nimport VuetifySnackbarQueue from \\'vuetify-snackbar-queue\\'\\n\\nVue.use(VuetifySnackbarQueue)\\n```\\n\\n### Example'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n      <v-container grid-list-lg fluid>\\n        <v-layout wrap>\\n          <v-flex xs2>\\n            <v-btn color=\"primary\" @click=\"addItem\">Add to Queue</v-btn>\\n          </v-flex>\\n        </v-layout>\\n        <VSnackbarQueue :items=\"items\" top right @remove=\"removeItem\"></VSnackbarQueue>\\n      </v-container>\\n</template>\\n\\n<script>\\nexport default {\\n  name: \"App\",\\n  data: () => ({\\n    items: [],\\n    colors: [\"warning\", \"error\", \"info\", \"success\"]\\n  }),\\n  methods: {\\n    addItem() {\\n      const vm = this;\\n      const index = vm.randomInt(0, vm.colors.length - 1);\\n      vm.items.push({\\n        id: vm.uniqueId(\"item_\"),\\n        color: vm.colors[index],\\n        message: \"This is an example\"\\n      });\\n    },\\n    removeItem(id) {\\n      const vm = this;\\n      const index = vm.items.findIndex(item => item.id === id);\\n\\n      if (index !== -1) {\\n        vm.items.splice(index, 1);\\n      }\\n    },\\n    randomInt(min, max) {\\n      return Math.floor(Math.random() * (max - min + 1)) + min;\\n    },\\n    uniqueId: prefix =>\\n      `${prefix}_` +\\n      Math.random()\\n        .toString(36)\\n        .substr(2, 9)\\n  }\\n};\\n</script>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n\\n;return {\\n  template: \"\\\\n      <v-container grid-list-lg fluid>\\\\n        <v-layout wrap>\\\\n          <v-flex xs2>\\\\n            <v-btn color=\\\\\"primary\\\\\" @click=\\\\\"addItem\\\\\">Add to Queue</v-btn>\\\\n          </v-flex>\\\\n        </v-layout>\\\\n        <VSnackbarQueue :items=\\\\\"items\\\\\" top right @remove=\\\\\"removeItem\\\\\"></VSnackbarQueue>\\\\n      </v-container>\\\\n\",\\n  \\n  name: \"App\",\\n  data: function () { return ({\\n    items: [],\\n    colors: [\"warning\", \"error\", \"info\", \"success\"]\\n  }); },\\n  methods: {\\n    addItem: function addItem() {\\n      var vm = this;\\n      var index = vm.randomInt(0, vm.colors.length - 1);\\n      vm.items.push({\\n        id: vm.uniqueId(\"item_\"),\\n        color: vm.colors[index],\\n        message: \"This is an example\"\\n      });\\n    },\\n    removeItem: function removeItem(id) {\\n      var vm = this;\\n      var index = vm.items.findIndex(function (item) { return item.id === id; });\\n\\n      if (index !== -1) {\\n        vm.items.splice(index, 1);\\n      }\\n    },\\n    randomInt: function randomInt(min, max) {\\n      return Math.floor(Math.random() * (max - min + 1)) + min;\\n    },\\n    uniqueId: function (prefix) { return prefix + \"_\" +\\n      Math.random()\\n        .toString(36)\\n        .substr(2, 9); }\\n  }\\n}\\n;\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.md?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=VSnackbarQueue&file=.%252FVSnackbarQueue.vue&shouldShowDefaultExample=false&customLangs=vue%257Cjs%257Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/VSnackbarQueue.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/VSnackbarQueue.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'displayName': 'VSnackbarQueue',\n    'description': 'A wrapper component for VSnackbar which supports queueing functionality',\n    'tags': {},\n    'exportName': 'default',\n    'props': [\n        {\n            'name': 'items',\n            'description': 'Array for items to display [{id: \\'\\', color: \\'\\', message: \\'\\'}]',\n            'type': { 'name': 'array' },\n            'required': true\n        },\n        {\n            'name': 'absolute',\n            'description': 'Position snackbar absolute',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'autoHeight',\n            'description': 'Auto height prop for snackbar',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'bottom',\n            'description': 'Position snackbar bottom',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'closeButtonColor',\n            'description': 'The color of the close button',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'white\\''\n            }\n        },\n        {\n            'name': 'closeButtonIcon',\n            'description': 'The icon of the close button',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'close\\''\n            }\n        },\n        {\n            'name': 'left',\n            'description': 'Position snackbar left',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'multiLine',\n            'description': 'Position snackbar multiline',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'nextButtonColor',\n            'description': 'The color of the next button',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'white\\''\n            }\n        },\n        {\n            'name': 'nextButtonText',\n            'description': 'The text to display in the next button',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'Next\\''\n            }\n        },\n        {\n            'name': 'right',\n            'description': 'Position snackbar right',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'timeout',\n            'description': 'Number of milliseconds to display each snackbar for',\n            'type': { 'name': 'number' },\n            'defaultValue': {\n                'func': false,\n                'value': '6000'\n            }\n        },\n        {\n            'name': 'top',\n            'description': 'Position snackbar top',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'vertical',\n            'description': 'Position snackbar vertical',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        }\n    ],\n    'events': {\n        'remove': {\n            'name': 'remove',\n            'description': 'Emit remove event',\n            'type': { 'names': ['number'] }\n        }\n    },\n    'methods': void 0,\n    'slots': void 0,\n    'examples': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=VSnackbarQueue&file=.%2FVSnackbarQueue.vue&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/VSnackbarQueue.md */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=VSnackbarQueue&file=.%2FVSnackbarQueue.vue&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/VSnackbarQueue.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.vue?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./src/components/VSnackbarQueue.vue":
/*!*******************************************!*\
  !*** ./src/components/VSnackbarQueue.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VSnackbarQueue_vue_vue_type_template_id_64c9bd66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSnackbarQueue.vue?vue&type=template&id=64c9bd66& */ \"./src/components/VSnackbarQueue.vue?vue&type=template&id=64c9bd66&\");\n/* harmony import */ var _VSnackbarQueue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VSnackbarQueue.vue?vue&type=script&lang=js& */ \"./src/components/VSnackbarQueue.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VSnackbarQueue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VSnackbarQueue_vue_vue_type_template_id_64c9bd66___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VSnackbarQueue_vue_vue_type_template_id_64c9bd66___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VSnackbarQueue.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.vue?");

/***/ }),

/***/ "./src/components/VSnackbarQueue.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/VSnackbarQueue.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSnackbarQueue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./VSnackbarQueue.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VSnackbarQueue.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSnackbarQueue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.vue?");

/***/ }),

/***/ "./src/components/VSnackbarQueue.vue?vue&type=template&id=64c9bd66&":
/*!**************************************************************************!*\
  !*** ./src/components/VSnackbarQueue.vue?vue&type=template&id=64c9bd66& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_33453fe7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSnackbarQueue_vue_vue_type_template_id_64c9bd66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"33453fe7-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./VSnackbarQueue.vue?vue&type=template&id=64c9bd66& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"33453fe7-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VSnackbarQueue.vue?vue&type=template&id=64c9bd66&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_33453fe7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSnackbarQueue_vue_vue_type_template_id_64c9bd66___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_33453fe7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSnackbarQueue_vue_vue_type_template_id_64c9bd66___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/VSnackbarQueue.vue?");

/***/ }),

/***/ "./styleguidist/global.requires.js":
/*!*****************************************!*\
  !*** ./styleguidist/global.requires.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ \"./node_modules/vuetify/dist/vuetify.js\");\n/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ \"./node_modules/vuetify/dist/vuetify.min.css\");\n/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  iconFont: 'md'\n});\n\n//# sourceURL=webpack:///./styleguidist/global.requires.js?");

/***/ }),

/***/ "./styleguidist/styleguide.root.js":
/*!*****************************************!*\
  !*** ./styleguidist/styleguide.root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (previewComponent) {\n  // https://vuejs.org/v2/guide/render-function.html\n  return {\n    render: function render(createElement) {\n      return createElement('v-app', {\n        props: {\n          id: 'v-app'\n        }\n      }, [createElement(Object.assign(previewComponent))]);\n    }\n  };\n});\n\n//# sourceURL=webpack:///./styleguidist/styleguide.root.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi ./styleguidist/global.requires.js ./node_modules/vue-styleguidist/lib/client/index ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/andres/js/personal/vuetify-snackbar-queue/styleguidist/global.requires.js */\"./styleguidist/global.requires.js\");\nmodule.exports = __webpack_require__(/*! /home/andres/js/personal/vuetify-snackbar-queue/node_modules/vue-styleguidist/lib/client/index */\"./node_modules/vue-styleguidist/lib/client/index.js\");\n\n\n//# sourceURL=webpack:///multi_./styleguidist/global.requires.js_./node_modules/vue-styleguidist/lib/client/index?");

/***/ })

/******/ });