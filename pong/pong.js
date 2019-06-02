window.onload=init;
function init() {
	MAIN=new Main(document.getElementById('pongcanvas'));
	MAIN.startGame();
}