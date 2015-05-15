
/* JQuery **************************************************************/
$(document).ready(function() {
  
  $('.Game').hover(
    function() {
      $(this).find('.description').slideDown();
    },
    function() {
      $(this).find('.description').slideUp();
    }
  );
  
  
});

/* JS **************************************************************/
function getObj(name) {
  if (document.getElementById) {
    this.obj = document.getElementById(name);
    this.style = document.getElementById(name).style;
  } else if (document.all) {
	this.obj = document.all[name];
	this.style = document.all[name].style;
  } else if (document.layers) {
   	this.obj = document.layers[name];
   	this.style = document.layers[name];
  }
}
 
var gamesArray = new Array(15);
var prsArray = new Array(15);
var prijsArray = new Array();
var totprijs, btn;
/** 
  * Alles Declareren
  */
function Load() {
  /* Array met games */
  gamesArray[0] = new getObj('Wolf3D');
  gamesArray[1] = new getObj('ReturnWolf');
  gamesArray[2] = new getObj('WolfET');
  gamesArray[3] = new getObj('Wolf');
  gamesArray[4] = new getObj('WolfNewOrder');
  gamesArray[5] = new getObj('SE');
  gamesArray[6] = new getObj('SEV2');
  gamesArray[7] = new getObj('SE3');
  gamesArray[8] = new getObj('COD');
  gamesArray[9] = new getObj('COD2');
  gamesArray[10] = new getObj('COD3');
  gamesArray[11] = new getObj('CODRtV');
  gamesArray[12] = new getObj('CODWaW');
  gamesArray[13] = new getObj('HG');
  gamesArray[14] = new getObj('WT');
  gamesArray[15] = new getObj('WoT');
  
  /* Array van totpijzen */
  prsArray[0] = new getObj('W3Dprijs');
  prsArray[1] = new getObj('RWprijs');
  prsArray[2] = new getObj('WETprijs');
  prsArray[3] = new getObj('Wprijs');
  prsArray[4] = new getObj('WNOprijs');
  prsArray[5] = new getObj('SEprijs');
  prsArray[6] = new getObj('SEV2prijs');
  prsArray[7] = new getObj('SE3prijs');
  prsArray[8] = new getObj('CODprijs');
  prsArray[9] = new getObj('COD2prijs');
  prsArray[10] = new getObj('COD3prijs');
  prsArray[11] = new getObj('CODRtVprijs');
  prsArray[12] = new getObj('CODWaWprijs');
  prsArray[13] = new getObj('HGprijs');
  prsArray[14] = new getObj('WTprijs');
  prsArray[15] = new getObj('WoTprijs');
  
  totprijs = new getObj('Totprijs');
  btn = new getObj('btn');
  
  /* Array met eenheidsprijzen */
  prijsArray[0] = 4.99;
  prijsArray[1] = 9.99;
  prijsArray[2] = 0;
  prijsArray[3] = 53.95;
  prijsArray[4] = 40.99;
  prijsArray[5] = 9.99;
  prijsArray[6] = 27.99;
  prijsArray[7] = 45.99;
  prijsArray[8] = 19.99;
  prijsArray[9] = 19.99;
  prijsArray[10] = 32.95;
  prijsArray[11] = 29.07;
  prijsArray[12] = 24.99;
  prijsArray[13] = 0;
  prijsArray[14] = 0;
  prijsArray[15] = 0;
  
    for (var i = 0; i <= 15; i++) {
      gamesArray[i].obj.onchange = vulprijs;
    }
  btn.obj.onclick = clear;
  Fillselect();
  vulprijs();
  clear();
}
/**
  * Selectbox vullen 
  */
function Fillselect() {
  var selectbox = new getObj('IDjaar');
  var Datum = new Date();
  var jaar = Datum.getFullYear();

  for(var i = jaar; i >= 1970; i--){
   selectbox.obj.options[selectbox.obj.length] = new Option(i,i);
  }
}


/**
  * Prijschecker leegmaken 
  */
function clear() {
  console.log('OK')
  totprijs.obj.value = '0';
  
  for (var i = 0; i <= 15;i++) {
    gamesArray[i].obj.value = '0';
  }
  for (var i = 0; i <= 15;i++) {
    prsArray[i].obj.value = '0';
  }
        
}

/**
  * Prijzen vullen
  */
function vulprijs() {
  for (var i = 0; i <=15; i++) {
    var ant = gamesArray[i].obj.value;
    var prs = ant * prijsArray[i];
    prsArray[i].obj.value = prs;
  }
    var totprijz = parseInt(prsArray[0].obj.value) + parseInt(prsArray[1].obj.value) + parseInt(prsArray[2].obj.value) + parseInt(prsArray[3].obj.value)
                 + parseInt(prsArray[4].obj.value) + parseInt(prsArray[5].obj.value) + parseInt(prsArray[6].obj.value) + parseInt(prsArray[7].obj.value)
                 + parseInt(prsArray[8].obj.value) + parseInt(prsArray[9].obj.value) + parseInt(prsArray[10].obj.value) + parseInt(prsArray[11].obj.value)
                 + parseInt(prsArray[12].obj.value) + parseInt(prsArray[13].obj.value) + parseInt(prsArray[14].obj.value) + parseInt(prsArray[15].obj.value);
    totprijs.obj.value = totprijz;
}
  