const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

const clubProfileRoutes = require('./routes/clubProfileRoutes')

// requiring db connection
const db = require('./models')

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
})

// parsing AJAX requests
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// routes
app.use('/api/clubProfiles', clubProfileRoutes)

app.use(express.static(path.join(__dirname, '../client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/client/build/index.html'))
})