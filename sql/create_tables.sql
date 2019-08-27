CREATE TABLE IF NOT EXISTS users (
    id int PRIMARY KEY NOT NULL UNIQUE,
    person_image VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL,
    birthday_date timestamp NOT NULL,
    email VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    registered_date timestamp NOT NULL,
    last_login timestamp NOT NULL,
    activate int DEFAULT 0,
    banned int DEFAULT 0
);

CREATE TABLE IF NOT EXISTS banned (
    id int PRIMARY KEY NOT NULL UNIQUE,
    banned_name VARCHAR(355) NOT NULL,
    banned_description VARCHAR(255) NOT NULL,
    banned_registered Timestamp NOT NULL DEFAULT NOW(),
    banned_begin Timestamp NOT NULL,
    banned_end Timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS notes (
    id int PRIMARY KEY NOT NULL UNIQUE,
    name_note VARCHAR(255) NOT NULL,
    description_note VARCHAR(255) NOT NULL,
    registered_date Timestamp NOT NULL DEFAULT NOW(),
    started_date Timestamp,
    finish_date Timestamp,
    activate int
);

CREATE TABLE IF NOT EXISTS shows (
    id int PRIMARY KEY NOT NULL UNIQUE,
    show_name VARCHAR(255) NOT NULL,
    show_decription VARCHAR(255) NOT NULL,
    show_image VARCHAR(255) NOT NULL,
    registered_date Timestamp NOT NULL DEFAULT NOW(),
);