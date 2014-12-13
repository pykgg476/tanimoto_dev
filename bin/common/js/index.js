
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
      $('#topPanelArea').find('.symbolSet').fadeIn(800);
    },2000);
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
  
  // ヘッダーロゴ差し替え
  var thp = $('#globalHeader').offset().top + $('#globalHeader').height();
  headerLogo(thp);
  $(window).scroll(function(){ headerLogo(thp); });

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
