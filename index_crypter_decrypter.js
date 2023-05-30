// Variables globales
var inputText = document.getElementById("cryptingarea");

var textCrypted = document.getElementById("decryptingarea");

var cryptText = document.querySelector("#crypting");

var decryptText = document.querySelector("#decrypting");

var copyText = document.querySelector("#copytext")

// Desactivamos la escritura en la caja de texto de salida
textCrypted.disabled = true


//Funcion para encriptar con boton
cryptText.onclick = function() {

    //Definimos una variable local en la funcion que convierte el texto a minusculas
    var textCrypted = inputText.value.toLowerCase();

    //Reemplazamos vocales con el texto objetivo
    let textOutput = textCrypted.replace (/[aeiou]/g, function (vocal) { 
        switch(vocal) {
            case 'a':
                return "ai"
            case 'e':
                return "enter"
            case 'i':
                return "imes"
            case 'o':
                return "ober";
            case 'u':
                return "ufat"
            default:
                break;
        }
    })        

    //Escribimos el resultado en la segunda caja de texto
    document.getElementById("decryptingarea").value = textOutput;
    
    //Limpiamos primera caja de texto
    document.getElementById("cryptingrea").value = "";

};

decryptText.onclick = function() {

    //Definimos una variable local en la funcion que convierte el texto a minusculas
    var textCrypted = inputText.value.toLowerCase();

    //Reemplazamos texto por vocales
    let textOutput = textCrypted.replace(/(ai|enter|imes|ober|ufat)/g, function (texto) { 
        switch(texto) {
            case 'ai':
                return "a"
            case 'enter':
                return "e"
            case 'imes':
                return "i"
            case 'ober':
                return "o";
            case 'ufat':
                return "u"
            default:
                break;
        }
    })    
    
    //Escribimos el resultado en la segunda caja de texto
    document.getElementById("decryptingarea").value = textOutput;
    
    //Limpiamos primera caja de texto
    document.getElementById("cryptingarea").value = "";

};

//Funcion para copiar texto

copyText.onclick = function () {

    //Variable local en la funcion para copiar texto
    var copyCrypted = document.getElementById("decryptingarea").value

    navigator.clipboard.writeText(copyCrypted);

    //Pegar el texto a la primer caja de texto
    document.getElementById("cryptingarea").value = copyCrypted
    
    //Limpiamos la segunda caja de texto
    document.getElementById("decryptingarea").value = "";
}

