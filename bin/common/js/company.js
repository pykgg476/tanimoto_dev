
/*----------------------------------------
 Init
----------------------------------------*/

$(function(){	

// マップ
var mapOptions1 = {
  center: new google.maps.LatLng(35.443513,139.633498),
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scaleControl: true, 
  scrollwheel: false
};
var mapOptions2 = {
  center: new google.maps.LatLng(35.5740098,139.7639585),
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scaleControl: true, 
  scrollwheel: false
};
var mapOptions3 = {
  center: new google.maps.LatLng(38.2651073,140.8796244),
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scaleControl: true, 
  scrollwheel: false
};
var mapOptions4 = {
  center: new google.maps.LatLng(35.2939486,139.64059810000003),
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scaleControl: true, 
  scrollwheel: false
};
var map1 = new google.maps.Map(document.getElementById("map_canvas1"),mapOptions1);
var map2 = new google.maps.Map(document.getElementById("map_canvas2"),mapOptions2);
var map3 = new google.maps.Map(document.getElementById("map_canvas3"),mapOptions3);
var map4 = new google.maps.Map(document.getElementById("map_canvas4"),mapOptions4);

var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(35.443513,139.633498),
    map: map1, 
    title: '本社'
});

var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(35.5740098,139.7639585),
    map: map2, 
    title: '東京支店'
});

var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(38.2651073,140.8796244),
    map: map3, 
    title: '東北支店'
});

var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(35.2939486,139.64059810000003),
    map: map4, 
    title: '横須賀営業所'
});
var infowindow1 = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px; font-weight: bold;">本社</div><a style="font-size: 12px;" target="_blank" href="https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC,+%E3%80%92231-0045+%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E4%B8%AD%E5%8C%BA%E7%BE%BD%E8%A1%A3%E7%94%BA%EF%BC%92%E4%B8%81%E7%9B%AE+%E9%96%A2%E5%86%85%E9%A7%85%E5%89%8D%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%93%E3%83%AB/@35.443513,139.633498,16z/data=!4m2!3m1!1s0x60185cf39472bff9:0x84de34976fddc08d?hl=ja">大きな地図で見る</a>',
    size: new google.maps.Size(100, 100)
});

infowindow1.open(map1,marker1);

var infowindow2 = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px; font-weight: bold;">東京支店</div><a style="font-size: 12px;" target="_blank" href="https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC,+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A4%A7%E7%94%B0%E5%8C%BA%E4%BA%AC%E6%B5%9C%E5%B3%B6%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%94%E2%88%92%EF%BC%91/@35.574112,139.763869,16z/data=!4m2!3m1!1s0x6018617812ef3a8b:0x5b81334d3578786e?hl=ja">大きな地図で見る</a>',
    size: new google.maps.Size(100, 100)
});
infowindow2.open(map2,marker2);

var infowindow3 = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px; font-weight: bold;">東北支店</div><a style="font-size: 12px;" target="_blank" href="https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC,+%E3%80%92980-0014+%E5%AE%AE%E5%9F%8E%E7%9C%8C%E4%BB%99%E5%8F%B0%E5%B8%82%E9%9D%92%E8%91%89%E5%8C%BA%E6%9C%AC%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%92%EF%BC%98+%E3%82%AB%E3%83%BC%E3%83%8B%E3%83%BC%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E4%BB%99%E5%8F%B0%E9%A7%85%E5%89%8D%E9%80%9A/@38.265074,140.879663,16z/data=!4m2!3m1!1s0x5f8a2826b746cd79:0x176530842a5c3b1d?hl=ja">大きな地図で見る</a>',
    size: new google.maps.Size(100, 100)
});
infowindow3.open(map3,marker3);

var infowindow4 = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px; font-weight: bold;">横須賀営業所</div><a style="font-size: 12px;" target="_blank" href="https://www.google.com/maps/place/%E7%9B%B8%E6%A8%A1%E9%81%8B%E8%BC%B8%E5%80%89%E5%BA%AB%EF%BC%88%E6%A0%AA%EF%BC%89+%E6%9C%AC%E7%A4%BE%E5%80%89%E5%BA%AB%E8%AA%B2/@35.294021,139.637215,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x4b811aedb22f0fe8?hl=ja">大きな地図で見る</a>',
    size: new google.maps.Size(100, 100)
});
infowindow4.open(map4,marker4);
  
});


/*----------------------------------------
 Function
----------------------------------------*/


	

/*----------------------------------------
 Library 
----------------------------------------*/

