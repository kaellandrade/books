CREATE DATABASE publications;
USE publications;
CREATE TABLE classics (
	author VARCHAR(128),
	title  VARCHAR(128),
	type   VARCHAR(16),
	year   CHAR(4)
)
	ENGINE InnoDB;
ALTER TABLE classics
ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT KEY;
INSERT INTO classics(author, title, type, year)
VALUES ('Mark Twain', 'The Adventures of Tom Sawyer', 'Fiction', '1876');
INSERT INTO classics(author, title, type, year)
VALUES ('Jane Austen', 'Pride and Prejudice', 'Fiction', '1811');
INSERT INTO classics(author, title, type, year)
VALUES ('Charles Darwin', 'The Origin of Species', 'Nonfiction', '1856');
INSERT INTO classics(author, title, type, year)
VALUES ('Charles Dickens', 'The Old Curiosity Shop', 'Fiction', '1841');
INSERT INTO classics(author, title, type, year)
VALUES ('William Shakespeare', 'Romeo and Juliet', 'Play', '1594');

CREATE TABLE customers (
	name VARCHAR(128),
	isbn VARCHAR(13),
	PRIMARY KEY (isbn)
)
	ENGINE InnoDB;
INSERT INTO customers(name, isbn)
VALUES ('Joe Bloggs', '9780099533474');
INSERT INTO customers(name, isbn)
VALUES ('Mary Smith', '9780582506206');
INSERT INTO customers(name, isbn)
VALUES ('Jack Wilson', '9780517123201');

ALTER TABLE classics ADD isbn CHAR(13);
UPDATE classics SET isbn='9781598184891' WHERE year='1876';
UPDATE classics SET isbn='9780582506206' WHERE year='1811';
UPDATE classics SET isbn='9780517123201' WHERE year='1856';
UPDATE classics SET isbn='9780099533474' WHERE year='1841';
UPDATE classics SET isbn='9780192814968' WHERE year='1594';
# SELECT name,isbn,title,author FROM customers NATURAL JOIN classics;
# PREPARE statement FROM "INSERT INTO classics VALUES(?,?,?,?,?,?)";
# SET
# 	@author   = "Emily Brontë",
# 	@title    = "Wuthering Heights",
# 	@type = "Classic Fiction",
# 	@year     = "1847",
#     @id = 12,
#     @isbn     = "9780553212587";
# EXECUTE statement USING @author,@title,@type,@year,@id,@isbn;
