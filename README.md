# Movie-Search-Engine

This HTML, CSS, and JavaScript code creates a movie search engine website. The HTML structure includes a header container, a form, and an image container. The CSS styles the elements, including a background image, bubble animation, and form styling. The bubble animation creates a rising effect for eight bubbles with different sizes and animations. The form includes a text input field and a search button, with animations for the input field and button. The JavaScript code loads an external script and the Typed.js library, which is used to create a typing animation for the text "Movie Search Engine" in the header. The animation types out the text with a speed of 150ms and loops indefinitely. The code also includes media queries for responsive design. All things contained, the code provides a basic structure and design for a movie search engine website, but lacks the functionality to perform actual searches and display results.


Code Explanation
The code consists of three main files: index.html, index.js, and index.css.

index.html:

This file is the main structure of the web application. It includes:
The document type declaration and basic HTML structure (head and body).
A header section that displays the title of the application with animated text.
A form with an input field for users to enter the name of a movie or show, along with a search button.
A container (.image-container) where the images of the searched shows will be displayed.
Links to external stylesheets and scripts, including the main JavaScript file index.js.
index.js:

This file contains the JavaScript logic for the application. Key functionalities include:
Loading saved searches from localStorage when the page loads.
Handling form submission to fetch data from the TV Maze API based on user input.
Saving search results to localStorage to persist data across sessions.
Rendering images of shows in the gallery and allowing users to click on them to view trailers or official pages.
Functions to manage the display of images and handle user interactions.
index.css:

This file contains the styles for the application. It includes:
General styles for layout, typography, and animations.
Specific styles for the header, form, buttons, and image gallery.
Media queries to ensure responsiveness on smaller screens.
Animations for buttons and bubble effects in the header.

## Description

The Movie Search Engine is a web application that allows users to search for movies and TV shows using the TV Maze API. Users can enter the name of a show or movie, view its poster images, and access links to official pages or trailers. The application also saves previous searches in the browser's local storage.

## Features

- Search for movies and TV shows by name.
- Display images of the searched shows.
- Clickable images that lead to the official site or trailer.
- Persistent storage of search results using localStorage.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API (for API calls)
- TV Maze API (for fetching show data)

## Usage
- Enter the name of a movie or TV show in the search input field.
- Click the "Search" button to fetch results.
- View the images of the shows displayed in the gallery.
- Click on an image to visit the official page or watch the trailer.
