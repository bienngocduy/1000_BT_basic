//viet ham lay tên tháng từ ngày nhập vào

let month_name = function (dt) {
    mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mlist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
