function selcard(n){
    switch (n) {
      case 0 :
      document.images["mazzo"].style.border="3px solid #E5BE01";
      break;
      case 1 :
      document.images["plx1"].style.border="3px solid #000078";
      break;
      case 2 :
      document.images["plx2"].style.border="3px solid #000078";
      break;
      case 3 :
      document.images["plx3"].style.border="3px solid #000078";
      break;
      case 4 :
      document.images["plx4"].style.border="3px solid #000078";
      break;
  }
  }
  function deselcard(n){
    switch (n) {
      case 0 :
      document.images["mazzo"].style.border="0px solid #ffffff00";
      break;
      case 1 :
      document.images["plx1"].style.border="0px solid #ffffff00";
      break;
      case 2 :
      document.images["plx2"].style.border="0px solid #ffffff00";
      break;
      case 3 :
      document.images["plx3"].style.border="0px solid #ffffff00";
      break;
      case 4 :
      document.images["plx4"].style.border="0px solid #ffffff00";
      break;      
  }
}