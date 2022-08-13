import { hasIteratorSymbol } from "./hasIteratorSymbol.js";
import { isFunction } from "./isFunction.js";
import { isObject } from "./isObject.js";

/**
 * Check if given value is iterable.
 *
 * @category Iterables
 * @example
 * ```
 * isIterable([]); // true
 * isIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns Boolean (`true` when is an iterable, `false` otherwise).
 */
export const isIterable = <Actual, Item>(
	input: Actual | Iterable<Item>,
): input is Iterable<Item> =>
	isObject(input) &&
	hasIteratorSymbol(input) &&
	isFunction(input[Symbol.iterator]);
