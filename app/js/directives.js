'use strict';

planner.directive('quickEntry', function() {
  return {
    link: function(scope, elem, attrs) {
      scope.$watch('quickEntryModel', function(content) {
        if (content != undefined) {
          var lines = content.replace(/\r\n/g, "\n").split("\n");
          var itemNumber = content.substring(0, elem[0].selectionStart).split("\n").length - 1
          planBuilder(lines[itemNumber], itemNumber, scope);
          // var newLines = lines.map(function (line) { planBuilder(line, scope) });
          // scope.quickEntryModel2 = newLines.join("\n");
        }
      });
    }
  }
});

function planBuilder(line, index, scope) {
  if (line.substring(0,2) == "  ") {
    milestone = scope.plan.milestones[index - 1]
    milestone.tasks.push({ name: line.substring(2, line.length) });
  } else {
    if (scope.plan.milestones[index]) {
      scope.plan.milestones[index].name = line;
    } else {
      scope.plan.milestones.push({name: line});
    }


  }
}
