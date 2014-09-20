'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
