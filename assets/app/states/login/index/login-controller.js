'use strict';

angular.module('myApp')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('login', stateFactory('Login', {
      url: '/login',
      templateUrl: 'states/login/index/main-view.html'
    }));
  })
  .controller('LoginCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
