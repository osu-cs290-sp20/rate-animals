var express = require('express');
var fs = require('fs');

var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 3000;

const validSubDirectories = ['rate', '404', 'gallery', 'guess', 'icons', 'leaderboards', 'upload', 'rate/all'];

const validTypes = ["all", "other", "cats", "dogs"]



var pathToImages = "/Users/malini/Documents/webdev/animalimages" //to get the path to the images.
if (process.env.IMAGEPATH) { //to change this path if things glitch out make a environmental variable with the entire path to the images folder
    //THIS folder should be outside of the git repository, so that it doesn't get backed up by git. contact Jacob with any questions.
    pathToImages = process.env.IMAGEPATH
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
var devDB

MongoClient.connect(URL, function (err, client) {
    if (err) {
        throw err;
    }
    db = mongoDBDatabase = client.db('main');
    animalDB = db.collection('animals');
    devDB = db.collection('dev');

    app.listen(PORT, function () {
        console.log("listening on port " + PORT); //don't start listening until connected.
    })
    cleanDatabase();
    var adminOption = 0; //ONLY CHANGE THIS IF YOU KNOW WHAT YOU"RE DOING THIS WILL RESET ALL SCORES
    if (adminOption === "reset") {
        console.log("reset all scores");
        animalDB.updateMany({}, {
            $set: {
                typeScore: 800,
                score: 800
            }
        })
    } else if (adminOption === "valid") {
        console.log("Approving all animals");
        animalDB.updateMany({}, {
            $set: {
                reported: 1
            }
        })
    }else if (adminOption === "create"){
        createDevs();
    }


})





const betterTypes = ["all", "other", "cat", "dog"]

app.get('/randomAnimal/:animalType', function (req, res) {

    var animalCursor;
    if (betterTypes.includes(req.params.animalType)) {
        if (req.params.animalType == "other") {
            animalCursor = animalDB.find({
                $and: [{
                    animalType: {
                        $ne: "cat"
                    }
                }, {
                    animalType: {
                        $ne: "dog"
                    }
                }, {
                    reported: {
                        $gte: 0
                    }
                }]
            });
        } else if (req.params.animalType == "all") {
            animalCursor = animalDB.find({
                reported: {
                    $gte: 0
                }
            });
        } else {
            animalCursor = animalDB.find({
                $and: [{
                    animalType: req.params.animalType
                }, {
                    reported: {
                        $gte: 0
                    }
                }]
            });
        }
    } else {
        res.status(404);
        res.render('404');
    }

    animalCursor.toArray(function (err, animalDocs) {

        var valid = false;
        if (err) {
            res.status(500).send("Error fetching photo from database");
        } else {
            var pick
            while (!valid) {
                pick = Math.floor(Math.random() * animalDocs.length);
                animal1 = animalDocs[pick];

                if (fs.existsSync(animal1.imageURL)) {
                    valid = true;
                }
            }
            animal1image = fs.readFileSync(animal1.imageURL, {
                encoding: 'base64'
            });
            requestBody = {
                image: animal1image
            }
            var responseBody = JSON.stringify(requestBody);
            res.status(200).send(responseBody);
            res.end();
        }

    })

})

app.get("/twoNewAnimals/:animalType", function (req, res) {

    var animalCursor;
    if (req.params.animalType == "all") {
        animalCursor = animalDB.find({
            reported: {
                $gte: 0
            }
        });
    } else if (req.params.animalType == "other") {

        animalCursor = animalDB.find({
            $and: [{
                    animalType: {
                        $ne: "cat"
                    }
                },
                {
                    animalType: {
                        $ne: "dog"
                    }
                },
                {
                    reported: {
                        $gte: 0
                    }
                }
            ]
        });
    } else {

        animalCursor = animalDB.find({
            animalType: req.params.animalType,
            reported: {
                $gte: 0
            }
        }); //if their report is negative we don't add this to the list.
    }
    var animal1, animal2, animal1image, animal2image;
    var count = 0;
    var valid = false;
    animalCursor.toArray(function (err, animalDocs) {

        if (err) {
            res.status(500).send("Error fetching photo from database");
        } else {
            var pick
            while (!valid) {
                pick = Math.floor(Math.random() * animalDocs.length);
                animal1 = animalDocs[pick];
                if (fs.existsSync(animal1.imageURL)) {
                    valid = true;
                }
            }
            valid = false;
            do {
                pick = Math.floor(Math.random() * animalDocs.length);
                animal2 = animalDocs[pick];
                if (fs.existsSync(animal2.imageURL)) {
                    valid = true;
                }
                count++;
                if (count >= 100) {
                    break;
                }
            } while (animal1 === animal2 || !valid) //makes sure it isn't the same animal.
        }
        if (count >= 100) {
            res.status(400).send("Not enough animals of that type found");
            res.end()
        } else {
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
    })
})



app.get("/", function (req, res) {
    res.render('rate');
    res.status(200);
})


app.get("/rate/:type", function (req, res) {
    if (!(validTypes.includes(req.params.type))) {
        res.render('404');
    } else {
        res.render('rate');
    }
});

//these are down here becaues they're in the node_modules directory. At some point should check if we can take them out of node moduesl.
app.get('/croppie.js', function (req, res) {
    res.sendFile(__dirname + "/node_modules/croppie/croppie.js");
})
app.get('/croppie.css', function (req, res) {
    res.sendFile(__dirname +'/node_modules/croppie/croppie.css')
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


app.get("/public/devs/:devname", function (req, res) {
    var fileName = req.params.devname;
    var fileLocation = __dirname + '/public/devs/' + fileName;

    if (fs.existsSync(fileLocation)) {
        res.sendFile(fileLocation);
    } else {
        res.status(404).send("Image not found");
    }

});





//loading new animals. gallery

app.get("/loadNewAnimals/:animalType/:animalNumber/:animalsLoaded",function(req,res){  //sends back an array of animal objects.
    var typeRequested = req.params.animalType;
    var amountRequested = Number(req.params.animalNumber);
    var currentlyLoaded = Number(req.params.animalsLoaded);
    var animalCursor;

    if (typeRequested == "all") {
        animalCursor = animalDB.find({
            reported: {
                $gte: 0
            }
        }).sort({animalName:1});
    }else{
        animalCursor = animalDB.find({
            $and: [{
                    animalType: typeRequested
                },
              
                {
                    reported: {
                        $gte: 0
                    }
                }
            ]
        }).sort({animalName:1});
        
    }
    animalCursor.toArray(function (err, animalDocs) {
        var response = {
            ranOut:false
        };
        response.animalArray = new Array();
        console.log("Currently Loaded: ",currentlyLoaded);
        console.log("Requested: ",amountRequested);
        for(var i = currentlyLoaded; i < currentlyLoaded + amountRequested; i++){
            if(!(animalDocs[i])){
                response.ranOut = true;
                break;
            }
         
            var animalType = animalDocs[i].animalType;
            var animalAge;
            if(animalDocs[i].animalAge == 0){
                animalAge = "baby";
            }else{
                animalAge = "adult";
            }
            animalImage = fs.readFileSync(animalDocs[i].imageURL, {
                encoding: 'base64'
            });
            var animalName = animalDocs[i].animalName;

            response.animalArray.push({
                type:animalType,
                name:animalName,
                age:animalAge,
                image:animalImage
            })
        
        }
        response = JSON.stringify(response);

        res.status(200).send(response);
        res.end();

        
    })




});

//leaderboards
app.get("/updateLeaderboard/:animalType/:animalNumber/:animalsLoaded/:sortingBy",function(req,res){  //sends back an array of animal objects.
    var typeRequested = req.params.animalType;
    var amountRequested = Number(req.params.animalNumber);
    var currentlyLoaded = Number(req.params.animalsLoaded);
    var sortingBy = Number(req.params.sortingBy);
    var animalCursor;

    if (typeRequested == "all") {
        animalCursor = animalDB.find({
            reported: {
                $gte: 0
            }
        }).sort({score:sortingBy});
    }else{
        animalCursor = animalDB.find({
            $and: [{
                    animalType: typeRequested
                },
              
                {
                    reported: {
                        $gte: 0
                    }
                }
            ]
        }).sort({typescore:sortingBy});
        
    }
    animalCursor.toArray(function (err, animalDocs) {
        var response = {
            ranOut:false,
            totalAnimals:0
        };
        response.animalArray = new Array();
        console.log("Currently Loaded: ",currentlyLoaded);
        console.log("Requested: ",amountRequested);
        for(var i = currentlyLoaded; i < currentlyLoaded + amountRequested; i++){
            if(!(animalDocs[i])){
                response.ranOut = true;
                break;
            }
            
            var animalType = animalDocs[i].animalType;
            var animalAge;
            if(animalDocs[i].animalAge == 0){
                animalAge = "baby";
            }else{
                animalAge = "adult";
            }
            animalImage = fs.readFileSync(animalDocs[i].imageURL, {
                encoding: 'base64'
            });
            var animalName = animalDocs[i].animalName;
            var animalScore = animalDocs[i].score
            response.animalArray.push({
                type:animalType,
                name:animalName,
                age:animalAge,
                image:animalImage,
                score:animalScore
            })
            response.totalAnimals = animalDocs.length;
        }
        response = JSON.stringify(response);
        res.status(200).send(response);
        res.end();    
    })




});







app.get("*", function (req, res) {
    console.log("page attempted: ")
    console.log(req.url);
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
        addToDB(req.body.animalType, req.body.animalName, req.body.animalAge, imageURL, req.body.userIP);
        fs.writeFile(imageURL, buf, function () {
            res.status(200).send("Photo successfuly added!");
            res.end();
        });
    } else {
        res.status(400).send("Requests to this path must contain a JSON body with all the required fields");
        res.end();
    }


});


function addToDB(type, name, age, url, userIP) {
    const initialScore = 800;
    const initialTypeScore = 800;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    animalDB.insertOne({
        animalType: type,
        animalName: name,
        animalAge: age,
        imageURL: url,
        score: initialScore,
        typeScore: initialTypeScore,
        reported: 0,//safe is 0 if unknown, 1 if known, and negative if it's been reported.
        IP: userIP, 
        dateAdded: date

    })
}



function createDevs(){
    devDB.insertOne({
        name:'jacob',
        reports:0
    })
    devDB.insertOne({
        name:'malini',
        reports:0
    })
    devDB.insertOne({
        name:'jessica',
        reports:0
    })
}

const validUserIDs = ["jacob","malini","jessica"]

app.post('/report/:userID',
    function (req, res) { //WHY ISNT THIS WORKING.
        var person = req.params.userID;
            
        if(validUserIDs.includes(person)){
            devDB.updateOne(
                {name:person},{$inc: {reports:1}}
            );
        }else{
            console.log("Invalid person reported: " +person)
        }
    });





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


app.post('/reportAnimal', function (req, res) {
    console.log("reporting animal");
    var animalURL = req.body.reportURL;
    console.log(animalURL);
    animalDB.updateOne({
        imageURL: animalURL,
        reported: {
            $lte: 0
        }
    }, {
        $set: {
            reported: -1
        }
    })
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
        animalDB.updateOne({
            imageURL: animal1ID
        }, {
            $set: {
                score: Number(animal1Score)
            }
        })
        animalDB.updateOne({
            imageURL: animal2ID
        }, {
            $set: {
                score: Number(animal2Score)
            }
        })
    } else { //update all type scores.
        animalDB.updateOne({
            imageURL: animal1ID
        }, {
            $set: {
                typeScore: Number(animal1Score)
            }
        })
        animalDB.updateOne({
            imageURL: animal2ID
        }, {
            $set: {
                typeScore: Number(animal2Score)
            }
        })
    }
}




function cleanDatabase(){       //cleans animal database and flags all animals that don't have images. Sets their flag to -10
    const missingImageTag = -10
    var animalCursor = animalDB.find({reported:{$not: {$lte:missingImageTag}}});
    animalCursor.toArray(function (err, animalDocs) {
       
        for(var i = 0; i < animalDocs.length; i++){
            var currentAnimal = animalDocs[i];
            
            if(!(fs.existsSync(currentAnimal.imageURL))){
                animalDB.updateOne(
                    {imageURL:currentAnimal.imageURL},
                    {$set:{reported:-10}}
                )
            }
        }
    })
}