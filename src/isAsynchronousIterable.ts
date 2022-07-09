import type { AsynchronousIterable } from "@vangware/types";
import { hasAsyncIteratorSymbol } from "./hasAsyncIteratorSymbol.js";
import { hasIteratorSymbol } from "./hasIteratorSymbol.js";
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
export const isAsynchronousIterable = <Actual, Item>(
	input: Actual | AsynchronousIterable<Item>,
): input is AsynchronousIterable<Item> =>
	isObject(input) &&
	(hasIteratorSymbol(input) || hasAsyncIteratorSymbol(input));
