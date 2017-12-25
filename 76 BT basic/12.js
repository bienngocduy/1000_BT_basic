function bai12 (x,n){
  let i =1;
  let luythua = 1;
  let S= 0; 
    while(i <= n)
	{
		luythua = luythua * x;
		S = S + luythua;
		i++;
    }
    return S;
}
console.log(bai12(2,3))