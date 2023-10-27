
/*----------------------------------------
 Init
----------------------------------------*/

$(function(){	

  $('.hideOverlay').width($(document).width()).height($(document).height()).parents('body').fadeIn(function(){
    panelSize();
    var symbolSet = $('.hideOverlay').find('.symbolSet');
    setTimeout(function(){ symbolSet.find('.symbol').fadeIn(3000); },200);
    setTimeout(function(){ symbolSet.find('.catch').fadeIn(3000); },800);
    // パネルがふわっと出てくる
    setTimeout(function(){
      $('.hideOverlay').fadeOut(2500,function(){ $(this).remove(); });
    },1800);
  });

  // パネルのサイズ
  $(window).resize(function(){ hp = $('#topPanelArea').height(); panelSize(); });

  // ボタンマウスオーバー
  var btn = $('.js_btn');
  mouseOverEffect(btn,'a',.7,1,false);

  // 取り組みマウスオーバー
  var about = $('#topAbout').find('.project').find('a');
  about.hover(function(){
    $(this).find('img').stop(true,true).animate({width: '+=20px',left: '-=10px', top: '-=10px'});
  },
  function(){
    $(this).find('img').stop(true,true).animate({width: '-=20px',left: '+=10px', top: '+=10px'});
  });

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

var headerLogo = function(thp){
  var head = $('#globalHeader').find('.logo');
  var ds = $(document).scrollTop();
  if($('#topPanelArea').length){
    var ph = $('#topPanelArea').height();
    ds = ds - ph + thp;
  }
  if(thp < ds){
    head.find('.noSymbol').addClass('is_disable').siblings('.symbol').removeClass('is_disable');
  }else if(thp >= ds){
    head.find('.symbol').addClass('is_disable').siblings('.noSymbol').removeClass('is_disable');
  }
}

var panelSize = function(){
	var ww = $(window).width();
	var wh = $(window).height() - $('#globalHeader').height();
	$('#topPanelArea').width(ww).height(wh);
	$('#topPanelArea').find('.base').width(ww).height(wh);
}


/*----------------------------------------
 Library 
----------------------------------------*/
