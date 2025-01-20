function solution(slice, n) {
    let answer;
    if (slice >= n){
        answer = 1;
    } else if (n % slice === 0 ){
        answer = Math.floor(n / slice)
    } else if (!n % slice === 0){
        answer = Math.floor(n / slice + 1)
    }
    return answer;
}


2
3
4
5

    