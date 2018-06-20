// 判断用户是否登录
$.ajax({
	type:'get',
	async:false,
	url:`${APP.baseUrl}/employee/checkRootLogin`,
	success:function(respinse){
		// console.log(respinse);
		if(respinse.error) {
			location.href = 'login.html';
		}
	}
});

$(function(){


	// 查询用户 展示用户


	$.ajax({
		type:'get',
		url:`${APP.baseUrl}/user/queryUser`,
		data:{
			page:1,
			pageSize:150
		},
		success: function(respinse) {
			// console.log(respinse);

			var html = template('userTpl',respinse);
			$('#userBox').append(html);
		}
	});

	// 更改用户状态
	$('#userBox').on('click','.changeStatus',function(){
		var id = $(this).data('user-id');
		var isDelete = $(this).data('user-isdelete');
		var that = $(this);

			$.ajax({
				url:`${APP.baseUrl}/user/updateUser`,
				type:'post',
				data: {
					id:id,
					isDelete:isDelete
				},
				success:function(respinse) {
					// console.log(respinse);
					if(respinse.success){
						if(that.hasClass('btn-danger')) {
							that.removeClass('btn-danger');
							that.addClass('btn-success');
							that.html("启用");
						}else {
							that.removeClass('btn-success');
							that.addClass('btn-danger');
							that.html("禁用");
						}
					} else {
						respinse.message;
					}

				}
			});
	});


	$('#outBtn').on('click',function(){

			$.ajax({
				url:`${APP.baseUrl}/employee/employeeLogout`,
				type:'post',
				data: {
					id:id,
					isDelete:isDelete
				},
				success:function(respinse) {
					// console.log(respinse);
					
				}
			});
	});


})