function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            if (typeof arguments[i] === 'number') {
                arguments[i] = String(arguments[i]);
            } else if (typeof arguments[i] === 'string') {
                arguments[i] = +arguments[i];
            }
            arr.push(arguments[i]);
        }
    }
    return arr;
}

function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function mapArray(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i] = func(+array[i]);
    }
    return array;
}

function filterArray(array, func) {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            array2.push(array[i]);
        }
    }
    return array2;
}

function flipOver(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    string = newString;
    return string;
}

function makeListFromRange(arr) {
    let array = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        array.push(i);
    }
    console.log(array);
    return array;
}



function getArrayOfKeys(array, key) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][key]) {
            arr.push(array[i][key]);
        }
    }
    return arr;
}

function substitute(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 30) {
            array[i] = '*';
        }
    }
    console.log(array);
    return array
}


function getPastDay(date, days) {
    let pastDay = 86400000 * days;
    let millisec = date.getTime();
    let result = millisec - pastDay;
    let newData = new Date(result);
    let day = newData.getDate();
    return day;
}


function formatDate(date) {
    if (date) {
        let str = '';
        // eslint-disable-next-line max-len
        let newString = str + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
        return newString;
    }
}