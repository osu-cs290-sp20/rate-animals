const MAXANIMALS = 20; //how many animals can be on the screen at a time.
const AMOUNTOFTIMEBETWEENANIMALS = 750; //amount of time between animals showing up in milliseconds
const INITIALOFFSET = 40; //how far down the animals fade in from.  
//To change how oftten animals appear, just change the number in the sentInterval. It represents milliseconds.
var intervalBetweenAnimals = window.setInterval(generateAnimal, AMOUNTOFTIMEBETWEENANIMALS);

let buttonHolder = document.getElementById("button-holder");

let images = buttonHolder.getElementsByClassName("animal-image");;
let button = document.getElementById("rate-button")

document.body.onload = fixBoxSize;

window.addEventListener("resize", fixBoxSize);

function fixBoxSize() {
    let navbar = document.getElementById("topbar");
    let navbarHeight = navbar.offsetHeight;
    let margins = (window.innerHeight - navbarHeight - button.offsetHeight) / 2; //size leftover on page /2
    button.style.marginTop = margins + "px";
    button.style.marginBottom = margins + "px"; //minus 2 cuz it's kinda weird and adds a bar if it's exact
}

var placing_animals = true;
//Note that this function works assuming that the images are stored as squares.
function generateAnimal() {
    if (!placing_animals) {
        return;
    }

    let newImage = document.createElement("img");

    newImage.classList.add("animal-image")
    let randomHeight = (100 + (Math.random() * 200))
    newImage.style.height = randomHeight + "px";
    var lastPart = window.location.href.split("/").pop();
    var animalType;
    switch (lastPart) {
        case "all":
            animalType = "all";
            break;
        case "cats":
            animalType = "cat";
            break;
        case "dogs":
            animalType = "dog";
            break;
        case "other":
            animalType = "other";
            break;
        default:
            animalType = "all";
            break;
    }

    var request = new XMLHttpRequest();
    var requestURL = '/randomAnimal' + '/' + animalType;
    request.open('GET', requestURL);
    request.onload = function () {
        results = JSON.parse(request.response);
        newImage.src = 'data:image/png;base64, ' + results.image;

    }
    request.send();
    newImage.style.width = "auto";
    newImage.style.boxShadow = "10px 10px 10px #0000004d";
    newImage.style.position = "absolute";
    newImage.style.transition = "opacity 1s, top 1s"
    newImage.style.opacity = "0";
    newImage.style.zIndex = "-1";
    let objectHeight;
    let objectWidth;
    let number_of_collides = 0;
    do {
        if (number_of_collides >= 20) { //in case the window is too small.
            break;
        }
        objectHeight = Math.random() * (buttonHolder.clientHeight - randomHeight); //eventually we can change the size and change the height.
        objectWidth = Math.random() * (buttonHolder.clientWidth - randomHeight);
        //minus 300 because we need to make sure it's in the box not at the edges.
        newImage.style.left = objectWidth + "px";

        newImage.style.top = objectHeight + "px";
        number_of_collides++;
    } while (!collideWithButton(newImage));
    appearImage(objectHeight, newImage);

    images = buttonHolder.getElementsByClassName("animal-image");
    if (buttonHolder.childElementCount >= MAXANIMALS) {

        dissapearImage();
    }

}


//Note that this function works by magic and I programmed it entirely without googling anything, which albeit was very dumb.
function collideWithButton(newImage) { //DONT TOUCH - Jacob
    let buttonHeight = button.clientHeight;
    let buttonWidth = button.clientWidth;
    let screenWidth = buttonHolder.clientWidth;
    let screenHeight = buttonHolder.clientHeight;
    let imageTop = newImage.style.top;
    let imageLeft = newImage.style.left;
    let imageHeight = newImage.style.height;
    let imageWidth = imageHeight;
    imageTop = Number(imageTop.substring(0, imageTop.length - 2));
    imageLeft = Number(imageLeft.substring(0, imageLeft.length - 2));
    imageWidth = Number(imageWidth.substring(0, imageWidth.length - 2));
    imageHeight = Number(imageHeight.substring(0, imageHeight.length - 2));



    let imageBottom = imageTop + imageHeight;
    let imageRight = imageLeft + imageWidth;
    let midWidth = imageLeft + imageWidth / 2;
    let midHeight = imageTop + imageHeight / 2;

    //if this happens we know that it's in the right y position
    if (screenHeight / 2 - buttonHeight / 2 <= imageTop && screenHeight / 2 + buttonHeight / 2 >= imageTop) { //checking top left corner of image
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= imageLeft && screenWidth / 2 + buttonWidth / 2 >= imageLeft) {
            return false;
        }
    }
    if (screenHeight / 2 - buttonHeight / 2 <= imageBottom && screenHeight / 2 + buttonHeight / 2 >= imageBottom) { //bottom left
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= imageLeft && screenWidth / 2 + buttonWidth / 2 >= imageLeft) {
            return false;
        }
    }
    if (screenHeight / 2 - buttonHeight / 2 <= imageBottom && screenHeight / 2 + buttonHeight / 2 >= imageBottom) { //bottom right
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= imageRight && screenWidth / 2 + buttonWidth / 2 >= imageRight) {
            return false;
        }
    }
    if (screenHeight / 2 - buttonHeight / 2 <= imageTop && screenHeight / 2 + buttonHeight / 2 >= imageTop) { //top right
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= imageRight && screenWidth / 2 + buttonWidth / 2 >= imageRight) {
            return false;
        }
    }

    //Checking midpoints of edges
    if (screenHeight / 2 - buttonHeight / 2 <= midHeight && screenHeight / 2 + buttonHeight / 2 >= midHeight) { //leftMid
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= imageLeft && screenWidth / 2 + buttonWidth / 2 >= imageLeft) {
            return false;
        }
    }
    if (screenHeight / 2 - buttonHeight / 2 <= midHeight && screenHeight / 2 + buttonHeight / 2 >= midHeight) { //rightMid
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= imageRight && screenWidth / 2 + buttonWidth / 2 >= imageRight) {
            return false;
        }
    }
    if (screenHeight / 2 - buttonHeight / 2 <= imageBottom && screenHeight / 2 + buttonHeight / 2 >= imageBottom) { //bottomMid
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= midWidth && screenWidth / 2 + buttonWidth / 2 >= midWidth) {
            return false;
        }
    }
    if (screenHeight / 2 - buttonHeight / 2 <= imageTop && screenHeight / 2 + buttonHeight / 2 >= imageTop) { //topMid
        //testing if it's inside the button.
        if (screenWidth / 2 - buttonWidth / 2 <= midWidth && screenWidth / 2 + buttonWidth / 2 >= midWidth) {
            return false;
        }
    }
    return true;


}


function appearImage(initialY, newImage) {

    buttonHolder.appendChild(newImage);
    newImage.style.top = initialY + INITIALOFFSET + "px";
    if (images.length > 1) {
        if (images[images.length - 2].style.opacity === "0") {
            images[images.length - 2].style.opacity = "1";
            let temptop = images[images.length - 2].style.top;
            temptop = temptop.substring(0, temptop.length - 2);
            temptop = Number(temptop);
            temptop -= INITIALOFFSET;
            images[images.length - 2].style.top = temptop + "px";


        }
    }

}


function dissapearImage() {
    if (images[0].style.opacity === "1") {
        images[0].style.opacity = "0";
    } else {
        buttonHolder.removeChild(images[0]);
        images[0].style.opacity = "0";
    }

}

function fadeAllAnimals() {
    placing_animals = false;
    images = buttonHolder.getElementsByClassName("animal-image");
    for (var i = images.length - 1; i >= 0; i--) {
        images[i].style.opacity = "0";
    }
    setTimeout(function () {
        for (var i = images.length - 1; i >= 0; i--) {
            buttonHolder.removeChild(images[i]);
        }
    }, 1000);
}