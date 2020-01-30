var http = require('http');
var handle = require('./handle');
var s = require('./name');

var server = http.createServer(handle);
console.log(s.name());
server.listen(3000, function() {
    console.log('Server is listening at port 3000');
});