//key
//d99b28955ad740bba8842133232109
const options= require("./config")
const axios= require("axios")

var allWeather= {
    weatherApi: async function getWeather(c){
        var ciudad= c
        var key= options.keyApiWeather
        console.log(c)
        var url= `http://api.weatherapi.com/v1/current.json?key=${key}&q=${ciudad}&aqi=no`
        var climabody = await axios.get(url)
        var condition= climabody.data.current.condition
        return condition
        }
}

module.exports= allWeather