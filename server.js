var express = require('express');
var fs = require('fs');
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const validSubDirectories = ['rate', '404', 'gallery', 'guess', 'icons', 'leaderboards', 'upload', 'rate/all'];
const ImageDir = '/animalImages';


app.listen(PORT, function () {
    console.log("listening on port " + PORT);
})



app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        },
    }
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.json({limit: '50mb'}));







app.get("/", function (req, res) {
    res.render('rate');
    res.status(200);
})

app.get("/rate/:type",function(req,res){
    res.render('rate');
    res.status(200);
});

//these are down here becaues they're in the node_modules directory. At some point should check if we can take them out of node moduesl.
app.get('/croppie.js', function (req, res) {
    var page = fs.readFileSync('node_modules/croppie/croppie.js');
    res.type("application/javascript");
    res.status(200).send(page);
    res.end();
})
app.get('/croppie.css', function (req, res) {
    var page = fs.readFileSync('node_modules/croppie/croppie.css');
    res.type("text/css");
    res.status(200).send(page);
    res.end();
})

app.get("/:subdir", function (req, res) {
    var subDir = req.params.subdir;
    if (validSubDirectories.includes(subDir)) {
        res.render(subDir);
        res.status(200);
    } else {
        res.render('404');
        res.status(404);
    }
})

app.get("*", function (req, res) {
    res.render('404');
    res.status(404);

})


//ANIMAL UPLOADING
app.post('/uploadAnimal',function(req,res){
  
    if(req.body.animalType!== ""  && req.body.animalName!== "" && req.body.animalImage && (req.body.animalAge == "0" || req.body.animalAge == "1")){   
        console.log("Animal Type is:", req.body.animalType);
        console.log("Animal Age is: ",req.body.animalAge);
        console.log("Animal Name is: ",req.body.animalName);
        var data = req.body.animalImage.replace(/^data:image\/\w+;base64,/, "");
       
        var buf = Buffer.from(data, 'base64');
        var images = fs.readdirSync(__dirname + ImageDir);
        var amountOfImages = images.length;
        
        var imageURL = __dirname + ImageDir + '/' + req.body.animalName + '0' + '.png';
        var looping = true;
        var count = 0;
        while(looping){
            if(fs.existsSync(imageURL)){    //doing sync because this should be pretty fast.
                count++;
                imageURL = __dirname + ImageDir + '/' + req.body.animalName + count + '.png';
            }else{
                looping = false;
            }
        }
        fs.writeFile(imageURL, buf,function(){
            res.status(200).send("Photo successfuly added!");
            res.end();
        });
    }else{
        res.status(400).send("Requests to this path must contain a JSON body with an animalType, animalImage, animalAge, and animalName fields");
        res.end();
    }
    

});





app.post('/report/:userID'),
    function (req, res) { //WHY ISNT THIS WORKING.
        var person = req.params.userID;
        console.log("Person reported: ", person);
    }



var numOfReports = [];

function reportJacob() {
    updateReports();

}

function reportMalini() {
    updateReports();
}

function reportJessica() {
    updateReports();
}

function updateReports() {
    fs.readFile('reports.txt', 'utf8', function (err, data) {
        console.log(data);
    })
}