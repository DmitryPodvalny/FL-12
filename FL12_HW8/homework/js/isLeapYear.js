// eslint-disable-next-line no-unused-vars
function isleapYear(year) {
    // eslint-disable-next-line no-unused-vars
    let currentYear;
    if (typeof year === 'string') {
        let a = Date.parse(year);
        if (isNaN(a)) {
            console.log('Invalid Date')
            return
        } else {
            currentYear = a;
        }
    }
    currentYear = year;
    let isYear = new Date(year);
    console.log(isYear)
    if (!isYear) {
        console.log('Invalid Date');
        return
    } else {
        let fullYear = isYear.getFullYear();
        let leep = new Date(fullYear, 1, 29);
        if (leep) {
            console.log(`${fullYear} is a leap year`)
        } else {
            console.log(`${fullYear} is not a leap year`)
        }
    }
}