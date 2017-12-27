function bai33_0(n) {
    let i;
    let S;
    if (n < 1) {
        console.log("n phai >= 1");
    }
    
    while (n < 1); // ??

    // for loop can start from 1 not 2
    S = Math.sqrt(2);
    for (i = 2; i <= n; i++) {
        S = Math.sqrt(2 + S);
    }
    return S;
}

function bai33_1(n) {
    if (n < 1) {
        return 0;
    }

    var i;
    var sum = 0;

    for (i = 1; i <= n; i++) {
        sum = Math.sqrt(2 + sum) 
    }

    return sum;
}

console.log(bai33_0(4))
console.log(bai33_1(4))
