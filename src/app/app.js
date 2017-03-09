(function () {
  'use strict';

  angular.element(document).ready(onDocumentReady);

  angular
    .module('TSC', ['TSC.core'])
    .config(config)
    .run(run);

  function onDocumentReady() {
    angular.bootstrap(document, ['TSC']);
  }

  /* @ngInject */
  function config(
    $logProvider,
    $httpProvider,
    $compileProvider,
    $locationProvider,
    $urlRouterProvider,
    toastrConfig,
    cfpLoadingBarProvider,
    localStorageServiceProvider,
    vcRecaptchaServiceProvider,
    APP_CONFIG
  ) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $httpProvider.useApplyAsync(true);
    $httpProvider.defaults.headers.withCredentials = true;
    $httpProvider.interceptors.push('authInterceptor');
    $httpProvider.interceptors.push('serverErrorInterceptor');

    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 100;

    localStorageServiceProvider.setPrefix('TSC');

    angular.extend(toastrConfig, {
      positionClass: 'toast-bottom-right'
    });

    vcRecaptchaServiceProvider.setSiteKey(APP_CONFIG.RECAPTCHA_KEY);

    if (APP_CONFIG.MODE === 'production') {
      $compileProvider.debugInfoEnabled(false);
      $logProvider.debugEnabled(false);
    }
  }

  /* @ngInject */
  function run($rootScope, $state, AuthRouter, ErrorHandler) {
    AuthRouter.init();
    ErrorHandler.init();
  }
}());
