/* function *select() {
    yield 'House';
    yield 'Grage';
}
console.log(select);

let it = select();
console.log(it.next());
console.log(it.next());

 */

function * randomFrom(...arr) {
    while (true)
      yield arr[Math.floor(Math.random() * arr.length)];
  }
  
  const getRandom = randomFrom(1, 2, 5, 9, 4);
  
  for(let i=0; i++; i<5) {
  console.log(getRandom.next().value); // returns random value
  }