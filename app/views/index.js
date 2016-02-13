angular.module('contactsMgr').controller('indexCtl', ['$scope', 'contacts', '$alert', function($scope, contacts, $alert){
	var deletionAlert = $alert({
		title: 'Success!',
		content: 'The contact was deleted successfuly.',
		type: 'success',
		container: '#alertContainer',
		show: false
	})

	$scope.contacts = contacts.get();

	$scope.delete = function(index) {
		contacts.destroy(index);
		deletionAlert.show();
	};
}]);