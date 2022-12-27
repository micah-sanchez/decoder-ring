// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function findIndexInNewAlphabet(substitutionAlphabet, letter) {
    const letterIndex = substitutionAlphabet.indexOf(letter);
    return letterIndex;
  }

  function findLetterInAlphabet(index) {
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return standardAlphabet[index];
  }

  function findIndexInStandardAlphabet(letter) {
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterIndex = standardAlphabet.indexOf(letter);
    return letterIndex;
  }

  console.log(findIndexInStandardAlphabet("m"))

  function findLetterInNewAlphabet(substitutionAlphabet, index) {
        return substitutionAlphabet[index]
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  //handling edge cases 
    //if sub alphabet is missing - return false
    if (alphabet === undefined) {
      return false;
    }
    //if sub alphabet is not exactly 26 characters
    if (alphabet.length != 26) {
      return false;
    }
    //if sub alphabet does not have unique characters
    let resultForTestingUniqueness = [];
    for (i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      if (resultForTestingUniqueness.includes(letter)) {
        return false;
      } else {
        resultForTestingUniqueness.push(letter);
      }
    }

    let result = "";
    //encode/decode control flow 
    //decode
    if (!encode) {
      for (i = 0; i < input.length; i++) {
        const letter = input[i];
        //finding the index of the input character
        const inputIndex = findIndexInNewAlphabet(alphabet, letter);
        //finding the standard alphabet letter using the inputIndex
        const decodedLetter = findLetterInAlphabet(inputIndex);
        //solve for spaces (if undefined, letter = space)
        if (!decodedLetter) {
          result += letter;
        //if not falsy, append decoded letter
        } else {
          result += decodedLetter;
        }
      }
    //encode
    } else {
      for (i = 0; i < input.length; i++) {
        const letter = input[i];
        //finding the index of the input character
        const inputIndex = findIndexInStandardAlphabet(letter);
        //finding the standard alphabet letter using the inputIndex
        const encodedLetter = findLetterInNewAlphabet(alphabet, inputIndex);

        //console.log("letter:", letter, "inputIndex", inputIndex, "encoded letter", encodedLetter)
        //solve for spaces (if undefined, letter = space)
        if (!encodedLetter) {
          result += letter;
        //if not falsy, append decoded letter
        } else {
          result += encodedLetter;
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. 
//Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.