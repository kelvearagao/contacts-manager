angular.module('contactsMgr').controller('contactCtl', 
	['$scope', 	'$routeParams', 'contacts', function($scope, $routeParams, contacts){
	
	$scope.contact = contacts.find($routeParams.id);
}]);