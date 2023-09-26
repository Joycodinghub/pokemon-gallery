let fullImgBox = document.getElementById("fullImgBox");

let fullImg = document.getElementById("fullImg");

let zoomPos = document.querySelector(".button1");
let zoomNeg = document.querySelector(".button2");

let zoom=1;

zoomPos.addEventListener("click",zoomIn);
zoomNeg.addEventListener("click",zoomOut);


function zoomIn(){
    zoom+=0.1;
    fullImg.style.transform="scale("+zoom+")";
}
function zoomOut(){
    if(zoom>1){
        zoom-=0.1;
    }
    fullImg.style.transform="scale("+zoom+")";
}
function openFullImg(imgsrc){
    fullImg.setAttribute("src",imgsrc);
    zoom=1;
    fullImg.style.transform="scale("+zoom+")";
    fullImgBox.style.display="flex";
   
}

function closeFullImg(){
    fullImgBox.style.display="none";
    zoom=1;
}
