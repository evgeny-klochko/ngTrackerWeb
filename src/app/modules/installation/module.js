(function () {
  'use strict';

  angular
    .module('TSC.installation', [])
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('root.installation', {
        url: '/installation',
        views: {
          content: {
            templateUrl: 'modules/installation/installation/template.html',
            controller: 'InstallationCtrl as install'
          }
        }
      });
  }
}());
