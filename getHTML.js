var https = require('https');


function getHTML (options, callback) {

  https.get(options, function(response) {
  response.setEncoding('utf8');
  let responseData = "";
  response.on('data', function(data) {
    console.log('Chunk Received. Length is', data.length);
    responseData += data;
    console.log(responseData);

  });
  response.on('end', function() {
    console.log('Stream complete', responseData);
  })

 })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);