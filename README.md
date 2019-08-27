# RememberMe

Uma aplicação voltada para a criação de memórias, ajudando a desenvolver a memória para lembrar coisas muitas vezes superfluas.


This is a Full application using this:

```
Flutter
Dart
Java
Spring
Netflix Zuul
Eureka
Flyaway
REST
RabbitMq
GoLang
Typescript
Angular 8
Sql
Postgresql
Docker
Docker Compose
```

## Each Folder

### Docker

This folder container the .yml file for up containers in your local machine or virtual machine

### Eureka

This is the eureka server builded using spring, you need to up him first to microservices connect with him, but this is also configured in services.yml

### Gateway

This is the gateway of application, by default the port is the 8080, all the HTTP requests pass for this port, in any time the request is for microservices, he have the routing system using netflix zuul connected with the IPs registered in Eureka server, here you'll go found the OAuth2 protocol to authenticate.

### Microservices

This folder container the microservices of applications, this microservices are builded using spring and GoLang

#### 1.0 Notes

First of microservices using spring and contains all the things to notes

### Mobile

This is the mobile application that are developed using flutter

### sql

This folder container the schema of SQL, to migrate do database

### Web

Front of the application using HTML5/CSS3/Typescript/Angular 8

        
