// let person = {
//     age: 2
// }

// let handler = {
//     get: function(target, name) {
//         return name in target ? target[name] : 'No existant'
//     },
//     set: function(target, property, value) {
//         if(value.length >=2) {
//             Reflect.set(target, property, value);
//         }
//     }
// };
// var proxy = new Proxy(person, handler);
// proxy.age = 's';
// // console.log(proxy.name);
// // console.log(proxy.age);


// var proxy = new Proxy({}, handler);
// Reflect.setPrototypeOf(person, proxy);
// console.log(person.test);

// function log(message) {
//     console.log('Log entry created, message: ' + message);
// }
// let funcHandler = {
//     apply: function(target, thisArgs, argumentsList) {
//         if(argumentsList.length == 1) {
//             return Reflect.apply(target, thisArgs, argumentsList);
//         }
//     }
// }

// let funcProxy = new Proxy(log, funcHandler);
// funcProxy('Hello');
// funcProxy('Hello', 10);

//Revoke 
let person = {
    name: 'Max'
  }
  let handler2 = {
      get: function(target, property) {
          return Reflect.get(target, property);
      }
  };
  let {proxy, revoke} = Proxy.revocable(person, handler2);
  revoke();
  console.log(proxy.name);