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
      // _.zip(poemLines[0], poemLines[1], poemLines[2]);
      var zipped = _.zip.apply(null, poemLines);
      console.log(zipped);
      var flattened = _.flatten(zipped);
      console.log(flattened);
      var result = flattened.join('\n');
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
