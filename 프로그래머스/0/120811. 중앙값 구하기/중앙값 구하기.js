function solution(array) {
    array.sort((a, b) => a - b);
    let arr = Math.floor(array.length / 2)
    let answer = array[arr]
    return answer;
}