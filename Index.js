function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje =document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let resultado = document.querySelector(".resultado");
    let muñeco = document.querySelector("#muñeco")

    if (texto.length == 0){
        alert("Debes ingresar algún texto")
    } else {
        let checkear = checkInput(texto);

    if(checkear == true){

    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat")
    
    if (texto.length !=0){
        resultado.innerText = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        alert("Texto encriptado con éxito")
    

}  
} else {
    alert("Recuerda no poner símblolos ni mayúsculas")
}
}
    
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje =document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let resultado = document.querySelector(".resultado");
    let muñeco = document.querySelector("#muñeco")

    if (texto.length == 0){
        alert("Debes ingresar algún texto")
    } else {
        let checkear = checkInput(texto);

    if(checkear == true){

    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u")
    
    if (texto.length !=0){
        resultado.innerText = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        alert("Texto desencriptado con éxito")
    

}  
} else {
    alert("Recuerda no poner símblolos ni mayúsculas")
}
}
}


function checkInput(input){
    const check = /[^a-z 0-9 \n]/g.test(input);
    console.log(check);
    if(!check){
        return true
    }else{
        return false
    }
}

function copiar(){
    let resultado = document.querySelector(".resultado");
    let tituloMensaje =document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let copiar = resultado.innerText;

    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    navigator.clipboard.writeText(copiar)
    muñeco.style.display = "block"
    resultado.innerText="";
    alert("Texto copiado con exito")
    
}
function limpiar(){
    let resultado = document.querySelector(".resultado");
    let tituloMensaje =document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    muñeco.style.display = "block"
    resultado.innerText="";

    document.getElementsByClassName("texto")[0].value = " ";
    alert("Texto limpiado con exito")
}
