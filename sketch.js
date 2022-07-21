var isMobile = false;
setInterval(()=>{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      isMobile = true;
     }
     if(isMobile){
       mobilelol();
     }
     if(!isMobile){
       desktoplol();
     }
    },1);
function desktoplol(){
window.open("desktop-5.0res","_self")
}

function mobilelol(){
  window.open("mobile-4.0res","_self")
}
