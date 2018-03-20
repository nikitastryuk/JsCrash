// Person constructor
function Person(firstName, lastName) {
  //Fields
  this.firstName = firstName;
  this.lastName = lastName;

  //Method
  /*  
  this.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  */

  //Static field
  Person.count++;

  //Static method
  Person.showCount = function () {
    return this.count;
  }
}

//Init static field
Person.count = 0;

// Resonable not to build common func but make it proto
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());
console.log(Person.showCount());


// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  //Call Person constructor
  Person.call(this, firstName, lastName);

  //Fields
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1.greeting());

//Make own greeting for customer
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());
