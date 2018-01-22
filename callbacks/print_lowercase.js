var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

//transform html string to all lowercase and print to console
function printLowerCase (html) {
  var htmlLower = html.toLowerCase();
  console.log(htmlLower);
  /* Write your code here! */

}

getHTML(requestOptions, printLowerCase);