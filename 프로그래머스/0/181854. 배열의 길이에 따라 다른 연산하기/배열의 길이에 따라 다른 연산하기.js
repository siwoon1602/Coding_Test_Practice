function solution(arr, n) {
    const oddNumber = arr.length % 2 === 1;

    return arr.map((value, index) => {
        if (oddNumber && index % 2 === 0) {
            return value + n;
        }
        if (!oddNumber && index % 2 === 1) {
            return value + n;
        }

        return value;
    });
}