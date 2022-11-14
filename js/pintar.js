function obtenerComidas() {
    let array = [[1, 'patatas chetadas', 'patatas.jpeg', 'patata.mp4'], [2, 'kebab chetado', 'kebab.png', 'kebab.mp4'], [3, 'macarrones carbonara chetados', 'carbonara.jpg', 'carbonara.mp4'], [4, 'macarrones carne picada chetados', 'carnePicada.jpg', 'carnePicada.mp4'], [5, 'pizza chetada', 'pizza.jpg', 'pizza.mp4'], [6, 'burritos chetados', 'burritos.jpg', 'burritos.mp4'], [7, 'huevo revuelto chetado', 'huevoRevuelto.jpg', 'huevoRevuelto.mp4'], [8, 'tortilla chetada', 'tortilla.jpg', 'tortilla.mp4'] ,[9, 'nuggets chetados', 'nuggets.jpg', 'nuggets.mp4'], [10, 'empanadillas chetadas', 'empanadillas.jpg', 'empanadillas.mp4'], [11, 'huevo frito chetado', 'huevoFrito.jpg', 'huevoFrito.mp4'], [12, 'salchichas chetadas', 'salchichas.jpeg', 'salchichas.mp4']]
    return array;
}

function pintarFotos(order, comidas) {
    div = document.getElementById('ruletaImg');
    lista = document.createElement('ul');
    lista.className = 'lista';
    lista.id = 'lista';
    for (let i=0; i<80; i++) {
        // numero aleatorio entre la longitud de comidas
        let aleatorio = Math.floor(Math.random() * (12 - 1)) + 1;
        order.push(aleatorio);
        li = document.createElement('li');
        img = document.createElement('img');
        p = document.createElement('p');
        img.src = "./media/img/" + comidas[aleatorio][2];
        img.alt = comidas[aleatorio][1];
        img.className = "imagenes";
        p.innerText = comidas[aleatorio][1];
        p.className = 'nombreComida';
        li.appendChild(img);
        li.appendChild(p);
        lista.appendChild(li);
    }
    div.appendChild(lista);
    //  pintar flecha
    img = document.createElement('img');
    img.setAttribute('src', './media/img/flecha.png');
    img.setAttribute('id', 'flechaImg');
    div.appendChild(img);
}

function pintarVideos(order, comidas) {
    div = document.getElementById('resultadoDiv');
    lista = document.createElement('ul');
    lista.className = 'lista';
    lista.id = 'lista2';
    for (let i=0; i<order.length; i++) {
        if (i < 28) {
            li = document.createElement('li');
            video = document.createElement('video');
            li.appendChild(video);
            lista.appendChild(li);
            continue;
        }
        li = document.createElement('li');
        li.innerHTML = '<a href="./media/video/' + comidas[order[i]][3] + '" target = "_blank"><img src="./media/img/video_paused.png" alt="comida" class="imagenes"></a>';
        li.appendChild(video);
        lista.appendChild(li);
    }
    div.appendChild(lista);
}

var order = [];
var comidas = obtenerComidas();
pintarFotos(order, comidas);
pintarVideos(order, comidas);