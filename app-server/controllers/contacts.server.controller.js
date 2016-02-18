var contacts = [
	{
		id: 123,
		name: 'Kelve Aragão',
		phone: '023403204234',
		address: '123, Some Street\nLeicester\nLE1 2AB',
		email: 'kelvearagao@gmail.com',
		website: 'asdasds.com',
		notes: ' '
	},
	{
		id: 124,
		name: 'Cleide Aragão',
		phone: '02323423423434',
		address: '123, Marinho Street\nLeicester\nLE1 2AB',
		email: 'cleide@gmail.com',
		website: 'cleodearagao.com',
		notes: 'Era uma vez '
	}
];
exports.all = function(req, res) {
	res.send(contacts);
}

exports.find = function(req, res)  {
	console.log(req);

	for( var i = 0; i < contacts.length; i++)
	{
		if(contacts[i].id == req.params.id )
			return res.send(contacts[i]);
	}
}