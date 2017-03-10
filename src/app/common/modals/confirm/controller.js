(function () {
  'use strict';

  angular
    .module('TW.common')
    .controller('ConfirmComponentCtrl', ConfirmComponentCtrl);

  /* @ngInject */
  function ConfirmComponentCtrl() {
    var $ctrl = this;

    $ctrl.ok = ok;
    $ctrl.cancel = cancel;

    function ok() {
      $ctrl.close();
    }

    function cancel() {
      $ctrl.dismiss();
    }
  }
}());
