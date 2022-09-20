


function somar()  {
  

let valorUm = document.querySelector("#numero1").value
let valorDois = document.querySelector("#numero2").value
let valorTres = document.querySelector("#numero3").value

   

    let resultado = Number(valorUm) + Number(valorDois) + Number(valorTres)

   let divresultado = document.querySelector("#resultado")
   divresultado.innerHTML = resultado




}