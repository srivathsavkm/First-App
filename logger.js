var url = "http://logger.io/log";

function log(messsage) {
    console.log(messsage);
}

function add(a, b){
    console.log(a+b);
}

module.exports.log = log;
module.exports.addNos = add;