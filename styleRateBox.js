



function styleBox(){
    let rateBox = document.querySelector("#rate-box");
    let stuffHolder = document.createElement("div");
    let rateHeight = rateBox.offsetHeight;

    stuffHolder.style.height = "85%";
    stuffHolder.style.width = "85%";
    stuffHolder.style.marginTop = "5%";
    stuffHolder.style.marginLeft = "7.5%";
  
    stuffHolder.style.display = "relative";

    stuffHolder.style.display = "flex";
    stuffHolder.style.flexFlow = "row wrap";
    
    let image1_holder = document.createElement("div");
    let image2_holder = document.createElement("div");
    let divider = document.createElement("div");
    divider.style.width = "20%";
    divider.style.height = "100%";
   

    let orDiv = document.createElement("p");
    orDiv.textContent = "or";
    
    divider.appendChild(orDiv);


    image1_holder.classList.toggle("image_holder");
    image2_holder.classList.toggle("image_holder");
    let image_holders = [image1_holder,image2_holder];
    
    let names = ["George","Rachel"];

    let name1 = document.createElement("p");
    let name2 = document.createElement("p");
    name1.textContent = names[0];                                           //CHANGE THIS LATER SO W CAN HAVE DYNAMIC NAMES
    name2.textContent = names[1];
    name1.style.fontSize = "30px";
    name2.style.fontSize = "30px";                                  //FIGURE OUT HOW TO MAKE THIS RESPONSIVE LATER
    for(var i = 0; i < image_holders.length; i++){
        
        image_holders[i].style.display = "flex";
        image_holders[i].style.flexFlow = "column wrap";
        image_holders[i].style.height = "100%";
        image_holders[i].style.width = "40%";
        image_holders[i].style.alignItems = "center";
        image_holders[i].style.justifyContent = "center";
        

    }


    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    image1.src = "https://placekitten.com/200/200";                                 //CHANGE THIS TO HAVE DIFFERENT PICTURES
    image2.src = "https://placekitten.com/300/300";
    image1.style.height = "auto";
    image1.style.width = "100%";
    image2.style.height = "auto";
    image2.style.width = "100%";

    image1_holder.appendChild(image1);
    image2_holder.appendChild(image2);
    image1_holder.appendChild(name1);
    image2_holder.appendChild(name2);

    stuffHolder.appendChild(image1_holder);
    stuffHolder.appendChild(divider);
    stuffHolder.appendChild(image2_holder);
    rateBox.appendChild(stuffHolder);


}