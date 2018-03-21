$(function(){
	//15.底(上)部的a划过显示下划线
	$('.conb a').hover(function(){
		$(this).toggleClass('ai_class');
	});
	//16.划过微信，显示图片
	$('.chanspan').hover(function(){
		$('.wechat').toggle();
	});
});