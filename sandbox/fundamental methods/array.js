//from
console.log(Array.from('foo')); // ['f', 'o', 'o']

//isArray
console.log(Array.isArray([1])); // true

//of
console.log(Array.of(1,2,3)); // [1,2,3]

//concat
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

console.log(num1.concat(num2, num3)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//every
console.log([12, 5, 8, 130, 44].every(elem => elem >= 10)); //false

//fill
console.log(Array(3).fill(4)); // [4,4,4]
console.log([1,2,3].fill(4,0,1)); // [4,2,3]

//filter
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
console.log(words.filter(word => word.length > 6));

//foreach
words.forEach(element => {
    console.log(element);
});

//includes
console.log(words.includes('spray')); //true

//indexOf, lastindexOf
console.log(words.indexOf('limit')); //1

//join
console.log(words.join('/'));

//map
console.log([1, 4, 9].map(Math.sqrt)); //[1,2,3]

//reverse
console.log([1,2,3].reverse()); //[3,2,1]

//reduce
console.log([0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
  })); //6


//some
console.log([12, 5, 8, 1, 4].some(elem => elem > 10)); //true

//sort 
console.log([1,5,3,1,6,9,8].sort((a,b)=>a-b));

//splice for modify
console.log([1,2,3,4,5].splice(0,2)); //[1,2] 

//slice for new array
var slice = Function.prototype.call.bind(Array.prototype.slice);
function test() {
    console.log(arguments);
    console.log(slice(arguments, 0, 2));
}
test(1,2, 3,4,5); //1,2


//pop/push/shift/unshift
