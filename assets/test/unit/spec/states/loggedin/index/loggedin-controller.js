'use strict';

describe('Controller(/loggedin): LoggedinCtrl', function () {

  var LoggedinCtrl, scope;

  beforeEach(function () {

    module('myApp');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      LoggedinCtrl = $controller('LoggedinCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});