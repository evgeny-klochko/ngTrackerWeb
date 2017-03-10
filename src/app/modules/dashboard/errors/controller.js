(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .controller('ErrorsCtrl', ErrorsCtrl);

  /* @ngInject */
  function ErrorsCtrl($state, $stateParams, ACCOUNTS_LIST) {
    var vm = this;

    angular.extend(vm, {
      table: angular.extend(ACCOUNTS_LIST.table, {
        service: null,
        page: $stateParams.page
      })
    });

    angular.extend(vm, {

    });
  }
}());
