var cors = require('cors');
var access = require('../utils/logger').access;

module.exports = function (app){
	app.use(cors());
	app.use(access);

	app.use('/user', require('./user'));
	app.use('/post', require('./posts'));

	//404
	app.use(function(req, res){
		if (!res.headersSent) {
			// res.render('404');
		}
	})
}