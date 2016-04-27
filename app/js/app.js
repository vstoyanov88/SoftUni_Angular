'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
});