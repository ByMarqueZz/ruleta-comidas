function moverListaDerecha() {
    lista = document.getElementById("lista");
    if (parseInt(lista.style.left) < '-8000') {
        lista.style.transition = "left 0s"
        lista.style.left = "0px";
        tirada == false;
    } else {
        var aleatorio = Math.floor(Math.random() * (20000 - 7000)) + 7000;
        lista.style.transition = "left 10s"
        lista.style.left = `${-aleatorio}px`;
        tirada == true;
    }
    
}

// una vez que carga la pagina
let tirada = false;
window.onload = function() {
    boton = document.getElementById("buttonChetarte");
    boton.addEventListener("click", moverListaDerecha);
}