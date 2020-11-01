# Clubs at CU

## Frontend

Navigate into the client directory and run `npm i && npm start` to run the React app locally.

## Backend 

Navigate into the server directory and run `npm run server`. This initializes the express server, which will begin its connection to our remote mongoDB server and start to listen to requests on port 8080 of localhost.

## DB credentials

Please create an `.env` file *at the root of the ./server directory*, and attach the following content in the file:
```
DBUSER=clubs-cu-db-user
DBNAME=clubs-CU
DBPASSWORD=w1pWkoB4OW9mqUIh
```
Note that the backend server won't be able to establish a connection with our db server until you made this configuration. In addition, although this file is already included in `.gitignore`, please still make sure that you **not push this data to our remote branches under any circumstances**.
