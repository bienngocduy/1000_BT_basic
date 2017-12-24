function bai15 (n){
    let i =1;
    let T = 0;
    let S= 0; 
      while(i <= n)
      {
        T = T + i;
		S = S + (1 / T);
		i++;
      }
      return S;
  }
  console.log(bai15(4))