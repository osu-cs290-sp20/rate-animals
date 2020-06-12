var animalsLoaded = 0;
var numberPerLoad = 10;
var animalType = "all"; //this should be things like "dog" "cat" "monkey" etc...
var sortingBy = "-1"                 //1 low to high, -1 if high to low (default is high to low)
var totalAnimals = 0;
var rank = 0;

let animals = [];


var loadMoreButton = document.getElementById("loadMore");



/***************************************************************/


/* Leaderboards sorting button */
var sortButton = document.getElementById("sort-by-button");
var byHighest = document.getElementById("topFirst");
var byLowest = document.getElementById("lastFirst");
var menu = document.getElementById("sort-dropdown");

var specifiedElement = sortButton;



function fixColors(){
    var animalRanks = document.getElementsByClassName("animal-rank");
    console.log(animalRanks);
    for(var i = 0; i < animalRanks.length; i++){
        if(animalRanks[i].textContent === "1"){
            setColor(animalRanks[i],'#Daa520')
            
        }else if(animalRanks[i].textContent === "2"){
            setColor(animalRanks[i],'#C0C0C0')
        }else if(animalRanks[i].textContent === "3"){
            setColor(animalRanks[i],'#B87333')

        }
    }

}
function setColor(node,color){
    node.style.color = color;
    var parent = node.parentNode;
    console.log(parent.children);
    var trophy = parent.children[0].children[0];
    trophy.style.color = color;

}



function displaySortOptions(){
    byHighest.style.visibility = "visible";
    byLowest.style.visibility = "visible";
}

function hideSortOptions(){
    byHighest.style.visibility = "hidden";
    byLowest.style.visibility = "hidden";
}

function displayHighestFirst() {
    hideSortOptions();
    rank = 0;
    sortingBy = "-1";
    removeAnimals();
    loadNewAnimals();
}

function displayLowestFirst() {
    hideSortOptions();
    sortingBy = "1";
    rank = totalAnimals + 1;
    console.log(totalAnimals);
    removeAnimals();
    loadNewAnimals();
}

/***************************************************************/

byLowest.addEventListener("click",displayLowestFirst);
byHighest.addEventListener("click",displayHighestFirst);



//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
    //the click was outside the specifiedElement, do something
    hideSortOptions();

  }
});







window.addEventListener("load",loadNewAnimals);

document.getElementById("loadMore").addEventListener("click",loadNewAnimals);
function loadNewAnimals(){
    var container = document.querySelector("#createBox");
    if(container.contains(loadMoreButton)){
        container.removeChild(loadMoreButton);
    }
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
        totalAnimals = results.totalAnimals;
        
         for(var i = 0; i < animalArray.length;i++){
             animalsLoaded+=1;
             animals.push({animal:animalArray[i],
                 numberRank:animalsLoaded});
             addNewAnimal(animalArray[i].type,animalArray[i].image,animalArray[i].name,animalArray[i].age,animalArray[i].score);  
         }
         if(!ranOut){
             container.appendChild(loadMoreButton);
         }
         fixColors()
    });
   
}

function addNewAnimal(type,image,name,age,score){
    var newImage = 'data:image/png;base64, ' + image;
    type = type[0].toUpperCase() + type.slice(1);
    age = age[0].toUpperCase() + age.slice(1);

    if(sortingBy === "-1"){
        rank++; 
        console.log(totalAnimals);

     }
   else if(sortingBy === "1"){
       rank--;
       console.log(totalAnimals);
    }

    var animalContext = {
        animalImage:newImage,
        animalName:name,
        animalType: type,
        animalAge:age,
        animalRank:rank,
        animalScore:score
    }


    
    var animalHTML = Handlebars.templates.leaderboardAnimal(animalContext);
    
    var container = document.querySelector("#createBox");
    container.insertAdjacentHTML("beforeend",animalHTML);
}

function removeAnimals(){
    
    animalsLoaded = 0;
    animals = [];
    var box = document.querySelector("#createBox");
    while (box.firstChild) {
        if(box.firstChild.id == "loadMore"){
            break;
        }
        box.removeChild(box.firstChild);
    }
    loadNewAnimals();

}

sortButton.addEventListener('click', displaySortOptions);
//window.addEventListener('click', outsideClick);
//byLowest.addEventListener('click', sortbyLowest);