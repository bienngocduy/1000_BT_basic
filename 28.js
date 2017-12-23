//tinh tong uoc so nho hon chinh no
function bai28(n){
let tong = 0;
for (i=1; i<n; i++){
if(n%i == 0){
 //   tong = i;
tong = tong + i;
}
}
return tong ;
}
console.log(bai28(7))