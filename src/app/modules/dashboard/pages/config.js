(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .constant('PAGES_LIST', {
      table: {
        service: null,
        limit: 16,
        onDeleteConfirmTitle: 'Are you sure you want to delete this account?',
        buttons: {
          buttonFilter: true
        },
        cols: [
          {
            field: 'errors',
            title: 'Errors',
            filterable: true
          },
          {
            field: 'page',
            title: 'Page',
            sortable: 'page',
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
