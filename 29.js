//tim uoc so le lon nhat
function bai29 (n){
    let max=0;
for(i=1; i<=n; i++){
    if((n % i == 0) && (i % 2 != 0))
		{
			if(i >  max)
			{
			max = i;
			}
		}
			i++;
}
return max;
}

console.log(bai29(100));