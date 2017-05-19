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
      getEr: getEr,
      getBrowsers: getBrowsers,
      getPages: getPages
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
          error_file: 'index.js',
          error_line: '127',
          error_class: 'ReferenceError',
          browser: 'Chrome'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'undefined is not a constructor',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'undefined is not a constructor',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: '$ctrl.service is not a function',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: '$ctrl.service is not a function',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'Unexpected token <',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'SyntaxError',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'Unexpected token ,',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'SyntaxError',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'undefined is not a constructor',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'getError is not a function',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Safari'
        }, {
          time: '15/04/2017 2:32 PM',
          error: 'obj is not defined',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'ReferenceError',
          browser: 'Chrome'
        }, {
          time: '16/05/2017 1:39 AM',
          error: 'undefined is not a constructor',
          error_file: 'index.js',
          error_line: '127',
          error_class: 'TypeError',
          browser: 'Safari'
        }
      ];
      data.result.total = data.result.data.length;

      return $q(function (resolve) {
        resolve(data);
      });
    }
    function getBrowsers() {
      var data = {
        result: {
          data: [],
          total: null
        }
      };
      data.result.data = [
        {
          browser: 'Chrome v57',
          views: '3044',
          errors: '142',
          last_2_week: '-5'
        },
        {
          browser: 'Chrome v56',
          views: '519',
          errors: '31',
          last_2_week: '-2'
        },
        {
          browser: 'Chrome v55',
          views: '75',
          errors: '5',
          last_2_week: '+1'
        },
        {
          browser: 'Chrome v54',
          views: '27',
          errors: '2',
          last_2_week: '+3'
        },
        {
          browser: 'Safari v5',
          views: '66',
          errors: '6',
          last_2_week: '-1'
        },
        {
          browser: 'Firefox v53',
          views: '253',
          errors: '56',
          last_2_week: '-1'
        },
        {
          browser: 'Firefox v52',
          views: '13',
          errors: '6',
          last_2_week: '-1'
        },
        {
          browser: 'Firefox v51',
          views: '12',
          errors: '6',
          last_2_week: '-1'
        },
        {
          browser: 'Firefox v50',
          views: '10',
          errors: '6',
          last_2_week: '-1'
        },
        {
          browser: 'IE 11',
          views: '27',
          errors: '4',
          last_2_week: '+2'
        },
        {
          browser: 'IE 10',
          views: '8',
          errors: '7',
          last_2_week: '+2'
        },
        {
          browser: 'IE 9',
          views: '9',
          errors: '4',
          last_2_week: '+1'
        }
      ];
      data.result.total = data.result.data.length;

      data.result.data.forEach(function (item) {
        item.relative = (+item.errors / +item.views).toFixed(3);
      });

      return $q(function (resolve) {
        resolve(data);
      });
    }
    function getPages() {
      var data = {
        result: {
          data: [],
          total: null
        }
      };
      data.result.data = [
        {
          url: '/',
          views: '3044',
          errors: '77',
          last_2_week: '0'
        },
        {
          url: '/test_page',
          views: '1022',
          errors: '113',
          last_2_week: '+1'
        },
        {
          url: '/test_page2',
          views: '410',
          errors: '44',
          last_2_week: '+31'
        },
        {
          url: '/test_page3',
          views: '282',
          errors: '86',
          last_2_week: '-21'
        }
      ];
      data.result.total = data.result.data.length;

      data.result.data.forEach(function (item) {
        item.relative = (+item.errors / +item.views).toFixed(3);
      });

      return $q(function (resolve) {
        resolve(data);
      });
    }
  }
}());
