let a = prompt('Введите число а: ');
let b = prompt('Введите число b: ');
let c = prompt('Введите число c: ');
if (isNaN(a) || a === '' || a === '0' || isNaN(b) || b === '0' || b === '' || isNaN(c) || c === '0' || c === '') {
    console.log('Invalid input data');
} else {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log('Немає коренів рівняння');
    } else if (d === 0) {
        console.log('Рівняння має один корінь');
        let x = -b / (2 * a);
        console.log('x = ' + Math.round(x));
    } else {
        console.log('Рівняння має 2 корені');
        let x1 = -b + Math.sqrt(d) / (2 * a);
        let x2 = -b - Math.sqrt(d) / (2 * a);
        console.log('x1 = ' + Math.round(x1) + ' x2 = ' + Math.round(x2));
    }
}