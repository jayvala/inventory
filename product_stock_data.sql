-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2023 at 08:42 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_latest`
--

-- --------------------------------------------------------

--
-- Table structure for table `product_stock_data`
--

CREATE TABLE `product_stock_data` (
  `sid` int(10) UNSIGNED NOT NULL COMMENT 'Stock ID',
  `product_name` text NOT NULL COMMENT 'Product name',
  `variants` text DEFAULT NULL COMMENT 'Product variants',
  `total_quantity` int(10) UNSIGNED DEFAULT 0 COMMENT 'Total quantities of product',
  `in_transit` int(10) UNSIGNED DEFAULT 0 COMMENT 'In transit quantities of product',
  `reached_to_customer` int(10) UNSIGNED DEFAULT 0 COMMENT 'Stock reached to customer',
  `rto` int(10) UNSIGNED DEFAULT 0 COMMENT 'RTO of product',
  `loss` int(10) UNSIGNED DEFAULT 0 COMMENT 'Loss or damage quantities of product',
  `changed` date NOT NULL COMMENT 'Timestamp when the item was created.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_stock_data`
--

INSERT INTO `product_stock_data` (`sid`, `product_name`, `variants`, `total_quantity`, `in_transit`, `reached_to_customer`, `rto`, `loss`, `changed`) VALUES
(15, '7 in 1', 'black', 500, 0, 0, 0, 0, '2023-08-19'),
(16, 'Test', 'NA', 10, 0, 0, 0, 0, '2023-08-23'),
(17, 'Test', 'black', 5, 0, 0, 0, 0, '2023-08-19'),
(18, 'Tea', 'NA', 0, 0, 0, 0, 0, '2023-08-19'),
(19, 'Testing', 'Green', 14, 1, 4, 2, 1, '2023-08-20'),
(20, 'chiku', 'NA', 0, 0, 0, 0, 0, '2023-08-21'),
(21, 'z', 'NA', 0, 0, 0, 0, 0, '2023-08-21'),
(22, 'w', 'NA', 0, 0, 0, 0, 0, '2023-08-21'),
(23, 'j', 'NA', 0, 0, 0, 0, 0, '2023-08-21'),
(24, 'e', 'NA', 0, 0, 0, 0, 0, '2023-08-21'),
(25, 'v', 'v', 0, 0, 0, 0, 0, '2023-08-21'),
(26, 'Make up', 'small', 20, 0, 0, 0, 0, '2023-08-21'),
(27, 'y', 'raj', 0, 0, 0, 0, 0, '2023-08-21'),
(28, 'test', 'boo', 0, 0, 0, 0, 0, '2023-08-22'),
(29, 'tiku', 'tiku', 0, 0, 0, 0, 0, '2023-08-23'),
(30, 'gitu', 'gitu', 0, 0, 0, 0, 0, '2023-08-23'),
(31, 'jj', 'NA', 0, 0, 0, 0, 0, '2023-08-23'),
(32, 'ff', 'NA', 0, 0, 0, 0, 0, '2023-08-23'),
(33, 'jay', 'jay', 50, 0, 0, 0, 0, '2023-08-24'),
(34, 'siku', 'sikuu', 0, 0, 0, 0, 0, '2023-09-01'),
(35, 'siku', 'NA', 0, 0, 0, 0, 0, '2023-08-08'),
(36, 'hh', 'NA', 0, 0, 0, 0, 0, '2023-08-10'),
(37, 'Basket', 'Game', 21, 6, 8, 3, 5, '2023-08-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product_stock_data`
--
ALTER TABLE `product_stock_data`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product_stock_data`
--
ALTER TABLE `product_stock_data`
  MODIFY `sid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Stock ID', AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
