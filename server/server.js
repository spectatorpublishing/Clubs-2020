const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

const clubProfileRoutes = require('./routes/clubProfileRoutes')
const clubAccountRoutes = require('./routes/clubAccountRoutes')
const imgUploadRoutes = require('./routes/image-upload')

// requiring db connection
const db = require('./models')

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
})

// parsing AJAX requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// allow CORS:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

// routes
app.use('/api/clubProfiles', clubProfileRoutes)
app.use('/api/clubAccounts', clubAccountRoutes)
app.use('/api/image-upload', imgUploadRoutes)

app.use(express.static(path.join(__dirname, '../client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  // const root_path = 
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})