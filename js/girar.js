function moverListaDerecha() {
    lista = document.getElementById("lista");
    listaMostrar = document.getElementById("lista2");
    boton = document.getElementById("buttonChetarte");
    divListaMostrar = document.getElementById("resultadoDiv");
    if (parseInt(lista.style.left) < '-4000') {
        boton.value= "Chetarse??";
        divListaMostrar.style.display = "none";
        listaMostrar.style.transition = "left 0s"
        listaMostrar.style.left = "0px";

        lista.style.transition = "left 0s"
        lista.style.left = "0px";
    } else {
        boton.disabled = true;
        boton.value= "Chetandose...";
        var aleatorio = Math.floor(Math.random() * (10000 - 4000)) + 4000;
        lista.style.transition = "left 10s"
        lista.style.left = `${-aleatorio}px`;
        // esperar 10 segundos
        listaMostrar.style.transition = "left 10s"
        listaMostrar.style.left = `${-aleatorio}px`;
        setTimeout(function() {
            divListaMostrar.style.display = "block";
            boton.disabled = false;
            boton.value= "Volver a chetarte??";
        }, 10000);
    }
}

// una vez que carga la pagina
window.onload = function() {
    boton = document.getElementById("buttonChetarte");
    boton.addEventListener("click", moverListaDerecha);
}