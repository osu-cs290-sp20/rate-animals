var express = require('express');
var fs = require('fs');
var app = express();

const PORT = process.env.PORT ||3000;

const validSubDirectories = ['404','gallery','guess','icons','leaderboards','navbar-style','uploadAnimal'];



app.listen(PORT,function(){
    console.log("listening on port " + PORT);
})

app.use(express.static('public'));

app.get("/",function(req,res){
    var page = fs.readFileSync('public/rate/index.html');
    res.type("text/html");
    res.send(page);
    res.status(200);
    res.end();
})
app.get('/croppie.js',function(req,res){
    var page = fs.readFileSync('node_modules/croppie/croppie.js');
    res.type("application/javascript");
    res.status(200).send(page);
    res.end();
})
app.get('/croppie.css',function(req,res){
    var page = fs.readFileSync('node_modules/croppie/croppie.css');
    res.type("text/css");
    res.status(200).send(page);
    res.end();
})

app.get("*",function(req,res){
    var page = fs.readFileSync('public/404/index.html');
    res.type("text/html")
    res.send(page)
    console.log("File failed to load: " + req.url);
    res.status(404);
    res.end();
})


