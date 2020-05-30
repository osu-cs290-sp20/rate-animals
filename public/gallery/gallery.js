

var searchButton = document.getElementById("navbar-search-button");


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