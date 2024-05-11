CREATE DATABASE usersDB

CREATE TABLE newUsers(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(255) UNIQUE,
    dob DATE
);