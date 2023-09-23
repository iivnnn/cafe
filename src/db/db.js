//const {MongoClient}= require("mongodb")
const mongoose= require("mongoose")
const config= require("../utils/config")
//const dbConnection= new MongoClient(config.uri)


//dbConnection.connect()
mongoose.connect(config.uri)
.then((e) => {
    console.log("Connection successfully")
})
.catch((e) => {
    console.log("Error connetion db")
    console.log(e)
})

module.exports= mongoose.connection

