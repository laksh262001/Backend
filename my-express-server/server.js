const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
}); 
app.get("/contact", function(req,res){
    res.send("Contact me at: t.s.lakshmi2@gmail.com")
});
app.get("/about", function(req, res){
    res.send("I am Lakshmi T S, pursuing my final year in engineering at SSIT.")
});
app.get("/hobbies", function(req, res){
    res.send("<ul><li>Dancing</li><liCoding</li><li>Singing</li><li>Glass Painting</li></ul>")
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});