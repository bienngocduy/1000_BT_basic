function bai13 (x,n){
    let i =1;
    let luythua = 1;
    let S= 0; 
      while(i <= n)
      {
         //luythua = luythua * (2*n);
        luythua = Math.pow(x, (2*i))
          S = S + luythua;
          i++;
      }
      return S;
  }
  console.log(bai13(2,3))