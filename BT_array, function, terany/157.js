// tim doan [a, b] chua tat ca gia tri trong mang
a = []
function bai157(a) {
    max_value = a[0];
    min_value = a[0];
    for (let i = 0; i <= a.length; i++) {
        value = [min_value, max_value]
        max_value = (a[i] > max_value) ? a[i] : max_value;
        min_value = (a[i] < min_value) ? a[i] : min_value;
    }
    console.log(value)
}
bai157([1, 2, 3, 4, 100])