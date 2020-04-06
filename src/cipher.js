const cipher = {
  
  encode: (shift, word) => { 
    let result= "";
    for (let letter = 0; letter < word.length; letter++) {
      let encoded=((word[letter].charCodeAt() - 65 + Number(shift)) % 26) + 65;
      result = result + String.fromCharCode(encoded);
    }  
    return result;
  },  

  decode: (shift, word) => {
    let result= "";
    for (let letter = 0; letter < word.length; letter++) {
      let decoded=((word[letter].charCodeAt() + 65 - Number(shift)) % 26) + 65;
      result = result + String.fromCharCode(decoded);
    }  
    return result;
  }
  
};

export default cipher;
