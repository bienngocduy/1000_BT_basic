function bai24(n){
    let i;
    for(let i = 1; i<=n; i++){
      if ( (n%i==0) & (i%2) != 0) {
          //console.log(i)
      }
    }
    return i;
}
   console.log(bai24(6)) 