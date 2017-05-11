(function () {
  'use strict';

  angular
    .module('TSC.core', [
      'ui.router',
      'angular-loading-bar',
      'angularModalService',
      'LocalStorageModule',
      'ngMessages',
      'ngTable',
      'toastr',
      'ui.bootstrap',
      'vcRecaptcha',
      'chart.js',

      'TSC.services',
      'TSC.layout',
      'TSC.configs',
      'TW.common',
      'TSC.landing',
      'TSC.auth',
      'TSC.dashboard',
      'TSC.profile',
      'TSC.installation'
    ]);
}());
