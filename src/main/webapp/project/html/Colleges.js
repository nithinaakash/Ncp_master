var map;
var ourLoc;
var view;
var jhu;
var stan;
var mit;
var harv;
var aic;
var rice;
var yale;
var pric;
var cat;
var col;
var nyu;
var cm;
function init() {
  ourLoc = ol.proj.fromLonLat([27.767382, -25.925386]);
  view = new ol.View({
    center: ourLoc,
    zoom: 6
  });
  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}
function Medical(){
  jhu = ol.proj.fromLonLat([-76.617551, 39.322234])
  view.animate({
    center: jhu,
    zoom: 20,
    duration:2000
  })
}
function Meth(){
  stan = ol.proj.fromLonLat([-122.170059, 37.427662])
  view.animate({
    center: stan,
    zoom: 15,
    duration: 2000
  })
}
function Technology(){
  mit = ol.proj.fromLonLat([-71.093140, 42.359245])
  view.animate({
    center: mit,
    zoom: 17,
    duration: 2000
  })
}
function Politics(){
  harv = ol.proj.fromLonLat([-71.116661, 42.377003])
  view.animate({
    center:harv,
    zoom:17,
    duration:2000
  })
}
function Arts(){
  aic = ol.proj.fromLonLat([-118.445404, 34.065094])
  view.animate({
    center: aic,
    zoom:15,
    duration:2000
  })
}
function Engineering(){
    rice = ol.proj.fromLonLat([-95.402618, 29.716610])
    view.animate({
      center:rice,
      zoom: 15.2,
      duration: 2000
    })
}
function Medical2(){
  yale = ol.proj.fromLonLat([-72.922340, 41.316322])
  view.animate({
    center:yale,
    zoom: 16,
    duration: 2000
  })
}
function Meth2(){
  pric = ol.proj.fromLonLat([-74.651451,40.343990])
  view.animate({
    center:pric,
    zoom: 16,
    duration: 2000
  })
}
function Tech2(){
    cat = ol.proj.fromLonLat([-118.127792, 34.135880])
    view.animate({
      center:cat,
      zoom: 16.336,
      duration: 2000
    })
}
function Politics2(){
  col = ol.proj.fromLonLat([-73.962570,40.807537])
  view.animate({
    center:col,
    zoom: 15.863,
    duration:2000
  })
}
function Arts2(){
  nyu = ol.proj.fromLonLat([-73.993568, 40.729462])
  view.animate({
    center: nyu,
    zoom: 16.37,
    duration:2000
  })
}
function Eng2(){
  cm = ol.proj.fromLonLat([-79.943016, 40.442806])
  view.animate({
    center: cm,
    zoom: 15.92173,
    duration: 2000
  })
}
window.onload = init;
