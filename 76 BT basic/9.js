function tinh(n){
    let result = 1;
    //if(n===0) return result=0;
    for (let i=1;i<=n;i++){
    result = result*i;
    }
    return result;
    }
  console.log(tinh(5));
