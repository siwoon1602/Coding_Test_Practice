function solution(n, numlist) {
    
  let answer = numlist.filter((num)=>num%n===0);
    return answer;
}