
/*----------------------------------------
 Init
----------------------------------------*/

$(function(){	

// マップ
var mapOptions = {
  center: new google.maps.LatLng(34.702724,135.487657),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scaleControl: true, 
  scrollwheel: false
};
var map = new google.maps.Map(document.getElementById("map_canvas1"),mapOptions);
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(34.702724,135.487657),
    map: map, 
    title: 'Bridal Mi Chinita'
});
var infowindow = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px; font-weight: bold;">Bridal Mi Chinita</div><a style="font-size: 12px;" target="_blank" href="https://www.google.co.jp/maps/preview#!q=BAR+Mi+Chinita&data=!4m15!2m14!1m13!1s0x6000e688299e3f85%3A0xcbae38862774e13f!3m8!1m3!1d2780!2d135.4876356!3d34.7027169!3m2!1i1226!2i651!4f13.1!4m2!3d34.702717!4d135.487636">大きな地図で見る</a>',
    size: new google.maps.Size(100, 100)
});
infowindow.open(map,marker);
  
});


/*----------------------------------------
 Function
----------------------------------------*/


	

/*----------------------------------------
 Library 
----------------------------------------*/

