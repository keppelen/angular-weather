'use strict';

describe('Service: getWeatherAPI', function () {

  // load the service's module
  beforeEach(module('weatherAngularApp'));

  // instantiate service
  var getWeatherAPI;
  beforeEach(inject(function (_getWeatherAPI_) {
    getWeatherAPI = _getWeatherAPI_;
  }));

  it('should do something', function () {
    expect(!!getWeatherAPI).toBe(true);
  });

});
