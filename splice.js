var fs = require('fs-promise');
var Promise = require('bluebird');
var _ = require('lodash');
function splice(files, output) {
  var readFilePromises = files.map(function(file) {
    return fs.readFile(file);
  });
  return Promise.all(readFilePromises)
    .then(function(fileContents) {
      var poemLines = fileContents.map(function(buffer) {
        return buffer.toString().split('\n');
      });
      var allLines = [];
      var numOfLines = poemLines[0].length;
      // Each line
      for (var i = 0; i < numOfLines; i++) {
        // Each poem
        for (var j = 0; j < poemLines.length; j++) {
          var line = poemLines[j][i];
          allLines.push(line);
        }
      }
      var result = allLines.join('\n')
      return fs.writeFile(output, result);
    });
}

splice(['file1.txt', 'file2.txt', 'file3.txt'], 'output.txt')
  .then(function() {
    console.log('It worked');
  })
  .catch(function(err) {
    console.log(err.message);
  });
