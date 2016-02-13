angular.module('contactsMgr').factory('contacts', function() {
	var contacts = [
		{
			name: 'Kelve Aragão',
			phone: '023403204234',
			address: '123, Some Street\nLeicester\nLE1 2AB',
			email: 'kelvearagao@gmail.com',
			website: 'asdasds.com',
			notes: ' '
		},
		{
			name: 'Cleide Aragão',
			phone: '02323423423434',
			address: '123, Marinho Street\nLeicester\nLE1 2AB',
			email: 'cleide@gmail.com',
			website: 'cleodearagao.com',
			notes: 'Era uma vez '
		}
	];

	return {
		get: function() {
			return contacts;
		},
		find: function(index){
			return contacts[index];
		},
		create: function(contact) {
			contacts.push(contact);
		},
		destroy: function(index) {
			contacts.splice(index, 1);
		}
	};
});