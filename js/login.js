$(function(){
	// alert(1)


	// 为登录按钮添加点击事件
	// 获取用户输入的用户和密码
	// 对用户输入的信息格式进行校验
	// 

	$('#loginBtn').on('click',function(){

		// alert(1)

		// 获取表单数据 是一个对象
		var result = $('#loginForm').serializeToJson();

		// console.log(result);
		// 验证用户是否输入用户名
		if(!$.trim(result.username)) {
			alert('请输入用户名');
			return;
		}

		// 验证用户是否输入密码
		if(!$.trim(result.password)) {
			alert('请输入密码');
			return;
		}

		// 发送登录请求
		$.ajax({
			type:'post',
			// ES6 语法 移动端 高版本浏览器使用
			url:`${APP.baseUrl}/employee/employeeLogin`,
			data:result,
			// 响应
			success:function(response) {
				if(response.success) {
					// 登录成功
					location.href = 'user.html';
				} else {
					// 登录失败 返回错误信息
					alert(response.message);
				}
			}

		});

	});

});