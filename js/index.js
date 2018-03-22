//页面载入事件
 $(function(){
 	
	//6.遍历数组，给轮播图的li和div的a赋值
	var arr=['01','02','03','04','05','06','07','08','09'];
	var arr1=['01','01','01','02','02','02','03','03','03','04','04','04','05','05','05','06','06','06','07','07','07','08','08','08','09','09','09'];
	$.each(arr,function(k,v){
		$('.rotate_bul li').eq(k).css('background','url(img/rot'+v+'.jpg) center 0px no-repeat');
	});
	$.each(arr1,function(k,v){
		$('.rotate_bul li div a').eq(k).css('background','url(img/rot'+v+'.png) center 0px no-repeat');
	});
	//轮播图
	var ord=0;//的代表对当前 图片的序号，从0开始
	var myTimer=null;

	//初始化界面  首页加载时第一个的豆豆为红色//直接写到css里
function initUI(){
	$("#btns li:first").css({"background":"#dd102e"});
}
	//事件处理程序
function initEvent(){
	//鼠标进入时停止
	$("#box").mouseenter(function(){
		stopPlay();
	});
	//鼠标离开时自动播放
	$("#box").mouseleave(function(){
		autoPlay();
	});

	//点击豆豆自动跳转
	$("#btns li").mouseover(function(){
		goImg($("#btns li").index(this));
	});

}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=ord;

		ord++
		if(ord>arr.length-1){
			ord=0;
		}
	//淡入淡出
	let $img=$("#box li");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).animate({"opacity":1},500);
	//改变豆豆的颜色
	$("#btns li").eq(ord).css({"background":"#dd102e"}).siblings().css({"background":"#000"});
	},5000);
}
//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}
//指定图片自动跳转
function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//淡入淡出
	let $img=$("#box li");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).animate({"opacity":1},500);
	//改变豆豆的颜色
	$("#btns li").eq(ord).css({"background":"#dd102e"}).siblings().css({"background":"#000"});
}


//逻辑部分:

	//初始化界面
	initUI();
	//绑定事件
	initEvent();
	//自动播放
	autoPlay();



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
		 new Carousel({
			el: document.querySelector('#carousel1'),
			timeout: 3000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});
		 new Carousel({
			el: document.querySelector('#carousel2'),
			timeout: 3000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});
		 new Carousel({
			el: document.querySelector('#carousel3'),
			timeout: 2000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});
		  new Carousel({
			el: document.querySelector('#carousel4'),
			timeout: 2000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});
		  new Carousel({
			el: document.querySelector('#carousel5'),
			timeout: 2000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});
		  new Carousel({
			el: document.querySelector('#carousel6'),
			timeout:2000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});
		   new Carousel({
			el: document.querySelector('#carousel7'),
			timeout:2000,
			isAuto: true,
			isDots: true,
			isXhx: false,
			isClick:false
		});

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

	//12.葡萄酒的选项卡效果
	$('.right_top ul li').mouseover(function () {
		var index = $(this).index();
		$('.titdiv2 li a').removeClass('w_active').eq(index).addClass('w_active');
		$('.rigth_bot2').removeClass('bo_active').eq(index).addClass('bo_active');
	});
	
	//13.logo墙的选项卡效果
	$('.logoul li').mouseover(function () {
		var index = $(this).index();
		$('.logoul li').removeClass('loi_active').eq(index).addClass('loi_active');
		$('.logoimg').removeClass('lodo_active').eq(index).addClass('lodo_active');
		$('.lo_active').css('left',index * 104);
	});

	//14.logo墙的img划过位移
	$('.logoimg ul li a img').hover(function(){
		$(this).css('transform','translate(-100px)').css('transition','1s');
	},function(){
		$(this).css('transform','translate(0)').css('transition','1s');

	});

 })  

  
 
 