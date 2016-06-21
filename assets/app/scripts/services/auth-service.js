'use strict';

angular.module('myApp')
  .service('AuthService', function(APIBaseUrl, $q, $timeout, $http) {

    var _privateVar = 42;
    
    var url = APIBaseUrl + 'auth';

    this.meaningOfLife = function() {
      return _privateVar;
    };

    // create user variable
    var user = null;

    function isLoggedIn() {
      if (user) {
        return true;
      }
      else {
        return false;
      }
    }

    function getUserStatus() {
      return $http.get(url + '/status')
        // handle success
        .success(function(data) {
          if (data.status) {
            user = true;
          }
          else {
            user = false;
          }
        })
        // handle error
        .error(function(data) {
          user = false;
        });
    }

    function login(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post(url + '/login', {
          username: username,
          password: password
        })
        // handle success
        .success(function(data, status) {
          if (status === 200 && data.status) {
            user = true;
            deferred.resolve();
          }
          else {
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function(data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function logout() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get(url + '/logout')
        // handle success
        .success(function(data) {
          user = false;
          deferred.resolve();
        })
        // handle error
        .error(function(data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function register(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post(url + '/register', {
          username: username,
          password: password
        })
        // handle success
        .success(function(data, status) {
          if (status === 200 && data.status) {
            deferred.resolve();
          }
          else {
            deferred.reject();
          }
        })
        // handle error
        .error(function(data) {
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    // return available functions for use in the controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });

  });
