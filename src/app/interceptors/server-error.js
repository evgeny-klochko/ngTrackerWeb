(function () {
  'use strict';

  angular
    .module('TSC.common')
    .factory('serverErrorInterceptor', serverErrorInterceptor);

  /* @ngInject */
  function serverErrorInterceptor($rootScope, $q) {
    var service = {
      responseError: responseError
    };

    return service;

    function responseError(response) {
      var message = response && response.data && response.data.error;

      if (response && !response.config.skip) {
        $rootScope.$broadcast('application.server.error', {
          status: response.status,
          message: message
        });
      }

      return $q.reject(response);
    }
  }
}());
