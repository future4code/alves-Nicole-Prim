SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";

UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = LOWER(name)
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
name = "Vagner Moura",
birth_date = "1976-06-27",
salary = 600000,
gender = "male"
WHERE id = "005";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor 
WHERE gender = "female";

SELECT COUNT(*) FROM Actor 
WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET
playing_limit_date = "2019-10-27"
WHERE id = "002";

UPDATE Movie
SET
playing_limit_date = "2022-08-27"
WHERE id = "004";

DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET synopsis = "blablabla"
WHERE id = "001";