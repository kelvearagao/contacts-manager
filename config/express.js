var express = require('express');

module.exports = function() {
	var app = express();

	app.set('views', './app-server/views');
	app.set('view engine', 'ejs');

	require('../app-server/routes/index.server.routes.js')(app);

	app.use('/assets', express.static('assets'));

	return app;
}