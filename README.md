
# NewsPo!nt

Newspo!nt is a cutting-edge news website built with React, designed to cater to the diverse interests of modern readers. With a sleek and intuitive interface, Nespo!nt delivers the most up-to-date news across various categories, ensuring you stay informed and engaged with the world around you.


## Features

- Up to Date News
- News segmented in diverse interests
- Responsive


## API Reference

The website acquires news content through an API provided by [newsapi.org](https://newsapi.org/).






## Run Locally

Please note that due to the limitations of the free plan provided by [newsapi.org](https://newsapi.org/), this website cannot be hosted. The terms of the free plan do not permit the hosting of the site on external platforms.

### Clone the project

```bash
git clone https://github.com/singhharshit24/NewsPoint.git
```
### Install all dependencies

```bash
npm install
```

all the dependencies used in the project
```bash
"dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-infinite-scroll-component": "^6.1.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-top-loading-bar": "^2.1.0",
    "web-vitals": "^2.1.4"
  }
```

### Create .env.local file
Create a .env.local file. Store the api key in a variable named "REACT_APP_NEWS_API"

```bash
REACT_APP_NEWS_API = <YOUR API KEY>
```    
### Start the server

```bash
npm start
```  
## Demo

### General News
![General News](ScreenShots\general.png)

### Sports News
![Sports News](ScreenShots\sports.png)

### Entertainment News
![Entertainment News](ScreenShots\entertainment.png)

### Video demo

![Demo Video](ScreenShots\Recording 2023-07-09 205353.mp4)