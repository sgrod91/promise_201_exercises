//Solution 2: passing down. use map and spread
require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');


function splice2(file1, file2, output) {
  return fs.readFile(file1)
  .then(function(buffer1) {
    return [buffer1, fs.readFile(file2)];
  })
  .spread(function(buffer1, buffer2) {
    var lines1 = buffer1.toString().split('/n');
    var lines2 = buffer2.toString().split('/n');
    lines1.map(function(lines1, i) {

    }
    

    var content = [0,1,2].reduce(function(str, x) {
      str = str + line1[x] +' /n' + line2[x] + '\n';

      return str;
    } , '');

    return fs.writeFile(output, content);
  });
}




splice2('file-1.txt', 'file-2.txt', 'output.txt')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });
