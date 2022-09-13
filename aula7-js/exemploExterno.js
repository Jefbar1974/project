// Pegando botao do HTML
const elementoBotaoArquivo = document.getElementById("incluirExterno")

// Adicionando um evento ao Botão
elementoBotaoArquivo.addEventListener("click", dispararAlert)

// Função efetuando algo
function dispararAlert() {
    alert("Olá javascript externo!")
}