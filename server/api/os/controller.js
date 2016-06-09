var os = require('os');

exports.cpus = function(req,res){
    console.log(req.url);
    res.send(os.cpus());
};