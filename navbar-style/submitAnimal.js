let animalUploadLink = document.getElementById("animalUpload");

animalUploadLink.addEventListener("click",getAnimalUploadPage);
animalUploadLink.style.cursor = "pointer";

window.addEventListener("resize",fixBoxes);

function getAnimalUploadPage(){
    let grayWindow = document.createElement("div");
    grayWindow.style.width = window.innerWidth+"px";
    grayWindow.style.height = window.innerHeight+"px";
    grayWindow.style.zIndex = "99";
    grayWindow.style.backgroundColor = "#48494B66";
    grayWindow.style.position = "fixed";
    grayWindow.style.top = "0px";
    grayWindow.style.left = "0px";
    grayWindow.id = "grayWindow";

    let submitAnimalHolder = document.createElement("div");
    submitAnimalHolder.id = "submitAnimalHolder";
    submitAnimalHolder.style.position = "fixed";
    submitAnimalHolder.style.backgroundColor = "white";
    submitAnimalHolder.style.borderRadius = "15px";
    let boxHeight = window.innerHeight/1.5;
    submitAnimalHolder.style.height = boxHeight +"px";
    let boxWidth = boxHeight * 1.5;
    submitAnimalHolder.style.width = boxWidth+"px";
    submitAnimalHolder.style.zIndex = "100";
    submitAnimalHolder.style.top = (window.innerHeight-boxHeight)/2+"px";
    submitAnimalHolder.style.left = (window.innerWidth-boxWidth)/2 +"px";
    submitAnimalHolder.style.position = "relative";

    grayWindow.appendChild(submitAnimalHolder);

    document.body.appendChild(grayWindow);
}



function fixBoxes(){
    if(grayWindow){
        let grayWindow = document.getElementById("grayWindow");
        grayWindow.style.width = window.innerWidth+"px";
        grayWindow.style.height = window.innerHeight+"px";
        let submitAnimalHolder = document.getElementById("submitAnimalHolder");
        let boxHeight = window.innerHeight/1.5;
        submitAnimalHolder.style.height = boxHeight +"px";
        let boxWidth = boxHeight * 1.5;
        submitAnimalHolder.style.width = boxWidth+"px";
        submitAnimalHolder.style.top = (window.innerHeight-boxHeight)/2+"px";
        submitAnimalHolder.style.left = (window.innerWidth-boxWidth)/2 +"px";
    }



}