// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    const lowerCaseConversion = input.toLowerCase()

//create encode/decode if statement 
    // if (encode) {

    // } else if (!encode) {

    // }

    

//loop through 
    for (let i = 0; i < lowerCaseConversion.length; i++) {
      const letter = lowerCaseConversion[i]
      
      if (!alphabet.includes(letter)) {
        result += letter
        
      } else {
        const alphabetIndex = alphabet.indexOf(letter)

        if (alphabetIndex < 0) {
          const positiveAlphabetIndex = 26 + alphabetIndex;
          result += alphabet[positiveAlphabetIndex];

        } else {
          const shiftIndex = shift + alphabetIndex;
          result += alphabet[shiftIndex];
        }
      }

      

      // test whether the index is negative
      //if it is 26 + index gives index of wrap around
      
      
      //console.log("input:", input[i], "alphabet index:", alphabetIndex)
      //console.log(input, input[i])
      // result += alphabet[shiftedAmount].toLowerCase(); 
      //console.log(result)
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
