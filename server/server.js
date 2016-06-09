var express = require('express');
var app = global.app = express();
var fs = require('fs');
var path = require( 'path' );
var process = require( "process" );
var config = require('./config');
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: "console"}
    ],
    replaceConsole: true
});

app.use('/*',function(req,res,next){
	next();
});

fs.readdir(path.join(__dirname, 'api'), function (err, dirs) {
        dirs.forEach(function (dir) {
            require('./api/' + dir)();
        });
});

app.use(express.static('client/'));

app.listen(config.port,function(){
	console.log('express listening on port: ' + config.port);
});

//console.log(app._router.stack);