(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .controller('PagesCtrl', PagesCtrl);

  /* @ngInject */
  function PagesCtrl($state, $stateParams, PAGES_LIST, Auth) {
    var vm = this;

    angular.extend(vm, {
      table: angular.extend(PAGES_LIST.table, {
        service: Auth.getPages,
        page: $stateParams.page
      })
    });

    angular.extend(vm, {

    });
  }
}());
