(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .constant('BROWSERS_LIST', {
      table: {
        service: null,
        limit: 16,
        onDeleteConfirmTitle: 'Are you sure you want to delete this account?',
        buttons: {
          buttonFilter: true
        },
        cols: [
          {
            field: 'browser',
            title: 'Browser',
            sortable: 'browser',
            sortDirection: 'asc',
            filterable: true
          },
          {
            field: 'number',
            title: 'Errors number',
            sortable: 'number',
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
            field: 'trend',
            title: 'Trend',
            sortable: 'trend',
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
