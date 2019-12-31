// eslint-disable-next-line no-unused-vars
function makeNumber (string) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        if (+string[i]) {
            newString += string[i];
        }
    }
    return newString;
}