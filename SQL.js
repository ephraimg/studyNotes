var mysql = require('mysql');


var connection = mysql.createConnection({
  user: /*'root'*/,
  password: /*''*/,
  database: /*'chat'*/
});

connection.connect();

module.exports = connection;


///////////////////////////////////////////

// Invoke the interactive mysql prompt for the running server, 
// logged in as the root user, with 
mysql -u root -p

///////////////////////////////////////////

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  FOREIGN KEY (parent_id)
  REFERENCES parent(id)
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


//////////////////
// SQLlite

SELECT <column-name> [, <additional-column-names>] FROM <table-name>;

SELECT <column-name> FROM <table-name>
  WHERE <some-condition-to-limit-by>;

SELECT * FROM teachers
  WHERE department = 1 OR department = 2;

SELECT name FROM CLASSES
  WHERE name LIKE 'c%';

SELECT * FROM teachers
  WHERE name IN ('pamela', 'sunny');

SELECT name FROM teachers
  WHERE department IN (SELECT id FROM departments
    WHERE name = 'cs');

// selecting from multiple tables
SELECT * FROM departments, classes;

SELECT * FROM teachers, departments
  WHERE departments.name = "cs";

SELECT teachers.name FROM teachers, departments
  WHERE departments.name = "cs" AND teachers.department = departments.id;

// Selecting accross multiple tables and then filtering based 
// on the rows that have shared entries is known as an inner join. 
SELECT teachers.name FROM teachers INNER JOIN departments
  ON teachers.department = departments.id;

// The left outer join will return all the same information as an inner join, 
// but will also return all entries from the first table in the query, 
// even the ones that don't meet the ON condition.
SELECT teachers.name FROM teachers LEFT OUTER JOIN departments
  ON departments.name = "cs" AND teachers.department = departments.id;

SELECT teachers.name FROM departments LEFT OUTER JOIN teachers
  ON departments.name = "cs" AND teachers.department = departments.id;


INSERT INTO tbl_name (col1,col2) VALUES(col2*2,15);



















