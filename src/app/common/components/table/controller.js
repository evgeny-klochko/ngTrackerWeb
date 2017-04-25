(function () {
  'use strict';

  angular
    .module('TW.common')
    .controller('TableCtrl', TableCtrl);

  function TableCtrl($log, $scope, NgTableParams, ngTableEventsChannel, Confirm) {
    var $ctrl = this;
    var onPagesChanged;

    $ctrl.search = {
      queries: {},
      filters: []
    };

    $ctrl.$onInit = $onInit;
    $ctrl.$onDestroy = $onDestroy;
    $ctrl.onEditClicked = onEditClicked;
    $ctrl.onDeleteClicked = onDeleteClicked;
    $ctrl.toggleFilter = toggleFilter;
    $ctrl.clearFilter = clearFilter;

    function clearFilter(field) {
      $ctrl.search.filters.splice($ctrl.search.filters.indexOf(field), 1);
      if ($ctrl.search.queries[field]) {
        $ctrl.search.queries[field] = '';
        $ctrl.tableParams.reload();
      }
    }

    function toggleFilter(field) {
      if ($ctrl.search.filters.indexOf(field) === -1) {
        $ctrl.search.filters.push(field);
      } else {
        $ctrl.search.filters.splice($ctrl.search.filters.indexOf(field), 1);
        $ctrl.search.queries[field] = '';
        $ctrl.tableParams.reload();
      }
    }

    function onSearchChanged() {
      if ($ctrl.search.filters.length) {
        $ctrl.tableParams.reload();
      }
    }

    function onDeleteClicked(entity) {
      Confirm.open({ title: $ctrl.onDeleteConfirmTitle })
        .then(function () {
          return $ctrl.onDelete({ entity: entity });
        })
        .then(function () {
          $ctrl.tableParams.reload();
        })
        .catch(angular.noop);
    }

    function onEditClicked(entity) {
      $ctrl.onEdit({ entity: entity });
    }

    function $onDestroy() {
      if (typeof onPagesChanged === 'function') {
        onPagesChanged();
        onPagesChanged = undefined;
      }
    }

    function $onInit() {
      $ctrl.filters = $ctrl.cols.filter(function (col) {
        return col.filterable;
      });

      $ctrl.fields = $ctrl.cols.reduce(function (accum, col) {
        accum[col.field] = col.title;
        return accum;
      }, {});

      $scope.$watchCollection(function () { return $ctrl.search.queries; }, _.debounce(onSearchChanged, 300));

      $ctrl.tableParams = new NgTableParams({
        page: $ctrl.page || 1,
        count: $ctrl.limit
      }, {
        counts: [10, 20, 50],
        paginationMaxBlocks: 3,
        paginationMinBlocks: 2,
        getData: function (ngTable) {
          var params = {};
          var sorting = ngTable.sorting();
          var page = ngTable.page();
          var limit = ngTable.count();
          var offset = (page - 1) * limit;

          ngTable.selectModel = limit;

          if (!_.isEmpty(sorting)) {
            params.order_by = Object.keys(sorting)[0];
            params.order_direction = sorting[params.order_by].toUpperCase();
          }

          if ($ctrl.search.filters.length) {
            params.filters = $ctrl.search.filters.reduce(function (accum, filter) {
              if ($ctrl.search.queries[filter]) {
                accum[filter] = $ctrl.search.queries[filter];
              }
              return accum;
            }, {});
          }

          params.limit = limit;
          params.offset = offset;

          return $ctrl.service(params)
            .then(function (response) {
              var total = response.result.total;
              var nextPage;

              if (!response.result.data.length && response.result.total) {
                nextPage = Math.round(total / limit);
                ngTable.page(nextPage);
              }
              ngTable.total(total);
              return response.result.data;
            });
        }
      });

      onPagesChanged = ngTableEventsChannel.onPagesChanged(function () {
        if (typeof $ctrl.onChangePage === 'function') {
          $ctrl.onChangePage({ page: $ctrl.tableParams.page() });
        }
      });
    }
  }
}());
