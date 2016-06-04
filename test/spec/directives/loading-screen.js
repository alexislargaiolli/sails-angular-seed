'use strict';

describe('Directive: loadingScreen', function () {

  // load the directive's module
  beforeEach(module('myModule'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loading-screen></loading-screen>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loadingScreen directive');
  }));
});
