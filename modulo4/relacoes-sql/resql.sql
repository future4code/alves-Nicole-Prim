CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Adorei o filme",
    7,
	"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito legal",
    5,
	"003"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Mais ou menos",
    3,
	"004"
);

ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE title = "Doce de mãe";

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES
('002', '001'), ('003','002'), ('004','003'), ('002','004'),
('003','005'), ('004','006'), ('002','002');

INSERT INTO MovieCast VALUES
('002', '007');

DELETE FROM Actor WHERE id = "003";

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movie.id, title, rate FROM Movie
INNER JOIN Rating
ON Movie.id = Rating.movie_id;