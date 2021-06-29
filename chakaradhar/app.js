


var http = require('http');   //

var express = require('express')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});



  res.end('Hello World!grfgfgfg');

console.log("server started running on port 12345")

}).listen(12345);