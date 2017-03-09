(function () {
  'use strict';

  angular
    .module('TSC.common')
    .factory('authInterceptor', authInterceptor);

  /* @ngInject */
  function authInterceptor($q, localStorageService) {
    var service = {
      request: request
    };

    return service;

    function request(config) {
      var token = localStorageService.get('token');
      config.headers = config.headers || {};

      if (typeof token === 'string') {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config || $q.when(config);
    }
  }
}());
