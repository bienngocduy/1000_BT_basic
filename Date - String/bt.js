weekday = ''
function Week_of_day(weekday) {
    full_day = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    last_week_day = 'Saturday, Sunday'
    if (weekday === full_day) {
        console.log('everyday')
    }
    if (weekday === last_week_day) {
        console.log('weekend')
    }
    else {
        result = weekday.replace(/[+,]/g, ',');
        console.log(result)
    }
}
Week_of_day('Monday+ Tuesday, Wednesday')
