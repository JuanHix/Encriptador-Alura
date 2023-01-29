/*
a - ai
e - enter
i -imes
o - ober
u - ufat
*/
function encriptar() {
    var frase = document.getElementById("texto1").value.toLowerCase(); /* datos ingresados por usuario solo minuscula*/
    var textoEncriptado = frase.replace(/e/img, "enter"); /*remplaza la vocal e por enter*/
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    // i = es para que tome letras mayusculas y minusculas
    // g = tome en cuenta toda la linea o la oracion
    // m = tome en cuenta multiples lineas, (lineas de texto)

    document.getElementById("texto2").innerHTML = textoEncriptado; /*muestra el texto encriptado en el textarea*/
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar() {
    var frase = document.getElementById("texto1").value.toLowerCase(); /* datos ingresados por usuario solo minuscula*/
    var textoEncriptado = frase.replace(/enter/img, "e"); /*remplaza la palabra por la vocal encriptada*/
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("texto2").innerHTML = textoEncriptado; /*muestra el texto encriptado en el textarea*/
}

function copiar() {
    var contenido = document.querySelector("#texto2"); /*Se crea variable para almacenar lo que esta en textarea*/
    contenido.select(); /*seleccionamos el contenido de la variable*/
    document.execCommand("copy"); /*copiamos la informacion*/
}
