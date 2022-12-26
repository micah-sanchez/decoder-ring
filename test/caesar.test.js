// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() - test written by Micah -", () => {
    it("should return a space when a space is inputted", () => {
        const message = "i o u"
        const expected = "j p v"
        const actual = caesar(message, 1)

        expect(actual).to.equal(expected)
    });
});