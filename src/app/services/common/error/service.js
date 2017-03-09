(function () {
  'use strict';

  angular
    .module('TSC.services')
    .factory('ErrorHandler', ErrorHandler);

  /* @ngInject */
  function ErrorHandler($log, $rootScope, $state) {
    var onError;
    var handler = {
      on401Error: on401Error,
      on500Error: on500Error,
      onUnknownError: onUnknownError
    };

    var service = {
      init: init,
      destroy: destroy
    };

    return service;

    function init() {
      onError = $rootScope.$on('application.server.error', function (event, error) {
        var handlerFunctionName = 'on' + error.status + 'Error';

        if (typeof handler[handlerFunctionName] === 'function') {
          return handler[handlerFunctionName](error);
        }
        return handler.onUnknownError(error);
      });
    }

    function destroy() {
      if (typeof onError === 'function') {
        onError();
        onError = undefined;
      }
    }

    function on401Error() {
      $state.go('blank.login');
    }

    function on500Error(error) {
      $log.log(error);
    }

    function onUnknownError(error) {
      $log.log(error);
    }
  }
}());
