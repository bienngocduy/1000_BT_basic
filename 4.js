function tinh(n){
    let result = 0;
    for (let i=1;i<=n;i++){
    result += (1/(2*i));
    }
    return result;
    }
  console.log(tinh(4));
