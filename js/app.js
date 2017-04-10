(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('app',['ngRoute','app.controllers.main']);
	myApp.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/:status?',{
			controller:'MyController',
			templateUrl:'main.html'
		}).otherwise({
			redirectTo:'/'
		})
	}]);

})(angular);
