$(function (){
	var test=1,
	index;
	$(document).on('click','.optionKey',function (e){
		e.preventDefault();		
		var href=$(this).attr('href');
		if(test){
			$.ajax({
				type:'GET',
				url: href,
				dataType:"json",
				success:function(data){	
					var html = '',			
						questionId;					
	                $.each(data, function(i, field){
	                	switch(i){
	                		case '0':
	                    		if(field.length>0){
	                    			html+="<dt>"+field+"</dt>";
	                        	}else {
	                        		test=0;
	                        		html="已经是最后一题了！<dd><input type=\"button\" name=\"over\" value=\"提交试卷\" /></dd>";	                        		
	                        		return false;
	                            }           			 
	                			 break;
	                		case '1':
	                			questionId=field;
	                			break;
	                		case '2':
	                			index=parseInt(field)+1;
	                			break;
	                		case '3':
	                    		for(var j=0;j<field.length;j++){
	                    			html+="<dd><a class=\"optionKey\" href=\"/admin/exam-index/question?questionId="+questionId+"&answerId="+j+"&index="+index+"\">"+field[j]+"</a></dd>";
	                        	}
	                        	return false;
	                        	break;                        	
	                	}
	                  });	               
					if(test){
						 $('.questionBox > dl').stop().animate({
	                     	opacity:'0'
	                         },200,
	                         function (){
	     						$(this).html(html);
	     						$(this).stop().animate({opacity:'1'},200);
	     					});
	 				}else {
	 			       	 $('.questionBox > dl').append("<dd>"+html+"</dd>");
	 		    	}
	 			}
			});
		}else {
			alert("已经是最后一题！");
		}			
	});
});