var animalsLoaded = 0;
var numberPerLoad = 10;
var animalType = "all"; //this should be things like "dog" "cat" "monkey" etc...
var sortingBy = "-1"                 //1 low to high, -1 if high to low.
var rank = 0;

let animals = [];


var loadMoreButton = document.getElementById("loadMore")

window.addEventListener("load",loadNewAnimals);

document.getElementById("loadMore").addEventListener("click",loadNewAnimals);
function loadNewAnimals(){
    var container = document.querySelector("#createBox");
    container.removeChild(loadMoreButton);
    var request = new XMLHttpRequest();
    var requestURL =  "/updateLeaderboard/"+animalType+"/"+numberPerLoad+"/"+animalsLoaded + "/" + sortingBy; 
    console.log(requestURL);                                   //make this better later
    request.open('GET',requestURL);
    request.send();
    request.addEventListener('load',function(event){
        console.log("got response");
        var results = JSON.parse(request.response);
        
        var animalArray = results.animalArray;
        var ranOut = results.ranOut;
        
        for(var i = 0; i < animalArray.length;i++){
            animalsLoaded+=1;
            animals.push({animal:animalArray[i],
                numberRank:animalsLoaded});
            addNewAnimal(animalArray[i].type,animalArray[i].image,animalArray[i].name,animalArray[i].age);  
        }
        if(!ranOut){
            container.appendChild(loadMoreButton);
        }
    });
}
function addNewAnimal(type,image,name,age){
    var newImage = 'data:image/png;base64, ' + image;
    type = type[0].toUpperCase() + type.slice(1);
    age = age[0].toUpperCase() + age.slice(1);

    rank++;

    var animalContext = {
        animalImage:newImage,
        animalName:name,
        animalType: type,
        animalAge:age,
        animalRank:rank
    }
    
    var animalHTML = Handlebars.templates.leaderboardAnimal(animalContext);
    
    var container = document.querySelector("#createBox");
    container.insertAdjacentHTML("beforeend",animalHTML);
}

function demo(){
    
    if(sortingBy === "-1"){
        sortingBy = "1";
    }else{
        sortingBy = "-1";
    }
    animalsLoaded = 0;
    animals = [];
    var box = document.querySelector("#createBox");
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    loadNewAnimals();

}

/* Leaderboards sorting button */
var sortButton = document.getElementById("sort-by-button");
var byHighest = document.getElementById("topFirst");
var byLowest = document.getElementById("lastFirst");
var menu = document.getElementById("sort-dropdown");

function displaySortOptions(){
    byHighest.style.visibility = "visible";
    byLowest.style.visibility = "visible";
}

function outsideClick(e){
    if(e.target != menu ){
        byHighest.style.visibility = "hidden";
        byLowest.style.visibility = "hidden";      
    }
}

sortButton.addEventListener('click', displaySortOptions);
window.addEventListener('click', outsideClick);
