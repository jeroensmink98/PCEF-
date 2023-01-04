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

To access the Admin UI of pocketbase go to [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)

The Svelte application will run on [localhost:5173](http://localhost:5173)

## Technologies used

As stated above the technologies used in this project are 

- Pocketbase
- Svelte
    - Svelte uses Typescript instead of JavaScript
    - HTML for markup
    - Tailwind CSS for styling of markup
- Tailwind CSS


## Project structure

The project follows a normal Svelte project structure, every page has its own route so `/book` `/teacher` and `/class` from this page we load in specific components like `BookList` or `BookCreate` that is responsible for showing the UI. A component can also contain some small logic that is used within that component like looping over an array and doing some local data transformations like showing a value in uppercase letters.

All the other logic should be places inside loose modules like `Book.ts` or `Teacher.ts`. These files contain logic/code that should be shared accross components.

For local datastorage we make use of **Svelte Stores** these are local object stores whereby we can easily notify other components that use this store about any update in the data. The component will then update if the data of the store changes.

