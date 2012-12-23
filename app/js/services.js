'use strict';

planner.factory( 'planStorage', function() {
  var STORAGE_ID = 'planner-project-plan';

  return {
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function(plan) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(plan));
    }
  };
});

// planner.factory('forEachLine', function forEachLine(textarea, func) {
//   var lines = textarea.value.replace(/\r\n/g, "\n").split("\n");
//   var newLines, i;

//   // Use the map() method of Array where available
//   if (typeof lines.map != "undefined") {
//     newLines = lines.map(func);
//   } else {
//     newLines = [];
//     i = lines.length;
//     while (i--) {
//       newLines[i] = func(lines[i]);
//     }
//   }
// });
