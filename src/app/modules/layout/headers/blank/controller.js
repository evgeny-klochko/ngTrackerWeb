(function () {
  'use strict';

  angular
    .module('TSC.layout')
    .controller('BlankHeaderCtrl', BlankHeaderCtrl);

  /* @ngInject */
  function BlankHeaderCtrl($scope, $state) {
    var vm = this;

    angular.extend(vm, {
      state: { isSignInShown: isSignInShown($state.current.name) }
    });

    $scope.$on('$stateChangeSuccess', onStateChangeSuccess);

    function isSignInShown(stateName) {
      var states = [
        'blank.landing'
      ];

      return states.some(function (state) {
        return state === stateName;
      });
    }

    function onStateChangeSuccess(event, toState) {
      vm.state.isSignInShown = isSignInShown(toState.name);
    }
  }
}());
