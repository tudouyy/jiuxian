$(function(){
	// 1.导航栏的h2划过显示ul
	$('.nav_left').hover(function(){
		$('.nav_left_ul').show();
	},
	function(){
		$('.nav_left_ul').hide();
	});


	//2.点击向上增加数量，向下数量递减
	var num = parseInt($('.line4 div input').val());
	$(".line4 div .a1").click(function(){
		num++;
		
		$(".line4 div input").val(num);
	});
	$(".line4 div .a2").click(function(){
		num--;
		if(num<0){
			num=0;
		}
		$(".line4 div input").val(num);
	});
});