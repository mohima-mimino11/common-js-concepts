// arguments are array like object
function sum(a, b, c){
  // console.log(typeof arguments);
  // arguments.push(23)
  const args = [...arguments];
  console.log(args);
  
  const result =  a + b + c;
  return result;
}
// console.log(arguments);

const total = sum(45, 67, 12, 45, 98, 55);
// console.log(total);
console.log(sum.length);

