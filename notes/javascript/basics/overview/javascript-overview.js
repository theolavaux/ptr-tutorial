/**
 * Variable naming
 */

  const birthday = new Date() // Dynamic allocation
  const BIRTHDAY = 'Wednesday, December 10, 1997' // Hard coded

/**
 * Operators
 */

  // Exponentation

  alert(2 ** 2) // 4  (2 * 2)
  alert(2 ** 3); // 8  (2 * 2 * 2)
  alert(2 ** 4); // 16 (2 * 2 * 2 * 2)

  alert(4 ** (1/2)); // 2 (power of 1/2 is the same as a square root, that's maths)
  alert(8 ** (1/3)); // 2 (power of 1/3 is the same as a cubic root)

  Comma and low precedence

  let a = (1 + 2, 3 + 4)
  alert( a ); // 7 (the result of 3 + 4)

  let a = 1 + 2, 3 + 4
  alert( a ); // (a = 3, 7 => the result is 3)

  // three operations in one line
  for (a = 1, b = 3, c = a * b; a < 10; a++) {
    ...
  }

/**
 * Conditional operators
 */

let age = prompt('How old are you?', 18)
let message = (age < 3) ? 'Hi, baby!' : // Several mark operators
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!'; // Default version

alert(message);

/**
 * The switch statement
 */

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // Grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

let arg = prompt("Enter a value?"); // switch is case sensitive
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}
