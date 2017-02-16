var cors = require('cors');
var access = require('../utils/logger').access;

module.exports = function (app){
	app.use(cors());
	app.use(access);

	app.use('/user', require('./user'));
	app.use('/post', require('./post'));
	app.use('/comment', require('./comment'));
	app.use('/category', require('./category'));

	//404
	app.use(function(req, res){
		if (!res.headersSent) {
			// res.render('404');
		}
	})
}