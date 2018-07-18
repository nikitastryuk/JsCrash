/* function *select() {
    yield 'House';
    yield 'Grage';
}
console.log(select);

let it = select();
console.log(it.next());
console.log(it.next());

 */

/* function * randomFrom(...arr) {
    while (true)
      yield arr[Math.floor(Math.random() * arr.length)];
  }
  
  const getRandom = randomFrom(1, 2, 5, 9, 4);

  console.log(getRandom.next().value); // returns random value
   */

  //Generators and Promises form the foundation for the async/await expression
  //Generators introduce to JS the ability to pause function execution and return to it when(if) we see fit(instead of yielding values the Generator yielded Promise functions)
  
  const fetchAsyncA = async () => await (await fetch('https://api.github.com')).json();
  