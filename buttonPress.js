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
    rateButton.style.transition ="box-shadow 1s, opacity 2s";
    rateButton.style.opacity = "0";
    rateButton.style.boxShadow="50px 50px 10px #0000004d"
    setTimeout(() => {
       //pull up the rating animals page here. 
    }, 1000);
    
    
}