-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!


create TABLE profile
(
    profileId BINARY(16) NOT NULL,
    profileActivationToken CHAR(32),
    profileAvatarUrl VARCHAR(1000),
    profileCoins INT,
    profileEmail VARCHAR(128) NOT NULL,
    profileExp INT,
    profileHash CHAR(97) NOT NULL,
    profileLevel INT,
    profileUserName VARCHAR(32),
    UNIQUE (profileEmail),
    UNIQUE (profileUserName),
    PRIMARY KEY (ProfileId)
);

create TABLE itemShop
(
    itemShopId BINARY(16) NOT NULL,
    itemShopProfileId BINARY(16) NOT NULL,
    itemShopTenDollarGiftCard BOOLEAN NOT NULL,
    itemShopTwentyDollarGiftCard BOOLEAN NOT NULL,
    itemShopDemonSlayerGame BOOLEAN NOT NULL,
    PRIMARY KEY (itemShopId),
    FOREIGN KEY (itemShopProfileId) REFERENCES profile (profileId)
)





