(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .constant('BROWSERS_LIST', {
      table: {
        service: null,
        limit: 10,
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
            field: 'views',
            title: 'Views',
            sortable: 'views',
            sortDirection: 'asc',
            filterable: true
          },
          {
            field: 'errors',
            title: 'Errors',
            sortable: 'errors',
            sortDirection: 'asc',
            filterable: true
          },
          {
            field: 'relative',
            title: 'Relative number',
            sortable: 'relative',
            sortDirection: 'asc',
            filterable: true
          },
          {
            field: 'last_2_week',
            title: 'Trend',
            sortable: 'last_2_week',
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
