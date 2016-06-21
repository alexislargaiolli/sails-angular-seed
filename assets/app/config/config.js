'use strict';

angular.module('myApp')
  .constant('Config', angular.deepExtend({
    viewsDir: 'views/',
    componentsDir: 'components/',
    statesDir: 'states/',
    environment: 'production', //development or production
    API: {
      protocol: window.location.protocol.split(':')[0], //Use the same protocol, host and port as the UI is hosted from bu default
      host: window.location.hostname,
      // port: String(window.location.port || 80),
      port: 8080,
      path: ''
    }
  }, angular._localConfig || {}))
  .config(function(componentFactoryProvider, $translateProvider) {
    componentFactoryProvider.setViewPath(function(componentSnakeName, componentName) {
      return 'components/' + componentSnakeName + '/' + componentSnakeName + '.html';
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
    //$translateProvider.preferredLanguage('fr');

  })
  .value('cgBusyTemplateName', 'views/angular-busy/default-spinner.html')
  .factory('BaseUrl', function(Config) {
    return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + '/');
  })
  .factory('APIBaseUrl', function(Config) {
    return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + Config.API.path + '/');
  })
  .run(function(editableOptions, $rootScope, AuthService, $state) {
    editableOptions.theme = 'bs3'

    $rootScope.$on('$stateChangeStart', function(event, next) {
      AuthService.getUserStatus()
        .then(function() {
          if (AuthService.isLoggedIn() === false && next.access && next.access.restricted && next.name != 'login') {
            event.preventDefault();
            $state.go('login');
          }
        });
    });
  });
