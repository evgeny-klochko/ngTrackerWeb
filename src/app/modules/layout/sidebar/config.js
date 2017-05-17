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
          title: 'Dashboard',
          root: 'root.dashboard',
          className: 'dashboard',
          subroutes: [
            { title: 'Common', state: 'root.dashboard.common' },
            { title: 'Errors', state: 'root.dashboard.errors' },
            { title: 'Pages', state: 'root.dashboard.pages' },
            { title: 'Browsers', state: 'root.dashboard.browsers' }
          ]
        },
        {
          title: 'Settings',
          root: 'root.settings',
          className: 'settingss',
          subroutes: [
            { title: 'Personalisation', state: 'root.profile' },
            { title: 'Installation', state: 'root.installation' }
          ]
        }
      ]
    });
}());
