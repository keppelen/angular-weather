'use strict';

/**
 * @ngdoc directive
 * @name weatherAngularApp.directive:weather
 * @description
 * # weather
 */
angular.module('weatherAngularApp')
  .directive('weather', function ( getWeatherAPI ) {
    return {
      templateUrl: '../../templates/weather.html',
      restrict: 'AE',
      scope: true,
      link: function postLink(scope, element, attrs ) {
        scope.tag = attrs.local;

        scope.initApp = function() {
					getWeatherAPI.getOpenWeatherMap( scope.tag, scope.success );
				};

        scope.getCelcius = function( value ) {
          var celcius,
              fahrenheit = value;

              celcius = Math.ceil( ( fahrenheit - 32 ) / 1.8 );

          return celcius;
        };

				scope.success = function( data ){
					scope.weatherGlobal = data;
          scope.weather = data.weather[0];
          scope.celcius = scope.getCelcius( data.main.temp );
          scope.tempMax = scope.getCelcius( data.main.tempMax );
          scope.tempMin = scope.getCelcius( data.main.tempMin );
				};

				scope.initApp();
      }
    };
  });
