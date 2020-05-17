


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
        croppie_holder.style.display = "";
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