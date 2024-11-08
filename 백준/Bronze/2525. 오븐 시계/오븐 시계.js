const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const [시, 분] = input[0].split(" ").map(Number);

const 소요시간 = parseInt(input[1]);

let 전부걸린시간 = 시 * 60 + 분 + 소요시간;

let 끝난시 = Math.floor(전부걸린시간 / 60) % 24;
let 끝난분 = 전부걸린시간 % 60;

console.log(끝난시 + " " + 끝난분);
