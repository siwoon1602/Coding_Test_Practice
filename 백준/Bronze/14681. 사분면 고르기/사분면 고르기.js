const fs = require('fs');
const inp = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const x = parseInt(inp[0]);
const y = parseInt(inp[1]);

if (x > 0) {
  if (y > 0) {
    console.log("1");
  } else {
    console.log("4");
  }
} else {
  if (y > 0) {
    console.log("2");
  } else {
    console.log("3");
  }
}

