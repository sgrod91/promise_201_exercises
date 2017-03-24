// //var request = require('request-promise');
// var fs = require('fs-promise');
//
// var url = 'http://css-tricks.com';
// var filename = 'css-tricks.html';
//
// request(url)
//   .then(function(html) {
//     return fs.writeFile(filename, html);
//   })
//   .then(function() {
//     console.log('Worked');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

var request = require('request-promise');
var fs = require('fs-promise');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';


  function saveWebPage(url, filename) {
    return request(url)
      .then(function(html) {
        return fs.writeFile(filename, html);
      });

  }

  saveWebPage(url, filename)
    .then(function() {
      console.log('Success!');
    })
    .catch(function(err) {
      console.log('Something went wrong.');
      console.log('Because: ', err.message);
    });
