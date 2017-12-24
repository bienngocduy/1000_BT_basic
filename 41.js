function bai41(n) {
    let i = 0;
    let S = 1;
    while (i <= n) {
        S = 1 + 1 / S;
        i++;
    }
    return S;
}
console.log(bai41(3))