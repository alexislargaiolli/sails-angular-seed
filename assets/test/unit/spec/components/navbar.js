'use strict';

describe('Component: navbarComponent', function () {

  describe('Directive: navbarComponent', function () {
    var element, scope, $compile;

    beforeEach(function () {

      module('myApp');

      inject(function ($rootScope, _$compile_) {
        scope = $rootScope.$new();
        $compile = _$compile_;
      });

    });

    it('should have the component class', function () {
      element = angular.element('<navbar-component></navbar-component>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element).toHaveClass('navbar-component');
    });

  });

  describe('Controller: navbarComponentCtrl', function () {

    var Ctrl, scope, element;

    beforeEach(function () {

      module('myApp');

      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<navbar-component></navbar-component>');
        Ctrl = $controller('navbarComponentCtrl', {
          $scope: scope,
          $element: element
        });
      });
    });

    it('should render a message', function () {
      expect(scope.text).toEqual('this is the navbar component');
    });
  });

});
