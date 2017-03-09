(function () {
  'use strict';

  angular
    .module('TSC.configs')
    .constant('APP_CONFIG', {
      MODE: 'ENV_MODE',
      RECAPTCHA_KEY: '6LcSDhQUAAAAACJNLyVx-D8-R6xaZG3tMFXZuYly',
      SUPPORT_EMAIL: 'support@email.com',
      SUPPORT_PHONE: '(123) 123 - 1234'
    });
}());
