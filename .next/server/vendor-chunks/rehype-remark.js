"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-remark";
exports.ids = ["vendor-chunks/rehype-remark"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-remark/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rehype-remark/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var hast_util_to_mdast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-to-mdast */ \"(ssr)/./node_modules/hast-util-to-mdast/lib/index.js\");\n/**\n * @typedef {import('hast-util-to-mdast').Options} Options\n * @typedef {import('hast').Root} HastRoot\n * @typedef {import('mdast').Root} MdastRoot\n * @typedef {import('unified').Processor<any, any, any, any>} Processor\n */\n\n\n\n/**\n * Plugin to bridge or mutate to rehype.\n *\n * If a destination is given, runs the destination with the new mdast\n * tree (bridge-mode).\n * Without destination, returns the mdast tree: further plugins run on that\n * tree (mutate-mode).\n *\n * @param destination\n *   Optional unified processor.\n * @param options\n *   Options passed to `hast-util-to-mdast`.\n */\nconst rehypeRemark =\n  /**\n   * @type {(import('unified').Plugin<[Processor, Options?], HastRoot> & import('unified').Plugin<[Options?]|void[], HastRoot, MdastRoot>)}\n   */\n  (\n    /**\n     * @param {Processor|Options} [destination]\n     * @param {Options} [options]\n     */\n    function (destination, options) {\n      /** @type {Options|undefined} */\n      let settings\n      /** @type {Processor|undefined} */\n      let processor\n\n      if (typeof destination === 'function') {\n        processor = destination\n        settings = options || {}\n      } else {\n        settings = destination || {}\n      }\n\n      if (settings.document === undefined || settings.document === null) {\n        settings = Object.assign({}, settings, {document: true})\n      }\n\n      return processor ? bridge(processor, settings) : mutate(settings)\n    }\n  )\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rehypeRemark);\n\n/**\n * Bridge-mode.\n * Runs the destination with the new mdast tree.\n *\n * @type {import('unified').Plugin<[Processor, Options?], HastRoot>}\n */\nfunction bridge(destination, options) {\n  return (node, file, next) => {\n    destination.run((0,hast_util_to_mdast__WEBPACK_IMPORTED_MODULE_0__.toMdast)(node, options), file, (error) => {\n      next(error)\n    })\n  }\n}\n\n/**\n * Mutate-mode.\n * Further transformers run on the mdast tree.\n *\n * @type {import('unified').Plugin<[Options?]|void[], HastRoot, MdastRoot>}\n */\nfunction mutate(options = {}) {\n  return (node) => {\n    const result = /** @type {MdastRoot} */ ((0,hast_util_to_mdast__WEBPACK_IMPORTED_MODULE_0__.toMdast)(node, options))\n    return result\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJlbWFyay9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsaURBQWlEO0FBQzlEOztBQUUwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsYUFBYSxlQUFlO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQU87QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDhCQUE4QixXQUFXLElBQUksMkRBQU87QUFDcEQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJlbWFyay9saWIvaW5kZXguanM/MDY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC10by1tZGFzdCcpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBIYXN0Um9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBNZGFzdFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaWZpZWQnKS5Qcm9jZXNzb3I8YW55LCBhbnksIGFueSwgYW55Pn0gUHJvY2Vzc29yXG4gKi9cblxuaW1wb3J0IHt0b01kYXN0fSBmcm9tICdoYXN0LXV0aWwtdG8tbWRhc3QnXG5cbi8qKlxuICogUGx1Z2luIHRvIGJyaWRnZSBvciBtdXRhdGUgdG8gcmVoeXBlLlxuICpcbiAqIElmIGEgZGVzdGluYXRpb24gaXMgZ2l2ZW4sIHJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBtZGFzdFxuICogdHJlZSAoYnJpZGdlLW1vZGUpLlxuICogV2l0aG91dCBkZXN0aW5hdGlvbiwgcmV0dXJucyB0aGUgbWRhc3QgdHJlZTogZnVydGhlciBwbHVnaW5zIHJ1biBvbiB0aGF0XG4gKiB0cmVlIChtdXRhdGUtbW9kZSkuXG4gKlxuICogQHBhcmFtIGRlc3RpbmF0aW9uXG4gKiAgIE9wdGlvbmFsIHVuaWZpZWQgcHJvY2Vzc29yLlxuICogQHBhcmFtIG9wdGlvbnNcbiAqICAgT3B0aW9ucyBwYXNzZWQgdG8gYGhhc3QtdXRpbC10by1tZGFzdGAuXG4gKi9cbmNvbnN0IHJlaHlwZVJlbWFyayA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KGltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbUHJvY2Vzc29yLCBPcHRpb25zP10sIEhhc3RSb290PiAmIGltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dfHZvaWRbXSwgSGFzdFJvb3QsIE1kYXN0Um9vdD4pfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UHJvY2Vzc29yfE9wdGlvbnN9IFtkZXN0aW5hdGlvbl1cbiAgICAgKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICAgICAgLyoqIEB0eXBlIHtPcHRpb25zfHVuZGVmaW5lZH0gKi9cbiAgICAgIGxldCBzZXR0aW5nc1xuICAgICAgLyoqIEB0eXBlIHtQcm9jZXNzb3J8dW5kZWZpbmVkfSAqL1xuICAgICAgbGV0IHByb2Nlc3NvclxuXG4gICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3NvciA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGluZ3MgPSBkZXN0aW5hdGlvbiB8fCB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZ3MuZG9jdW1lbnQgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncy5kb2N1bWVudCA9PT0gbnVsbCkge1xuICAgICAgICBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCB7ZG9jdW1lbnQ6IHRydWV9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvY2Vzc29yID8gYnJpZGdlKHByb2Nlc3Nvciwgc2V0dGluZ3MpIDogbXV0YXRlKHNldHRpbmdzKVxuICAgIH1cbiAgKVxuXG5leHBvcnQgZGVmYXVsdCByZWh5cGVSZW1hcmtcblxuLyoqXG4gKiBCcmlkZ2UtbW9kZS5cbiAqIFJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBtZGFzdCB0cmVlLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W1Byb2Nlc3NvciwgT3B0aW9ucz9dLCBIYXN0Um9vdD59XG4gKi9cbmZ1bmN0aW9uIGJyaWRnZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICByZXR1cm4gKG5vZGUsIGZpbGUsIG5leHQpID0+IHtcbiAgICBkZXN0aW5hdGlvbi5ydW4odG9NZGFzdChub2RlLCBvcHRpb25zKSwgZmlsZSwgKGVycm9yKSA9PiB7XG4gICAgICBuZXh0KGVycm9yKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBNdXRhdGUtbW9kZS5cbiAqIEZ1cnRoZXIgdHJhbnNmb3JtZXJzIHJ1biBvbiB0aGUgbWRhc3QgdHJlZS5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP118dm9pZFtdLCBIYXN0Um9vdCwgTWRhc3RSb290Pn1cbiAqL1xuZnVuY3Rpb24gbXV0YXRlKG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUge01kYXN0Um9vdH0gKi8gKHRvTWRhc3Qobm9kZSwgb3B0aW9ucykpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-remark/lib/index.js\n");

/***/ })

};
;