function bai18(x, n) {
    let i = 1;
    let T = 1;
    let S = 0;
    let M = 0;
    let N = 0;
    if (n < 1) { console.log("n phai >= 1") }
    while (n < 1);

    S = 1;
	N = 1;
	i = 1;

    while (i <= n) {
        T = Math.pow(x, (2 * i ));
		M = i * 2;
		N = N * M * (M - 1);
		S = S + T/N;
		i++;
    }

    return S;
}
console.log(bai18(2, 3))