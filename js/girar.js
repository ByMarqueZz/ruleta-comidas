function moverListaDerecha() {
    lista = document.getElementById("lista");
    lista.style.left = "-1000px";
}

// una vez que carga la pagina
window.onload = function() {
    boton = document.getElementById("buttonChetarte");
    boton.addEventListener("click", moverListaDerecha);
}