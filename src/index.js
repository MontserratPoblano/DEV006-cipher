import cipher from './cipher.js';

const buttonCipher=document.getElementById("button-cipher");
const buttonDecipher=document.getElementById("button-decipher");
const buttonVolver=document.getElementById("button-volver");


buttonCipher.addEventListener("click",()=>{
  const initialMessage= document.getElementById("initial-message").value;
  const keyCipher=document.getElementById("key-cipher").value;
  const encodeMessage=cipher.encode(keyCipher,initialMessage)
  const finalMesagge=document.getElementById("final-message");
  finalMesagge.value=encodeMessage;
    
});

buttonDecipher.addEventListener("click",()=>{ 
  const initialMessage= document.getElementById("initial-message").value;
  const keyCipher=document.getElementById("key-cipher").value;
  const decodeMessage=cipher.decode(keyCipher,initialMessage)
  const finalMesagge = document.getElementById("final-message");
  finalMesagge.value=decodeMessage;
});

buttonVolver.addEventListener("click",()=>{
  const formulario=document.getElementById("formulario");
  formulario.reset();
});



console.log(cipher);
