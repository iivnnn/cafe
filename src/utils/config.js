require("dotenv").config()

module.exports= {
    port: process.env.port || 3000,
    views: "src/view",
    defaultView: "f.hbs",
    keyApiWeather: 'd99b28955ad740bba8842133232109',
    uri: "mongodb+srv://iivnnn123:Governi@cluster0.nucbabs.mongodb.net/test?retryWrites=true&w=majority"
}
//uri= 'mongodb+srv://iivnnn123:<password>@cluster0.nucbabs.mongodb.net/?retryWrites=true&w=majority'