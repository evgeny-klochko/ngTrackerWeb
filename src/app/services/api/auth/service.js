(function () {
  'use strict';

  angular
    .module('TSC.services')
    .factory('Auth', Auth);

  function Auth($http, API_CONFIG, $q) {
    var service = {
      login: login,
      logout: logout,
      requestRestorePassword: requestRestorePassword,
      restorePassword: restorePassword,
      register: register,
      getEr: getEr
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

    function getEr() {
      var data = {
        result: {
          data: [],
          total: null
        }
      };
      data.result.data = [
        {
          time: '10/04/2017 1:32 PM',
          error: 'z is not defined',
          last_seen: '2 minutes ago',
          browser: 'Chrome'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '14 days ago',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '16 days ago',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '14 days ago',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '16 days ago',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '14 days ago',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '16 days ago',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '14 days ago',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '16 days ago',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '14 days ago',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'TypeError: undefined is not a constructor',
          last_seen: '16 days ago',
          browser: 'Safari'
        }
      ];
      data.result.total = data.result.data.length;

      return $q(function (resolve) {
        resolve(data);
      });
    }
  }
}());
