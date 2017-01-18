# Parmazon

Parmazon is an e-commerce platform that allows businesses to connect users with thier cheese. It was built using Node, Express, React and PostgreSQL as a project for senior phase at Fullstack Acadmey. The site is deployed and viewable at http://parmazon.club (it's deployed via a free Heroku plan, so it might take a minute or so to load)

## Getting Started

Follow these steps to get the project running on your machine 

### Prerequisites

This guide assumes that you have Node (and npm) installed. If you don't, you can get it here: https://nodejs.org.
You'll also need a PostgreSQL database, we used [Postgres.app](https://postgresapp.com/)

### Installing

Setup is easy, in the project directory run

```
npm install
```

To start the server, 

```
npm run build
```

and then

```
npm start
```

then connect to localhost:1337.

## Running the tests

Our test suite features testing for the database, routing and frontend. On the frontend, we test our React componets and Redux action creators for expected behavior, and also test specific forms such as login. All tests are run via 

```
npm test
```

## Deployment

Parmazon is deployed on Heroku with minimal additional configuration. The .profile file and install scripts are written to handle deployment. If you wish to deploy yourself, make sure you've installed the Heroku Postgres add-ons, then from the command line simply

```
git push heroku master
```

## Authors

* **Anuj Shah** - [GitHub](https://github.com/anujshah108)
* **Patryk Chmura** - [GitHub](https://github.com/pchmura)
* **Evan Scribner-MacLean** - [GitHub](https://github.com/eScribMac)