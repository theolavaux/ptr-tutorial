/**
 * String methods
 */

// * str.slice(start [, end]): returns the part of the string from start to (but not including) end

 let str = "stringify";
alert(str.slice(0, 5)) // 'strin', the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)) // 's', from 0 to 1, but not including 1, so only character at 0

// If there is no second argument, then slice goes till the end of the string

let str = "stringify"
alert(str.slice(2)) // ringify, from the 2nd position till the end

// Negative values for start/end are also possible
// They mean the position is counted from the string end

let str = "stringify"

// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)) // gif
 
/**
 * Array methods to add/remove items
 */

// End of array

// * array.pop: extracts the last element of the array and returns it

// * array.push: append the element to the end of the array

// Beginning of array

// * array.shift: extracts the first element of the array and returns it

// * array.unshift: add the element to the beginning of the array

// Methods push and unshift can add multiple elements at once

let fruits = ["Apple"]

fruits.push("Orange", "Peach")
fruits.unshift("Pineapple", "Lemon")

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert(fruits)

/**
 * Array iteration
 */

 // ! for...of, not for...in

let fruits = ["Apple", "Orange", "Plum"]

// iterates over array elements
for (let fruit of fruits) {
  alert(fruit)
}

/**
 * About length
 */

// Length is writable (i.e. array.length = 0 clears the array)

/**
 * Other array methods to add/remove items
 */

// * array.splice(index[, deleteCount, elem1, ..., elemN]): add, remove, insert elements

// Remove elements

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert(arr); // ["I", "JavaScript"]

// Insert elements

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert(arr); // "I", "study", "complex", "language", "JavaScript"

// Negative indexes works too

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert(arr); // 1,2,3,4,5

// * array.slice(start, end) like str.slice but it makes sub-arrays
// * array.concat(arg1, arg2...)
// * array.forEach(item, index, array)

/**
 * Array methods to search an array
 */

// * array.indexOf(item, from), returns -1 if not found
// * array.lastIndexOf(item, from)
// * array.includes(item, from)

// * array.find(function(item, index, array))

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// * array.findIndex(function(item, index, array)), returns -1 if not found
// * array.filter(function(item, index, array))

/**
 * Array methods to transform an array
 */

 // * array.map(function(item, index, array))

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// * array.sort(fn)

// ! Sorts as strings if no function is provided

arr.sort((a, b) => a - b)

// * array.reverse
// * str.split([separator[, limit]])

let names = 'Bilbo, Gandalf, Nazgul'

let arr = names.split(', ')

for (let name of arr) {
  alert( `A message to ${name}.` ) // A message to Bilbo  (and other names)
}

// Limit as optional argument

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2)

alert(arr); // Bilbo, Gandalf

// Split into letters

let str = "test"

alert( str.split('') ) // t,e,s,t

// * array.join(separator)

let arr = ['Bilbo', 'Gandalf', 'Nazgul']

let str = arr.join(';')

alert(str) // Bilbo;Gandalf;Nazgul

// * array.reduce(function(previousValue, item, index, array) { ... }, initial);
// * index, array and initial are optional

let arr = [1, 2, 3, 4, 5]

// ! If no initial value (i.e. empty array), initial value equals to first array element
let result = arr.reduce((sum, current) => sum + current)

alert(result) // 15

// * array.isArray(value)

/**
 * Map, Set, WeakMap, WeakSet
 */

// * Map

let map = new Map();

map.set('1', 'str1')   // a string key
map.set(1, 'num1')     // a numeric key
map.set(true, 'bool1') // a boolean key
                       // can also take an object

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)) // 'num1'
alert(map.get('1')) // 'str1'

alert(map.size) // 3

// Chaining works with set as it returns the map itself

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1')

// Iteration over map

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
])

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable) // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount) // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry) // cucumber,500 (and so on)
}

// OR

recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

// * Set

// Works almost the same than Map but without duplicate values

// * WeakMap

let john = { name: "John" }

let visitsCountMap = new WeakMap()

visitsCountMap.set(john, 123);

// now john leaves us, we don't need him anymore
john = null;

// there are no references except WeakMap,
// so the object is removed both from the memory and from visitsCountMap automatically

// * WeakSet

// Works almost the same than Map but without duplicate values

/**
 * Iteration for objects
 */

let user = {
  name: "John",
  age: 30
}

Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [["name", "John"], ["age", 30]]

// Ignores Symbols like for...in

/**
 * Array destructuring
 */

// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
let [firstName, surname] = arr

alert(firstName) // Ilya
alert(surname)  // Kantor

// Looks great when combined with split or other array-returning methods

let [firstName, surname] = "Ilya Kantor".split(' ')

// Ignore first elements

// first and second elements are not needed
let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

alert(title) // Consul

// * Works with any iterable

// Any assignable can be on the left side

let user = {}
[user.name, user.surname] = "Ilya Kantor".split(' ')

alert(user.name) // Ilya

// With variable declaration on a different line

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100})

alert(title) // Menu

// Summary

// simplified parameters a bit for clarity
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert(`${title} ${width} ${height}`)
}

// {} is used for destructuring in this case (empty parameters)
showMenu() // Menu 100 200

/**
 * JSON
 */

// * stringify

// Excluding and transforming: replacer
// Formatting: spacer

// * parse

// Reviver can be used to change parsing type (i.e. Date)