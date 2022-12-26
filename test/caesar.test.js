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

    it("should allow a shift to the left for a negative number - test written by Micah -", () => {
        
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const message = "I love you so much, Alice!";
        const expected = "f ilsb vlr pl jrze, xifzb!"
        const actual = caesar(message, -3)
    });

    it("should shift the opposite direction when 'encode' is false - test written by Micah -", () => {
        const message = "i o u";
        const expected = "h n t";
        const actual = caesar(message, 1, false);

        expect(actual).to.equal(expected)
    });
});