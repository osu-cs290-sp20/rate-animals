let all = document.getElementById("all");
let cats = document.getElementById("cats");
let dogs = document.getElementById("dogs");
let dropdown = document.querySelector(".dropdown");

let rate = document.getElementById("rate");
rate.addEventListener('mouseenter', showDropdown);
rate.addEventListener('mouseleave', hideDropdown);

let dropdownContent = document.querySelector(".dropdown-content");
dropdownContent.addEventListener("mouseenter", showDropdown);
dropdownContent.addEventListener("mouseleave", hideDropdown);

startUp();

function startUp() {
    fixDropdownState();
    hideDropdown();
}

function fixDropdownState() {
    var lastPart = window.location.href.split("/").pop();
    all.classList.remove('active');
    cats.classList.remove('active');
    dogs.classList.remove('active');
    all.classList.add('inactive');
    cats.classList.add('inactive');
    dogs.classList.add('inactive');
   
    switch (lastPart) {
        case 'all':
            
            all.classList.add("active");
            all.classList.remove("inactive");
            break;
        case 'cats':
            cats.classList.add("active");
            cats.classList.remove("inactive");
            break;
        case 'dogs':
            dogs.classList.add("active");
            dogs.classList.remove("inactive");
            break;
    }
}

function hideDropdown() {
    dropdownContent.style.top = "-150px";
    dropdownContent.style.opacity = "0"
}

function showDropdown() {
    dropdownContent.style.opacity = "1";
    setTimeout(function(){
        dropdownContent.style.top = "0px"
    },1);
    
}