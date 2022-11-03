<?php
    $con = mysqli_connect('bvleljhnt88sspxkh1ko-mysql.services.clever-cloud.com', 'ubjnxb2e6sh08hfo', 'SgQcOdGpVVKlGsXIjrG3', 'bvleljhnt88sspxkh1ko');
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // funciones para querys
    function obtenerComida($con) {
        $query = "SELECT * FROM comidas";
        $result = mysqli_query($con, $query);
        $row = mysqli_fetch_all($result);
        return $row;
    }
    function numeroExacto($num) {
        
    }
?>