require('dotenv').config();

const dbUser = process.env.DBUSER
const dbName = process.env.DBNAME
const dbPassword = process.env.DBPASSWORD

const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ap8o2.mongodb.net/${dbName}?retryWrites=true&w=majority`

module.exports = {
    URI: URI
}