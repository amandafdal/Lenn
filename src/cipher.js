const cipher = {
  
  encode: (shift, word) => { 
    if (shift =="" || typeof shift !== "number" || typeof word !== "string"){
      throw new TypeError ("Você precisa inserir uma informação válida.");
    }

    let result= "";
    for (let letter = 0; letter < word.length; letter++) {
      let encoded=((word[letter].charCodeAt() - 65 + shift) % 26) + 65;
      result = result + String.fromCharCode(encoded);
    }  
    return result;
  },  

  decode: (shift, word) => {  
    if (shift =="" || typeof shift !== "number" || typeof word !== "string"){
      throw new TypeError ("Você precisa inserir uma informação válida.");
    }

    let result= "";
    for (let letter = 0; letter < word.length; letter++) {
      let decoded=((word[letter].charCodeAt() + 65 - shift) % 26) + 65;
      result = result + String.fromCharCode(decoded);
    }  
    return result;
  }
  
};

export default cipher;
