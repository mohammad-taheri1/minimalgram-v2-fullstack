# Minimalgram V2.0.0

![GitHub last commit](https://img.shields.io/github/last-commit/MamadTaheri/minimalgram-v2-fullstack)
![GitHub Repo stars](https://img.shields.io/github/stars/MamadTaheri/minimalgram-v2-fullstack?style=social)

Hello. This is an open-source project. This projects is consisted of :

- Nest.js
- React
- PostgreSQL
- Prisma

## Some key feautures in this project :

- Authentication && Authorization && JWT
- Database management && CRUD && ORM: PostgreSQL && Prisma
- RESTful APIs
- Media Management : CRUD user posts with an image && a caption
- Swagger
- Error handling
- CORS handling

## What you can do in this project ?

As a `normal` user:

- [x] see all posts on first page
- [ ] search posts by category
- [ ] see users profile

As a `registered` user:

- [ ] publish a post
- [ ] temporarily/permanently unpublish a post `changePublishStatus Fn`

As an `Admin`

- [ ] get overall reports of application
- [ ] create a new category
- [ ] active/deactive a user
- [ ] activate/deactivate a post


## Project Structure :

### Backend (API-based Microservice)

The backend of this project is consisted of micro-services.

| #   | Name   | Framework | DB         | ORM      | Broker  |
| --- | ------ | --------- | ---------- | -------- | ------- |
| 1   | Core   | NestJs    | PostgreSQL | Prisma   | RabitMQ |
| 2   | Logger | NestJs    | MongoDB    | Mongoose | RabitMQ |

## key feautures in more details:

* brach `main` is locked. so it only accepts pull request
* Guset can see public posts withouth any authentication
* Guest can see user profile with user's posts and public informations
* UserType can be ADMIN or USER
* Guest can signup
* User can login and logout
* User can see him/her profile with it's private informations
* User can create new post
* User can edit and delete only his/her posts (check by userID)
* Admin can create categories
* Admin can switch user isActive field between true and false in any time