//stuff in here will control the rate box and selecting animals.

let animal1; //will store animal info here, and access this when user decides who won.
let animal2;
let canHover = true;




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
    report_text1.style.fontSize = "1.5vh";
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
    report_text2.style.fontSize = "1.5vh";                                       //change these font weights in an update funciton.
    text2_italicize.appendChild(report_text2);
    report2.appendChild(text2_italicize);
    report_buttons_holder.appendChild(report2);

    text_holder.style.display = "flex";
    text_holder.style.flexFlow = "row wrap";
    let name1 = document.createElement("p");                    
    let name2 = document.createElement("p");
    let name_div = document.createElement("p");

    name1.id = "animal1-text";
    name2.id = "animal2-text";
    name1.style.transition = "opacity 1s";
    name2.style.transition = "opacity 1s";

    name_div.textContent = "or"
    name_div.style.fontWeight = "bold";
    name_div.id = "orText";
    name1.textContent = "George"                        //change this stuff
    name2.textContent = "Freddy"
    name1.style.height = "auto";
    name1.style.width = "40%";

    name1.style.fontSize = "4vh";
    name2.style.fontSize = "4vh";
    name_div.style.fontSize = "4vh";
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
    image_holder.id = "image-holder";


    let image1_holder = document.createElement("div");
    image1_holder.id = "image1-holder";
    let image2_holder = document.createElement("div");
    image2_holder.id = "image2-holder";
    image1_holder.style.width = "40%";
    image2_holder.style.width = "40%";
    image1_holder.style.height = "100%";
    image2_holder.style.height = "100%";

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    image1_holder.appendChild(image1);
    image2_holder.appendChild(image2);
    image1_holder.style.textAlign = "left";
    image2_holder.style.textAlign = "left";
    image1.id = "image-1";
    image2.id = "image-2";

    image1_holder.style.cursor = "pointer";
    image2_holder.style.cursor = "pointer";
    image1_holder.addEventListener("click",selectAnimalOne);
    image2_holder.addEventListener("click",selectAnimalTwo);
    image1_holder.addEventListener("mouseover",fillImageOne);
    image2_holder.addEventListener("mousemove",fillImageTwo);
    image1_holder.addEventListener("mouseleave",stopFillImageOne);
    image2_holder.addEventListener("mouseleave",stopFillImageTwo);

    let img_div = document.createElement("div");

    img_div.style.width = "20%";
    img_div.style.height = "100%";

    image1.src = "https://placekitten.com/800/800";                                 //CHANGE THIS TO HAVE DIFFERENT PICTURES
    image2.src = "https://placekitten.com/300/300";
    image1.style.height = "100%";
    image1.style.width = "auto";
    image2.style.height = "100%";
    image2.style.width = "auto";

    image1.style.transition = "opacity 1s";
    image2.style.transition = "opacity 1s";

    stuffHolder.appendChild(report_buttons_holder);
    stuffHolder.appendChild(image_holder);
    stuffHolder.appendChild(text_holder);
    image_holder.appendChild(image1_holder);
    image_holder.appendChild(img_div);
    image_holder.appendChild(image2_holder);
    rateBox.appendChild(stuffHolder);
    addHoverAnimation();
}


function addHoverAnimation(){
    let image1_holder = document.getElementById("image1-holder");
    let image2_holder = document.getElementById("image2-holder");
    let image_holders = [image1_holder, image2_holder];
    let slide1 = document.createElement("div");
    let slide2 = document.createElement("div");
    let slides = [slide1, slide2];
    for(var i = 0; i < image_holders.length; ++i){
        image_holders[i].style.position = "relative";
        image_holders[i].style.overflow = "hidden";
        slides[i].id = "slide"+(i+1);
        slides[i].style.position = "absolute";
        slides[i].style.left = "0px";
        slides[i].style.width = "100%";
        slides[i].style.height = "100%";
        slides[i].style.top = document.getElementById("image-1").clientHeight +"px";
        slides[i].style.background = "#347C2C6B";
        slides[i].style.transition = "top 2s";
        slides[i].style.transitionTimingFunction = "linear";
     
        image_holders[i].appendChild(slides[i]);

    }
    


}

function fillImageOne(){
    if(canHover){
        let slide1 = document.getElementById("slide1");
        
        slide1.style.top = "0";
        slide1.addEventListener("transitionend",function(){
            if(slide1.style.top==="0px"){
                selectAnimalOne();
            }   
        }); 
    }
}
    
function fillImageTwo(){
    if(canHover){
        let slide2 = document.getElementById("slide2");
        slide2.style.top = "0";
        slide2.addEventListener("transitionend",function(){
            if(slide2.style.top==="0px"){
                selectAnimalTwo();
            }   
        });
    }
}

function stopFillImageOne(){
    let slide1 = document.getElementById("slide1");
    let imageHeight = document.getElementById("image-1").clientHeight;
    slide1.style.top = imageHeight+"px";
}

function stopFillImageTwo(){
    let slide2 = document.getElementById("slide2");
    let imageHeight = document.getElementById("image-2").clientHeight;
    slide2.style.top = imageHeight+"px";
}






function selectAnimalOne(){             //here will be the calling of the updating scores of the animals.
    //alert("animal one selected");
    image1 = document.querySelector("#image-1");
    image1_text = document.querySelector("#animal1-text");
    image1.style.opacity = "0";
    image1_text.style.opacity = "0";
    dissapearBoth();
    setTimeout(createNewAnimals,1000);



}

function selectAnimalTwo(){
    image2 = document.querySelector("#image-2");
    image2_text = document.querySelector("#animal2-text");
    image2.style.opacity = "0";
    image2_text.style.opacity = "0";
    dissapearBoth();
    setTimeout(createNewAnimals,1000);
}

function dissapearBoth(){
    canHover = false;
    image1 = document.querySelector("#image-1");
    image1_text = document.querySelector("#animal1-text");
    image1.style.opacity = "0";
    image1_text.style.opacity = "0";
    image2 = document.querySelector("#image-2");
    image2_text = document.querySelector("#animal2-text");
    image2.style.opacity = "0";
    image2_text.style.opacity = "0";
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let imageHeight = document.getElementById("image-1").clientHeight;
    slide1.style.opacity = "0";
    slide2.style.opacity = "0";
    slide1.style.transition = "0s";
    slide2.style.transition = "0s";
    slide1.style.top = imageHeight + "px";
    slide2.style.top = imageHeight + "px";
    
    

}


function createNewAnimals(){
    image1 = document.querySelector("#image-1");
    image1_text = document.querySelector("#animal1-text");
    image2 = document.querySelector("#image-2");
    image2_text = document.querySelector("#animal2-text");

    image1_text.textContent = "New_Name1";
    image2_text.textContent = "New_Name2";

    image1.src = "https://placekitten.com/500/500";
    image2.src = "https://placekitten.com/1000/1000";

    image1.style.opacity = "1";
    image1_text.style.opacity = "1";
    image2_text.style.opacity = "1";
    image2.style.opacity = "1";
    
    
    let imageHeight = document.getElementById("image-1").clientHeight;
    let slide1 = document.getElementById("slide1");
    
    let slide2 = document.getElementById("slide2");

    image1.addEventListener("transitionend",function(){
        canHover = true;
        slide1.style.top = imageHeight+"px";
        slide1.style.opacity = "1";
        slide2.style.opacity = "1";
        slide1.style.transition = "top 2s";
        slide1.style.transitionTimingFunction = "linear";
        slide2.style.transition = "top 2s";
        slide2.style.transitionTimingFunction = "linear";
        
    });

}

