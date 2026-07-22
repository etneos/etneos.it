function contactpage(){
     window.open('contatti.htm','_top');
    }
function newpage(){
    window.open('nineteen4.html','_top');    
    }
function diciannove(){     
    if (window.matchMedia("(max-width: 1200px)").matches)
       {        
          // verifico densità
         if ((window.screen.width)>(window.innerWidth)) // bassa densità (firefox tablet)
             window.open('primoquadro.htm','','width='+screen.availWidth+',height='+screen.availHeight+'');
          else     
             window.open('primoquadro2.htm','','width='+screen.availWidth+',height='+screen.availHeight+'');
        }
    else
        {
         //alert('desk');
        window.open('primoquadro.htm','','width='+screen.availWidth+',height='+screen.availHeight+'');   
        }
}     
function colbuttonOv1(){        
        document.getElementById("idx1").style.background ='#ffd700';                                      
    }
function colbuttonOu1(){        
     document.getElementById("idx1").style.background='#c6d1e0f1';              
}
    function colbuttonOv2(){        
        document.getElementById("idx2").style.background ='#ffd700';                
    }
  function colbuttonOu2(){        
    document.getElementById("idx2").style.background='#c6d1e0f1';        
}
function toggle(){
    if (window.matchMedia("(orientation: portrait)").matches) {
        document.getElementById('myImage').src='img/Regole2.png';
     }
     else {
        document.getElementById('myImage').src='img/Regole.jpg';
     }         
        var overlay = document.getElementById('overlay');
        if(overlay.style.display == "block"){
           overlay.style.display = "none";
           finestra.style.display = "none";
          } else {
                   overlay.style.display = "block";
                   finestra.style.display = "block";
                   // aggiungo listener cambio orientamento  
                   window.addEventListener('resize', function(){
                   if(window.innerWidth <  window.innerHeight){                                        //alert('portrait');
                     overlay.style.display = "none";
                     finestra.style.display = "none";
                     window.location.reload(true);                        
                    }
                   if(window.innerWidth >  window.innerHeight){                                        //alert('landscape');
                     overlay.style.display = "none";
                     finestra.style.display = "nome";
                     window.location.reload(true);                      
                     }
                   });                
                 }
        } 
function toggle2(){            
                var overlay = document.getElementById('overlay');
                if(overlay.style.display == "block"){
                   overlay.style.display = "none";
                   finestra.style.display = "none";
                  } else {
                           overlay.style.display = "block";
                           finestra.style.display = "block";                          
                         }
                }   
function toggle3(){            
    var overlay = document.getElementById('overlay2');
    if(overlay.style.display == "block"){
        overlay.style.display = "none";
        finestra3.style.display = "none";
        } else {
                overlay.style.display = "block";
                finestra3.style.display = "block";
                }
    }                       
function colbuttonOv3(){        
    document.getElementById("idx3").style.background ='#a8fc93f1';                                      
}
function colbuttonOu3(){        
  document.getElementById("idx3").style.background='#c6d1e0f1';              
}
function colbuttonOv4(){         
    document.getElementById("idx4").style.background ='#a8fc93f1';                
}
function colbuttonOu4(){        
    document.getElementById("idx4").style.background='#c6d1e0f1';        
}
function regole(){        
    if ((window.matchMedia("(orientation: portrait)").matches)&&(window.matchMedia("(max-width: 1200px)").matches))
       {
        document.getElementById('myImage').src='img/Rules2.png';
     }
    else if ((window.matchMedia("(orientation: landscape)").matches)&&(window.matchMedia("(max-width: 1200px)").matches)) 
           {
            document.getElementById('myImage').src='img/Rules2.jpg';
        }
    else {
        document.getElementById('myImage').src='img/Rules.jpg';
     }    
}
function regole2(){    
    if ((window.matchMedia("(orientation: portrait)").matches)&&(window.matchMedia("(max-width: 1200px)").matches))
        {
        document.getElementById('myImage').src='img/Regole2.png';
     }
    else if ((window.matchMedia("(orientation: landscape)").matches)&&(window.matchMedia("(max-width: 1200px)").matches)) 
           {
            document.getElementById('myImage').src='img/Regole2.jpg';
          } 
    else {
        document.getElementById('myImage').src='img/Regole.jpg';
     }    
}
function totali(){
    document.getElementById("totali").src ="img/animetna.gif";    
}