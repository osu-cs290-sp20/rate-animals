
var animalsLoaded = 0; //We will send this number and request items from the sorted array of animals beginning at this index.
var numberPerLoad = 15; //how many animals load whenever we load more.
var animalType = "all" //dog cat 
let animals = [];
var nameSearch = Handlebars.templates.nameSearch();

window.addEventListener("load",loadNewAnimals);

document.getElementById("loadMore").addEventListener("click",loadNewAnimals);


function loadNewAnimals(){
    var request = new XMLHttpRequest();
    var requestURL =  "/loadNewAnimals/"+animalType+"/"+numberPerLoad+"/"+animalsLoaded; 
    console.log(requestURL);                                   //make this better later
    request.open('GET',requestURL);
    request.send();
    request.addEventListener('load',function(event){
       
        var results = JSON.parse(request.response);
        
        var animalArray = results.animalArray;
        var ranOut = results.ranOut;
        if(ranOut){
            var button = document.getElementById("loadMore");
            button.textContent = "No more animals to load!"
            button.style.cursor = "default";
        }
        for(var i = 0; i < animalArray.length;i++){
            animalsLoaded+=1;
            animals.push(animalArray[i]);
            var description = createDescription(animalArray[i].type,animalArray[i].name,animalArray[i].age);
            addNewAnimal(animalArray[i].name,animalArray[i].image,description);
            
        }
        sortFunction();



    });
}


function createDescription(type,name,age){
    var description;
    var selector
    if(age == "baby"){
        selector = "a"
    }else{
        selector = "an";
    }
    description = name + " is "+selector+" "+age+" "+type+"!";
    return description;
}    





function addNewAnimal(name,image,description){
    var newImage = 'data:image/png;base64, ' + image;
    
    var animalContext = {
        animalName:name,
        animalImage: newImage,
        description:description
    }
   
    var animalHTML = Handlebars.templates.galleryAnimal(animalContext);
    
    var container = document.querySelector(".gallery-container");
    container.insertAdjacentHTML("beforeend",animalHTML);


}


function removeAnimals(){

    var box = document.querySelector(".gallery-container");
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    
}


window.addEventListener('keypress', function (e) {
    if(e.keyCode === 13){
        showSearch();
    }
}, false);


function showSearch(){
    var searchInput = document.getElementById("navbar-search-input").value.toLowerCase();
    removeAnimals();
    for(var i=0; i < animals.length; i++){
        var animalTitle = animals[i].name.toLowerCase();
        
        if (animalTitle.indexOf(searchInput) !== -1){
            var description = createDescription(animals[i].type,animals[i].name,animals[i].age);
            addNewAnimal(animals[i].name,animals[i].image,description);
        }
      }
}


var choiceDropdown = document.getElementById("choice");
var choice = "alpha";


choiceDropdown.addEventListener('change',  sortFunction)

function sortFunction(){
    console.log(animals);
    choice = choiceDropdown.value;

    removeName();
    switch (choice){
        case "alpha": 
            removeAnimals();
            for(var i=0; i < animals.length; i++){
                var description = createDescription(animals[i].type,animals[i].name,animals[i].age);
                addNewAnimal(animals[i].name,animals[i].image,description);
                
            }
            break;
        case "reverse":
            removeAnimals();
            for(var i= animals.length -1; i >= 0; i--){
            
                var description = createDescription(animals[i].type,animals[i].name,animals[i].age);
                addNewAnimal(animals[i].name,animals[i].image,description);
                
            }
            break;
        case "name":
            addName();
            break;
            
        default:
            removeAnimals();
            for(var i=0; i < animals.length; i++){
                if (animals[i].age === choice){
                    var description = createDescription(animals[i].type,animals[i].name,animals[i].age);
                    addNewAnimal(animals[i].name,animals[i].image,description);
                }
                
            }

    }
}



function addName(){
    var options = document.getElementById("options");
    var searchBar = document.querySelector(".listOption-navbar-search");
    console.log(options);
    options.insertAdjacentHTML("beforeend",nameSearch);
    document.getElementById("navbar-search-button").addEventListener("click",showSearch);
   
};
function removeName(){
    var options = document.getElementById("options");
    var searchBar = document.querySelector(".listOption-navbar-search");
    if(searchBar){
        options.removeChild(searchBar);
    }
}

