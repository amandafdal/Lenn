import cipher from './cipher.js';

document.getElementById("encode").addEventListener("click", function(event){

  event.preventDefault();

  let textInput=document.getElementById("text-input").value.toUpperCase();
  let offsetNumber=Number(document.getElementById("offset").value);

  let output= cipher.encode(offsetNumber, textInput);
  document.getElementById("text-output").innerHTML= output;

});

document.getElementById("decode").addEventListener("click", function(event){

  event.preventDefault();

  let textInput=document.getElementById("text-input").value.toUpperCase();
  let offsetNumber=Number(document.getElementById("offset").value);

  let output= cipher.decode(offsetNumber, textInput);
  document.getElementById("text-output").innerHTML= output;
});
