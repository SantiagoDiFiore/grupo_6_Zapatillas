-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 22-04-2021 a las 21:42:29
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kicks_db`
--

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'in-sale'),
(2, 'visited'),
(3, 'destacados');

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'White'),
(2, 'Black'),
(3, 'Red'),
(4, 'Blue'),
(5, 'Green'),
(6, 'Orange'),
(7, 'Brown'),
(8, 'Purple'),
(9, 'Yellow');

--
-- Volcado de datos para la tabla `gendersusers`
--

INSERT INTO `gendersusers` (`id`, `name`) VALUES
(1, 'male'),
(2, 'female'),
(3, 'other');

--
-- Volcado de datos para la tabla `genresproducts`
--

INSERT INTO `genresproducts` (`id`, `name`) VALUES
(1, 'male'),
(2, 'female'),
(3, 'kids');

--
-- Volcado de datos para la tabla `marks`
--

INSERT INTO `marks` (`id`, `name`) VALUES
(1, 'adidas'),
(2, 'nike'),
(3, 'puma'),
(4, 'vans'),
(5, 'new-balance'),
(6, 'converse');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `image`, `size`, `genre_id`, `marks_id`, `colors_id`, `category_id`) VALUES
(1, 'Nike Air Force 1 Low White', 'Forro interno textil. Suela de caucho. Exterior de malla con revestimientos de gamuza y TPU. Amortiguación Adiprene+ en el antepié. Mediasuela de EVA liviana. Amortiguación Adiprene en el talón', 11499, 10, 'image-1617053000111.png', '[37, 38, 39, 40, 41, 42]', 1, 2, 1, 1);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `birthday`, `image`, `email`, `password`, `checkPassword`, `terms`, `offers`, `gender_id`) VALUES
(1, 'Ramiro', 'Tanquias Cornejo', '2002-05-06', 'image-1616647437728.jpg', 'ramitanquias@hotmail.com', '$2a$10$XVKckKGZdjB5U9WRVqCHf.o47WPgUriZgrLqsq1/6mlKs.AYt31Z.', '$2a$10$83X4foFFoKmXxLGfPeLnl.35Z84Opc4sSZoDYO6pCau63d.onbAwy', 'terminos', 'ofertas', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
