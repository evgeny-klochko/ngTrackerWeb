(function () {
  'use strict';

  angular
    .module('TSC.layout', [])
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          '@': {
            templateUrl: 'modules/layout/layout/main/template.html'
          },
          'header@root': {
            templateUrl: 'modules/layout/headers/main/template.html',
            controller: 'MainHeaderCtrl as mainHeader'
          },
          'sidebar@root': {
            templateUrl: 'modules/layout/sidebar/template.html',
            controller: 'SidebarCtrl as sidebar'
          }
        }
      })
      .state('blank', {
        url: '',
        abstract: true,
        views: {
          '@': {
            templateUrl: 'modules/layout/layout/blank/template.html'
          },
          'header@blank': {
            templateUrl: 'modules/layout/headers/blank/template.html',
            controller: 'BlankHeaderCtrl as blankHeader'
          }
        }
      });
  }
}());
