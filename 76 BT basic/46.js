function bai46(n){
    let themang;
	let sochuso;

	while(n < 0);
	sochuso = 0;
	themang = n;

	if(n == 0)
			sochuso = 1;
	while(themang != 0)
	{
		if(themang % 2 == 1)
		{
		sochuso = sochuso + 1;
		}
        themang = themang / 10;
    }
    return sochuso;
}
console.log(bai46(1235))