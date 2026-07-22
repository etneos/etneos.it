function contactpage(){
     window.open('contatti.htm','_top');
    }
function newpage(){
    window.open('nineteen4.html','_top');    
    }
function diciannove(){
    if (window.matchMedia("(max-width: 1200px)").matches)
       {
        //alert('smart');
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
    document.getElementById('myImage').src='img/Regole.jpg';
        var overlay = document.getElementById('overlay');
        if(overlay.style.display == "block"){
           overlay.style.display = "none";
           finestra.style.display = "none";
          } else {
                   overlay.style.display = "block";
                   finestra.style.display = "block";
                 }
        } 
function toggle2(){            
                var overlay = document.getElementById('overlay');
                var isFirefox = typeof InstallTrigger !== 'undefined';
                var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
                var sapiri = document.getElementById("thewin");
                var sapiri_span = document.getElementById("sapiri");

                if(overlay.style.display == "block"){
                   overlay.style.display = "none";
                   finestra.style.display = "none";
                  } else {                                                       
                        if (window.matchMedia("(max-width: 1200px) and (orientation: portrait)").matches)
                           {
                            window.location.reload(true);
                            if (isFirefox) {
                                alert('true');
                                // modifica font solo se browser firefox mobile portrait
                                window.location.reload(true);
                                sapiri_span.style.fontSize = "8px";
                                sapiri_span.style.paddingTop ="16%";
                                sapiri_span.style.fontFamily ="'Times New Roman', Times, serif";                                                         
                                sapiri_span.style.fontStyle ="oblique";                                                                
                               }
                               window.location.reload(true);
                               sapiri_span.style.fontSize = "26px";
                               sapiri_span.style.paddingTop ="16%";
                               sapiri_span.style.fontFamily ="'Times New Roman', Times, serif";                                                         
                               sapiri_span.style.fontStyle ="oblique";
                               sapiri.style.content = "url('img/sapiri_portrait.png')";                               
                            }
                          else if (window.matchMedia("(max-width: 1200px) and (orientation: landscape)").matches)
                                {
                                    window.location.reload(true);
                                    sapiri.style.content = "url('img/sapiri_land.png')"; 
                                    sapiri_span.style.paddingTop = "10%";                                                                    
                                }
                        else
                            sapiri.style.content = "url('img/sapiri_desk.png')";
                        
                         //alert(isFirefox);
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
    document.getElementById('myImage').src='img/Rules.jpg';
}
function regole2(){    
    document.getElementById('myImage').src='img/Regole.jpg';
}
function totali(){
    document.getElementById("totali").src ="img/animetna.gif";    
}