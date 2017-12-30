//liet ke vi tri cac gia tri am trong mang

let a = [];
function bai133(a) {
    negative_value_position = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < 0) {
            negative_value_position = i
            console.log(negative_value_position)
        }
    }
    return negative_value_position;
}
bai133([5, 4, -7, -4, 100])