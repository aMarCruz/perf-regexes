/**
 * perf-regexes v1.0.0
 * @author aMarCruz
 * @license MIT
 */
/* eslint-disable */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable max-len */

//#region HTML ---------------------------------------------------------------

/**
 * Valid HTML comments, according to the SGML standard.
 * @see https://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.4
 * @type {RegExp}
 */
var HTML_CMNT = /<!--(?:>|[\S\s]*?--\s*>)/g;

//#endregion
//#region JavaScript ---------------------------------------------------------

// can preceed regex, excludes `throw` and `new` from the keywords
var R_PREFIX =
/((?:(?:^|[[{(,;:?=|&!^~>%*/])\s*[+-]{0,2}|\.\.|case|default:?|delete|do|else|extends|in|instanceof|prefix|return|typeof|void|yield|[^+]\+|[^-]-)\s*)/;

/**
 * Matches multiline JS comments, with support for embedded `'/*'` sequences.
 * @type {RegExp}
 */
var JS_MLCMNT = /\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//g;

/**
 * Matches single line JS comments.
 * @type {RegExp}
 */
var JS_SLCMNT = /\/\/.*/g;

/**
 * Matches a double quoted JS string, with support for escaped quotes
 * and line-endings.
 * @type {RegExp}
 */
var JS_DQSTR = /"[^"\n\r\\]*(?:\\(?:\r\n?|[\S\s])[^"\n\r\\]*)*"/g;

/**
 * Matches a single quoted JS string, with support for escaped quotes
 * and line-endings.
 * @type {RegExp}
 */
var JS_SQSTR = RegExp(JS_DQSTR.source.replace(/"/g, "'"), 'g');

/**
 * Combines `JS_DQSTR` and `JS_SQSTR` regexes to match both quoted strings.
 */
var JS_STRING = RegExp(JS_DQSTR.source + '|' + JS_SQSTR.source, 'g');

/**
 * Matches literal regexes
 * @type {RegExp}
 */
var JS_REGEX = /\/(?=[^*\n\r/])[^[\n\r/\\]*(?:(?:\\.|\[(?:\\.|[^\]\r\n\\]*)*\])[^[\n\r\\/]*)*?\/[gimuy]*/;

/**
 * Matches regex, captures in $1 a prefix, in $2 the regex without options
 * @type {RegExp}
 * @deprecated
 */
var JS_REGEX_P = RegExp(R_PREFIX.source + JS_REGEX.source, 'g');

//#endregion
//#region Lines --------------------------------------------------------------

var WS = '[ \\t\\f\\v]';
var LE = '\\r\\n?|\\n';

var _lineRegex = function (re, flags) {
  return new RegExp(re.source.replace(/@B/g, WS).replace(/@L/g, LE), flags)
};

/**
 * Matches an empty line, including its line-ending, if it has one.
 * @type {RegExp}
 */
var EMPTY_LINES = _lineRegex(/^(?:@L|@B+(?:@L|$))/, 'mg');

/**
 * Matches non-empty lines, including its line-ending, if it has one.
 * @type {RegExp}
 */
var NON_EMPTY_LINES = _lineRegex(/^@B*\S.*(?:@L|$)/, 'mg');

/**
 * Matches the trailing whitespace of a line, without including its
 * line-ending.
 * @type {RegExp}
 */
var TRAILING_WS = _lineRegex(/@B+$/, 'mg');

/**
 * Matches zero or more blank characters followed by a line-ending
 * or the final blanks, if the (last) line has no line-ending.
 * @type {RegExp}
 */
var OPT_WS_EOL = _lineRegex(/(?:@L)|@B+(?:@L|$)/, 'gm');

/**
 * Matches line-ending of any type
 * @type {RegExp}
 */
var EOL = _lineRegex(/@L/, 'g');

//#endregion

exports.HTML_CMNT = HTML_CMNT;
exports.JS_MLCMNT = JS_MLCMNT;
exports.JS_SLCMNT = JS_SLCMNT;
exports.JS_DQSTR = JS_DQSTR;
exports.JS_SQSTR = JS_SQSTR;
exports.JS_STRING = JS_STRING;
exports.JS_REGEX = JS_REGEX;
exports.JS_REGEX_P = JS_REGEX_P;
exports.EMPTY_LINES = EMPTY_LINES;
exports.NON_EMPTY_LINES = NON_EMPTY_LINES;
exports.TRAILING_WS = TRAILING_WS;
exports.OPT_WS_EOL = OPT_WS_EOL;
exports.EOL = EOL;
