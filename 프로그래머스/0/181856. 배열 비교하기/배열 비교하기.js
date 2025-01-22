function solution(arr1, arr2) {
    let case1 = arr1.length;
    let case2 = arr2.length;
    let case4 = arr1.reduce((a, c) => a + c, 0);
    let case5 = arr2.reduce((a, c) => a + c, 0);


    if (case1 !== case2) {
        return case1 > case2 ? 1 : -1;
    }

    if (case4 === case5) {
        return 0;
    }

    return case4 > case5 ? 1 : -1;
}