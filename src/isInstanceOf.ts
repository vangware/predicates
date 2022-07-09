import type { GenericConstructor } from "@vangware/types";

/**
 * Takes a `constructor` and checks if given `input` is an instance of it.
 *
 * @category Objects
 * @example
 * ```typescript
 * const instanceOfArray = instanceOf(Array)
 *
 * instanceOfArray([]); // true
 * instanceOfArray({}); // false
 * ```
 * @returns Returns a curried function with `constructor` in context.
 */
export const isInstanceOf =
	<Expected extends GenericConstructor>(constructor: Expected) =>
	<Actual = unknown>(
		input: Actual | InstanceType<Expected>,
	): input is InstanceType<Expected> =>
		input instanceof constructor;
