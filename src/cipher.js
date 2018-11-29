window.cipher = {
     encode: (displace,capLetter) => {
      /* Acá va tu código */
      let search = '';
      for (let i=0; i<capLetter.length; i++){
        let acsiiNumber = capLetter[i].charCodeAt();
        if (acsiiNumber >= 65 && acsiiNumber <= 90 ) {
          let convertedLetter=(acsiiNumber-65+displace)%26+65;
          search += String.fromCharCode(convertedLetter);
        }if (acsiiNumber <= 97 && acsiiNumber >= 90 ){
          alert("Porfavor ingresa tú mensaje en MAYUSCULAS")
          search += capLetter[i]
        }
      }
        return search;
      },
  
    decode: (displace,capLetter) => {
       let search = '';
        for (let i=0; i<capLetter.length; i++){
          let acsiiNumber=capLetter[i].charCodeAt();
          if (acsiiNumber >= 65 && acsiiNumber <= 90 ) {
            let convertedLetter=(acsiiNumber-65-displace)%26+65;
            if (convertedLetter<65){
              convertedLetter+=26;
            }
            search += String.fromCharCode(convertedLetter);
          }else if (acsiiNumber >= 97 && acsiiNumber <= 122 ) {
            let convertedLetter=(acsiiNumber-97-displace)%26+97;
            if (convertedLetter<97){
              convertedLetter+=26;
            }
            search += String.fromCharCode(convertedLetter);
          }else{
            search += capLetter[i]
          }
          }
          return search;
      }
  };
