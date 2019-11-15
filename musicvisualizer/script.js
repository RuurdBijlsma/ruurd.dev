// document.addEventListener('DOMContentLoaded', init, false);

async function init(e) {
	let file = e.target.files[0];
	let url = URL.createObjectURL(file);
	let audio = document.querySelector('.audio-player');
	audio.src = url;
	audio.oncanplay = () => {
		let canvas = document.querySelector('.canvas');
		canvas.style.width = window.innerWidth + 'px';

		fun = new Fun(canvas, audio);
		fun.draw();
	}
}
