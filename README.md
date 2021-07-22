# Adventure Pass Locator

## Description

The official government [forest service website](https://www.fs.usda.gov/detailfull/r5/passes-permits/recreation/?cid=STELPRDB5181410&width=full) does not provide a way to find the nearest Adventure Pass vendor. This web app provides a way to find the nearest Adventure Pass vendor in Southern California.

## Demo

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->

## Features

## Tech Stack

- React
<!-- ## APIs -->

## Changelog

<!-- ## Lessons Learned -->

## To do

- Scrape website with Python and create JSON file
- Figure out Google Maps API
- Show 25 locations at a time, with arrows that allow users to see next 25.
- Add type annotation
- Option to sort alphabetically, by zipcode and city
- Show map with markers for vendors

LATER

- Create my own zipcode and latitude/longitude database
- Switch to Bing maps API
- Create a relational database
- v. 1.0 - straight line distance between two zip codes
- v. 2.0 - route distance between two zip codes

## Setup

Move into project folder

```
cd adventure-pass-setup
```

Install dependendies

```
npm install
```

Run project

```
npm run dev
```

## Attribution

This app was scaffolded with Vite and the react-ts template preset.

The adventure pass vendor data was obtained by saving a webpage as an html file and parsing it.

## NOTES

How to use fetch() to put data into Context?

One way is to define a function that calls fetch() inside of Provider. Then call the fetch function inside of useEffect's callback function. useEffect's callback function is where we perform actions with side effects. By default, useEffect's callback function runs after every render. Limit re-renders by providing a dependency array. An empty dependency array means the side effect is run only after first render.

How to use Context?

1. Import React, useContext and any other hooks you'll use.
2. Create a Context object with createContext(). It will have a Provider property.
3. Define your Provider function component.
4. Use useState to create a state variable and stateSetter function.
5. Return a HOC `Context.Provider` component that wraps around its `props.children`.
6. Pass the `Context.Provider` a `value` prop that holds an object of "global" data.
7. Export Context object and Provider function component.
8. In your entry file (index.js, main.js), import your Provider function component.
9. Call it and wrap it around your app. Don't forget this step.
10. Use data in context by calling `useContext(Context)` and destructuring the `value` object in your function component.

Refresh page after form submit / update table after form submit?

React automatically re-renders when state changes.
