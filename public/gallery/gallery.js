

var searchButton = document.getElementById("navbar-search-button");


window.addEventListener("load",fixSizes);
window.addEventListener("resize",fixSizes);




searchButton.addEventListener('click',  function (event){
    console.log("the search button was clicked");
    var searchInput = document.getElementById("navbar-search-input").value.toLowerCase();
    console.log(searchInput);

    var galleryBoxes = document.getElementsByClassName("gallery");

    for(var i=0; i < galleryBoxes.length; i++){
        var animalTitle = document.getElementsByClassName("animalName")[i].textContent.toLowerCase();
        if (animalTitle.indexOf(searchInput) === -1){
            galleryBoxes[i].style.visibility = "hidden";
        }
      }

    if (searchInput === ""){
        for (var i=0; i < galleryBoxes.length; i++){
            galleryBoxes[i].style.visibility = "visible";
        }
      }

})



function fixSizes(){
    var windowWidth = window.innerWidth;
    var boxWidth = .7*windowWidth;
    var margins = (windowWidth-boxWidth)/2;

    var container = document.getElementById("greaterContainer");
    var navbar = document.getElementById("topbar")
    var navbarHeight = navbar.offsetHeight;
    var boxHeight =(window.innerHeight-navbarHeight)*.8;
    var marginTop = ((window.innerHeight-navbarHeight)-boxHeight)/2;
    container.style.width = boxWidth + "px";
    container.style.height = boxHeight+ "px";
    container.style.marginTop = marginTop + "px";
    container.style.marginLeft = margins + "px";
    container.style.marginRight = margins + "px";
    

}