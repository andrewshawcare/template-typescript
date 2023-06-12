import assert from "assert";

import { trueGenerator } from "../src/true-generator.js";

it("should be true", () => {
    assert.equal(trueGenerator(), true);
})