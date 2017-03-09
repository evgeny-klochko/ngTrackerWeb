(function () {
  'use strict';

  angular
    .module('TSC.common')
    .factory('Confirm', Confirm);

  /* @ngInject */
  function Confirm($uibModal) {
    var service = {
      open: open
    };

    /**
     * Shows a confirm popup.
     * @param {Object} params
     * @param {string} params.title - Popup title
     * @param {string} params.content - Popup content
     * @param {string} [params.okButtonText] - Popup ok button text
     * @param {string} [params.cancelButtonText] - Popup cancel button text
     * @returns Promise
     */
    function open(params) {
      var DEFAULTS = {
        title: 'Are you sure?',
        content: '',
        okButtonText: 'Yes',
        cancelButtonText: 'No'
      };

      var instance = $uibModal.open({
        animation: true,
        component: 'confirm',
        resolve: {
          params: function () {
            return angular.extend(DEFAULTS, params || {});
          }
        }
      });

      return instance.result;
    }

    return service;
  }
}());
