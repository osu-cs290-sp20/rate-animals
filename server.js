var express = require('express');
var fs = require('fs');
var app = express();
var exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;

const validSubDirectories = ['rate', '404', 'gallery', 'guess', 'icons', 'leaderboards', 'upload'];



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





app.get("/", function (req, res) {
    res.render('rate');
    res.status(200);
})
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




app.post('/report/:userID'),
    function (req, res) { //WHY ISNT THIS WORKING.
        var person = req.params.userID;
        console.log("Person reported: ", person);
    }

app.post('*', function (req, res) {
    console.log("got one");
    if (req.url == "/report/jacob") {
        reportJacob();
    } else if (req.url == "/report/malini") {
        reportMalini();
    } else if (req.url == "/report/jessica") {
        reportJessica();
    }
    console.log(req.url);
})

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