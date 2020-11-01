# Clubs
This is the repository for Spectator's new Clubs experience for Columbia students!

Please refer to this document for information regarding the development of the web app.

Example of using themeing with styled-components:
```css
background-color: ${props=>props.theme.colors.white};
```

The app was boostrapped with create-react-app, and you can see the boilerplate info in the bottom section of the README.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

#### Frontend

In the ./client directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Backend 

In the ./server directory, you can run:

##### `yarn server`

Initializes the express server, which will begin its connection to our remote mongoDB server and start to listen to requests on port 8080.

## DB credentials

Please create an `.env` file *at the root of the ./server directory*, and attach the following content in the file:
```
DBUSER=clubs-cu-db-user
DBNAME=clubs-CU
DBPASSWORD=w1pWkoB4OW9mqUIh
```
Note that the backend server won't be able to establish a connection with our db server until you made this configuration. In addition, although this file is already included in `.gitignore`, please still make sure that you **not push this data to our remote branches under any circumstances**.