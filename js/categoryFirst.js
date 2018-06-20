$(function(){


	$.ajax({
		type:'get',
		url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
		data:{
			page:1,
			pageSize:2
		},
		success:function(response) {
			var html = template('categoryFirstTpl',response);
			$('#categroyFirstBox').html(html);
		}
	});
	
})