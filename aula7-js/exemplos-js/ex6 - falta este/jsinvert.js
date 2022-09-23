

function executar() {

   const invertnum1 = Number(document.querySelector("#invert1").value)
   const invertnum2 = Number(document.querySelector("#invert2").value)

   let numinvert = inverteArray(invertnum1, invertnum2)
   


   const elresultado = document.querySelector("#resultado")
   elresultado.innerHTML = numinvert

}


