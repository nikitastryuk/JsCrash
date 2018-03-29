// console.log(new Object());

var obj = {
    foo: 1,
    bar: function() {
      return 2;
    }
  };


//assign


// console.log(Object.assign({}, obj)); 

//create


//o = {};
// эквивалентно этому:
//o = Object.create(Object.prototype);

//function Constructor() {}
//o = new Constructor();
// эквивалентно этому:
//o = Object.create(Constructor.prototype);

//defineProperty(obj, prop, descriptor), defineProperties()


// var c = {};
// Object.defineProperty(c, 'key', {
//     enumerable: false,
//     configurable: false,
//     writable: false,
//     value: 'keyValue'
//   });
// console.log(c.key);

// Freeze: makes the object immutable, meaning no change to defined property allowed, unless they are objects.
// Seal: prevent addition of properties, however defined properties still can be changed.
//freeze(obj), seal(obj)
// console.log(obj);
// Object.freeze(obj);
// delete obj.foo;
// console.log(obj);


//getOwnPropertyDescriptor(obj, prop)
//console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

//Object.getOwnPropertyNames(obj)
//console.log(Object.getOwnPropertyNames(obj));

//Object.getOwnPropertySymbols() 
//console.log(Object.getOwnPropertySymbols(obj));

//getPrototypeOf(), setPrototypeOf(obj, newProto)
// var proto = {foo: 1};
// var obj = Object.create(proto);
// console.log(Object.getPrototypeOf(obj) === proto);

//is
// console.log(Object.is('foo', 'foo'))     // true
// console.log(Object.is(0, -0))            // false

//preventExtensions
// Object.preventExtensions(obj);
// obj.lala = 12;
// console.log(obj);

//isSealed, isFrozen, isExtensible
// Object.freeze(obj);
// console.log(Object.isExtensible(obj));

//keys(), values()
console.log(Object.keys(obj));
console.log(Object.values(obj));