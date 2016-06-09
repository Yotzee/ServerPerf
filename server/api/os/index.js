var controller = require('./controller');
var router = require('express')();
var app = global.app;

module.exports = function(){
    //get cpus from os
    router.get('/cpus',controller.cpus);    

    app.use('/api/os', router);
};