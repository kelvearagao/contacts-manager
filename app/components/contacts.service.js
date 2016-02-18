angular.module('contactsMgr').factory('contacts', ['$resource', function($resource) {
	var Resource = $resource('http://localhost:3000/contacts/:id', 
		{id: '@id'},
		{update: {method: 'PUT'}}
	);

	return {
		get: function() {
			return Resource.query();
		},
		find: function(id){
			return Resource.get({id: id});
		},
		create: function(contact) {
			contacts.push(contact);
		},
		destroy: function(index) {
			contacts.splice(index, 1);
		}
	};
}]);