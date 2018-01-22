var https = require('https');

function getAndPrintHTML (options) {

 https.get(options, function(response) {
  response.setEncoding('utf8');
  let responseData = "";
  response.on('data', function(data) {
    console.log('Chunk Received. Length is', data.length);
    responseData += data;
    console.log(responseData);

  });
 })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);