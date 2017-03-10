(function () {
  'use strict';

  angular
    .module('TW.common')
    .component('twTable', {
      templateUrl: 'common/components/table/template.html',
      controller: 'TableCtrl',
      bindings: {
        page: '<',
        service: '<',
        buttons: '<',
        limit: '<',
        cols: '<',
        editLink: '<',
        onDeleteConfirmTitle: '<',
        onNew: '&',
        onEdit: '&',
        onDelete: '&',
        onChangePage: '&'
      }
    });
}());
