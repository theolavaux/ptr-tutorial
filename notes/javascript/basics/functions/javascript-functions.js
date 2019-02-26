/**
 * Rest parameters
 */

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ) // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert(titles[0]) // Consul
  alert(titles[1]) // Imperator
  alert(titles.length) // 2
}

showName("Julius", "Caesar", "Consul", "Imperator")

// ! Rest parameters must be at the end

/**
 * Spread operator
 */

let arr = [3, 5, 1]

alert(Math.max(...arr))

// * Merge arrays

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

