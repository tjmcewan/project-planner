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
        "name": "project management",
        "assignees": [{
          "name": "joe bloggs",
          "hours": 12
        },{
          "name": "jane bloggs",
          "hours": 14
        }],
        "disbursements": [{
          "name": "airfare",
          "amount": 456
        },{
          "name": "taxi",
          "amount": 35
        }]
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
