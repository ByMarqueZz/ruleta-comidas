function moverListaDerecha() {
    // Se encarga de girar la lista para chetarse
    // Obtenemos los elementos con los que trabajamos
    lista = document.getElementById("lista");
    listaMostrar = document.getElementById("lista2");
    boton = document.getElementById("buttonChetarte");
    divListaMostrar = document.getElementById("resultadoDiv");
    // Si ya está girada se resetea
    if (parseInt(lista.style.left) < '-1000') {
        boton.value= "Chetarse??";
        divListaMostrar.style.display = "none";
        listaMostrar.style.transition = "left 0s"
        listaMostrar.style.left = "0px";

        lista.style.transition = "left 0s"
        lista.style.left = "0px";
    } else {
        // Si no está girada se gira
        boton.disabled = true;
        boton.value= "Chetandose...";
        var aleatorio = Math.floor(Math.random() * (20000 - 3000)) + 3000;
        lista.style.transition = "left 10s"
        lista.style.left = `${-aleatorio}px`;
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