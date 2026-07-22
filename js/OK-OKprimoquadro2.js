//import {toggle} from './general.js';
//Si mette sempre all'inzio, la function sull'altro file deve essere 
// export function e sull'html deve essere specificato che si tratta di moduli
//<script type="module" src="general.js"></script> ma per funzionare in locale
// serve un webserv, sul provider dovrebbe invece funzionare bene.
// per ora preferisco duplicare il codice. Spiegato all'indirizzo sotto
// https://www.digitalocean.com/community/tutorials/understanding-modules-and-import-and-export-statements-in-javascript 

var mazzo = [ card0 = {
      seme: 'picche',
      numero: 1,     
      img: 'js/img/unoP.GIF'
    }];
var pl1 = [ pl1card0 = {
      seme: '',
      numero: 0,      
      img: ''
    }];
var pl2 = [ pl2card0 = {
      seme: '',
      numero: 0,      
      img: '',
      scartato : ''
    }];
var pl3 = [ pl3card0 = {
      seme: '',
      numero: 0,      
      img: '',
      scartato : ''
    }];
var pl4 = [ pl4card0 = {
      seme: '',
      numero: 0,      
      img: '',
      scartato : ''
    }]; 
var maz_win = [ win0 = {   
  img: 'js/img/parial.gif',
  used : 'N',
  val  : 'PA'
}];


// verificare browser utilizzato dall'utente
// Opera 8.0+
//var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
//var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]"
//var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
//var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
//var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
//var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
//var isBlink = (isChrome || isOpera) && !!window.CSS;

var lx =0;
var seed;
var num;
var ind;
var estr;
var lxw = 0;
var game;
var gameString = window.location.search;
var urlParams = new URLSearchParams(gameString);
var str_url,str_win,w,i,n,v1,v2,v3,v4,win_ult;
var sum,sum2,sum3,sum4,ctsem2,ctsem3,ctsem4,tpsem1,tpsem2,tpsem3,tpsem4;
var ctsem1 = [0];
var ctsem2 = [0];
var ctsem3 = [0];
var ctsem4 = [0];
var vincitori = [0];
var maxsem1,maxsem2,maxsem3,maxsem4;
var win_provv;
var gamer;


function init() {
var r=0;
var y=0;
estr = 0;
var isFirefox = typeof InstallTrigger !== 'undefined';


riempi();  
do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img =="vuoto");    
document.images["plx1"].src = mazzo[r].img; // visualizzo la prima carte del giocatore reale
pl1[0].img=mazzo[r].img;       // inserisco, sul primo elemento dell'array contenente le
pl1[0].seme=mazzo[r].seme;     // carte del giocatore reale, la prima carta 
pl1[0].numero=mazzo[r].numero; // servita random dal mazzo.   
mazzo[r].img="vuoto";
   
do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img=="vuoto");   
document.images["plx2"].src = mazzo[r].img;
pl1card1 = { 
  seme: mazzo[r].seme,
  numero: mazzo[r].numero,
  img: mazzo[r].img
}
pl1.push(pl1card1);     
mazzo[r].img="vuoto";

do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img=="vuoto");     
document.images["plx3"].src = mazzo[r].img;
pl1card2 = { 
  seme: mazzo[r].seme,
  numero: mazzo[r].numero,  
  img: mazzo[r].img
}
pl1.push(pl1card2);     
mazzo[r].img="vuoto";

do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img=="vuoto");     
document.images["plx4"].src = mazzo[r].img;
pl1card3 = { 
  seme: mazzo[r].seme,
  numero: mazzo[r].numero,  
  img: mazzo[r].img
}
pl1.push(pl1card3);     
mazzo[r].img="vuoto";

// dopo aver ricevuto e memorizzato le 4 carte iniziali per il giocatore reale
// generiamo un array con le prime 4 carte degli altri giocatori 
// singolarmente gli elementi in prima posizione definiti di default, poi ciclo e push per gli altri
do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img =="vuoto");       
pl2[0].seme = mazzo[r].seme;
pl2[0].numero = mazzo[r].numero;
pl2[0].img = mazzo[r].img;
pl2[0].scartato ='N';        
mazzo[r].img = "vuoto";

do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img =="vuoto");        
pl3[0].seme = mazzo[r].seme;
pl3[0].numero = mazzo[r].numero;
pl3[0].img = mazzo[r].img;  
pl3[0].scartato ='N';   
mazzo[r].img = "vuoto";      

do
r=[Math.floor(Math.random()*40)];
while (mazzo[r].img =="vuoto");         
pl4[0].seme = mazzo[r].seme;
pl4[0].numero = mazzo[r].numero;
pl4[0].img = mazzo[r].img;  
pl4[0].scartato ='N';    
mazzo[r].img = "vuoto";    

// adesso riempiamo le restanti 3 posizioni per completare le 4 carte servite di ogni giocatore
for(y=1;y<4;y++) {
    do
    r=[Math.floor(Math.random()*40)];
    while (mazzo[r].img =="vuoto");              
       pl2card = { 
        seme: mazzo[r].seme,
        numero: mazzo[r].numero,        
        img: mazzo[r].img,
        scartato : 'N'
      }
      pl2.push(pl2card); 
      mazzo[r].img = "vuoto" ;       
  }
  
  for(y=1;y<4;y++) {
    do
    r=[Math.floor(Math.random()*40)];
    while (mazzo[r].img =="vuoto");        
        pl3card = { 
        seme: mazzo[r].seme,
        numero: mazzo[r].numero,        
        img: mazzo[r].img,
        scartato : 'N'
      }
      pl3.push(pl3card); 
      mazzo[r].img = "vuoto" ;         
  } 

  for(y=1;y<4;y++) {
    do
    r=[Math.floor(Math.random()*40)];
    while (mazzo[r].img =="vuoto");            
        pl4card = { 
        seme: mazzo[r].seme,
        numero: mazzo[r].numero,        
        img: mazzo[r].img,
        scartato : 'N'
      }     
      pl4.push(pl4card); 
      mazzo[r].img = "vuoto" ;     
  } 

game = urlParams.get('game'); 

//alert (game);
//if ((isFirefox) && (window.matchMedia("(max-width: 1200px)").matches) && game==null) 
//     alert("Si consiglia l'uso con browser chrome e schermo orizzontale ")

//if ((!isFirefox) && (window.matchMedia("(max-width: 1200px)").matches) && game==null) 
//     alert("Si consiglia l'uso con schermo orizzontale ")     
//if ((window.matchMedia("(max-width: 1200px)").matches) && game==null)
//   alert("Si consiglia l'uso con schermo in posizione orizzontale ");

/*switch (game) {
  case null : document.images["round"].src = "img/prima2.jpg";   
             break;
  case '2'  : document.images["round"].src = "img/seconda.jpg";  
             break;
  case '3'  : document.images["round"].src = "img/terza.jpg";  
             break;
  case '4'  : document.images["round"].src = "img/quarta.jpg";  
             break;
} */

switch (game) {
  case null : document.getElementById("round").style.content = 'url("img/prima2.jpg")';   
             break;
  case '2'  : document.getElementById("round").style.content = 'url("img/seconda.jpg")';  
             break;
  case '3'  : document.getElementById("round").style.content = 'url("img/terza.jpg")'; 
             break;
  case '4'  : document.getElementById("round").style.content = 'url("img/quarta.jpg")';  
             break;
}

 /* console.log(mazzo);
  console.log(pl1);
  console.log(pl2);
  console.log(pl3);
  console.log(pl4);  */
}

// funzione per dichiarazione finale vincitore 
// (è presente anche su general ma l'import causava problemi )

function toggle(){
  var overlay = document.getElementById('overlay');
  if(overlay.style.display == "block"){
     overlay.style.display = "none";
     finestra.style.display = "none";
    } else {
             overlay.style.display = "block";
             finestra.style.display = "block";
           }
  }


function estrai(){
  var xr;
  var r=0; j=0;
  
if (lx<6) {
   // solo per il giocatore reale, l'estrazione e la sostituzione verranno gestite 
   // contemporaneamente, cosi facendo basterà un solo array di 4 carte già selezionate dall'utente.
   // Per gli altri player aggiungeremo invece le sei carte estratte di seguito alle 4 già ricevute
   // in apertura, sempre sullo stesso array, rimandando a dopo la selezione di 4 su 10. 

      do 
      xr=[Math.floor(Math.random()*40)];
      while (mazzo[xr].img == "vuoto");                          
      //document.images["youestraz"].src = mazzo[xr].img;    
      document.getElementById("youestraz").style.content = 'url('+mazzo[xr].img+')';  
      document.getElementById("youestraz").src = mazzo[xr].img;
      seed = mazzo[xr].seme;
      num=mazzo[xr].numero;
      mazzo[xr].img="vuoto";
  
      do 
      xr=[Math.floor(Math.random()*40)];
      while (mazzo[xr].img == "vuoto");
      // lascio le prime 4 posizioni alle 4 carte già servite, quindi accodo le estratte dalla 5 posizione
      pl2card = { 
        seme: mazzo[xr].seme,
        numero: mazzo[xr].numero,        
        img: mazzo[xr].img,
        scartato : ''
      }     
      pl2.push(pl2card); 
      mazzo[xr].img="vuoto"; 
      
      do 
      xr=[Math.floor(Math.random()*40)];
      while (mazzo[xr].img == "vuoto");
      // lascio le prime 4 posizioni alle 4 carte già servite, quindi accodo le estratte dalla 5 posizione
        pl3card = { 
        seme: mazzo[xr].seme,
        numero: mazzo[xr].numero,        
        img: mazzo[xr].img,
        scartato : ''
      }     
      pl3.push(pl3card); 
      mazzo[xr].img="vuoto"; 
  
      do 
      xr=[Math.floor(Math.random()*40)];
      while (mazzo[xr].img == "vuoto");
      // lascio le prime 4 posizioni alle 4 carte già servite, quindi accodo le estratte dalla 5 posizione
        pl4card = { 
        seme: mazzo[xr].seme,
        numero: mazzo[xr].numero,        
        img: mazzo[xr].img,
        scartato : ''
      }     
      pl4.push(pl4card); 
      mazzo[xr].img="vuoto"; 
      
      lx++;
  
    }
   else {
          avversari();
          if (estr == 0) {
             var pan=document.getElementById("panno");
             if (window.matchMedia("(max-width: 1200px)").matches) {
             if (window.matchMedia("(max-width: 1200px) and (orientation: portrait)").matches) 
                 pan.style.backgroundImage = "url('img/panno-portrait-completa.png')";
            else if (window.matchMedia("(max-width: 1200px) and (orientation: landscape)").matches)    
                 pan.style.backgroundImage = "url('img/panno-verde4s.jpg')"; 
             }   			       			                               
             else 
				 pan.style.backgroundImage = "url('img/panno-verde4.jpg')";            
             //alert ("Estrazione completa! Scoprire la Win-card ");               
             estr = estr + 1;
          }     
          if (estr > 0) {             
             trova_win(); 
             estr = estr+1;            
          }
    
      //console.log(pl2);
      //console.log(pl3);
      //console.log(pl4); 
   }
   
  }

// funzione lampeggio carte vincenti
var b=true;
function MyBlink() {
  var ref=document.getElementById(gamer);
  switch (gamer) {
    case "youtd" : if (b) {                     
                    document.images["plx1"].style.border="6px solid #ffd700";
                    document.images["plx2"].style.border="6px solid #ffd700";
                    document.images["plx3"].style.border="6px solid #ffd700";
                    document.images["plx4"].style.border="6px solid #ffd700";   
                     }
                    else {
                      document.images["plx1"].style.border="6px solid #009500";
                      document.images["plx2"].style.border="6px solid #009500";
                      document.images["plx3"].style.border="6px solid #009500";
                      document.images["plx4"].style.border="6px solid #009500";                       
                    } 
                   break;
    case "lgtd"  : if (b) {                     
                      document.images["pl2_1"].style.border="6px solid #ffd700";
                      document.images["pl2_2"].style.border="6px solid #ffd700";
                      document.images["pl2_3"].style.border="6px solid #ffd700";
                      document.images["pl2_4"].style.border="6px solid #ffd700";   
                      }
                      else {
                        document.images["pl2_1"].style.border="6px solid #009500";
                        document.images["pl2_2"].style.border="6px solid #009500";
                        document.images["pl2_3"].style.border="6px solid #009500";
                        document.images["pl2_4"].style.border="6px solid #009500";                       
                      } 
                   break;
    case "gutd"  : if (b) {                     
                        document.images["pl3_1"].style.border="6px solid #ffd700";
                        document.images["pl3_2"].style.border="6px solid #ffd700";
                        document.images["pl3_3"].style.border="6px solid #ffd700";
                        document.images["pl3_4"].style.border="6px solid #ffd700";   
                        }
                        else {
                          document.images["pl3_1"].style.border="6px solid #009500";
                          document.images["pl3_2"].style.border="6px solid #009500";
                          document.images["pl3_3"].style.border="6px solid #009500";
                          document.images["pl3_4"].style.border="6px solid #009500";                       
                        } 
                   break;
    case "rgtd"  : if (b) {                     
                        document.images["pl4_1"].style.border="6px solid #ffd700";
                        document.images["pl4_2"].style.border="6px solid #ffd700";
                        document.images["pl4_3"].style.border="6px solid #ffd700";
                        document.images["pl4_4"].style.border="6px solid #ffd700";   
                        }
                        else {
                          document.images["pl4_1"].style.border="6px solid #009500";
                          document.images["pl4_2"].style.border="6px solid #009500";
                          document.images["pl4_3"].style.border="6px solid #009500";
                          document.images["pl4_4"].style.border="6px solid #009500";                       
                        } 
                   break;
    
    }

  b=!b;
  window.setTimeout("MyBlink()",1000);
  }  

function sostituzione(n)
  {
   var str,ind,sos;
   
    switch (n){
      case 1 :  sos = document.getElementById("youestraz").style.content;
                str = document.images["youestraz"].src;                
                ind = str.length-5;                               
                if ((str.charAt(ind) !='d') && (str.charAt(ind)!='k') && (str.charAt(ind)!='') && (sos != 'url("js/img/nullcard.gif")'))             
                { 
                  document.images["plx1"].src = document.images["youestraz"].src;
                  pl1[0].img=document.images["youestraz"].src;                  
                  pl1[0].seme = seed;
                  pl1[0].numero = num;
                  //document.images["youestraz"].src = "js/img/nullcard.gif";
                  document.getElementById("youestraz").style.content = 'url("js/img/nullcard.gif")';                                    
                }
                break;

      case 2 :    sos = document.getElementById("youestraz").style.content;  
                  str = document.images["youestraz"].src;
                  ind = str.length-5;                
                  if ((str.charAt(ind) !='d') && (str.charAt(ind)!='k') && (str.charAt(ind)!='') && (sos != 'url("js/img/nullcard.gif")'))               
                  { 
                    document.images["plx2"].src = document.images["youestraz"].src;
                    pl1[1].img=document.images["youestraz"].src;
                    pl1[1].seme = seed;
                    pl1[1].numero = num;
                  //document.images["youestraz"].src = "js/img/nullcard.gif";
                  document.getElementById("youestraz").style.content = 'url("js/img/nullcard.gif")';
                  }
                break;

      case 3 :    sos = document.getElementById("youestraz").style.content;  
                  str = document.images["youestraz"].src;
                  ind = str.length-5;                
                  if ((str.charAt(ind) !='d') && (str.charAt(ind)!='k') && (str.charAt(ind)!='') && (sos != 'url("js/img/nullcard.gif")'))               
                  { 
                    document.images["plx3"].src = document.images["youestraz"].src;
                    pl1[2].img=document.images["youestraz"].src;
                    pl1[2].seme = seed;
                    pl1[2].numero = num;
                    //document.images["youestraz"].src = "js/img/nullcard.gif";
                    document.getElementById("youestraz").style.content = 'url("js/img/nullcard.gif")';
                  }
                break;

      case 4 :    sos = document.getElementById("youestraz").style.content;  
                  str = document.images["youestraz"].src;
                  ind = str.length-5;                
                  if ((str.charAt(ind) !='d') && (str.charAt(ind)!='k') && (str.charAt(ind)!='') && (sos != 'url("js/img/nullcard.gif")'))               
                  { 
                    document.images["plx4"].src = document.images["youestraz"].src;
                    pl1[3].img=document.images["youestraz"].src;
                    pl1[3].seme = seed;
                    pl1[3].numero = num;
                    //document.images["youestraz"].src = "js/img/nullcard.gif";
                    document.getElementById("youestraz").style.content = 'url("js/img/nullcard.gif")';
                  }
                break;
       
    }
    // console.log(pl1);  
    
  }

function avversari(){ 
  var idmax,idmin,som,scart,mod,pl;
var appo = { 
  seme: '',
  numero: 0,        
  img: '',
  scartato : ''
}

idmax=0;
idmin=0;
pl=0;

// iniziamo con pl2
scart=0;
//alert("pl2 iniziale");
//console.log(pl2);
som=0;

while (((som>19)||(som<10)) && (scart<6) ){
  scart++;
  
  mod='';
  som=0;
  idmax=0;
  idmin=0;
  for (j=0;j<4;j++){
    som=som+pl2[j].numero;    
  }
  //alert("somma delle prime 4 carte pl2");
  //alert(som);
// trova il massimo fra le prime 4 carte e lo scambio col minimo delle altre sei carte se
// la somma è maggiore di 19. Procedimento inverso se la somma è inferiore a 10
  if (som>19) { 
     mod='mag';
     pl=2;
     idmax=cercamax(pl,mod);     
     idmin=cercamin(pl,mod);
     //alert('mod '+mod);
     //alert('pl '+pl);     
     //alert('idmax '+idmax);     
     //alert('idmin '+idmin);     
     // scambio elementi
     appo=pl2[idmax];
     //alert("appo");
     //console.log(appo);
     pl2[idmax]=pl2[idmin];
     pl2[idmax].scartato ='N';
     //alert("pl2[idmax]");
     //console.log(pl2[idmax]);
     pl2[idmin]=appo;  
     pl2[idmin].scartato='S';  
     //alert("pl2[idmin]");
     //console.log(pl2[idmin]);   
  }
  else if (som<10){
     mod='min';
     pl=2;
     idmax=cercamax(pl,mod); // id 7 (carta 9)
     idmin=cercamin(pl,mod); // id 2 (carta 1)
     // scambio elementi 
     appo=pl2[idmin];     
     pl2[idmin]=pl2[idmax];  
     pl2[idmin].scartato ='N';   
     pl2[idmax]=appo;       
     pl2[idmax].scartato='S';     
  }
 }

// pl3
idmax=0;
idmin=0;
pl=0;
scart=0;
som=0;


while (((som>19)||(som<10)) && (scart<6) ){
scart++;

mod='';
som=0;
idmax=0;
idmin=0;

for (j=0;j<4;j++){
  som=som+pl3[j].numero;    
}
// trova il massimo fra le prime 4 carte e lo scambio col minimo delle altre sei carte se
// la somma è maggiore di 19. Procedimento inverso se la somma è inferiore a 10

if (som>19) { 
   mod='mag';
   pl=3;
   idmax=cercamax(pl,mod);
   idmin=cercamin(pl,mod);
   // scambio elementi
   appo=pl3[idmax];
   pl3[idmax]=pl3[idmin];
   pl3[idmax].scartato ='N';
   pl3[idmin]=appo;  
   pl3[idmin].scartato='S';
 }
else if (som<10){
   mod='min';
   pl=3;
   idmax=cercamax(pl,mod);
   idmin=cercamin(pl,mod);     
   // scambio elementi 
   appo=pl3[idmin];
   pl3[idmin]=pl3[idmax];
   pl3[idmin].scartato ='N';
   pl3[idmax]=appo;  
   pl3[idmax].scartato='S';
 }
}

// pl4
idmax=0;
idmin=0;
pl=0;
scart=0;
som=0;


while (((som>19)||(som<10)) && (scart<6) ){
scart++;

mod='';
som=0;
idmax=0;
idmin=0;

for (j=0;j<4;j++){
  som=som+pl4[j].numero;    
}

// trova il massimo fra le prime 4 carte e lo scambio col minimo delle altre sei carte se
// la somma è maggiore di 19. Procedimento inverso se la somma è inferiore a 10
if (som>19) { 
   mod='mag';
   pl=4;
   idmax=cercamax(pl,mod);
   idmin=cercamin(pl,mod);
   // scambio elementi
   appo=pl4[idmax];
   pl4[idmax]=pl4[idmin];
   pl4[idmax].scartato ='N';
   pl4[idmin]=appo;  
   pl4[idmin].scartato='S';
  }
else if (som<10){
   mod='min';
   pl=4;
   idmax=cercamax(pl,mod);
   idmin=cercamin(pl,mod);        
   // scambio elementi 
   appo=pl4[idmin];
   pl4[idmin]=pl4[idmax];
   pl4[idmin].scartato ='N';
   pl4[idmax]=appo;  
   pl4[idmax].scartato='S';
 }
}

}

function scopri_avversari(){
  document.images["pl2_1"].src =pl2[0].img;
  document.images["pl2_2"].src =pl2[1].img;
  document.images["pl2_3"].src =pl2[2].img;
  document.images["pl2_4"].src =pl2[3].img;
  document.images["pl3_1"].src =pl3[0].img;
  document.images["pl3_2"].src =pl3[1].img;
  document.images["pl3_3"].src =pl3[2].img;
  document.images["pl3_4"].src =pl3[3].img;
  document.images["pl4_1"].src =pl4[0].img;
  document.images["pl4_2"].src =pl4[1].img;
  document.images["pl4_3"].src =pl4[2].img;
  document.images["pl4_4"].src =pl4[3].img;
  
}
function aggiorna_punteggio(){
  var ix;
  sum=0;sum2=0;sum3=0;sum4=0;
  tpsem1='';tpsem2='';tpsem3='';tpsem4=''; 
  maxsem1=1;maxsem2=1;maxsem3=1;maxsem4=1;
  //sono stringhe di 8 caratteri, ogni 2 posizioni concateno i primi due caratteri del seme
  //per ogni carta dei giocatori. Servira' solo nel caso di parità di punteggio e di parità
  //di numero carte dello stesso seme. (1 Cuori- 2 Quadri- 3 Fiori-4 Picche)
  
  for (ix=0;ix<4;ix++) {
      sum=sum+pl1[ix].numero;  
      tpsem1 = tpsem1+pl1[ix].seme.substr(0,2)+'-';  
      //alert(tpsem1);                    
      }
  //alert(sum);
      
  ctsem1[0]=tpsem1.split("cu").length - 1; // posizione fissa da 0-cuori a 3-picche
  ctsem1[1]=tpsem1.split("qu").length - 1;
  ctsem1[2]=tpsem1.split("fi").length - 1;
  ctsem1[3]=tpsem1.split("pi").length - 1;
  // questi array saranno del tipo "0-2-1-0" ovvero "0 cuori-2 quadri-1 fiori-0 picche"
var sem1=0; var sem2=0; var sem3=0; var sem4=0;
  
  for(ix=0;ix<4;ix++) {
     if (ctsem1[ix]>maxsem1)
        maxsem1 = ctsem1[ix];
        sem1 = ix; // qui salviamo la posizione per sapere qual'è il seme con più carte
  }
  //alert(maxsem1);
  document.getElementById("YOU").innerHTML = sum.toString()
  
  for (ix=0;ix<4;ix++) {
    sum2=sum2+pl2[ix].numero;  
    tpsem2 = tpsem2+pl2[ix].seme.substr(0,2)+'-';  
    //alert(tpsem2);                    
    }
//alert(sum2);
    
  ctsem2[0]=tpsem2.split("cu").length - 1; // posizione fissa da 0-cuori a 3-picche
  ctsem2[1]=tpsem2.split("qu").length - 1;
  ctsem2[2]=tpsem2.split("fi").length - 1;
  ctsem2[3]=tpsem2.split("pi").length - 1;
  
  for(ix=0;ix<4;ix++) {
   if (ctsem2[ix]>maxsem2)
      maxsem2 = ctsem2[ix];
      sem2 = ix;
  }
  //alert(maxsem2);
  document.getElementById("LG").innerHTML = '&beta;eta '+sum2.toString();
  
  
  for (ix=0;ix<4;ix++) {
    sum3=sum3+pl3[ix].numero;  
    tpsem3 = tpsem3+pl3[ix].seme.substr(0,2)+'-';  
    //alert(tpsem3);                    
    }
//alert(sum3);    
    
  ctsem3[0]=tpsem3.split("cu").length - 1; // posizione fissa da 0-cuori a 3-picche
  ctsem3[1]=tpsem3.split("qu").length - 1;
  ctsem3[2]=tpsem3.split("fi").length - 1;
  ctsem3[3]=tpsem3.split("pi").length - 1;
  
  for(ix=0;ix<4;ix++) {
   if (ctsem3[ix]>maxsem3)
      maxsem3 = ctsem3[ix];
      sem3 = ix;
  }
//alert(maxsem3);  
document.getElementById("GU").innerHTML = '&lambda;amda '+sum3.toString();
  
  for (ix=0;ix<4;ix++) {
    sum4=sum4+pl4[ix].numero;  
    tpsem4 = tpsem4+pl4[ix].seme.substr(0,2)+'-';  
    //alert(tpsem4);                    
    }
//alert(sum4);    
    
  ctsem4[0]=tpsem4.split("cu").length - 1; // posizione fissa da 0-cuori a 3-picche
  ctsem4[1]=tpsem4.split("qu").length - 1;
  ctsem4[2]=tpsem4.split("fi").length - 1;
  ctsem4[3]=tpsem4.split("pi").length - 1;
  
  for(ix=0;ix<4;ix++) {
   if (ctsem4[ix]>maxsem4)
      maxsem4 = ctsem4[ix];
      sem4 = ix;
  }
//alert(maxsem4);
document.getElementById("RG").innerHTML = '&delta;elta '+sum4.toString();

//alert(document.images["mazzo"].src);
//console.log(document.images["mazzo"].src);

//var win_ext = document.images["mazzo"].src;
var win_ext = document.getElementById("mazzos").style.content;

if (win_ext.includes("dispari")) { 

   if ((sum<20) && (sum>9)) {        
      if (sum%2 == 1) // non serve conversione, mostra sum su html                          
          document.getElementById("YOU").innerHTML = sum.toString();                                        
        else if (sum%2 == 0) { // converti il valore e poi mostralo su htm                                        
               if (sum==18) 
                  sum=9;  
                else if (sum==16) 
                  sum=7;  		  
                else if (sum==14)
                  sum=5;	
                else if (sum==12)
                  sum=3;	
                else if (sum==10)
                  sum=1;                               
               document.getElementById("YOU").innerHTML = sum.toString();                                                           
             }
        }     
          else document.getElementById("YOU").innerHTML = "Offside! " +sum.toString();

    if ((sum2<20) && (sum2>9)) {         
          if (sum2%2 == 1) // non serve conversione, mostra sum2 su html                          
              document.getElementById("LG").innerHTML = '&beta;eta '+sum2.toString();                                        
            else if (sum2%2 == 0) { // converti il valore e poi mostralo su htm                                       
              if (sum2==18) 
                  sum2=9;  
                else if (sum2==16) 
                  sum2=7;  		  
                else if (sum2==14)
                  sum2=5;	
                else if (sum2==12)
                  sum2=3;	
                else if (sum2==10)
                  sum2=1;                        
                document.getElementById("LG").innerHTML = '&beta;eta '+sum2.toString();                                                           
                 }
              }     
              else document.getElementById("LG").innerHTML = "Offside! "+sum2.toString();    

    if ((sum3<20) && (sum3>9)) {  
      if (sum3%2 == 1) // non serve conversione, mostra sum3 su html                          
          document.getElementById("GU").innerHTML = '&lambda;amda '+sum3.toString();                                        
        else if (sum3%2 == 0) { // converti il valore e poi mostralo su htm                                   
          if (sum3==18) 
              sum3=9;  
            else if (sum3==16) 
              sum3=7;  		  
            else if (sum3==14)
              sum3=5;	
            else if (sum3==12)
              sum3=3;	
            else if (sum3==10)
              sum3=1;                   
            document.getElementById("GU").innerHTML = '&lambda;amda '+sum3.toString();                                                           
              }
        }     
          else document.getElementById("GU").innerHTML = "Offside! " +sum3.toString();

    if ((sum4<20) && (sum4>9)) {  
      if (sum4%2 == 1) // non serve conversione, mostra sum4 su html                          
          document.getElementById("RG").innerHTML = '&delta;elta '+sum4.toString();                                        
        else if (sum4%2 == 0) { // converti il valore e poi mostralo su htm                                 
          if (sum4==18) 
              sum4=9;  
            else if (sum4==16) 
              sum4=7;  		  
            else if (sum4==14)
              sum4=5;	
            else if (sum4==12)
              sum4=3;	
            else if (sum4==10)
              sum4=1;                                                                                         
            document.getElementById("RG").innerHTML = '&delta;elta '+sum4.toString();                                                           
              }
         }     
          else document.getElementById("RG").innerHTML = "Offside! " +sum4.toString();           

       } // finita conversione nel caso di dispari, ripetere per pari 
else {
  if ((sum<20) && (sum>9)) {        
    if (sum%2 == 0) // non serve conversione, mostra sum su html                          
        document.getElementById("YOU").innerHTML = sum.toString();                                        
      else if (sum%2 == 1) { // converti il valore e poi mostralo su htm                                        
             if (sum==19) 
                sum=10;  
              else if (sum==17) 
                sum=8;  		  
              else if (sum==15)
                sum=6;	
              else if (sum==13)
                sum=4;	
              else if (sum==11)
                sum=2;                               
             document.getElementById("YOU").innerHTML = sum.toString();                                                           
           }
      }     
        else document.getElementById("YOU").innerHTML = "Offside! " +sum.toString();

  if ((sum2<20) && (sum2>9)) {         
        if (sum2%2 == 0) // non serve conversione, mostra sum2 su html                          
            document.getElementById("LG").innerHTML = '&beta;eta '+sum2.toString();                                        
          else if (sum2%2 == 1) { // converti il valore e poi mostralo su htm                                       
            if (sum2==19) 
                sum2=10;  
              else if (sum2==17) 
                sum2=8;  		  
              else if (sum2==15)
                sum2=6;	
              else if (sum2==13)
                sum2=4;	
              else if (sum2==11)
                sum2=2;                        
              document.getElementById("LG").innerHTML = '&beta;eta '+sum2.toString();                                                           
               }
            }     
            else document.getElementById("LG").innerHTML = "Offside! "+sum2.toString();    

  if ((sum3<20) && (sum3>9)) {  
    if (sum3%2 == 0) // non serve conversione, mostra sum3 su html                          
        document.getElementById("GU").innerHTML = '&lambda;amda '+sum3.toString();                                        
      else if (sum3%2 == 1) { // converti il valore e poi mostralo su htm                                   
        if (sum3==19) 
            sum3=10;  
          else if (sum3==17) 
            sum3=8;  		  
          else if (sum3==15)
            sum3=6;	
          else if (sum3==13)
            sum3=4;	
          else if (sum3==11)
            sum3=2;                   
          document.getElementById("GU").innerHTML = '&lambda;amda '+sum3.toString();                                                           
            }
      }     
        else document.getElementById("GU").innerHTML = "Offside! " +sum3.toString();

  if ((sum4<20) && (sum4>9)) {  
    if (sum4%2 == 0) // non serve conversione, mostra sum4 su html                          
        document.getElementById("RG").innerHTML = '&delta;elta '+sum4.toString();                                        
      else if (sum4%2 == 1) { // converti il valore e poi mostralo su htm                                 
        if (sum4==19) 
            sum4=10;  
          else if (sum4==17) 
            sum4=8;  		  
          else if (sum4==15)
            sum4=6;	
          else if (sum4==13)
            sum4=4;	
          else if (sum4==11)
            sum4=2;                                                                                         
          document.getElementById("RG").innerHTML = '&delta;elta '+sum4.toString();                                                           
            }
       }     
        else document.getElementById("RG").innerHTML = "Offside! " +sum4.toString(); 
}      

// Decretare il vincitore della singola partita
var w_basalt = 0;
var totsem = [0]; var posem=[0]; var ib=0; var ibx=0; var ibu=0;
// la corrispondenza con il massimo per seme di ogni giocatore
totsem[0]=maxsem1;totsem[1]=maxsem2;totsem[2]=maxsem3;totsem[3]=maxsem4;
//la posizione in cui i giocatori hanno il seme maggiore con l'ordine 0-cuori..3-picche
posem[0]=sem1;posem[1]=sem2;posem[2]=sem3;posem[3]=sem4;

if (win_ext.includes("paribas")) { 
  var bassi = [0];  var piubasso=0; 
  // carico la somma carte dei giocatori su un array
  bassi[1]=sum2;bassi[2]=sum3;bassi[3]=sum4;
  if (sum<20)
      bassi[0]=sum;
  else 
      bassi[0]=41; 

  // primo ciclo trovo il minore
  piubasso=bassi[0];
  ibx = 0;
  for (ib=1;ib<=3;ib++){  
      if ((bassi[ib]<piubasso)&&(bassi[ib]<20)) {
        piubasso=bassi[ib]; 
        ibx = ib ; // in questo modo devo cercare valori uguali a partire da questo ib 
      }
    }
  
    // secondo ciclo trovo eventuali valori uguali
  if (ibx<3) {  // se il più basso non è l'ultimo elemento
     w_basalt = ibx ; 
     for(ibu=ibx+1;ibu<=3;ibu++) {
          //alert("ibu");alert(ibu);alert("ibx");alert(ibx);
          if(bassi[ibu]==bassi[ibx]) {
            /*alert("dentro uguaflianza");
            alert("bassi[ibu]");alert(bassi[ibu]);
            alert("bassi[ibx]");alert(bassi[ibx]); */
            if (totsem[ibu]>totsem[ibx]){ // vedo chi ha maxsem corrispondente maggiore 
               w_basalt = ibu;
               ibx = ibu; // aggiornare anche l'indice iniziale altrimenti eleme di confronto non avanza
              }  
             else if (totsem[ibu]<totsem[ibx])
                      w_basalt = ibx; 
                    else if (totsem[ibu]==totsem[ibx]) {
                        // resta solo caso se sono uguali pure i maxsem
                        // trova chi ha il valore più piccolo (da cuori in su) sulle var sem
                           if (posem[ibu]<posem[ibx]) {
                               w_basalt = ibu;
                               ibx = ibu; // come sopra
                              } 
                          else if (posem[ibu]>posem[ibx])  
                                  w_basalt = ibx;
                      // e infine se fosse uguale anche il seme su cui i due confrontati di
                      // turno hanno lo stesso numero di carte, vincerebbe il primo trovato
                      // cioè ibx (in ordine di guest)              
                      }  
          }
           else w_basalt = ibx;             
         } // fine ciclo
    }
   else w_basalt = ibx;  // il più basso era l'ultimo elemento       
 } // fine caso bassi       
else if (win_ext.includes("parial")) { 
var alti = [0]; var piualto=0;
// carico la somma carte dei giocatori su un array
alti[0]=sum;alti[1]=sum2;alti[2]=sum3;alti[3]=sum4;
if (sum<20)
      alti[0]=sum;
  else 
      alti[0]=1; 

    // primo ciclo trovo il maggiore
    piualto=alti[0];
    ibx = 0;
    for (ib=1;ib<=3;ib++){  
        if ((alti[ib]>piualto)&&(alti[ib]<20)) {
          piualto=alti[ib]; 
          ibx = ib ; // in questo modo devo cercare valori uguali a partire da questo ib 
        }
      }
    
      // secondo ciclo trovo eventuali valori uguali
    if (ibx<3) {  // se il più alto non è l'ultimo elemento
       w_basalt = ibx ; 
       for(ibu=ibx+1;ibu<=3;ibu++) {
            //alert("ibu");alert(ibu);alert("ibx");alert(ibx);
            if(alti[ibu]==alti[ibx]) {
              /*alert("dentro uguaflianza");
              alert("alti[ibu]");alert(alti[ibu]);
              alert("alti[ibx]");alert(alti[ibx]); */
              if (totsem[ibu]>totsem[ibx]){ // vedo chi ha maxsem corrispondente maggiore 
                 w_basalt = ibu;
                 ibx = ibu; // aggiornare anche l'indice iniziale altrimenti elem di confronto non avanza
                }  
               else if (totsem[ibu]<totsem[ibx])
                        w_basalt = ibx; 
                      else if (totsem[ibu]==totsem[ibx]) {
                          // resta solo caso se sono uguali pure i maxsem
                          // trova chi ha il valore più piccolo (da cuori in su) sulle var sem
                             if (posem[ibu]<posem[ibx]) {
                                 w_basalt = ibu;
                                 ibx = ibu; // come sopra
                                } 
                            else if (posem[ibu]>posem[ibx])  
                                    w_basalt = ibx;
                        // e infine se fosse uguale anche il seme su cui i due confrontati di
                        // turno hanno lo stesso numero di carte, vincerebbe il primo trovato
                        // cioè ibx (in ordine di guest)              
                        }  
            }
             else w_basalt = ibx;             
           } // fine ciclo
      }
     else w_basalt = ibx;  // il più alto era l'ultimo elemento       
   } // fine caso alti    
//alert(w_basalt);

// per avere conferma che il valore scelto come vincitore non sia offside
// 1 e 41 sono assegnati sopra per convenzione quando si ricerca il punteggio migliore

//str_win = "&v1=0&v2=0&v3=0&v4=0";
v1='0';v2='0';v3='0';v4='0';

if ((piubasso != 41 ) && ( piualto != 1)) // basta una delle condizioni 
{ 

 switch(w_basalt) {
    case 0 : //alert("Il vincitore sei tu !");
            document.getElementById("YOU").innerHTML = 'winner '+sum.toString();
            gamer = "youtd";
            // aggiungere parametro a str_url che memorizza tutti i vincitori
            v1 = urlParams.get('v1');              
            switch(game) {
              case '1' : str_win = "&v1=1&v2=0&v3=0&v4=0";                          
                       break;
              case '2' : if (v1=='1') 
                          str_win = "&v1=2&v2=0&v3=0&v4=0";                                                  
                        else  
                          str_win = "&v1=1"+gameString.substr(16,15); // non so chi aveva vinto al game1 quindi devo utilizzare gamestring                                                           
                       break;
              case '3' : if (v1=='1') 
                             str_win = "&v1=2"+gameString.substr(20,15);                                       
                        else if (v1=='2')  
                                str_win = "&v1=3"+gameString.substr(20,15);                                
                              else  
                                str_win = "&v1=1"+gameString.substr(20,15); // prima volta che vince 
                                    
                       break;
              case '4' : 
                        v4 = urlParams.get('v4');
                        v4 = parseInt(v4);
                        v2 = urlParams.get('v2');
                        v2 = parseInt(v2);
                        v3 = urlParams.get('v3');
                        v3 = parseInt(v3);                                     
                        v1 = urlParams.get('v1');
                        v1 = parseInt(v1);
                        v1 = v1+1;
                        //vincitori[3]=v1;
                        win_ult='v1';  
                        proclama_win();                                    
                       break;               
              } 
            //alert(str_win);
            //alert(v1);
            MyBlink(); 
            break;
    case 1 : //alert('Il vincitore è West');
            document.getElementById("LG").innerHTML = 'winner '+sum2.toString();
            gamer = "lgtd";
            v2 = urlParams.get('v2');              
            switch(game) {
              case '1' : str_win = "&v1=0&v2=1&v3=0&v4=0"; 
                       break;
              case '2' : if (v2=='1')
                          str_win = "&v1=0&v2=2&v3=0&v4=0";
                        else str_win = gameString.substr(11,5)+"&v2=1"+gameString.substr(21,10); // non so chi aveva vinto al game1 quindi devo utilizzare gamestring
                        break;
              case '3' : if (v2=='1')
                          str_win = gameString.substr(15,5)+"&v2=2"+gameString.substr(25,10);           
                        else if (v2=='2')  
                                str_win = gameString.substr(15,5)+"&v2=3"+gameString.substr(25,10);
                              else str_win = gameString.substr(15,5)+"&v2=1"+gameString.substr(25,10); // prima volta che vince 
                       break;
              case '4' : 
                        v1 = urlParams.get('v1');
                        v1 = parseInt(v1);
                        v4 = urlParams.get('v4');
                        v4 = parseInt(v4);
                        v3 = urlParams.get('v3');
                        v3 = parseInt(v3);
                        v2 = urlParams.get('v2');
                        v2 = parseInt(v2);
                        v2 = v2+1;
                        //vincitori[3]=v2;
                        win_ult='v2'; 
                        proclama_win();
                       break;               
              } 
            //alert(str_win); 
            //alert(v2);
            MyBlink();            
            break;
    case 2 : //alert('il vincitore è North');
            document.getElementById("GU").innerHTML = 'winner '+sum3.toString();
            gamer = "gutd";    
            v3 = urlParams.get('v3');              
            switch(game) {
              case '1' : str_win = "&v1=0&v2=0&v3=1&v4=0"; 
                       break;
              case '2' : if (v3=='1')
                          str_win = "&v1=0&v2=0&v3=2&v4=0";
                         else str_win = gameString.substr(11,10)+"&v3=1"+gameString.substr(26,5); // non so chi aveva vinto al game1 quindi devo utilizzare gamestring
                       break;
              case '3' : if (v3=='1')
                          str_win = gameString.substr(15,10)+"&v3=2"+gameString.substr(30,5);           
                        else if (v3=='2')  
                                str_win = gameString.substr(15,10)+"&v3=3"+gameString.substr(30,5);
                              else str_win = gameString.substr(15,10)+"&v3=1"+gameString.substr(30,5); // prima volta che vince 
                       break;
              case '4' : 
                        v1 = urlParams.get('v1');
                        v1 = parseInt(v1);
                        v2 = urlParams.get('v2');
                        v2 = parseInt(v2);
                        v4 = urlParams.get('v4');
                        v4 = parseInt(v4);
                        v3 = urlParams.get('v3');
                        v3 = parseInt(v3);
                        v3 = v3+1;  
                        //vincitori[3]=v3;
                        win_ult='v3';
                        proclama_win();            
                        break;               
              } 
            //alert(str_win);  
            //alert(v3);     
            MyBlink();
            break;
    case 3 : //alert('Il vincitore è East');              
            document.getElementById("RG").innerHTML = 'winner '+sum4.toString();
            gamer = "rgtd";   
            v4 = urlParams.get('v4');              
            switch(game) {
              case '1' : str_win = "&v1=0&v2=0&v3=0&v4=1"; 
                       break;
              case '2' : if (v4=='1')
                          str_win = "&v1=0&v2=0&v3=0&v4=2";
                        else str_win = gameString.substr(11,15)+"&v4=1"; // non so chi aveva vinto al game1 quindi devo utilizzare gamestring
                       break;
              case '3' : if (v4=='1')
                          str_win = gameString.substr(15,15)+"&v4=2";           
                        else if (v4=='2')  
                                str_win = gameString.substr(15,15)+"&v4=3"; 
                              else str_win = gameString.substr(15,15)+"&v4=1";  // prima volta che vince 
                       break;
              case '4' : 
                      v1 = urlParams.get('v1');
                      v1 = parseInt(v1);
                      v2 = urlParams.get('v2');
                      v2 = parseInt(v2);
                      v3 = urlParams.get('v3');
                      v3 = parseInt(v3);
                      v4 = urlParams.get('v4');
                      v4 = parseInt(v4);
                      v4 = v4+1;
                      //vincitori[3]=v4;
                      win_ult='v4'; 
                      proclama_win();
                       break;               
              } 
            //alert(str_win);  
            //alert(v4);        
            MyBlink();            
            break;

  }
  
}
else alert('NESSUN VINCITORE ! ');
// dopo aver pubblicato il punteggio di tutti i giocatori si procederà con la 
// proclamazione del vincitore mostrando al fianco un carattere (stellette o altro,
// oppure evidenziando/lampeggiando tutto il div di giallo o rosso)
// che dovrà comparire anche sulla successiva partita; per fare ciò aggiungere apposito
// parametro sulla str_url.                     

// IL GAMESTRING DEVE ESSERE RILETTO PER AGGIORNARE L'ULTIMO VALORE DELLE V
//v1 = urlParams.get('v1');v2 = urlParams.get('v2');v3 = urlParams.get('v3');v4 = urlParams.get('v4');
//alert('v1');alert(v1);alert('v2');alert(v2);alert('v3');alert(v3);alert('v4');alert(v4); 

}

function proclama_win() {
  var jw;

  //alert("dentro procla_win");
  //alert(win_ult);

  switch (win_ult) {
    case 'v1': vincitori[0] = v2;
      vincitori[1] = v3;
      vincitori[2] = v4;
      vincitori[3] = v1;
      var thewinner = vincitori[0];
      var iwin = 0;
      for (jw = 0; jw < 4; jw++) {
        if (vincitori[jw] >= thewinner){
          thewinner = vincitori[jw];
          iwin = jw;
        }
      }      
      switch (iwin) {
       case 0: toggle();//alert("VINCE IL GIOCO West");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &beta;eta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica2").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica3").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica4").innerHTML = '&alpha;lpha '+v1.toString();
    //document.getElementById("classifica").innerHTML = 'West '+sum2.toString();
          break;
       case 1: toggle();//alert("VINCE IL GIOCO North");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &lambda;amda !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica2").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica3").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica4").innerHTML = '&beta;eta '+v2.toString();
          break;
       case 2: toggle();//alert("VINCE IL GIOCO East");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &delta;elta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica2").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica3").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica4").innerHTML = '&lambda;amda '+v3.toString();
          break;
      case 3: toggle(); //alert("IL VINCITORE SEI TU !");
       document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &alpha;lpha !</strong> <br>';
       document.getElementById("classifica").innerHTML = 'Classifica finale'
       document.getElementById("classifica1").innerHTML = '&alpha;lpha '+v1.toString();
       document.getElementById("classifica2").innerHTML = '&beta;eta '+v2.toString();
       document.getElementById("classifica3").innerHTML = '&lambda;amda '+v3.toString();
       document.getElementById("classifica4").innerHTML = '&delta;elta '+v4.toString();
          break;
      }
      break;
    case 'v2': vincitori[0] = v3;
      vincitori[1] = v4;
      vincitori[2] = v1;
      vincitori[3] = v2;
      var thewinner = vincitori[0];
      var iwin = 0;
      for (jw = 0; jw < 4; jw++) {
        if (vincitori[jw] >= thewinner) {
          thewinner = vincitori[jw];
          iwin = jw;
        }
      }      
      switch (iwin) {
        case 0: toggle(); //alert("VINCE IL GIOCO North");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &lambda;amda !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica2").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica3").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica4").innerHTML = '&beta;eta '+v2.toString();
          break;
        case 1: toggle(); //alert("VINCE IL GIOCO East");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &delta;elta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica2").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica3").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica4").innerHTML = '&lambda;amda '+v3.toString();
          break;
        case 2: toggle(); //alert("IL VINCITORE SEI TU !");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &alpha;lpha !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica2").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica3").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica4").innerHTML = '&delta;elta '+v4.toString();
          break;
        case 3: toggle(); //alert("VINCE IL GIOCO West");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &beta;eta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica2").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica3").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica4").innerHTML = '&alpha;lpha '+v1.toString();
          break;
      }
      break;
    case 'v3': vincitori[0] = v4;
      vincitori[1] = v1;
      vincitori[2] = v2;
      vincitori[3] = v3;
      var thewinner = vincitori[0];
      var iwin = 0;
      for (jw = 0; jw < 4; jw++) {
        if (vincitori[jw] >= thewinner){
          thewinner = vincitori[jw];
          iwin = jw;
        }
      }      
      switch (iwin) {
        case 0: toggle(); //alert("VINCE IL GIOCO East");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &delta;elta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica2").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica3").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica4").innerHTML = '&lambda;amda '+v3.toString();
          break;
        case 1: toggle(); //alert("VIL VINCITORE SEI TU !");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &alpha;lpha !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica2").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica3").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica4").innerHTML = '&delta;elta '+v4.toString();
          break;
        case 2: toggle(); //alert("VINCE IL GIOCO West");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &beta;eta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica2").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica3").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica4").innerHTML = '&alpha;lpha '+v1.toString();
          break;
        case 3: toggle(); //alert("VINCE IL GIOCO North");
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &lambda;amda !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica2").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica3").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica4").innerHTML = '&beta;eta '+v2.toString();
          break;
      }
      break;
    case 'v4': vincitori[0] = v1;
      vincitori[1] = v2;
      vincitori[2] = v3;
      vincitori[3] = v4;
      var thewinner = vincitori[0];
      var iwin = 0;
      for (jw = 0; jw < 4; jw++) {
        if (vincitori[jw] >= thewinner){
          thewinner = vincitori[jw];
          iwin = jw;
        }
      }      
      switch (iwin) {
       case 0: toggle();
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &alpha;lpha !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica2").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica3").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica4").innerHTML = '&delta;elta '+v4.toString();
        //alert("IL VINCITORE SEI TU !");
          break;
       case 1: toggle(); 
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave;  &beta;eta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica2").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica3").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica4").innerHTML = '&alpha;lpha '+v1.toString();
        //alert("VINCE IL GIOCO West");
          break;
       case 2: toggle(); 
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &lambda;amda !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&lambda;amda '+v3.toString();
        document.getElementById("classifica2").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica3").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica4").innerHTML = '&beta;eta '+v2.toString();
        //alert("VINCE IL GIOCO North");
          break;
       case 3: toggle(); 
        document.getElementById("end").innerHTML = '<strong>Il vincitore &egrave; &delta;elta !</strong> <br>';
        document.getElementById("classifica").innerHTML = 'Classifica finale'
        document.getElementById("classifica1").innerHTML = '&delta;elta '+v4.toString();
        document.getElementById("classifica2").innerHTML = '&alpha;lpha '+v1.toString();
        document.getElementById("classifica3").innerHTML = '&beta;eta '+v2.toString();
        document.getElementById("classifica4").innerHTML = '&lambda;amda '+v3.toString();
        //alert("VINCE IL GIOCO East");
          break;
      }
      break;
  }

  // trovo il maggiore uguale in modo da assegnare la vittoria, in caso di parità,
  // a chi la ottenuta più recentemente, essendo le ultime partite quelle più importanti.
  // si privilegia, in caso di paritò, solo chi (nel caso) ha vinto l'ultima partita;
  // per il resto la logica sarà legata solo al maggiore uguale
 
}


function estrai_wincard(){
var on = 0;

w = urlParams.get('w');
if (w != null)
   {
     w = parseInt(w);
     //alert(w);
     maz_win[w].used ="S"; 
   }

i = urlParams.get('i');
if (i != null)
   {
     i = parseInt(i);
     //alert(i);
     maz_win[i].used ="S"; 
   }

// non c'è bisogno di mettere S sull'ultimo da estrarre e se proprio serve va fatto
//dopo il random e dopo document.images["mazzo"].src = maz_win[on].img; 
n = urlParams.get('n');
if (n != null)
   {
     n = parseInt(n);
     //alert(n);
     maz_win[n].used ="S"; 
   }  
           
     do     
     on=[Math.floor(Math.random()*4)];     
     while (maz_win[on].used =="S");     
     //document.images["mazzo"].src = maz_win[on].img; 
     console.log(maz_win[on]);    
     document.getElementById("mazzos").style.content = 'url('+maz_win[on].img+')';
     //'url(img/'+someimage+'.png)
        
     //alert(on);               
     console.log(maz_win);
     scopri_avversari();     
     game = urlParams.get('game'); // aggingere anche su init per assegnare il round 
     //str_url = "primoquadro.htm";
     if (window.matchMedia("(max-width: 1200px)").matches)
        str_url = "primoquadro2.htm";
    else
       str_url = "primoquadro.htm";         
        
     var restart = document.getElementById ( "logos");                              
     var evt = new Event("click");    
     var newpage = function(){
       
      if (window.matchMedia("(max-width: 1200px)").matches)  
           window.open(str_url,'_top');             
       else {
              window.open(str_url,'',"width="+screen.availWidth+",height="+screen.availHeight+"");                
              window.close();
            }

       evt.stopPropagation();                         
     }
     
     if (game == null)
        {
          game = '1';
          //maz_win[on].used ="S";
        } 
// game=numero partita da 1 a 4. W=vincitore seconda partita valore da 0 a 3 
// I=vincitore terza partita valore da 0 a 3 , N=vincitore quarta partita valore da 0 a 3 .   
// Il valore da 0 a 3 sarebbe la posizione su maz_win estratto a caso

var pn=document.getElementById("panno"); 
    if (window.matchMedia("(max-width: 1200px) and (orientation: portrait)").matches) 
       pn.style.backgroundImage = "url('img/panno-verde-portrait.jpg')";
    else
       pn.style.backgroundImage = "url('img/panno-verde2.jpg')";

      switch (game){
        case  '1' :                        
        if (on==0) {              
          scopri_avversari();
          aggiorna_punteggio();  
          str_url = str_url+"?game=2&w=0"+str_win;
          //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";                                                         
          restart.src = "img/restart.png";                 
          restart.addEventListener("click",newpage); 
          
            }
            else if (on==1) {                        
                  scopri_avversari();
                  aggiorna_punteggio();
                  str_url = str_url+"?game=2&w=1"+str_win;
                  //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                  restart.src = "img/restart.png";  
                  restart.addEventListener("click",newpage); 
                  
                  } 
            else if (on==2){                        
                  scopri_avversari();
                  aggiorna_punteggio();
                  str_url = str_url+"?game=2&w=2"+str_win;
                  //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                  restart.src = "img/restart.png";  
                  restart.addEventListener("click",newpage); 
                  
                  }
                else if (on==3) {                      
                  scopri_avversari();
                  aggiorna_punteggio();
                  str_url = str_url+"?game=2&w=3"+str_win;
                  //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                  restart.src = "img/restart.png";  
                  restart.addEventListener("click",newpage);
                  
                } 
          break;   
        case  '2' :   
        
        if (on==0) {                
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + "?game=3"+gameString.substr(7,4)+"&i=0"+str_win;
            //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
            restart.src = "img/restart.png";  
            restart.addEventListener("click",newpage); 
            }
            else if (on==1) {                     
                scopri_avversari();
                aggiorna_punteggio();
                str_url = str_url + "?game=3"+gameString.substr(7,4)+"&i=1"+str_win;
                //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                restart.src = "img/restart.png";  
                restart.addEventListener("click",newpage); 
              } 
            else if (on==2){                     
                scopri_avversari();
                aggiorna_punteggio();
                str_url = str_url + "?game=3"+gameString.substr(7,4)+"&i=2"+str_win;
                //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";  
                restart.src = "img/restart.png";  
                restart.addEventListener("click",newpage); 
              }
              else if (on==3){                        
                    scopri_avversari();
                    aggiorna_punteggio();
                    str_url = str_url + "?game=3"+gameString.substr(7,4)+"&i=3"+str_win;
                    //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                    restart.src = "img/restart.png";  
                    restart.addEventListener("click",newpage); 
                  }              
          break;
        case  '3' :   
        
        if (on==0) {                
            scopri_avversari();
            aggiorna_punteggio(3);
            str_url = str_url + "?game=4"+gameString.substr(7,8)+"&n=0"+str_win;
            //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";              
            restart.src = "img/restart.png";  
            restart.addEventListener("click",newpage); 
            }
            else if (on==1) {                     
                scopri_avversari();
                aggiorna_punteggio();
                str_url = str_url + "?game=4"+gameString.substr(7,8)+"&n=1"+str_win;
                //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                restart.src = "img/restart.png";  
                restart.addEventListener("click",newpage); 
              } 
            else if (on==2){                     
                scopri_avversari();
                aggiorna_punteggio();
                str_url = str_url + "?game=4"+gameString.substr(7,8)+"&n=2"+str_win;
                //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";  
                restart.src = "img/restart.png";  
                restart.addEventListener("click",newpage); 
              }
              else if (on==3){                        
                    scopri_avversari();
                    aggiorna_punteggio();
                    str_url = str_url + "?game=4"+gameString.substr(7,8)+"&n=3"+str_win;
                    //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
                    restart.src = "img/restart.png";  
                    restart.addEventListener("click",newpage); 
                  }                        
          break;
        case  '4' :              
        //alert ("Partita Completa!");   
        aggiorna_punteggio(); 
        //str_url = "primoquadro.htm";
        if (window.matchMedia("(max-width: 1200px)").matches)
           str_url = "primoquadro2.htm";
        else 
           str_url = "primoquadro.htm";           
        //pn.style.backgroundImage = "url('img/panno-verde2.jpg')";
        restart.src = "img/restart2.png";  
        restart.addEventListener("click",newpage); 
        break; 

     }   
}

/*function trova_win() {          
 
if (estr==1) 
   document.images["mazzo"].src = "img/retroRED.png";
else if (estr == 2)
   document.images["mazzo"].onclick = estrai_wincard();   
  
} */


function trova_win() {          
 var deck = document.getElementById("mazzos");

  if (estr==1)
     deck.style.content = "url('img/retroRED.png')";                                         
  else if (estr == 2)      
     deck.onclick = estrai_wincard();
    
  }

function cercamax(pl,mod){
var mx;
ind=0;
mx=0;
   
switch (pl) {

  case 2 :    
            if (mod=='mag') { // cerco il massimo dallo 0° al 3°
               mx=pl2[0].numero;
              for(k=0;k<4;k++) {
                if (mx<pl2[k].numero) {
                    mx=pl2[k].numero; 
                    ind=k;
                }
              }              
            } 

            if (mod =='min') {  // cerco il massimo dal 5° al 9°
               //alert('mod '+mod);
               mx=pl2[4].numero;
               ind=4;
               for(k=4;k<9;k++) {
               if (mx<pl2[k].numero){
                  mx=pl2[k].numero; 
                  ind=k;
                 }
                }   
              //alert('k'+k);
              //alert('ind errato'+ind);        
             }
            
             break;

  case 3 : if (mod=='mag') { // cerco il massimo dallo 0° al 3°
                mx=pl3[0].numero;
                for(k=0;k<4;k++) {
                  if (mx<pl3[k].numero) {
                      mx=pl3[k].numero; 
                      ind=k;
                  }
                }
              } 

            if (mod=='min') {  // cerco il massimo dal 5° al 9°
            mx=pl3[4].numero;
            ind=4;
            for(k=4;k<9;k++) {
              if (mx<pl3[k].numero){
                  mx=pl3[k].numero; 
                  ind=k;
                }
              }           
            }
           break;
  case 4 : if (mod == 'mag') { // cerco il massimo dallo 0° al 3°
                mx=pl4[0].numero;
                for(k=0;k<4;k++) {
                  if (mx<pl4[k].numero) {
                      mx=pl4[k].numero; 
                      ind=k;
                  }
                }
              } 

            if (mod == 'min') {  // cerco il massimo dal 5° al 9°
            mx=pl4[4].numero;
            ind=4;
            for(k=4;k<9;k++) {
              if (mx<pl4[k].numero){
                  mx=pl4[k].numero; 
                  ind=k;
                }
              }           
            }
           break;

   } // end switch     
   return ind; 
}

function cercamin(pl,mod) {
  var mn;
  ind=0;
  mn=0;
   
  switch (pl) {
  
    case pl=2 : if (mod == 'min') { // cerco il minimo dallo 0° al 3°
                mn=pl2[0].numero;
                for(k=0;k<4;k++) {
                  if (mn>pl2[k].numero) {
                      mn=pl2[k].numero; 
                      ind=k;
                  }
                }
              } 
  
            if (mod == 'mag') {  // cerco il minimo dal 5° al 9°
            mn=pl2[4].numero;
            ind=4;
            for(k=4;k<9;k++) {
              if (mn>pl2[k].numero){
                  mn=pl2[k].numero; 
                  ind=k;
                }
              }           
            }
             break;
    case pl=3 : if (mod == 'min') { // cerco il minimo dallo 0° al 3°
                  mn=pl3[0].numero;
                  for(k=0;k<4;k++) {
                    if (mn>pl3[k].numero) {
                        mn=pl3[k].numero; 
                        ind=k;
                    }
                  }
                } 
  
              if (mod == 'mag') {  // cerco il minimo dal 5° al 9°
              mn=pl3[4].numero;
              ind=4;
              for(k=4;k<9;k++) {
                if (mn>pl3[k].numero){
                    mn=pl3[k].numero; 
                    ind=k;
                  }
                }           
              }
             break;
    case pl=4 : if (mod == 'min') { // cerco il minimo dallo 0° al 3°
                  mn=pl4[0].numero;
                  for(k=0;k<4;k++) {
                    if (mn>pl4[k].numero) {
                        mn=pl4[k].numero; 
                        ind=k;
                    }
                  }
                } 
  
              if (mod == 'mag') {  // cerco il minimo dal 5° al 9°
              mn=pl4[4].numero;
              ind=4;
              for(k=4;k<9;k++) {
                if (mn>pl4[k].numero){
                    mn=pl4[k].numero; 
                    ind=k;
                  }
                }           
              }
             break;
  
     } // end switch     
    return ind; 
}

function riempi()
{
  // picche    
  card1 = {
    seme: 'picche',
    numero: 2,    
    img: 'js/img/dueP.GIF'
  }
  mazzo.push(card1);

  card2 = {
    seme: 'picche',
    numero: 3,    
    img: 'js/img/treP.GIF'
  }
  mazzo.push(card2);

   card3 = {
    seme: 'picche',
    numero: 4,    
    img: 'js/img/quattroP.GIF'
  }
  mazzo.push(card3);

   card4 = {
    seme: 'picche',
    numero: 5,    
    img: 'js/img/cinqueP.GIF'
  }
  mazzo.push(card4);

   card5 = {
    seme: 'picche',
    numero: 6,    
    img: 'js/img/seiP.GIF'
  }
  mazzo.push(card5);

   card6 = {
    seme: 'picche',
    numero: 7,    
    img: 'js/img/setteP.GIF'
  }
  mazzo.push(card6);

   card7 = {
    seme: 'picche',
    numero: 8,    
    img: 'js/img/ottoP.GIF'
  }
  mazzo.push(card7);

   card8 = {
    seme: 'picche',
    numero: 9,    
    img: 'js/img/noveP.GIF'
  }
  mazzo.push(card8);

   card9 = {
    seme: 'picche',
    numero: 10,    
    img: 'js/img/dieciP.GIF'
  }
  mazzo.push(card9);

  //fiori

   card10 = {
    seme: 'fiori',
    numero: 1,   
    img: 'js/img/unoF.GIF'
  }
  mazzo.push(card10);

   card11 = {
    seme: 'fiori',
    numero: 2,    
    img: 'js/img/dueF.GIF'
  }
  mazzo.push(card11);

   card12 = {
    seme: 'fiori',
    numero: 3,    
    img: 'js/img/treF.GIF'
  }
  mazzo.push(card12);

   card13 = {
    seme: 'fiori',
    numero: 4,    
    img: 'js/img/quattroF.GIF'
  }
  mazzo.push(card13);

   card14 = {
    seme: 'fiori',
    numero: 5,    
    img: 'js/img/cinqueF.GIF'
  }
  mazzo.push(card14);

   card15 = {
    seme: 'fiori',
    numero: 6,    
    img: 'js/img/seiF.GIF'
  }
  mazzo.push(card15);

   card16 = {
    seme: 'fiori',
    numero: 7,    
    img: 'js/img/setteF.GIF'
  }
  mazzo.push(card16);

   card17 = {
    seme: 'fiori',
    numero: 8,    
    img: 'js/img/ottoF.GIF'
  }
  mazzo.push(card17);

   card18 = {
    seme: 'fiori',
    numero: 9,    
    img: 'js/img/noveF.GIF'
  }
  mazzo.push(card18);

   card19 = {
    seme: 'fiori',
    numero: 10,    
    img: 'js/img/dieciF.GIF'
  }
  mazzo.push(card19);

  //quadri
   card20 = {
    seme: 'quadri',
    numero: 1,    
    img: 'js/img/unoQ.GIF'
  }
  mazzo.push(card20);

   card21 = {
    seme: 'quadri',
    numero: 2,    
    img: 'js/img/dueQ.GIF'
  }
  mazzo.push(card21);

   card22 = {
    seme: 'quadri',
    numero: 3,    
    img: 'js/img/treQ.GIF'
  }
  mazzo.push(card22);

   card23 = {
    seme: 'quadri',
    numero: 4,    
    img: 'js/img/quattroQ.GIF'
  }
  mazzo.push(card23);

   card24 = {
    seme: 'quadri',
    numero: 5,    
    img: 'js/img/cinqueQ.GIF'
  }
  mazzo.push(card24);

   card25 = {
    seme: 'quadri',
    numero: 6,   
    img: 'js/img/seiQ.GIF'
  }
  mazzo.push(card25);

   card26 = {
    seme: 'quadri',
    numero: 7,    
    img: 'js/img/setteQ.GIF'
  }
  mazzo.push(card26);

   card27 = {
    seme: 'quadri',
    numero: 8,   
    img: 'js/img/ottoQ.GIF'
  }
  mazzo.push(card27);

   card28 = {
    seme: 'quadri',
    numero: 9,    
    img: 'js/img/noveQ.GIF'
  }
  mazzo.push(card28);

   card29 = {
    seme: 'quadri',
    numero: 10,    
    img: 'js/img/dieciQ.GIF'
  }
  mazzo.push(card29);

//cuori
 card30 = {
  seme: 'cuori',
  numero: 1,  
  img: 'js/img/unoC.GIF'
}
mazzo.push(card30);

 card31 = {
  seme: 'cuori',
  numero: 2,  
  img: 'js/img/dueC.GIF'
}
mazzo.push(card31);

 card32 = {
  seme: 'cuori',
  numero: 3,  
  img: 'js/img/treC.GIF'
}
mazzo.push(card32);

 card33 = {
  seme: 'cuori',
  numero: 4,  
  img: 'js/img/quattroC.GIF'
}
mazzo.push(card33);

 card34 = {
  seme: 'cuori',
  numero: 5,  
  img: 'js/img/cinqueC.GIF'
}
mazzo.push(card34);

 card35 = {
  seme: 'cuori',
  numero: 6,  
  img: 'js/img/seiC.GIF'
}
mazzo.push(card35);

 card36 = {
  seme: 'cuori',
  numero: 7,  
  img: 'js/img/setteC.GIF'
}
mazzo.push(card36);

 card37 = {
  seme: 'cuori',
  numero: 8,  
  img: 'js/img/ottoC.GIF'
}
mazzo.push(card37);

 card38 = {
  seme: 'cuori',
  numero: 9,  
  img: 'js/img/noveC.GIF'
}
mazzo.push(card38);

 card39 = {
  seme: 'cuori',
  numero: 10,  
  img: 'js/img/dieciC.GIF'
}
mazzo.push(card39);  
//console.log(mazzo);

// win_card
win1 = {   
  img: 'js/img/paribas.gif',
  used : 'N',
  val  : 'PB'
};
maz_win.push(win1);

win2 = {   
  img: 'js/img/disparial.gif',
  used : 'N',
  val  : 'DA'
};
maz_win.push(win2);

win3 = {   
  img: 'js/img/disparibas.gif',
  used : 'N',
  val  : 'DB'
};

maz_win.push(win3);
console.log(maz_win);

}
           
function conv(st){
    var ch =st.charAt(7);    
    var x = 0;

 switch (ch)
 {
   case 'u' :  x = 1;
               break;                              
   case 't' :  x = 3;
               break;
   case 'q':   x = 4;
               break;
   case 'c':   x = 5;
               break;
   case 'o':   x =  8;
               break;
   case 'n':   x = 9;
               break;
   case 'd': ch=st.charAt(8);
              if (ch=='u')
                 x = 2; 
               else x = 10;
               break;
                         
   case 's': ch=st.charAt(9);
              if (ch=='i')
                 x = 6;              
               else x = 7;
               break;
   
   }
   return x;
}