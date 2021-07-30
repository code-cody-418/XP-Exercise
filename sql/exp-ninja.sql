-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS profile;

create TABLE profile
(
    ProfileId BINARY(16) NOT NULL,
    profileActivationToken CHAR(32),
    profileAvatarUrl VARCHAR(255),
    profileCoins INT,
    profileEmail VARCHAR(128) NOT NULL,
    ProfileExp INT,
    profileHash CHAR(97) NOT NULL,
    profileLevel INT,
    profileUserName VARCHAR(32),
    UNIQUE (profileEmail),
    UNIQUE (profileUserName),
    PRIMARY KEY (ProfileId)
);



