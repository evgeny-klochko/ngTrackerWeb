(function () {
  'use strict';

  angular
    .module('TW.common')
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
