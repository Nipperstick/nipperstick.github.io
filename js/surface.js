var zones = {
  arcium: {name:"Arcium", coords:"200,200,240,240", min:15, max:50, cnx:["gc"], items:[]},
  myra: {name:"Myrabolus", coords:"360,140,430,180", min:10, max:50, cnx:["gc"], items:[]},
  outcast: {name:"Outcast Tower", coords:"320,730,390,770", min:25, max:50, cnx:["gc","ud"], items:[]}
}

var mapTip = document.getElementById('mapTip');
var zoneName = document.getElementById('zoneName');
var zoneMin = document.getElementById('zoneMin');
var zoneMax = document.getElementById('zoneMax');

document.addEventListener('mousemove', setTipPos, false);

function setTipPos(e) {
  mapTip.style.left = e.pageX + 'px';
  mapTip.style.top = e.pageY + 'px';
}

function showTip(z) {
  var zone = zones[z];
  zoneName.innerHTML=zone.name;
  zoneMin.innerHTML=zone.min;
  zoneMax.innerHTML=zone.max;
  mapTip.style.display='block';
}

function hideTip() {
  mapTip.style.display='none';
}

function makeMap() {
  var map = document.getElementById("surfacemap");
  for (let i in zones) {
    var area = document.createElement('area');
    area.shape='rect';
    area.coords=zones[i].coords;
    area.target="_blank";
    area.href=i;
    area.onmouseover=function(){showTip(i);};
    area.onmouseout=function(){hideTip();};
    map.appendChild(area);
  }
}

makeMap();
