function tinh(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i * i;
    }
    return result;
}
console.log(tinh(3));