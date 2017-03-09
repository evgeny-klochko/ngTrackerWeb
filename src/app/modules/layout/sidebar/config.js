(function () {
  'use strict';

  angular
    .module('TSC.layout')
    .constant('SIDEBAR_CONFIG', {
      SUPER_ADMIN_ROUTES: [
        {
          title: 'Accounts',
          root: 'root.accounts',
          className: 'accounts',
          subroutes: [
            { title: 'All Accounts', state: 'root.accounts.list' },
            { title: 'Add new account', state: 'root.accounts.create' }
          ]
        },
        {
          title: 'Statistics',
          root: 'root.statistics',
          className: 'statistics',
          subroutes: [
            { title: 'Common', state: 'root.statistics.common' },
            { title: 'Growth', state: 'root.statistics.growth' }
          ]
        }
      ],

      ADMIN_ROUTES: [
        {
          title: 'Errors',
          root: 'root.errors',
          className: 'errors',
          subroutes: [
            { title: 'All errors', state: 'root.errors.list' },
            { title: 'Suggestions', state: 'root.errors.suggestions' }
          ]
        },
        {
          title: 'Statistics',
          root: 'root.stat',
          className: 'stat',
          subroutes: [
            { title: 'Common', state: 'root.stat.common' },
            { title: 'Analyze', state: 'root.stat.analyze' }
          ]
        }
      ]
    });
}());
