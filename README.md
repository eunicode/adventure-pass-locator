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

- Where to put fetch call when using Context
- Move API call to useEffect()
- Scrape website with Python and create JSON file
- Figure out Google Maps API
- Refresh page after form submit? / Update table after form submit. Look at yelp

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
