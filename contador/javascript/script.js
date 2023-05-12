const valor = document.querySelector('#value');
const btn_increment = document.querySelector('[btn-increment]');
const btn_decrement = document.querySelector('[btn-decrement]');

btn_increment.addEventListener('click', () =>{
	valor.innerHTML = `${parseInt(value.innerText) + 1}`;
})

btn_decrement.addEventListener('click', () =>{
	valor.innerHTML = `${parseInt(value.innerText) - 1}`;
})