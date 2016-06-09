var express = require('express');
var app = global.app = express();
var fs = require('fs');
var path = require( 'path' );
var process = require( "process" );
var config = require('./config');

app.use('/*',function(req,res,next){
	next();
});

fs.readdir( 'server/api', function( err, files ) {
	 files.forEach( function( file, index ) {
		 require('./api/' + file + '/index');
	 });	
});

app.use(express.static('client/'));

app.listen(config.port,function(){
	console.log('express listening on port: ' + config.port);
});

//console.log(app._router.stack);