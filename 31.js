function bai31 (n){
    dem = 0;
    for(let i=1; i<=n; i++){
        if(n%i == 0 ){
           dem = dem + 1;
        }
    }
    if(dem > 2){console.log(n + " " + "ko la so nguyen to")}
    else{console.log(n + " " + "la so nguyen to")}
    return;
    }
    bai31(11)