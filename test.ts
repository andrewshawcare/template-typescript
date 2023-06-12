import assert from "assert";

import { generateTruth } from "./generate-truth.ts";

describe("generateTruth", () => {
    it("should be a function that returns true", () => {
        assert.equal(generateTruth(), true);
    })
})