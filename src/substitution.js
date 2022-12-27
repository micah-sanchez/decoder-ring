// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

//decode helper functions
  /*finds letter index in substitution alphabet */ 
  function findIndexInNewAlphabet(substitutionAlphabet, letter) {
    const letterIndex = substitutionAlphabet.indexOf(letter);
    return letterIndex;
  }
  /*finds letter in standard alphabet */ 
  function findLetterInAlphabet(index) {
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return standardAlphabet[index];
  }

  //encode helper functions
  /*finds letter index in standard alphabet */ 
  function findIndexInStandardAlphabet(letter) {
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterIndex = standardAlphabet.indexOf(letter);
    return letterIndex;
  }
    /*finds letter in new alphabet */ 
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

    //handling capital letters
    const lowerCaseInput = input.toLowerCase();

    //declaring return variable (result)
    let result = "";

    //encode/decode control flow 
    
    //decode
    if (!encode) {
      for (i = 0; i < lowerCaseInput.length; i++) {
        const letter = lowerCaseInput[i];
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

        //solve for spaces (if undefined, letter = space)
        if (!encodedLetter) {
          result += letter;
        //if not falsy, append decoded letter
        } else {
          result += encodedLetter;
        }
      }
    }

    //returning result variable
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };