

function executar() {

   const menornum1 = Number(document.querySelector("#menor1").value)
   const menornum2 = Number(document.querySelector("#menor2").value)

   let menornumero
   if (menornum1 < menornum2) {
      menornumero = menornum1
   } else {
      menornumero = menornum2

   }


   const elresultado = document.querySelector("#resultado")
   elresultado.innerHTML = menornumero

}


