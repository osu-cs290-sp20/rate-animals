

let all = document.getElementById("all");
let cats = document.getElementById("cats");
let dogs = document.getElementById("dogs");
let dropdown = document.querySelector(".dropdown");
window.addEventListener("load",hideDropdown);

function hideDropdown(){
    dropdown.style.display = "none";
    dropdown.style.opacity = "0";
}
function showDropdown(){
    dropdown.style.display = "inline-block";
    dropdown.style.opacity = "1";
}


all.addEventListener("click",rateAll);
cats.addEventListener("click",rateCats);
dogs.addEventListener("click",rateDogs);



function rateAll(){
    cats.classList.remove('active');
    cats.classList.add('inactive');
    dogs.classList.remove('active');
    dogs.classList.add('inactive');
    all.classList.remove('inactive');
    all.classList.add('active');
    dissapearBoth();
}
function rateCats(){
    cats.classList.remove('inactive');
    cats.classList.add('active');
    dogs.classList.remove('active');
    dogs.classList.add('inactive');
    all.classList.remove('active');
    all.classList.add('inactive');
    dissapearBoth();
}
function rateDogs(){
    cats.classList.remove('active');
    cats.classList.add('inactive');
    dogs.classList.remove('inactive');
    dogs.classList.add('active');
    all.classList.remove('active');
    all.classList.add('inactive');
    dissapearBoth();
}