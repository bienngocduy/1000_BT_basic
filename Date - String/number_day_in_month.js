//viết hàm lấy số lượng ngày trong tháng

let getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));