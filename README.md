# Clubs at CU

## Frontend

Navigate into the client directory and run `npm i && npm start` to run the React app locally.

## Backend 

Navigate into the server directory and run `npm run server`. This initializes the express server, which will begin its connection to our remote mongoDB server and start to listen to requests on port 8080 of localhost.

## DB credentials

Please create an `.env` file *at the root of the ./server directory*, and attach the db credentials (can be found in the pinned message of #databases-team channel in Spec Product Slack workspace, or in the Product Admin Info google doc, which Laura has access to) in this file.

Note that the backend server won't be able to establish a connection with our db server until you made this configuration. In addition, although this file is already included in `.gitignore`, please still make sure that you **not push this data to our remote branches under any circumstances**.

## Deployment
LionClubs is deployed on heroku. Heroku runs the node server, which serves the LionClubs API and the static frontend. To redeploy the application, run `npm run build` to rebuild the frontend and `npm run deploy` to push the latest code to heroku, which will make the changes live. The passwork to Heroku is on the Product Admin Info google doc, which Laura has access to.
