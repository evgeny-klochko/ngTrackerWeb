(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .controller('PagesCtrl', PagesCtrl);

  /* @ngInject */
  function PagesCtrl($state, $stateParams, PAGES_LIST) {
    var vm = this;

    angular.extend(vm, {
      table: angular.extend(PAGES_LIST.table, {
        service: null,
        page: $stateParams.page
      })
    });

    angular.extend(vm, {

    });
  }
}());
