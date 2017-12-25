function bai44(n){
    while(n < 0 );
	let S = 0;
	let themang = n;

	while(themang != 0)
	{
		S = S + themang % 10;
		themang = themang / 10;
}
return S;
}
console.log(bai44(45))