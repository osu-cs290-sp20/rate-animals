//stuff in here will control the rate box and selecting animals.

let animal1; //will store animal info here, and access this when user decides who won.
let animal2;


function styleBox(){
    let rateBox = document.querySelector("#rate-box");
    let stuffHolder = document.createElement("div");

    let rateHeight = rateBox.offsetHeight;

    stuffHolder.style.height = "85%";
    stuffHolder.style.width = "85%";
    stuffHolder.style.marginTop = "10%";
    stuffHolder.style.marginLeft = "7.5%";
  
    stuffHolder.style.display = "relative";

    stuffHolder.style.display = "flex";
    stuffHolder.style.flexFlow = "column wrap";


    let image_holder = document.createElement("div");
    let text_holder = document.createElement("div");

    let report_buttons_holder = document.createElement("div");
    report_buttons_holder.style.display = "flex";
    report_buttons_holder.style.flexfolow = "row wrap";        
    report_buttons_holder.style.height = "5%";
    report_buttons_holder.style.width = "100%";

    let report1 = document.createElement("div");
    report1.id="report_button_one";
    let report2 = document.createElement("div");
    report2.id = "report_button_two";
    report1.style.display = "flex";
    report1.style.flexFlow = "row wrap";
    report1.style.width = "40%";
    report1.style.height = "auto";

    report1.addEventListener("click",reportAnimalOne);
    report2.addEventListener("click",reportAnimalTwo);
    report1.style.cursor = "pointer";
    report2.style.cursor = "pointer";
    
    report1.style.textAlign = "left";
    let reportimg1 = document.createElement("img");
    reportimg1.src = "icons/flag.png";
    reportimg1.style.height = "100%";
    reportimg1.style.width = "auto";
    report1.appendChild(reportimg1);
    let text1_italicize = document.createElement("i");
    let report_text1 = document.createElement("p");
    report_text1.classList.toggle("report_text");
    
    report_text1.textContent = "(Flag as inappropriate)"
    report_text1.fontWeight = "10px";
    text1_italicize.appendChild(report_text1);
    report1.appendChild(text1_italicize);
    report_buttons_holder.appendChild(report1);

    let report_div = document.createElement("div");
    report_div.style.width = "20%";
    report_div.style.height = "100%";

    report_buttons_holder.appendChild(report_div);

    //report image 2
    report2.style.display = "flex";
    report2.style.flexFlow = "row wrap";
    report2.style.width = "40%";
    report2.style.height = "auto";
    
    report2.style.textAlign = "left";
    let reportimg2 = document.createElement("img");
    reportimg2.src = "icons/flag.png";
    reportimg2.style.height = "100%";
    reportimg2.style.width = "auto";
    report2.appendChild(reportimg2);
    let text2_italicize = document.createElement("i");
    let report_text2 = document.createElement("p");
    report_text2.classList.toggle("report_text");
    
    report_text2.textContent = "(Flag as inappropriate)"
    report_text2.fontWeight = "10px";                                       //change these font weights in an update funciton.
    text2_italicize.appendChild(report_text2);
    report2.appendChild(text2_italicize);
    report_buttons_holder.appendChild(report2);

    text_holder.style.display = "flex";
    text_holder.style.flexFlow = "row wrap";
    let name1 = document.createElement("p");                    
    let name2 = document.createElement("p");
    let name_div = document.createElement("p");
    name_div.textContent = "or"
    name_div.style.fontWeight = "bold";
    name1.textContent = "George"
    name2.textContent = "Freddy"
    name1.style.height = "auto";
    name1.style.width = "40%";

    name1.style.fontSize = "30px";
    name2.style.fontSize = "30px";
    name_div.style.fontSize = "30px";



    

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

    image1.style.cursor = "pointer";
    image2.style.cursor = "pointer";
    image1.addEventListener("click",selectAnimalOne);
    image2.addEventListener("click",selectAnimalTwo);


    let img_div = document.createElement("div");

    img_div.style.width = "20%";
    img_div.style.height = "100%";

    image1.src = "https://placekitten.com/800/800";                                 //CHANGE THIS TO HAVE DIFFERENT PICTURES
    image2.src = "https://placekitten.com/300/300";
    image1.style.height = "auto";
    image1.style.width = "40%";
    image2.style.height = "auto";
    image2.style.width = "40%";

    stuffHolder.appendChild(report_buttons_holder);
    stuffHolder.appendChild(image_holder);
    stuffHolder.appendChild(text_holder);
    image_holder.appendChild(image1);
    image_holder.appendChild(img_div);
    image_holder.appendChild(image2);

    rateBox.appendChild(stuffHolder);
}



function reportAnimalOne(){
    
    alert("Animal one has been reported as inappropriate.");

}

function reportAnimalTwo(){
    alert("Animal two has been reported as inappropriate.");
}



function selectAnimalOne(){
    alert("animal one selected");

}

function selectAnimalTwo(){
    alert("animal two selected");
}