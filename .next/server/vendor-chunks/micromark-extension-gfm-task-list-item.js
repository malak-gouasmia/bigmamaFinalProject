"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-task-list-item";
exports.ids = ["vendor-chunks/micromark-extension-gfm-task-list-item"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemHtml: () => (/* binding */ gfmTaskListItemHtml)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */\n\n// To do: next major: expose function to make extension.\n\n/**\n * Extension for `micromark` that can be passed in `htmlExtensions` to\n * support GFM task list items when serializing to HTML.\n *\n * @type {HtmlExtension}\n */\nconst gfmTaskListItemHtml = {\n  enter: {\n    taskListCheck() {\n      this.tag('<input type=\"checkbox\" disabled=\"\" ')\n    }\n  },\n  exit: {\n    taskListCheck() {\n      this.tag('/>')\n    },\n    taskListCheckValueChecked() {\n      this.tag('checked=\"\" ')\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9odG1sLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLGFBQWEsOENBQThDO0FBQzNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BsaXZlYmxvY2tzLWV4YW1wbGVzL25leHRqcy15anMtYmxvY2tub3RlLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtL2Rldi9saWIvaHRtbC5qcz83OWY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5IdG1sRXh0ZW5zaW9ufSBIdG1sRXh0ZW5zaW9uXG4gKi9cblxuLy8gVG8gZG86IG5leHQgbWFqb3I6IGV4cG9zZSBmdW5jdGlvbiB0byBtYWtlIGV4dGVuc2lvbi5cblxuLyoqXG4gKiBFeHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRoYXQgY2FuIGJlIHBhc3NlZCBpbiBgaHRtbEV4dGVuc2lvbnNgIHRvXG4gKiBzdXBwb3J0IEdGTSB0YXNrIGxpc3QgaXRlbXMgd2hlbiBzZXJpYWxpemluZyB0byBIVE1MLlxuICpcbiAqIEB0eXBlIHtIdG1sRXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtVGFza0xpc3RJdGVtSHRtbCA9IHtcbiAgZW50ZXI6IHtcbiAgICB0YXNrTGlzdENoZWNrKCkge1xuICAgICAgdGhpcy50YWcoJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkaXNhYmxlZD1cIlwiICcpXG4gICAgfVxuICB9LFxuICBleGl0OiB7XG4gICAgdGFza0xpc3RDaGVjaygpIHtcbiAgICAgIHRoaXMudGFnKCcvPicpXG4gICAgfSxcbiAgICB0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkKCkge1xuICAgICAgdGhpcy50YWcoJ2NoZWNrZWQ9XCJcIiAnKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItem: () => (/* binding */ gfmTaskListItem)\n/* harmony export */ });\n/* harmony import */ var uvu_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uvu/assert */ \"(ssr)/./node_modules/uvu/assert/index.mjs\");\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Tokenizer} Tokenizer\n */\n\n\n\n\n\n\n\nconst tasklistCheck = {tokenize: tokenizeTasklistCheck}\n\n// To do: next major: expose function to make extension.\n\n/**\n * Extension for `micromark` that can be passed in `extensions`, to\n * enable GFM task list items syntax.\n *\n * @type {Extension}\n */\nconst gfmTaskListItem = {\n  text: {[micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket]: tasklistCheck}\n}\n\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */\nfunction tokenizeTasklistCheck(effects, ok, nok) {\n  const self = this\n\n  return open\n\n  /**\n   * At start of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */\n  function open(code) {\n    ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, 'expected `[`')\n\n    if (\n      // Exit if there’s stuff before.\n      self.previous !== micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||\n      // Exit if not in the first content that is the first child of a list\n      // item.\n      !self._gfmTasklistFirstContentOfListItem\n    ) {\n      return nok(code)\n    }\n\n    effects.enter('taskListCheck')\n    effects.enter('taskListCheckMarker')\n    effects.consume(code)\n    effects.exit('taskListCheckMarker')\n    return inside\n  }\n\n  /**\n   * In task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */\n  function inside(code) {\n    // Currently we match how GH works in files.\n    // To match how GH works in comments, use `markdownSpace` (`[\\t ]`) instead\n    // of `markdownLineEndingOrSpace` (`[\\t\\n\\r ]`).\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEndingOrSpace)(code)) {\n      effects.enter('taskListCheckValueUnchecked')\n      effects.consume(code)\n      effects.exit('taskListCheckValueUnchecked')\n      return close\n    }\n\n    if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.uppercaseX || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.lowercaseX) {\n      effects.enter('taskListCheckValueChecked')\n      effects.consume(code)\n      effects.exit('taskListCheckValueChecked')\n      return close\n    }\n\n    return nok(code)\n  }\n\n  /**\n   * At close of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *         ^\n   * ```\n   *\n   * @type {State}\n   */\n  function close(code) {\n    if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n      effects.enter('taskListCheckMarker')\n      effects.consume(code)\n      effects.exit('taskListCheckMarker')\n      effects.exit('taskListCheck')\n      return after\n    }\n\n    return nok(code)\n  }\n\n  /**\n   * @type {State}\n   */\n  function after(code) {\n    // EOL in paragraph means there must be something else after it.\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code)) {\n      return ok(code)\n    }\n\n    // Space or tab?\n    // Check what comes after.\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownSpace)(code)) {\n      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)(code)\n    }\n\n    // EOF, or non-whitespace, both wrong.\n    return nok(code)\n  }\n}\n\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */\nfunction spaceThenNonSpace(effects, ok, nok) {\n  return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, after, micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.whitespace)\n\n  /**\n   * After whitespace, after task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *           ^\n   * ```\n   *\n   * @type {State}\n   */\n  function after(code) {\n    // EOF means there was nothing, so bad.\n    // EOL means there’s content after it, so good.\n    // Impossible to have more spaces.\n    // Anything else is good.\n    return code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.eof ? nok(code) : ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9zeW50YXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLDBDQUEwQztBQUN2RCxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLGdEQUFnRDtBQUM3RCxhQUFhLDBDQUEwQztBQUN2RDs7QUFFdUM7QUFDYTtBQUtuQjtBQUNtQjtBQUNBOztBQUVwRCx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUCxTQUFTLENBQUMsaUVBQUs7QUFDZjs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUksK0NBQU0sVUFBVSxpRUFBSzs7QUFFekI7QUFDQTtBQUNBLHdCQUF3QixpRUFBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUZBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlFQUFLLHdCQUF3QixpRUFBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUJBQWlCLGlFQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNEVBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdUVBQWE7QUFDckIsNEJBQTRCLDRCQUE0QjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBLFNBQVMscUVBQVksaUJBQWlCLGlFQUFLOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBSztBQUN6QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9zeW50YXguanM/MzQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXh0ZW5zaW9ufSBFeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ3V2dS9hc3NlcnQnXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge1xuICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlLFxuICBtYXJrZG93bkxpbmVFbmRpbmcsXG4gIG1hcmtkb3duU3BhY2Vcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2Rlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvZGVzLmpzJ1xuaW1wb3J0IHt0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL3R5cGVzLmpzJ1xuXG5jb25zdCB0YXNrbGlzdENoZWNrID0ge3Rva2VuaXplOiB0b2tlbml6ZVRhc2tsaXN0Q2hlY2t9XG5cbi8vIFRvIGRvOiBuZXh0IG1ham9yOiBleHBvc2UgZnVuY3Rpb24gdG8gbWFrZSBleHRlbnNpb24uXG5cbi8qKlxuICogRXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0aGF0IGNhbiBiZSBwYXNzZWQgaW4gYGV4dGVuc2lvbnNgLCB0b1xuICogZW5hYmxlIEdGTSB0YXNrIGxpc3QgaXRlbXMgc3ludGF4LlxuICpcbiAqIEB0eXBlIHtFeHRlbnNpb259XG4gKi9cbmV4cG9ydCBjb25zdCBnZm1UYXNrTGlzdEl0ZW0gPSB7XG4gIHRleHQ6IHtbY29kZXMubGVmdFNxdWFyZUJyYWNrZXRdOiB0YXNrbGlzdENoZWNrfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZVRhc2tsaXN0Q2hlY2soZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBvcGVuXG5cbiAgLyoqXG4gICAqIEF0IHN0YXJ0IG9mIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0LCAnZXhwZWN0ZWQgYFtgJylcblxuICAgIGlmIChcbiAgICAgIC8vIEV4aXQgaWYgdGhlcmXigJlzIHN0dWZmIGJlZm9yZS5cbiAgICAgIHNlbGYucHJldmlvdXMgIT09IGNvZGVzLmVvZiB8fFxuICAgICAgLy8gRXhpdCBpZiBub3QgaW4gdGhlIGZpcnN0IGNvbnRlbnQgdGhhdCBpcyB0aGUgZmlyc3QgY2hpbGQgb2YgYSBsaXN0XG4gICAgICAvLyBpdGVtLlxuICAgICAgIXNlbGYuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgcmV0dXJuIGluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgLy8gQ3VycmVudGx5IHdlIG1hdGNoIGhvdyBHSCB3b3JrcyBpbiBmaWxlcy5cbiAgICAvLyBUbyBtYXRjaCBob3cgR0ggd29ya3MgaW4gY29tbWVudHMsIHVzZSBgbWFya2Rvd25TcGFjZWAgKGBbXFx0IF1gKSBpbnN0ZWFkXG4gICAgLy8gb2YgYG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2VgIChgW1xcdFxcblxcciBdYCkuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZVVuY2hlY2tlZCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkJylcbiAgICAgIHJldHVybiBjbG9zZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBjb2Rlcy51cHBlcmNhc2VYIHx8IGNvZGUgPT09IGNvZGVzLmxvd2VyY2FzZVgpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnKVxuICAgICAgcmV0dXJuIGNsb3NlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IGNsb3NlIG9mIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBFT0wgaW4gcGFyYWdyYXBoIG1lYW5zIHRoZXJlIG11c3QgYmUgc29tZXRoaW5nIGVsc2UgYWZ0ZXIgaXQuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gU3BhY2Ugb3IgdGFiP1xuICAgIC8vIENoZWNrIHdoYXQgY29tZXMgYWZ0ZXIuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHt0b2tlbml6ZTogc3BhY2VUaGVuTm9uU3BhY2V9LCBvaywgbm9rKShjb2RlKVxuICAgIH1cblxuICAgIC8vIEVPRiwgb3Igbm9uLXdoaXRlc3BhY2UsIGJvdGggd3JvbmcuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHNwYWNlVGhlbk5vblNwYWNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlciwgdHlwZXMud2hpdGVzcGFjZSlcblxuICAvKipcbiAgICogQWZ0ZXIgd2hpdGVzcGFjZSwgYWZ0ZXIgdGFzayBsaXN0IGl0ZW0gY2hlY2suXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqIFt4XSB5LlxuICAgKiAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8vIEVPRiBtZWFucyB0aGVyZSB3YXMgbm90aGluZywgc28gYmFkLlxuICAgIC8vIEVPTCBtZWFucyB0aGVyZeKAmXMgY29udGVudCBhZnRlciBpdCwgc28gZ29vZC5cbiAgICAvLyBJbXBvc3NpYmxlIHRvIGhhdmUgbW9yZSBzcGFjZXMuXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpcyBnb29kLlxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5lb2YgPyBub2soY29kZSkgOiBvayhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js\n");

/***/ })

};
;