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
    setTimeout(ratingScreen, 1000);
}

function ratingScreen(){
    buttonHolder.removeChild(rateButton);
    setTimeout(function(){
        document.body.removeChild(buttonHolder)
        addRateBox();
    },100);
}

function addRateBox(){
    let rateContainer = document.createElement("div");
    let navbar = document.getElementById("topbar")
    let navbarHeight = navbar.offsetHeight;
    rateContainer.id = "rate-container";
    rateContainer.style.width = "auto";
    rateContainer.style.textAlign = "center";
    rateContainer.style.display = "relative";
    console.log("Navbar Height:" + navbarHeight);
    rateContainer.style.height = window.innerHeight-navbarHeight+"px"; //this fills up the whole window except the navbar.

    let rateBox = document.createElement("div");
    rateContainer.appendChild(rateBox);
    rateBox.style.backgroundColor = "white";
    rateBox.style.width = "750px";
    rateBox.style.height = "500px";
    rateBox.style.borderRadius = "15px";
    rateBox.style.display = "inline-block";
    rateBox.style.boxShadow = "10px 10px 10px #0000004d"
    rateBox.style.opacity = "0";
    rateBox.style.transition = "margin 2s, opacity 2s, display 2s";
    rateBox.style.margin = "300px"; //add stuff within this rate box to add animal pictures and such.
    document.body.appendChild(rateContainer);
    setTimeout(function(){
        rateBox.style.margin = "100px"
        rateBox.style.opacity = "1";
    },200);

}