function solution(num_str) {
    
    let answer = num_str.split("").concat().reduce((a, c) => a + Number(c), 0);
    return answer;
}