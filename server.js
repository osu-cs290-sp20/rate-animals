var express = require('express');
var fs = require('fs');

var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 3000;

const validSubDirectories = ['rate', '404', 'gallery', 'guess', 'icons', 'leaderboards', 'upload', 'rate/all'];



var pathToImages = "C:/Users/jacob/cs290/finalproject/animalImages"                  //to get the path to the images.
if(process.env.IMAGEPATH){      //to change this path if things glitch out make a environmental variable with the entire path to the images folder
                                //THIS folder should be outside of the git repository, so that it doesn't get backed up by git. contact Jacob with any questions.
    pathToImages = IMAGEPATh
}



var app = express();


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
app.use(bodyParser.json({
    limit: '50mb'
}));



const IP = process.env.IP; //IP for jacob is 127.0.0.1
const MONGOPORT = process.env.MONGOPORT //typically 27017

const URL = "mongodb://localhost:" + MONGOPORT + "/main";

var animalDB; //where we'll make all our entries and such.


MongoClient.connect(URL, function (err, client) {
    if (err) {
        throw err;
    }
    db = mongoDBDatabase = client.db('main');
    animalDB = db.collection('animals');

    app.listen(PORT, function () {
        console.log("listening on port " + PORT); //don't start listening until connected.
    })
    var adminOption = 0;          //ONLY CHANGE THIS IF YOU KNOW WHAT YOU"RE DOING THIS WILL RESET ALL SCORES
    if(adminOption === "reset"){
    console.log("reset all scores");
    animalDB.updateMany({}, {$set: {
        typeScore: 800,
        score:800
    }})
    }else if(adminOption === "valid"){
        console.log("Approving all animals");
        animalDB.updateMany({},{$set:{reported:1}})
    }


})



app.get("/twoNewAnimals/:animalType", function (req, res) {
    
    var animalCursor;

    if (req.params.animalType == "all") {
        animalCursor = animalDB.find({
            reported: {
                $gte: 0
            }
        });
    } else {
      
        animalCursor = animalDB.find({
            animalType: req.params.animalType,
            reported: {
                $gte: 0
            }
        }); //if their report is negative we don't add this to the list.
    }
    var animal1;
    var animal2;
    var animal1image;
    var animal2image;
    var count = 0;
    var valid = false;
    animalCursor.toArray(function (err, animalDocs) {

        if (err) {
            res.status(500).send("Error fetching photo from database");
        } else {
            var pick 
            while(!valid){
                pick= Math.floor(Math.random() * animalDocs.length);
                 animal1 = animalDocs[pick];
                 if(fs.existsSync(animal1.imageURL)){
                     valid = true;
                 }
             }
             valid = false;
            do {
                pick = Math.floor(Math.random() * animalDocs.length);
                animal2 = animalDocs[pick];
                if(fs.existsSync(animal2.imageURL)){
                    valid = true;
                }
                count++;
                if(count>=100){
                    break;
                }
            } while (animal1 === animal2 || !valid) //makes sure it isn't the same animal.
        }
        if(count>=100){
            res.status(400).send("Not enough animals of that type found");
            res.end()
        }else{
            animal1image = fs.readFileSync(animal1.imageURL, {
                encoding: 'base64'
            });
            animal2image = fs.readFileSync(animal2.imageURL, {
                encoding: 'base64'
            });


            var response = {
                Animal1: animal1,
                Animal2: animal2,
                animal1Image: animal1image,
                animal2Image: animal2image
            }
            response = JSON.stringify(response);
            res.status(200).send(response);
            res.end();
        }
    }
    


)})



app.get("/", function (req, res) {
    res.render('rate');
    res.status(200);
})

app.get("/rate/:type", function (req, res) {
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
    console.log("page attempted: ")
    console.log(req.URL);
    res.render('404');
    res.status(404);

})


//ANIMAL UPLOADING
app.post('/uploadAnimal', function (req, res) {

    if (req.body.animalType !== "" && req.body.animalName !== "" && req.body.animalImage && (req.body.animalAge == "0" || req.body.animalAge == "1")) {
       
        var data = req.body.animalImage.replace(/^data:image\/\w+;base64,/, "");

        var buf = Buffer.from(data, 'base64');
        var images = fs.readdirSync(pathToImages);

        var imageURL = pathToImages + '/' + req.body.animalName + '0' + '.png';
        var looping = true;
        var count = 0;
        while (looping) {
            if (fs.existsSync(imageURL)) { //doing sync because this should be pretty fast.
                count++;
                imageURL = pathToImages + '/' + req.body.animalName + count + '.png';
            } else {
                looping = false;
            }
        }
        addToDB(req.body.animalType, req.body.animalName, req.body.animalAge, imageURL,req.body.userIP);
        fs.writeFile(imageURL, buf, function () {
            res.status(200).send("Photo successfuly added!");
            res.end();
        });
    } else {
        res.status(400).send("Requests to this path must contain a JSON body with all the required fields");
        res.end();
    }


});


function addToDB(type, name, age, url,userIP) {
    const initialScore = 800;
    const initialTypeScore = 800;

    animalDB.insertOne({
        animalType: type,
        animalName: name,
        animalAge: age,
        imageURL: url,
        score: initialScore,
        typeScore: initialTypeScore,
        reported: 0,
        IP: userIP //safe is 0 if unknown, 1 if known, and negative if it's been reported.

    })
}





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




app.post('/updateScores', function (req, res) {
    

    if (req.body.animal1ID && req.body.animal2ID && req.body.animal1Score && req.body.animal2Score && req.body.winner && req.body.scope) {

        updateScores(req.body.animal1ID, req.body.animal1Score, req.body.animal2ID, req.body.animal2Score, req.body.winner, req.body.scope);
        res.status(200).send("Scores Successfully updated");
        res.end();
    } else {

        res.status(400).send("Requests to this path must contain a JSON body with all the required fields.");
        res.end();
    }


})


app.post('/reportAnimal',function(req,res){
    console.log("reporting animal");
    var animalURL = req.body.reportURL;
    console.log(animalURL);
    animalDB.updateOne({imageURL: animalURL, reported:{$lte: 0}}, { $set: { reported:-1 } })
    res.status(200).send("Animal Reported");
    res.end();
})





app.post('*', function (req, res) {
    console.log(req.url);
    res.status(400).send("You can't post here!")
    res.end();
})
const minimumRank = 100;
const maximumRank = 1600;

function updateScores(animal1ID, animal1Score, animal2ID, animal2Score, winner, scope) { //if scope = 1 then it's all animals, 2 is specific type.
    
    var k = 30; //constant that affects how much the score changes by
    var probabilitySecond = (1.0 / (1.0 + Math.pow(10, (animal1Score - animal2Score) / 400))); //probability of winning of player 2
    var probabilityFirst = (1.0 / (1.0 + Math.pow(10, (animal2Score - animal1Score) / 400))); //probablility of winning of player 1
   
    if (winner == 1) {
        animal1Score = (animal1Score + k * (1 - probabilityFirst)).toFixed(0);
        animal2Score = (animal2Score + k * (0 - probabilitySecond)).toFixed(0);
    } else {
        animal1Score = (animal1Score + k * (0 - probabilityFirst)).toFixed(0);
        animal2Score = (animal2Score + k * (1 - probabilitySecond)).toFixed(0);
    }
    if (animal1Score < minimumRank) {
        animal1Score = minimumRank;
    }
    if (animal1Score > maximumRank) {
        animal1Score = maximumRank;
    }
    if (animal2Score < minimumRank) {
        animal2Score = minimumRank;
    }
    if (animal2Score > maximumRank) {
        animal2Score = maximumRank;
    }
    if (scope == 1) { //update all scores 
        animalDB.updateOne({imageURL: animal1ID}, { $set: { score: Number(animal1Score) } })
        animalDB.updateOne({
                imageURL: animal2ID
            }, {
                $set: {
                    score: Number(animal2Score)
                }
            }
        )
    } else {        //update all type scores.
        animalDB.updateOne({
               imageURL: animal1ID
            }, {
                $set: {
                    typeScore: Number(animal1Score)
                }
            }
        )
        animalDB.updateOne({
            imageURL: animal2ID
        }, {
            $set: {
                typeScore: Number(animal2Score)
            }
        })
    }
}


