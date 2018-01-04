let currentday = function (sp) {
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //As January is 0.
    let yyyy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};
console.log(currentday('/'));
console.log(currentday('-'));