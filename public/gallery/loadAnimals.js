
var animalsLoaded = 0; //We will send this number and request items from the sorted array of animals beginning at this index.
var numberPerLoad = 15; //how many animals load whenever we load more.
var animalType = "all" //dog cat 
let animals = [];


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
        showSearch()



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


var searchButton = document.getElementById("navbar-search-button");

searchButton.addEventListener('click',  showSearch)


window.addEventListener('keypress', function (e) {
    if(e.keyCode === 13){
        showSearch();
    }
}, false);



function showSearch(){
    console.log("the search button was clicked");
    var searchInput = document.getElementById("navbar-search-input").value.toLowerCase();
    console.log(searchInput);

    removeAnimals();

    for(var i=0; i < animals.length; i++){
        var animalTitle = animals[i].name.toLowerCase();
        
        if (animalTitle.indexOf(searchInput) !== -1){
            var description = createDescription(animals[i].type,animals[i].name,animals[i].age);
            addNewAnimal(animals[i].name,animals[i].image,description);
        }
      }
}


