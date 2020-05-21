let jacob = document.getElementById("jacob");
let malini = document.getElementById("malini");
let jessica = document.getElementById("jessica");

jacob.addEventListener("click",reportJacob);
malini.addEventListener("click",reportMalini);
jessica.addEventListener("click",reportJessica);




function reportJacob(){
    var request = new XMLHttpRequest();
    var requestURL = '/report/jacob';
    request.open('POST',requestURL);
    request.send();
    goToMain();
}

function reportMalini(){
    var request = new XMLHttpRequest();
    var requestURL = '/report/malini';
    request.open('POST',requestURL);
    request.send();
    goToMain();
}

function reportJessica(){
    var request = new XMLHttpRequest();
    var requestURL = '/report/jessica';
    request.open('POST',requestURL);
    request.send();
    goToMain();
}


function goToMain(){
    window.location.href = "/rate";
}