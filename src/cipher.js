const cipher = {
  err: (shift, word) => { 
    if (shift =="" || typeof shift !== "number" || typeof word !== "string"){
      throw new TypeError ("Você precisa inserir uma informação válida.");
    }
  },

  codification: (shift, word, direction) => {
    let result= "";

    for (let letter in word) {
      const currentCharCode = word.charCodeAt(letter)
      const isUpperCase = currentCharCode >= 65 && currentCharCode <= 90;
      const isLowerCase = currentCharCode >= 97 && currentCharCode <= 122;
      const ascUpper = "A".charCodeAt();
      const ascLower = "a".charCodeAt();
      const alphabetSize = 26;

      if (isUpperCase) {
        result += String.fromCharCode(
          (currentCharCode - ascUpper * direction + shift * direction) %  alphabetSize + ascUpper
        );
      } else if (isLowerCase) {
        result += String.fromCharCode(
          (currentCharCode - ascLower * direction + shift) %  alphabetSize + ascLower
        );
      }else {
        result += word[letter];
      }
    }

    return result;
  },

  encode: (shift, word) => { 
    cipher.err(shift, word);
    return cipher.codification(shift, word, 1);
  },  

  decode: (shift, word) => {  
    cipher.err(shift, word)
    return cipher.codification(shift, word, -1);
  }
};

export default cipher;
