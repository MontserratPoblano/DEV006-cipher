const cipher = {
  encode: function(keyCipher,initialMessage){
    
    const newNumbers=[];
    const letterCode=[];
    if(initialMessage===null || keyCipher===null || initialMessage===0 || keyCipher===0)throw new TypeError("invalid")
    
    for(let i=0;i<initialMessage.length;i++){
      newNumbers[i]=initialMessage[i].charCodeAt();
      if(newNumbers[i]>=65 && newNumbers[i]<=90 ){
        letterCode[i]=(Number(newNumbers[i])+Number(keyCipher)-65)%26+65;        
      } 
    }
    const final=letterCode.map(element => (String.fromCharCode(element))).join("");
    return final;
    
    
    
    
  },

  decode: function(keyCipher,initialMessage){
    const newNumbers=[];
    const letterCode=[];
    if(initialMessage===null || keyCipher===null || initialMessage===0 || keyCipher===0)throw new TypeError("invalid")
    for(let i=0;i<initialMessage.length;i++){
      newNumbers[i]=initialMessage[i].charCodeAt();
      if(newNumbers[i]>=65 && newNumbers[i]<=90){
        letterCode[i]=(Number(newNumbers[i])-Number(keyCipher)+65)%26+65;        
      }
    }
    const final=letterCode.map(element => (String.fromCharCode(element))).join("");
    return final 
  }
}


  
    



export default cipher;
