const express = require('express')
const dbConnection = require('./config/dbConaction')
require('dotenv').config()
const routes = require('./routes/studdent.routes');

const port = process.env.PORT;
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded())
app.use("/uploads",express.static('uploads'))
//connection
dbConnection()
app.use('/',routes)
app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
})