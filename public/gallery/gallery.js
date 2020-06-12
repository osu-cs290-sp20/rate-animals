



window.addEventListener("load",fixSizes);
window.addEventListener("resize",fixSizes);




function fixSizes(){
    var windowWidth = window.innerWidth;
    var boxWidth = .7*windowWidth;
    var margins = (windowWidth-boxWidth)/2;

    var container = document.getElementById("greaterContainer");
    var navbar = document.getElementById("topbar")
    var navbarHeight = navbar.offsetHeight;
    var boxHeight =(window.innerHeight-navbarHeight)*.9;
    var marginTop = ((window.innerHeight-navbarHeight)-boxHeight)/2;
    container.style.width = boxWidth + "px";
    container.style.height = boxHeight+ "px";
    container.style.marginTop = marginTop + "px";
    container.style.marginLeft = margins + "px";
    container.style.marginRight = margins + "px";
}



function requestNewImages(){

    
}