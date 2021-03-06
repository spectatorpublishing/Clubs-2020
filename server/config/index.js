require('dotenv').config();

const AWS_SECRET_ACCESS = process.env.AWS_SECRET_ACCESS
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY

const dbUser = process.env.DBUSER
const dbName = process.env.DBNAME
const dbPassword = process.env.DBPASSWORD
const discardAfterXDays = 14
const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ap8o2.mongodb.net/${dbName}?retryWrites=true&w=majority`

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays,
    AWS_SECRET_ACCESS: AWS_SECRET_ACCESS,
    AWS_ACCESS_KEY: AWS_ACCESS_KEY,
}