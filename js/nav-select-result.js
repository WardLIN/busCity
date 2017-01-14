$(document).ready(function(){
	
  $(".bus-list-box").find(".ul").children("li").click(function(){//每个商品分类行绑定点击事件
  	$(this).addClass("selected").siblings("li").removeClass('selected'); //当前元素选中，其余删除选中样式
  	var index=$(this).parents(".select-list").index();//获取父级索引index
  	index=index-1;
  	var goods=$(this).children("a").text();//获取当前商品名称
    $("#select_"+index).remove();//删除当前索引的筛选
    // 在筛选区域添加商品
    $("#dl_result").append("<dd id='select_" + index + "' class='selected' onclick=removeChose($(this),'" + index + "')><a href='#'>" + goods + "</a></dd>");
    getResult();
    return false;
  });
 });
  function removeChose(obj, index){ //删除筛选
  	        console.log(index);
            $(".bus-list-box").children(".select-list").eq(index).find(".selected").removeClass("selected");//删除商品选中样式
            obj.remove();//当前按钮删除
            getResult();
            return false;
        }
function getResult() { //结果处理
            var len_chose = $("#dl_result").children(".selected").length;
            if (len_chose > 0) { //若是筛选区域选中项大于0
                $(".select-no").hide();//暂时没有选择过滤条件 隐藏
            } else {
                $(".select-no").show();//暂时没有选择过滤条件 显示
            }
        }
