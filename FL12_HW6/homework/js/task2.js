let a = prompt('Введите сторону а:');
let b = prompt('Введите сторону b:');
let c = prompt('Введите сторону с:');
if(isNaN(a) || a === '' || isNaN(b) || b === '' || isNaN(c) || c === ''){
    alert('input values should be ONLY numbers ');
} else if (Number(a) <= 0 || Number(b) <= 0 || Number(c) <= 0){
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if(a + b > c & a + c > b & b + c > a){
        if(a === b & b === c){
            console.log('Equilateral triangle');
        } else if(a !== b & b !== c){
            console.log('Scalene triangle');
        } else if(a === b || a === c || b === c){
            console.log('Isosceles triangle');
        } 
    } else {
        alert('Triangle doesn’t exist');
        console.log('Triangle doesn’t exist');
    }
}
