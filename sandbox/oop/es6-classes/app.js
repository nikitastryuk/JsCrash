class Person {
  //Constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Person.count++;
  }

  //Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //Setter
  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

  //Static method
  static showCount() {
    return this.count;
  }

  //Proto method
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

//Static field init
Person.count = 0;

const person1 = new Person('Vasya', 'Doe');

console.log(person1.greeting());
console.log(Person.showCount());

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  //Change parent method
  greeting() {
    console.log("Changed method");
    return super.greeting();
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());
console.log(Customer.count);