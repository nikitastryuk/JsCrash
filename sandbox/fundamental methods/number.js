//isInteger
console.log(Number.isInteger(1)); // true

//isFinite (is end value num)
console.log(Number.isFinite(31)); //true

//isNaN
console.log(Number.isNaN(NaN)); // true

//parseFloat, parseInt
console.log(parseFloat('1.61803398875')); // 1.61803398875
console.log(parseInt('1.61803398875')); //1

//toFixed () (remainder length)
console.log(123.4242.toFixed(2)); // 123.42

//toPrecision (total length)
console.log(123.4242.toPrecision(3));   // 123.4

console.log(123.4242.toString());   // '123.4242'

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.EPSILON);