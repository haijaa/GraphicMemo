CREATE DATABASE GraphicMemo;

CREATE TABLE comics (
    comicId SERIAL PRIMARY KEY,
    comicTitle VARCHAR(50) UNIQUE NOT NULL,
    comicDescription TEXT NOT NULL,
    comicIssue INT NOT NULL,
    comicCharacter VARCHAR(50) NOT NULL,
    comicAuthor VARCHAR(50),
    comicPublisher VARCHAR(50) NOT NULL,
    comicReleased VARCHAR(50),
    comicImageCover VARCHAR(250) NOT NULL
);

CREATE TABLE review (
    reviewId SERIAL PRIMARY KEY,
    comicId INT REFERENCES comics(comicId) ON DELETE CASCADE,
    reviewUser VARCHAR(50) NOT NULL UNIQUE,
    reviewText text,
    reviewRating INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comics (comicTitle, comicDescription, comicIssue, comicCharacter, comicAuthor, comicPublisher, comicReleased, comicImageCover) 
VALUES ('Flashpoint', 'Not a dream, not an imaginary story, not an elseworld. This is Flash Fact: When Barry Allen wakes at his desk, he discovers the world has changed. Family is alive, loved ones are strangers, and close friends are different, gone or worse. Its a world on the brink of a cataclysmic war—but where are Earths Greatest Heroes to stop it? Its a place where Americas last hope is Cyborg, who hopes to gather the forces of The Outsider, The Secret 7, Shazam!, Citizen Cold and other new and familiar-yetaltered faces! Its a world that could be running out of time, if The Flash cant find the villain who altered the time line!', '1', 'The Flash', 'Andy Kubert, Geoff Johns', 'DC', '2012', 'https://static.dc.com/dc/files/default_images/20559_900x1350.jpg?w=640');

DROP TABLE comics;
DROP TABLE review CASCADE;
