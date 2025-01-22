function solution(a, b) {
    let case1 = Number(a.toString() + b.toString());
    let case2 = Number(b.toString() + a.toString());
    let answer = Math.max(case1,case2);
    return answer
}