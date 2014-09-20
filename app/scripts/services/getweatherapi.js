'use strict';

/**
 * @ngdoc service
 * @name weatherAngularApp.getWeatherAPI
 * @description
 * # getWeatherAPI
 * Service in the weatherAngularApp.
 */
angular.module('weatherAngularApp')
  .service('getWeatherAPI', function getWeatherAPI( $http ) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&callback=JSON_CALLBACK&q={0}';

    return {
      getOpenWeatherMap: function ( tag, success ) {

        var replacedUrl = url.replace( '{0}', tag );

        $http({method: 'jsonp', url: replacedUrl}).
        success(function( data ) {
          success(data);
        }).
        error(function() {
        });
      }
    };
  });
