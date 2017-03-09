(function () {
  'use strict';

  angular
    .module('TSC.layout')
    .controller('MainHeaderCtrl', MainHeaderCtrl);

  /* @ngInject */
  function MainHeaderCtrl($state, User) {
    var vm = this;

    angular.extend(vm, {
      logout: logout,
      user: User.user()
    });

    function logout() {
      User.clear();
      $state.go('blank.login');
    }
  }
}());
