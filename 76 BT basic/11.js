function bai11(n){
let result = 1;
for (let i = 1; i <n; i++){
    result += i*(n-1)*n; 
}
return result;
}
console.log(bai11(3))