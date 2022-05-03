//getElementById()

/* const element = document.getElementById('elemento')

console.log(element); */

/* const element = document.getElementsByClassName('elemento')

console.log(element); */

/* const element = document.getElementsByTagName('meta')

console.log(element); */

/* const element = document.querySelector('h1')

element.innerHTML = 'Mudando texto <small>adicionando small</small>' */

/* const element = document.querySelector('input')


element.value = "Texto base";

console.log(element); */

/* function print() {
  console.log('print');
} */

/* const input = document.querySelector('input')

input.onkeydown = function() {
  console.log('Estou dentro do evento');
} */

/* const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', print)

function print() {
  console.log('print');
} */

const input = document.querySelector('input')

input.onkeydown = function(event) {
  console.log(event);
}