



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
    stuffHolder.style.flexFlow = "column wrap";
    
    let image_holder = document.createElement("div");
    let text_holder = document.createElement("div");
    text_holder.style.display = "flex";
    text_holder.style.flexFlow = "row wrap";
    let name1 = document.createElement("p");
    let name2 = document.createElement("p");
    let name_div = document.createElement("p");
    name_div.textContent = "or"
    name1.textContent = "George"
    name2.textContent = "Freddy"
    name1.style.height = "auto";
    name1.style.width = "40%";

    name_div.style.width = "20%";
    name_div.style.height = "100%";

    name2.style.height = "auto";
    name2.style.width = "40%";



    text_holder.appendChild(name1);
    text_holder.appendChild(name_div);
    text_holder.appendChild(name2);
  
   image_holder.style.display = "flex";
   image_holder.style.flexfolow = "row wrap";
   image_holder.style.width = "100%";
   image_holder.style.height = "60%";

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let img_div = document.createElement("div");

    img_div.style.width = "20%";
    img_div.style.height = "100%";

    image1.src = "https://placekitten.com/200/200";                                 //CHANGE THIS TO HAVE DIFFERENT PICTURES
    image2.src = "https://placekitten.com/300/300";
    image1.style.height = "auto";
    image1.style.width = "40%";
    image2.style.height = "auto";
    image2.style.width = "40%";


    stuffHolder.appendChild(image_holder);
    stuffHolder.appendChild(text_holder);
    image_holder.appendChild(image1);
    image_holder.appendChild(img_div);
    image_holder.appendChild(image2);

    rateBox.appendChild(stuffHolder);


}