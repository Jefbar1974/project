

function executar() {
   
   let pares = []

for (let index = 2; index <= 100; index = index+2) {
   pares.push(index)

}



   const elresultado = document.querySelector("#resultado")
   elresultado.innerHTML = pares.join(", ")


   }


