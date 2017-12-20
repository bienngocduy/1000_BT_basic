
function bai64(a,b){
    if (a!= 0){
       x = -b/a;   
    }
    else 
    {
        x=0;
        if(b==0){console.log('pt vo so nghiem')}
else{console.log('pt vo nghiem')}
    }
   return x;
}
console.log(bai64(1,2))
