$(function(){$("#topPanelArea").length&&($("#topPanelArea").css({backgroundSize:"cover"}),$("#topAbout").find(".aboutUnit").css({backgroundSize:"cover"})),$("#panelArea").length&&$("#panelArea").css({backgroundSize:"cover"})}),function(c,t,u){var e=c("<div>")[0],a=/url\(["']?(.*?)["']?\)/,n=[],r={top:0,left:0,bottom:1,right:1,center:.5};if(!("backgroundSize"in e.style)||c.debugBGS){c.cssHooks.backgroundSize={set:function(t,e){var s,i,a,o=!c.data(t,"bgsImg");c.data(t,"bgsValue",e),o?(n.push(t),c.refreshBackgroundDimensions(t,!0),i=c("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"}),a=c("<img>").css({position:"absolute"}).appendTo(i),i.prependTo(t),c.data(t,"bgsImg",a[0]),s=(c.css(t,"backgroundPosition")||c.css(t,"backgroundPositionX")+" "+c.css(t,"backgroundPositionY")).split(" "),c.data(t,"bgsPos",[r[s[0]]||parseFloat(s[0])/100,r[s[1]]||parseFloat(s[1])/100]),"auto"==c.css(t,"zIndex")&&(t.style.zIndex=0),"static"==c.css(t,"position")&&(t.style.position="relative"),c.refreshBackgroundImage(t)):c.refreshBackground(t)},get:function(t){return c.data(t,"bgsValue")||""}},c.cssHooks.backgroundImage={set:function(t,e){return c.data(t,"bgsImg")?c.refreshBackgroundImage(t,e):e}},c.refreshBackgroundDimensions=function(t,e){var s=c(t),i={width:s.innerWidth(),height:s.innerHeight()},a=c.data(t,"bgsDim"),o=!a||i.width!=a.width||i.height!=a.height;c.data(t,"bgsDim",i),o&&!e&&c.refreshBackground(t)},c.refreshBackgroundImage=function(e,t){var s=c.data(e,"bgsImg"),i=(a.exec(t||c.css(e,"backgroundImage"))||[])[1];i!=(s&&s.src)&&(s.style.height=s.style.width="auto",s.onload=function(){var t={width:s.width,height:s.height};1==t.width&&1==t.height||(c.data(e,"bgsImgDim",t),c.data(e,"bgsConstrain",!1),c.refreshBackground(e),s.style.visibility="visible",s.onload=null)},s.style.visibility="hidden",s.src=i,(s.readyState||s.complete)&&(s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",s.src=i),e.style.backgroundImage="none")},c.refreshBackground=function(t){var e,s,i=c.data(t,"bgsValue"),a=c.data(t,"bgsDim"),o=c.data(t,"bgsImgDim"),n=c(c.data(t,"bgsImg")),r=c.data(t,"bgsPos"),h=c.data(t,"bgsConstrain"),d=a.width/a.height,g=o.width/o.height;"contain"==i?d<g?(c.data(t,"bgsConstrain",e="width"),s=u.floor((a.height-a.width/g)*r[1]),n.css({top:s}),e!=h&&n.css({width:"100%",height:"auto",left:0})):(c.data(t,"bgsConstrain",e="height"),s=u.floor((a.width-a.height*g)*r[0]),n.css({left:s}),e!=h&&n.css({height:"100%",width:"auto",top:0})):"cover"==i&&(d<g?(c.data(t,"bgsConstrain",e="height"),s=u.floor((a.height*g-a.width)*r[0]),n.css({left:-s}),e!=h&&n.css({height:"100%",width:"auto",top:0})):(c.data(t,"bgsConstrain",e="width"),s=u.floor((a.width/g-a.height)*r[1]),n.css({top:-s}),e!=h&&n.css({width:"100%",height:"auto",left:0})))};var o,h,d,g=c.event,l={_:0},b=0;o=g.special.throttledresize={setup:function(){c(this).on("resize",o.handler)},teardown:function(){c(this).off("resize",o.handler)},handler:function(t,e){var s=this,i=arguments;h=!0,d||(c(l).animate(l,{duration:1/0,step:function(){(++b>o.threshold&&h||e)&&(t.type="throttledresize",g.dispatch.apply(s,i),h=!1,b=0),9<b&&(c(l).stop(),d=!1,b=0)}}),d=!0)},threshold:1},c(t).on("throttledresize",function(){c(n).each(function(){c.refreshBackgroundDimensions(this)})})}}(jQuery,window,(document,Math));