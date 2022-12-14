import { hasIteratorSymbol } from "./hasIteratorSymbol.js";
import { isFunction } from "./isFunction.js";
import { isObject } from "./isObject.js";
import { isString } from "./isString.js";

/**
 * Check if given value is `Iterable`.
 *
 * @category Iterables
 * @example
 * ```
 * isIterable([]); // true
 * isIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `Iterable`, `false` otherwise.
 */
export const isIterable = <Actual, Item>(
	input: Actual | Iterable<Item>,
): input is Iterable<Item> =>
	isString(input) ||
	(isObject(input) &&
		hasIteratorSymbol(input) &&
		isFunction(input[Symbol.iterator]));
