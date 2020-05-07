var rateButton = document.getElementById("rate-button");

rateButton.addEventListener("mouseenter",fillUpButton);
rateButton.addEventListener("mouseleave",stopFillingButton);

rateButton.addEventListener("click",buttonClicked)

var cancelled = false;
function fillUpButton(){
    cancelled = false;
    

    if(cancelled){
        return;
    }

}

function stopFillingButton(){
    cancelled = true;

}

function buttonClicked(){ //might want to change this dissapearing thing.
    fadeAllAnimals(); //called from RandomAnimals.js
    console.log("button clicked");
    rateButton.style.opacity = "0";
    setTimeout(() => {
       //pull up the rating animals page here. 
    }, 1000);
    
    
}