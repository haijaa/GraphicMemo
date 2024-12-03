CREATE DATABASE GraphicMemo;

CREATE TABLE comics (
    comicId SERIAL PRIMARY KEY,
    comicTitle VARCHAR(50) NOT NULL,
    comicDescription TEXT NOT NULL,
    comicIssue INT NOT NULL,
    comicCharacter VARCHAR(50) NOT NULL,
    comicAuthor VARCHAR(50),
    comicPublisher VARCHAR(50) NOT NULL,
    comicReleased VARCHAR(50),
    comicImageCover VARCHAR(250) NOT NULL,
);

CREATE TABLE review (
    reviewId SERIAL PRIMARY KEY,
    comicId INT REFERENCES comics(comicId) ON DELETE CASCADE,
    reviewUser VARCHAR(50) NOT NULL UNIQUE,
    reviewText text,
    reviewRaiting INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
