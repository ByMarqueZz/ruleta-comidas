<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <?php
        include 'php/db-connect.php';
        $comidas = obtenerComida($con);
    ?>
    <script src="./js/girar.js"></script>
</head>
<body>
    <div id="header" class="container-fluid text-bg-color text-center">
        <h1>Comidas Chetadas Aleatorias</h1>
    </div>
    <div id="ruletaDiv" class="text-center">
        <div id="ruletaImg">
            <?php
                $orden = array();
                echo "<ul class='lista' id='lista'>";
                for($i=0;$i<80;$i++){
                    $num = rand(0, count($comidas)-1);
                    array_push($orden, $num);
                    echo "<li>";
                    echo "<img src='./media/img/" . $comidas[$num][2] . "' alt='comida' class='imagenes'>";
                    echo "<p class='nombreComida'>" . $comidas[$num][1] . "</p>";
                    echo "</li>";
                }
                echo "</ul>";
            ?>
            <img src="./media/img/flecha.png" alt="flecha" id="flechaImg">
        </div>
        <input type="button" id="buttonChetarte" value="Chetarse??">
    </div>
    <div id="resultado" class="text-center ">
        <div id="resultadoDiv">
            <?php
                echo "<ul class='lista' id='lista2'>";
                $indice = 0;
                foreach($orden as $num){
                    if ($indice < 28) {
                        $indice++;
                        echo "<li>";
                        echo "<video></video>";
                        echo "</li>";
                        continue;
                    }
                    echo "<li>";
                    echo "<video controls src='./media/video/" . $comidas[$num][3] . "'></video>";
                    echo "</li>";
                    $indice++;
                }
                echo "</ul>";
            ?>
        </div>
    </div>
</body>
</html>