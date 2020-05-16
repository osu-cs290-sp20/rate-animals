


window.onload= setup();

window.addEventListener("resize",fixSizes);

function fixSizes(){
    let submitHolder = document.getElementById("submitAnimalHolder");
    let navbar = document.getElementById("topbar");
    let navbarHeight = navbar.offsetHeight;
    let availableSpace = window.innerHeight - navbarHeight;
    let boxHeight = .80 * availableSpace;

    submitHolder.style.height = boxHeight + "px";
    submitHolder.style.width = boxHeight * 1.5 + "px";

    let topMargin = (availableSpace - boxHeight) /2;
    submitHolder.style.marginTop = topMargin + "px";

}



function setup(){

    fixSizes();
    
    Dropzone.options.animalDropzone = {
        acceptedFiles: ".png, .jpg, .jpeg",
        maxFiles:1,
        createImageThumbnails: true,
        resizeWidth:500,
        resizeHeight:500,
        autoProcessQueue: false // myDropzone.processQueue() to call once the user has entered all the data.
    };
}

let animalSelector = document.getElementById("animalChoice");
animalSelector.addEventListener("change",checkAnimalType);

function checkAnimalType(){
    let otherType = document.getElementById("otherInputHolder");
    if(animalSelector.value === "other"){
        otherInputHolder.style.display = "block";
    }else{
        otherInputHolder.style.display = "none";
    }
    setButtonColor();
}



let nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input",checkCharactersRemaining);
let maxChars = 20;

function checkCharactersRemaining(){
    let numberCharsLeft = document.getElementById("characterCount");
    let characters = nameInput.value.length;
    numberCharsLeft.textContent = maxChars-characters;
    if(maxChars-characters<0){
        numberCharsLeft.style.color = "#ed2132";
        numberCharsLeft.textContent = numberCharsLeft.textContent + ": Too Many Characters!"; 
    }else{
        numberCharsLeft.style.color = "#3bc456";
    }
    setButtonColor();
}

let animalAge = document.getElementById("animalAge");
animalAge.addEventListener("change",setButtonColor);

let otherCount = document.getElementById("otherInput");
otherCount.addEventListener("input",checkOtherCount);
let maxTypeChars = 20;

function checkOtherCount(){
    let numberCharsLeft = document.getElementById("otherCount");
    let characters = otherCount.value.length;
    numberCharsLeft.textContent = maxTypeChars-characters;
    if(maxTypeChars-characters<0){
        numberCharsLeft.style.color = "#ed2132";
        numberCharsLeft.textContent = numberCharsLeft.textContent + ": Too Many Characters!"; 
    }else{
        numberCharsLeft.style.color = "#3bc456";
    }
    setButtonColor();
}



let submitButton =document.getElementById("submitButton");

submitButton.addEventListener("click",attemptSubmit);

function attemptSubmit(){
    let nameInput = document.getElementById("nameInput");
    let animalSelector = document.getElementById("animalChoice");
    let ageSelector = document.getElementById("animalAge");
    let otherInput = document.getElementById("otherInput")
                                                                                                        //need to add testing for picture uploading as well.
    let goodToSubmit = true;

    if(nameInput.value === "" || nameInput.value.length >maxChars){
        goodToSubmit = false;
        highlightName();
    }
    if(animalSelector.value === "select"){
        goodToSubmit = false;
        highlightAnimalSelector();
    }
    if(ageSelector.value === "select"){
        goodToSubmit = false;
        highlightAgeSelector();
    }
    if(animalSelector.value === "other"){
        if(otherInput.value === "" || otherInput.value > maxTypeChars){
            goodToSubmit = false;
            highlightOtherInput();
        }
    }
    if(goodToSubmit){
        alert("Good to submit");
    }
}

function setButtonColor(){
    let nameInput = document.getElementById("nameInput");
    let animalSelector = document.getElementById("animalChoice");
    let ageSelector = document.getElementById("animalAge");
    let otherInput = document.getElementById("otherInput")
                                                                                                        //need to add testing for picture uploading as well.
    let goodToSubmit = true;

    if(nameInput.value === "" || nameInput.value.length >maxChars){
        goodToSubmit = false;
        
    }
    if(animalSelector.value === "select"){
        goodToSubmit = false;
     
    }
    if(ageSelector.value === "select"){
        goodToSubmit = false;
      
    }
    if(animalSelector.value === "other"){
        if(otherInput.value === "" || otherInput.value > maxTypeChars){
            goodToSubmit = false;
         
        }
    }
    let button = document.getElementById("submitButton");
    if(goodToSubmit){
        button.style.backgroundColor = "#69bf84"
        button.style.color = "white";
    }else{
        button.style.backgroundColor = "#828282";
        button.style.color = "black";
    }
}


let button = document.getElementById("submitButton");
button.addEventListener("mouseenter",highlightButton);

function highlightButton(){
    if(button.style.color === "black" || button.style.color == ""){
        button.style.cursor = "default";
        button.style.boxShadow = "5px 5px 10px #00000086";
    }else{
        button.style.cursor="pointer";
        button.style.boxShadow = "10px 10px 10px #00000086";
    }
}
button.addEventListener("mouseleave",unhighlightButton);

function unhighlightButton(){
    button.style.boxShadow = "5px 5px 10px #00000086";
}

function highlightName(){
    let nameHolder = document.getElementById("nameInputHolder");
    nameHolder.style.transition = "background-color .5s";
    nameHolder.style.backgroundColor = "#d95757";
    setTimeout(function(){
        nameHolder.style.backgroundColor = "white";
    },500);

}
function highlightAnimalSelector(){
    let animalSelector = document.getElementById("animalSelectorHolder");
    animalSelector.style.transition = "background-color .5s";
    animalSelector.style.backgroundColor = "#d95757";
    setTimeout(function(){
        animalSelector.style.backgroundColor = "white";
    },500);

}

function highlightAgeSelector(){
    let ageHolder = document.getElementById("ageHolder");
    ageHolder.style.transition = "background-color .5s";
    ageHolder.style.backgroundColor = "#d95757";
    setTimeout(function(){
        ageHolder.style.backgroundColor = "white";
    },500);

}
function highlightOtherInput(){
    let otherHolder = document.getElementById("otherInputHolder");
    otherHolder.style.transition = "background-color .5s";
    otherHolder.style.backgroundColor = "#d95757";
    setTimeout(function(){
        otherHolder.style.backgroundColor = "white";
    },500);

}