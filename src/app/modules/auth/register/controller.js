(function () {
  'use strict';

  angular
    .module('TSC.auth')
    .controller('RegisterCtrl', RegisterCtrl);

  /* @ngInject */
  function RegisterCtrl($state) {
    var vm = this;

    angular.extend(vm, {

    });

    angular.extend(vm, {
      submit: submit
    });


    function submit() {
/*      if (!form.invalid) {
        return;
      }*/

      $state.go('root.dashboard.common');
    }
  }
}());
