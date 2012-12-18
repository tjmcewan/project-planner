'use strict';

planner.controller('PlannerController', function PlannerController($scope, planStorage) {
  var plan = $scope.plan = planStorage.get();
  window.pplan = plan;
});
