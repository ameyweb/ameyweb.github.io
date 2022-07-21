var isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      isMobile = true;
     }else{
     console.log("myau");
     }
     if(isMobile){
       mobilelol();
     }
     else if(!isMobile){
       desktoplol();
     }else{
     console.log("myau");
     }
function desktoplol(){
window.open("desktop-5.0res","_self")
}

function mobilelol(){
  window.open("mobile-4.0res","_self")
}
