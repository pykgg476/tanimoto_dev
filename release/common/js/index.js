$(function(){$(".hideOverlay").width($(document).width()).height($(document).height()).parents("body").fadeIn(function(){panelSize(),setTimeout(function(){$(".hideOverlay").fadeOut(1e3,function(){$(this).remove()})},500),setTimeout(function(){$("#topPanelArea").find(".base").fadeIn(1e3)},1500),setTimeout(function(){$("#topPanelArea").find(".catch").fadeIn(1e3)},2e3)}),$(window).resize(function(){hp=$("#topPanelArea").height(),panelSize()});var a=$(".js_btn");mouseOverEffect(a,"a",1,.7,!1);var b=$("#topWork").find(".work").find("a");b.hover(function(){$(this).find("img").stop(!0,!0).animate({width:"+=20px",left:"-=10px",top:"-=10px"})},function(){$(this).find("img").stop(!0,!0).animate({width:"-=20px",left:"+=10px",top:"+=10px"})})});var panelSize=function(){var a=$(window).width(),b=$(window).height()-$("#globalHeader").height();$("#topPanelArea").width(a).height(b),$("#topPanelArea").find(".base").width(a).height(b)};