const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    const query = req.body.cityName;
    const apikey = "7a4b1ba1d47e141f8e41beb2b09cb241";
    const unit = "matrix";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey +"&units=" + unit;

    https.get(url, function(response){
      console.log(response.statusCode);

      response.on("data", function(data){
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const description = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        res.write("<h1>The temperature in "+ query + " is " + temp + " degrees celsius.</h1>");
        res.write("<h3> The weather is currently " + description + "</h3>");
        res.write("<img scr=" + imageURL +">");
        res.send()
    })
})

})

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})