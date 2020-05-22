var rateButton = document.getElementById("rate-button");

window.addEventListener("load",function(){                      //this is for the dropdown.
    let all = document.getElementById("all");
    all.classList.toggle('active');
    all.classList.toggle('inactive');
})

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
    },500);
}

function addRateBox(){
    let rateContainer = document.createElement("div");
    let navbar = document.getElementById("topbar")
    let navbarHeight = navbar.offsetHeight;
    rateContainer.id = "rate-container";
    rateContainer.style.width = "auto";
    rateContainer.style.textAlign = "center";
    rateContainer.style.display = "relative";
    
    rateContainer.style.height = window.innerHeight-navbarHeight-2+"px"; //this fills up the whole window except the navbar.
    let boxHeight = (window.innerHeight-navbarHeight)/1.25; //box height will be half of available page.


    let rateBox = document.createElement("div");
    rateBox.id = "rate-box";
    rateContainer.appendChild(rateBox);
    rateBox.style.backgroundColor = "white";
    rateBox.style.width = (boxHeight*1.5) + "px"
    rateBox.style.height = boxHeight+"px";
    rateBox.style.borderRadius = "15px";
    let topMargin = ((window.innerHeight-navbarHeight)-boxHeight)/2;
    rateBox.style.display = "inline-block";
    rateBox.style.boxShadow = "10px 10px 10px #0000004d"
    rateBox.style.opacity = "0";
    rateBox.style.transition = "margin 2s, opacity 2s, display 2s";

    rateBox.style.marginTop= topMargin*1.9 + "px"; //add stuff within this rate box to add animal pictures and such. make it all relative to box height so it scales with the box.
    document.body.appendChild(rateContainer);
    styleBox();
    setTimeout(function(){ //to make box slide up.
        rateBox.style.marginTop = topMargin+"px" 
        rateBox.style.opacity = "1";
    },200);

}


window.onresize = resizeRateBox;

function resizeRateBox(){
    if(document.getElementById("rate-container")){ //only do this stuff if the rate container even exists.
        let navbar = document.getElementById("topbar");
        let navbarHeight = navbar.offsetHeight;
        let rateContainer = document.getElementById("rate-container");
        rateContainer.style.height = window.innerHeight-navbarHeight-2+"px";
        let boxHeight = (window.innerHeight-navbarHeight)/1.25; //box height will be half of available page
        let rateBox = document.getElementById("rate-box");
        rateBox.style.transition = "margin .1s, opacity 2s, display 2s, width 1s, height 1s";
        rateBox.style.width = (boxHeight*1.5) + "px"
        rateBox.style.height = boxHeight+"px";
        let topMargin = ((window.innerHeight-navbarHeight)-boxHeight)/2;
        rateBox.style.marginTop = topMargin+"px";
    }
    //maybe add a different resizer for the main button that you press to actually start the rating.
}