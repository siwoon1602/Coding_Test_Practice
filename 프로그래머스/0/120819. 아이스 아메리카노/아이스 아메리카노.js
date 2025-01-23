function solution(money) {
    let ea = Math.floor(money / 5500);
    let price = (money - 5500 * ea )
    let reuslt = [ea , price];
    
    return reuslt;
}