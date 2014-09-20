'use strict';

/**
 * @ngdoc function
 * @name weatherAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherAngularApp
 */
angular.module('weatherAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
