module.exports = function(app) {
	var index = require('../controllers/index.server.controller.js');
	app.get('/', index.render);

	var contacts = require('../controllers/contacts.server.controller.js');
	app.get('/contacts', contacts.all);
	app.get('/contacts/:id', contacts.find);
}