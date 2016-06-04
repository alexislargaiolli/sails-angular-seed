'use strict';

var components = angular.module('myApp.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('myApp', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'myApp.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'xeditable',
  'ngStorage',
  'pascalprecht.translate',
]);
angular.componentFactory.moduleDecorator(app);