'use strict';

/* Directives */


angular.module('planner.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('planner.directives', []).
  directive('quickEntry', function() {
    return function(scope, elm, attrs) {

    };
  });
