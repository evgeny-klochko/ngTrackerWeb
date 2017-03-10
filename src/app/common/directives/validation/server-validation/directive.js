(function () {
  'use strict';

  angular
    .module('TW.common')
    .directive('serverValidation', ServerValidation);

  function ServerValidation() {
    return {
      template: '<div><p class="error" ng-repeat="error in errors" ng-bind="error"></p></div>',
      restrict: 'E',
      scope: {
        errors: '='
      }
    };
  }
}());
