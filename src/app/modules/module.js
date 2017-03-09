(function () {
  'use strict';

  angular
    .module('TSC.core', [
      'ui.router',
      'angular-loading-bar',
      'angularModalService',
      'LocalStorageModule',
      'ngMessages',
      'toastr',
      'ui.bootstrap',
      'vcRecaptcha',

      'TSC.services',
      'TSC.layout',
      'TSC.configs',
      'TSC.common',
      'TSC.landing',
      'TSC.auth',
      'TSC.errors',
      'TSC.profile'
    ]);
}());
