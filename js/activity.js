$(function(){
	//1.导航栏的h2划过显示ul
	$('.nav_left').hover(function(){
		$('.nav_left_ul').show();
	},
	function(){
		$('.nav_left_ul').hide();
	});

	//2.点击显示弹出窗
	$('.lian').click(function(){
		$('.divs').show();
	});

	//3.鼠标点击右上角X之后  关闭
	$('.divs span').click(function(){
		var e=event||window.event;
		$(".divs").hide();
		//阻止冒泡
		e.stopPropagation();
	});

	//4.点击优惠券
	$('.contth img').click(function(){
		alert('您还未登录不能领取优惠券，是否现在登录？');
	});
});