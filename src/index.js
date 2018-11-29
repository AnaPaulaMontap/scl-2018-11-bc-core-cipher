/* Acá va tu código */
window.onload = () => {
    
    const cipherData = document.getElementById("root");
    document.getElementById("bCipher").addEventListener("click",(evento)=>{
        evento.preventDefault();
        let capLetter= document.getElementById("cipherText").value;
        let displace= parseInt(document.getElementById("offset").value);
        
    root.innerHTML = cipher.encode(displace,capLetter)
    });
    const cipherDecode = document.getElementById("root2");
    document.getElementById("dCipher").addEventListener("click",(evento)=>{
        evento.preventDefault();
        let capLetter= document.getElementById("cipherText").value;
        let displace= parseInt(document.getElementById("offset").value);
        
    root.innerHTML = cipher.decode(displace,capLetter)
    }); 

} 
