//import cipher from './cipher.js';
//console.log(cipher);

let textOutput = "isso aqui vai ser o texto cifrado/decifrado";
document.getElementById("textoutput").innerHTML = (textOutput);

document.getElementById("textinput").addEventListener("input", saveInfo);
document.getElementById("offset").addEventListener("input" , saveInfo);

function saveInfo() {
  let textInput = document.getElementById("textinput").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
console.log(textInput);
console.log(offset);
}

//document.getElementById("encode").addEventListener("click", encode);
//document.getElementById("offset").addEventListener("click", decode);