require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');

function splice2(file1, file2, output) {
  return Promise.all([fs.readFile(file1), fs.readFile(file2)])
    .spread(function(buffer1, buffer2) {
      var lines1 = buffer1.toString().split('\n');
      var lines2 = buffer2.toString().split('\n');
      var doubleLines = lines1.map(function(line1, i) {
        var line2 = lines2[i];
        return line1 + '\n' + line2;
      });
      var result = doubleLines.join('\n');
      return fs.writeFile(output, result);
    });
}

splice2('file1.txt', 'file2.txt', 'output.txt')
  .then(function() {
    console.log('Wrote to output.txt');
  })
  .catch(function(err) {
    console.log(err.stack);
  })
