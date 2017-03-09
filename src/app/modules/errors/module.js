(function () {
  'use strict';

  angular
    .module('TSC.errors', [])
    .config(config);

  /* @ngInject */
  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/errors', '/errors/list');

    $stateProvider
      .state('root.errors', {
        url: '/errors',
        abstract: true,
        data: {
          authRequired: true,
          roles: ['admin']
        }
      })
      .state('root.errors.list', {
        url: '/list',
        views: {
          'content@root': {
            templateUrl: 'modules/errors/list/template.html',
            controller: 'ErrorsListCtrl as errorsList'
          }
        }
      });
  }
}());
