-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2022 a las 17:28:21
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

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
(2, 'kebab chetado', '-', '-'),
(3, 'macarrones carbonara chetados', '-', '-'),
(4, 'macarrones carne picada chetados', '-', '-'),
(5, 'pizza chetada', '-', '-'),
(6, 'burritos chetados', '-', '-'),
(7, 'huevo revuelto chetado', '-', '-'),
(8, 'tortilla chetada', '-', '-'),
(9, 'nuggets chetados', '-', '-'),
(10, 'empanadillas chetadas', '-', '-'),
(11, 'huevo frito chetado', '-', '-'),
(12, 'salchichas chetadas', '-', '-');

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
