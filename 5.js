function tinh(n){
    let result = 1;
    for (let i=1;i<=n;i++){
    result += (1/(2*i+1));
    }
    return result;
    }
  console.log(tinh(3));
