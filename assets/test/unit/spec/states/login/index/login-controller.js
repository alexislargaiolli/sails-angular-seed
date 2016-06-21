'use strict';

describe('Controller(/login): LoginCtrl', function () {

  var LoginCtrl, scope;

  beforeEach(function () {

    module('myApp');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      LoginCtrl = $controller('LoginCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});