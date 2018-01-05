
function Week_of_day(weekday1) {
    weekday1 = ''
    full_day = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    last_week_day = 'Saturday, Sunday'
    if (weekday1 == full_day) {
        console.log('everyday')
    }
    if (weekday1 == last_week_day) {
        console.log('weekend')
    }
    return weekday1
    console.log(weekday1)
}
Week_of_day('Monday, Tuesday, Wednesday')
