// dem gia tri duong, chia het cho 7
 a = [];
 function bai217(a){
     let count = 0
     for(let i = 0; i<=a.length; i++){
         if(a[i]>0 && a[i]%7 ==0){
             count++;
         }
     }
     return count;
 }
 console.log(bai217([7,-7, 14]))