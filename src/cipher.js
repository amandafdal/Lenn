const cipher = {
  
  encode: (shift, word) => { 
    if (shift =="" || typeof shift !== "number" || typeof word !== "string"){
      throw new TypeError ("Você precisa inserir uma informação válida.");
    }

    const ascLetterA = "A".charCodeAt();
    const alphabetSize = 26;

    let result= "";
    for (let letter = 0; letter < word.length; letter++) {
      const encoded=((word[letter].charCodeAt() - ascLetterA + shift) % alphabetSize) + ascLetterA;
      result = result + String.fromCharCode(encoded);
    }  
    return result;
  },  

  decode: (shift, word) => {  
    if (shift =="" || typeof shift !== "number" || typeof word !== "string"){
      throw new TypeError ("Você precisa inserir uma informação válida.");
    }

    const ascLetterA = "A".charCodeAt();
    const alphabetSize = 26;

    let result= "";
    for (let letter = 0; letter < word.length; letter++) {
      const decoded=((word[letter].charCodeAt() + ascLetterA - shift) % alphabetSize) + ascLetterA;
      result = result + String.fromCharCode(decoded);
    }  
    return result;
  }
  
};

export default cipher;
