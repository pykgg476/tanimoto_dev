
/*----------------------------------------
 Init
----------------------------------------*/

var id = [];

$(function(){	

	// サイドナビマウスオーバー
	var snavi = $("#sideNaviArea").find('.list').not('.now');
	mouseOverEffect(snavi,'a',1,.5,true);
	var snaviBnr = $("#sideNaviArea").find('.bnr');
	mouseOverEffect(snaviBnr,'a',1,.8,true);

	var snaviParent = $("#sideNaviArea").find('.pageTitle');
	mouseOverEffect(snaviParent,'a',.7,1,true);

  // サイドナビクリック
  // snavi.click(function(){
  // 	$(this).siblings('.now').removeClass('now').end().addClass('now');
  // });

	// サイドナビ固定
	if(!$.browser.android && !$.browser.iphone){
		if($('#sideNaviArea').length){
			sideNaviPos();
			$(window).scroll(function(){ sideNaviPos(); });
		}
	}

	// サイドナビ現在地
	if($('#sideNaviArea').length){
		$('#sideNaviArea').find('.list').each(function(){
			id.push($(this).find('a'));
		});
		var secPos = [];
		var idHref;
		for(i=0; i<id.length; i++){
			idHref = $(id[i]).attr('href');
			pos = $(idHref).offset().top - 200;
			secPos.push(pos);
		}
		sideNaviNow(secPos);
		$(window).scroll(function(){ sideNaviNow(secPos); });
	}

	// 動画モーダル
	$('.prjUnit').find('.workUnit').find('.photo').find('.movieLink').find('a').magnificPopup({
		type:'iframe',
	  midClick: true,
	  mainClass: 'mfp-fade',
	  iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      src: '//www.youtube.com/embed/RFck7-CWNfg?rel=0&showinfo=0' // URL that will be set as a source for iframe.
		    }
		  }
		}
	 });
  
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
	if(ds+snPos>ct+ch-snh){
			sn.css({position: 'relative',top:ct+ch-snh-snh});
		}else if(ds>ct-snPos){
			sn.css({position: 'fixed', top:snPos});
		}else{
			sn.css({position: 'relative', top:0});
		}
}

var sideNaviNow = function(secPos){
	var ds = $(window).scrollTop();
	$('#sideNaviArea').find('.now').removeClass('now');
	for(i=secPos.length;i>-1;i--){
		if(ds>secPos[i]){
			id[i].parents('.list').addClass('now');
			return false;
		}
	}
}