'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module perf-regexes
 *
 * Optimized and powerful regexes for JavaScript
 */
/* eslint-disable max-len */

/** Matches valid multiline JS comments */
var JS_MLCOMM = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g

/** Single line JS comments */
var JS_SLCOMM = /\/\/[^\n\r]*/g

/** Single and double quoted strings, take care about embedded eols */
var JS_STRING = /"[^"\n\r\\]*(?:\\(?:\r\n?|[\S\s])[^"\n\r\\]*)*"|'[^'\n\r\\]*(?:\\(?:\r\n?|[\S\s])[^'\n\r\\]*)*'/g

/** Allow skip division operators and closing html tags to detect non-regex slashes */
var JS_DIVISOR = /(?:\b(?:return|yield)\s+|<\/[-a-zA-Z]|(?:[$\w\)\]]|\+\+|--)\s*\/(?![*\/]))/g

/** Matches literal regexes -- $1 last slash of the regex */
var JS_REGEX = /\/(?=[^*\/\n\r>])[^[\n\r/\\]*(?:(?:\[(?:\\[^\n\r]|[^\]\n\r\\]*)*\]|\\.)[^[/\n\r\\]*)*?(\/)[gim]*/g

/** Matches valid HTML comments (ES6 code can have this) */
var HTML_COMM = /<!--(?!>)[\S\s]*?-->/g

/** Matches the start of a comment */
var ISCOMMENT = /^(?:<--|\/[*\/])/

/**
 * ES6 template strings (not recommended).
 * This is for very limited strings, since there's no way to parse
 * nested ES6 strings with regexes.
 *
 * This is a valid ES6 string: `foo ${ "`" + '`' + `\`${ { bar }.baz }` }`
 */
var ES6_TSTR_SIMPLE = /`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g

exports.JS_MLCOMM = JS_MLCOMM;
exports.JS_SLCOMM = JS_SLCOMM;
exports.JS_STRING = JS_STRING;
exports.JS_DIVISOR = JS_DIVISOR;
exports.JS_REGEX = JS_REGEX;
exports.HTML_COMM = HTML_COMM;
exports.ISCOMMENT = ISCOMMENT;
exports.ES6_TSTR_SIMPLE = ES6_TSTR_SIMPLE;