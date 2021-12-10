

var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req,res){
	var q = url.parse(req.url,true);
	console.log(q.pathname);
	var filename = "."+ q.pathname;
	if (filename == './'){ filename='./index';}

    filename = filename + ".html";

fs.readFile(filename, function (err,data){
	if (err){
		res.writeHead(404, {'Content-Type':'text/html'});
		return res.end("404 Not Found");
	}
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(data);
	//console.log('... Incoming Request: '+ req.url);
    return res.end();
    
})
}).listen(PORT);
console.log('Server listening on Port 8080...');

//console.log ('Hello World');
/*
git bash:
node hello.js (to start on git bash with node and select file to read from)
ctr + c (to close server and start new one with updated code by putting up arrow)
cd /c/nodefiles (to change directory)
*/
/*
node.js/javascript:

var http = require('http');
http.createServer(function (req,res){
res.writeHead(200, {'Conten-Type':'text/html'});
res.write(req.url);
res.end();
}).listen(8080);

res.write(req.url);( whatver on url shows in page/ use for if this url show this page etc)
------
add variable  
var url = require('url');
then its  

var http = require('http');
var url = require('url');

http.createServer(function (req,res){
res.writeHead(200, {'Content-Type':'text/html'});
var q = url.parse(req.url, true).query;
var dates = q.year+ " " + q.month;
res.write(dates);
res.end();
}).listen(8080);

url was: http://localhost:8080/?year=2021&month=November
so it shows year and month

-------
how to read file(index.html from same directory)
var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
fs.readFile('index.html', function (err,data){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(data);
    res.end();
    
})
}).listen(8080);

---------
show messages/updates on console git bash
new variable fs that uses url to get pathname and put into variable to use
on readFile
if statement to show when wrong page or doesnt exist

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res){
	var q = url.parse(req.url,true);
	console.log(q.pathname);
	var filename = "."+ q.pathname;
fs.readFile(filename, function (err,data){
	if (err){
		res.writeHead(404, {'Content-Type':'text/html'});
		return res.end("404 Not Found");
	}
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(data);
	//console.log('... Incoming Request: '+ req.url);
    return res.end();
    
})
}).listen(8080);
console.log('Server listening on Port 8080...');

------
add if statement in between to make page go automatically to index.html
...
var filename = "."+ q.pathname;
	if (filename == './'){ filename='./index.html';}
fs.readFile(filename, function (err,data){
...

-------
chnage again to not show html at url on page
...
	var filename = "."+ q.pathname;
	if (filename == './'){ filename='./index';}

    filename = filename + ".html";

fs.readFile(filename, function (err,data){
...


*/