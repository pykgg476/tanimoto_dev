
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
		var cH = $('.contentsArea').offset().top;
		var sideNavi = $('#sideNaviArea');
		$(window).scroll(function(){
			if($(this).scrollTop() > cH+10){
				sideNavi.css({position: 'fixed', top:10});
			}else{
				sideNavi.css({position: 'relative', top:0});
			}
		});
	}
			
  
});


/*----------------------------------------
 Function
----------------------------------------*/

