//页面载入事件
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
			$(this).css('background','#f1f1f1');
			$('.nav_left_div').eq(k).css('display','block');
		});
		$(this).mouseleave(function(){
			$(this).css('background','#fff');
			$('.nav_left_div').eq(k).css('display','none').mouseenter(function(){
				$('.nav_left_div').eq(k).css('display','block');//当鼠标离开li，进入div时，div显示
			});
			$('.nav_left_div').eq(k).mouseleave(function(){//当鼠标离开li，div时，div消失
				$('.nav_left_div').eq(k).css('display','none');
			});
		});
	});

	//6.遍历数组，给轮播图的li和div的a赋值
	var arr1=['01','02','03','04','05','06','07','08','09'];
	var arr2=['01','01','01','02','02','02','03','03','03','04','04','04','05','05','05','06','06','06','07','07','07','08','08','08','09','09','09'];
	// $.each(arr1,function(k,v){
	// 	$('.rotate_bul li').eq(k).css('background','url(img/rot'+v+'.jpg) center 0px no-repeat');
	// });
	// $.each(arr2,function(k,v){
	// 	$('.rotate_bul li div a').eq(k).css('background','url(img/rot'+v+'.png) center 0px no-repeat');
	// });
	// for(var i=0;i<arr1.length;i++){
	// 	arr1[i].index = i;
	// 	setInterval(function(){
	// 		$('.rotate_bul li').css('background','url(img/rot'+index+'.jpg) center 0px no-repeat');
	// 	},1000);
	// }
	
	//7.疯狂抢购的选项卡效果
	$('.list_one_left ul li').mouseover(function () {
		var index = $(this).index();
		$('.list_one_left li').removeClass('gli_on').eq(index).addClass('gli_on');
		$('.list_div').removeClass('div2_active').eq(index).addClass('div2_active');
	});
	$('.liRightone ul li').mouseover(function () {
		var index = $(this).index();
		$('.liRightone li').removeClass('gli_on2').eq(index).addClass('gli_on2');
		$('.liRightone div').addClass('div3_active').eq(index).removeClass('div3_active');
	});
	//8.疯狂抢购的a划过效果
	$('.goodslist_one a').hover(function(){
		$(this).toggleClass('a_active');
	});
	//9.右侧轮播图
		// new Carousel({
		// 	el: document.getElementById('carousel')
		// });
	//10.限时秒杀滚动图
	$('.diecr d1').click(function(){
		$('seckill_div ul').animate(function(){});
	});

//     // 1、当鼠标进入Slide时 左右箭头出现
//     $('.Slide').mouseenter(function(){
//         $('.btn').css({'display':'block'});
//         // 3、点击鼠标left,图片向右运动
//         $('.btn a:first-child').click(function(){
//             index--;
//             if(index<0){
//                 index=$('.Slide_list li').length-1;
//             }
//             $('.Slide_list').animate({left:-index*num});
//         });
//         // 4、点击鼠标right,图片向左运动
//         $('.btn a:last-child').click(function(){
//             index++;
//             if(index>=$('.Slide_list li').length){
//                 index=0;
//             }
//             $('.Slide_list').animate({left:-index*num});
//         })
//     });
//     // 2、当鼠标离开Slide时 左右箭头隐藏
//     $('.Slide').mouseleave(function(){
//         $('.btn').css({'display':'none'});
//     })
// }
	//11.白酒馆的选项卡效果
	$('.right_top ul li').mouseover(function () {
		var index = $(this).index();
		$('.titdiv li a').removeClass('w_active').eq(index).addClass('w_active');
		$('.rigth_bot').removeClass('bo_active').eq(index).addClass('bo_active');
	});
	//酒馆的a 划过颜色改变
	// $('.wine a').hover(function(){
	// 	$(this).css('color','#cc0001;');
	// },function(){
	// 	$(this).css('color','#666;');
	// });

////???????????马帅同学的提示：写插件
	
	//logo墙的选项卡效果
	$('.logoul li').mouseover(function () {
		var index = $(this).index();
		$('.logoul li').removeClass('loi_active').eq(index).addClass('loi_active');
		$('.logoimg').removeClass('lodo_active').eq(index).addClass('lodo_active');
		$('.lo_active').css('left',index * 104);
	});

	//logo墙的img划过位移
	$('.logoimg ul li a img').hover(function(){
		$(this).css('transform','translate(-100px)').css('transition','1s');
	},function(){
		$(this).css('transform','translate(0)').css('transition','1s');

	});


	//底(上)部的a划过显示下划线
	$('.conb a').hover(function(){
		$(this).toggleClass('ai_class');
	});
	//划过微信，显示图片
	$('.chanspan').hover(function(){
		$('.wechat').toggle();
	});
 })  

  
 
 