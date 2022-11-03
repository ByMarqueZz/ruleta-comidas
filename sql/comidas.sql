-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2022 a las 13:11:40
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comidas`
--

CREATE TABLE `comidas` (
  `id_comidas` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comidas`
--

INSERT INTO `comidas` (`id_comidas`, `nombre`, `foto`, `video`) VALUES
(1, 'patatas chetadas', 'patatas.jpeg', 'patata.mp4'),
(2, 'kebab chetado', 'kebab.png', 'kebab.mp4'),
(3, 'macarrones carbonara chetados', 'carbonara.jpg', 'carbonara.mp4'),
(4, 'macarrones carne picada chetados', 'carnePicada.jpg', 'carnePicada.mp4'),
(5, 'pizza chetada', 'pizza.jpg', 'pizza.mp4'),
(6, 'burritos chetados', 'burritos.jpg', 'burritos.mp4'),
(7, 'huevo revuelto chetado', 'huevoRevuelto.jpg', 'huevoRevuelto.mp4'),
(8, 'tortilla chetada', 'tortilla.jpg', 'tortilla.mp4'),
(9, 'nuggets chetados', 'nuggets.jpg', 'nuggets.mp4'),
(10, 'empanadillas chetadas', 'empanadillas.jpg', 'empanadillas.mp4'),
(11, 'huevo frito chetado', 'huevoFrito.jpg', 'huevoFrito.mp4'),
(12, 'salchichas chetadas', 'salchichas.jpeg', 'salchichas.mp4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comidas`
--
ALTER TABLE `comidas`
  ADD PRIMARY KEY (`id_comidas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comidas`
--
ALTER TABLE `comidas`
  MODIFY `id_comidas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
