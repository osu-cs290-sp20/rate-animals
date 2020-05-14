


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