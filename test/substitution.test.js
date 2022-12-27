// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() - written by Micah - ", () => {
    describe("handling special characters", () => {
        it("should handle special characters for encoding", () => {
            const message = "hello world"
            const alphabet = "!@#$%^&*()_+abcdefghijklmn"
            const expected = "*%++c kcf+$"
            const actual = substitution(message, alphabet)
            expect(actual).to.equal(expected)
        });
        it("should handle special characters for decoding", () => {
            const message = "*%++c kcf+$"
            const alphabet = "!@#$%^&*()_+abcdefghijklmn"
            const expected = "hello world"
            const actual = substitution(message, alphabet, false)
            expect(actual).to.equal(expected)
        });
    });
    
    describe("handling capital letters", () => {
        it("should handle capital letters for encoding", () => {
            const message = "SI VEO A TU MAMA"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "hr evl z gf nznz"
            const actual = substitution(message, alphabet, false)
            expect(actual).to.equal(expected)
        });
        it("should handle capital letters for decoding", () => {
            const message = "HR EVL Z GF NZNZ"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "si veo a tu mama"
            const actual = substitution(message, alphabet, false)
            expect(actual).to.equal(expected)
        });
    });
});