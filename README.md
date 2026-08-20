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
- build user model

## Day2 in project:

- build post and comment model
- use mongoose validation on database
- use express-validations

## Day3 in project:

- build authentication and authorization

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

## what is the difference between

|                |             Authentication             |                               Authorization |
| :------------- | :------------------------------------: | ------------------------------------------: |
| meaning        |              How are you?              |                            what can you do? |
| implementation |                Account                 |                                        Role |
|                | Registered users can login and use app | Validate Role each role have some authority |

## users type in app:

- anonymous use:

  > user isn't registered in application (limited access)
  > home page - login - registration - some documentation pages

- authenticated user:
  > registered users have more access to web pages
  > can mange his account and use some features
  > have some role (can give or limit access to some features)

## how authentication work:

- user must provide two info at least
- one is public(must be unique) and other is secret
- mostly we use email(public info) & password(secret info)
- to make password secret, we need to hash password
- hash works one way
- plain text password -> will be hashed
- hashed password -> can't be converted back to plain text
- in Login how i will authenticate user?
  > we will hash login password and compare two hashes
- we need to use package called bcryptjs.

## RESTFull APIS:

- http/https protocol + data json
- http/https protocol: stateless protocol

- server handle each request independently.
- each request is considered new user util you tell the server who you are

- you should have some info in request to tell the server how you are
- this info will be provide when you login
- we use json web tokens(jwt) for this task

## what each user can use:

- anonymous user: getAllPosts, getPostById, getAllPostComments, register, login
- user role: anonymous user + getUserById, updateUser, deleteUser =>(id same user id), logout, create post, create comment (mange his own)
- admin role: anonymous user + getAllUsers, getUserById, deleteUser, deletePost, deleteComment.
