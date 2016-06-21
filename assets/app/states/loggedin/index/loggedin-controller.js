'use strict';

angular.module('myApp')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('loggedin', stateFactory('Loggedin', {
      url: '/loggedin',
      access: {restricted: true},
      templateUrl: 'states/loggedin/index/main-view.html'
    }));
  })
  .controller('LoggedinCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
