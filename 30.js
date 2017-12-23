function bai30 (n){
S = 0;
for(let i=1; i<n; i++){
    if(n%i == 0 ){
        S += i;
    }
}
if(S == n){console.log(n + " " + "la so hoan thien")}
else{console.log(n + " " + "ko la so hoan thien")}
return S;
}
bai30(5)