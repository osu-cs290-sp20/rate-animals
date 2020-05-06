


//run every 1 second.
var intervalBetweenAnimals = window.setInterval(generateAnimal,2000);

let buttonHolder = document.getElementById("button-holder");

let images=buttonHolder.getElementsByClassName("animal-image");;

function generateAnimal(){
    
    let newImage = document.createElement("img");
    
    newImage.classList.add("animal-image")
    let randomHeight = (100 +(Math.random() * 200))
    newImage.style.height=randomHeight+"px"; //we can make this a random number later.
    newImage.src="http://placekitten.com/"+Math.floor(randomHeight)+"/"+Math.floor(randomHeight); //this will be what we change.
    newImage.style.width="auto";
    newImage.style.boxShadow="10px 10px 10px #0000004d";
    newImage.style.position = "absolute";
    newImage.style.transition = "opacity 1s, top 1s"
    newImage.style.opacity = "0";
    newImage.style.zIndex = "-1";
    let objectheight = Math.random() * (buttonHolder.clientHeight-randomHeight); //eventually we can change the size and change the height.
    let objectwidth = Math.random() * (buttonHolder.clientWidth-randomHeight);
    //minus 300 because we need to make sure it's in the box not at the edges.
    newImage.style.left = objectwidth+"px";
    newImage.style.top = objectheight+"px";
    appearImage(objectheight,newImage);

    images = buttonHolder.getElementsByClassName("animal-image");
    if(buttonHolder.childElementCount >= 11){
     
        dissapearImage();
    }
    
}


function appearImage(initialY,newImage){
 
    buttonHolder.appendChild(newImage);
    newImage.style.top = initialY+40+"px";
    if(images[images.length-2].style.opacity ==="0"){
        images[images.length-2].style.opacity = "1";
        let temptop = images[images.length-2].style.top;
        temptop = temptop.substring(0,temptop.length-2);
        temptop = Number(temptop);
        temptop -=40;
        images[images.length-2].style.top = temptop+"px";
        
     
    }

}


function dissapearImage(){
    if(images[0].style.opacity==="1"){
        images[0].style.opacity = "0";
    }else{
        buttonHolder.removeChild(images[0]);
        images[0].style.opacity="0";
    }
    
}