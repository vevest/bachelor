-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Nov 27, 2026 at 12:00 PM
-- Server version: 10.6.20-MariaDB-ubu2004
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `accommodation_trans`
--

CREATE TABLE `accommodation_trans` (
  `accommodation_fk` char(255) NOT NULL,
  `lang_fk` tinyint(2) UNSIGNED NOT NULL,
  `accommodation_text` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accommodation_types`
--

CREATE TABLE `accommodation_types` (
  `accommodation_pk` char(255) NOT NULL,
  `accommodation_icon` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accommondations`
--

CREATE TABLE `accommondations` (
  `accommodation_fk` char(255) NOT NULL,
  `service_fk` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `account_pk` char(255) NOT NULL,
  `service_fk` char(255) NOT NULL,
  `account_username` varchar(255) NOT NULL,
  `account_password_hash` varchar(255) NOT NULL,
  `account_role` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `day_names`
--

CREATE TABLE `day_names` (
  `day_name_pk` tinyint(3) UNSIGNED NOT NULL,
  `day_name` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `day_name_trans`
--

CREATE TABLE `day_name_trans` (
  `day_name_fk` tinyint(3) UNSIGNED NOT NULL,
  `lang_fk` tinyint(3) UNSIGNED NOT NULL,
  `day_name_text` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `langs`
--

CREATE TABLE `langs` (
  `lang_pk` tinyint(3) UNSIGNED NOT NULL,
  `lang` char(2) NOT NULL,
  `lang_icon` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `opening_hours`
--

CREATE TABLE `opening_hours` (
  `opening_hours_pk` char(255) NOT NULL,
  `service_fk` char(255) NOT NULL,
  `day_name_fk` tinyint(3) UNSIGNED NOT NULL,
  `service_is_open` tinyint(1) UNSIGNED NOT NULL,
  `opening_hours_start` time NOT NULL,
  `opening_hours_end` time NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `organisations`
--

CREATE TABLE `organisations` (
  `organisation_pk` char(255) NOT NULL,
  `organisation_logo_path` varchar(255) NOT NULL,
  `organisation_phone` varchar(15) NOT NULL,
  `organisation_email` varchar(50) NOT NULL,
  `organisation_cvr` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_pk` char(255) NOT NULL,
  `service_fk` char(255) NOT NULL,
  `post_visible` tinyint(1) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_trans`
--

CREATE TABLE `post_trans` (
  `post_fk` char(255) NOT NULL,
  `lang_fk` tinyint(3) UNSIGNED NOT NULL,
  `post_message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_pk` char(255) NOT NULL,
  `organisation_fk` char(255) NOT NULL,
  `service_name` varchar(100) NOT NULL,
  `service_street` varchar(50) NOT NULL,
  `service_street_number` varchar(8) NOT NULL,
  `service_zip` char(4) NOT NULL,
  `service_city` varchar(25) NOT NULL,
  `service_phone` varchar(15) NOT NULL,
  `service_email` varchar(25) NOT NULL,
  `service_needs_cpr` tinyint(1) UNSIGNED NOT NULL,
  `service_website` varchar(255) NOT NULL,
  `service_cvr` char(8) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_descriptions`
--

CREATE TABLE `service_descriptions` (
  `service_description_pk` char(255) NOT NULL,
  `service_fk` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_description_trans`
--

CREATE TABLE `service_description_trans` (
  `service_description_fk` char(255) NOT NULL,
  `lang_fk` tinyint(3) UNSIGNED NOT NULL,
  `service_description` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accommodation_trans`
--
ALTER TABLE `accommodation_trans`
  ADD PRIMARY KEY (`accommodation_fk`,`lang_fk`);

--
-- Indexes for table `accommodation_types`
--
ALTER TABLE `accommodation_types`
  ADD PRIMARY KEY (`accommodation_pk`);

--
-- Indexes for table `accommondations`
--
ALTER TABLE `accommondations`
  ADD PRIMARY KEY (`accommodation_fk`,`service_fk`);

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_pk`,`service_fk`);

--
-- Indexes for table `day_names`
--
ALTER TABLE `day_names`
  ADD PRIMARY KEY (`day_name_pk`);

--
-- Indexes for table `day_name_trans`
--
ALTER TABLE `day_name_trans`
  ADD PRIMARY KEY (`day_name_fk`,`lang_fk`);

--
-- Indexes for table `langs`
--
ALTER TABLE `langs`
  ADD PRIMARY KEY (`lang_pk`);

--
-- Indexes for table `opening_hours`
--
ALTER TABLE `opening_hours`
  ADD PRIMARY KEY (`opening_hours_pk`);

--
-- Indexes for table `organisations`
--
ALTER TABLE `organisations`
  ADD PRIMARY KEY (`organisation_pk`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_pk`);

--
-- Indexes for table `post_trans`
--
ALTER TABLE `post_trans`
  ADD PRIMARY KEY (`post_fk`,`lang_fk`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_pk`);

--
-- Indexes for table `service_descriptions`
--
ALTER TABLE `service_descriptions`
  ADD PRIMARY KEY (`service_description_pk`,`service_fk`);

--
-- Indexes for table `service_description_trans`
--
ALTER TABLE `service_description_trans`
  ADD PRIMARY KEY (`service_description_fk`,`lang_fk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
