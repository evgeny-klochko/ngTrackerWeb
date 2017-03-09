(function () {
  'use strict';

  angular
    .module('TSC.profile', [])
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('root.profile', {
        url: '/profile',
        views: {
          content: {
            templateUrl: 'modules/profile/profile/template.html',
            controller: 'ProfileCtrl as profile'
          }
        }
      });
  }
}());
