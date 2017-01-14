$(document).ready(function(){
	//阻止事件默认事件
	function stopDefault( e )
	{ 
   		if ( e && e.preventDefault ) 
      		e.preventDefault(); 
        else 
            window.event.returnValue = false;  
	} 
	var aLinks=$(".av-options");//获取所有“更多”链接的节点对象
	var uls=$(".attrValues>ul");//获取所有div.attrValues的ul块
	var ulHs=new Array();//原始ul块高度
	var oulHs=new Array;
	//获取各个ul块的高度
	uls.each(function(){
		ulHs.push($(this).height());
	})
	console.log(ulHs);
	//设置各个UL块的默认显示li行数以及"更多"按钮的显示
	oulHs.push(40);
	if(ulHs[0]>40){
       $(aLinks[0]).css("display","block");
       $(uls[0]).height(40);
       $(uls[0]).css("overflow","hidden");
	}
	for(var i=1;i<uls.length;i++){
		oulHs.push(24);
		if(ulHs[i]>24){
	       $(aLinks[i]).css("display","block");
	       $(uls[i]).height(24);
	       $(uls[i]).css("overflow","hidden");
		}
	}
	console.log(oulHs);
    //"更多"按钮点击事件
    for(var i=0;i<aLinks.length;i++){
    	aLinks[i].index=i;
    	$(aLinks[i]).on("click",{msg1: ulHs[i],msg2:oulHs[i],object:uls[i],index:aLinks[i].index},function(e){
    		stopDefault(e);//阻止a点击默认事件
    		var index=e.data.index;
    		var h1=e.data.msg1;
    		var h2=e.data.msg2;
	    	var b=e.data.object;
    		if($(b).height()==h2){
    			var text=$(aLinks[index]).eq(0).html("<a>收起<i class='glyphicon glyphicon-chevron-up'></i></a>");
	    		$(uls[i]).css("overflow","visible");
	    		$(b).height(h1);
	    	}else{
                var text=$(aLinks[index]).eq(0).html("<a>更多<i class='glyphicon glyphicon-chevron-down'></a>");
                $(uls[i]).css("overflow","hidden");
	    		$(b).height(h2);
	    	}
    	})
    }
});