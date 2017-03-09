(function () {
  'use strict';

  angular
    .module('TSC.auth', [])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('blank.login', {
        url: '/login',
        views: {
          content: {
            templateUrl: 'modules/auth/login/template.html',
            controller: 'LoginCtrl as login'
          }
        }
      })
      .state('blank.forgot-password', {
        url: '/password/forgot',
        views: {
          content: {
            templateUrl: 'modules/auth/forgot-password/template.html',
            controller: 'ForgotPasswordCtrl as forgot'
          }
        }
      })
      .state('blank.reset-password', {
        url: '/password/reset?token',
        views: {
          content: {
            templateUrl: 'modules/auth/reset-password/template.html',
            controller: 'ResetPasswordCtrl as reset'
          }
        }
      })
      .state('blank.register', {
        url: '/register',
        views: {
          content: {
            templateUrl: 'modules/auth/register/template.html',
            controller: 'RegisterCtrl as register'
          }
        }
      })
      .state('blank.confirmation', {
        url: '/confirmation',
        views: {
          content: {
            templateUrl: 'modules/auth/confirmation/template.html',
            controller: 'ConfirmCtrl'
          }
        }
      });
  }
}());
