// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b){
  a = 29;
  const result = a * b;
  return result;
}
console.log(num1);

multiply(num1, num2)
// console.log(result);
console.log(num1);


// pass by reference and value change happens for non-primitive types only
let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
  couple1.name = 'Ononto';
  couple2.partner = 'jkhata';
}
console.log(student1, student2);

makeMovie(student1, student2)
console.log(student1, student2);
