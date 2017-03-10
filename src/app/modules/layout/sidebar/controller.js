(function () {
  'use strict';

  angular
    .module('TSC.layout')
    .controller('SidebarCtrl', SidebarCtrl);

  /* @ngInject */
  function SidebarCtrl($state, User, APP_CONFIG, SIDEBAR_CONFIG) {
    var vm = this;
    var isAdmin = true;

    angular.extend(vm, {
      $state: $state,
      user: User.user(),
      routes: isAdmin ? SIDEBAR_CONFIG.ADMIN_ROUTES : SIDEBAR_CONFIG.SUPER_ADMIN_ROUTES,
      contacts: {
        email: APP_CONFIG.SUPPORT_EMAIL,
        phone: APP_CONFIG.SUPPORT_PHONE
      }
    });

    angular.extend(vm, {
      url: url
    });

    function url(stateName) {
      return $state.href(stateName);
    }
  }
}());
