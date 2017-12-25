function bai37(n) {
    let i;
    let S;
    if (n < 2) {
        console.log("n phai >= 2");
    }
    while (n < 2);
    i = 3;
    S = Math.pow(2, 1 / 2);
    while (i <= n) {
        S = Math.pow((i + S) * 1, 1 / i);
        i++;

    }
    return S;
}
console.log(bai37(3))
