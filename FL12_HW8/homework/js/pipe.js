// eslint-disable-next-line no-unused-vars
function pipe(number) { 
    let result = number;
    for (let i = 1; i < arguments.length; i++) {
        let func = arguments[i];
        result = func(result);
    }
    return result; 
}