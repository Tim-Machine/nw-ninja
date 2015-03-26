#!/usr/bin/env node

require('http').createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>sup</h1>');
}).listen(9000, '127.0.0.1');