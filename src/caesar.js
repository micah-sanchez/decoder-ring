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
    // your solution code here
    
    let result = "";

    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    const lowerCaseConversion = input.toLowerCase()

//create encode/decode if statement 
    if (!encode) {
      shift = -shift;
    }
    
    for (let i = 0; i < lowerCaseConversion.length; i++) {
      const letter = lowerCaseConversion[i]
        
      if (!alphabet.includes(letter)) {
        result += letter
          
      } else {
        let alphabetIndex = findAlphabetIndex(letter);
        //console.log(letter, alphabetIndex)
  
        if (alphabetIndex < 0) {
          const positiveAlphabetIndex = 26 + alphabetIndex;
          result += alphabet[positiveAlphabetIndex];
        } else if (alphabetIndex + shift >= 26) {
          const wrappedIndex = alphabetIndex + shift - 26;
          result += alphabet[wrappedIndex];
        } else {
          const shiftIndex = shift + alphabetIndex;
  
          if (shiftIndex < 0) {
            const wrappedIndex = 26 + shiftIndex;
            result += alphabet[wrappedIndex]
          } else {
            result += alphabet[shiftIndex];
          }
        }
      }
    }

    

//loop through 

    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
