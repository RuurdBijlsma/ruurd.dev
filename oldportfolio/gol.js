$(document).ready(function(){
	c=$('#golCanvas');
	canvas=c[0];
	ctx=canvas.getContext('2d');
	tc=$('#trailCanvas');
	trailCanvas=tc[0];
	tctx=trailCanvas.getContext('2d');
	cWidth=1920;
	cHeight=800;

	genning=false;
	grid=false;
	trail=false;

	board=[];
	nextBoard=[];
	gridSize=20;
	updateWindow();


	$(window).on('resize',updateWindow);

	mouseDown=false;
	killing=false;
	c.mousedown(function(e){
		x=Math.floor(e.pageX/gridSize);
		y=Math.floor(e.pageY/gridSize);
		if(board[x][y]==1){
			killing=true;
			killSquare(x,y);
		}else{
			killing=false;
			fillSquare(x, y);
		}
		mouseDown=true;
	});
	c.mousemove(function(e){
		if(mouseDown){
			x=Math.floor(e.pageX/gridSize);
			y=Math.floor(e.pageY/gridSize);
			if(killing){
				killSquare(x, y);
			}else{
				fillSquare(x, y);
			}
		}
	});
	c.mouseup(function(e){
		mouseDown=false;
		x=Math.floor(e.pageX/gridSize);
		y=Math.floor(e.pageY/gridSize);
		if(killing){
			killSquare(x, y);
		}else{
			fillSquare(x, y);
		}
	});

});
function toggleGrid() {
	grid=!grid;
	redrawBoard();
}
function setPreset(){
	val=$('#presetSelector').val();
	console.log(val);
	if(val.indexOf('3')!=-1){
		if(gridSize!=2){
			newBoard(2);
		}
		for (var x = 0; x < bWidth; x++) {
			fillSquare(x, Math.floor(bHeight/2)-2, false);
		}
		for (var x = 0; x < bWidth; x++) {
			fillSquare(x, Math.floor(bHeight/2), false);
		}
		for (var x = 0; x < bWidth; x++) {
			fillSquare(x, Math.floor(bHeight/2)+2, false);
		}
	}else if(val.indexOf('Horizontale lijn')!=-1){
		if(gridSize!=2){
			newBoard(2);
		}
		for (var x = 0; x < bWidth; x++) {
			fillSquare(x, Math.floor(bHeight/2), false);
		}
	}else if(val.indexOf('Verticale')!=-1){
		if(gridSize!=2){
			newBoard(2);
		}
		for (var y = 0; y < bHeight; y++) {
			fillSquare(Math.floor(bWidth/2), y, false);
		}
	}
	redrawBoard();
}
function updateWindow () {
	c.attr('height',$(window).height());
	c.attr('width',$(window).width());
	c.css('top','0px)');
	c.css('left','0px)');
	tc.attr('height',$(window).height());
	tc.attr('width',$(window).width());
	tc.css('top','0px)');
	tc.css('left','0px)');
	$('#wrap').css('top',c.height());

	tctx.fillStyle='#4362D4';

	cWidth=c.width();
	cHeight=c.height();

	newBoard(gridSize);
}

function start(speed) {
	if(typeof speed=="undefined"){
		speed=$('#speedVal').val();
	}
	stop();
	generating=self.setInterval(function(){
		nextGeneration();
		redrawBoard();
	},speed);
	genning=true;
}
function stop(){
	if(genning){
		genning=false;
		clearInterval(generating);
	}
}

function simulate(n) {
	for (var i = 0; i < n; i++) {
		nextGeneration();
	}
	redrawBoard();
}

function fillSquare(x, y, draw) {
	board[x][y]=1;
	if(typeof draw=="undefined" || draw){
		redrawBoard();
	}
}
function killSquare(x, y){
	board[x][y]=0;
	redrawBoard();
}
function checkSquare(x, y){
	neighbours=0;
	if(x>=1 && board[x-1][y]==1){
		neighbours++;
	}
	if(y>=1 && board[x][y-1]==1){
		neighbours++;
	}
	if(x<bWidth-1 && board[x+1][y]==1){
		neighbours++;
	}
	if(y<bHeight-1 && board[x][y+1]==1){
		neighbours++;
	}
	if(x>=1 && y>=1 && board[x-1][y-1]==1){
		neighbours++;
	}
	if(x<bWidth-1 && y>=1 && board[x+1][y-1]==1){
		neighbours++;
	}
	if(x>=1 && y<bHeight-1 && board[x-1][y+1]==1){
		neighbours++;
	}
	if(x<bWidth-1 && y<bHeight-1 && board[x+1][y+1]==1){
		neighbours++;
	}


	if(neighbours==3&&board[x][y]==0){
		return -1;
	}else if(board[x][y]==0){
		return 0;
	}
	return neighbours;
}
function nextGeneration(){
	for (var x = 0; x < board.length; x++) {
		for (var y = 0; y < board[x].length; y++) {
			check=checkSquare(x,y);
			if(check==0||check==1||check>=4){
				nextBoard[x][y]=0;
				//die
			}else{
				nextBoard[x][y]=1;
			}
		}
	}
	moveNextBoard();
}

function moveNextBoard(){
	for (var x = 0; x < board.length; x++) {
		for (var y = 0; y < board[x].length; y++) {
			board[x][y]=nextBoard[x][y];
			nextBoard[x][y]=0;
		}
	}
}

function toggleTrail() {
	trail=!trail;
	tctx.clearRect(0,0,cWidth,cHeight);
}

function newBoard(gs) {
	tctx.clearRect(0,0,cWidth,cHeight);
	if(typeof gs=="undefined"){
		gs=$('#gridVal').val();
	}
	window.gridSize=gs;

	bWidth=Math.floor(cWidth/gridSize);
	bHeight=Math.floor(cHeight/gridSize);

	for (var x = 0; x < bWidth; x++) {
		board.push([]);
		nextBoard.push([]);
		for (var y = 0; y < bHeight; y++) {
			board[x][y]=0;
			nextBoard[x][y]=0;
		}
	}
	redrawBoard();
}
function redrawBoard() {
	ctx.clearRect(0,0,cWidth,cHeight);
	ctx.fillStyle='#ffffff';
	if(grid){
		for (var y = 0; y < bHeight; y++) {
			ctx.fillRect(0, y*gridSize, bWidth*gridSize, 1);
		}
	}
	for (var x = 0; x < bWidth; x++) {
		if(grid){
			ctx.fillRect(x*gridSize, 0, 1, bHeight*gridSize);
		}
		for (var y = 0; y < bHeight; y++) {
			if(board[x][y]==1){
				if(trail){
					tctx.fillRect(x*gridSize, y*gridSize, gridSize, gridSize);
				}
				ctx.fillRect(x*gridSize, y*gridSize, gridSize, gridSize);
			}
		}
	}
}