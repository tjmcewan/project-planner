'use strict';

/* Controllers */


function plannerController($scope) {
  $scope.stats = {"cost": "implement me"};
  $scope.milestones = [
    {
      "name": "inception",
      "cost": 123,
      "tasks":[
      {
        "name": "project management"
      },{
        "name": "proposal"
      }]
    }];
  $scope.newMilestone = function() {
    $scope.milestones.push({ "name": $scope.newMilestoneName });
    $scope.newMilestoneName = "";
  };

  window.milestones = $scope.milestones;
}
