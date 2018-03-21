$(function(){
	//1.导航栏的h2划过显示ul
	// $('.nav_left').hover(function(){
	// 	$('.nav_left_ul').show();
	// },
	// function(){
	// 	$('.nav_left_ul').hide();
	// });
	

	//2.更多选项的划过
	$('.choa').hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});
	//3.fivebox的li,划过加class：on
	$('.fivebox ul li').hover(function(){
		$(this).not('.one').not('.input').toggleClass('on');
	});

	// //3.商品列表的li划过边框显示
	// $('.content').hover(function(){
	// 	$(this).prev().show();
	// },function(){
	// 	$(this).prev().hide();
	// });

	//4.商品列表点击向上增加数量，向下数量递减
	var num = parseInt($('.nums').val());
	$(".up").click(function(){
		num++;
		$(".nums").val(num);
	});
	$(".down").click(function(){
		num--;
		if(num<0){
			num=0;
		}
		$(".nums").val(num);
	});

});