function greeting(greetingHandler, name){
  greetingHandler(name);
  
}

// const name = 'halim mama'
// const number = 45;
// const numbers = [45, 3, 56]
// const laptop = {price: 45000, brand: 'lenovo', ram: '8gb'}


function greetingHandler(name){
  console.log('good morning', name);
  
}

function greetEvening(name){
  console.log('Good Evening ', name);
  
}

greeting(greetingHandler, 'Tom Hanks')

greeting(greetEvening, 'Tom Cruise')
