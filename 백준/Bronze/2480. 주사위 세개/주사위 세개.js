const input = require("fs").readFileSync("./dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

function dice() {
  if (a == b && b == c) {
    return 10000 + a * 1000;
  } else if (a == b || b == c || a == c) {
    if (a == b) {
      return 1000 + a * 100;
    } else if (b == c) {
      return 1000 + b * 100;
    } else {
      return 1000 + a * 100;
    }
  } else {
    let max = Math.max(a, b, c);
    return max * 100;
  }
}

console.log(dice());