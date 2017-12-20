function bai22(n){
    let result = 1;
    for(let i = 1; i<=n; i++){
    if(n%i==0){result *= i}
    }
    return result;
    }
   console.log(bai22(3)) 