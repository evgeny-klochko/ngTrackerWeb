(function () {
  'use strict';

  angular
    .module('TSC.dashboard', [])
    .config(config);

  /* @ngInject */
  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/common');

    $stateProvider
      .state('root.dashboard', {
        url: '/dashboard',
        abstract: true,
        data: {
          //  authRequired: true,
          //  roles: ['admin']
        }
      })
      .state('root.dashboard.common', {
        url: '/common',
        views: {
          'content@root': {
            templateUrl: 'modules/dashboard/common/template.html',
            controller: 'CommonCtrl as common'
          }
        }
      })
      .state('root.dashboard.errors', {
        url: '/errors',
        views: {
          'content@root': {
            templateUrl: 'modules/dashboard/errors/template.html',
            controller: 'ErrorsCtrl as errors'
          }
        }
      })
      .state('root.dashboard.pages', {
        url: '/pages',
        views: {
          'content@root': {
            templateUrl: 'modules/dashboard/pages/template.html',
            controller: 'PagesCtrl as pages'
          }
        }
      })
      .state('root.dashboard.browsers', {
        url: '/browsers',
        views: {
          'content@root': {
            templateUrl: 'modules/dashboard/browsers/template.html',
            controller: 'BrowsersCtrl as browsers'
          }
        }
      })
      ;
  }
}());
