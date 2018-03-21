$(function(){
	//1.头部的a划过时改变字体颜色
 	$(".header_top a").hover(function(){
		$(this).toggleClass('a_active');
	});
	//2.头部的a划过时phoe的图片出现
	$('.li_phone').hover(function(){
		$('.phone_img').toggle(0);
	});
	//3.搜索框底部的a划过改变字体颜色
	$('.bot_mid_bot a').hover(function(){
		$(this).toggleClass('a_active');
	});
	//4.导航栏的li划过改变背景颜色 
	$('.nav_mid li').hover(function(){
		$(this).toggleClass('nav_active');
		// $('.onea').addClass('nav_active');
	});
	//5.导航侧边栏划过显示列表
	$('.nav_left_ul li').each(function(k){//传参k,v均可以实现
		$(this).mouseenter(function(){//eq(n);获取第n个元素
			$(this).css('background','#f1f1f1').css('border-left','3px solid #ce171f');
			$('.nav_left_div').eq(k).css('display','block');
		});
		$(this).mouseleave(function(){
			$(this).css('background','#fff').css('border-left','3px solid #fff');
			$('.nav_left_div').eq(k).css('display','none').mouseenter(function(){
				$('.nav_left_div').eq(k).css('display','block');//当鼠标离开li，进入div时，div显示
			});
			$('.nav_left_div').eq(k).mouseleave(function(){//当鼠标离开li，div时，div消失
				$('.nav_left_div').eq(k).css('display','none');
			});
		});
	});
});