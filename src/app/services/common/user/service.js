(function () {
  'use strict';

  angular
    .module('TSC.services')
    .factory('User', User);

  /* @ngInject */
  function User(localStorageService) {
    var _user = {
      profile: localStorageService.get('user'),
      authenticated: !!localStorageService.get('user')
    };

    var service = {
      user: user,
      clear: clear,
      update: update,
      authenticate: authenticate,
      role: role,
      isAuthenticated: isAuthenticated,
      isRolePermitted: isRolePermitted,
      isAdmin: isAdmin
    };

    function authenticate(token, userObject) {
      localStorageService.set('token', token);
      localStorageService.set('user', userObject);
      _user.profile = userObject;
      _user.authenticated = true;
    }

    function isAuthenticated() {
      return _user.authenticated;
    }

    function isRolePermitted(roles) {
      if (!isAuthenticated()) {
        return false;
      }
      return roles.indexOf(_user.profile.role) !== -1;
    }

    function user() {
      return _user;
    }

    function role() {
      return _user && _user.profile && _user.profile.role;
    }

    function isAdmin() {
      return _user && _user.profile && _user.profile.role === 'admin';
    }

    function update(userObject) {
      _user.profile = userObject;
      localStorageService.remove('user');
      localStorageService.set('user', userObject);
    }

    function clear() {
      _user.profile = null;
      _user.authenticated = false;
      localStorageService.remove('token');
      localStorageService.remove('user');
    }

    return service;
  }
}());
