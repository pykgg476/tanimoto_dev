$(function(){
  $(".hideOverlay").width($(document).width()).height($(document).height()).parents("body").fadeIn(function(){
    panelSize();
    var i=$(".hideOverlay").find(".symbolSet");
    setTimeout(function(){i.find(".symbol").fadeIn(3e3)},200),setTimeout(function(){i.find(".catch").fadeIn(3e3)},800),setTimeout(function(){$(".hideOverlay").fadeOut(2500,function(){$(this).remove()})},1800)
  }),
  $(window).resize(function(){hp=$("#topPanelArea").height(),panelSize()});

  var i=$(".js_btn");
  mouseOverEffect(i,"a",.7,1,!1);

  // Project thumbnails: use transform-based zoom
  $(".topProject .project a").hover(
    function(){ $(this).find("img").addClass("is-zoom") },
    function(){ $(this).find("img").removeClass("is-zoom") }
  );

  // Work thumbnails: use transform-based zoom
  $("#topWork .work a").hover(
    function(){ $(this).find("img").addClass("is-zoom") },
    function(){ $(this).find("img").removeClass("is-zoom") }
  );
});
var headerLogo=function(i){var e=$("#globalHeader").find(".logo"),t=$(document).scrollTop();i<(t=$("#topPanelArea").length?t-$("#topPanelArea").height()+i:t)?e.find(".noSymbol").addClass("is_disable").siblings(".symbol").removeClass("is_disable"):t<=i&&e.find(".symbol").addClass("is_disable").siblings(".noSymbol").removeClass("is_disable")},panelSize=function(){var i=$(window).width(),e=$(window).height()-$("#globalHeader").height();$("#topPanelArea").width(i).height(e),$("#topPanelArea").find(".base").width(i).height(e)};
