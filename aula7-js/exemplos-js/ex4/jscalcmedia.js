

function executar() {
   
 const calcmedia1 = Number(document.querySelector("#media1").value)
 const calcmedia2 = Number(document.querySelector("#media2").value)
 const calcmedia3 = Number(document.querySelector("#media3").value)

 const media = (calcmedia1 + calcmedia2 + calcmedia3) / 3

const elresultado = document.querySelector("#resultado")
elresultado.innerHTML = media

   }


