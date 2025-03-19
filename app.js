let amigo_secreto = [];
function agregarAmigo() {
    const input= document.getElementById("amigo");
    const lista=document.getElementById("listaAmigos");
    const nombre= input.value.trim();
    if (nombre === ""){
        alert("porfavor, insgrese un nombre");
        return;
    }

    amigo_secreto.push(nombre);
    input.value="";
    actualizarLista();
}
function actualizarLista(){
    const lista=document.getElementById("listaAmigos");
    lista.innerHTML= "";
    for(let i= 0; i <amigo_secreto.length; i++){
        const li = document.createElement("li");
        li.textContent=amigo_secreto[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigo_secreto.length === 0){
        alert("no hay nombres para sortear");
        return;
    }
    const indiceAleatorio= Math.floor(Math.random() * amigo_secreto.length);
    const amigoSorteado= amigo_secreto[indiceAleatorio];
    const resultado= document.getElementById("resultado");
    resultado.innerHTML= `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
