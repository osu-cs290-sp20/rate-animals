


function reportAnimalOne(){
    createReportBox(1);
}

window.addEventListener('resize', fixReportSizes);

function reportAnimalTwo(){
    createReportBox(2);
}


function fixReportSizes(){
    if(document.getElementById("grayWindow")){
        grayWindow = document.getElementById("grayWindow");
        grayWindow.style.width = window.innerWidth+"px";
        grayWindow.style.height = window.innerHeight+"px";
        reportBoxHolder = document.getElementById("reportBoxHolder");
        let boxHeight = window.innerHeight/3;
        reportBoxHolder.style.height = boxHeight +"px";
        let boxWidth = boxHeight * 1.25;
        reportBoxHolder.style.top = ((window.innerHeight-boxHeight)/2)+"px";
        reportBoxHolder.style.left = ((window.innerWidth-boxWidth)/2) +"px";


    }
}

function getRidOfAnimal(animalChoice){
    closeReportBox();
    alert("Animal " + animalChoice+" was reported.");
    dissapearBoth();
    setTimeout(createNewAnimals,1000);

}

function createReportBox(animalChoice){     //animal choice is either 1 or 2 I wish the cancel and accept buttons looked better
    let grayWindow = document.createElement("div");
    grayWindow.style.width = window.innerWidth+"px";
    grayWindow.style.height = window.innerHeight+"px";
    grayWindow.style.zIndex = "99";
    grayWindow.style.backgroundColor = "#48494B66";
    grayWindow.style.position = "fixed";
    grayWindow.style.top = "0px";
    grayWindow.style.left = "0px";
    grayWindow.id = "grayWindow";
    let reportBoxHolder = document.createElement("div");
    reportBoxHolder.id = "reportBoxHolder";
    reportBoxHolder.style.position = "fixed";
    reportBoxHolder.style.backgroundColor = "white";
    reportBoxHolder.style.borderRadius = "15px";
    let boxHeight = window.innerHeight/3;
    reportBoxHolder.style.height = boxHeight +"px";
    let boxWidth = boxHeight * 1.5;
    reportBoxHolder.style.width = boxWidth+"px";
    reportBoxHolder.style.zIndex = "100";
    reportBoxHolder.style.top = (window.innerHeight-boxHeight)/2+"px";
    reportBoxHolder.style.left = (window.innerWidth-boxWidth)/2 +"px";
    reportBoxHolder.style.position = "relative";
  

    let buttonHolder = document.createElement("div");
    buttonHolder.id = "buttonHolder";
    buttonHolder.style.height = "10%";
    buttonHolder.style.width = "100%";
    buttonHolder.style.textAlign = "right";
 
    let xButton = document.createElement("button");
    xButton.style.height="100%";
    xButton.style.width="10%";
    xButton.style.borderRadius = "15px";
    xButton.style.border = "none";
    xButton.textContent = "x";
    xButton.style.backgroundColor = "white";
    xButton.style.cursor = "pointer";
    xButton.addEventListener("click",closeReportBox);
    buttonHolder.appendChild(xButton);

    let areYouSure = document.createElement("p");
    areYouSure.id = "areYouSure"
    areYouSure.style.textAlign = "center";
    areYouSure.style.fontWeight = "bold";
    areYouSure.textContent = "Are you sure that you want to report insert_name_here for having an inappropriate picture or name?";
    areYouSure.style.fontSize = "2vh";


    let choiceButtons = document.createElement("div");
    choiceButtons.id = "choiceButtons";
    choiceButtons.style.width = "100%";
    choiceButtons.style.height = "15%";
    choiceButtons.style.position = "absolute";
    choiceButtons.style.bottom = "0px";
    choiceButtons.style.display = "inline-block";

    let yesButton = document.createElement("button");
    yesButton.id = "yesButton";
    yesButton.style.height = "100%";
    yesButton.style.width = "20%";
    yesButton.style.borderRadius = "5px";
    yesButton.style.border = "none";
    yesButton.style.backgroundColor = "#5ccc74";
    yesButton.style.marginLeft = "40%";
    yesButton.textContent = "Yes";
    yesButton.style.color = "white";
    yesButton.style.cursor = "pointer";
    yesButton.addEventListener("click",function(){
        getRidOfAnimal(animalChoice);
    });

    let cancelButton = document.createElement("button");
    cancelButton.id = "cancelButton";
    cancelButton.style.height = "100%";
    cancelButton.style.width = "20%";
    cancelButton.style.marginLeft = "10%";
    
    cancelButton.style.borderRadius = "5px";
    cancelButton.style.border = "none";
    cancelButton.style.backgroundColor = "#db444c";
    cancelButton.style.color = "white";
    cancelButton.textContent = "Cancel";
    cancelButton.style.cursor = "pointer";
    cancelButton.addEventListener("click",closeReportBox);
    choiceButtons.appendChild(cancelButton);
    choiceButtons.appendChild(yesButton);

    

    reportBoxHolder.appendChild(buttonHolder);
    reportBoxHolder.appendChild(areYouSure);
    reportBoxHolder.appendChild(choiceButtons);
    grayWindow.appendChild(reportBoxHolder);
    document.body.appendChild(grayWindow);
}

function closeReportBox(){
    document.body.removeChild(document.getElementById("grayWindow"));
    

}