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
weekday = ''
function Week_of_day(weekday) {
    full_day = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    last_week_day = 'Saturday, Sunday'
    if (weekday === full_day) {
        console.log('everyday')
    }
    if (weekday === last_week_day) {
        console.log('weekend')
    } else {
        result = weekday.replace(/[+,]/g, ',');
        console.log(result)
    }
}
Week_of_day('Monday+ Tuesday, Wednesday')
