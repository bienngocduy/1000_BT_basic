//liet ke cac gia tri chan trong mang

let a = [];
function bai132(a) {
    let value = 1
    for (let i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 0) { console.log(value = a[i]) }
    }
    return value;
}
bai132([5, -4, -7, 4, 100])
