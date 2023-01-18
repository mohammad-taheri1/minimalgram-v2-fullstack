# Minimalgram V2

Hello. This is an open-source project. This projects is consisted of :

* Nest.js
* React
* PostgreSQL
* Prisma

Some key feautures in this project :

* Authentication && Authorization && JWT
* Database management && CRUD && ORM
* RESTful APIs
* Media Management : CRUD user posts with an image && a caption
* Swagger
* Error handling
* CORS handling

## What you can do in this project ?

As a normal user:

* see first page 
* see users profile 
* search posts

As a registered user: 

* publish a post
* temporarily/permanently unpublish a post `changePublishStatus Fn`

As an Admin

* On progress....


## Project Structure :

### Backend (API-based Microservice)

 The backend of this project is consisted of micro-services.

| # | Name   | Framework | DB         | ORM      | Broker  |
|---|--------|-----------|------------|----------|---------|
| 1 | Core   | NestJs    | PostgreSQL | Prisma   | RabitMQ |
| 2 | Logger | NestJs    | MongoDB    | Mongoose | RabitMQ |
