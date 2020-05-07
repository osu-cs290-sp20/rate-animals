


//To change how oftten animals appear, just change the number in the sentInterval. It represents milliseconds.
var intervalBetweenAnimals = window.setInterval(generateAnimal,1000);

let buttonHolder = document.getElementById("button-holder");

let images=buttonHolder.getElementsByClassName("animal-image");;
let button = document.getElementById("rate-button")

document.body.onload = fixBoxSize;

function fixBoxSize(){
    let navbar = document.getElementById("topbar");
    let navbarHeight = navbar.offsetHeight;
    let margins = (window.innerHeight-navbarHeight-button.offsetHeight)/2; //size leftover on page /2
    button.style.marginTop = margins-2 + "px";
    button.style.marginBottom = margins-2 + "px"; //minus 2 cuz it's kinda weird and adds a bar if it's exact
}

var placing_animals = true;
//Note that this function works assuming that the images are stored as squares.
function generateAnimal(){
    if(!placing_animals){
        return;
    }
    
    let newImage = document.createElement("img");
    
    newImage.classList.add("animal-image")
    let randomHeight = (100 +(Math.random() * 200))
    newImage.style.height=randomHeight+"px";
    newImage.src="http://placekitten.com/"+Math.floor(randomHeight)+"/"+Math.floor(randomHeight); //this will be what we change.
    newImage.style.width="auto";
    newImage.style.boxShadow="10px 10px 10px #0000004d";
    newImage.style.position = "absolute";
    newImage.style.transition = "opacity 1s, top 1s"
    newImage.style.opacity = "0";
    newImage.style.zIndex = "-1";
    let objectHeight;
    let objectWidth;
    do{
        console.log("attempting place");
        objectHeight = Math.random() * (buttonHolder.clientHeight-randomHeight); //eventually we can change the size and change the height.
        objectWidth = Math.random() * (buttonHolder.clientWidth-randomHeight);
        //minus 300 because we need to make sure it's in the box not at the edges.
        newImage.style.left = objectWidth+"px";
        newImage.style.top = objectHeight+"px";
    }while(!collideWithButton(newImage));
    appearImage(objectHeight,newImage);

    images = buttonHolder.getElementsByClassName("animal-image");
    if(buttonHolder.childElementCount >= 15){
     
        dissapearImage();
    }
    
}


//Note that this function works by magic and I programmed it entirely without googling anything, which albeit was very dumb.
function collideWithButton(newImage){ //DONT TOUCH - Jacob
    let buttonHeight = button.clientHeight;
    let buttonWidth = button.clientWidth;
    let screenWidth = buttonHolder.clientWidth;
    let screenHeight = buttonHolder.clientHeight;
    let imageTop = newImage.style.top;
    let imageLeft = newImage.style.left;
    let imageHeight = newImage.style.height;
    let imageWidth = imageHeight;
    imageTop = Number(imageTop.substring(0,imageTop.length-2));
    imageLeft = Number(imageLeft.substring(0,imageLeft.length-2));
    imageWidth = Number(imageWidth.substring(0,imageWidth.length-2));
    imageHeight = Number(imageHeight.substring(0,imageHeight.length-2));

    

    let imageBottom = imageTop + imageHeight;
    let imageRight = imageLeft + imageWidth;
    let midWidth = imageLeft + imageWidth/2;
    let midHeight = imageTop + imageHeight/2;
   
        //if this happens we know that it's in the right y position
    if(screenHeight/2 -buttonHeight/2 <= imageTop && screenHeight/2 +buttonHeight/2 >=imageTop){ //checking top left corner of image
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= imageLeft && screenWidth/2 +buttonWidth/2 >=imageLeft){
            return false;
        }
    }
    if(screenHeight/2 -buttonHeight/2 <= imageBottom && screenHeight/2 +buttonHeight/2 >=imageBottom){ //bottom left
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= imageLeft && screenWidth/2 +buttonWidth/2 >=imageLeft){
            return false;
        }
    }
    if(screenHeight/2 -buttonHeight/2 <= imageBottom && screenHeight/2 + buttonHeight/2 >=imageBottom){ //bottom right
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= imageRight && screenWidth/2 + buttonWidth/2 >=imageRight){
            return false;
        }
    }
    if(screenHeight/2 -buttonHeight/2 <= imageTop && screenHeight/2 +buttonHeight/2 >=imageTop){ //top right
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= imageRight && screenWidth/2 +buttonWidth/2 >=imageRight){
            return false;
        }
    }

    //Checking midpoints of edges
    if(screenHeight/2 -buttonHeight/2 <= midHeight && screenHeight/2 +buttonHeight/2 >=midHeight){  //leftMid
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= imageLeft && screenWidth/2 +buttonWidth/2 >=imageLeft){
            return false;
        }
    }
    if(screenHeight/2 -buttonHeight/2 <= midHeight && screenHeight/2 +buttonHeight/2 >=midHeight){ //rightMid
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= imageRight && screenWidth/2 +buttonWidth/2 >=imageRight){
            return false;
        }
    }
    if(screenHeight/2 -buttonHeight/2 <= imageBottom && screenHeight/2 + buttonHeight/2 >=imageBottom){ //bottomMid
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= midWidth && screenWidth/2 + buttonWidth/2 >=midWidth){
            return false;
        }
    }
    if(screenHeight/2 -buttonHeight/2 <= imageTop && screenHeight/2 +buttonHeight/2 >=imageTop){ //topMid
        //testing if it's inside the button.
        if(screenWidth/2 - buttonWidth/2 <= midWidth && screenWidth/2 +buttonWidth/2 >=midWidth){
            return false;
        }
    }
    return true;


}


function appearImage(initialY,newImage){
    var initialOffset = 40;
    buttonHolder.appendChild(newImage);
    newImage.style.top = initialY+initialOffset+"px";
    if(images.length >1){
        if(images[images.length-2].style.opacity ==="0"){
            images[images.length-2].style.opacity = "1";
            let temptop = images[images.length-2].style.top;
            temptop = temptop.substring(0,temptop.length-2);
            temptop = Number(temptop);
            temptop -=initialOffset;
            images[images.length-2].style.top = temptop+"px";
            
        
        }
    }

}


function dissapearImage(){
    if(images[0].style.opacity==="1"){
        images[0].style.opacity = "0";
    }else{
        buttonHolder.removeChild(images[0]);
        images[0].style.opacity="0";
    }
    
}

function fadeAllAnimals(){
    placing_animals = false;
    images = buttonHolder.getElementsByClassName("animal-image");
    for(var i = images.length-1; i >=0;i--){
        images[i].style.opacity = "0";
    }
    setTimeout(function(){
        for(var i = images.length-1; i >=0;i--){
            buttonHolder.removeChild(images[i]);
        }  
    }, 1000);
}