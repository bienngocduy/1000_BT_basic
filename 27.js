// dem so luong uoc so chan
function bai27(n){
let dem = 0;
for (i=1; i<=n; i++){
    if ((n%i==0) && i%2==0){
        dem ++;
    }
}
return dem;
}
console.log(bai27(12))