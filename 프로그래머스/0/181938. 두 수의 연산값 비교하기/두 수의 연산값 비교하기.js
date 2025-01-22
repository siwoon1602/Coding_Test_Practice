function solution(a, b) {
    let case1 = Number(a.toString()+b.toString());
    let case2 = 2*a*b;
    
    if(case1 === case2){
        answer = case1
    } else{
        answer = Math.max(case1,case2)
    }
    return answer;
}