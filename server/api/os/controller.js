var os = require('os');

exports.cpus = function(req,res){
    res.send(os.cpus());
}