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
	<Actual extends object>(
		// Using `Readonly<Record<...>>` instead of `ReadOnlyRecord` because of TS limitations.
		object: Actual | Readonly<Record<Property, unknown>>,
	): object is Readonly<Record<Property, unknown>> =>
		property in object;
