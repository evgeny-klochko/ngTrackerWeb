(function () {
  'use strict';

  angular
    .module('TSC.services')
    .factory('Auth', Auth);

  function Auth($http, API_CONFIG) {
    var service = {
      login: login,
      logout: logout,
      requestRestorePassword: requestRestorePassword,
      restorePassword: restorePassword,
      register: register
    };

    return service;

    function login(credentials) {
      return $http.post(API_CONFIG.BASE_URL + '', credentials)
        .then(function (response) {
          var data = response.data;

          data.result.user.isSuperAdmin = (data.result.user.role === 'superadmin');
          data.result.user.isAdmin = (data.result.user.role === 'admin');

          return response.data;
        });
    }

    function register(credentials, recaptcha) {
      credentials['g-recaptcha-response'] = recaptcha;

      return $http.post(API_CONFIG.BASE_URL + '', credentials)
        .then(function (response) {
          return response.data;
        });
    }

    function requestRestorePassword(credentials) {
      return $http.post(API_CONFIG.BASE_URL + '', credentials)
        .then(function (response) {
          return response.data;
        });
    }

    function restorePassword(token) {
      return $http.get(API_CONFIG.BASE_URL + '' + token);
    }

    function logout() {
      return $http.post(API_CONFIG.BASE_URL + '')
        .then(function (response) {
          return response.data;
        });
    }
  }
}());
