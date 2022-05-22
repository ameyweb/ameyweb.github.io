var isMobile = false;
function preload(){

}

function setup() {
    createCanvas(windowWidth,windowHeight);
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      isMobile = true;
     }
     if(isMobile){
       mobilelol();
     }
     if(!isMobile){
       desktoplol();
     }
}

function draw() {

}
function desktoplol(){
window.open("desktop-4.0","_self")
}

function mobilelol(){
  window.open("mobile-4.0","_self")
}
