var mapTip = document.getElementById('mapTip');
var zoneName = document.getElementById('zoneName');
var zoneMin = document.getElementById('zoneMin');
var zoneMax = document.getElementById('zoneMax');
var zoneCnx = document.getElementById('zoneCnx');
var zoneQuests = document.getElementById('zoneQuests');
var zoneAmenities = document.getElementById('zoneAmenities');

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
  zoneWarning.innerHTML= (zone.warning === undefined) ? "" : zone.warning;
  zoneCont.innerHTML=zone.cont.toString().toUpperCase();

  var cnx = '';
  for (let i in zone.cnx) {
    if (i == 0) {
      cnx += 'Connects to ';
    } else {
      cnx += ', ';
    }
    var connectedZone = zone.cnx[i];
    cnx += zones[connectedZone].name;
  }
  zoneCnx.innerHTML=cnx;

  var quests = '';
  for (let i in zone.quests) {
    if (i == 0) {
      quests += 'Quests: ';
    } else {
      quests += ', ';
    }
    quests += zone.quests[i].mob;
  }
  zoneQuests.innerHTML=quests;

  var amenities = '';
  for (let i in zone.amenities) {
    if (i == 0) {
      amenities += 'Amenities: ';
    } else {
      amenities += ', ';
    }
    amenities += zone.amenities[i];
  }
  zoneAmenities.innerHTML=amenities;

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
    area.coords=zones[i].hotspot;
    area.target="_blank";
    area.href='map/' + i + '.jpg';
    area.onmouseover=function(){showTip(i);};
    area.onmouseout=function(){hideTip();};
    map.appendChild(area);
  }
}

makeMap();
