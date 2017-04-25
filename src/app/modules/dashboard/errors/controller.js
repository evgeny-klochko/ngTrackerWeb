(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .controller('ErrorsCtrl', ErrorsCtrl);

  /* @ngInject */
  function ErrorsCtrl($state, $stateParams, ACCOUNTS_LIST, Auth) {
    var vm = this;

    angular.extend(vm, {
      table: angular.extend(ACCOUNTS_LIST.table, {
        service: Auth.getEr,
        page: $stateParams.page
      })
    });

    angular.extend(vm, {

    });
  }
}());
