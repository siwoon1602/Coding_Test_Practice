const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
}).on('close',function(){
    str = input
    for(let i of input){
        console.log(i)
    }
});