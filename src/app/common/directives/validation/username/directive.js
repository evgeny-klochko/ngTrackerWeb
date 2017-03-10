(function () {
  'use strict';

  angular
    .module('TW.common')
    .directive('username', Username);

  /* @ngInject */
  function Username() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: link
    };
  }

  function link($scope, $el, $attrs, ngModel) {
    ngModel.$validators.username = username;

    function username(modelValue) {
      var pattern = /^(((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*(\r\n)?\s?)+)*)$/;
      if (!modelValue) {
        return true;
      }
      return pattern.test(modelValue);
    }
  }
}());
