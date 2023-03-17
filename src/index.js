import cipher from './cipher.js';

    let initialMessage= document.getElementById("initial-message");
    let keyCipher=document.getElementById("key-cipher");
    let buttonCipher=document.getElementById("button-cipher");
    let buttonDecipher=document.getElementById("button-decipher");


buttonCipher.addEventListener("click",()=>{
    let initialMessage= document.getElementById("initial-message").value;
    let keyCipher=document.getElementById("key-cipher").value;
    cipher.encode(initialMessage,keyCipher)
    
    
});

buttonDecipher.addEventListener("click",()=>{
    let initialMessage= document.getElementById("initial-message").value;
    let keyCipher=document.getElementById("key-cipher").value;
    cipher.decode(initialMessage,keyCipher)
    
    
});






console.log(cipher);
