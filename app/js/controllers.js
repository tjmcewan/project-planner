'use strict';

planner.controller('PlannerController', function PlannerController($scope, planStorage) {
  var plan = $scope.plan = planStorage.get();

  var defaultPlan = {
    "name": "My Awesome Project",
    "milestones": [{
      "name": "Administrivia",
      "tasks":[{
        "name": "Proposal",
        "hours": 20
      },{
        "name": "Project management",
        "hours": 40
      },{
        "name": "Wrap-up",
        "hours": 10
      }]
    },{
      "name": "The rest",
      "tasks": []
    }]
  };

  // plan || plan = defaultPlan;
  console.log(plan);

  window.pplan = plan;
});
