// Trong tuần có 7 ngày:
// 	Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
// Yêu cầu:
// 	1>Nếu chọn: Saturday, Sunday 
//  	Kết quả: "weekend"

//  	2>
//  	Nếu chọn: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
//  	Kết quả: "everyday"

//  	3>
//  	Còn lại: 
//  	Kết quả: Trả về tên các sự lựa chọn
//  	Ví dụ: 
//  			Chọn: Monday + Thurday + Sunday
//  			Kết quả: "Monday, Thursday, Sunday"
//-------------------------------------------------------
// weekday = ''
// function day_of_week(weekday) {
//     full_week = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
//     last_week_day = 'Saturday, Sunday'
//     if (weekday === full_week) {
//         console.log('everyday')
//     }
//     else if (weekday === last_week_day) {
//         console.log('weekend')
//     } else {
//         result = weekday.replace(/[+,]/g, ',');
//         console.log(result)
//     }
// }
// day_of_week('')

// func gdayInWeek(str) {
// 	str = formatdata(str);
// 	day_of_week(str)
// }

function day_of_week(weekday) {
    if (weekday == undefined) {
        return '';
    }
    full_day = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    last_week_day = 'Saturday, Sunday'
    if (weekday === full_day) {
        weekday = 'everyday';
    } else if (weekday === last_week_day) {
        weekday = 'weekend';
    } else {
        result = weekday.replace(/[+,]/g, ',');
        weekday = result;
    }

    return weekday;
}
