function solution(sides) {
 let num = sides.sort((a, b) => a - b); 
 let maxNum = num[2] 
 let sum = num[0] + num[1] 
  
 return maxNum < sum ? 1 : 2; 
}