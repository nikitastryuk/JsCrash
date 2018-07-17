class Person {
    constructor(name) {
        this.name = name;
    }
    greet(prefix) {
        console.log(prefix + " Hello " + this.name)
    }
}
function TopObj() {
    this.age = 27;
}
//class for obj to create, constructor arguments, taken constructor
let person = Reflect.construct(Person, ['Max'], TopObj);
console.log(person);

person = Reflect.construct(Person, ['Max']);
//Reflect.apply(target, thisArgument, argumentsList)
Reflect.apply(person.greet, { name: 'Ana' }, ['...'])
Person.prototype.age = 27;
let proto = {
    age:30,
    greet() {
        console.log('Hello');
    }
}
Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person));
Reflect.apply(person.greet, null, []);
Reflect.set(person, 'name', "Ana");
console.log(Reflect.get(person, 'name'));
console.log(Reflect.has(person, 'name'));
console.log(Reflect.ownKeys(person));

Reflect.defineProperty(person, 'hobbies', {
    value: ["Sports", "Cooking"],
    writable: true,
    configurable: true,
    enumerable: true
});
console.clear();
console.log(person);
Reflect.deleteProperty(person, 'hobbies')
console.log(person.hobbies);
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));
person.test= 's';
console.log(person);