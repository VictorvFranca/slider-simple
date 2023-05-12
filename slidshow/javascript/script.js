let fotos = document.querySelector('[slide-imgs]');

const imagens = [
	'../imgs/1.jpg',
	'../imgs/2.jpg',
	'../imgs/3.webp',
	'../imgs/4.jpg',
	'../imgs/5.jpg',
	'../imgs/6.jpg'
	]

let time = 2000;
let cont = 0;

const slider = () =>{
	fotos.src = imagens[cont];

	if(cont < imagens.length - 1){
		cont++;
	}else{
		cont = 0;
	}

	setTimeout(slider, time);
};

window.onload = slider;