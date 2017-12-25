function bai38(n) {
    let i;
    let S;
    if (n < 1) {
        console.log("n phai >= 1");
    }
    while (n < 1);
    i = 1;
    S = Math.pow(1, 1 / 2);
    while (i <= n) {
        S = Math.pow(i + S, 1 / (i + 1));
        i++;
    }
    return S;
}
console.log(bai38(3))
