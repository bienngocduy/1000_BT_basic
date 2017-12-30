//dem so luong so nguyen to nho hon 100 trong mang 
let a = [];
function check_primitive(n) {
    if (n < 2) {
        return false;
    }
    else if (n > 2) {
        if (n % 2 == 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
function bai125(a) {
    count = 0;
    for (let j = 0; j <= a.length; j++) {
        if (check_primitive(a[j]) == true && a[j] < 100) {
            count++;
        }
    }
    return count;
}
console.log(bai125([3, 9, 5, 4, 7, 4, 100]))