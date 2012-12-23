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

    $scope.planSave = function() {
        planStorage.put($scope.plan);
    };

    $scope.resetToDefault = function () {
        $scope.plan = defaultPlan;
    };

    $scope.cleanSlate = function () {
        $scope.plan = {};
    };

    // $scope.plan_as_string = JSON.stringify($scope.plan);

    $scope.plan = plan || defaultPlan;

    console.log(plan);
    console.log(defaultPlan);

});
