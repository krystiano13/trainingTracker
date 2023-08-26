-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2023 at 11:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ttracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`) VALUES
(2, 'jankowalski', '$2y$10$yAtHHAJ/X39VGeUUHueOLOQXTJzAZjfMAc7otik0llokJOi/yQwY6'),
(3, 'jankowalski1', '$2y$10$tvMlr98m2X/ydzrIg/89eu1qk5n6ZDS2W/KBxsvCexgEbMzRIgbzq'),
(4, 'admin123', '$2y$10$tAobrv9qH.ZHo10iJZ5pWOUG9kjG1nLU8Zj/3QmAiqCHrz0wvgniu'),
(5, 'discoPrzytuly', '$2y$10$g5VKfPut.DJ7nUYSEgvmR.JiSPV2ekU9i2UWq6JY/vOTIuSlumSMO');

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE `exercises` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `plan` text NOT NULL,
  `name` text NOT NULL,
  `sets` int(11) NOT NULL,
  `repetitions` int(11) NOT NULL,
  `weight` float NOT NULL,
  `volume` float NOT NULL,
  `progress` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exercises`
--

INSERT INTO `exercises` (`id`, `username`, `plan`, `name`, `sets`, `repetitions`, `weight`, `volume`, `progress`) VALUES
(1, 'jankowalski', 'Leg Day', 'Squats with dumbells', 3, 15, 40, 1800, 7.14),
(3, 'jankowalski', 'Leg Day', 'Calves Raises', 3, 15, 60, 2700, 7.14),
(5, 'jankowalski', 'Arms Day', 'Bicep Curl', 3, 12, 20, 720, 0),
(6, 'jankowalski', 'Leg Day', 'Bulgarian Split Squats', 4, 19, 16, 1216, 5.56),
(7, 'jankowalski', 'Arms Day', 'Hammer Curl', 3, 13, 14, 546, 8.33),
(9, 'discoPrzytuly', 'Push day', 'Bench Press', 3, 7, 80, 1680, 16.67),
(10, 'discoPrzytuly', 'Leg Day', 'Calve Raises', 5, 16, 45, 3600, 0),
(16, 'discoPrzytuly', 'Leg Day', 'Squats', 6, 12, 60, 4320, 0);

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `title`, `username`) VALUES
(1, 'Leg Day', 'jankowalski'),
(3, 'Leg Day', 'admin123'),
(4, 'Arms Day', 'jankowalski'),
(7, 'Push day', 'discoPrzytuly'),
(8, 'Leg Day', 'discoPrzytuly'),
(9, 'Pull Day', 'discoPrzytuly'),
(10, 'Neck Training', 'discoPrzytuly'),
(11, 'Posture Training', 'discoPrzytuly'),
(13, 'test 1', 'discoPrzytuly'),
(14, 'test 2', 'discoPrzytuly'),
(15, 'test 3', 'discoPrzytuly');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
