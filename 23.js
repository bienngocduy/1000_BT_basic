function bai23(n){
    let dem = 0
    for(let i = 1; i<=n; i++){
    if(n%i==0){dem++}
    }
    return dem;
    }
   console.log(bai23(3)) 