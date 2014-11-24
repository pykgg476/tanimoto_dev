
/*----------------------------------------
 Init
----------------------------------------*/

$(function(){	

  $('.hideOverlay').width($(document).width()).height($(document).height()).parents('body').fadeIn(function(){
    panelSize();
    // パネルがふわっと出てくる
    setTimeout(function(){
      $('.hideOverlay').fadeOut(1000,function(){ $(this).remove(); });
    },500);
    setTimeout(function(){
      $('#topPanelArea').find('.base').fadeIn(800);
    },1500);
    setTimeout(function(){
      $('#topPanelArea').find('.catch').fadeIn(800);
    },2000);
    setTimeout(function(){
      $('#topPanelArea').find('.logo').fadeIn(800);
    },2700);
  });

  // パネルのサイズ
  $(window).resize(function(){ hp = $('#topPanelArea').height(); panelSize(); });

  // ボタンマウスオーバー
  var btn = $('.js_btn');
  mouseOverEffect(btn,'a',1,.7,false);

  // 実績マウスオーバー
  var work = $('#topWork').find('.work').find('a');
  work.hover(function(){
    $(this).find('img').stop(true,true).animate({width: '+=20px',left: '-=10px', top: '-=10px'});
  },
  function(){
    $(this).find('img').stop(true,true).animate({width: '-=20px',left: '+=10px', top: '+=10px'});
  });
  


});
	

/*----------------------------------------
 Function
----------------------------------------*/

var panelSize = function(){
	var ww = $(window).width();
	var wh = $(window).height() - $('#globalHeader').height();
	$('#topPanelArea').width(ww).height(wh);
	$('#topPanelArea').find('.base').width(ww).height(wh);
}


/*----------------------------------------
 Library 
----------------------------------------*/
