import cipher from './cipher.js';

document.getElementById("encode").addEventListener("click", function(event){

  event.preventDefault();

  const textInput=document.getElementById("text-input").value;
  const offsetNumber=Number(document.getElementById("offset").value);

  const output= cipher.encode(offsetNumber, textInput);
  document.getElementById("text-output").innerHTML= output;

});

document.getElementById("decode").addEventListener("click", function(event){

  event.preventDefault();

  const textInput=document.getElementById("text-input").value;
  const offsetNumber=Number(document.getElementById("offset").value);

  const output= cipher.decode(offsetNumber, textInput);
  document.getElementById("text-output").innerHTML= output;
});
