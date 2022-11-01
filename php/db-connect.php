<?php
    $con = mysqli_connect("localhost", "root", "", "cca");
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
?>