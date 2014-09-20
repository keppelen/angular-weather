'use strict';

describe('Directive: weather', function () {

  // load the directive's module
  beforeEach(module('weatherAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<weather></weather>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the weather directive');
  }));
});
