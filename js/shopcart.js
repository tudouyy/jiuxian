$(function(){
	//1.点击全选框时，所有的都选中（即：改变所有i的位置）
	//判断全选框的状态
	var true=$('.check-all i').css('backgound-podition','background-position: -17px -58px');
	var false=$('.check-all i').css('backgound-podition','background-position: 0 -58px');
	if(true){
		$('i').css('backgound-podition','background-position: -17px -58px');
	}
	if(false){
		$('.cart_he .check-all').click(function(){
			$('i').css('backgound-podition','background-position: -17px -58px');
		});
	}

	//2.点击+增加数量，-数量递减,单价计算
	$(".rduce").click(function(){
		var $num = parseInt($(this).next().val());
		var $price =  $(this).parents('.goodslist').find('.priceid').html().substring(1);
		var $total =  $(this).parents('.goodslist').find('.totalid').html().substring(1);
		$num--;
		if($num<0){
			$num=0;
		}
		$(this).next().val($num);

		$total = $num * $price;
		$(this).parents('.goodslist').find('.totalid').html('￥'+$total+'.00');
		num();
		total();

	});

	$(".plus").click(function(){
		var $num = parseInt($(this).prev().val());
		var $price =  $(this).parents('.goodslist').find('.priceid').html().substring(1);
		var $total =  $(this).parents('.goodslist').find('.totalid').html().substring(1);
		$num++;
		$(this).prev().val($num);
		$total = $num * $price;
		$(this).parents('.goodslist').find('.totalid').html('￥'+$total+'.00');
		num()
		total();
	});

	//3.点击删除
	$('.del').click(function(){
		var result=confirm("您确定要删除吗");
		if(result==true){
			$(this).parent().parent().parent().remove();
		}else{
			return;
		}
	});
});

function total(){
	var totalPrice=0;
	$(".totalid").each(function(){
		totalPrice+=parseInt($(this).text().substring(1));
	});
	$(".amount").text('￥'+totalPrice+'.00');
}
function num(){
	var number=0;
	$(".numid").each(function(){
		number+=parseInt($(this).val());
	});
	$(".numids").text(number);
}