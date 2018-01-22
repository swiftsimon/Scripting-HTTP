var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

//transform html string to all caps and print to console
function printUpperCase (html) {
  var htmlUpper = html.toUpperCase();
  console.log(htmlUpper);
  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);