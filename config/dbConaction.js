require('dotenv').config()

const mongoose = require('mongoose')

const dbConaction = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("db is Connected!!!!!!"))
    .catch((err)=>console.log(err))
}


module.exports = dbConaction