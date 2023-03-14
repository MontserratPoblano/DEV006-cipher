import cipher from './cipher.js';

let buttonCipher=document.getElementById("button-cipher");

buttonCipher.addEventListener("click",()=>{
    let initialMessage = document.getElementById("initial-message").value;
    let keyCipher=document.getElementById("key-cipher").value;
    let divide=initialMessage.split("");
    let newNumbers={};
    for(let i=0;i<divide.length;i++){
    newNumbers[i]=divide[i].charCodeAt(); 
    } 
    return newNumbers;
    

});


console.log(cipher);
