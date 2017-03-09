(function () {
  'use strict';

  angular
    .module('TSC.auth')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl() {
    var vm = this;

    angular.extend(vm, {
      credentials: {},
      errors: {}
    });

    angular.extend(vm, {
      submit: submit
    });

    function submit() {

    }
  }
}());
