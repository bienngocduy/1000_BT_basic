//tinh S(n) = 1+2+3+ ... + n ++++

function tinh(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result
}
console.log(tinh(5));