function bai42(n) {
    let i = 0;
    let S = 0;

    while (n < 0 && console.log("Error: (n >= 0)"));
    while (S + i < n) {
        i++;
        S = S + i;
    }
    return S;
}
console.log(bai42(4))