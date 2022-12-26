// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = ["a" , "b" , "c", "d", "e", "f", "g", "h", "(i/j)", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u","v","w","x","y","z"]
  

  function findAlphabetIndex(letter) {
      return alphabet.indexOf(letter) + 1;
  }

  function findAlphabetIndexInArray(letter) {
    return alphabetArray.indexOf(letter) + 1;
}

  function polybius(input, encode = true) {
    // your solution code here
    // ignoring capital letters in the input
    const lowerCaseConversion = input.toLowerCase();
    let result = "";
    if (encode) {
      //loop through input string to find row and column
      for (let letterIndex = 0; letterIndex < lowerCaseConversion.length; letterIndex++) {
        const letter = lowerCaseConversion[letterIndex];
        const alphabetIndex = findAlphabetIndex(letter);
        const alphabetArrayIndex = findAlphabetIndexInArray(letter);

      //solve for spaces
        if (letter === " ") {
          result += " "
        } 
      //solve for if the letter is I or J
        else if (alphabetIndex === 9 || alphabetIndex === 10) {
          result += "42"; 
      //if letter is anything but I or J  
        } else {

          const rowValue = Math.ceil(alphabetArrayIndex/5).toString();
          const columnValue = Math.abs(rowValue * 5  - alphabetArrayIndex - 5).toString();
  
          result += columnValue;
          result += rowValue;  
        }
      }  
    } else {

      let countOfSpaces = 0;
      for (let i = 0; i < input.length; i ++) {
        const character = input[i];
        if (character === " ") {
          countOfSpaces ++
        }
      }    

      if ((input.length - countOfSpaces) % 2 > 0) {
        return false;

      } else {
        for (let i = 0; i < input.length; ) {
          if (input[i] === " "){
            i++
            result += " "

          } else {
            const columnNumber = parseInt(input[i]);
            const rowNumber = parseInt(input[i+1]);
    
            const letterIndex = ((rowNumber - 1) * 5) + columnNumber - 1;

            result += alphabetArray[letterIndex];
            i+=2
          }
        }
      }
    }
    
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


