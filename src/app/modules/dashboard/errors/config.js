(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .constant('ACCOUNTS_LIST', {
      table: {
        service: null,
        limit: 16,
        onDeleteConfirmTitle: 'Are you sure you want to delete this account?',
        buttons: {
          buttonFilter: true
        },
        cols: [
          {
            field: 'error',
            title: 'Error',
            sortable: 'error',
            sortDirection: 'asc',
            filterable: true
          },
          {
            field: 'error_class',
            title: 'Error class',
            filterable: true
          },
          {
            field: 'first_seen',
            title: 'First seen',
            sortable: 'first_seen',
            sortDirection: 'asc',
            filterable: true
          },
          {
            field: 'last_seen',
            title: 'Last seen',
            sortable: 'last_seen',
            sortDirection: 'asc',
            filterable: true
          },
          {
            title: 'Action',
            show: false
          }
        ],
        onEditClick: null,
        onDeleteClick: null
      }
    });
}());
