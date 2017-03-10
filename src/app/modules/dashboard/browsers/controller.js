(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .controller('BrowsersCtrl', BrowsersCtrl);

  /* @ngInject */
  function BrowsersCtrl($state, $stateParams, BROWSERS_LIST) {
    var vm = this;

    angular.extend(vm, {
      table: angular.extend(BROWSERS_LIST.table, {
        service: null,
        page: $stateParams.page
      })
    });

    angular.extend(vm, {

    });
  }
}());
