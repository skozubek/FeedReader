# Project Overview

A web-based application that reads RSS feeds. Along with tests with [Jasmine](http://jasmine.github.io/).


## Starting application

Open following [URL](https://skozubek.github.io/FeedReader/) to start the Fead Reader and see the output of provided tests.

# Tests

Set of tests will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Implemeneted test

1. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Test that ensures the menu element is hidden by default.
4. Test that ensures the menu changes visibility when the menu icon is clicked. 
5. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# Dependecnies

## JS

js/app.js file is the main file, actual RSS feed reader application. It uses: 
 * the Google Feed Reader API to grab RSS feeds as JSON object we can make use of,
 * Handlebars templating library,
 * jQuery.
 
jasmine/spec/feedreader.js is the spec file that Jasmine will read and contains all of the tests that will be run against the application.

# CSS

All the elements are styled by the stylesheet in css/style.css file. Additional linked styles:

* Google fonts(https://fonts.googleapis.com/css?family=Roboto:400,100,300,700")
* css/normalize.css
* css/icomoon.css
