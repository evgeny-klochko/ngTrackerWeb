(function () {
  'use strict';

  angular
    .module('TSC.landing', [])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('blank.landing', {
        url: '/',
        views: {
          content: {
            templateUrl: 'modules/landing/landing/template.html',
            controller: 'LandingCtrl'
          }
        }
      });
  }
}());
