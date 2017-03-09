(function () {
  'use strict';

  angular
    .module('TSC.layout')
    .directive('sidebarToggle', SidebarToggle);

  /* @ngInject */
  function SidebarToggle($timeout) {
    return {
      restrict: 'A',
      link: link.bind(null, $timeout)
    };
  }

  function link($timeout, $scope, $el) {
    $timeout(handler, 0);

    function handler() {
      var $prev;
      var $links = $el.children();

      $links.on('click', onNavbarItemClick);

      function onNavbarItemClick() {
        $links.removeClass('active');
        $prev = angular.element(this);
        $prev.addClass('active');
      }
    }
  }
}());
