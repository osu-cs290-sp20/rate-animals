


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
    let button = document.getElementById("submitButton");
    if(goodToSubmit){
        button.style.backgroundColor = "#69bf84"
    }else{
        button.style.backgroundColor = "#c72e3b";
    }
}



function highlightName(){

}
function highlightAnimalSelector(){

}

function highlightAgeSelector(){

}
function highlightOtherInput(){

}