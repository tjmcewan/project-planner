'use strict';

planner.controller('PlannerController', function PlannerController($scope, planStorage) {
    var plan = planStorage.get();

    var defaultPlan = {
        name: "My Awesome Project",
        milestones: [{
            name: "Administrivia",
            tasks:[{
                name: "Proposal",
                hours: 20
            },{
                name: "Project management",
                hours: 40
            },{
                name: "Wrap-up",
                hours: 10
            }]
        },{
            name: "The rest",
            tasks: []
        }]
    };

    $scope.newMilestone = function() {
      $scope.plan.milestones.push({ "name": $scope.newMilestoneName });
      $scope.newMilestoneName = "";
    };

    $scope.planSave = function() {
        planStorage.put($scope.plan);
    };

    $scope.resetToDefault = function () {
        $scope.plan = defaultPlan;
    };

    $scope.cleanSlate = function () {
        $scope.plan = {name: "empty", milestones: []};
    };

    $scope.plan = plan.hasOwnProperty('milestones') ? plan : defaultPlan;

    $scope.quickEntryModel = plan.hasOwnProperty('milestones') ? yamlerise(plan) : plan;

});

function yamlerise(plan) {
  return plan.milestones.map(function(milestone) {
    if (milestone.hasOwnProperty('tasks')) {
      var taskNames = milestone.tasks.map(function(task) {
        return "    " + task.name;
      }).join("\n");
      return [milestone.name, taskNames].join("\n")
    }
  }).join("\n");
};
