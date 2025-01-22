function solution(n) {
  let answer = n.toString().split("").reduce((a,c) =>  a + Number(c) , 0);
  return answer;
}