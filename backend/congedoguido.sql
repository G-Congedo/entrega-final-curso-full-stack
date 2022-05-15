-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 14, 2022 at 10:35 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `congedoguido`
--

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `trabajo` varchar(40) NOT NULL,
  `edad` int(3) NOT NULL,
  `salario` int(11) NOT NULL,
  `mail` varchar(40) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, 120000, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 110000, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 90000, 'ana@bignet.com'),
(5, 'Alfredo', 'Fernandez', 'Programador', 31, 75000, 'af@bignet.com'),
(6, 'Juan', 'Aguero', 'Programador', 34, 80000, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, 75000, 'eddie@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(9, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 90000, 'hernan@bignet.com'),
(10, 'Paublo', 'Simon', 'Especialista Multimedia', 43, 85000, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 75000, 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web Senior', 32, 110000, 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de Sistemas', 35, 100000, 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de Sistemas', 34, 900000, 'daniel@bignet.com'),
(15, 'Fernando', 'Fuertes', 'Ejecutivo de Ventas Senior', 36, 120000, 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de Ventas', 30, 90000, 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de Ventas', 27, 70000, 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de Ventas', 27, 72000, 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte Tecnico', 32, 200000, 'sabrina@bignet.com'),
(20, 'Pedro', 'Campion', 'Gerente de Finanzas', 36, 220000, 'pedro@bignet.com'),
(21, 'Mariano', 'Dharma', 'Presidente', 28, 300000, 'mariano@bignet.com'),
(22, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com'),
(23, 'Jacinto', 'Juarez', 'Tester QA', 82, 100, 'jacintito@bignet.com');

-- --------------------------------------------------------

--
-- Table structure for table `habitaciones`
--

DROP TABLE IF EXISTS `habitaciones`;
CREATE TABLE IF NOT EXISTS `habitaciones` (
  `numeroHabitacion` int(11) NOT NULL,
  `categoriaHabitacion` varchar(30) NOT NULL,
  PRIMARY KEY (`numeroHabitacion`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `habitaciones`
--

INSERT INTO `habitaciones` (`numeroHabitacion`, `categoriaHabitacion`) VALUES
(300, 'Presidencial'),
(201, 'Deluxe'),
(202, 'Deluxe'),
(203, 'Deluxe'),
(101, 'Suite'),
(103, 'Suite'),
(105, 'Suite'),
(102, 'Suite con vista al mar'),
(104, 'Suite con vista al mar'),
(106, 'Suite con vista al mar');

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Novedades de Estacion', 'Lo mejor para tu familia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac neque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus eleifend fermentum. Donec at congue nunc. Proin posuere urna metus, id ullamcorper quam molestie ut. Mauris a ex ornare, suscipit quam eget, elementum augue. Phasellus accumsan leo at sodales suscipit. Mauris vehicula eget diam ut ornare. Nullam eu maximus est.\r\n\r\nMauris diam mi, ultrices eget semper nec, gravida at eros. Praesent posuere maximus sapien non gravida. Vivamus malesuada ullamcorper lectus. Aenean faucibus magna ut libero scelerisque, et facilisis nisi vehicula. Quisque varius fringilla hendrerit. Nam ac sodales tortor. Donec egestas varius risus, ac viverra nisi viverra non.', 'h3momv43zlh2chbnrc65'),
(2, 'Nuevas actividades!', 'Ppara seguir disfrutando...', 'In ornare dui sit amet gravida pellentesque. Mauris porta aliquet mi. Nunc auctor tellus nisi, nec accumsan nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt justo quam, non suscipit tellus suscipit sed. Donec dignissim turpis sed lacus vestibulum, non maximus diam lacinia. Duis tempor lacus a venenatis aliquam.\r\n\r\nQuisque vitae mattis lorem. Nulla eleifend metus dolor, ac fermentum mauris dapibus eu. Mauris congue scelerisque erat, eu finibus nulla lacinia nec. Vestibulum quam magna, rutrum at metus vel, eleifend porta nulla. In at dignissim mauris. Curabitur at maximus erat. Ut non convallis lectus, et gravida risus.\r\n\r\n', 'rmiszgbv4rrmgfo84mol'),
(3, 'Bienvenida al nuevo gerente', 'Todos amamos al lider', 'Nunc felis lectus, commodo vitae porttitor sed, lacinia vel neque. Proin eu leo orci. Nunc interdum pretium odio, tincidunt fringilla tortor iaculis ultricies. Ut id ipsum eget justo accumsan posuere a ac ex. Nullam eget mi et odio iaculis posuere sit amet eu risus. Donec sit amet sodales lacus. Suspendisse potenti. Sed faucibus rutrum faucibus. Nam luctus erat ut lacus dictum dapibus. Etiam metus tortor, viverra quis augue nec, gravida venenatis ante.', 'ymuwrk51hxgwaxi8qfcq');

-- --------------------------------------------------------

--
-- Table structure for table `precios`
--

DROP TABLE IF EXISTS `precios`;
CREATE TABLE IF NOT EXISTS `precios` (
  `categoriaHabitacion` varchar(100) NOT NULL,
  `precio` int(11) NOT NULL,
  `caracteristicas` text NOT NULL,
  PRIMARY KEY (`categoriaHabitacion`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `precios`
--

INSERT INTO `precios` (`categoriaHabitacion`, `precio`, `caracteristicas`) VALUES
('Suite', 100, '-cosa1\r\n-cosa2\r\n-cosa3\r\n-cosa4\r\n-cosa5'),
('Deluxe', 150, '-cosa1\r\n-cosa2\r\n-cosa3\r\n-cosa4\r\n-cosa5\r\n-cosa6\r\n-cosa7\r\n-cosa8'),
('Presidencial', 400, '-cosa1\r\n-cosa2\r\n-cosa3\r\n-cosa4\r\n-cosa5\r\n-cosa6\r\n-cosa7\r\n-cosa8\r\n-cosa9\r\n-cosa10\r\n-cosa11\r\n-cosa12\r\n-cosa13\r\n-cosa14\r\n-cosa15\r\n-cosa16'),
('Suite con vista al mar', 120, '-cosa1\r\n-cosa2\r\n-cosa3\r\n-cosa4\r\n-cosa5\r\n-cosa6');

-- --------------------------------------------------------

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
CREATE TABLE IF NOT EXISTS `reservas` (
  `idReserva` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCliente` varchar(100) NOT NULL,
  `mailCliente` varchar(100) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `numeroHabitacion` int(11) NOT NULL,
  PRIMARY KEY (`idReserva`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(60) NOT NULL,
  `pass` varchar(80) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreUsuario`, `pass`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3'),
(4, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
