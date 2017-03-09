(function () {
  'use strict';

  angular
    .module('TSC.landing')
    .controller('LandingCtrl', LandingCtrl);

  /* @ngInject */
  function LandingCtrl() {
    var vm = this;

    angular.extend(vm, {
      slides: [{
        title: 'JS tracker is the easy way<br />to make your website better',
        image: ''
      }]
    });
  }
}());
