function bai21(n){
    let result = 0
    for(let i = 1; i<=n; i++){
    if(n%i==0){result += i}
    }
    return result;
    }
   console.log(bai21(3)) 