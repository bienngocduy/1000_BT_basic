function bai45(n){
    let themang;
	let P = 1;

	while(n < 0);
	P = 1;
	themang = n;

	while(themang != 0)
	{
		P = P * (themang % 10);
		themang = themang / 10;
    }
    return P;
}
console.log(bai45(123))