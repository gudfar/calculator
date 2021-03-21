Calculator
===============================

Technologies that were used:

* PHP 7.1
* Symfony 4.3.11
* lexik/jwt-authentication-bundle (jwt authentication)
* The Serializer Component
* FOSRestBundle
* NelmioApiDocBundle (Swagger)
* Docker
* symfony/webpack-encore-bundle
* React Js
* Redux


Installation
------------

* `git clone https://github.com/gudfar/calculator.git`
*  Go to project folder and run `cp .env.dist .env`
*  Go to docker folder => copy env.dist to .env and change it
*  Run `docker-compose up -d` (check if containers were set up if not try again `docker-compose up -d`)
*  Go inside php container `docker-compose exec nginx bash`
*  Run 
   + `composer install`
   + `yarn install`
   + `yarn build`
* Open browser http://localhost:8013 (login: admin, pass: 111111)
* Have a fun!
