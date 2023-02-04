import type { ReadOnlyDeep, RegularExpression } from "@vangware/types";
import { isString } from "./isString.js";

/**
 * Given a regular expression and a string, returns `true` if the string matches the regular expression.
 *
 * @category Primitive
 * @example
 * ```typescript
 * const matchNumbers = match(/\d+/u);
 *
 * matchNumbers("123"); // true
 * matchNumbers("abc"); // false
 * ```
 * @param regularExpression Instance of `RegExp` or a string.
 * @returns `true` if the string matches the regular expression, `false` otherwise.
 */
export const match = (
	regularExpression: ReadOnlyDeep<RegExp> | RegularExpression,
) => {
	const { flags, source } = isString(regularExpression)
		? {
				...(/\/(?<source>.+)\/(?<flags>[gimsu])+$/u.exec(
					regularExpression,
				)?.groups as Pick<RegExp, "flags" | "source">),
		  }
		: regularExpression;

	return (text: string) => new RegExp(source, flags).test(text);
};
