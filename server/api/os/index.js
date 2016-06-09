var controller = require('./controller');
var router = require('express')();
var app = global.app;

module.exports = function(){

    //get cpus from os
    app.get('/cpus',controller.cpus);    
    function test(){
        console.log('test');    
    }
    console.log('test');
    app.use('/api/os', router);
};