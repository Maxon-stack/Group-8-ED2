-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
-- User wamp server or something similar to Copy and paste Queries to add it to your local computer. Changes made on your local computer will not reflect else where so come back and add your queries here and push it and let the group know.

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

-- DROP TABLE IF EXISTS `new_arrivals`;
-- CREATE TABLE IF NOT EXISTS `new_arrivals` (
--   `PLT` varchar(25) DEFAULT NULL,
--   `DODID` varchar(25) NOT NULL,
--   `SSN` varchar(25) DEFAULT NULL,
--   `first_name` varchar(25) NOT NULL,
--   `last_name` varchar(25) DEFAULT NULL,
--   `rank` varchar(25) DEFAULT NULL,
--   `MOS` varchar(25) DEFAULT NULL,
--   `unit` varchar(25) DEFAULT NULL,
--   `UIC` varchar(25) DEFAULT NULL,
--   `gender` varchar(25) DEFAULT NULL,
--   `room_number` varchar(25) DEFAULT NULL,
--   `phone_number` varchar(25) DEFAULT NULL,
--   `arrival_date` varchar(25) DEFAULT NULL,
--   `arrival_time` varchar(25) DEFAULT NULL,
--   `POV` varchar(25) DEFAULT NULL,
--   `days_in_processing` varchar(25) DEFAULT NULL,
--   `vaccine_status` varchar(25) DEFAULT NULL,
--   `barracks_required` varchar(25) DEFAULT NULL,
--   `barracks_room_number` varchar(25) DEFAULT NULL,
--   `losing_installation` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `new_arrivals` (
  `PLT` varchar(25) DEFAULT NULL,
  `gaining_unit` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `ASI` varchar(25) DEFAULT NULL,
  `date_of_birth` varchar(25) DEFAULT NULL,
  `place_of_birth` varchar(120) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `home_of_record` varchar(25) DEFAULT NULL,
  `ETS` varchar(25) DEFAULT NULL,
  `security_clearance` varchar(25) DEFAULT NULL,
  `BASD` varchar(25) DEFAULT NULL,
  `DOR` varchar(25) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `blood_type` varchar(25) DEFAULT NULL,
  `glasses` varchar(25) DEFAULT NULL,
  `inserts_on_hand` varchar(25) DEFAULT NULL,
  `color_blind` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `army_email` varchar(25) DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip_code` varchar(25) DEFAULT NULL,
  `emergency_name` varchar(25) DEFAULT NULL,
  `emergency_relation` varchar(25) DEFAULT NULL,
  `emergency_phone_number` varchar(25) DEFAULT NULL,
  `emergency_email` varchar(25) DEFAULT NULL,
  `emergency_street_address` varchar(50) DEFAULT NULL,
  `emergency_address_line_2` varchar(25) DEFAULT NULL,
  `emergency_city` varchar(40) DEFAULT NULL,
  `emergency_state` varchar(25) DEFAULT NULL,
  `emergency_zip_code` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



--
-- Table structure for table `platoon_one`
--

-- DROP TABLE IF EXISTS `platoon_one`;
-- CREATE TABLE IF NOT EXISTS `platoon_one` (
--   `DODID` varchar(25) NOT NULL,
--   `first_name` varchar(25) NOT NULL,
--   `last_name` varchar(25) DEFAULT NULL,
--   `rank` varchar(25) DEFAULT NULL,
--   `MOS` varchar(25) DEFAULT NULL,
--   `unit` varchar(25) DEFAULT NULL,
--   `gender` varchar(25) DEFAULT NULL,
--   `room_number` varchar(25) DEFAULT NULL,
--   `phone_number` varchar(25) DEFAULT NULL,
--   `arrival_date` varchar(25) DEFAULT NULL,
--   `days_in_processing` varchar(25) DEFAULT NULL,
--   `vaccine_status` varchar(25) DEFAULT NULL,
--   `SSN` varchar(25) DEFAULT NULL,
--   `PLT` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `platoon_one` (
  `PLT` varchar(25) DEFAULT NULL,
  `gaining_unit` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `ASI` varchar(25) DEFAULT NULL,
  `date_of_birth` varchar(25) DEFAULT NULL,
  `place_of_birth` varchar(120) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `home_of_record` varchar(25) DEFAULT NULL,
  `ETS` varchar(25) DEFAULT NULL,
  `security_clearance` varchar(25) DEFAULT NULL,
  `BASD` varchar(25) DEFAULT NULL,
  `DOR` varchar(25) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `blood_type` varchar(25) DEFAULT NULL,
  `glasses` varchar(25) DEFAULT NULL,
  `inserts_on_hand` varchar(25) DEFAULT NULL,
  `color_blind` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `army_email` varchar(25) DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip_code` varchar(25) DEFAULT NULL,
  `emergency_name` varchar(25) DEFAULT NULL,
  `emergency_relation` varchar(25) DEFAULT NULL,
  `emergency_phone_number` varchar(25) DEFAULT NULL,
  `emergency_email` varchar(25) DEFAULT NULL,
  `emergency_street_address` varchar(50) DEFAULT NULL,
  `emergency_address_line_2` varchar(25) DEFAULT NULL,
  `emergency_city` varchar(40) DEFAULT NULL,
  `emergency_state` varchar(25) DEFAULT NULL,
  `emergency_zip_code` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `platoon_two`
--

-- DROP TABLE IF EXISTS `platoon_two`;
-- CREATE TABLE IF NOT EXISTS `platoon_two` (
--   `DODID` varchar(25) NOT NULL,
--   `first_name` varchar(25) NOT NULL,
--   `last_name` varchar(25) DEFAULT NULL,
--   `rank` varchar(25) DEFAULT NULL,
--   `MOS` varchar(25) DEFAULT NULL,
--   `unit` varchar(25) DEFAULT NULL,
--   `gender` varchar(25) DEFAULT NULL,
--   `room_number` varchar(25) DEFAULT NULL,
--   `phone_number` varchar(25) DEFAULT NULL,
--   `arrival_date` varchar(25) DEFAULT NULL,
--   `days_in_processing` varchar(25) DEFAULT NULL,
--   `vaccine_status` varchar(25) DEFAULT NULL,
--   `SSN` varchar(25) DEFAULT NULL,
--   `PLT` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `platoon_two` (
  `PLT` varchar(25) DEFAULT NULL,
  `gaining_unit` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `ASI` varchar(25) DEFAULT NULL,
  `date_of_birth` varchar(25) DEFAULT NULL,
  `place_of_birth` varchar(120) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `home_of_record` varchar(25) DEFAULT NULL,
  `ETS` varchar(25) DEFAULT NULL,
  `security_clearance` varchar(25) DEFAULT NULL,
  `BASD` varchar(25) DEFAULT NULL,
  `DOR` varchar(25) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `blood_type` varchar(25) DEFAULT NULL,
  `glasses` varchar(25) DEFAULT NULL,
  `inserts_on_hand` varchar(25) DEFAULT NULL,
  `color_blind` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `army_email` varchar(25) DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip_code` varchar(25) DEFAULT NULL,
  `emergency_name` varchar(25) DEFAULT NULL,
  `emergency_relation` varchar(25) DEFAULT NULL,
  `emergency_phone_number` varchar(25) DEFAULT NULL,
  `emergency_email` varchar(25) DEFAULT NULL,
  `emergency_street_address` varchar(50) DEFAULT NULL,
  `emergency_address_line_2` varchar(25) DEFAULT NULL,
  `emergency_city` varchar(40) DEFAULT NULL,
  `emergency_state` varchar(25) DEFAULT NULL,
  `emergency_zip_code` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



--
-- Table structure for table `platoon_three`
--

-- DROP TABLE IF EXISTS `platoon_three`;
-- CREATE TABLE IF NOT EXISTS `platoon_three` (
--   `DODID` varchar(25) NOT NULL,
--   `first_name` varchar(25) NOT NULL,
--   `last_name` varchar(25) DEFAULT NULL,
--   `rank` varchar(25) DEFAULT NULL,
--   `MOS` varchar(25) DEFAULT NULL,
--   `unit` varchar(25) DEFAULT NULL,
--   `gender` varchar(25) DEFAULT NULL,
--   `room_number` varchar(25) DEFAULT NULL,
--   `phone_number` varchar(25) DEFAULT NULL,
--   `arrival_date` varchar(25) DEFAULT NULL,
--   `days_in_processing` varchar(25) DEFAULT NULL,
--   `vaccine_status` varchar(25) DEFAULT NULL,
--   `SSN` varchar(25) DEFAULT NULL,
--   `PLT` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `platoon_three` (
  `PLT` varchar(25) DEFAULT NULL,
  `gaining_unit` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `ASI` varchar(25) DEFAULT NULL,
  `date_of_birth` varchar(25) DEFAULT NULL,
  `place_of_birth` varchar(120) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `home_of_record` varchar(25) DEFAULT NULL,
  `ETS` varchar(25) DEFAULT NULL,
  `security_clearance` varchar(25) DEFAULT NULL,
  `BASD` varchar(25) DEFAULT NULL,
  `DOR` varchar(25) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `blood_type` varchar(25) DEFAULT NULL,
  `glasses` varchar(25) DEFAULT NULL,
  `inserts_on_hand` varchar(25) DEFAULT NULL,
  `color_blind` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `army_email` varchar(25) DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip_code` varchar(25) DEFAULT NULL,
  `emergency_name` varchar(25) DEFAULT NULL,
  `emergency_relation` varchar(25) DEFAULT NULL,
  `emergency_phone_number` varchar(25) DEFAULT NULL,
  `emergency_email` varchar(25) DEFAULT NULL,
  `emergency_street_address` varchar(50) DEFAULT NULL,
  `emergency_address_line_2` varchar(25) DEFAULT NULL,
  `emergency_city` varchar(40) DEFAULT NULL,
  `emergency_state` varchar(25) DEFAULT NULL,
  `emergency_zip_code` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



--
-- Table structure for table `platoon_four`
--

-- DROP TABLE IF EXISTS `platoon_four`;
-- CREATE TABLE IF NOT EXISTS `platoon_four` (
--   `DODID` varchar(25) NOT NULL,
--   `first_name` varchar(25) NOT NULL,
--   `last_name` varchar(25) DEFAULT NULL,
--   `rank` varchar(25) DEFAULT NULL,
--   `MOS` varchar(25) DEFAULT NULL,
--   `unit` varchar(25) DEFAULT NULL,
--   `gender` varchar(25) DEFAULT NULL,
--   `room_number` varchar(25) DEFAULT NULL,
--   `phone_number` varchar(25) DEFAULT NULL,
--   `arrival_date` varchar(25) DEFAULT NULL,
--   `days_in_processing` varchar(25) DEFAULT NULL,
--   `vaccine_status` varchar(25) DEFAULT NULL,
--   `SSN` varchar(25) DEFAULT NULL,
--   `PLT` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `platoon_four` (
  `PLT` varchar(25) DEFAULT NULL,
  `gaining_unit` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `ASI` varchar(25) DEFAULT NULL,
  `date_of_birth` varchar(25) DEFAULT NULL,
  `place_of_birth` varchar(120) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `home_of_record` varchar(25) DEFAULT NULL,
  `ETS` varchar(25) DEFAULT NULL,
  `security_clearance` varchar(25) DEFAULT NULL,
  `BASD` varchar(25) DEFAULT NULL,
  `DOR` varchar(25) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `blood_type` varchar(25) DEFAULT NULL,
  `glasses` varchar(25) DEFAULT NULL,
  `inserts_on_hand` varchar(25) DEFAULT NULL,
  `color_blind` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `army_email` varchar(25) DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip_code` varchar(25) DEFAULT NULL,
  `emergency_name` varchar(25) DEFAULT NULL,
  `emergency_relation` varchar(25) DEFAULT NULL,
  `emergency_phone_number` varchar(25) DEFAULT NULL,
  `emergency_email` varchar(25) DEFAULT NULL,
  `emergency_street_address` varchar(50) DEFAULT NULL,
  `emergency_address_line_2` varchar(25) DEFAULT NULL,
  `emergency_city` varchar(40) DEFAULT NULL,
  `emergency_state` varchar(25) DEFAULT NULL,
  `emergency_zip_code` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



--
-- Table structure for table `platoon_senior`
--

-- DROP TABLE IF EXISTS `platoon_senior`;
-- CREATE TABLE IF NOT EXISTS `platoon_senior` (
--   `DODID` varchar(25) NOT NULL,
--   `first_name` varchar(25) NOT NULL,
--   `last_name` varchar(25) DEFAULT NULL,
--   `rank` varchar(25) DEFAULT NULL,
--   `MOS` varchar(25) DEFAULT NULL,
--   `unit` varchar(25) DEFAULT NULL,
--   `gender` varchar(25) DEFAULT NULL,
--   `room_number` varchar(25) DEFAULT NULL,
--   `phone_number` varchar(25) DEFAULT NULL,
--   `arrival_date` varchar(25) DEFAULT NULL,
--   `days_in_processing` varchar(25) DEFAULT NULL,
--   `vaccine_status` varchar(25) DEFAULT NULL,
--   `SSN` varchar(25) DEFAULT NULL,
--   `PLT` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `platoon_senior` (
  `PLT` varchar(25) DEFAULT NULL,
  `gaining_unit` varchar(25) DEFAULT NULL,
  `DODID` varchar(25) NOT NULL,
  `SSN` varchar(25) DEFAULT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `ASI` varchar(25) DEFAULT NULL,
  `date_of_birth` varchar(25) DEFAULT NULL,
  `place_of_birth` varchar(120) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `home_of_record` varchar(25) DEFAULT NULL,
  `ETS` varchar(25) DEFAULT NULL,
  `security_clearance` varchar(25) DEFAULT NULL,
  `BASD` varchar(25) DEFAULT NULL,
  `DOR` varchar(25) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `blood_type` varchar(25) DEFAULT NULL,
  `glasses` varchar(25) DEFAULT NULL,
  `inserts_on_hand` varchar(25) DEFAULT NULL,
  `color_blind` varchar(25) DEFAULT NULL,
  `vaccine_status` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `army_email` varchar(25) DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip_code` varchar(25) DEFAULT NULL,
  `emergency_name` varchar(25) DEFAULT NULL,
  `emergency_relation` varchar(25) DEFAULT NULL,
  `emergency_phone_number` varchar(25) DEFAULT NULL,
  `emergency_email` varchar(25) DEFAULT NULL,
  `emergency_street_address` varchar(50) DEFAULT NULL,
  `emergency_address_line_2` varchar(25) DEFAULT NULL,
  `emergency_city` varchar(40) DEFAULT NULL,
  `emergency_state` varchar(25) DEFAULT NULL,
  `emergency_zip_code` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



--
-- Table structure for table `administrators`
--

-- DROP TABLE IF EXISTS `administrators`;
-- CREATE TABLE IF NOT EXISTS `administrators` (
--   `DODID` varchar(25) NOT NULL,
--   `name` varchar(25) NOT NULL,
--   `username` varchar(25) DEFAULT NULL,
--   `password` varchar(25) DEFAULT NULL,
--   `refreshToken` varchar(25) DEFAULT NULL,
--   PRIMARY KEY (`DODID`),
--   UNIQUE KEY `DODID` (`DODID`)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `administrators` (
  `name` varchar(25) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refreshToken` text,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Table structure for table `shipping_roster`
--

DROP TABLE IF EXISTS `shipping_roster`;
CREATE TABLE IF NOT EXISTS `shipping_roster` (
  `PLT` varchar(25) NOT NULL,
  `SSN` varchar(25) NOT NULL,
  `DODID` varchar(25) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  `rank` varchar(25) DEFAULT NULL,
  `MOS` varchar(25) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  `room_number` varchar(25) DEFAULT NULL,
  `arrival_date` varchar(25) DEFAULT NULL,
  `POV` varchar(25) DEFAULT NULL,
  `time_shipped` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`DODID`),
  UNIQUE KEY `DODID` (`DODID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--
-- Dumping data for table `platoon_one`
--

INSERT INTO `platoon_one` (`DODID`, `first_name`, `last_name`, `rank`, `MOS`, `unit`, `gender`, `room_number`, `phone_number`, `arrival_date`, `days_in_processing`, `vaccine_status`, `SSN`, `PLT`) VALUES
('1', 'Dan', 'Man', '1st', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill');
INSERT INTO `platoon_two` (`DODID`, `first_name`, `last_name`, `rank`, `MOS`, `unit`, `gender`, `room_number`, `phone_number`, `arrival_date`, `days_in_processing`, `vaccine_status`, `SSN`, `PLT`) VALUES
('32', 'Ben', 'Man', '2nd', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill');
INSERT INTO `platoon_three` (`DODID`, `first_name`, `last_name`, `rank`, `MOS`, `unit`, `gender`, `room_number`, `phone_number`, `arrival_date`, `days_in_processing`, `vaccine_status`, `SSN`, `PLT`) VALUES
('54', 'Tom', 'Man', '3rd', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill');
INSERT INTO `platoon_four` (`DODID`, `first_name`, `last_name`, `rank`, `MOS`, `unit`, `gender`, `room_number`, `phone_number`, `arrival_date`, `days_in_processing`, `vaccine_status`, `SSN`, `PLT`) VALUES
('32', 'Sam', 'Man', '4th', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill');
INSERT INTO `platoon_senior` (`DODID`, `first_name`, `last_name`, `rank`, `MOS`, `unit`, `gender`, `room_number`, `phone_number`, `arrival_date`, `days_in_processing`, `vaccine_status`, `SSN`, `PLT`) VALUES
('233', 'Bob', 'Man', '5th', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill', 'fill');