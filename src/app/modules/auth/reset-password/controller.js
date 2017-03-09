(function () {
  'use strict';

  angular
    .module('TSC.auth')
    .controller('ResetPasswordCtrl', ResetPasswordCtrl);

  /* @ngInject */
  function ResetPasswordCtrl($stateParams, Auth) {
    var vm = this;

    angular.extend(vm, {
      token: $stateParams.token,
      state: {
        success: false,
        error: null
      }
    });

    if (vm.token) {
      Auth.restorePassword(vm.token)
        .then(function () {
          vm.state.success = true;
        })
        .catch(function (response) {
          vm.state.error = response.data.error.message;
        });
    }
  }
}());
