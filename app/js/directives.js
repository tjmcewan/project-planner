'use strict';

planner.directive('quickEntry', ['forEachLine', function() {
  return function(scope, elm, attrs) {
    scope.$watch(elm, function(){
      forEachLine(elm, function (line) {
        console.log("[" + line + "]");
      })
    })
  };
}]);
