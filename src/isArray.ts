import type { AsynchronousIterable, ReadOnlyArray } from "@vangware/types";

/**
 * Check if given `input` is an instance of `Array`.
 *
 * @category Iterables
 * @example
 * ```typescript
 * isArray([]); // true
 * isArray({ length: 42 }); // false
 * ```
 * @returns `true` if the given value is an array, `false` otherwise.
 */
export const isArray = Array.isArray as <Item, Actual>(
	input: Actual | AsynchronousIterable<Item>,
) => input is ReadOnlyArray<Item>;
