function bai34(n) {
    let i;
    let S;
    if (n < 1) {
        console.log("n phai >= 1");
    }
    while (n < 1);
    i = 1;
    S = 0;
    while (i <= n) {
        S = Math.sqrt(i + S);
        i++;
    }
    return S;
}
console.log(bai34(2))
