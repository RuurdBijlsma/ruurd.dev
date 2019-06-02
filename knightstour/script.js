$(document).ready(init);
function init() {
	board = new Board($('[type=number]').eq(0).val(), $('[type=number]').eq(1).val(), $('#fullCircuit').checked);
}
function checkKey(e) {
	if(typeof board != 'undefined')
		board.dispose();
	board = new Board($(e.target).val(), $('[type=number]').eq(1).val(), $('#fullCircuit').checked);
}
function animateBoard(e) {
	if(typeof board != 'undefined')
		board.animationSpeed = $(e.target).val();
}