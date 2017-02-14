var cors = require('cors');
var access = require('../utils/logger').access;

module.exports = function (app){
	app.use(cors());
	app.use(access);

	app.use('/signin', require('./signin'));
	// app.use('/signup', require('./signup'));
	// app.use('/signout', require('./signout'));
	app.use('/posts', require('./posts'));

	//404
	app.use(function(req, res){
		if (!res.headersSent) {
			// res.render('404');
		}
	})
}