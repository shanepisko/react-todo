// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

var person = ['andrew', 25];
var personTwo = ['Jen', 23];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Shane', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
