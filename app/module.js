var app = angular.module('contactsMgr', [
	'ngRoute', 
	'ngSanitize', 
	'mgcrea.ngStrap',
	'ngResource'
]);

/**
 * Rotas
 *
 */
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
	// Define as Rotas
	$routeProvider.when('/', {
		controller: 'indexCtl',
		templateUrl: 'assets/partials/index.html'
	})

	.when('/add-contact', {
		controller: 'addCtl',
		templateUrl: 'assets/partials/add.html'
	})

	.when('/contact/:id', {
		controller: 'contactCtl',
		templateUrl: 'assets/partials/contact.html'
	})

	.when('/test', {
		controller: 'testCtl',
		templateUrl: 'assets/partials/test.html'
	})

	.when('/demo', {
		controller: 'demoCtrl',
		templateUrl: 'assets/partials/demo.html'
	})

	.otherwise({
		redirectTo: '/'
	});

	// Remove o símbolo '#' da URL
	//$locationProvider.html5Mode({enabled: true,	requireBase: false});
	//$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true);
}]);