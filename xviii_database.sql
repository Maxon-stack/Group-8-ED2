-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 16, 2022 at 01:11 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xviii_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `new_arrivals`
--

DROP TABLE IF EXISTS `new_arrivals`;
CREATE TABLE IF NOT EXISTS `new_arrivals` (
  `PLT` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `UIC` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `arrival_time` varchar(25) DEFAULT NULL,
  `POV` varchar(25) DEFAULT NULL,
  `days_in_processing` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `barracks_required` varchar(25) DEFAULT NULL,
  `barracks_room_number` varchar(25) DEFAULT NULL,
  `losing_installation` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `platoon_one`
--

DROP TABLE IF EXISTS `platoon_one`;
CREATE TABLE IF NOT EXISTS `platoon_one` (
  `DODID` varchar(25) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `days_in_processing` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `PLT` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `platoon_two`
--

DROP TABLE IF EXISTS `platoon_two`;
CREATE TABLE IF NOT EXISTS `platoon_two` (
  `DODID` varchar(25) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `days_in_processing` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `PLT` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `platoon_three`
--

DROP TABLE IF EXISTS `platoon_three`;
CREATE TABLE IF NOT EXISTS `platoon_three` (
  `DODID` varchar(25) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `days_in_processing` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `PLT` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `platoon_four`
--

DROP TABLE IF EXISTS `platoon_four`;
CREATE TABLE IF NOT EXISTS `platoon_four` (
  `DODID` varchar(25) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `days_in_processing` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `PLT` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `platoon_senior`
--

DROP TABLE IF EXISTS `platoon_senior`;
CREATE TABLE IF NOT EXISTS `platoon_senior` (
  `DODID` varchar(25) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `days_in_processing` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `PLT` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--
-- Dumping data for table `platoon_one`
--

INSERT INTO `platoon_one` (`DODID`, `first_name`, `last_name`, `rank`, `MOS`, `unit`, `gender`, `room_number`, `phone_number`, `arrival_date`, `days_in_processing`, `vaccine_status`, `SSN`, `PLT`) VALUES
('1', 'Dan', 'Man', '1st', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill');