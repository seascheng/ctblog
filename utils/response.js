// 向前台返回JSON方法的简单封装
module.exports = function (res, code, result) {
	if (code == 0) {
		if (!!result) {
			res.json({
				code:0,
				msg: '操作成功',
				result:result
			})
		}else{
			res.json({
				code:0,
				msg: '操作成功'
			})
		}
	}else{
		res.json({
			code:code,
			msg: result
		});
	}
};