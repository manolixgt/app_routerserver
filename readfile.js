fs = require('fs');
var global_data = fs.readFileSync(__dirname + '/read.txt').toString();

console.log(global_data)