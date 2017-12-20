function tinh(n){
    let result = 0;
    for (let i=0;i<=n;i++){
    result = result +  ((2*i + 1)/(2*i+2));
    }
    return result;
    }
  console.log(tinh(1));
