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
            field: 'time',
            title: 'Timestamp',
            filterable: true
          },
          {
            field: 'error',
            title: 'Error',
            sortable: 'error',
            sortDirection: 'asc',
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
            field: 'browser',
            title: 'Browser',
            sortable: 'browser',
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
