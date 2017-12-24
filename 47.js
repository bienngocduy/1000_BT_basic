function bai47(n){
    let themang;
    let sochuso;
    let S = 0;

	while(n < 0);
	sochuso = 0;
	themang = n;

	while(themang != 0)
	{
		if(themang % 2 == 0)
		{
		S = S + themang % 10;
		}
		themang = themang / 10;
    }
    return S;
}
console.log(bai47(1235))