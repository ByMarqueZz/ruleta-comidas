/*
    Consta de 2 partes:
    1. La primera parte es la que se encarga de girar la lista
    2. La segunda parte es la que se encarga de modificar el tema de la página
*/
// Primera parte
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
        var aleatorio = Math.floor(Math.random() * (12000 - 5000)) + 5000;
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

// Segunda parte
// getCookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// setCookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function changeOrange() {
    // elementos con los que vamos a trabajar
    document.getElementById('body').style.backgroundImage = "url('./media/img/MesaFondo.webp')";
    header = document.getElementById("header");
    header.style.backgroundColor = "#c0834f";
    header.style.color = "#eed09d";
    header.style.borderColor = 'orange';

    ruletaDiv = document.getElementById("ruletaDiv");
    ruletaDiv.style.backgroundColor = "#e8c68c";
    ruletaDiv.style.borderColor = 'orange';

    buttonChetarte = document.getElementById("buttonChetarte");
    buttonChetarte.style.backgroundColor = "#c0834f";
    buttonChetarte.style.borderColor = 'orange';
    
    setCookie("fondoColor", "orange", 365);
}

function changeRed() {
    // elementos con los que vamos a trabajar
    document.getElementById('body').style.backgroundImage = "url('./media/img/fondoRojo.jpg')";
    header = document.getElementById("header");
    header.style.backgroundColor = "red";
    header.style.color = "#f76c6c";
    header.style.borderColor = 'rgb(245, 151, 162)';

    ruletaDiv = document.getElementById("ruletaDiv");
    ruletaDiv.style.backgroundColor = "#f76c6c";
    header.style.borderColor = 'rgb(245, 151, 162)';

    buttonChetarte = document.getElementById("buttonChetarte");
    buttonChetarte.style.backgroundColor = "red";
    buttonChetarte.style.borderColor = 'rgb(245, 151, 162)';

    setCookie("fondoColor", "red", 365);
}

function changeGreen() {
    // elementos con los que vamos a trabajar
    document.getElementById('body').style.backgroundImage = "url('./media/img/fondoVerde.webp')";
    header = document.getElementById("header");
    header.style.backgroundColor = "#147a0b";
    header.style.color = "#5ae463";
    header.style.borderColor = 'white';

    ruletaDiv = document.getElementById("ruletaDiv");
    ruletaDiv.style.backgroundColor = "#5ae463";
    ruletaDiv.style.borderColor = 'white';

    buttonChetarte = document.getElementById("buttonChetarte");
    buttonChetarte.style.borderColor= 'white';
    buttonChetarte.style.backgroundColor = "#0e812d";

    setCookie("fondoColor", "green", 365);
}


// una vez que carga la pagina
window.onload = function() {
    // obtenemos la cookie
    var cookie = getCookie("fondoColor");
    if (cookie == "orange") {
        changeOrange();
    } else if (cookie == "red") {
        changeRed();
    } else if (cookie == "green") {
        changeGreen();
    }
    // añadimos los eventos
    fondoNaranja = document.getElementById("fondoNaranja");
    fondoNaranja.addEventListener("click", () => {
        changeOrange();
    });

    fondoVerde = document.getElementById("fondoVerde");
    fondoVerde.addEventListener("click", () => {
        changeGreen();
    });

    fondoRojo = document.getElementById("fondoRojo");
    fondoRojo.addEventListener("click", () => {
        changeRed();
    });
    boton = document.getElementById("buttonChetarte");
    boton.addEventListener("click", moverListaDerecha);
}
