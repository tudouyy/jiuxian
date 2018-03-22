function $(id){
	return document.getElementById(id);
}

var	oSmallBox  =$("small-box");
var aSmallImg  =Array.from(oSmallBox.children);
var oMiddleImg =$("middle-img");
var oMiddleBox =$("middle-box");
var oLargeImg  =$("large-img");
var oShadow    =$("shadow");
var oLargeBox  =$("large-box");
var oBox       =$('box');



// 给缩略图添加鼠标进入事件
aSmallImg.forEach(v =>{//v:每次遍历asmallImg数组的元素的值  
	v.onmouseover=function(){
		//去掉所有的class名
		aSmallImg.forEach(v => v.className='');
		// 当前img添加class
		this.className='active';
		//同步中图的路径
		oMiddleImg.src=this.src;
		//同步大图的路径
		oLargeImg.src=this.src;
	}
});


//oShadow可以动的最大边界值
var maxL=0;
var maxT=0;

// 大图片最大的left和top值      :这个感觉不需要也可以，没有想通
var maxLargeImgL  = 0;
var maxLargeImgT  = 0;



// 鼠标进入middle-box
oMiddleBox.onmouseover=function(){
	oShadow.style.display='block';
	oLargeBox.style.display='block';

	//oShadow可以动的最大边界值		
	maxL=oMiddleBox.offsetWidth-oShadow.offsetWidth;
	maxT=oMiddleBox.offsetHeight-oShadow.offsetHeight;

// 大图片最大的left和top值
	maxLargeImgL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
	maxLargeImgT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
}
// 鼠标离开middle-box
oMiddleBox.onmouseout=function(){
	oShadow.style.display='none';
	oLargeBox.style.display='none';
}


// 给middle-box添加移动事件
oMiddleBox.onmousemove =function(ev){
	var e=ev||window.event;
	var iL = e.clientX - oShadow.offsetWidth /2  - oBox.offsetLeft - oMiddleBox.offsetLeft;
	var iT  =e.clientY - oShadow.offsetHeight /2  - oBox.offsetTop  - oMiddleBox.offsetTop;
	
	
	//左侧边界值
	if(iL<0){
		iL=0;
	}
	//上侧边界值
	if(iT<0){
		iT=0;
	}
	//右侧边界值
	if(iL>maxL){
		iL=maxL;
	}
	//下侧边界值
	if(iT>maxT){
		iT=maxT;
	}
	oShadow.style.left=iL+'px';
	oShadow.style.top=iT+'px';
	//大图
	oLargeImg.style.left=-2*iL+'px';
	oLargeImg.style.top=-2*iT+'px';


	// 让大图移动:   根据比例：当前shadow移动距离/大图的移动距离=shadow可移动的最大距离/大图可移动的最大距离
	// oLargeImg.style.left  = - iL * maxLargeImgL / maxL + 'px';
	// oLargeImg.style.top   = - iT * maxLargeImgT / maxT + 'px';
}
