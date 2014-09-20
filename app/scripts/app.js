'use strict';

/**
 * @ngdoc overview
 * @name weatherAngularApp
 * @description
 * # weatherAngularApp
 *
 * Main module of the application.
 */
angular
  .module('weatherAngularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
