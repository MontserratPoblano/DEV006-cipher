const cipher = {

  // ...
   encode: function(initialMessage,keyCipher){
    let finalMesagge=document.getElementById("final-message");
    let newNumbers=[];
    let letterCode=[];
    
    for(let i=0;i<initialMessage.length;i++){
      newNumbers[i]=initialMessage[i].charCodeAt();
     if(newNumbers[i]===32){
        letterCode[i]=newNumbers[i]  
        }else {
        letterCode[i]=(Number(newNumbers[i])+Number(keyCipher)-65)%26+65;        
    }
  }
    console.log (letterCode)
    let final=letterCode.map(element => (String.fromCharCode(element)));
  
     finalMesagge.value="Tu mensaje cifrado es " + final.join(" ")
  },

  decode: function(initialMessage,keyCipher){
    let finalMesagge=document.getElementById("final-message");
    let newNumbers=[];
    let letterCode=[];
    for(let i=0;i<initialMessage.length;i++){
      newNumbers[i]=initialMessage[i].charCodeAt();
     if(newNumbers[i]===32){
        letterCode[i]=newNumbers[i]  
        }else {
        letterCode[i]=(Number(newNumbers[i])-Number(keyCipher)+65)%26+65;        
    }
  }
    console.log (letterCode)
    let final=letterCode.map(element => (String.fromCharCode(element)));
  
     finalMesagge.value="Tu mensaje cifrado es " + final.join(" ")
  }
}
  
    



export default cipher;
