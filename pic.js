$(function (){
	var $bannerBox=$(".banner");
	var $bannerMn=$bannerBox.children("ul.brick-ad-plain");
	var $len=$bannerMn.children("li").length;
	var $_width=$bannerMn.children("li").eq(0).width();
	var $subPics=$(".ad-pp .brick-ad-plain").children("li");
	$subPics.children("a").attr("href","javascript:;");
	var $index=0;
	var picTimer=null;
	$bannerMn.css({position:"absolute",width:$_width*($len+1)+"px"});
	$subPics.eq(0).addClass("current");
	var btnHtml="<span class='bannerBtn leftBtn'></span><span class='bannerBtn rightBtn'></span>";
	$bannerBox.append(btnHtml);
	$bannerMn.children("li").eq(0).clone().appendTo($bannerMn);


	function slidePic($index){
		var $left=$_width*$index;
		$bannerMn.stop().animate({left:-$left},500,function (){
			if($bannerMn.css("left")==(-$_width*$len+"px")){				
				$bannerMn.css({left:0});
				$index=0;
				$subPics.eq($index).addClass("current").siblings().removeClass("current");
			}
		});
		$subPics.eq($index).addClass("current").siblings().removeClass("current");
	}

	$subPics.click(function (){
		$index=$(this).index();
		slidePic($index);
	});

	function next(){
		$index++;
		$index=$index>$len?1:$index;
		slidePic($index);
	}

	$(".leftBtn").click(function (){
		$index--;
		$index=$index<0?$len-1:$index;
		slidePic($index);
	});

	$(".rightBtn").click(function (){
		next();
	});
	
	$bannerBox.hover(function (){
		clearInterval(picTimer);
	},function (){
		picTimer=setInterval(next,6000);
	}).trigger("mouseleave");

	$subPics.hover(function (){
		clearInterval(picTimer);
	},function (){
		picTimer=setInterval(next,6000);
	});

});
