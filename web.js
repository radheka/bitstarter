var express = require('express');

var buff = new Buffer(fs.readFileSync("index.html"));

var app = express.createServer(express.logger());

var content = buff.toString('utf-8')

app.get('/', function(request, response) {
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
