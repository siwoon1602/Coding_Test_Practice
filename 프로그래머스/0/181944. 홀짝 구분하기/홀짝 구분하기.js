const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    if(input % 2 === 0){
        console.log(Number(input) + " is even")
    } else{
        console.log(Number(input) + " is odd")
    }
});