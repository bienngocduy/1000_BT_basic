function bai19(x, n) {
    let i = 1;
    let T = 1;
    let S = 0;
    let M = 0;
    let N = 1;
    if (n < 1) { console.log("n phai >= 1") }
    while (n < 1);

    S = 1;
	N = 1;
	i = 1;

    while (i <= n) {
        T = Math.pow(x, (2 * i + 1));
		M = i * 2 + 1;
		N = N * M * (M - 1);
		S = S + x + T/N;
		i++;
    }

    return S;
}
console.log(bai19(2, 2))