// eslint-disable-next-line no-unused-vars
function countNumber(string) {
    let newObj = {};
    for (let i = 0; i < string.length; i++) {
        if (+string[i] || string[i] === '0') {
            if (newObj[string[i]]) {
                newObj[string[i]] += 1
            } else {
                newObj[string[i]] = 1
            }
        }
    }
    return newObj;
}