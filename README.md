<img src="./public/img/logo.svg" alt="Codechella">

## Table Of Contents
- [About The Project](#about-the-project)

- [Features](#features)

- [Build With](#build-with)

## About The Project
<img src="http://img.shields.io/static/v1?label=Development&message=Finished&color=GREEN&style=for-the-badge"/>
<img src="http://img.shields.io/static/v1?label=CODE%20REVIEW&message=Not%20Started&color=red&style=for-the-badge"/>

### Context
This project is a front-end challenge designed by Alura.

The goal is to develop a web application from scratch and add functionalities according to customer needs. 

To view my project click <a href="codechella-mu.vercel.app" target="_blank">here</a>

### Challenge
CodeChella is an alternative music festival that takes place annually, which is composed of different genres and aims to promote an enchanting and unforgettable experience for the visitor, providing multicultural and social integration. Aiming at publicizing it and selling tickets, the festival wants to implement a website that enables these actions:

* A home page that will show the attractions of the festival;
* A page to explain the festival experience, showing the different stages;
* A page to demonstrate the sectors available for ticket purchase;
* A FAQ page;
* A page for purchasing tickets by filling in the form;
* A page to show the generated ticket.

It is __very important that the website is responsive__ to give customers the ease of purchasing through mobile devices.

### Layout
* The desktop and mobile templates are available [here](https://www.figma.com/file/xHLPBeA2ujaXbBjHMK9xh7/CodeChella-%7C-Challenge-I---Front-end-2023?node-id=48%3A205&t=xRQfFGZaPrKNRWtn-1)

* I used the desktop first approach (no particular reason) to create the pages

<img src="https://i.imgur.com/5XshY7v.gif" alt="Layout">
<img src="https://i.imgur.com/isG59oi.gif" alt="Responsive Layout">

## Features 
- ` accordion`: :heavy_check_mark:
  * To display the questions and answers I used the html tag ```details``` and ```summary```

<img src="https://i.imgur.com/uM541dT.gif" alt="Q&A accordion">

- `form validation`: :heavy_check_mark:
  * Each input have its own validation
    * All of them are required
    * Email, name and CPF have pattern validation
    * CPF have a custom validation to check if the CPF is valid
    * Date have a custom validation to check if the the user is under age

<img src="https://i.imgur.com/kieQ468.gif" alt="Form validation">

- `submit validation`: :heavy_check_mark:
    * If all the fields are valid, the information is send to the server
        * a random key is generated to server as an ``id``
        * a qrcode is generated based on the ``id``
        * the user is redirected to the ticket display page using the ``id``

- `exihibt ticket`: :heavy_check_mark: 
  * Once the ticket page opens, a ``GET`` requisition to the a server is made and the ``qrcode, name, sector and date`` are displayed according to the user ``id``
    * I used a json server, just to mimic a server temporarily. 

<img src="https://i.imgur.com/YBY2NPS.gif" alt="Ticket">

## Build With
:small_blue_diamond: React.js

:small_blue_diamond: Styled Components

:small_blue_diamond: React Router

:small_blue_diamond: Json Server
