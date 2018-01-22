var https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

 https.get(requestOptions, function(response) {
  response.setEncoding('utf8');
  let responseData = "";
  response.on('data', function(data) {
    console.log('Chunk Received. Length is', data.length);
    responseData += data;
    console.log(responseData);

  });
 })
}

getAndPrintHTML();