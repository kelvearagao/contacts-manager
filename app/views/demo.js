angular.module('contactsMgr').controller('demoCtrl', 
	['$scope', 'contacts', function($scope, contacts) {
	
	$scope.modal = {
		title: 'Modal Title',
		content: 'Modal content'
	};

	$scope.tootip = {
		title: 'Tootíp Title'
	};
	
}]);