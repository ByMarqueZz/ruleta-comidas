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
    <div id="ruletaDiv" class="border text-center">
        <div id="ruletaImg">
            <?php
                echo "<ul class='lista' id='lista'>";
                for($i=0;$i<1000;$i++){
                    $num = rand(0, count($comidas)-1);
                    echo "<li>";
                    echo "<img src='./media/img/" . $comidas[$num][2] . "' alt='comida' class='imagenes'>";
                    echo "<p class='nombreComida'>" . $comidas[$num][1] . "</p>";
                    echo "</li>";
                }
                echo "</ul>";
                // echo "<img src='./media/img/" . $comidas[0][2] . "' alt='patata' class='imagenes'>";
            ?>
        </div>
        <button id="buttonChetarte">Chetarse??</button>
    </div>
    <div id="resultado" class="border text-center">
        <?php
            // echo "<video controls src='./media/video/".$comidas[0][3]."' autoplay muted></video>"
        ?>
    </div>
</body>
</html>