# Blog System

## Features

- we have two type of users (user,admin)
- we will manage posts, comments and likes

- user can create account and mange account (create, edit)
- user can create new post and comment and like others posts
- admin can manage users (create, delete, view)
- admin can manage posts and comments (view, delete)

## Day1 in project:

- create database (Mongodb)
- use mongoose to deal with database
- use validation on database

## connect nodejs with mongodb

- native code -> mongodb
- ODM (Object Document Mapper) -> Mongoose
- to deal with data (data.json)

## project Architecture:

- server.js -> running server
- app.js -> create server (middlewares, routes)
- Middleware Folder -> Middlewares
- Routes Folder -> routes
- Controllers Folder-> controllers
- Models Folder -> models (Mongoose)
- .env file -> environment variables

## SQL Database vs NoSQL Database

- structures not structured
- Tables Collection
- Row Document (js like object)
- Relations (join) Embedded Documents

## NOSQL database structure

- users collection
- posts collection
- comments collection embedded in post collection
