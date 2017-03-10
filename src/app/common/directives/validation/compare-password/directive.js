(function () {
  'use strict';

  angular
    .module('TW.common')
    .directive('comparePassword', ComparePassword);

  /* @ngInject */
  function ComparePassword() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: link,
      scope: {
        passwordModel: '=comparePassword'
      }
    };
  }

  function link($scope, $el, $attrs, ngModel) {
    ngModel.$validators.passwordConfirmation = passwordConfirmation;
    $scope.$watch('passwordModel', onPasswordModelChange);

    function passwordConfirmation(modelValue) {
      if (typeof modelValue === 'undefined') {
        return true;
      }
      return modelValue === $scope.passwordModel;
    }

    function onPasswordModelChange() {
      ngModel.$validate();
    }
  }
}());
