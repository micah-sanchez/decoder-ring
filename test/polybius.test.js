// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() - written by Micah - ", () => {
    it("should get the row value based on the inputted letter", () => {
        const message = 'h';
        const expected = "2";
        const actual = polybius(message)[1];

        expect(actual).equal(expected);
    });

    it("should get the column value based on the inputted letter", () => {
        const message = 'h';
        const expected = "3";
        const actual = polybius(message)[0];

        expect(actual).equal(expected);
    });
});