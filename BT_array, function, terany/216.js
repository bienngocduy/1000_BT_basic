// dem so luong so chan
a = []
function bai216(a){
let count = 0;
for(let i = 0; i <= a.length; i++){
    if(a[i] % 2==0){
        count ++
    }
}
return count;
}
console.log(bai216([2,4,3]))