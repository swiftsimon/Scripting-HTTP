var https = require('https');
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


// copy the call back function
function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);