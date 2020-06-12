let all = document.getElementById("all");
let cats = document.getElementById("cats");
let dogs = document.getElementById("dogs");
let other = document.getElementById("other");
let dropdown = document.querySelector(".dropdown");

let dropdownOptions = [all, cats, dogs, other];


var hidden = true;

let rate = document.getElementById("rate");
rate.addEventListener('mouseenter', showDropdown);
rate.addEventListener('mouseleave', hideDropdown);

let dropdownContent = document.querySelector(".dropdown-content");
dropdownContent.addEventListener("mouseenter", showDropdown);
dropdownContent.addEventListener("mouseleave", hideDropdown);
window.addEventListener("load", windowLoading);

function windowLoading() {
    fixDropdownState();
    hideDropdown();
}

function fixDropdownState() {
    var lastPart = window.location.href.split("/").pop();
    console.log(lastPart);
    dropdownOptions.forEach(function (item, index) {
        item.classList.remove('active');
        item.classList.add('inactive');
    })
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
        case 'other':
            other.classList.add("active");
            other.classList.remove("inactive");
            break;
        case '':
            all.classList.add("active");
            all.classList.remove("inactive");
    }
}

function hideDropdown() {

    dropdownContent.style.top = "-300px";
    dropdownContent.style.opacity = "0"


}


function showDropdown() {


    dropdown.style.zIndex = "5";
    dropdownContent.style.opacity = "1";

    setTimeout(function () {
        dropdownContent.style.top = "0px"
    }, 1);
}