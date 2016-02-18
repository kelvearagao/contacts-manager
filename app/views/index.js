angular.module('contactsMgr').controller('indexCtl', 
	['$scope', 'contacts', '$alert', '$http',
	function($scope, contacts, $alert, $http) {

	var deletionAlert = $alert({
		title: 'Success!',
		content: 'The contact was deleted successfuly.',
		type: 'success',
		container: '#alertContainer',
		show: false
	})

	$scope.contacts = contacts.get();

	console.log($scope.contacts);

	/*
	$http.get('http://localhost:3000/contacts')
	.success(function(data) {
		console.log(data);

		$scope.contacts = data;
	})
	.error(function() {
		window.alert('There was an error!');
	});
	*/

	$scope.delete = function(index) {
		contacts.destroy(index);
		deletionAlert.show();
	};
}]);