import type { AsynchronousIterable } from "@vangware/types";
import { isAsyncIterable } from "./isAsyncIterable.js";
import { isIterable } from "./isIterable.js";

/**
 * Check if given value is `AsynchronousIterable` (either `Iterable` or
 * `AsyncIterable`).
 *
 * **Not to be confused with `isAsyncIterable` which only checks for
 * `AsyncIterable`.**
 *
 * @category Iterables
 * @example
 * ```
 * isIterable([]); // true
 * isIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `AsynchronousIterable`, `false` otherwise.
 */
export const isAsynchronousIterable = <Actual, Item>(
	input: Actual | AsynchronousIterable<Item>,
): input is AsynchronousIterable<Item> =>
	isIterable(input) || isAsyncIterable(input);
