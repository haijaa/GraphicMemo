CREATE DATABASE GraphicMemo;

CREATE TABLE comics (
    comic_id SERIAL PRIMARY KEY,
    comic_title VARCHAR(50) UNIQUE NOT NULL,
    comic_description TEXT NOT NULL,
    comic_issue INT NOT NULL,
    comic_character VARCHAR(50) NOT NULL,
    comic_author VARCHAR(50),
    comic_publisher VARCHAR(50) NOT NULL,
    comic_released INT NOT NULL,
    comic_imagecover VARCHAR(250) NOT NULL
);

CREATE TABLE review (
    review_id SERIAL PRIMARY KEY,
    comic_id INT REFERENCES comics(comic_id) ON DELETE CASCADE,
    review_user VARCHAR(50) NOT NULL,
    review_text text,
    review_rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comics (comic_title, comic_description, comic_issue, comic_character, comic_author, comic_publisher, comic_released, comic_imageCover) 
VALUES ('Flashpoint', 'Not a dream, not an imaginary story, not an elseworld. This is Flash Fact: When Barry Allen wakes at his desk, he discovers the world has changed. Family is alive, loved ones are strangers, and close friends are different, gone or worse. Its a world on the brink of a cataclysmic war—but where are Earths Greatest Heroes to stop it? Its a place where Americas last hope is Cyborg, who hopes to gather the forces of The Outsider, The Secret 7, Shazam!, Citizen Cold and other new and familiar-yetaltered faces! Its a world that could be running out of time, if The Flash cant find the villain who altered the time line!', '1', 'The Flash', 'Andy Kubert, Geoff Johns', 'DC', '2012', 'https://static.dc.com/dc/files/default_images/20559_900x1350.jpg?w=640');
INSERT INTO comics (comic_title, comic_description, comic_issue, comic_character, comic_author, comic_publisher, comic_released, comic_imageCover) 
VALUES ('X-Force (2024)', 'FORGE REUNITES WITH STORM AND MYSTIQUE! The mysterious forces circling X-FORCE since issue #1 begin to come into focus…the fractures were just the beginning! Meanwhile, for all of the pain hes endured, losing STORM may be the biggest regret of FORGEs life. But as Forge reunites with ORORO and MYSTIQUE, this "love triangle" might break more than just a few hearts! Action. Love lost. New foes. Shock surprises. X-FORCE has it all!', 6, 'X-men',  'Geoffrey Thorne', 'Marvel', 2024, 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/d0/6750d4b97eadf/clean.jpg');

INSERT INTO review (comic_id, review_user, review_text, review_rating)
VALUES (1, 'Anton', 'Incredible story, love the back and forth and inside into his parents past', 5);
INSERT INTO review (comic_id, review_user, review_text)
VALUES (2, 'Frida', 'Epic issue, cant wait for more.');
INSERT INTO review (comic_id, review_user, review_text, review_rating)
VALUES (2, 'Anton', 'Truly amazing tale!', 5);

DROP TABLE comics;
DROP TABLE review CASCADE;
