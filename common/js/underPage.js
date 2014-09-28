
/*----------------------------------------
 Init
----------------------------------------*/

$(function(){	

	// サイドナビマウスオーバー
	var snavi = $("#sideNaviArea").find('.list').not('.now');
	mouseOverEffect(snavi,'a',1,.5,true);

	var snaviParent = $("#sideNaviArea").find('.pageTitle');
	mouseOverEffect(snaviParent,'a',.7,1,true);

  // サイドナビクリック
  snavi.click(function(){
  	$(this).siblings('.now').removeClass('now').end().addClass('now');
  });

	// サイドナビ固定
	if($('#sideNaviArea').length){
		sideNaviPos();
		$(window).scroll(function(){ sideNaviPos(); });
	}
			
  
});


/*----------------------------------------
 Function
----------------------------------------*/

var sideNaviPos = function(){
	var ct = $('.contentsArea').offset().top;
	var ch = $('.contentsArea').height();
	var sn = $('#sideNaviArea');
	var f = $('#globalFooter');
	var snPos = $('#globalHeader').height() + 25;
	var snh = sn.height();
	var ds = $(document).scrollTop();
	var ft = f.offset().top;
	var fh = f.height();
	if(ds>ct+ch-snh){
			sn.css({position: 'absolute',top:ct+ch-snh});
		}else if(ds>ct+40){
			sn.css({position: 'fixed', top:snPos});
		}else{
			sn.css({position: 'relative', top:0});
		}
}