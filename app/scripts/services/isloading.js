'use strict';

/**
 * @ngdoc service
 * @name predictwcApp.isLoading
 * @description
 * # isLoading
 * Factory in the predictwcApp.
 */
angular.module('predictwcApp')
  .factory('isLoading', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
