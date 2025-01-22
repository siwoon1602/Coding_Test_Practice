function solution(numbers) {
    let result = numbers.sort(function(a,b){
        return b - a
    })
    let answer = result[0] * result[1]
    return answer;
}