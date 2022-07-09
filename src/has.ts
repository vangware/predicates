import type { ReadOnlyRecord } from "@vangware/types";

/**
 * Curried wrapper for the `in` operator. Given a `property` name and an
 * `object`, returns `true` the object contains that property, `false`
 * otherwise.
 *
 * @category Objects
 * @example
 * ```typescript
 * const hasCircle = has("🟢");
 *
 * hasCircle({ "🟢": "🟩" }); // true
 * hasCircle({ "🟩": "🟢" }); // false
 * ```
 * @returns Curried function with `property` in context.
 */
export const has =
	<Property extends PropertyKey>(property: Property) =>
	// eslint-disable-next-line @typescript-eslint/ban-types
	<Actual extends object>(
		object: Actual | ReadOnlyRecord<unknown, Property>,
	): object is ReadOnlyRecord<unknown, Property> =>
		property in object;
