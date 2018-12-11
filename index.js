/* Acá va tu código */
window.onload = () => {

  const root = document.getElementById("root");
  document.getElementById("button-cipher").addEventListener("click", (evento) => {
    evento.preventDefault();
    let capLetter = document.getElementById("cipherText").value;
    let displace = parseInt(document.getElementById("offset").value);

    root.innerHTML = cipher.encode(displace, capLetter)
  });
  const root2 = document.getElementById("root");
  document.getElementById("button-decode").addEventListener("click", (evento) => {
    evento.preventDefault();
    let capLetter = document.getElementById("cipherText").value;
    let displace = parseInt(document.getElementById("offset").value);

    root2.innerHTML = cipher.decode(displace, capLetter)
  });


  let button = document.getElementById("buttonCopy"),
    contentHolder = document.getElementById("root");

  button.addEventListener("click", function () {


      let range = document.createRange(),
        selection = window.getSelection();
      selection.removeAllRanges();
      range.selectNodeContents(contentHolder);
      selection.addRange(range);
      document.execCommand('copy');
    }

  );
}
