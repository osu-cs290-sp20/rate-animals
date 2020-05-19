var express = require('express');
var fs = require('fs');
var app = express();

const PORT = process.env.PORT ||3000;


app.listen(PORT,function(){
    console.log("listening on port " + PORT);
})


app.get('/',function(req,res){
    var page = fs.readFileSync("index.html","utf8");
    res.status(200).send(page);
})

app.get('/navbar-style',function(req,res){
    var page = fs.readFileSync("navbar-style/NavbarStyle.css","utf8");
    res.type('text/css');
    res.status(200).send(page);
})

app.get('/button.css',function(req,res){
    var page = fs.readFileSync("button.css","utf8");
    res.type('text/css');
    res.status(200).send(page);
})

app.get('/RandomAnimals.js',function(req,res){
    var page = fs.readFileSync("RandomAnimals.js","utf8");
    res.type('application/javascript');
    res.status(200).send(page);
})

app.get('/rateBox.js',function(req,res){
    var page = fs.readFileSync("rateBox.js","utf8");
    res.type('application/javascript');
    res.status(200).send(page);
})

app.get('/buttonPress.js',function(req,res){
    var page = fs.readFileSync("buttonPress.js","utf8");
    res.type('application/javascript');
    res.status(200).send(page);
})

app.get('/reportButton.js',function(req,res){
    var page = fs.readFileSync("reportButton.js","utf8");
    res.type('application/javascript');
    res.status(200).send(page);
})

app.get('/icons/flag.png',function(req,res){
    res.sendFile(__dirname +'/icons/flag.png')                  //is this the right way to do this
})

app.get('/leaderboards.css',function(req,res){
    var page = fs.readFileSync('leaderboards/leaderboards.css');
    res.type('text/css');
    res.status(200).send(page);
})




app.get('/guess',function(req,res){
    var page = fs.readFileSync('guess/guess.html');
    res.type("text/html");
    res.status(200).send(page)
})

app.get('/gallery',function(req,res){
    var page = fs.readFileSync('gallery/gallery.html');
    res.type("text/html");
    res.status(200).send(page)
})
app.get('/rate',function(req,res){
    var page = fs.readFileSync('index.html');
    res.type("text/html");
    res.status(200).send(page)
})

app.get('/leaderboards',function(req,res){
    var page = fs.readFileSync('leaderboards/leaderboards.html');
    res.type("text/html");
    res.status(200).send(page)
})

app.get('/upload',function(req,res){
    var page = fs.readFileSync('uploadAnimal/uploadAnimal.html');
    res.type("text/html");
    res.status(200).send(page);
})

app.get('/uploadStyle.css',function(req,res){
    var page = fs.readFileSync('uploadAnimal/uploadStyle.css');
    res.type("text/css");
    res.status(200).send(page);
})

app.get('/croppie.css',function(req,res){
    var page = fs.readFileSync('node_modules/croppie/croppie.css');
    res.type("text/css");
    res.status(200).send(page);
})

app.get('/croppie.js',function(req,res){
    var page = fs.readFileSync('node_modules/croppie/croppie.js');
    res.type("application/javascript");
    res.status(200).send(page);
})
app.get('/uploading.js',function(req,res){
    var page = fs.readFileSync('uploadAnimal/uploading.js');
    res.type("application/javascript");
    res.status(200).send(page);
})
app.get('/animalSubmitting.js',function(req,res){
    var page = fs.readFileSync('uploadAnimal/animalSubmitting.js');
    res.type("application/javascript");
    res.status(200).send(page);
})


app.get('/404',function(req,res){
    var page = fs.readFileSync('404/404.html');
    res.type("text/html");
    res.status(200).send(page);
})
app.get('/404.css',function(req,res){
    var page = fs.readFileSync('404/404.css');
    res.type("text/css");
    res.status(200).send(page);
})
app.get('/404.js',function(req,res){
    var page = fs.readFileSync('404/404.js');
    res.type("aplication/javascript");
    res.status(200).send(page);
})

app.get('/dropdown.css',function(req,res){
    var page = fs.readFileSync('dropdown.css');
    res.type('text/css');
    res.status(200).send(page);
})






app.get("*",function(req,res){
    var page = fs.readFileSync('404/404.html');
    res.type("text/html")
    res.send(page)
    console.log("File failed to load: " + req.url);
    res.status(404);
    res.end();
})