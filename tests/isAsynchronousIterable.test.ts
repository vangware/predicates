import type { Tests } from "@vangware/test";
import { isAsynchronousIterable } from "../src/isAsynchronousIterable.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received:
			isAsynchronousIterable(BigInt(1)) &&
			isAsynchronousIterable(BigInt("1")) &&
			isAsynchronousIterable(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: isAsynchronousIterable(true) && isAsynchronousIterable(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: isAsynchronousIterable(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: isAsynchronousIterable(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: isAsynchronousIterable(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: isAsynchronousIterable(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received:
			isAsynchronousIterable(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isAsynchronousIterable(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: isAsynchronousIterable("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received:
			isAsynchronousIterable(Symbol("description")) &&
			isAsynchronousIterable(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: isAsynchronousIterable([]),
		...wantedTrue,
	},
	{
		given: "an object with a Symbol.iterator property",
		received: isAsynchronousIterable({ [Symbol.iterator]: () => void 0 }),
		...wantedTrue,
	},
	{
		given: "an object with a Symbol.asyncIterator property",
		received: isAsynchronousIterable({
			[Symbol.asyncIterator]: () => void 0,
		}),
		...wantedTrue,
	},
	{
		given: "an object",
		received: isAsynchronousIterable({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isAsynchronousIterable(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: isAsynchronousIterable(undefined),
		...wantedFalse,
	},
] as Tests<boolean>;
