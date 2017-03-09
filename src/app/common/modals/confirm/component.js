(function () {
  'use strict';

  angular
    .module('TSC.common')
    .component('confirm', {
      templateUrl: 'common/modals/confirm/template.html',
      controller: 'ConfirmComponentCtrl',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      }
    });
}());
