(function () {
  'use strict';

  angular
    .module('TSC.services')
    .factory('Profile', Profile);

  function Profile($http, API_CONFIG) {
    var service = {
      update: update,
      superAdminUpdate: superAdminUpdate,
      get: get
    };

    return service;

    function get() {
      return $http.get(API_CONFIG.BASE_URL + '')
        .then(function (response) {
          return response.data;
        });
    }

    function update(user) {
      return $http.put(API_CONFIG.BASE_URL + '', user)
        .then(function (response) {
          return response.data;
        });
    }

    function superAdminUpdate(user) {
      return $http.put(API_CONFIG.BASE_URL + '', user)
        .then(function (response) {
          return response.data;
        });
    }
  }
}());
