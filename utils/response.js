// 向前台返回JSON方法的简单封装
module.exports = function (res, code, result) {
	if (code == -1) {
		res.json({
			code:-1,
			msg: result
		});
	}else{
		var result = {
			code:0,
			msg: '操作成功',
			result:result
		}
		res.json(result);
	}
};