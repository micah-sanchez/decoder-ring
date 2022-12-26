// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // you can add any code you want within this function scope
  /*function to find alphabet index */
  function findAlphabetIndex(letter) {
    const alphabetIndex = alphabet.indexOf(letter);
    return alphabetIndex;
  }

  function caesar(input, shift, encode = true) {
  //return variable - result  
    let result = "";
    
  //handling edge cases where shift = 0, is greater than 25, or less than -25
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
  //variable to convert string to lower case and ignore capital letters
    const lowerCaseConversion = input.toLowerCase()

  //if encode is false, shift should be the inverse of inputted parameter
    if (!encode) {
      shift = -shift;
    }
    
    for (let i = 0; i < lowerCaseConversion.length; i++) {
      const letter = lowerCaseConversion[i]
      //check if 'letter' is in not in the alphabet (aka symbol/space) 
      if (!alphabet.includes(letter)) {
        result += letter
      
      //if letter is in alphabet   
      } else {
        let alphabetIndex = findAlphabetIndex(letter);
        
        //check if shift will push past 'z'
        if (alphabetIndex + shift >= 26) {
          const wrappedIndex = alphabetIndex + shift - 26;
          result += alphabet[wrappedIndex];

        //else statement means that the index + shift is in the alphabet or is negative
        } else {
          const shiftIndex = shift + alphabetIndex;
        
          // checks if shiftIndex is negative
          if (shiftIndex < 0) {
            const wrappedIndex = 26 + shiftIndex;
            result += alphabet[wrappedIndex]

          // shiftIndex is not negative, letter is in alphabet
          } else {
            result += alphabet[shiftIndex];
          }
        }
      }
    }

    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
