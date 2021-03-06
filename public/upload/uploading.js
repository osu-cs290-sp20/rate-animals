const DEBUG = false;




var ip;

var cropper = new Croppie(document.getElementById("croppie_holder"),{
    viewport: {
        width:100,
        height:100,
        type: 'square'
    }
});

var croppie_holder = document.getElementById("croppie_holder");
croppie_holder.style.display = "none";

let fileSelector = document.getElementById("fileSelector");
fileSelector.addEventListener("change",updateImageDisplay);

function updateImageDisplay(){
    croppie_holder.style.display = "";
    const curFiles = fileSelector.files;
    let label = document.getElementById("selector_label");
    if(validFileType(curFiles[0])){
        
        cropper.bind({
            url: URL.createObjectURL(curFiles[0])
        });
        label.textContent = "File Chosen:"
        croppie_holder.style.display = "";
    }else{
        label.textContent = "Invalid File Type!"
        croppie_holder.style.display = "none";
    }
    if(!curFiles[0]){
        croppie_holder.style.display = "none";
        label.textContent = "Choose an Image:";
    }
    setButtonColor();
    
}
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  function validFileType(file) {
      if(file){
        return fileTypes.includes(file.type);
      }
      return false;
  }


  function submitInfo(){
    cropper.result({
        type:'base64',
        size:{
            width:'300',                    //this is where we can chagne the quality of the pictures stored.
            height:'300'
        },
        format:'png',
        quality:1,
        circle:false
    }).then(function(image){
      
        var animalName = document.getElementById("nameInput").value;
        var animalType = document.getElementById("animalChoice").value;
                        //if animal age is 0 its baby, 1 its adult.
        var animalAge;
        var otherType = "-1";
        var otherSelected=false;
        if(animalType == "other"){
            otherSelected = true;
            otherType = document.getElementById("otherInput").value;
        }
        if(document.getElementById("animalAge").value === "baby"){
            animalAge = 0;
        }else{
            animalAge = 1;
        }

        if(otherType != "-1"){
            animalType = otherType;
        }
        animalType = animalType.toLowerCase();
        uploadAnimalToDB(animalAge,animalName,animalType,image);

        
        
        resetValues();
    });
}

function uploadAnimalToDB(age, name, type, image){
    var request = new XMLHttpRequest();
    var requestURL = '/uploadAnimal';
   

    request.open('POST',requestURL);




    var animalObj = {
        animalType: type,
        animalAge: age,
        animalName: name,
        animalImage: image,
        userIP:ip

    };
    var requestBody = JSON.stringify(animalObj);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load',function(event){
        if(event.target.status !== 200){
            var message = event.target.response;
            alert("Error storing photo in database: ",message);
        }else{
            
             rocketMan(image)
        }
    
    });
    request.send(requestBody);

}


function rocketMan(image){

    
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
  
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    var imageResult = document.createElement("img");
    imageResult.src = image;
    imageResult.style.height = "auto";
    imageResult.style.width = "100%";
    imageResult.style.position = "relative";
    div.appendChild(imageResult);
    div.style.opacity = "1";
    div.id = "rocket-holder";
    div.style.zIndex = "100";
    div.style.transition = "top 2.5s, opacity 4s";
    div.style.transitionTimingFunction = "ease-in .5s";
    div.style.position = "fixed";
    div.style.top = windowHeight + "px";
    div.style.left = windowWidth/2 - 50 + "px";
    div.style.boxShadow = "10px 10px 10px #00000060"
    
    document.body.appendChild(div);
    if(DEBUG){
    console.log("Rocket top is: " + div.style.top + "Rocket left is: " + div.style.left + "Rocket opacity is:" + div.style.opacity);
    }
    setTimeout(function(){
        div.style.top = "-300px";
        setTimeout(function(){
            document.body.removeChild(div);
        },2000);
    }, 1000);
    



}

function resetValues(){
    document.getElementById("nameInput").value = "";
    document.getElementById("characterCount").textContent = "20";
    document.getElementById("animalChoice").value = "select";
    document.getElementById("animalAge").value = "select";
    document.getElementById("otherInput").value = "";
    document.getElementById("otherCount").textContent = "20";
    document.getElementById("selector_label").textContent = "Choose an image:";
    croppie_holder.style.display = "none";
    fileSelector.value = null;
    setButtonColor();
    checkAnimalType();
}