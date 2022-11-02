function moverListaDerecha() {
    // mover la lista de la izquierda a la derecha
    lista = document.getElementById("ruletaImg");
    var tamaño = window.getComputedStyle(lista).getPropertyValue("marginLeft");
    tamaño += -1000;
    lista.style.marginLeft = `${tamaño}px`;
}

// una vez que carga la pagina
window.onload = function() {
    boton = document.getElementById("buttonChetarte");
    boton.addEventListener("click", moverListaDerecha);
}