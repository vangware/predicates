import { hasAsyncIteratorSymbol } from "./hasAsyncIteratorSymbol.js";
import { isFunction } from "./isFunction.js";
import { isObject } from "./isObject.js";

/**
 * Check if given value is `AsyncIterable`.
 *
 * **Not to be confused with `isAsynchronousIterable` which checks for both
 * `AsyncIterable` and `Iterable`.**
 *
 * @category Iterables
 * @example
 * ```
 * isAsyncIterable((async function * () { yield* [] })()); // true
 * isAsyncIterable([]); // false
 * isAsyncIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `AsyncIterable`, `false` otherwise.
 */
export const isAsyncIterable = <Actual, Item>(
	input: Actual | AsyncIterable<Item>,
): input is AsyncIterable<Item> =>
	isObject(input) &&
	hasAsyncIteratorSymbol(input) &&
	isFunction(input[Symbol.asyncIterator]);
