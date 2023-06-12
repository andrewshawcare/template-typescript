import * as assert from "assert";
import { describe, it } from "mocha";

import { generateTruth } from "./generate-truth.js";

describe("generateTruth", () => {
    it("should be a function that returns true", () => {
        assert.equal(generateTruth(), true);
    })
})