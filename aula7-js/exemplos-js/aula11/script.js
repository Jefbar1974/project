

async function chamarAPI(){

    const valor = document.querySelector("#idpersonagem").value


    const url ="https://rickandmortyapi.com/api/character/" + valor

    let retorno = await fetch(url)
    let retornoJson = await retorno.json()

    document.querySelector("#imagem").src = retornoJson.image
    document.querySelector("#nome").innerHTML = retornoJson.name
}