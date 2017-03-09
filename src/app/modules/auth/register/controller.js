(function () {
  'use strict';

  angular
    .module('TSC.auth')
    .controller('RegisterCtrl', RegisterCtrl);

  /* @ngInject */
  function RegisterCtrl() {
    var vm = this;

    angular.extend(vm, {

    });

    angular.extend(vm, {
      submit: submit
    });


    function submit() {

    }
  }
}());
