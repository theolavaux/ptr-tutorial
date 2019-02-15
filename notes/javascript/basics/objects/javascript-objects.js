/**
 * Remove a property
 */

const user = {
  age: 21,
  location: 'Bangkok'
}

delete user.age
console.log(user)

/**
 * Take the key from a variable
 */

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

console.log(bag)

/**
 * 'key' in object
 */

let user = { name: 'John', age: 30 };

alert('age' in user); // true, user.age exists
alert('blabla' in user); // false, user.blabla doesn't exist

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

/**
 * Copying by reference
 */

let user = { name: 'John' };
let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

/**
 * Comparison by reference
 */

// Two independant objects are not equal, even though they're both empty

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let c = {};
let d = {}; // two independent objects

alert(c == d); // false

/**
 * Cloning and merging, Object.assign
 */

// Cloning

let user = {
 name: "John",
 age: 30
};

let clone = Object.assign({}, user)

// Cloning with objects

// -> JavaScript library lodash, method called _.cloneDeep(obj)

// Merging

let user = { name: "John" }

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2)

// now user = { name: "John", canView: true, canEdit: true }

/**
 * Symbols
 */

// An object can have different symbols

let user = { name: "John" }
let id = Symbol("id")

user[id] = "ID Value"
alert(user[id]) // we can access the data using the symbol as the key

// Symbols in an object litteral

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not just "id: 123"
};

// ! Symbols are skipped by for...in

/**
 * Global symbols
 */

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true

// Get name from Symbol

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

/**
 * Object to primitive conversion
 */

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
