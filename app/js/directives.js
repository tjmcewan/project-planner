'use strict';

planner.directive('keyCapture', function () {
  return function (scope, elem, attrs) {
    elem.bind('keydown', function (event) {
      scope.$apply(function () {
        var content, cursorPosition, lines, lineIndex, line, offset, pre, post, previousLine;
        var TABKEY = 9;
        var ENTERKEY = 13;
        var el = elem[0];

        if (event.keyCode === TABKEY) {
          content = el.value.replace(/\r\n/g, "\n");
          cursorPosition = el.selectionStart;
          lines = content.split("\n");
          lineIndex = content.substring(0, cursorPosition).split("\n").length - 1;
          line = lines[lineIndex];
          if (event.shiftKey === true && line.substring(0,4) === "    ") {
            lines[lineIndex] = line.substring(4, line.length);
            offset = -4;
          } else {
            lines[lineIndex] = "    " + line;
            offset = 4;
          }
          scope.quickEntryModel = el.value = lines.join("\n");
          el.selectionStart = el.selectionEnd = cursorPosition + offset;
          if (event.preventDefault) { event.preventDefault(); }
          return false;
        } else if (event.keyCode === ENTERKEY) {
          content = el.value.replace(/\r\n/g, "\n");
          cursorPosition = el.selectionStart;
          lines = content.split("\n");
          pre = content.substring(0, cursorPosition);
          post = content.substring(cursorPosition, content.length)
          lineIndex = content.substring(0, cursorPosition).split("\n").length - 1;
          previousLine = lines[lineIndex];
          if (previousLine.substring(0,4) === "    ") {
            el.value = pre + "\n    " + post;
            el.selectionStart = el.selectionEnd = cursorPosition + 5;
            if (event.preventDefault) { event.preventDefault(); }
            return false;
          }
        }
      })
    })
  }
})

planner.directive('quickEntry', function() {
  return function(scope, elem, attrs) {
    scope.$watch('quickEntryModel', function(content) {
      if (content != undefined) {
        var milestones = scope.plan.milestones = []
        var lines = content.replace(/\r\n/g, "\n").split("\n");
        var currentMilestone = {}

        lines.map(function(line) {
          if (line.trim() != "") {
            if (line.substring(0,4) == "    ") {
              currentMilestone.tasks = currentMilestone.tasks || [];
              currentMilestone.tasks.push({ name: line.substring(4, line.length) });
            } else {
              milestones.push({name: line});
              currentMilestone = milestones[milestones.length - 1]
            }
          }
        })
      }
    });
  }
});
