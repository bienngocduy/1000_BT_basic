//sap xep tang cac gia tri trong mang

let a = [];
function bai127(a) {
    let sort_value_increment = 0
    for (let i = 0; i <= a.length; i++) {
        sort_value_increment = a.sort((a, b) => (a - b));
    }
    return sort_value_increment;
}
console.log(bai127([5, -4, -7, 4, 100]))