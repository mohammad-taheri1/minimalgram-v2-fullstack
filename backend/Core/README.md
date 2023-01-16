<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Project Database 

* PostgreSQL
* Models
  * USER    -> must have an enum -> `ADMIN` | `USER`
  * POST
  * IMAGE
  * Like
  * COMMENT

* DB Relations
  * One to One
    * POST 1...1 IMAGE -> `postID` 
  * One to Many
    * USER 1...N POST -> `userID`
    * USER 1...N LIKE -> `userID`
    * POST 1...N LIKE -> `postID`
    * POST 1...N COMMENT -> `postID`