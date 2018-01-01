//so ganh

function SoGanh(){
    let SoDao = 0;
    let x = 0;
	let themang = x;
	while (themang != 0)
	{
		SoDao = SoDao * 10 + themang % 10;
		themang /= 10;
	}
	if(x == SoDao)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
a = []
function bai164(a){
    for (let i = 0; i <= a.length; i++)
	{
		if (SoGanh(a[i]) == 1)
		{
			return a[i];
		}
	}
	return -1;
}
console.log(bai164([4,5,6,5,7]))