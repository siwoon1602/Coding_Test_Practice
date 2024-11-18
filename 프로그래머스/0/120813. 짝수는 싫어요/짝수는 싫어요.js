function solution(n) {
    const arr = []
    for(let i=1;i<=n;i++){
        arr.push(i)
    }
    const answer = arr.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
    return answer;
}