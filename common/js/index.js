
/*----------------------------------------
 Init
----------------------------------------*/

$(function(){	

	// パネルのサイズ
	panelSize();
	$(window).resize(function(){ panelSize(); });

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
