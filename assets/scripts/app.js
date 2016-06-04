'use strict';

/**
 * @ngdoc overview
 * @name assetsApp
 * @description
 * # assetsApp
 *
 * Main module of the application.
 */
angular
  .module('myModule', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
  ])
  .config(function($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });




    //================================================
    // Translation support
    //================================================
    // var translateFilePath = '/home/alex/WebstormProjects/2french/assets/languages/';
    var translateFilePath = '/languages/';

    $translateProvider.useStaticFilesLoader({
      prefix: translateFilePath,
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('fr');
  });
