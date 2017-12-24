function bai16 (x,n){
    let i =1;
    let T = 1;
    let S= 0; 
    let M = 0;
      while(i <= n)
      {
        T = T * x;
		M = M + i;
		S = S + T/M;
		i++;
      }
      return S;
  }
  console.log(bai16(2,3))