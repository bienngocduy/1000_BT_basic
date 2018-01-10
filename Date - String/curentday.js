//viet ham lay ngay hien tai

// let currentday = function () {
//     today = new Date();
//     let dd = today.getDate();
//     let mm = today.getMonth() + 1; //As January is 0.
//     let yyyy = today.getFullYear();
//     if (dd < 10) dd = '0' + dd;
//     if (mm < 10) mm = '0' + mm;
//     return (mm + '/' + dd + '/' + yyyy);
// };
// console.log(currentday('/'));

let currentday = function () {
    d = new Date();
    return d.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
};
console.log(currentday());
