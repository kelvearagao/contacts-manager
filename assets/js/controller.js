var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
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

	.otherwise({
		redirectTo: '/'
	});

	// Remove o símbolo '#' da URL
	//$locationProvider.html5Mode({enabled: true,	requireBase: false});
	$locationProvider.html5Mode(true);
});

// Define os controladores
app.controller('indexCtl', function($scope){

	})
	.controller('addCtl', function($scope){

	})
	.controller('contactCtl', function($scope, $routeParams){
		console.log($routeParams);
	});