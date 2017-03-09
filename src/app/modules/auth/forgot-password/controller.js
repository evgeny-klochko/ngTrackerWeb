(function () {
  'use strict';

  angular
    .module('TSC.auth')
    .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

  /* @ngInject */
  function ForgotPasswordCtrl(Auth) {
    var vm = this;

    angular.extend(vm, {
      credentials: {},
      state: {
        sent: false
      }
    });

    angular.extend(vm, {
      submit: submit
    });

    function submit(form) {
      if (form.$invalid) {
        return;
      }

      Auth.requestRestorePassword(vm.credentials).then(function () {
        vm.state.sent = true;
      });
    }
  }
}());
