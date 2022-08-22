import type { Test } from "@vangware/test";

export const wantedFalse: Pick<Test, "must" | "wanted"> = {
	must: "return false",
	wanted: () => false,
};

export const wantedTrue: Pick<Test, "must" | "wanted"> = {
	must: "return true",
	wanted: () => true,
};
