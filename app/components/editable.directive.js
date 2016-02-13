angular.module('contactsMgr').directive('editable', function() {
	return {
		restrict: 'AE',
		templateUrl: 'assets/partials/editable.html',
		scope: {
			value: '=editable',
			field: '@fieldType'
		},
		controller: ['$scope', function($scope) {
			$scope.editor = {
				showing: false,
				value: $scope.value
			};

			$scope.toggleEditor = function() {
				$scope.editor.showing = !$scope.editor.showing;

				console.log($scope.field);
				$scope.field = ($scope.field) ? $scope.field : 'text';
				console.log($scope.field);
			};

			$scope.field = ($scope.field) ? $scope.field : 'text';

			$scope.save = function() {
				$scope.value = $scope.editor.value;
				$scope.toggleEditor();
			}
		}]
	};
});