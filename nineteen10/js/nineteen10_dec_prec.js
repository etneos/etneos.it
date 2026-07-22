var mazzo = [card0 = {
  'seme': "picche",
  'numero': 0x1,
  'img': "js/img/unoP.GIF"
}];
var pl1 = [pl1card0 = {
  'seme': '',
  'numero': 0x0,
  'img': ''
}];
var pl2 = [pl2card0 = {
  'seme': '',
  'numero': 0x0,
  'img': '',
  'scartato': ''
}];
var pl3 = [pl3card0 = {
  'seme': '',
  'numero': 0x0,
  'img': '',
  'scartato': ''
}];
var pl4 = [pl4card0 = {
  'seme': '',
  'numero': 0x0,
  'img': '',
  'scartato': ''
}];
var maz_win = [win0 = {
  'img': 'js/img/parial.gif',
  'used': 'N',
  'val': "Even/High"
}];
var lx = 0x0;
var seed;
var num;
var ind;
var estr;
var game;
var gameString = window.location.search;
var urlParams = new URLSearchParams(gameString);
var str_url;
var str_win;
var w;
var i;
var n;
var v1;
var v2;
var v3;
var v4;
var win_ult;
var sum;
var sum2;
var sum3;
var sum4;
var ctsem2;
var ctsem3;
var ctsem4;
var tpsem1;
var tpsem2;
var tpsem3;
var tpsem4;
var ctsem1 = [0x0];
var ctsem2 = [0x0];
var ctsem3 = [0x0];
var ctsem4 = [0x0];
var vincitori = [0x0];
var maxsem1;
var maxsem2;
var maxsem3;
var maxsem4;
var win_provv;
var gamer;
function init() {
  var _0x42e401 = 0x0;
  var _0x2fb92b = 0x0;
  estr = 0x0;
  riempi();
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == "vuoto");
  document.images.plx1.src = mazzo[_0x42e401].img;
  pl1[0x0].img = mazzo[_0x42e401].img;
  pl1[0x0].seme = mazzo[_0x42e401].seme;
  pl1[0x0].numero = mazzo[_0x42e401].numero;
  mazzo[_0x42e401].img = 'vuoto';
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == "vuoto");
  document.images.plx2.src = mazzo[_0x42e401].img;
  pl1card1 = {
    'seme': mazzo[_0x42e401].seme,
    'numero': mazzo[_0x42e401].numero,
    'img': mazzo[_0x42e401].img
  };
  pl1.push(pl1card1);
  mazzo[_0x42e401].img = "vuoto";
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == 'vuoto');
  document.images.plx3.src = mazzo[_0x42e401].img;
  pl1card2 = {
    'seme': mazzo[_0x42e401].seme,
    'numero': mazzo[_0x42e401].numero,
    'img': mazzo[_0x42e401].img
  };
  pl1.push(pl1card2);
  mazzo[_0x42e401].img = 'vuoto';
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == "vuoto");
  document.images.plx4.src = mazzo[_0x42e401].img;
  pl1card3 = {
    'seme': mazzo[_0x42e401].seme,
    'numero': mazzo[_0x42e401].numero,
    'img': mazzo[_0x42e401].img
  };
  pl1.push(pl1card3);
  mazzo[_0x42e401].img = "vuoto";
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == "vuoto");
  pl2[0x0].seme = mazzo[_0x42e401].seme;
  pl2[0x0].numero = mazzo[_0x42e401].numero;
  pl2[0x0].img = mazzo[_0x42e401].img;
  pl2[0x0].scartato = 'N';
  mazzo[_0x42e401].img = "vuoto";
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == "vuoto");
  pl3[0x0].seme = mazzo[_0x42e401].seme;
  pl3[0x0].numero = mazzo[_0x42e401].numero;
  pl3[0x0].img = mazzo[_0x42e401].img;
  pl3[0x0].scartato = 'N';
  mazzo[_0x42e401].img = 'vuoto';
  do {
    _0x42e401 = [Math.floor(Math.random() * 0x28)];
  } while (mazzo[_0x42e401].img == "vuoto");
  pl4[0x0].seme = mazzo[_0x42e401].seme;
  pl4[0x0].numero = mazzo[_0x42e401].numero;
  pl4[0x0].img = mazzo[_0x42e401].img;
  pl4[0x0].scartato = 'N';
  mazzo[_0x42e401].img = "vuoto";
  for (_0x2fb92b = 0x1; _0x2fb92b < 0x4; _0x2fb92b++) {
    do {
      _0x42e401 = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x42e401].img == 'vuoto');
    pl2card = {
      'seme': mazzo[_0x42e401].seme,
      'numero': mazzo[_0x42e401].numero,
      'img': mazzo[_0x42e401].img,
      'scartato': 'N'
    };
    pl2.push(pl2card);
    mazzo[_0x42e401].img = "vuoto";
  }
  for (_0x2fb92b = 0x1; _0x2fb92b < 0x4; _0x2fb92b++) {
    do {
      _0x42e401 = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x42e401].img == "vuoto");
    pl3card = {
      'seme': mazzo[_0x42e401].seme,
      'numero': mazzo[_0x42e401].numero,
      'img': mazzo[_0x42e401].img,
      'scartato': 'N'
    };
    pl3.push(pl3card);
    mazzo[_0x42e401].img = "vuoto";
  }
  for (_0x2fb92b = 0x1; _0x2fb92b < 0x4; _0x2fb92b++) {
    do {
      _0x42e401 = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x42e401].img == 'vuoto');
    pl4card = {
      'seme': mazzo[_0x42e401].seme,
      'numero': mazzo[_0x42e401].numero,
      'img': mazzo[_0x42e401].img,
      'scartato': 'N'
    };
    pl4.push(pl4card);
    mazzo[_0x42e401].img = "vuoto";
  }
  game = urlParams.get("game");
  var _0x98aab4;
  _0x98aab4 = '';
  w = urlParams.get('w');
  w = parseInt(w);
  i = urlParams.get('i');
  i = parseInt(i);
  n = urlParams.get('n');
  n = parseInt(n);
  switch (game) {
    case null:
      document.getElementById("round").style.content = "url(\"img/prima2.png\")";
      document.getElementById("estr_win").style.visibility = "hidden";
      break;
    case '2':
      document.getElementById("round").style.content = "url(\"img/seconda.png\")";
      document.getElementById("estr_win").style.visibility = "initial";
      switch (w) {
        case 0x0:
          _0x98aab4 = _0x98aab4 + "Even/High";
          break;
        case 0x1:
          _0x98aab4 = _0x98aab4 + 'Even/Low';
          break;
        case 0x2:
          _0x98aab4 = _0x98aab4 + 'Odd/High';
          break;
        case 0x3:
          _0x98aab4 = _0x98aab4 + "Odd/Low";
          break;
      }
      document.getElementById("estratte").innerHTML = "<br>" + _0x98aab4;
      console.log(maz_win[on]);
      document.getElementById("mazzos").style.content = "url(" + maz_win[on].img + ')';
      break;
    case '3':
      document.getElementById("round").style.content = "url(\"img/terza.png\")";
      document.getElementById('estr_win').style.visibility = 'initial';
      _0x98aab4 = maz_win[w].val + ", ";
      switch (i) {
        case 0x0:
          _0x98aab4 = _0x98aab4 + 'Even/High';
          break;
        case 0x1:
          _0x98aab4 = _0x98aab4 + "Even/Low";
          break;
        case 0x2:
          _0x98aab4 = _0x98aab4 + "Odd/High";
          break;
        case 0x3:
          _0x98aab4 = _0x98aab4 + "Odd/Low";
          break;
      }
      document.getElementById("estratte").innerHTML = '<br>' + _0x98aab4;
      break;
    case '4':
      document.getElementById("round").style.content = "url(\"img/quarta.png\")";
      document.getElementById("estr_win").style.visibility = 'initial';
      _0x98aab4 = maz_win[w].val + ", " + maz_win[i].val + ", ";
      switch (n) {
        case 0x0:
          _0x98aab4 = _0x98aab4 + "Even/High";
          break;
        case 0x1:
          _0x98aab4 = _0x98aab4 + "Even/Low";
          break;
        case 0x2:
          _0x98aab4 = _0x98aab4 + "Odd/High";
          break;
        case 0x3:
          _0x98aab4 = _0x98aab4 + 'Odd/Low';
          break;
      }
      document.getElementById("estratte").innerHTML = "<br>" + _0x98aab4;
      break;
  }
}
function toggle() {
  var _0x56962c = document.getElementById("overlay");
  if (_0x56962c.style.display == "block") {
    _0x56962c.style.display = "none";
    finestra.style.display = "none";
  } else {
    _0x56962c.style.display = 'block';
    finestra.style.display = "block";
  }
}
function estrai() {
  var _0x3d5e1d;
  j = 0x0;
  if (lx < 0x6) {
    var _0x25091d = document.getElementById("Estraz1");
    var _0x242b2e = document.getElementById("Estraz3");
    let _0x4b18b6 = Date.now();
    let _0x13d501 = setInterval(function () {
      let _0x150f12 = Date.now() - _0x4b18b6;
      document.getElementById("retroround").style.visibility = 'hidden';
      document.getElementById('youestraz').style.visibility = 'hidden';
      _0x25091d.style.marginRight = -0x64 + _0x150f12 / 0x5 + '%';
      _0x242b2e.style.marginLeft = -0x64 + _0x150f12 / 0x5 + '%';
      if (_0x150f12 > 0x1f4) {
        _0x25091d.style.marginRight = '0%';
        _0x242b2e.style.marginRight = '0%';
        document.getElementById("retroround").style.visibility = 'initial';
        document.getElementById("youestraz").style.visibility = 'initial';
        clearInterval(_0x13d501);
      }
    }, 0xa);
    do {
      _0x3d5e1d = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x3d5e1d].img == 'vuoto');
    document.getElementById("youestraz").style.content = "url(" + mazzo[_0x3d5e1d].img + ')';
    document.getElementById("youestraz").src = mazzo[_0x3d5e1d].img;
    seed = mazzo[_0x3d5e1d].seme;
    num = mazzo[_0x3d5e1d].numero;
    mazzo[_0x3d5e1d].img = 'vuoto';
    do {
      _0x3d5e1d = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x3d5e1d].img == 'vuoto');
    pl2card = {
      'seme': mazzo[_0x3d5e1d].seme,
      'numero': mazzo[_0x3d5e1d].numero,
      'img': mazzo[_0x3d5e1d].img,
      'scartato': ''
    };
    pl2.push(pl2card);
    mazzo[_0x3d5e1d].img = "vuoto";
    do {
      _0x3d5e1d = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x3d5e1d].img == "vuoto");
    pl3card = {
      'seme': mazzo[_0x3d5e1d].seme,
      'numero': mazzo[_0x3d5e1d].numero,
      'img': mazzo[_0x3d5e1d].img,
      'scartato': ''
    };
    pl3.push(pl3card);
    mazzo[_0x3d5e1d].img = "vuoto";
    do {
      _0x3d5e1d = [Math.floor(Math.random() * 0x28)];
    } while (mazzo[_0x3d5e1d].img == 'vuoto');
    pl4card = {
      'seme': mazzo[_0x3d5e1d].seme,
      'numero': mazzo[_0x3d5e1d].numero,
      'img': mazzo[_0x3d5e1d].img,
      'scartato': ''
    };
    pl4.push(pl4card);
    mazzo[_0x3d5e1d].img = "vuoto";
    lx++;
  } else {
    avversari();
    if (estr == 0x0) {
      var _0x3e48b3 = document.getElementById("panno");
      _0x3e48b3.style.backgroundImage = "url('img/panno-verde4.jpg')";
      estr = estr + 0x1;
    }
    if (estr > 0x0) {
      trova_win();
      estr = estr + 0x1;
    }
  }
}
var b = true;
function MyBlink() {
  var _0x2f776e = document.getElementById("logos");
  switch (gamer) {
    case "youtd":
      if (b) {
        document.images.plx1.style.border = "6px solid #ffd700";
        document.images.plx1.style.margin = "-6px";
        document.images.plx2.style.border = "6px solid #ffd700";
        document.images.plx2.style.margin = '-6px';
        document.images.plx3.style.border = "6px solid #ffd700";
        document.images.plx3.style.margin = "-6px";
        document.images.plx4.style.border = "6px solid #ffd700";
        document.images.plx4.style.margin = "-6px";
        _0x2f776e.style.border = "6px solid #ffd700";
      } else {
        document.images.plx1.style.border = "6px solid #009500";
        document.images.plx1.style.margin = "-6px";
        document.images.plx2.style.border = "6px solid #009500";
        document.images.plx2.style.margin = "-6px";
        document.images.plx3.style.border = "6px solid #009500";
        document.images.plx3.style.margin = "-6px";
        document.images.plx4.style.border = "6px solid #009500";
        document.images.plx4.style.margin = "-6px";
        _0x2f776e.style.border = "6px solid #009500";
      }
      break;
    case "lgtd":
      if (b) {
        document.images.pl2_1.style.border = "6px solid #ffd700";
        document.images.pl2_1.style.margin = '-6px';
        document.images.pl2_2.style.border = "6px solid #ffd700";
        document.images.pl2_2.style.margin = "-6px";
        document.images.pl2_3.style.border = "6px solid #ffd700";
        document.images.pl2_3.style.margin = "-6px";
        document.images.pl2_4.style.border = "6px solid #ffd700";
        document.images.pl2_4.style.margin = "-6px";
        _0x2f776e.style.border = "6px solid #ffd700";
      } else {
        document.images.pl2_1.style.border = "6px solid #009500";
        document.images.pl2_1.style.margin = '-6px';
        document.images.pl2_2.style.border = "6px solid #009500";
        document.images.pl2_2.style.margin = "-6px";
        document.images.pl2_3.style.border = "6px solid #009500";
        document.images.pl2_3.style.margin = "-6px";
        document.images.pl2_4.style.border = "6px solid #009500";
        document.images.pl2_4.style.margin = '-6px';
        _0x2f776e.style.border = "6px solid #009500";
      }
      break;
    case "gutd":
      if (b) {
        document.images.pl3_1.style.border = "6px solid #ffd700";
        document.images.pl3_2.style.border = "6px solid #ffd700";
        document.images.pl3_3.style.border = "6px solid #ffd700";
        document.images.pl3_4.style.border = "6px solid #ffd700";
        _0x2f776e.style.border = "6px solid #ffd700";
      } else {
        document.images.pl3_1.style.border = "6px solid #009500";
        document.images.pl3_2.style.border = "6px solid #009500";
        document.images.pl3_3.style.border = "6px solid #009500";
        document.images.pl3_4.style.border = "6px solid #009500";
        _0x2f776e.style.border = "6px solid #009500";
      }
      break;
    case "rgtd":
      if (b) {
        document.images.pl4_1.style.border = "6px solid #ffd700";
        document.images.pl4_1.style.margin = "-6px";
        document.images.pl4_2.style.border = "6px solid #ffd700";
        document.images.pl4_2.style.margin = "-6px";
        document.images.pl4_3.style.border = "6px solid #ffd700";
        document.images.pl4_3.style.margin = "-6px";
        document.images.pl4_4.style.border = "6px solid #ffd700";
        document.images.pl4_4.style.margin = "-6px";
        _0x2f776e.style.border = "6px solid #ffd700";
      } else {
        document.images.pl4_1.style.border = "6px solid #009500";
        document.images.pl4_1.style.margin = '-6px';
        document.images.pl4_2.style.border = "6px solid #009500";
        document.images.pl4_2.style.margin = "-6px";
        document.images.pl4_3.style.border = "6px solid #009500";
        document.images.pl4_3.style.margin = "-6px";
        document.images.pl4_4.style.border = "6px solid #009500";
        document.images.pl4_4.style.margin = "-6px";
        _0x2f776e.style.border = "6px solid #009500";
      }
      break;
  }
  b = !b;
  window.setTimeout("MyBlink()", 0x3e8);
}
function sostituzione(_0x21a0f6) {
  var _0xc3a75;
  var _0x482db5;
  var _0x1ea036;
  var _0x5be600;
  var _0x546fdb = 0x0;
  switch (_0x21a0f6) {
    case 0x1:
      _0x1ea036 = document.getElementById("youestraz").style.visibility;
      _0xc3a75 = document.images.youestraz.src;
      _0x482db5 = _0xc3a75.length - 0x5;
      if (_0xc3a75.charAt(_0x482db5) != 'd' && _0xc3a75.charAt(_0x482db5) != 'k' && _0xc3a75.charAt(_0x482db5) != '' && _0x1ea036 != "hidden") {
        let _0x5581db = Date.now();
        let _0x2788e6 = setInterval(function () {
          let _0xe0f2b0 = Date.now() - _0x5581db;
          document.getElementById("youestraz").style.marginRight = _0xe0f2b0 / 0x2 + 'px';
          if (_0xe0f2b0 > 0x12c) {
            document.images.plx1.src = document.images.youestraz.src;
            pl1[0x0].img = document.images.youestraz.src;
            document.getElementById("youestraz").style.marginRight = "0px";
            document.getElementById("youestraz").style.visibility = "hidden";
            clearInterval(_0x2788e6);
          }
        }, 0xa);
        pl1[0x0].seme = seed;
        pl1[0x0].numero = num;
        for (_0x5be600 = 0x0; _0x5be600 < 0x4; _0x5be600++) {
          _0x546fdb = _0x546fdb + pl1[_0x5be600].numero;
        }
        document.getElementById("YOU").innerHTML = "&alpha;lpha " + _0x546fdb.toString();
      }
      break;
    case 0x2:
      _0x1ea036 = document.getElementById("youestraz").style.visibility;
      _0xc3a75 = document.images.youestraz.src;
      _0x482db5 = _0xc3a75.length - 0x5;
      if (_0xc3a75.charAt(_0x482db5) != 'd' && _0xc3a75.charAt(_0x482db5) != 'k' && _0xc3a75.charAt(_0x482db5) != '' && _0x1ea036 != "hidden") {
        let _0x180087 = Date.now();
        let _0x3c6c71 = setInterval(function () {
          let _0x52bb30 = Date.now() - _0x180087;
          document.getElementById("youestraz").style.marginRight = _0x52bb30 / 0x2 + 'px';
          if (_0x52bb30 > 0xc8) {
            document.images.plx2.src = document.images.youestraz.src;
            pl1[0x1].img = document.images.youestraz.src;
            document.getElementById("youestraz").style.marginRight = "0px";
            document.getElementById('youestraz').style.visibility = "hidden";
            clearInterval(_0x3c6c71);
          }
        }, 0xa);
        pl1[0x1].seme = seed;
        pl1[0x1].numero = num;
        for (_0x5be600 = 0x0; _0x5be600 < 0x4; _0x5be600++) {
          _0x546fdb = _0x546fdb + pl1[_0x5be600].numero;
        }
        document.getElementById("YOU").innerHTML = "&alpha;lpha " + _0x546fdb.toString();
      }
      break;
    case 0x3:
      _0x1ea036 = document.getElementById("youestraz").style.visibility;
      _0xc3a75 = document.images.youestraz.src;
      _0x482db5 = _0xc3a75.length - 0x5;
      if (_0xc3a75.charAt(_0x482db5) != 'd' && _0xc3a75.charAt(_0x482db5) != 'k' && _0xc3a75.charAt(_0x482db5) != '' && _0x1ea036 != 'hidden') {
        let _0x33da93 = Date.now();
        let _0x31856f = setInterval(function () {
          let _0xf24661 = Date.now() - _0x33da93;
          document.getElementById("youestraz").style.marginLeft = _0xf24661 / 0x2 + 'px';
          if (_0xf24661 > 0xc8) {
            document.images.plx3.src = document.images.youestraz.src;
            pl1[0x2].img = document.images.youestraz.src;
            document.getElementById("youestraz").style.marginLeft = "0px";
            document.getElementById('youestraz').style.visibility = 'hidden';
            clearInterval(_0x31856f);
          }
        }, 0xa);
        pl1[0x2].seme = seed;
        pl1[0x2].numero = num;
        for (_0x5be600 = 0x0; _0x5be600 < 0x4; _0x5be600++) {
          _0x546fdb = _0x546fdb + pl1[_0x5be600].numero;
        }
        document.getElementById('YOU').innerHTML = "&alpha;lpha " + _0x546fdb.toString();
      }
      break;
    case 0x4:
      _0x1ea036 = document.getElementById("youestraz").style.visibility;
      _0xc3a75 = document.images.youestraz.src;
      _0x482db5 = _0xc3a75.length - 0x5;
      if (_0xc3a75.charAt(_0x482db5) != 'd' && _0xc3a75.charAt(_0x482db5) != 'k' && _0xc3a75.charAt(_0x482db5) != '' && _0x1ea036 != "hidden") {
        let _0x1e95cc = Date.now();
        let _0x444424 = setInterval(function () {
          let _0x2082cc = Date.now() - _0x1e95cc;
          document.getElementById("youestraz").style.marginLeft = _0x2082cc / 0x2 + 'px';
          if (_0x2082cc > 0x12c) {
            document.images.plx4.src = document.images.youestraz.src;
            pl1[0x3].img = document.images.youestraz.src;
            document.getElementById("youestraz").style.marginLeft = "0px";
            document.getElementById('youestraz').style.visibility = "hidden";
            clearInterval(_0x444424);
          }
        }, 0xa);
        pl1[0x3].seme = seed;
        pl1[0x3].numero = num;
        for (_0x5be600 = 0x0; _0x5be600 < 0x4; _0x5be600++) {
          _0x546fdb = _0x546fdb + pl1[_0x5be600].numero;
        }
        document.getElementById("YOU").innerHTML = "&alpha;lpha " + _0x546fdb.toString();
      }
      break;
  }
}
function avversari() {
  var _0x4ce1a7;
  var _0x4fef93;
  var _0x306c5a;
  var _0x5b444b;
  var _0x336f84;
  var _0x2ee083;
  var _0xb290f0 = {
    'seme': '',
    'numero': 0x0,
    'img': '',
    'scartato': ''
  };
  _0x4ce1a7 = 0x0;
  _0x4fef93 = 0x0;
  _0x2ee083 = 0x0;
  _0x5b444b = 0x0;
  _0x306c5a = 0x0;
  while ((_0x306c5a > 0x13 || _0x306c5a < 0xa) && _0x5b444b < 0x6) {
    _0x5b444b++;
    _0x336f84 = '';
    _0x306c5a = 0x0;
    _0x4ce1a7 = 0x0;
    _0x4fef93 = 0x0;
    for (j = 0x0; j < 0x4; j++) {
      _0x306c5a = _0x306c5a + pl2[j].numero;
    }
    if (_0x306c5a > 0x13) {
      _0x336f84 = "mag";
      _0x2ee083 = 0x2;
      _0x4ce1a7 = cercamax(_0x2ee083, _0x336f84);
      _0x4fef93 = cercamin(_0x2ee083, _0x336f84);
      _0xb290f0 = pl2[_0x4ce1a7];
      pl2[_0x4ce1a7] = pl2[_0x4fef93];
      pl2[_0x4ce1a7].scartato = 'N';
      pl2[_0x4fef93] = _0xb290f0;
      pl2[_0x4fef93].scartato = 'S';
    } else if (_0x306c5a < 0xa) {
      _0x336f84 = "min";
      _0x2ee083 = 0x2;
      _0x4ce1a7 = cercamax(_0x2ee083, _0x336f84);
      _0x4fef93 = cercamin(_0x2ee083, _0x336f84);
      _0xb290f0 = pl2[_0x4fef93];
      pl2[_0x4fef93] = pl2[_0x4ce1a7];
      pl2[_0x4fef93].scartato = 'N';
      pl2[_0x4ce1a7] = _0xb290f0;
      pl2[_0x4ce1a7].scartato = 'S';
    }
  }
  _0x4ce1a7 = 0x0;
  _0x4fef93 = 0x0;
  _0x2ee083 = 0x0;
  _0x5b444b = 0x0;
  _0x306c5a = 0x0;
  while ((_0x306c5a > 0x13 || _0x306c5a < 0xa) && _0x5b444b < 0x6) {
    _0x5b444b++;
    _0x336f84 = '';
    _0x306c5a = 0x0;
    _0x4ce1a7 = 0x0;
    _0x4fef93 = 0x0;
    for (j = 0x0; j < 0x4; j++) {
      _0x306c5a = _0x306c5a + pl3[j].numero;
    }
    if (_0x306c5a > 0x13) {
      _0x336f84 = "mag";
      _0x2ee083 = 0x3;
      _0x4ce1a7 = cercamax(_0x2ee083, _0x336f84);
      _0x4fef93 = cercamin(_0x2ee083, _0x336f84);
      _0xb290f0 = pl3[_0x4ce1a7];
      pl3[_0x4ce1a7] = pl3[_0x4fef93];
      pl3[_0x4ce1a7].scartato = 'N';
      pl3[_0x4fef93] = _0xb290f0;
      pl3[_0x4fef93].scartato = 'S';
    } else if (_0x306c5a < 0xa) {
      _0x336f84 = 'min';
      _0x2ee083 = 0x3;
      _0x4ce1a7 = cercamax(_0x2ee083, _0x336f84);
      _0x4fef93 = cercamin(_0x2ee083, _0x336f84);
      _0xb290f0 = pl3[_0x4fef93];
      pl3[_0x4fef93] = pl3[_0x4ce1a7];
      pl3[_0x4fef93].scartato = 'N';
      pl3[_0x4ce1a7] = _0xb290f0;
      pl3[_0x4ce1a7].scartato = 'S';
    }
  }
  _0x4ce1a7 = 0x0;
  _0x4fef93 = 0x0;
  _0x2ee083 = 0x0;
  _0x5b444b = 0x0;
  _0x306c5a = 0x0;
  while ((_0x306c5a > 0x13 || _0x306c5a < 0xa) && _0x5b444b < 0x6) {
    _0x5b444b++;
    _0x336f84 = '';
    _0x306c5a = 0x0;
    _0x4ce1a7 = 0x0;
    _0x4fef93 = 0x0;
    for (j = 0x0; j < 0x4; j++) {
      _0x306c5a = _0x306c5a + pl4[j].numero;
    }
    if (_0x306c5a > 0x13) {
      _0x336f84 = "mag";
      _0x2ee083 = 0x4;
      _0x4ce1a7 = cercamax(_0x2ee083, _0x336f84);
      _0x4fef93 = cercamin(_0x2ee083, _0x336f84);
      _0xb290f0 = pl4[_0x4ce1a7];
      pl4[_0x4ce1a7] = pl4[_0x4fef93];
      pl4[_0x4ce1a7].scartato = 'N';
      pl4[_0x4fef93] = _0xb290f0;
      pl4[_0x4fef93].scartato = 'S';
    } else if (_0x306c5a < 0xa) {
      _0x336f84 = "min";
      _0x2ee083 = 0x4;
      _0x4ce1a7 = cercamax(_0x2ee083, _0x336f84);
      _0x4fef93 = cercamin(_0x2ee083, _0x336f84);
      _0xb290f0 = pl4[_0x4fef93];
      pl4[_0x4fef93] = pl4[_0x4ce1a7];
      pl4[_0x4fef93].scartato = 'N';
      pl4[_0x4ce1a7] = _0xb290f0;
      pl4[_0x4ce1a7].scartato = 'S';
    }
  }
}
function scopri_avversari() {
  document.images.pl2_1.src = pl2[0x0].img;
  document.images.pl2_2.src = pl2[0x1].img;
  document.images.pl2_3.src = pl2[0x2].img;
  document.images.pl2_4.src = pl2[0x3].img;
  document.images.pl3_1.src = pl3[0x0].img;
  document.images.pl3_2.src = pl3[0x1].img;
  document.images.pl3_3.src = pl3[0x2].img;
  document.images.pl3_4.src = pl3[0x3].img;
  document.images.pl4_1.src = pl4[0x0].img;
  document.images.pl4_2.src = pl4[0x1].img;
  document.images.pl4_3.src = pl4[0x2].img;
  document.images.pl4_4.src = pl4[0x3].img;
}
function aggiorna_punteggio() {
  var _0x240ed6;
  sum = 0x0;
  sum2 = 0x0;
  sum3 = 0x0;
  sum4 = 0x0;
  tpsem1 = '';
  tpsem2 = '';
  tpsem3 = '';
  tpsem4 = '';
  maxsem1 = 0x1;
  maxsem2 = 0x1;
  maxsem3 = 0x1;
  maxsem4 = 0x1;
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    sum = sum + pl1[_0x240ed6].numero;
    tpsem1 = tpsem1 + pl1[_0x240ed6].seme.substr(0x0, 0x2) + '-';
  }
  ctsem1[0x0] = tpsem1.split('cu').length - 0x1;
  ctsem1[0x1] = tpsem1.split('qu').length - 0x1;
  ctsem1[0x2] = tpsem1.split('fi').length - 0x1;
  ctsem1[0x3] = tpsem1.split('pi').length - 0x1;
  var _0x21aef2 = 0x0;
  var _0x5bc23c = 0x0;
  var _0x936788 = 0x0;
  var _0x209520 = 0x0;
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    if (ctsem1[_0x240ed6] > maxsem1) {
      maxsem1 = ctsem1[_0x240ed6];
    }
    _0x21aef2 = _0x240ed6;
  }
  document.getElementById("YOU").innerHTML = "&alpha;lpha " + sum.toString();
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    sum2 = sum2 + pl2[_0x240ed6].numero;
    tpsem2 = tpsem2 + pl2[_0x240ed6].seme.substr(0x0, 0x2) + '-';
  }
  ctsem2[0x0] = tpsem2.split('cu').length - 0x1;
  ctsem2[0x1] = tpsem2.split('qu').length - 0x1;
  ctsem2[0x2] = tpsem2.split('fi').length - 0x1;
  ctsem2[0x3] = tpsem2.split('pi').length - 0x1;
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    if (ctsem2[_0x240ed6] > maxsem2) {
      maxsem2 = ctsem2[_0x240ed6];
    }
    _0x5bc23c = _0x240ed6;
  }
  document.getElementById('LG').innerHTML = "&beta;eta " + sum2.toString();
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    sum3 = sum3 + pl3[_0x240ed6].numero;
    tpsem3 = tpsem3 + pl3[_0x240ed6].seme.substr(0x0, 0x2) + '-';
  }
  ctsem3[0x0] = tpsem3.split('cu').length - 0x1;
  ctsem3[0x1] = tpsem3.split('qu').length - 0x1;
  ctsem3[0x2] = tpsem3.split('fi').length - 0x1;
  ctsem3[0x3] = tpsem3.split('pi').length - 0x1;
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    if (ctsem3[_0x240ed6] > maxsem3) {
      maxsem3 = ctsem3[_0x240ed6];
    }
    _0x936788 = _0x240ed6;
  }
  document.getElementById('GU').innerHTML = "&lambda;amda " + sum3.toString();
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    sum4 = sum4 + pl4[_0x240ed6].numero;
    tpsem4 = tpsem4 + pl4[_0x240ed6].seme.substr(0x0, 0x2) + '-';
  }
  ctsem4[0x0] = tpsem4.split('cu').length - 0x1;
  ctsem4[0x1] = tpsem4.split('qu').length - 0x1;
  ctsem4[0x2] = tpsem4.split('fi').length - 0x1;
  ctsem4[0x3] = tpsem4.split('pi').length - 0x1;
  for (_0x240ed6 = 0x0; _0x240ed6 < 0x4; _0x240ed6++) {
    if (ctsem4[_0x240ed6] > maxsem4) {
      maxsem4 = ctsem4[_0x240ed6];
    }
    _0x209520 = _0x240ed6;
  }
  document.getElementById('RG').innerHTML = "&delta;elta " + sum4.toString();
  var _0x4ff641 = document.getElementById("mazzos").style.content;
  if (_0x4ff641.includes("dispari")) {
    if (sum < 0x14 && sum > 0x9) {
      if (sum % 0x2 == 0x1) {
        document.getElementById("YOU").innerHTML = "&alpha;lpha " + sum.toString();
      } else {
        if (sum % 0x2 == 0x0) {
          if (sum == 0x12) {
            sum = 0x9;
          } else {
            if (sum == 0x10) {
              sum = 0x7;
            } else {
              if (sum == 0xe) {
                sum = 0x5;
              } else {
                if (sum == 0xc) {
                  sum = 0x3;
                } else {
                  if (sum == 0xa) {
                    sum = 0x1;
                  }
                }
              }
            }
          }
          document.getElementById('YOU').innerHTML = "&alpha;lpha " + sum.toString();
        }
      }
    } else {
      document.getElementById("YOU").innerHTML = "Offside! " + sum.toString();
    }
    if (sum2 < 0x14 && sum2 > 0x9) {
      if (sum2 % 0x2 == 0x1) {
        document.getElementById('LG').innerHTML = "&beta;eta " + sum2.toString();
      } else {
        if (sum2 % 0x2 == 0x0) {
          if (sum2 == 0x12) {
            sum2 = 0x9;
          } else {
            if (sum2 == 0x10) {
              sum2 = 0x7;
            } else {
              if (sum2 == 0xe) {
                sum2 = 0x5;
              } else {
                if (sum2 == 0xc) {
                  sum2 = 0x3;
                } else {
                  if (sum2 == 0xa) {
                    sum2 = 0x1;
                  }
                }
              }
            }
          }
          document.getElementById('LG').innerHTML = "&beta;eta " + sum2.toString();
        }
      }
    } else {
      document.getElementById('LG').innerHTML = "Offside! " + sum2.toString();
    }
    if (sum3 < 0x14 && sum3 > 0x9) {
      if (sum3 % 0x2 == 0x1) {
        document.getElementById('GU').innerHTML = "&lambda;amda " + sum3.toString();
      } else {
        if (sum3 % 0x2 == 0x0) {
          if (sum3 == 0x12) {
            sum3 = 0x9;
          } else {
            if (sum3 == 0x10) {
              sum3 = 0x7;
            } else {
              if (sum3 == 0xe) {
                sum3 = 0x5;
              } else {
                if (sum3 == 0xc) {
                  sum3 = 0x3;
                } else {
                  if (sum3 == 0xa) {
                    sum3 = 0x1;
                  }
                }
              }
            }
          }
          document.getElementById('GU').innerHTML = "&lambda;amda " + sum3.toString();
        }
      }
    } else {
      document.getElementById('GU').innerHTML = "Offside! " + sum3.toString();
    }
    if (sum4 < 0x14 && sum4 > 0x9) {
      if (sum4 % 0x2 == 0x1) {
        document.getElementById('RG').innerHTML = "&delta;elta " + sum4.toString();
      } else {
        if (sum4 % 0x2 == 0x0) {
          if (sum4 == 0x12) {
            sum4 = 0x9;
          } else {
            if (sum4 == 0x10) {
              sum4 = 0x7;
            } else {
              if (sum4 == 0xe) {
                sum4 = 0x5;
              } else {
                if (sum4 == 0xc) {
                  sum4 = 0x3;
                } else {
                  if (sum4 == 0xa) {
                    sum4 = 0x1;
                  }
                }
              }
            }
          }
          document.getElementById('RG').innerHTML = "&delta;elta " + sum4.toString();
        }
      }
    } else {
      document.getElementById('RG').innerHTML = "Offside! " + sum4.toString();
    }
  } else {
    if (sum < 0x14 && sum > 0x9) {
      if (sum % 0x2 == 0x0) {
        document.getElementById("YOU").innerHTML = "&alpha;lpha " + sum.toString();
      } else {
        if (sum % 0x2 == 0x1) {
          if (sum == 0x13) {
            sum = 0xa;
          } else {
            if (sum == 0x11) {
              sum = 0x8;
            } else {
              if (sum == 0xf) {
                sum = 0x6;
              } else {
                if (sum == 0xd) {
                  sum = 0x4;
                } else {
                  if (sum == 0xb) {
                    sum = 0x2;
                  }
                }
              }
            }
          }
          document.getElementById("YOU").innerHTML = "&alpha;lpha " + sum.toString();
        }
      }
    } else {
      document.getElementById("YOU").innerHTML = "Offside! " + sum.toString();
    }
    if (sum2 < 0x14 && sum2 > 0x9) {
      if (sum2 % 0x2 == 0x0) {
        document.getElementById('LG').innerHTML = "&beta;eta " + sum2.toString();
      } else {
        if (sum2 % 0x2 == 0x1) {
          if (sum2 == 0x13) {
            sum2 = 0xa;
          } else {
            if (sum2 == 0x11) {
              sum2 = 0x8;
            } else {
              if (sum2 == 0xf) {
                sum2 = 0x6;
              } else {
                if (sum2 == 0xd) {
                  sum2 = 0x4;
                } else {
                  if (sum2 == 0xb) {
                    sum2 = 0x2;
                  }
                }
              }
            }
          }
          document.getElementById('LG').innerHTML = "&beta;eta " + sum2.toString();
        }
      }
    } else {
      document.getElementById('LG').innerHTML = "Offside! " + sum2.toString();
    }
    if (sum3 < 0x14 && sum3 > 0x9) {
      if (sum3 % 0x2 == 0x0) {
        document.getElementById('GU').innerHTML = "&lambda;amda " + sum3.toString();
      } else {
        if (sum3 % 0x2 == 0x1) {
          if (sum3 == 0x13) {
            sum3 = 0xa;
          } else {
            if (sum3 == 0x11) {
              sum3 = 0x8;
            } else {
              if (sum3 == 0xf) {
                sum3 = 0x6;
              } else {
                if (sum3 == 0xd) {
                  sum3 = 0x4;
                } else {
                  if (sum3 == 0xb) {
                    sum3 = 0x2;
                  }
                }
              }
            }
          }
          document.getElementById('GU').innerHTML = "&lambda;amda " + sum3.toString();
        }
      }
    } else {
      document.getElementById('GU').innerHTML = "Offside! " + sum3.toString();
    }
    if (sum4 < 0x14 && sum4 > 0x9) {
      if (sum4 % 0x2 == 0x0) {
        document.getElementById('RG').innerHTML = "&delta;elta " + sum4.toString();
      } else {
        if (sum4 % 0x2 == 0x1) {
          if (sum4 == 0x13) {
            sum4 = 0xa;
          } else {
            if (sum4 == 0x11) {
              sum4 = 0x8;
            } else {
              if (sum4 == 0xf) {
                sum4 = 0x6;
              } else {
                if (sum4 == 0xd) {
                  sum4 = 0x4;
                } else {
                  if (sum4 == 0xb) {
                    sum4 = 0x2;
                  }
                }
              }
            }
          }
          document.getElementById('RG').innerHTML = "&delta;elta " + sum4.toString();
        }
      }
    } else {
      document.getElementById('RG').innerHTML = "Offside! " + sum4.toString();
    }
  }
  var _0x28457d = 0x0;
  var _0x2e6605 = [0x0];
  var _0x20156d = [0x0];
  var _0x71cf9b = 0x0;
  var _0x34a277 = 0x0;
  var _0x57d1c5 = 0x0;
  _0x2e6605[0x0] = maxsem1;
  _0x2e6605[0x1] = maxsem2;
  _0x2e6605[0x2] = maxsem3;
  _0x2e6605[0x3] = maxsem4;
  _0x20156d[0x0] = _0x21aef2;
  _0x20156d[0x1] = _0x5bc23c;
  _0x20156d[0x2] = _0x936788;
  _0x20156d[0x3] = _0x209520;
  if (_0x4ff641.includes("paribas")) {
    var _0x5f12d7 = [0x0];
    var _0x16aad2 = 0x0;
    _0x5f12d7[0x1] = sum2;
    _0x5f12d7[0x2] = sum3;
    _0x5f12d7[0x3] = sum4;
    if (sum < 0x14) {
      _0x5f12d7[0x0] = sum;
    } else {
      _0x5f12d7[0x0] = 0x29;
    }
    _0x16aad2 = _0x5f12d7[0x0];
    _0x34a277 = 0x0;
    for (_0x71cf9b = 0x1; _0x71cf9b <= 0x3; _0x71cf9b++) {
      if (_0x5f12d7[_0x71cf9b] < _0x16aad2 && _0x5f12d7[_0x71cf9b] < 0x14) {
        _0x16aad2 = _0x5f12d7[_0x71cf9b];
        _0x34a277 = _0x71cf9b;
      }
    }
    if (_0x34a277 < 0x3) {
      _0x28457d = _0x34a277;
      for (_0x57d1c5 = _0x34a277 + 0x1; _0x57d1c5 <= 0x3; _0x57d1c5++) {
        if (_0x5f12d7[_0x57d1c5] == _0x5f12d7[_0x34a277]) {
          if (_0x2e6605[_0x57d1c5] > _0x2e6605[_0x34a277]) {
            _0x28457d = _0x57d1c5;
            _0x34a277 = _0x57d1c5;
          } else {
            if (_0x2e6605[_0x57d1c5] < _0x2e6605[_0x34a277]) {
              _0x28457d = _0x34a277;
            } else {
              if (_0x2e6605[_0x57d1c5] == _0x2e6605[_0x34a277]) {
                if (_0x20156d[_0x57d1c5] < _0x20156d[_0x34a277]) {
                  _0x28457d = _0x57d1c5;
                  _0x34a277 = _0x57d1c5;
                } else {
                  if (_0x20156d[_0x57d1c5] > _0x20156d[_0x34a277]) {
                    _0x28457d = _0x34a277;
                  }
                }
              }
            }
          }
        } else {
          _0x28457d = _0x34a277;
        }
      }
    } else {
      _0x28457d = _0x34a277;
    }
  } else {
    if (_0x4ff641.includes("parial")) {
      var _0x315072 = [0x0];
      var _0x516fa1 = 0x0;
      _0x315072[0x0] = sum;
      _0x315072[0x1] = sum2;
      _0x315072[0x2] = sum3;
      _0x315072[0x3] = sum4;
      if (sum < 0x14) {
        _0x315072[0x0] = sum;
      } else {
        _0x315072[0x0] = 0x1;
      }
      _0x516fa1 = _0x315072[0x0];
      _0x34a277 = 0x0;
      for (_0x71cf9b = 0x1; _0x71cf9b <= 0x3; _0x71cf9b++) {
        if (_0x315072[_0x71cf9b] > _0x516fa1 && _0x315072[_0x71cf9b] < 0x14) {
          _0x516fa1 = _0x315072[_0x71cf9b];
          _0x34a277 = _0x71cf9b;
        }
      }
      if (_0x34a277 < 0x3) {
        _0x28457d = _0x34a277;
        for (_0x57d1c5 = _0x34a277 + 0x1; _0x57d1c5 <= 0x3; _0x57d1c5++) {
          if (_0x315072[_0x57d1c5] == _0x315072[_0x34a277]) {
            if (_0x2e6605[_0x57d1c5] > _0x2e6605[_0x34a277]) {
              _0x28457d = _0x57d1c5;
              _0x34a277 = _0x57d1c5;
            } else {
              if (_0x2e6605[_0x57d1c5] < _0x2e6605[_0x34a277]) {
                _0x28457d = _0x34a277;
              } else {
                if (_0x2e6605[_0x57d1c5] == _0x2e6605[_0x34a277]) {
                  if (_0x20156d[_0x57d1c5] < _0x20156d[_0x34a277]) {
                    _0x28457d = _0x57d1c5;
                    _0x34a277 = _0x57d1c5;
                  } else {
                    if (_0x20156d[_0x57d1c5] > _0x20156d[_0x34a277]) {
                      _0x28457d = _0x34a277;
                    }
                  }
                }
              }
            }
          } else {
            _0x28457d = _0x34a277;
          }
        }
      } else {
        _0x28457d = _0x34a277;
      }
    }
  }
  v1 = '0';
  v2 = '0';
  v3 = '0';
  v4 = '0';
  if (_0x16aad2 != 0x29 && _0x516fa1 != 0x1) {
    switch (_0x28457d) {
      case 0x0:
        document.getElementById("YOU").innerHTML = "winner " + sum.toString();
        gamer = 'youtd';
        v1 = urlParams.get('v1');
        switch (game) {
          case '1':
            str_win = '&v1=1&v2=0&v3=0&v4=0';
            break;
          case '2':
            if (v1 == '1') {
              str_win = "&v1=2&v2=0&v3=0&v4=0";
            } else {
              str_win = "&v1=1" + gameString.substr(0x10, 0xf);
            }
            break;
          case '3':
            if (v1 == '1') {
              str_win = "&v1=2" + gameString.substr(0x14, 0xf);
            } else {
              if (v1 == '2') {
                str_win = "&v1=3" + gameString.substr(0x14, 0xf);
              } else {
                str_win = "&v1=1" + gameString.substr(0x14, 0xf);
              }
            }
            break;
          case '4':
            v4 = urlParams.get('v4');
            v4 = parseInt(v4);
            v2 = urlParams.get('v2');
            v2 = parseInt(v2);
            v3 = urlParams.get('v3');
            v3 = parseInt(v3);
            v1 = urlParams.get('v1');
            v1 = parseInt(v1);
            v1 = v1 + 0x1;
            win_ult = 'v1';
            proclama_win();
            break;
        }
        MyBlink();
        break;
      case 0x1:
        document.getElementById('LG').innerHTML = "winner " + sum2.toString();
        gamer = "lgtd";
        v2 = urlParams.get('v2');
        switch (game) {
          case '1':
            str_win = "&v1=0&v2=1&v3=0&v4=0";
            break;
          case '2':
            if (v2 == '1') {
              str_win = "&v1=0&v2=2&v3=0&v4=0";
            } else {
              str_win = gameString.substr(0xb, 0x5) + '&v2=1' + gameString.substr(0x15, 0xa);
            }
            break;
          case '3':
            if (v2 == '1') {
              str_win = gameString.substr(0xf, 0x5) + '&v2=2' + gameString.substr(0x19, 0xa);
            } else {
              if (v2 == '2') {
                str_win = gameString.substr(0xf, 0x5) + "&v2=3" + gameString.substr(0x19, 0xa);
              } else {
                str_win = gameString.substr(0xf, 0x5) + "&v2=1" + gameString.substr(0x19, 0xa);
              }
            }
            break;
          case '4':
            v1 = urlParams.get('v1');
            v1 = parseInt(v1);
            v4 = urlParams.get('v4');
            v4 = parseInt(v4);
            v3 = urlParams.get('v3');
            v3 = parseInt(v3);
            v2 = urlParams.get('v2');
            v2 = parseInt(v2);
            v2 = v2 + 0x1;
            win_ult = 'v2';
            proclama_win();
            break;
        }
        MyBlink();
        break;
      case 0x2:
        document.getElementById('GU').innerHTML = "winner " + sum3.toString();
        gamer = 'gutd';
        v3 = urlParams.get('v3');
        switch (game) {
          case '1':
            str_win = "&v1=0&v2=0&v3=1&v4=0";
            break;
          case '2':
            if (v3 == '1') {
              str_win = "&v1=0&v2=0&v3=2&v4=0";
            } else {
              str_win = gameString.substr(0xb, 0xa) + "&v3=1" + gameString.substr(0x1a, 0x5);
            }
            break;
          case '3':
            if (v3 == '1') {
              str_win = gameString.substr(0xf, 0xa) + "&v3=2" + gameString.substr(0x1e, 0x5);
            } else {
              if (v3 == '2') {
                str_win = gameString.substr(0xf, 0xa) + '&v3=3' + gameString.substr(0x1e, 0x5);
              } else {
                str_win = gameString.substr(0xf, 0xa) + "&v3=1" + gameString.substr(0x1e, 0x5);
              }
            }
            break;
          case '4':
            v1 = urlParams.get('v1');
            v1 = parseInt(v1);
            v2 = urlParams.get('v2');
            v2 = parseInt(v2);
            v4 = urlParams.get('v4');
            v4 = parseInt(v4);
            v3 = urlParams.get('v3');
            v3 = parseInt(v3);
            v3 = v3 + 0x1;
            win_ult = 'v3';
            proclama_win();
            break;
        }
        MyBlink();
        document.getElementById("gutd").style.alignContent = 'center';
        break;
      case 0x3:
        document.getElementById('RG').innerHTML = "winner " + sum4.toString();
        gamer = "rgtd";
        v4 = urlParams.get('v4');
        switch (game) {
          case '1':
            str_win = "&v1=0&v2=0&v3=0&v4=1";
            break;
          case '2':
            if (v4 == '1') {
              str_win = "&v1=0&v2=0&v3=0&v4=2";
            } else {
              str_win = gameString.substr(0xb, 0xf) + "&v4=1";
            }
            break;
          case '3':
            if (v4 == '1') {
              str_win = gameString.substr(0xf, 0xf) + "&v4=2";
            } else {
              if (v4 == '2') {
                str_win = gameString.substr(0xf, 0xf) + "&v4=3";
              } else {
                str_win = gameString.substr(0xf, 0xf) + "&v4=1";
              }
            }
            break;
          case '4':
            v1 = urlParams.get('v1');
            v1 = parseInt(v1);
            v2 = urlParams.get('v2');
            v2 = parseInt(v2);
            v3 = urlParams.get('v3');
            v3 = parseInt(v3);
            v4 = urlParams.get('v4');
            v4 = parseInt(v4);
            v4 = v4 + 0x1;
            win_ult = 'v4';
            proclama_win();
            break;
        }
        MyBlink();
        break;
    }
  } else {
    alert("NESSUN VINCITORE ! ");
  }
}
function proclama_win() {
  var _0x18ed20;
  switch (win_ult) {
    case 'v1':
      vincitori[0x0] = v2;
      vincitori[0x1] = v3;
      vincitori[0x2] = v4;
      vincitori[0x3] = v1;
      var _0x5e8147 = vincitori[0x0];
      var _0x412fa5 = 0x0;
      for (_0x18ed20 = 0x0; _0x18ed20 < 0x4; _0x18ed20++) {
        if (vincitori[_0x18ed20] >= _0x5e8147) {
          _0x5e8147 = vincitori[_0x18ed20];
          _0x412fa5 = _0x18ed20;
        }
      }
      switch (_0x412fa5) {
        case 0x0:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &beta;eta !</strong> <br>";
          document.getElementById('classifica').innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica2").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica3").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica4").innerHTML = "&alpha;lpha " + v1.toString();
          break;
        case 0x1:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &lambda;amda !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica2").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica3").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica4").innerHTML = "&beta;eta " + v2.toString();
          break;
        case 0x2:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &delta;elta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica2").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica3").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica4").innerHTML = "&lambda;amda " + v3.toString();
          break;
        case 0x3:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &alpha;lpha !</strong> <br>";
          document.getElementById('classifica').innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica2").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica3").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica4").innerHTML = "&delta;elta " + v4.toString();
          break;
      }
      break;
    case 'v2':
      vincitori[0x0] = v3;
      vincitori[0x1] = v4;
      vincitori[0x2] = v1;
      vincitori[0x3] = v2;
      var _0x5e8147 = vincitori[0x0];
      var _0x412fa5 = 0x0;
      for (_0x18ed20 = 0x0; _0x18ed20 < 0x4; _0x18ed20++) {
        if (vincitori[_0x18ed20] >= _0x5e8147) {
          _0x5e8147 = vincitori[_0x18ed20];
          _0x412fa5 = _0x18ed20;
        }
      }
      switch (_0x412fa5) {
        case 0x0:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &lambda;amda !</strong> <br>";
          document.getElementById('classifica').innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica2").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica3").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica4").innerHTML = "&beta;eta " + v2.toString();
          break;
        case 0x1:
          toggle();
          document.getElementById('end').innerHTML = "<strong>The winner is &delta;elta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById('classifica1').innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica2").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica3").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById('classifica4').innerHTML = "&lambda;amda " + v3.toString();
          break;
        case 0x2:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &alpha;lpha !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica2").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById('classifica3').innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica4").innerHTML = "&delta;elta " + v4.toString();
          break;
        case 0x3:
          toggle();
          document.getElementById('end').innerHTML = "<strong>The winner is &beta;eta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica2").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica3").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById('classifica4').innerHTML = "&alpha;lpha " + v1.toString();
          break;
      }
      break;
    case 'v3':
      vincitori[0x0] = v4;
      vincitori[0x1] = v1;
      vincitori[0x2] = v2;
      vincitori[0x3] = v3;
      var _0x5e8147 = vincitori[0x0];
      var _0x412fa5 = 0x0;
      for (_0x18ed20 = 0x0; _0x18ed20 < 0x4; _0x18ed20++) {
        if (vincitori[_0x18ed20] >= _0x5e8147) {
          _0x5e8147 = vincitori[_0x18ed20];
          _0x412fa5 = _0x18ed20;
        }
      }
      switch (_0x412fa5) {
        case 0x0:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &delta;elta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica2").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica3").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica4").innerHTML = "&lambda;amda " + v3.toString();
          break;
        case 0x1:
          toggle();
          document.getElementById('end').innerHTML = "<strong>The winner is &alpha;lpha !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica2").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica3").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica4").innerHTML = "&delta;elta " + v4.toString();
          break;
        case 0x2:
          toggle();
          document.getElementById('end').innerHTML = "<strong>The winner is &beta;eta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById('classifica2').innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById('classifica3').innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica4").innerHTML = "&alpha;lpha " + v1.toString();
          break;
        case 0x3:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &lambda;amda !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica2").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica3").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica4").innerHTML = "&beta;eta " + v2.toString();
          break;
      }
      break;
    case 'v4':
      vincitori[0x0] = v1;
      vincitori[0x1] = v2;
      vincitori[0x2] = v3;
      vincitori[0x3] = v4;
      var _0x5e8147 = vincitori[0x0];
      var _0x412fa5 = 0x0;
      for (_0x18ed20 = 0x0; _0x18ed20 < 0x4; _0x18ed20++) {
        if (vincitori[_0x18ed20] >= _0x5e8147) {
          _0x5e8147 = vincitori[_0x18ed20];
          _0x412fa5 = _0x18ed20;
        }
      }
      switch (_0x412fa5) {
        case 0x0:
          toggle();
          document.getElementById('end').innerHTML = "<strong>The winner is &alpha;lpha !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica2").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica3").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica4").innerHTML = "&delta;elta " + v4.toString();
          break;
        case 0x1:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is  &beta;eta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&beta;eta " + v2.toString();
          document.getElementById("classifica2").innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById('classifica3').innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica4").innerHTML = "&alpha;lpha " + v1.toString();
          break;
        case 0x2:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &lambda;amda !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById('classifica1').innerHTML = "&lambda;amda " + v3.toString();
          document.getElementById("classifica2").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica3").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById("classifica4").innerHTML = "&beta;eta " + v2.toString();
          break;
        case 0x3:
          toggle();
          document.getElementById("end").innerHTML = "<strong>The winner is &delta;elta !</strong> <br>";
          document.getElementById("classifica").innerHTML = "Final ranking";
          document.getElementById("classifica1").innerHTML = "&delta;elta " + v4.toString();
          document.getElementById("classifica2").innerHTML = "&alpha;lpha " + v1.toString();
          document.getElementById('classifica3').innerHTML = "&beta;eta " + v2.toString();
          document.getElementById('classifica4').innerHTML = "&lambda;amda " + v3.toString();
          break;
      }
      break;
  }
}
function estrai_wincard() {
  var _0x374610 = 0x0;
  w = urlParams.get('w');
  if (w != null) {
    w = parseInt(w);
    maz_win[w].used = 'S';
  }
  i = urlParams.get('i');
  if (i != null) {
    i = parseInt(i);
    maz_win[i].used = 'S';
  }
  n = urlParams.get('n');
  if (n != null) {
    n = parseInt(n);
    maz_win[n].used = 'S';
  }
  do {
    _0x374610 = [Math.floor(Math.random() * 0x4)];
  } while (maz_win[_0x374610].used == 'S');
  console.log(maz_win[_0x374610]);
  document.getElementById("mazzos").style.content = "url(" + maz_win[_0x374610].img + ')';
  console.log(maz_win);
  scopri_avversari();
  game = urlParams.get("game");
  str_url = "nineteen10.htm";
  var _0x9faadc = document.getElementById("logos");
  var _0x5d1c84 = new Event("click");
  var _0x128208 = function () {
    window.open(str_url,'',"width="+screen.availWidth+",height="+screen.availHeight+"");
    window.close();
    _0x5d1c84.stopPropagation();
  };
  if (game == null) {
    game = '1';
  }
  var _0x918698 = document.getElementById("panno");
  if (window.matchMedia("(min-width: 1530px)").matches) {
    _0x918698.style.backgroundImage = "none";
  } else {
    _0x918698.style.backgroundImage = "url('img/panno-verde2.jpg')";
  }
  switch (game) {
    case '1':
      if (_0x374610 == 0x0) {
        scopri_avversari();
        aggiorna_punteggio();
        str_url = str_url + "?game=2&w=0" + str_win;
        _0x9faadc.src = "img/restart.png";
        _0x9faadc.addEventListener("click", _0x128208);
      } else {
        if (_0x374610 == 0x1) {
          scopri_avversari();
          aggiorna_punteggio();
          str_url = str_url + '?game=2&w=1' + str_win;
          _0x9faadc.src = 'img/restart.png';
          _0x9faadc.addEventListener('click', _0x128208);
        } else {
          if (_0x374610 == 0x2) {
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + "?game=2&w=2" + str_win;
            _0x9faadc.src = 'img/restart.png';
            _0x9faadc.addEventListener("click", _0x128208);
          } else if (_0x374610 == 0x3) {
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + '?game=2&w=3' + str_win;
            _0x9faadc.src = "img/restart.png";
            _0x9faadc.addEventListener("click", _0x128208);
          }
        }
      }
      break;
    case '2':
      if (_0x374610 == 0x0) {
        scopri_avversari();
        aggiorna_punteggio();
        str_url = str_url + "?game=3" + gameString.substr(0x7, 0x4) + "&i=0" + str_win;
        _0x9faadc.src = "img/restart.png";
        _0x9faadc.addEventListener("click", _0x128208);
      } else {
        if (_0x374610 == 0x1) {
          scopri_avversari();
          aggiorna_punteggio();
          str_url = str_url + "?game=3" + gameString.substr(0x7, 0x4) + "&i=1" + str_win;
          _0x9faadc.src = 'img/restart.png';
          _0x9faadc.addEventListener("click", _0x128208);
        } else {
          if (_0x374610 == 0x2) {
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + '?game=3' + gameString.substr(0x7, 0x4) + "&i=2" + str_win;
            _0x9faadc.src = "img/restart.png";
            _0x9faadc.addEventListener("click", _0x128208);
          } else if (_0x374610 == 0x3) {
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + "?game=3" + gameString.substr(0x7, 0x4) + "&i=3" + str_win;
            _0x9faadc.src = 'img/restart.png';
            _0x9faadc.addEventListener("click", _0x128208);
          }
        }
      }
      break;
    case '3':
      if (_0x374610 == 0x0) {
        scopri_avversari();
        aggiorna_punteggio(0x3);
        str_url = str_url + '?game=4' + gameString.substr(0x7, 0x8) + "&n=0" + str_win;
        _0x9faadc.src = "img/restart.png";
        _0x9faadc.addEventListener("click", _0x128208);
      } else {
        if (_0x374610 == 0x1) {
          scopri_avversari();
          aggiorna_punteggio();
          str_url = str_url + "?game=4" + gameString.substr(0x7, 0x8) + "&n=1" + str_win;
          _0x9faadc.src = 'img/restart.png';
          _0x9faadc.addEventListener("click", _0x128208);
        } else {
          if (_0x374610 == 0x2) {
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + "?game=4" + gameString.substr(0x7, 0x8) + "&n=2" + str_win;
            _0x9faadc.src = "img/restart.png";
            _0x9faadc.addEventListener("click", _0x128208);
          } else if (_0x374610 == 0x3) {
            scopri_avversari();
            aggiorna_punteggio();
            str_url = str_url + "?game=4" + gameString.substr(0x7, 0x8) + "&n=3" + str_win;
            _0x9faadc.src = "img/restart.png";
            _0x9faadc.addEventListener('click', _0x128208);
          }
        }
      }
      break;
    case '4':
      aggiorna_punteggio();
      str_url = "nineteen10.htm";
      _0x9faadc.src = "img/restart2.png";
      _0x9faadc.addEventListener("click", _0x128208);
      break;
  }
}
function trova_win() {
  var _0x49247b = document.getElementById('mazzos');
  if (estr == 0x1) {
    _0x49247b.style.content = "url('img/retroRED.png')";
  } else {
    if (estr == 0x2) {
      _0x49247b.onclick = estrai_wincard();
    }
  }
}
function cercamax(_0x1374bb, _0x5c7cfc) {
  var _0xdb2e41;
  ind = 0x0;
  _0xdb2e41 = 0x0;
  switch (_0x1374bb) {
    case 0x2:
      if (_0x5c7cfc == "mag") {
        _0xdb2e41 = pl2[0x0].numero;
        for (k = 0x0; k < 0x4; k++) {
          if (_0xdb2e41 < pl2[k].numero) {
            _0xdb2e41 = pl2[k].numero;
            ind = k;
          }
        }
      }
      if (_0x5c7cfc == "min") {
        _0xdb2e41 = pl2[0x4].numero;
        ind = 0x4;
        for (k = 0x4; k < 0x9; k++) {
          if (_0xdb2e41 < pl2[k].numero) {
            _0xdb2e41 = pl2[k].numero;
            ind = k;
          }
        }
      }
      break;
    case 0x3:
      if (_0x5c7cfc == "mag") {
        _0xdb2e41 = pl3[0x0].numero;
        for (k = 0x0; k < 0x4; k++) {
          if (_0xdb2e41 < pl3[k].numero) {
            _0xdb2e41 = pl3[k].numero;
            ind = k;
          }
        }
      }
      if (_0x5c7cfc == "min") {
        _0xdb2e41 = pl3[0x4].numero;
        ind = 0x4;
        for (k = 0x4; k < 0x9; k++) {
          if (_0xdb2e41 < pl3[k].numero) {
            _0xdb2e41 = pl3[k].numero;
            ind = k;
          }
        }
      }
      break;
    case 0x4:
      if (_0x5c7cfc == 'mag') {
        _0xdb2e41 = pl4[0x0].numero;
        for (k = 0x0; k < 0x4; k++) {
          if (_0xdb2e41 < pl4[k].numero) {
            _0xdb2e41 = pl4[k].numero;
            ind = k;
          }
        }
      }
      if (_0x5c7cfc == "min") {
        _0xdb2e41 = pl4[0x4].numero;
        ind = 0x4;
        for (k = 0x4; k < 0x9; k++) {
          if (_0xdb2e41 < pl4[k].numero) {
            _0xdb2e41 = pl4[k].numero;
            ind = k;
          }
        }
      }
      break;
  }
  return ind;
}
function cercamin(_0x29e59e, _0x2ed3fc) {
  var _0x5b7913;
  ind = 0x0;
  _0x5b7913 = 0x0;
  switch (_0x29e59e) {
    case _0x29e59e = 0x2:
      if (_0x2ed3fc == "min") {
        _0x5b7913 = pl2[0x0].numero;
        for (k = 0x0; k < 0x4; k++) {
          if (_0x5b7913 > pl2[k].numero) {
            _0x5b7913 = pl2[k].numero;
            ind = k;
          }
        }
      }
      if (_0x2ed3fc == "mag") {
        _0x5b7913 = pl2[0x4].numero;
        ind = 0x4;
        for (k = 0x4; k < 0x9; k++) {
          if (_0x5b7913 > pl2[k].numero) {
            _0x5b7913 = pl2[k].numero;
            ind = k;
          }
        }
      }
      break;
    case _0x29e59e = 0x3:
      if (_0x2ed3fc == 'min') {
        _0x5b7913 = pl3[0x0].numero;
        for (k = 0x0; k < 0x4; k++) {
          if (_0x5b7913 > pl3[k].numero) {
            _0x5b7913 = pl3[k].numero;
            ind = k;
          }
        }
      }
      if (_0x2ed3fc == "mag") {
        _0x5b7913 = pl3[0x4].numero;
        ind = 0x4;
        for (k = 0x4; k < 0x9; k++) {
          if (_0x5b7913 > pl3[k].numero) {
            _0x5b7913 = pl3[k].numero;
            ind = k;
          }
        }
      }
      break;
    case _0x29e59e = 0x4:
      if (_0x2ed3fc == "min") {
        _0x5b7913 = pl4[0x0].numero;
        for (k = 0x0; k < 0x4; k++) {
          if (_0x5b7913 > pl4[k].numero) {
            _0x5b7913 = pl4[k].numero;
            ind = k;
          }
        }
      }
      if (_0x2ed3fc == "mag") {
        _0x5b7913 = pl4[0x4].numero;
        ind = 0x4;
        for (k = 0x4; k < 0x9; k++) {
          if (_0x5b7913 > pl4[k].numero) {
            _0x5b7913 = pl4[k].numero;
            ind = k;
          }
        }
      }
      break;
  }
  return ind;
}
function riempi() {
  card1 = {
    'seme': 'picche',
    'numero': 0x2,
    'img': "js/img/dueP.GIF"
  };
  mazzo.push(card1);
  card2 = {
    'seme': "picche",
    'numero': 0x3,
    'img': "js/img/treP.GIF"
  };
  mazzo.push(card2);
  card3 = {
    'seme': 'picche',
    'numero': 0x4,
    'img': "js/img/quattroP.GIF"
  };
  mazzo.push(card3);
  card4 = {
    'seme': "picche",
    'numero': 0x5,
    'img': "js/img/cinqueP.GIF"
  };
  mazzo.push(card4);
  card5 = {
    'seme': "picche",
    'numero': 0x6,
    'img': 'js/img/seiP.GIF'
  };
  mazzo.push(card5);
  card6 = {
    'seme': "picche",
    'numero': 0x7,
    'img': "js/img/setteP.GIF"
  };
  mazzo.push(card6);
  card7 = {
    'seme': "picche",
    'numero': 0x8,
    'img': 'js/img/ottoP.GIF'
  };
  mazzo.push(card7);
  card8 = {
    'seme': "picche",
    'numero': 0x9,
    'img': "js/img/noveP.GIF"
  };
  mazzo.push(card8);
  card9 = {
    'seme': "picche",
    'numero': 0xa,
    'img': 'js/img/dieciP.GIF'
  };
  mazzo.push(card9);
  card10 = {
    'seme': "fiori",
    'numero': 0x1,
    'img': "js/img/unoF.GIF"
  };
  mazzo.push(card10);
  card11 = {
    'seme': 'fiori',
    'numero': 0x2,
    'img': "js/img/dueF.GIF"
  };
  mazzo.push(card11);
  card12 = {
    'seme': "fiori",
    'numero': 0x3,
    'img': 'js/img/treF.GIF'
  };
  mazzo.push(card12);
  card13 = {
    'seme': 'fiori',
    'numero': 0x4,
    'img': "js/img/quattroF.GIF"
  };
  mazzo.push(card13);
  card14 = {
    'seme': 'fiori',
    'numero': 0x5,
    'img': "js/img/cinqueF.GIF"
  };
  mazzo.push(card14);
  card15 = {
    'seme': 'fiori',
    'numero': 0x6,
    'img': 'js/img/seiF.GIF'
  };
  mazzo.push(card15);
  card16 = {
    'seme': 'fiori',
    'numero': 0x7,
    'img': "js/img/setteF.GIF"
  };
  mazzo.push(card16);
  card17 = {
    'seme': "fiori",
    'numero': 0x8,
    'img': "js/img/ottoF.GIF"
  };
  mazzo.push(card17);
  card18 = {
    'seme': 'fiori',
    'numero': 0x9,
    'img': "js/img/noveF.GIF"
  };
  mazzo.push(card18);
  card19 = {
    'seme': "fiori",
    'numero': 0xa,
    'img': "js/img/dieciF.GIF"
  };
  mazzo.push(card19);
  card20 = {
    'seme': "quadri",
    'numero': 0x1,
    'img': "js/img/unoQ.GIF"
  };
  mazzo.push(card20);
  card21 = {
    'seme': "quadri",
    'numero': 0x2,
    'img': "js/img/dueQ.GIF"
  };
  mazzo.push(card21);
  card22 = {
    'seme': "quadri",
    'numero': 0x3,
    'img': "js/img/treQ.GIF"
  };
  mazzo.push(card22);
  card23 = {
    'seme': "quadri",
    'numero': 0x4,
    'img': 'js/img/quattroQ.GIF'
  };
  mazzo.push(card23);
  card24 = {
    'seme': "quadri",
    'numero': 0x5,
    'img': "js/img/cinqueQ.GIF"
  };
  mazzo.push(card24);
  card25 = {
    'seme': 'quadri',
    'numero': 0x6,
    'img': "js/img/seiQ.GIF"
  };
  mazzo.push(card25);
  card26 = {
    'seme': "quadri",
    'numero': 0x7,
    'img': "js/img/setteQ.GIF"
  };
  mazzo.push(card26);
  card27 = {
    'seme': "quadri",
    'numero': 0x8,
    'img': "js/img/ottoQ.GIF"
  };
  mazzo.push(card27);
  card28 = {
    'seme': "quadri",
    'numero': 0x9,
    'img': "js/img/noveQ.GIF"
  };
  mazzo.push(card28);
  card29 = {
    'seme': "quadri",
    'numero': 0xa,
    'img': "js/img/dieciQ.GIF"
  };
  mazzo.push(card29);
  card30 = {
    'seme': "cuori",
    'numero': 0x1,
    'img': "js/img/unoC.GIF"
  };
  mazzo.push(card30);
  card31 = {
    'seme': "cuori",
    'numero': 0x2,
    'img': "js/img/dueC.GIF"
  };
  mazzo.push(card31);
  card32 = {
    'seme': "cuori",
    'numero': 0x3,
    'img': "js/img/treC.GIF"
  };
  mazzo.push(card32);
  card33 = {
    'seme': "cuori",
    'numero': 0x4,
    'img': "js/img/quattroC.GIF"
  };
  mazzo.push(card33);
  card34 = {
    'seme': "cuori",
    'numero': 0x5,
    'img': "js/img/cinqueC.GIF"
  };
  mazzo.push(card34);
  card35 = {
    'seme': "cuori",
    'numero': 0x6,
    'img': "js/img/seiC.GIF"
  };
  mazzo.push(card35);
  card36 = {
    'seme': "cuori",
    'numero': 0x7,
    'img': "js/img/setteC.GIF"
  };
  mazzo.push(card36);
  card37 = {
    'seme': "cuori",
    'numero': 0x8,
    'img': "js/img/ottoC.GIF"
  };
  mazzo.push(card37);
  card38 = {
    'seme': "cuori",
    'numero': 0x9,
    'img': "js/img/noveC.GIF"
  };
  mazzo.push(card38);
  card39 = {
    'seme': "cuori",
    'numero': 0xa,
    'img': 'js/img/dieciC.GIF'
  };
  mazzo.push(card39);
  win1 = {
    'img': 'js/img/paribas.gif',
    'used': 'N',
    'val': "Even/Low"
  };
  maz_win.push(win1);
  win2 = {
    'img': "js/img/disparial.gif",
    'used': 'N',
    'val': "Odd/High"
  };
  maz_win.push(win2);
  win3 = {
    'img': 'js/img/disparibas.gif',
    'used': 'N',
    'val': "Odd/Low"
  };
  maz_win.push(win3);
  console.log(maz_win);
}
function conv(_0xb0b537) {
  var _0x7f66e4 = _0xb0b537.charAt(0x7);
  var _0x1cb7b7 = 0x0;
  switch (_0x7f66e4) {
    case 'u':
      _0x1cb7b7 = 0x1;
      break;
    case 't':
      _0x1cb7b7 = 0x3;
      break;
    case 'q':
      _0x1cb7b7 = 0x4;
      break;
    case 'c':
      _0x1cb7b7 = 0x5;
      break;
    case 'o':
      _0x1cb7b7 = 0x8;
      break;
    case 'n':
      _0x1cb7b7 = 0x9;
      break;
    case 'd':
      _0x7f66e4 = _0xb0b537.charAt(0x8);
      if (_0x7f66e4 == 'u') {
        _0x1cb7b7 = 0x2;
      } else {
        _0x1cb7b7 = 0xa;
      }
      break;
    case 's':
      _0x7f66e4 = _0xb0b537.charAt(0x9);
      if (_0x7f66e4 == 'i') {
        _0x1cb7b7 = 0x6;
      } else {
        _0x1cb7b7 = 0x7;
      }
      break;
  }
  return _0x1cb7b7;
}