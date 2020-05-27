//stuff in here will control the rate box and selecting animals.

var animal1; //will store animal info here, and access this when user decides who won.
var animal2;
let canHover = true;
var winnerNumber







function styleBox() {
    let rateBox = document.querySelector("#rate-box");
    let stuffHolder = document.createElement("div");
    
    let rateHeight = rateBox.offsetHeight;

    stuffHolder.style.height = "85%";
    stuffHolder.style.width = "85%";
    stuffHolder.style.marginTop = "5%";
    stuffHolder.style.marginLeft = "7.5%";

    stuffHolder.style.display = "relative";
    rateBox.style.position = "relative";
    stuffHolder.style.display = "flex";
    stuffHolder.style.flexFlow = "column wrap";

    let whichIsCuter = document.createElement("div");
    whichIsCuter.style.marginBottom = "3%";
    whichIsCuter.style.textAlign = "center";
    whichIsCuter.id = "whichIsCuterHolder";
    whichIsCuter.style.height = "10%";
    whichIsCuter.style.width = "100%";
    let whichIsCuterText = document.createElement("h2");
    whichIsCuterText.textContent = "Choose Your Favorite Animal";
    whichIsCuterText.id = "cuterText";
    whichIsCuterText.style.color = "black";
    whichIsCuterText.style.fontSize = "5vh";
    whichIsCuter.appendChild(whichIsCuterText);
    stuffHolder.appendChild(whichIsCuter);



    let image_holder = document.createElement("div");
    let text_holder = document.createElement("div");

    let report_buttons_holder = document.createElement("div");
    report_buttons_holder.style.display = "flex";
    report_buttons_holder.style.flexfolow = "row wrap";
    report_buttons_holder.style.height = "5%";
    report_buttons_holder.style.width = "100%";

    let report1 = document.createElement("div");
    report1.id = "report_button_one";
    let report2 = document.createElement("div");
    report2.id = "report_button_two";
    report1.style.display = "flex";
    report1.style.flexFlow = "row wrap";
    report1.style.width = "40%";
    report1.style.height = "auto";

    report1.addEventListener("click", reportAnimalOne);
    report2.addEventListener("click", reportAnimalTwo);
    report1.style.cursor = "pointer";
    report2.style.cursor = "pointer";

    report1.style.textAlign = "left";
    let reportimg1 = document.createElement("img");
    reportimg1.src = "/icons/flag.png";
    reportimg1.style.height = "100%";
    reportimg1.style.width = "auto";
    report1.appendChild(reportimg1);
    let text1_italicize = document.createElement("i");
    let report_text1 = document.createElement("p");
    report_text1.classList.toggle("report_text");

    report_text1.textContent = "(Flag as inappropriate)"
    report_text1.style.fontSize = "1.5vh";
    text1_italicize.appendChild(report_text1);
    report1.appendChild(text1_italicize);
    report_buttons_holder.appendChild(report1);

    let report_div = document.createElement("div");
    report_div.style.width = "20%";
    report_div.style.height = "100%";

    report_buttons_holder.appendChild(report_div);

    //report image 2
    report2.style.display = "flex";
    report2.style.flexFlow = "row wrap";
    report2.style.width = "40%";
    report2.style.height = "auto";

    report2.style.textAlign = "left";
    let reportimg2 = document.createElement("img");
    reportimg2.src = "/icons/flag.png";
    reportimg2.style.height = "100%";
    reportimg2.style.width = "auto";
    report2.appendChild(reportimg2);
    let text2_italicize = document.createElement("i");
    let report_text2 = document.createElement("p");
    report_text2.classList.toggle("report_text");

    report_text2.textContent = "(Flag as inappropriate)"
    report_text2.style.fontSize = "1.5vh"; //change these font weights in an update funciton.
    text2_italicize.appendChild(report_text2);
    report2.appendChild(text2_italicize);
    report_buttons_holder.appendChild(report2);

    text_holder.style.display = "flex";
    text_holder.style.flexFlow = "row wrap";
    let name1 = document.createElement("p");
    let name2 = document.createElement("p");
    let name_div = document.createElement("p");

    name1.id = "animal1-text";
    name2.id = "animal2-text";
    name1.style.transition = "opacity 1s";
    name2.style.transition = "opacity 1s";

    name_div.textContent = "or"
    name_div.style.fontWeight = "bold";
    name_div.id = "orText";

    name1.style.height = "auto";
    name1.style.width = "40%";

    name1.style.fontSize = "4vh";
    name2.style.fontSize = "4vh";
    name_div.style.fontSize = "4vh";
    name_div.style.width = "20%";
    name_div.style.height = "100%";

    name2.style.height = "auto";
    name2.style.width = "40%";

    text_holder.appendChild(name1);
    text_holder.appendChild(name_div);
    text_holder.appendChild(name2);

    image_holder.style.display = "flex";
    image_holder.style.flexfolow = "row wrap";
    image_holder.style.width = "100%";
    image_holder.style.height = "60%";
    image_holder.id = "image-holder";


    let image1_holder = document.createElement("div");
    image1_holder.id = "image1-holder";
    let image2_holder = document.createElement("div");
    image2_holder.id = "image2-holder";
    image1_holder.style.width = "40%";
    image2_holder.style.width = "40%";
    image1_holder.style.height = "100%";
    image2_holder.style.height = "100%";

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    image1_holder.appendChild(image1);
    image2_holder.appendChild(image2);
    image1_holder.style.textAlign = "left";
    image2_holder.style.textAlign = "left";
    image1.id = "image-1";
    image2.id = "image-2";

    image1_holder.style.cursor = "pointer";
    image2_holder.style.cursor = "pointer";
    image1_holder.addEventListener("click", selectAnimalOne);
    image2_holder.addEventListener("click", selectAnimalTwo);
    image1_holder.addEventListener("mousemove", fillImageOne);
    image2_holder.addEventListener("mousemove", fillImageTwo);
    image1_holder.addEventListener("mouseleave", stopFillImageOne);
    image2_holder.addEventListener("mouseleave", stopFillImageTwo);

    let img_div = document.createElement("div");

    img_div.style.width = "20%";
    img_div.style.height = "100%";

    image1.style.height = "100%";
    image1.style.width = "auto";
    image2.style.height = "100%";
    image2.style.width = "auto";

    image1.style.transition = "opacity 1s";
    image2.style.transition = "opacity 1s";

    stuffHolder.appendChild(report_buttons_holder);
    stuffHolder.appendChild(image_holder);
    stuffHolder.appendChild(text_holder);
    image_holder.appendChild(image1_holder);
    image_holder.appendChild(img_div);
    image_holder.appendChild(image2_holder);
    rateBox.appendChild(stuffHolder);
    getNewAnimals();
    addHoverAnimation();
}


function addHoverAnimation() {
    let image1_holder = document.getElementById("image1-holder");
    let image2_holder = document.getElementById("image2-holder");
    let image_holders = [image1_holder, image2_holder];
    let slide1 = document.createElement("div");
    let slide2 = document.createElement("div");
    let slides = [slide1, slide2];
    for (var i = 0; i < image_holders.length; ++i) {
        image_holders[i].style.position = "relative";
        image_holders[i].style.overflow = "hidden";
        slides[i].id = "slide" + (i + 1);
        slides[i].style.position = "absolute";
        slides[i].style.left = "0px";
        slides[i].style.width = "100%";
        slides[i].style.height = "100%";
        slides[i].style.top = document.getElementById("image-1").clientHeight + "px";
        slides[i].style.background = "#347C2C6B";
        slides[i].style.transition = "top 2s";
        slides[i].style.transitionTimingFunction = "linear";

        image_holders[i].appendChild(slides[i]);

    }



}

function fillImageOne() {
    if (canHover) {
        let slide1 = document.getElementById("slide1");

        slide1.style.top = "0";
        slide1.addEventListener("transitionend", function () {
            if (slide1.style.top === "0px") {
                selectAnimalOne();
            }
        });
    }
}

function fillImageTwo() {
    if (canHover) {
        let slide2 = document.getElementById("slide2");
        slide2.style.top = "0";
        slide2.addEventListener("transitionend", function () {
            if (slide2.style.top === "0px") {
                selectAnimalTwo();
            }
        });
    }
}

function stopFillImageOne() {
    let slide1 = document.getElementById("slide1");
    let imageHeight = document.getElementById("image-1").clientHeight;
    slide1.style.top = imageHeight + "px";
}

function stopFillImageTwo() {
    let slide2 = document.getElementById("slide2");
    let imageHeight = document.getElementById("image-2").clientHeight;
    slide2.style.top = imageHeight + "px";
}






function selectAnimalOne() { //here will be the calling of the updating scores of the animals.
    //alert("animal one selected");
    
    image1 = document.querySelector("#image-1");
    image1_text = document.querySelector("#animal1-text");
    image1.style.opacity = "0";
    image1_text.style.opacity = "0";
    winnerNumber = 1;
    updateScores();
    dissapearBoth();
    setTimeout(createNewAnimals, 1000);



}

function selectAnimalTwo() {
    image2 = document.querySelector("#image-2");
    image2_text = document.querySelector("#animal2-text");
    image2.style.opacity = "0";
    image2_text.style.opacity = "0";
    winnerNumber = 2;
    updateScores();
    dissapearBoth();
    setTimeout(createNewAnimals, 1000);
}

function createCantClick(){
    let cantClick = document.createElement("div");
    let rateContainer = document.getElementById("rate-container");
    rateContainer.style.position = "relative";
    var height = rateContainer.offsetHeight;
    var width = rateContainer.offsetWidth;
    cantClick.style.width = width + "px";
    cantClick.style.height = height + "px";
    cantClick.style.position="absolute";
    cantClick.style.zIndex = "1000";
    cantClick.style.top = "0";
    cantClick.style.left = "0";
    cantClick.id = "cantClick"
    rateContainer.appendChild(cantClick);
}

function dissapearBoth() {
    createCantClick();
    canHover = false;
    image1 = document.querySelector("#image-1");
    image1_text = document.querySelector("#animal1-text");
    image1.style.opacity = "0";
    image1_text.style.opacity = "0";
    image2 = document.querySelector("#image-2");
    image2_text = document.querySelector("#animal2-text");
    image2.style.opacity = "0";
    image2_text.style.opacity = "0";
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let imageHeight = document.getElementById("image-1").clientHeight;
    slide1.style.opacity = "0";
    slide2.style.opacity = "0";
    slide1.style.transition = "0s";
    slide2.style.transition = "0s";
    slide1.style.top = imageHeight + "px";
    slide2.style.top = imageHeight + "px";



}


function createNewAnimals() {
    image1 = document.querySelector("#image-1");
    image1_text = document.querySelector("#animal1-text");
    image2 = document.querySelector("#image-2");
    image2_text = document.querySelector("#animal2-text");


    getNewAnimals();

    image1.style.opacity = "1";
    image1_text.style.opacity = "1";
    image2_text.style.opacity = "1";
    image2.style.opacity = "1";


    let imageHeight = document.getElementById("image-1").clientHeight;
    let slide1 = document.getElementById("slide1");

    let slide2 = document.getElementById("slide2");

    image1.addEventListener("transitionend", function () {
        canHover = true;
        slide1.style.top = imageHeight + "px";
        slide1.style.opacity = "1";
        slide2.style.opacity = "1";
        slide1.style.transition = "top 2s";
        slide1.style.transitionTimingFunction = "linear";
        slide2.style.transition = "top 2s";
        slide2.style.transitionTimingFunction = "linear";

    });

}


function updateScores(){
    var lastPart = window.location.href.split("/").pop();
    if(!lastPart){
        lastPart = "all"
    }
    if(animal1){    //updating scores, if the animal exists.
        if(lastPart == "all" || lastPart == "other"){
            var request = new XMLHttpRequest();
            var requestURL = '/updateScores';
            request.open('POST',requestURL);
            var animalsObject = {
                animal1ID: animal1.imageURL,
                animal2ID: animal2.imageURL,
                animal1Score: animal1.score,
                animal2Score: animal2.score,
                winner:winnerNumber,
                scope:1
            }
            var requestBody = JSON.stringify(animalsObject);
            request.setRequestHeader('Content-Type','application/json')
            request.addEventListener('load',function(event){
                if(event.target.status !== 200){
                    alert("error uploading new scores to server");
                }
            })
            request.send(requestBody);


        }else{
            var request = new XMLHttpRequest();
            var requestURL = '/updateScores';
            request.open('POST',requestURL);
            var animalsObject = {
                animal1ID: animal1.imageURL,
                animal2ID: animal2.imageURL,
                animal1Score: animal1.typeScore,
                animal2Score: animal2.typeScore,
                winner:winnerNumber,
                scope:2
            }
            var requestBody = JSON.stringify(animalsObject);
            request.setRequestHeader('Content-Type','application/json')
            request.addEventListener('load',function(event){
                if(event.target.status !== 200){
                    alert("error uploading new scores to server");
                }
            })
            request.send(requestBody);
        }
    }
}

function getNewAnimals() {
    var lastPart = window.location.href.split("/").pop();
    

    var animalType;
    if (lastPart == "all") {
        animalType = "all";
    } else if (lastPart == "cats") {
        animalType = "cat";
    } else if (lastPart == "dogs") {
        animalType = "dog";
    } else if(lastPart =="other"){
        animalType = "other"
    }else{
        animalType = "all";
    }

   

    let animalImage1 = document.getElementById("image-1")
    let animalImage2 = document.getElementById("image-2")
    let animalText1 = document.getElementById("animal1-text")
    let animalText2 = document.getElementById("animal2-text")

    var request = new XMLHttpRequest();
    var requestURL = '/twoNewAnimals/' + animalType;
    request.open('GET', requestURL);


    request.onload = function () {

        results = JSON.parse(request.response);

        animalImage1.src = 'data:image/png;base64, ' + results.animal1Image;
        animalImage2.src = 'data:image/png;base64, ' + results.animal2Image;

        animalText1.textContent = results.Animal1.animalName;
        animalText2.textContent = results.Animal2.animalName;
        animal1=results.Animal1;
        animal2=results.Animal2;
        setTimeout(function(){
            document.getElementById("rate-container").removeChild(document.getElementById("cantClick"))
        },500)
    }
    request.send();
}