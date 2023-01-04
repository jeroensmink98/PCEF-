# PCEF

A small and simple student and class scheduler for the PCEF School in Cambodia

## Getting started

First download and extract the [pocketbase](https://pocketbase.io/docs/) executable and place it in the `/server` folder. Next from this folder run `./pocketbase serve` to start the database and backend,

The migrations will make sure the existing tables and data are present in the database.

For the credentials of the user account present in the migrations please ask [Jeroen Smink](https://github.com/jeroensmink98)

The frontend of the application is written in Svelte. to get started first install [Node.JS](https://nodejs.org/en/download/)

Next from within the `/app` folder run `npm install` to install the packages.

I created two simple scripts that will allow you to start and run the frontend and pocketbase from the root of the project

- To start frontend run `npm run dev` from the root folder of the project
- To start Pocketbase run `npm run server` from the root of the project

## Technologies used

As stated above the technologies used in this project are 

- Pocketbase
- Svelte
    - Svelte uses Typescript instead of JavaScript
    - HTML for markup
    - Tailwind CSS for styling of markup
- Tailwind CSS