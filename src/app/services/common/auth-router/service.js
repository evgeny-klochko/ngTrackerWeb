(function () {
  'use strict';

  angular
    .module('TSC.services')
    .factory('AuthRouter', AuthRouter);

  /* @ngInject */
  function AuthRouter($rootScope, $state, User) {
    var onStateChangeWatcher;

    var service = {
      init: init,
      destroy: destroy,
      navigateByRole: navigateByRole
    };

    return service;

    function init() {
      var firstLoad = false;

      onStateChangeWatcher = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        if (User.isAuthenticated() && fromState.name === '' && toState.name === 'blank.landing' && !firstLoad) {
          event.preventDefault();
          firstLoad = true;
          navigateByRole(User.role());
          return;
        }

        if (!toState.data || !toState.data.authRequired) {
          return;
        }

        if (!User.isAuthenticated()) {
          event.preventDefault();
          $state.go('blank.login');
        }

        if (toState.data.authRequired && toState.data.roles && !User.isRolePermitted(toState.data.roles)) {
          event.preventDefault();
          navigateByRole(User.role());
        }
      });
    }

    function destroy() {
      if (onStateChangeWatcher && typeof onStateChangeWatcher === 'function') {
        onStateChangeWatcher();
        onStateChangeWatcher = undefined;
      }
    }

    function navigateByRole(role) {
      var ROUTES = {
        superadmin: 'root.subscriptions.list',
        admin: 'root.errors.list',
        user: 'blank.landing'
      };

      if (ROUTES[role]) {
        $state.go(ROUTES[role]);
      }
    }
  }
}());
