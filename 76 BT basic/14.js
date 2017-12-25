function bai14 (x,n){
    let i =1;
    let luythua = 1;
    let S= 0; 
      while(i <= n)
      {
          luythua = Math.pow(x, (2 * i + 1));
          S = S + luythua;
          i++;
      }
      return S;
  }
  console.log(bai14(2,3))