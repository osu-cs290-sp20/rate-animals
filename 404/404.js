let developers = document.getElementsByClassName("web_dev_holder");

for (var i = 0; i < developers.length; i++){
    developers[i].addEventListener("click",goToMain);
}


function goToMain(){
    window.location.href = "rate";
}