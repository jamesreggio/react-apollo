(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t(e['react-apollo']={})})(this,function(e){'use strict';function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,'default')?e['default']:e}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*//* eslint-disable no-unused-vars */function a(e){if(null===e||e===void 0)throw new TypeError('Object.assign cannot be called with null or undefined');return Object(e)}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function p(e){return function(){return e}}/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */function i(t){for(var n=arguments.length-1,r='Minified React error #'+t+'; visit http://facebook.github.io/react/docs/error-decoder.html?invariant='+t,e=0;e<n;e++)r+='&args[]='+encodeURIComponent(arguments[e+1]);throw n=Error(r+' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'),n.name='Invariant Violation',n.framesToPop=1,n}function s(t,n,r){this.props=t,this.context=n,this.refs=ae,this.updater=r||x}function l(t,n,r){this.props=t,this.context=n,this.refs=ae,this.updater=r||x}function d(){}function c(t,n,r){this.props=t,this.context=n,this.refs=ae,this.updater=r||x}function y(t,n,o){var e,p={},i=null,s=null;if(null!=n)for(e in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=''+n.key),n)de.call(n,e)&&!H.hasOwnProperty(e)&&(p[e]=n[e]);var u=arguments.length-2;if(1==u)p.children=o;else if(1<u){for(var c=Array(u),y=0;y<u;y++)c[y]=arguments[y+2];p.children=c}if(t&&t.defaultProps)for(e in u=t.defaultProps,u)void 0===p[e]&&(p[e]=u[e]);return{$$typeof:q,type:t,key:i,ref:s,props:p,_owner:F.current}}function f(e){return'object'==typeof e&&null!==e&&e.$$typeof===q}function h(e){var t={"=":'=0',":":'=2'};return'$'+(''+e).replace(/[=:]/g,function(e){return t[e]})}function m(t,n,r,o){if(L.length){var p=L.pop();return p.result=t,p.keyPrefix=n,p.func=r,p.context=o,p.count=0,p}return{result:t,keyPrefix:n,func:r,context:o,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>L.length&&L.push(e)}function O(n,r,o,e){var p=typeof n;('undefined'==p||'boolean'==p)&&(n=null);var s=!1;if(null===n)s=!0;else switch(p){case'string':case'number':s=!0;break;case'object':switch(n.$$typeof){case q:case ue:case t:case u:s=!0;}}if(s)return o(e,n,''===r?'.'+P(n,0):r),1;if(s=0,r=''===r?'.':r+':',Array.isArray(n))for(var l=0;l<n.length;l++){p=n[l];var d=r+P(p,l);s+=O(p,d,o,e)}else if(null===n||'undefined'==typeof n?d=null:(d=le&&n[le]||n['@@iterator'],d='function'==typeof d?d:null),'function'==typeof d)for(n=d.call(n),l=0;!(p=n.next()).done;)p=p.value,d=r+P(p,l++),s+=O(p,d,o,e);else'object'===p&&(o=''+n,i('31','[object Object]'===o?'object with keys {'+Object.keys(n).join(', ')+'}':o,''));return s}function P(e,t){return'object'==typeof e&&null!==e&&null!=e.key?h(e.key):t.toString(36)}function g(e,t){e.func.call(e.context,t,e.count++)}function k(t,n,o){var e=t.result,a=t.keyPrefix;t=t.func.call(t.context,n,t.count++),Array.isArray(t)?R(t,e,o,ie.thatReturnsArgument):null!=t&&(f(t)&&(n=a+(!t.key||n&&n.key===t.key?'':(''+t.key).replace(I,'$&/')+'/')+o,t={$$typeof:q,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}),e.push(t))}function R(t,n,r,e,o){var a='';null!=r&&(a=(''+r).replace(I,'$&/')+'/'),n=m(n,a,e,o),null==t||O(t,'',k,n),_(n)}/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 *//**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function b(e,t){// SameValue algorithm
return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 *//**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 *//**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 *//**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 *//**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 *//**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 *//**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 *//**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 *//**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 *//**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 *//**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 *//**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 *//**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 *//**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 *//**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 *//**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 *//**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 *//**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 *//**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 *//**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function S(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}// Add methods to `Hash`.
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 *//**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 *//**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 *//**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 *//**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 *//**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 *//**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 *//**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function T(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}// Add methods to `ListCache`.
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 *//**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 *//**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 *//**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 *//**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 *//**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 *//**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 *//**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function N(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}// Add methods to `MapCache`.
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function C(e,t){if('function'!=typeof e||null!=t&&'function'!=typeof t)throw new TypeError(Yt);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var p=e.apply(this,r);return n.cache=a.set(o,p)||a,p};return n.cache=new(C.Cache||Vt),n}// Expose `MapCache`.
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 *//**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 *//**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function Q(e){// Exit early for strings to avoid a performance hit in some environments.
if('string'==typeof e)return e;if(ze(e))// Recursively convert values (susceptible to call stack limits).
return Xt(e,Q)+'';if(st(e))return en?en.call(e):'';var t=e+'';return'0'==t&&1/e==-Jt?'-0':t}/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 *//**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 *//**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 *//**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 *//**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 *//**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 *//**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 *//**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 *//**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 *//**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 *//**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *//**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 *//**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 *//**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 *//**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 *//**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 *//**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 *//**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function j(e,t,n,r,o){var a=-1,p=e.length;for(n||(n=Nn),o||(o=[]);++a<p;){var i=e[a];0<t&&n(i)?1<t?j(i,t-1,n,r,o):Sn(o,i):!r&&(o[o.length]=i)}return o}/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 *//**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 *//**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 *//**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 *//**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 *//**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 *//**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 *//**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 *//**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */function $(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 *//**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 *//**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */function Y(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=fr,this.__views__=[]}// Ensure `LazyWrapper` is an instance of `baseLodash`.
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 *//**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 *//**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */function X(e){if(it(e)&&!ze(e)&&!(e instanceof hr)){if(e instanceof rr)return e;if(gr.call(e,'__wrapped__'))return mr(e)}return new rr(e)}// Ensure wrappers are instances of `baseLodash`.
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 *//**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */var Z='undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,re=function(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String('abc');// eslint-disable-line no-new-wrappers
if(e[5]='de','5'===Object.getOwnPropertyNames(e)[0])return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var t={},n=0;10>n;n++)t['_'+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if('0123456789'!==r.join(''))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var o={};return['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'].forEach(function(e){o[e]=e}),'abcdefghijklmnopqrst'===Object.keys(Object.assign({},o)).join('')}catch(e){// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e){for(var t,n,r=a(e),o=1;o<arguments.length;o++){for(var p in t=Object(arguments[o]),t)te.call(t,p)&&(r[p]=t[p]);if(ee){n=ee(t);for(var s=0;s<n.length;s++)ne.call(t,n[s])&&(r[n[s]]=t[n[s]])}}return r},oe={};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */'production'!==process.env.NODE_ENV&&Object.freeze(oe);var ae=oe,pe=function(){};pe.thatReturns=p,pe.thatReturnsFalse=p(!1),pe.thatReturnsTrue=p(!0),pe.thatReturnsNull=p(null),pe.thatReturnsThis=function(){return this},pe.thatReturnsArgument=function(e){return e};var ie=pe,se='function'==typeof Symbol&&Symbol['for'],q=se?Symbol['for']('react.element'):60103,ue=se?Symbol['for']('react.call'):60104,t=se?Symbol['for']('react.return'):60105,u=se?Symbol['for']('react.portal'):60106,v=se?Symbol['for']('react.fragment'):60107,le='function'==typeof Symbol&&Symbol.iterator,x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};s.prototype.isReactComponent={},s.prototype.setState=function(e,t){'object'!=typeof e&&'function'!=typeof e&&null!=e?i('85'):void 0,this.updater.enqueueSetState(this,e,t,'setState')},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,'forceUpdate')},d.prototype=s.prototype;var z=l.prototype=new d;z.constructor=l,re(z,s.prototype),z.isPureReactComponent=!0;var D=c.prototype=new d;D.constructor=c,re(D,s.prototype),D.unstable_isAsyncReactComponent=!0,D.render=function(){return this.props.children};var F={current:null},de=Object.prototype.hasOwnProperty,H={key:!0,ref:!0,__self:!0,__source:!0},I=/\/+/g,L=[],M={Children:{map:function(t,n,r){if(null==t)return t;var e=[];return R(t,e,null,n,r),e},forEach:function(t,n,r){return null==t?t:void(n=m(null,null,n,r),null==t||O(t,'',g,n),_(n))},count:function(e){return null==e?0:O(e,'',ie.thatReturnsNull,null)},toArray:function(e){var t=[];return R(e,t,null,ie.thatReturnsArgument),t},only:function(e){return f(e)?void 0:i('143'),e}},Component:s,PureComponent:l,unstable_AsyncComponent:c,Fragment:v,createElement:y,cloneElement:function(t,n,o){var e=re({},t.props),a=t.key,p=t.ref,i=t._owner;if(null!=n){if(void 0!==n.ref&&(p=n.ref,i=F.current),void 0!==n.key&&(a=''+n.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(u in n)de.call(n,u)&&!H.hasOwnProperty(u)&&(e[u]=void 0===n[u]&&void 0!==s?s[u]:n[u])}var u=arguments.length-2;if(1===u)e.children=o;else if(1<u){s=Array(u);for(var y=0;y<u;y++)s[y]=arguments[y+2];e.children=s}return{$$typeof:q,type:t.type,key:a,ref:p,props:e,_owner:i}},createFactory:function(e){var t=y.bind(null,e);return t.type=e,t},isValidElement:f,version:'16.2.0',__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:F,assign:re}},ce=Object.freeze({default:M}),V=ce&&M||ce,W=V['default']?V['default']:V,ye=function(){};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *//**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */'production'!==process.env.NODE_ENV&&(ye=function(e){if(e===void 0)throw new Error('invariant requires an error message argument')});var fe=function(t,n,r,o,a,p,i,e){if(ye(n),!t){var s;if(void 0===n)s=new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');else{var u=[r,o,a,p,i,e],l=0;s=new Error(n.replace(/%s/g,function(){return u[l++]})),s.name='Invariant Violation'}// we don't care about invariant's own frame
throw s.framesToPop=1,s}},he=ie;/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */if('production'!==process.env.NODE_ENV){var be=function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a='Warning: '+e.replace(/%s/g,function(){return n[o++]});'undefined'!=typeof console&&console.error(a);try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};he=function(e,t){if(t===void 0)throw new Error('`warning(condition, format, ...args)` requires a warning message argument');if(0!==t.indexOf('Failed Composite propType: ')&&!e){for(var n=arguments.length,r=Array(2<n?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];be.apply(void 0,[t].concat(r))}// Ignore CompositeComponent proptype check.
}}var me=he,_e='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if('production'!==process.env.NODE_ENV)var ge=fe,ve=me,Oe=_e,ke={};var Pe=function(e,t,n,r,o){if('production'!==process.env.NODE_ENV)for(var a in e)if(e.hasOwnProperty(a)){var p;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{ge('function'==typeof e[a],'%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',r||'React class',n,a,typeof e[a]),p=e[a](t,a,r,n,null,Oe)}catch(e){p=e}if(ve(!p||p instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',r||'React class',n,a,typeof p),p instanceof Error&&!(p.message in ke)){ke[p.message]=!0;var i=o?o():'';ve(!1,'Failed %s type: %s%s',n,p.message,null==i?'':i)}}},we=o(function(e){'production'!==process.env.NODE_ENV&&function(){function t(e){if(null===e||'undefined'==typeof e)return null;var t=Y&&e[Y]||e[B];return'function'==typeof t?t:null}/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 *//**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */function n(e,t){{var n=e.constructor,r=n&&(n.displayName||n.name)||'ReactClass',o=r+'.'+t;if(X[o])return;A(!1,'%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op.\n\nPlease check the code for the %s component.',t,t,r),X[o]=!0}}/**
 * This is the abstract API for an update queue.
 *//**
 * Base class helpers for the updating state of a component.
 */function r(e,t,n){this.props=e,this.context=t,this.refs=D,this.updater=n||J}/**
 * Base class helpers for the updating state of a component.
 */function o(e,t,n){this.props=e,this.context=t,this.refs=D,this.updater=n||J}function a(){}function p(e,t,n){this.props=e,this.context=t,this.refs=D,this.updater=n||J}function i(e){if(le.call(e,'ref')){var t=Object.getOwnPropertyDescriptor(e,'ref').get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function s(e){if(le.call(e,'key')){var t=Object.getOwnPropertyDescriptor(e,'key').get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function u(e,t){var n=function(){pe||(pe=!0,A(!1,'%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)',t))};n.isReactWarning=!0,Object.defineProperty(e,'key',{get:n,configurable:!0})}function l(e,t){var n=function(){se||(se=!0,A(!1,'%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)',t))};n.isReactWarning=!0,Object.defineProperty(e,'ref',{get:n,configurable:!0})}/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 *//**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */function d(e,t,n){var r,o={},a=null,p=null,d=null,c=null;// Reserved names are extracted
if(null!=t)// Remaining properties are added to a new props object
for(r in i(t)&&(p=t.ref),s(t)&&(a=''+t.key),d=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)le.call(t,r)&&!de.hasOwnProperty(r)&&(o[r]=t[r]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var y=arguments.length-2;if(1==y)o.children=n;else if(1<y){for(var f=Array(y),h=0;h<y;h++)f[h]=arguments[h+2];Object.freeze&&Object.freeze(f),o.children=f}// Resolve default props
if(e&&e.defaultProps){var b=e.defaultProps;for(r in b)void 0===o[r]&&(o[r]=b[r])}if((a||p)&&('undefined'==typeof o.$$typeof||o.$$typeof!==U)){var m='function'==typeof e?e.displayName||e.name||'Unknown':e;a&&u(o,m),p&&l(o,m)}return ce(e,a,p,d,c,ue.current,o)}/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */function c(e,t){var n=ce(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n}/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */function y(e,t,n){var r,o=j({},e.props),a=e.key,p=e.ref,u=e._self,l=e._source,d=e._owner;// Original props are copied
// Reserved names are extracted
// Self is preserved since the owner is preserved.
// Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
// Owner will be preserved, unless ref is overridden
if(null!=t){i(t)&&(p=t.ref,d=ue.current),s(t)&&(a=''+t.key);// Remaining properties override existing props
var c;for(r in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)le.call(t,r)&&!de.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==c?c[r]:t[r])}// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var y=arguments.length-2;if(1==y)o.children=n;else if(1<y){for(var f=Array(y),h=0;h<y;h++)f[h]=arguments[h+2];o.children=f}return ce(e.type,a,p,u,l,d,o)}/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */function f(e){return'object'==typeof e&&null!==e&&e.$$typeof===U}/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */function h(e){var t=/[=:]/g,n={"=":'=0',":":'=2'},r=(''+e).replace(t,function(e){return n[e]});return'$'+r}/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */function b(e){return(''+e).replace(ge,'$&/')}function m(e,t,n,r){if(Oe.length){var o=Oe.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,Oe.length<ve&&Oe.push(e)}/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */function g(e,n,r,o){var a=typeof e;('undefined'==a||'boolean'==a)&&(e=null);var p=!1;if(null===e)p=!0;else switch(a){case'string':case'number':p=!0;break;case'object':switch(e.$$typeof){case U:case $:case L:case z:p=!0;}}if(p)return r(o,e,// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
''===n?he+O(e,0):n),1;var s,u,l=0,d=''===n?he:n+be;// Count of children found in the current subtree.
if(Array.isArray(e))for(var c=0;c<e.length;c++)s=e[c],u=d+O(s,c),l+=g(s,u,r,o);else{var i=t(e);if('function'==typeof i){i===e.entries&&(A(_e,'Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.%s',ye.getStackAddendum()),_e=!0);for(var y,f=i.call(e),h=0;!(y=f.next()).done;)s=y.value,u=d+O(s,h++),l+=g(s,u,r,o)}else if('object'==a){var b='';b=' If you meant to render a collection of children, use an array instead.'+ye.getStackAddendum();var m=''+e;I(!1,'Objects are not valid as a React child (found: %s).%s','[object Object]'==m?'object with keys {'+Object.keys(e).join(', ')+'}':m,b)}}return l}/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */function v(e,t,n){return null==e?0:g(e,'',t,n)}/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function O(e,t){// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return'object'==typeof e&&null!==e&&null!=e.key?h(e.key):t.toString(36);// Implicit key determined by the index in the set
}function k(e,t){var n=e.func,r=e.context;n.call(r,t,e.count++)}/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function P(e,t,n){var r=e.result,o=e.keyPrefix,a=e.func,p=e.context,i=a.call(p,t,e.count++);Array.isArray(i)?w(i,r,n,M.thatReturnsArgument):null!=i&&(f(i)&&(i=c(i,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
o+(i.key&&(!t||t.key!==i.key)?b(i.key)+'/':'')+n)),r.push(i))}function w(e,t,n,r,o){var a='';null!=n&&(a=b(n)+'/');var p=m(t,a,r,o);v(e,P,p),_(p)}/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 *//**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 *//**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 *//**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */function R(e){var t=e.type;return'string'==typeof t?t:'function'==typeof t?t.displayName||t.name:null}/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */function x(){if(ue.current){var e=R(ue.current);if(e)return'\n\nCheck the render method of `'+e+'`.'}return''}function S(e){if(null!==e&&e!==void 0&&e.__source!==void 0){var t=e.__source,n=t.fileName.replace(/^.*[\\\/]/,''),r=t.lineNumber;return'\n\nCheck your code at '+n+':'+r+'.'}return''}/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */function T(e){var t=x();if(!t){var n='string'==typeof e?e:e.displayName||e.name;n&&(t='\n\nCheck the top-level render call using <'+n+'>.')}return t}/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function N(e,t){// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=T(t);if(!Ne[n]){Ne[n]=!0;var r='';e&&e._owner&&e._owner!==ue.current&&(r=' It was passed a child from '+R(e._owner)+'.'),we=e,A(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',n,r,Se()),we=null}}}/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function C(e,n){if('object'==typeof e)if(Array.isArray(e))for(var r,o=0;o<e.length;o++)r=e[o],f(r)&&N(r,n);else if(f(e))e._store&&(e._store.validated=!0);else if(e){var a=t(e);if('function'==typeof a&&a!==e.entries)// Entry iterators used to provide implicit keys,
// but now we print a separate warning for them later.
for(var p,i=a.call(e);!(p=i.next()).done;)f(p.value)&&N(p.value,n)}}/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function E(e){var t=e.type;if('function'==typeof t){var n=t.displayName||t.name,r=t.propTypes;r?(we=e,F(r,e.props,'prop',n,Se),we=null):void 0!==t.PropTypes&&!Re&&(Re=!0,A(!1,'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',n||'Unknown')),'function'==typeof t.getDefaultProps&&A(t.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.')}}/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */function q(e){we=e;var t,n=!0,r=!1;try{for(var o,a,p=Object.keys(e.props)[Symbol.iterator]();!(n=(o=p.next()).done);n=!0)if(a=o.value,!Te.has(a)){A(!1,'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.%s',a,Se());break}}catch(e){r=!0,t=e}finally{try{!n&&p['return']&&p['return']()}finally{if(r)throw t}}null!==e.ref&&A(!1,'Invalid attribute `ref` supplied to `React.Fragment`.%s',Se()),we=null}function Q(e,t){var n='string'==typeof e||'function'==typeof e||'symbol'==typeof e||'number'==typeof e;// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!n){var r='';(void 0===e||'object'==typeof e&&null!==e&&0===Object.keys(e).length)&&(r+=' You likely forgot to export your component from the file it\'s defined in, or you might have mixed up default and named imports.');var o=S(t);r+=o?o:x(),r+=Se()||'',A(!1,'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',null==e?e:typeof e,r)}var a=d.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==a)return a;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(n)for(var p=2;p<arguments.length;p++)C(arguments[p],e);return'symbol'==typeof e&&e===V?q(a):E(a),a}var j=re,D=ae,I=fe,A=me,M=ie,F=Pe,W='function'==typeof Symbol&&Symbol['for'],U=W?Symbol['for']('react.element'):60103,$=W?Symbol['for']('react.call'):60104,L=W?Symbol['for']('react.return'):60105,z=W?Symbol['for']('react.portal'):60106,V=W?Symbol['for']('react.fragment'):60107,Y='function'==typeof Symbol&&Symbol.iterator,B='@@iterator',H=function(){};// TODO: this is special because it gets imported during build.
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
{var K=function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a='Warning: '+e.replace(/%s/g,function(){return n[o++]});'undefined'!=typeof console&&console.warn(a);try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};H=function(e,t){if(t===void 0)throw new Error('`warning(condition, format, ...args)` requires a warning message argument');if(!e){for(var n=arguments.length,r=Array(2<n?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];K.apply(void 0,[t].concat(r))}}}var G=H,X={},J={/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(){return!1},/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */enqueueForceUpdate:function(e){n(e,'forceUpdate')},/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */enqueueReplaceState:function(e){n(e,'replaceState')},/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */enqueueSetState:function(e){n(e,'setState')}};r.prototype.isReactComponent={},r.prototype.setState=function(e,t){'object'==typeof e||'function'==typeof e||null==e?void 0:I(!1,'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'),this.updater.enqueueSetState(this,e,t,'setState')},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,'forceUpdate')};/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */{var Z={isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.'],replaceState:['replaceState','Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).']},ee=function(e,t){Object.defineProperty(r.prototype,e,{get:function(){G(!1,'%s(...) is deprecated in plain JavaScript React classes. %s',t[0],t[1])}})};for(var te in Z)Z.hasOwnProperty(te)&&ee(te,Z[te])}a.prototype=r.prototype;var ne=o.prototype=new a;ne.constructor=o,j(ne,r.prototype),ne.isPureReactComponent=!0;var oe=p.prototype=new a;oe.constructor=p,j(oe,r.prototype),oe.unstable_isAsyncReactComponent=!0,oe.render=function(){return this.props.children};/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */var pe,se,ue={/**
   * @internal
   * @type {ReactComponent}
   */current:null},le=Object.prototype.hasOwnProperty,de={key:!0,ref:!0,__self:!0,__source:!0},ce=function(e,t,n,r,o,a,p){var i={// This tag allow us to uniquely identify this as a React Element
$$typeof:U,// Built-in properties that belong on the element
type:e,key:t,ref:n,props:p,// Record the component responsible for creating this element.
_owner:a};return i._store={},Object.defineProperty(i._store,'validated',{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,'_self',{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(i,'_source',{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i},ye={};ye.getCurrentStack=null,ye.getStackAddendum=function(){var e=ye.getCurrentStack;return e?e():null};var he='.',be=':',_e=!1,ge=/\/+/g,ve=10,Oe=[],ke=function(e,t,n){return'\n    in '+(e||'Unknown')+(t?' (at '+t.fileName.replace(/^.*[\\\/]/,'')+':'+t.lineNumber+')':n?' (created by '+n+')':'')};var we=null,Re=!1,xe=function(e){return null==e?'#empty':'string'==typeof e||'number'==typeof e?'#text':'string'==typeof e.type?e.type:e.type===V?'React.Fragment':e.type.displayName||e.type.name||'Unknown'},Se=function(){var e='';if(we){var t=xe(we),n=we._owner;e+=ke(t,we._source,n&&R(n))}return e+=ye.getStackAddendum()||'',e},Te=new Map([['children',!0],['key',!0]]),Ne={},Ce={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return w(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;var r=m(null,null,t,n);v(e,k,r),_(r)},count:function(e){return v(e,M.thatReturnsNull,null)},toArray:function(e){var t=[];return w(e,t,null,M.thatReturnsArgument),t},only:function(e){return f(e)?void 0:I(!1,'React.Children.only expected to receive a single React element child.'),e}},Component:r,PureComponent:o,unstable_AsyncComponent:p,Fragment:V,createElement:Q,cloneElement:function(){for(var e=y.apply(this,arguments),t=2;t<arguments.length;t++)C(arguments[t],e.type);return E(e),e},createFactory:function(e){var t=Q.bind(null,e);// Legacy hook TODO: Warn if this is accessed
return t.type=e,Object.defineProperty(t,'type',{enumerable:!1,get:function(){return G(!1,'Factory.type is deprecated. Access the class directly before passing it to createFactory.'),Object.defineProperty(this,'type',{value:e}),e}}),t},isValidElement:f,version:'16.2.0',__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:ue,// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:j}};j(Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,{// These should not be included in production.
ReactDebugCurrentFrame:ye,// Shim for React DOM 16.0.0 which still destructured (but not used) this.
// TODO: remove in React 17.0.
ReactComponentTreeHook:{}});var Ee=Object.freeze({default:Ce}),qe=Ee&&Ce||Ee,Qe=qe['default']?qe['default']:qe;// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
e.exports=Qe}()}),Re=o(function(e){e.exports='production'===process.env.NODE_ENV?W:we}),xe=o(function(e,t){function n(e){return e.props||e.attributes}function r(e){return!!e.type}function o(e){return e.prototype&&(e.prototype.render||e.prototype.isReactComponent)}function a(e){return!!e.getChildContext}function p(e,t,i){if(Array.isArray(e))return void e.forEach(function(e){return p(e,t,i)});if(e)if(!r(e))('string'==typeof e||'number'==typeof e)&&i(e,null,t);else if('function'==typeof e.type){var s,u=e.type,l=re.default({},u.defaultProps,n(e)),d=t;if(o(u)){var c=new u(l,t);if(c.props=c.props||l,c.context=c.context||t,c.state=c.state||null,c.setState=function(e){'function'==typeof e&&(e=e(c.state,c.props,c.context)),c.state=re.default({},c.state,e)},c.componentWillMount&&c.componentWillMount(),a(c)&&(d=re.default({},t,c.getChildContext())),!1===i(e,c,t))return;s=c.render()}else{if(!1===i(e,null,t))return;s=u(l,t)}s&&(Array.isArray(s)?s.forEach(function(e){return p(e,t,i)}):p(s,d,i))}else{if(!1===i(e,null,t))return;e.props&&e.props.children&&Re.Children.forEach(e.props.children,function(e){e&&p(e,t,i)})}}function i(e){return'function'==typeof e.fetchData}function s(e){return'function'==typeof e.then}function u(e,t){var n=e.rootElement,o=e.rootContext,a=void 0===o?{}:o;void 0===t&&(t=!0);var u=[];return p(n,a,function(e,o,a){var p=!t&&e===n;if(!p&&o&&r(e)&&i(o)){var l=o.fetchData();if(s(l))return u.push({query:l,element:e,context:a}),!1}}),u}function l(e,t,n){void 0===t&&(t={}),void 0===n&&(n=!0);var r=u({rootElement:e,rootContext:t},n);if(!r.length)return Promise.resolve();var o=[],a=r.map(function(e){var t=e.query,n=e.element,r=e.context;return t.then(function(){return l(n,r,!1)}).catch(function(t){return o.push(t)})});return Promise.all(a).then(function(){if(0<o.length){var e=1===o.length?o[0]:new Error(o.length+' errors were thrown when executing your GraphQL queries.');throw e.queryErrors=o,e}})}Object.defineProperty(t,'__esModule',{value:!0}),t.walkTree=p,t.default=l});n(xe);var Se=xe.walkTree,Te=function(e,t){// Before Symbol spec.
/**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */function n(e){var t=e&&(y&&e[y]||e[f]);if('function'==typeof t)return t}/**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   *//**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   *//*eslint-disable no-self-compare*/function r(e,t){// SameValue algorithm
return e===t?0!==e||1/e==1/t:e!==e&&t!==t}/*eslint-enable no-self-compare*//**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */function o(e){this.message=e,this.stack=''}// Make `instanceof Error` still work for returned errors.
function a(e){function n(n,p,i,s,u,l,d){if(s=s||h,l=l||i,d!==_e)if(t)fe(!1,'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types');else if('production'!==process.env.NODE_ENV&&'undefined'!=typeof console){// Old behavior for people using React.PropTypes
var c=s+':'+i;!r[c]&&// Avoid spamming the console because they are often not actionable except for lib authors
3>a&&(me(!1,'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',l,s),r[c]=!0,a++)}return null==p[i]?n?null===p[i]?new o('The '+u+' `'+l+'` is marked as required '+('in `'+s+'`, but its value is `null`.')):new o('The '+u+' `'+l+'` is marked as required in '+('`'+s+'`, but its value is `undefined`.')):null:e(p,i,s,u,l)}if('production'!==process.env.NODE_ENV)var r={},a=0;var p=n.bind(null,!1);return p.isRequired=n.bind(null,!0),p}function p(e){return a(function(t,n,r,a,p){var i=t[n],s=u(i);if(s!==e){// `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var d=l(i);return new o('Invalid '+a+' `'+p+'` of type '+('`'+d+'` supplied to `'+r+'`, expected ')+('`'+e+'`.'))}return null})}function i(t){switch(typeof t){case'number':case'string':case'undefined':return!0;case'boolean':return!t;case'object':if(Array.isArray(t))return t.every(i);if(null===t||e(t))return!0;var r=n(t);if(r){var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!i(o.value))return!1;}else// Iterator will provide entry [k,v] tuples rather than values.
for(;!(o=a.next()).done;){var p=o.value;if(p&&!i(p[1]))return!1}}else return!1;return!0;default:return!1;}}function s(e,t){// Native Symbol.
// Fallback for non-spec compliant Symbols which are polyfilled.
return'symbol'===e||'Symbol'===t['@@toStringTag']||'function'==typeof Symbol&&t instanceof Symbol;// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
}// Equivalent of `typeof` but with special handling for array and regexp.
function u(e){var t=typeof e;return Array.isArray(e)?'array':e instanceof RegExp?'object':s(t,e)?'symbol':t}// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function l(e){if('undefined'==typeof e||null===e)return''+e;var t=u(e);if('object'===t){if(e instanceof Date)return'date';if(e instanceof RegExp)return'regexp'}return t}// Returns a string that is postfixed to a warning about an invalid type.
// For example, "undefined" or "of type array"
function d(e){var t=l(e);return'array'===t||'object'===t?'an '+t:'boolean'===t||'date'===t||'regexp'===t?'a '+t:t}// Returns class name of the object, if any.
function c(e){return e.constructor&&e.constructor.name?e.constructor.name:h}/* global Symbol */var y='function'==typeof Symbol&&Symbol.iterator,f='@@iterator',h='<<anonymous>>',b={array:p('array'),bool:p('boolean'),func:p('function'),number:p('number'),object:p('object'),string:p('string'),symbol:p('symbol'),any:function(){return a(ie.thatReturnsNull)}(),arrayOf:function(e){return a(function(t,n,r,a,p){if('function'!=typeof e)return new o('Property `'+p+'` of component `'+r+'` has invalid PropType notation inside arrayOf.');var s=t[n];if(!Array.isArray(s)){var l=u(s);return new o('Invalid '+a+' `'+p+'` of type '+('`'+l+'` supplied to `'+r+'`, expected an array.'))}for(var d,c=0;c<s.length;c++)if(d=e(s,c,r,a,p+'['+c+']',_e),d instanceof Error)return d;return null})},element:function(){return a(function(t,n,r,a,p){var i=t[n];if(!e(i)){var s=u(i);return new o('Invalid '+a+' `'+p+'` of type '+('`'+s+'` supplied to `'+r+'`, expected a single ReactElement.'))}return null})}(),instanceOf:function(e){return a(function(t,n,r,a,p){if(!(t[n]instanceof e)){var i=e.name||h,s=c(t[n]);return new o('Invalid '+a+' `'+p+'` of type '+('`'+s+'` supplied to `'+r+'`, expected ')+('instance of `'+i+'`.'))}return null})},node:function(){return a(function(e,t,n,r,a){return i(e[t])?null:new o('Invalid '+r+' `'+a+'` supplied to '+('`'+n+'`, expected a ReactNode.'))})}(),objectOf:function(e){return a(function(t,n,r,a,p){if('function'!=typeof e)return new o('Property `'+p+'` of component `'+r+'` has invalid PropType notation inside objectOf.');var i=t[n],s=u(i);if('object'!==s)return new o('Invalid '+a+' `'+p+'` of type '+('`'+s+'` supplied to `'+r+'`, expected an object.'));for(var l in i)if(i.hasOwnProperty(l)){var d=e(i,l,r,a,p+'.'+l,_e);if(d instanceof Error)return d}return null})},oneOf:function(e){return Array.isArray(e)?a(function(t,n,a,p,s){for(var u=t[n],l=0;l<e.length;l++)if(r(u,e[l]))return null;var i=JSON.stringify(e);return new o('Invalid '+p+' `'+s+'` of value `'+u+'` '+('supplied to `'+a+'`, expected one of '+i+'.'))}):('production'===process.env.NODE_ENV?void 0:me(!1,'Invalid argument supplied to oneOf, expected an instance of array.'),ie.thatReturnsNull)},oneOfType:function(e){if(!Array.isArray(e))return'production'===process.env.NODE_ENV?void 0:me(!1,'Invalid argument supplied to oneOfType, expected an instance of array.'),ie.thatReturnsNull;for(var t,n=0;n<e.length;n++)if(t=e[n],'function'!=typeof t)return me(!1,'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',d(t),n),ie.thatReturnsNull;return a(function(t,n,r,a,p){for(var s,u=0;u<e.length;u++)if(s=e[u],null==s(t,n,r,a,p,_e))return null;return new o('Invalid '+a+' `'+p+'` supplied to '+('`'+r+'`.'))})},shape:function(e){return a(function(t,n,r,a,p){var i=t[n],s=u(i);if('object'!==s)return new o('Invalid '+a+' `'+p+'` of type `'+s+'` '+('supplied to `'+r+'`, expected `object`.'));for(var l in e){var d=e[l];if(d){var c=d(i,l,r,a,p+'.'+l,_e);if(c)return c}}return null})},exact:function(e){return a(function(t,n,r,a,p){var i=t[n],s=u(i);if('object'!==s)return new o('Invalid '+a+' `'+p+'` of type `'+s+'` '+('supplied to `'+r+'`, expected `object`.'));// We need to check all keys in case some are required but missing from
// props.
var l=re({},t[n],e);for(var d in l){var c=e[d];if(!c)return new o('Invalid '+a+' `'+p+'` key `'+d+'` supplied to `'+r+'`.\nBad object: '+JSON.stringify(t[n],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(e),null,'  '));var y=c(i,d,r,a,p+'.'+d,_e);if(y)return y}return null})}};// Important!
// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
return o.prototype=Error.prototype,b.checkPropTypes=Pe,b.PropTypes=b,b},Ne=function(){function e(e,t,n,r,o,a){a===_e||fe(!1,'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types')}function t(){return e}// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=ie,n.PropTypes=n,n},Ce=o(function(e){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if('production'!==process.env.NODE_ENV){var t='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103,n=function(e){return'object'==typeof e&&null!==e&&e.$$typeof===t};// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
e.exports=Te(n,!0)}else e.exports=Ne()}),Ee=process.env.NODE_ENV,qe=function(t,n,r,o,a,p,i,e){if('production'!==Ee&&void 0===n)throw new Error('invariant requires an error message argument');if(!t){var s;if(void 0===n)s=new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');else{var u=[r,o,a,p,i,e],l=0;s=new Error(n.replace(/%s/g,function(){return u[l++]})),s.name='Invariant Violation'}// we don't care about invariant's own frame
throw s.framesToPop=1,s}},Qe=o(function(e,t){Object.defineProperty(t,'__esModule',{value:!0});var n=function(e,t){return qe.default(!!t.client,'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>'),e.children(t.client)};n.contextTypes={client:Ce.object.isRequired},t.default=n});/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *//**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */n(Qe);/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 *//*eslint-disable no-self-compare */var je=Object.prototype.hasOwnProperty,De=function(e,t){if(b(e,t))return!0;if('object'!=typeof e||null===e||'object'!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;// Test for A's keys different from B.
for(var o=0;o<n.length;o++)if(!je.call(t,n[o])||!b(e[n[o]],t[n[o]]))return!1;return!0},Ie=o(function(e,t){var n=Z&&Z.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r=Z&&Z.__rest||function(n,r){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&0>r.indexOf(t)&&(e[t]=n[t]);if(null!=n&&'function'==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)0>r.indexOf(t[o])&&(e[t[o]]=n[t[o]]);return e};Object.defineProperty(t,'__esModule',{value:!0});var o=function(){function e(){this.observableQueries=[]}return e.prototype.recycle=function(e){e.setOptions({fetchPolicy:'standby',pollInterval:0,fetchResults:!1}),this.observableQueries.push({observableQuery:e,subscription:e.subscribe({})})},e.prototype.reuse=function(e){if(0>=this.observableQueries.length)return null;var t=this.observableQueries.pop();if(!t)return null;var o=t.observableQuery,a=t.subscription;a.unsubscribe();var p=e.ssr,i=e.client,s=r(e,['ssr','client']);return De(s.variables||{},o.variables)?(o.setOptions(n({},s,{pollInterval:e.pollInterval,fetchPolicy:e.fetchPolicy})),o):null},e}();t.ObservableQueryRecycler=o});n(Ie);var Ae=Ie.ObservableQueryRecycler,Me=o(function(e,t){var n=Z&&Z.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,'__esModule',{value:!0});var r=function(e){function t(t){var n=e.call(this,t)||this;return n.recyclers=new WeakMap,n.getQueryRecycler=n.getQueryRecycler.bind(n),n}return n(t,e),t.prototype.componentWillReceiveProps=function(e,t){this.context.client!==t.client&&(this.recyclers=new WeakMap)},t.prototype.getQueryRecycler=function(e){return this.recyclers.has(e)||this.recyclers.set(e,new Ie.ObservableQueryRecycler),this.recyclers.get(e)},t.prototype.getChildContext=function(){return{getQueryRecycler:this.getQueryRecycler}},t.prototype.render=function(){return this.props.children},t.propTypes={children:Ce.element.isRequired},t.contextTypes={client:Ce.object},t.childContextTypes={getQueryRecycler:Ce.func.isRequired},t}(Re.Component);t.default=r});n(Me);var Fe=o(function(e,t){var n=Z&&Z.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,'__esModule',{value:!0});var r=function(e){function t(t,n){var r=e.call(this,t,n)||this;return qe.default(t.client,'ApolloClient was not passed a client instance. Make sure you pass in your client via the "client" prop.'),r}return n(t,e),t.prototype.getChildContext=function(){return{client:this.props.client}},t.prototype.render=function(){return Re.createElement(Me.default,null,Re.Children.only(this.props.children))},t.propTypes={client:Ce.object.isRequired,children:Ce.element.isRequired},t.childContextTypes={client:Ce.object.isRequired},t}(Re.Component);t.default=r});n(Fe);var We=o(function(e,t){Object.defineProperty(t,'__esModule',{value:!0});var n;(function(e){e[e.Query=0]='Query',e[e.Mutation=1]='Mutation',e[e.Subscription=2]='Subscription'})(n=t.DocumentType||(t.DocumentType={})),t.parser=function(e){var t,r,o;qe.default(!!e&&!!e.kind,'Argument of '+e+' passed to parser was not a valid GraphQL DocumentNode. You may need to use \'graphql-tag\' or another method to convert your operation into a document');var a=e.definitions.filter(function(e){return'FragmentDefinition'===e.kind}),p=e.definitions.filter(function(e){return'OperationDefinition'===e.kind&&'query'===e.operation}),i=e.definitions.filter(function(e){return'OperationDefinition'===e.kind&&'mutation'===e.operation}),s=e.definitions.filter(function(e){return'OperationDefinition'===e.kind&&'subscription'===e.operation});qe.default(!a.length||p.length||i.length||s.length,'Passing only a fragment to \'graphql\' is not yet supported. You must include a query, subscription or mutation as well'),qe.default(1>=p.length+i.length+s.length,'react-apollo only supports a query, subscription, or a mutation per HOC. '+(e+' had '+p.length+' queries, '+s.length+' ')+('subscriptions and '+i.length+' mutations. You can use \'compose\' to join multiple operation types to a component')),r=p.length?n.Query:n.Mutation,p.length||i.length||(r=n.Subscription);var u=p.length?p:i.length?i:s;qe.default(1===u.length,'react-apollo only supports one defintion per HOC. '+e+' had '+(u.length+' definitions. You can use \'compose\' to join multiple operation types to a component'));var l=u[0];return t=l.variableDefinitions||[],o=l.name&&'Name'===l.name.kind?l.name.value:'data',{name:o,type:r,variables:t}}});n(We);var Ue=We.DocumentType,$e=We.parser,Le=Array.isArray,ze=Le,Ve='object'==typeof Z&&Z&&Z.Object===Object&&Z,Ye='object'==typeof self&&self&&self.Object===Object&&self,Be=Ve||Ye||Function('return this')(),He=Be,Ke=He.Symbol,Ge=Ke,Xe=Object.prototype,Je=Xe.hasOwnProperty,Ze=Xe.toString,et=Ge?Ge.toStringTag:void 0,tt=function(e){var t=Je.call(e,et),n=e[et];try{e[et]=void 0}catch(t){}var r=Ze.call(e);return t?e[et]=n:delete e[et],r},nt=Object.prototype,rt=nt.toString,ot=function(e){return rt.call(e)},at=Ge?Ge.toStringTag:void 0,pt=function(e){return null==e?void 0===e?'[object Undefined]':'[object Null]':at&&at in Object(e)?tt(e):ot(e)},it=function(e){return null!=e&&'object'==typeof e},st=function(e){return'symbol'==typeof e||it(e)&&pt(e)=='[object Symbol]'},ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lt=/^\w*$/,dt=function(e,t){if(ze(e))return!1;var n=typeof e;return'number'==n||'symbol'==n||'boolean'==n||null==e||st(e)||lt.test(e)||!ut.test(e)||null!=t&&e in Object(t)},ct=function(e){var t=typeof e;return null!=e&&('object'==t||'function'==t)},yt=function(e){if(!ct(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=pt(e);return t=='[object Function]'||t=='[object GeneratorFunction]'||t=='[object AsyncFunction]'||t=='[object Proxy]'},ft=He['__core-js_shared__'],ht=ft,bt=function(){var e=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||'');return e?'Symbol(src)_1.'+e:''}(),mt=function(e){return!!bt&&bt in e},_t=Function.prototype,gt=_t.toString,vt=function(e){if(null!=e){try{return gt.call(e)}catch(t){}try{return e+''}catch(t){}}return''},Ot=/[\\^$.*+?()[\]{}|]/g,kt=/^\[object .+?Constructor\]$/,Pt=Function.prototype,wt=Object.prototype,Rt=Pt.toString,xt=wt.hasOwnProperty,St=RegExp('^'+Rt.call(xt).replace(Ot,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),Tt=function(e){if(!ct(e)||mt(e))return!1;var t=yt(e)?St:kt;return t.test(vt(e))},Nt=function(e,t){return null==e?void 0:e[t]},Ct=function(e,t){var n=Nt(e,t);return Tt(n)?n:void 0},Et=Ct(Object,'create'),qt=Et,Qt=Object.prototype,jt=Qt.hasOwnProperty,Dt=Object.prototype,It=Dt.hasOwnProperty;/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 *//** Detect free variable `global` from Node.js. *//** Detect free variable `self`. *//** Used as a reference to the global object. *//** Built-in value references. *//** Used for built-in method references. *//** Used to check objects for own properties. *//**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 *//** Built-in value references. *//** Used for built-in method references. *//**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 *//** `Object#toString` result references. *//** Built-in value references. *//** `Object#toString` result references. *//** Used to match property names within property paths. *//** `Object#toString` result references. *//** Used to detect overreaching core-js shims. *//** Used to detect methods masquerading as native. *//** Used for built-in method references. *//** Used to resolve the decompiled source of functions. *//**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 *//** Used to detect host constructors (Safari). *//** Used for built-in method references. *//** Used to resolve the decompiled source of functions. *//** Used to check objects for own properties. *//** Used to detect if a method is native. *//* Built-in method references that are verified to be native. *//** Used to stand-in for `undefined` hash values. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used to stand-in for `undefined` hash values. */S.prototype.clear=function(){this.__data__=qt?qt(null):{},this.size=0},S.prototype['delete']=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},S.prototype.get=function(e){var t=this.__data__;if(qt){var n=t[e];return n==='__lodash_hash_undefined__'?void 0:n}return jt.call(t,e)?t[e]:void 0},S.prototype.has=function(e){var t=this.__data__;return qt?t[e]!==void 0:It.call(t,e)},S.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qt&&void 0===t?'__lodash_hash_undefined__':t,this};var At=S,Mt=function(e,t){return e===t||e!==e&&t!==t},Ft=function(e,t){for(var n=e.length;n--;)if(Mt(e[n][0],t))return n;return-1},Wt=Array.prototype,Ut=Wt.splice;/** Used for built-in method references. *//** Built-in value references. */T.prototype.clear=function(){this.__data__=[],this.size=0},T.prototype['delete']=function(e){var t=this.__data__,n=Ft(t,e);if(0>n)return!1;var r=t.length-1;return n==r?t.pop():Ut.call(t,n,1),--this.size,!0},T.prototype.get=function(e){var t=this.__data__,n=Ft(t,e);return 0>n?void 0:t[n][1]},T.prototype.has=function(e){return-1<Ft(this.__data__,e)},T.prototype.set=function(e,t){var n=this.__data__,r=Ft(n,e);return 0>r?(++this.size,n.push([e,t])):n[r][1]=t,this};var $t=Ct(He,'Map'),Lt=function(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e},zt=function(e,t){var n=e.__data__;return Lt(t)?n['string'==typeof t?'string':'hash']:n.map};/* Built-in method references that are verified to be native. */N.prototype.clear=function(){this.size=0,this.__data__={hash:new At,map:new($t||T),string:new At}},N.prototype['delete']=function(e){var t=zt(this,e)['delete'](e);return this.size-=t?1:0,t},N.prototype.get=function(e){return zt(this,e).get(e)},N.prototype.has=function(e){return zt(this,e).has(e)},N.prototype.set=function(e,t){var n=zt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};var Vt=N,Yt='Expected a function';/** Error message constants. */C.Cache=Vt;var Bt=/^\./,Ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Gt=function(e){var t=C(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return Bt.test(e)&&t.push(''),e.replace(Ht,function(e,n,r,o){t.push(r?o.replace(Kt,'$1'):n||e)}),t}),Xt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Jt=1/0,Zt=Ge?Ge.prototype:void 0,en=Zt?Zt.toString:void 0,tn=function(e){return null==e?'':Q(e)},nn=function(e,t){return ze(e)?e:dt(e,t)?[e]:Gt(tn(e))},rn=function(e){if('string'==typeof e||st(e))return e;var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t},on=function(e,t){t=nn(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[rn(t[n++])];return n&&n==r?e:void 0},an=function(){try{var e=Ct(Object,'defineProperty');return e({},'',{}),e}catch(t){}}(),pn=an,sn=function(e,t,n){'__proto__'==t&&pn?pn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},un=Object.prototype,ln=un.hasOwnProperty,dn=function(e,t,n){var r=e[t];ln.call(e,t)&&Mt(r,n)&&(n!==void 0||t in e)||sn(e,t,n)},cn=/^(?:0|[1-9]\d*)$/,yn=function(e,t){return t=null==t?9007199254740991:t,!!t&&('number'==typeof e||cn.test(e))&&-1<e&&0==e%1&&e<t},fn=function(e,t,n,r){if(!ct(e))return e;t=nn(t,e);for(var o=-1,a=t.length,p=e;null!=p&&++o<a;){var i=rn(t[o]),s=n;if(o!=a-1){var u=p[i];s=r?r(u,i,p):void 0,s===void 0&&(s=ct(u)?u:yn(t[o+1])?[]:{})}dn(p,i,s),p=p[i]}return e},hn=function(e,t,n){for(var r=-1,o=t.length,a={};++r<o;){var p=t[r],i=on(e,p);n(i,p)&&fn(a,nn(p,e),i)}return a},bn=function(e,t){return null!=e&&t in Object(e)},mn=function(e){return it(e)&&pt(e)=='[object Arguments]'},_n=Object.prototype,gn=_n.hasOwnProperty,vn=_n.propertyIsEnumerable,On=mn(function(){return arguments}())?mn:function(e){return it(e)&&gn.call(e,'callee')&&!vn.call(e,'callee')},kn=On,Pn=function(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},wn=function(e,t,n){t=nn(t,e);for(var r,o=-1,a=t.length,p=!1;++o<a&&(r=rn(t[o]),!!(p=null!=e&&n(e,r)));)e=e[r];return p||++o!=a?p:(a=null==e?0:e.length,!!a&&Pn(a)&&yn(r,a)&&(ze(e)||kn(e)))},Rn=function(e,t){return null!=e&&wn(e,t,bn)},xn=function(e,t){return hn(e,t,function(t,n){return Rn(e,n)})},Sn=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},Tn=Ge?Ge.isConcatSpreadable:void 0,Nn=function(e){return ze(e)||kn(e)||!!(Tn&&e&&e[Tn])},Cn=function(e){var t=null==e?0:e.length;return t?j(e,1):[]},En=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2]);}return e.apply(t,n)},qn=Math.max,Qn=function(e,t,n){return t=qn(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,a=qn(r.length-t,0),p=Array(a);++o<a;)p[o]=r[t+o];o=-1;for(var i=Array(t+1);++o<t;)i[o]=r[o];return i[t]=n(p),En(e,this,i)}},jn=function(e){return function(){return e}},Dn=pn?function(e,t){return pn(e,'toString',{configurable:!0,enumerable:!1,value:jn(t),writable:!0})}:function(e){return e},In=Date.now,An=function(e){var t=0,n=0;return function(){var r=In(),o=16-(r-n);if(n=r,!(0<o))t=0;else if(++t>=800)return arguments[0];return e.apply(void 0,arguments)}}(Dn),Mn=function(e){return An(Qn(e,void 0,Cn),e+'')},Fn=Mn(function(e,t){return null==e?{}:xn(e,t)}),Wn=Fn,Un=o(function(e,t){function n(e){var t=Wn.default(e,'refetch','fetchMore','updateQuery','startPolling','stopPolling');return Object.keys(t).forEach(function(n){var r=n;'function'==typeof t[r]&&(t[r]=t[r].bind(e))}),t}function r(e){return 0<Object.keys(e).length}var o=Z&&Z.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=Z&&Z.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},p=Z&&Z.__rest||function(n,r){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&0>r.indexOf(t)&&(e[t]=n[t]);if(null!=n&&'function'==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)0>r.indexOf(t[o])&&(e[t[o]]=n[t[o]]);return e};Object.defineProperty(t,'__esModule',{value:!0});var i=function(e){function t(t,o){var p=e.call(this,t,o)||this;return p.initializeQueryObservable=function(e){var t=e.variables,n=e.pollInterval,r=e.fetchPolicy,o=e.notifyOnNetworkStatusChange,a=e.query,i=We.parser(a);qe.default(i.type===We.DocumentType.Query,'The <Query /> component requires a graphql query, but got a '+(i.type===We.DocumentType.Mutation?'mutation':'subscription')+'.');p.queryObservable=p.client.watchQuery({variables:t,pollInterval:n,query:a,fetchPolicy:r,notifyOnNetworkStatusChange:o})},p.startQuerySubscription=function(){p.querySubscription=p.queryObservable.subscribe({next:p.updateCurrentData,error:function(e){if(p.resubscribeToQuery(),!e.hasOwnProperty('graphQLErrors'))throw e;p.updateCurrentData()}})},p.removeQuerySubscription=function(){p.querySubscription&&p.querySubscription.unsubscribe()},p.updateCurrentData=function(){p.setState({result:p.queryObservable.currentResult()})},p.getQueryResult=function(){var e=p.state.result,t=e.loading,o=e.error,i=e.networkStatus,s=e.data;return a({client:p.client,data:r(s)?s:void 0,loading:t,error:o,networkStatus:i},n(p.queryObservable))},qe.default(!!o.client,'Could not find "client" in the context of Query. Wrap the root component in an <ApolloProvider>'),p.client=o.client,p.initializeQueryObservable(t),p.state={result:p.queryObservable.currentResult()},p}return o(t,e),t.prototype.fetchData=function(){var e=this.props,t=e.children,n=e.ssr,r=p(e,['children','ssr']),o=r.fetchPolicy;if(!1===n)return!1;('network-only'===o||'cache-and-network'===o)&&(o='cache-first');var i=this.client.watchQuery(a({},r,{fetchPolicy:o})),s=this.queryObservable.currentResult();return!!s.loading&&i.result()},t.prototype.componentDidMount=function(){this.startQuerySubscription()},t.prototype.componentWillReceiveProps=function(e,t){De.default(this.props,e)&&this.client===t.client||(this.client!==t.client&&(this.client=t.client),this.removeQuerySubscription(),this.initializeQueryObservable(e),this.startQuerySubscription(),this.updateCurrentData())},t.prototype.componentWillUnmount=function(){this.removeQuerySubscription()},t.prototype.render=function(){var e=this.props.children,t=this.getQueryResult();return e(t)},t.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var e=this.queryObservable.getLastError(),t=this.queryObservable.getLastResult();this.queryObservable.resetLastResults(),this.startQuerySubscription(),Object.assign(this.queryObservable,{lastError:e,lastResult:t})},t.contextTypes={client:Ce.object.isRequired},t}(Re.Component);t.default=i});/** Used as the maximum memoize cache size. *//** Used to match property names within property paths. *//** Used to match backslashes in property paths. *//**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 *//** Used as references for various `Number` constants. *//** Used to convert symbols to primitives and strings. *//** Used as references for various `Number` constants. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used as references for various `Number` constants. *//** Used to detect unsigned integer values. *//** `Object#toString` result references. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Built-in value references. *//**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 *//** Used as references for various `Number` constants. *//** Built-in value references. *//* Built-in method references for those with the same name as other `lodash` methods. *//**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 *//** Used to detect hot functions by number of calls within a span of milliseconds. *//* Built-in method references for those with the same name as other `lodash` methods. *//**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 *//**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */n(Un);/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var $n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},Ln={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zn=Object.defineProperty,Vn=Object.getOwnPropertyNames,Yn=Object.getOwnPropertySymbols,Bn=Object.getOwnPropertyDescriptor,Hn=Object.getPrototypeOf,Kn=Hn&&Hn(Object),Gn=function e(t,n,r){if('string'!=typeof n){// don't hoist over string (html) components
if(Kn){var o=Hn(n);o&&o!==Kn&&e(t,o,r)}var a=Vn(n);Yn&&(a=a.concat(Yn(n)));for(var p,s=0;s<a.length;++s)if(p=a[s],!$n[p]&&!Ln[p]&&(!r||!r[p])){var i=Bn(n,p);try{zn(t,p,i)}catch(t){}}return t}return t},Xn=o(function(e,t){function n(e){var t=Wn.default(e,'variables','refetch','fetchMore','updateQuery','startPolling','stopPolling','subscribeToMore');return Object.keys(t).forEach(function(n){var r=n;'function'==typeof t[r]&&(t[r]=t[r].bind(e))}),t}function r(e){return e.displayName||e.name||'Component'}var o=Z&&Z.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=Z&&Z.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};Object.defineProperty(t,'__esModule',{value:!0});var p=function(){return{}},i=function(e){return e},s=function(){return!1},u=0;t.default=function(e,t){void 0===t&&(t={});var l=t.options,d=void 0===l?p:l,c=t.skip,y=void 0===c?s:c,f=t.alias,h=void 0===f?'Apollo':f,b=d;'function'!=typeof b&&(b=function(){return d});var m=y;'function'!=typeof m&&(m=function(){return y});var _=t.props,g=We.parser(e),v=u++;return function(p){var s=h+'('+r(p)+')',u=function(u){function l(e,t){var n=u.call(this,e,t)||this;return n.previousData={},n.version=v,n.type=g.type,n.dataForChildViaMutation=n.dataForChildViaMutation.bind(n),n.setWrappedInstance=n.setWrappedInstance.bind(n),n}return o(l,u),l.prototype.componentWillMount=function(){this.shouldSkip(this.props)||this.setInitialProps()},l.prototype.componentDidMount=function(){if((this.hasMounted=!0,this.type!==We.DocumentType.Mutation)&&!this.shouldSkip(this.props)&&(this.subscribeToQuery(),this.refetcherQueue)){var e=this.refetcherQueue,t=e.args,n=e.resolve,r=e.reject;this.queryObservable.refetch(t).then(n).catch(r)}},l.prototype.componentWillReceiveProps=function(e,n){if(this.shouldSkip(e))return void(this.shouldSkip(this.props)||this.unsubscribeFromQuery());var r=b(e).client;if(!(De.default(this.props,e)&&(this.client===r||this.client===n.client)))return this.shouldRerender=!0,this.client!==r&&this.client!==n.client?(this.client=r?r:n.client,this.unsubscribeFromQuery(),this.queryObservable=null,this.previousData={},this.updateQuery(e),void(this.shouldSkip(e)||this.subscribeToQuery())):this.type===We.DocumentType.Mutation?void 0:this.type===We.DocumentType.Subscription&&t.shouldResubscribe&&t.shouldResubscribe(this.props,e)?(this.unsubscribeFromQuery(),delete this.queryObservable,this.updateQuery(e),void this.subscribeToQuery()):void(this.updateQuery(e),this.subscribeToQuery())},l.prototype.componentWillUnmount=function(){if(this.type===We.DocumentType.Query){if(this.queryObservable){var e=this.getQueryRecycler();e&&(e.recycle(this.queryObservable),delete this.queryObservable)}this.unsubscribeFromQuery()}this.type===We.DocumentType.Subscription&&this.unsubscribeFromQuery(),this.hasMounted=!1},l.prototype.getQueryRecycler=function(){return this.context.getQueryRecycler&&this.context.getQueryRecycler(l)},l.prototype.getClient=function(e){if(this.client)return this.client;var t=b(e).client;return this.client=t?t:this.context.client,qe.default(!!this.client,'Could not find "client" in the context of "'+s+'". Wrap the root component in an <ApolloProvider>'),this.client},l.prototype.calculateOptions=function(e,t){void 0===e&&(e=this.props);var n=b(e);if(t&&t.variables&&(t.variables=re.default({},n.variables,t.variables)),t&&(n=re.default({},n,t)),n.variables||!g.variables.length)return n;for(var o={},i=0,u=g.variables;i<u.length;i++){var l=u[i],d=l.variable,c=l.type;if(d.name&&d.name.value){var y=d.name.value,f=e[y];if('undefined'!=typeof f){o[y]=f;continue}if('NonNullType'!==c.kind){o[y]=null;continue}qe.default('undefined'!=typeof f,'The operation \''+g.name+'\' wrapping \''+r(p)+'\' '+('is expecting a variable: \''+d.name.value+'\' but it was not found in the props ')+('passed to \''+s+'\''))}}return n=a({},n,{variables:o}),n},l.prototype.calculateResultProps=function(e){var n=this.type===We.DocumentType.Mutation?'mutate':'data';t.name&&(n=t.name);var r=(o={},o[n]=e,o.ownProps=this.props,o);return _?(this.lastResultProps=_(r,this.lastResultProps),this.lastResultProps):(a={},a[n]=i(e),a);var o,a},l.prototype.setInitialProps=function(){if(this.type!==We.DocumentType.Mutation){var e=this.calculateOptions(this.props);this.createQuery(e)}},l.prototype.createQuery=function(t,n){if(void 0===n&&(n=this.props),this.type===We.DocumentType.Subscription)this.queryObservable=this.getClient(n).subscribe(re.default({query:e},t));else{var r=this.getQueryRecycler(),o=null;r&&(o=r.reuse(t)),this.queryObservable=null===o?this.getClient(n).watchQuery(re.default({query:e,metadata:{reactComponent:{displayName:s}}},t)):o}},l.prototype.updateQuery=function(e){var t=this.calculateOptions(e);this.queryObservable||this.createQuery(t,e),this.queryObservable._setOptionsNoResult?this.queryObservable._setOptionsNoResult(t):this.queryObservable.setOptions&&this.queryObservable.setOptions(t).catch(function(){return null})},l.prototype.fetchData=function(){if(this.shouldSkip())return!1;if(g.type===We.DocumentType.Mutation||g.type===We.DocumentType.Subscription)return!1;var t=this.calculateOptions();if(!1===t.ssr)return!1;('network-only'===t.fetchPolicy||'cache-and-network'===t.fetchPolicy)&&(t.fetchPolicy='cache-first');var n=this.getClient(this.props).watchQuery(re.default({query:e},t)),r=n.currentResult();return!!r.loading&&n.result()},l.prototype.subscribeToQuery=function(){var e=this;if(!this.querySubscription){var t=function(t){e.type===We.DocumentType.Subscription&&(e.lastSubscriptionData=t);var r=Object.keys(n(t.data));qe.default(0===r.length,'the result of the \''+s+'\' operation contains keys that conflict with the return object.'+r.map(function(e){return'\''+e+'\''}).join(', ')+' not allowed.'),e.forceRenderChildren()},r=function(n){if(e.resubscribeToQuery(),n.hasOwnProperty('graphQLErrors'))return t({error:n});throw n};this.querySubscription=this.queryObservable.subscribe({next:t,error:r})}},l.prototype.unsubscribeFromQuery=function(){this.querySubscription&&(this.querySubscription.unsubscribe(),delete this.querySubscription)},l.prototype.resubscribeToQuery=function(){var e=this.querySubscription;e&&delete this.querySubscription;var t=this.queryObservable,n=t.lastError,r=t.lastResult;this.queryObservable.resetLastResults(),this.subscribeToQuery(),Object.assign(this.queryObservable,{lastError:n,lastResult:r}),e&&e.unsubscribe()},l.prototype.shouldSkip=function(e){return void 0===e&&(e=this.props),m(e)},l.prototype.forceRenderChildren=function(){this.shouldRerender=!0,this.hasMounted&&this.forceUpdate()},l.prototype.getWrappedInstance=function(){return qe.default(t.withRef,'To access the wrapped instance, you need to specify { withRef: true } in the options'),this.wrappedInstance},l.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},l.prototype.dataForChildViaMutation=function(t){var n=this.calculateOptions(this.props,t);return'undefined'==typeof n.variables&&delete n.variables,n.mutation=e,this.getClient(this.props).mutate(n)},l.prototype.dataForChild=function(){var e=this;if(this.type===We.DocumentType.Mutation)return this.dataForChildViaMutation;var t=this.calculateOptions(this.props),r={};if(re.default(r,n(this.queryObservable)),this.type===We.DocumentType.Subscription)re.default(r,{loading:!this.lastSubscriptionData,variables:t.variables},this.lastSubscriptionData&&this.lastSubscriptionData.data);else{var o=this.queryObservable.currentResult(),a=o.loading,p=o.error,i=o.networkStatus;re.default(r,{loading:a,networkStatus:i});var u=setTimeout(function(){if(p){var e=p;p.stack&&(e=p.stack.includes(p.message)?p.stack:p.message+'\n'+p.stack),console.error('Unhandled (in react-apollo:'+s+')',e)}},10);Object.defineProperty(r,'error',{configurable:!0,enumerable:!0,get:function(){return clearTimeout(u),p}}),a?re.default(r,this.previousData,o.data):p?re.default(r,(this.queryObservable.getLastResult()||{}).data):(re.default(r,o.data),this.previousData=o.data),this.querySubscription||(r.refetch=function(t){return new Promise(function(n,o){e.refetcherQueue={resolve:n,reject:o,args:t}})})}return r},l.prototype.render=function(){if(this.shouldSkip())return t.withRef?Re.createElement(p,a({},re.default({},this.props,{ref:this.setWrappedInstance}))):Re.createElement(p,a({},this.props));var e=this,n=e.shouldRerender,r=e.renderedElement,o=e.props;if(this.shouldRerender=!1,!n&&r&&r.type===p)return r;var i=this.dataForChild(),s=this.calculateResultProps(i),u=re.default({},o,s);return t.withRef&&(u.ref=this.setWrappedInstance),this.renderedElement=Re.createElement(p,a({},u)),this.renderedElement},l.displayName=s,l.WrappedComponent=p,l.contextTypes={client:Ce.object,getQueryRecycler:Ce.func},l}(Re.Component);return Gn.default(u,p,{})}}});n(Xn);var Jn=o(function(e,t){function n(e){return e.displayName||e.name||'Component'}var r=Z&&Z.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=Z&&Z.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};Object.defineProperty(t,'__esModule',{value:!0}),t.default=function(e,t){void 0===t&&(t={});var a='withApollo('+n(e)+')',p=function(n){function p(e){var t=n.call(this,e)||this;return t.setWrappedInstance=t.setWrappedInstance.bind(t),t}return r(p,n),p.prototype.getWrappedInstance=function(){return qe.default(t.withRef,'To access the wrapped instance, you need to specify { withRef: true } in the options'),this.wrappedInstance},p.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},p.prototype.render=function(){var n=this;return Re.createElement(Qe.default,null,function(r){var a=re.default({},n.props,{client:r,ref:t.withRef?n.setWrappedInstance:void 0});return Re.createElement(e,o({},a))})},p.displayName=a,p.WrappedComponent=e,p}(Re.Component);return Gn.default(p,e,{})}});n(Jn);/** Built-in value references. */var Zn=Object.create,er=function(){function e(){}return function(t){if(!ct(t))return{};if(Zn)return Zn(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),tr=er,nr=function(){// No operation performed.
};/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */$.prototype=tr(nr.prototype),$.prototype.constructor=$;var rr=$,or=Ct(He,'WeakMap'),ar=or,pr=ar&&new ar,ir=pr,sr=ir?function(e){return ir.get(e)}:function(){// No operation performed.
},ur=sr,lr={},dr=Object.prototype,cr=dr.hasOwnProperty,yr=function(e){for(var t=e.name+'',n=lr[t],r=cr.call(lr,t)?n.length:0;r--;){var o=n[r],a=o.func;if(null==a||a==e)return o.name}return t},fr=4294967295;/* Built-in method references that are verified to be native. *//** Used to store function metadata. *//**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 *//** Used to lookup unminified function names. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used as references for the maximum length and index of an array. */Y.prototype=tr(nr.prototype),Y.prototype.constructor=Y;var hr=Y,br=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},mr=function(e){if(e instanceof hr)return e.clone();var t=new rr(e.__wrapped__,e.__chain__);return t.__actions__=br(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t},_r=Object.prototype,gr=_r.hasOwnProperty;/** Used for built-in method references. *//** Used to check objects for own properties. */X.prototype=nr.prototype,X.prototype.constructor=X;var vr=function(e){var t=yr(e),n=X[t];if('function'!=typeof n||!(t in hr.prototype))return!1;if(e===n)return!0;var r=ur(n);return!!r&&e===r[0]},Or=function(e){return Mn(function(t){var n=t.length,r=n,o=rr.prototype.thru;for(e&&t.reverse();r--;){var a=t[r];if('function'!=typeof a)throw new TypeError('Expected a function');if(o&&!p&&'wrapper'==yr(a))var p=new rr([],!0)}for(r=p?r:n;++r<n;){a=t[r];var i=yr(a),s='wrapper'==i?ur(a):void 0;p=s&&vr(s[0])&&s[1]==(128|8|32|256)&&!s[4].length&&1==s[9]?p[yr(s[0])].apply(p,s[3]):1==a.length&&vr(a)?p[i]():p.thru(a)}return function(){var e=arguments,r=e[0];if(p&&1==e.length&&ze(r))return p.plant(r).value();for(var o=0,a=n?t[o].apply(this,e):r;++o<n;)a=t[o].call(this,a);return a}})}(!0),kr=o(function(e,t){function n(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,'__esModule',{value:!0}),t.getDataFromTree=xe.default,n(xe),t.ApolloConsumer=Qe.default,n(Qe),t.ApolloProvider=Fe.default,n(Fe),t.Query=Un.default,n(Un),t.graphql=Xn.default,n(Xn),t.withApollo=Jn.default,t.compose=Or}),Pr=n(kr),wr=kr.getDataFromTree,Rr=kr.ApolloConsumer,xr=kr.ApolloProvider,Sr=kr.Query,Tr=kr.graphql,Nr=kr.withApollo,Cr=kr.compose;/** Error message constants. *//** Used to compose bitmasks for function metadata. *//**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */e.default=Pr,e.getDataFromTree=wr,e.ApolloConsumer=Rr,e.ApolloProvider=xr,e.Query=Sr,e.graphql=Tr,e.withApollo=Nr,e.compose=Cr,Object.defineProperty(e,'__esModule',{value:!0})});
//# sourceMappingURL=react-apollo.browser.umd.js.map
