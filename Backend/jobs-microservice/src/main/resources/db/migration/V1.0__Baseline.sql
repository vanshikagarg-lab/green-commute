--DROP DATABASE  IF EXISTS `BC32-GreenCommute`;

CREATE DATABASE  IF NOT EXISTS `BC32-GreenCommute`;
USE `BC32-GreenCommute`;

--DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `id` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `aqi` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `location`
VALUES
('1','Hyderabad','894'),
('2','Mumbai','953');


--DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill` (
  `id` varchar(50) NOT NULL,
  `skill` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `skill`
VALUES
('1','UI/UX Designer'),
('2','Graphic Designer');


--DROP TABLE IF EXISTS `route`;
CREATE TABLE `route` (
  `id` varchar(50) NOT NULL,
  `route` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `route`
VALUES
('1','Bike'),
('2','Bus'),
('3','Train'),
('4','Car');


--DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `company_logo` varchar(50) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `location_id` varchar(50) NOT NULL,
  `address` varchar(50),
  `pincode` varchar(50),
  `posted` varchar(50) NOT NULL,
  `distance` varchar(50) NOT NULL,
  `skill_id` varchar(50) NOT NULL,
  `saved` boolean NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`location_id`) REFERENCES location(id),
  FOREIGN KEY (`skill_id`) REFERENCES skill(id)
);

INSERT INTO `job`
VALUES
('1','User Experience Designer','./images/myntraLogo.svg','Myntra','1','Hitech city','500072','36 min ago','5','2',false),
('2','Product Designer','./images/bmwLogo.svg','BMW','1','Hitech city','500072','10 days ago','5','2',true),
('3','User Experience Designer','./images/instagramLogo.svg','Instagram','2','','','45 days ago','15','2',false),
('4','User Experience Designer','./images/hpLogo.svg','HP','1','Hitech city','500072','46 days ago','25','1',false),
('5','User Experience Designer','./images/twitterLogo.svg','Twitter','1','Hitech city','500072','1 week ago','35','1',false),
('6','User Experience Designer','./images/wiproLogo.svg','Wipro','2','','','10 days ago','35','2',false);

INSERT INTO `job`
VALUES
('7','User Experience Designer','./images/myntraLogo.svg','Myntra','1','Hitech city','500072','36 min ago','5','2',false),
('8','Product Designer','./images/bmwLogo.svg','BMW','1','Hitech city','500072','10 days ago','5','2',false);


--DROP TABLE IF EXISTS `job_route`;
CREATE TABLE `job_route` (
  `route_id` varchar(50) NOT NULL,
  `job_id` varchar(50) NOT NULL,
  FOREIGN KEY (`route_id`) REFERENCES route(id),
  FOREIGN KEY (`job_id`) REFERENCES job(id)
);

INSERT INTO `job_route`
VALUES
('1','1'),
('2','1'),
('3','1'),
('1','2'),
('2','2'),
('3','2'),
('4','2'),
('1','3'),
('4','3'),
('1','4'),
('2','4'),
('3','4'),
('1','5'),
('2','5'),
('3','5'),
('4','5'),
('1','6'),
('2','6'),
('3','6'),
('4','6');

INSERT INTO `job_route`
VALUES
('1','7'),
('2','7'),
('3','7'),
('1','8'),
('2','8'),
('3','8'),
('4','8');



