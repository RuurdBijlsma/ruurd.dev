class Board{
	constructor(squares = 8, speed = 100, fullCircuit = false){
		this.size=squares;
		this.animationSpeed=speed;
		this.lastVisited=-1;
		this.board=[];
		this.interval=-1;

		this.fullCircuit = fullCircuit;

		this.startPos = [];
		this.surroundingStart = [];

		this.canvas=document.createElement("canvas");
		document.body.appendChild(this.canvas);
		this.ctx=this.canvas.getContext('2d');
		this.c=$(this.canvas);
		this.c.css('position','absolute');
		this.c.css('top','0px');


		this.drawBoard();

		let that=this;
		$(window).resize(function(){
			that.drawBoard();
		});

		this.c.click(function(e){
			that.clearBoard();
			that.drawBoard();

			let x=e.pageX - that.c.offset().left,
			y=e.pageY - that.c.offset().top;

			x/=that.gridSize;
			y/=that.gridSize;

			x=Math.floor(x);
			y=Math.floor(y);

			if(that.fullCircuit){
				that.surroundingStart=that.getPossibleMoves(x,y);
				that.startPos=[x,y];
				that.circuit(x,y);
			}else{
				that.moveKnight(x,y);
			}

			if(that.animationSpeed>0){
				that.animateDrawLines();
			}else{
				that.drawLines();
			}
		});

		this.clearBoard();
	}

	clearBoard(){
		this.lastVisited=-1;
		for (let x = 0; x < this.size; x++){
			this.board[x]=[];
			for (let y = 0; y < this.size; y++)
				this.board[x].push(-1);
		}
	}

	drawBoard(){
		this.c.attr('height',$(window).height());
		this.c.attr('width',$(window).height());

		this.c.css('height',$(window).height()+'px');
		this.c.css('width',$(window).height()+'px');

		this.cSize = $(window).height()-1;

		this.gridSize = this.cSize / this.size;

		this.c.css('right', '0');


		this.ctx.clearRect(0, 0, this.cSize, this.cSize);

		for (let x= 0; x <= this.size; x++) {
			this.ctx.fillRect(x*this.gridSize, 0, 1, this.cSize);
			this.ctx.fillRect(0, x*this.gridSize, this.cSize, 1);
		}

		this.ctx.lineWidth=Math.ceil(this.gridSize*.1);
		this.ctx.lineCap='round';
		this.ctx.fillStyle='blue';
		this.ctx.stroke();
	}

	drawLines(){

		let startPos = this.findMove(0);
		let endPos = this.findMove(this.size * this.size - 1);
		this.ctx.moveTo(startPos[0]*this.gridSize + this.gridSize/2, startPos[1]*this.gridSize + this.gridSize/2);
		this.ctx.fillStyle='blue';

		for (let i = 0; i < this.size*this.size; i++){
			let movePos = this.findMove(i);
			this.ctx.lineTo(movePos[0]*this.gridSize + this.gridSize/2, movePos[1]*this.gridSize + this.gridSize/2);
		}

		this.ctx.globalAlpha=0.3;
		this.ctx.fillRect(0,0,this.cSize,this.cSize);
 		this.ctx.fillStyle='red';
		this.ctx.fillRect(startPos[0]*this.gridSize, startPos[1]*this.gridSize, this.gridSize, this.gridSize);
		this.ctx.fillRect(endPos[0]*this.gridSize, endPos[1]*this.gridSize, this.gridSize, this.gridSize);	

		this.ctx.globalAlpha=1;
		this.ctx.stroke();

	}

	animateDrawLines(){
		$('#stopAnimation').css('display','block');
		this.ctx.globalAlpha=.3;

		let startPos = this.findMove(0);
		let endPos = this.findMove(this.size * this.size - 1);
 		this.ctx.fillStyle='red';
		this.ctx.fillRect(startPos[0]*this.gridSize, startPos[1]*this.gridSize, this.gridSize, this.gridSize);
		this.ctx.fillRect(endPos[0]*this.gridSize, endPos[1]*this.gridSize, this.gridSize, this.gridSize);	
		this.ctx.fillStyle='blue';
		this.ctx.moveTo(startPos[0]*this.gridSize + this.gridSize/2, startPos[1]*this.gridSize + this.gridSize/2);
		this.ctx.fillRect(startPos[0]*this.gridSize, startPos[1]*this.gridSize, this.gridSize, this.gridSize);

		let i = 1;
		let that = this;
		this.interval = self.setInterval(function(){

			let movePos = that.findMove(i);
			that.ctx.lineTo(movePos[0]*that.gridSize + that.gridSize/2, movePos[1]*that.gridSize + that.gridSize/2);
			that.ctx.fillRect(movePos[0]*that.gridSize, movePos[1]*that.gridSize, that.gridSize, that.gridSize);
			that.ctx.stroke();

			i++;
			if(i >= that.size * that.size){

				clearInterval(that.interval);
				$('#stopAnimation').css('display','none');
			}
		}, that.animationSpeed);

	}
	stopAnimation(){
		$('#stopAnimation').css('display','none');
		if(this.interval!=-1)
			clearInterval(this.interval);
	}

	findMove(num){
		for (let x = 0; x < this.size; x++)
			for (let y = 0; y < this.size; y++)
				if(this.board[x][y]==num)
					return [x,y];
	}

	isValidSquare(x, y){
		return x >= 0 && x < this.size && y >= 0 && y < this.size && this.board[x][y] == -1;
	}

	moveKnight(x, y){
		this.markVisited(x,y);

		if(this.lastVisited >= this.size*this.size -1)
			return true;

		let possibleMoves = this.getPossibleMoves(x,y);

		for(let i=0; i<possibleMoves.length; i++)
			possibleMoves[i][2] = this.getPossibleMoves(possibleMoves[i][0], possibleMoves[i][1]).length;

		possibleMoves.sort(function(a,b){
			if(a[2]<b[2])
				return -1;

			if(a[2]>b[2])
				return 1;

			return 0;
		});

		for(let i=0; i<possibleMoves.length; i++){
			if(this.moveKnight(possibleMoves[i][0], possibleMoves[i][1]))
				return true;

			this.markUnvisited(possibleMoves[i][0], possibleMoves[i][1]);
		}

		return false;

	}

	circuit(x, y){
		this.markVisited(x,y);

		//todo moves die verbinden aan startpos lagere prioriteit geven in looop

		if(this.lastVisited >= this.size*this.size -1)
			return this.isFullCircuit(x, y);

		let possibleMoves = this.getPossibleMoves(x,y);

		for(let i=0; i<possibleMoves.length; i++)
			possibleMoves[i][2] = this.getLikelyMoves(possibleMoves[i][0], possibleMoves[i][1]);
		// for(let i=0; i<possibleMoves.length; i++)
		// 	possibleMoves[i][2] = this.getPossibleMoves(possibleMoves[i][0], possibleMoves[i][1]).length;

		possibleMoves.sort(function(a,b){
			if(a[2]<b[2])
				return -1;

			if(a[2]>b[2])
				return 1;

			return 0;
		});

		for(let i=0; i<possibleMoves.length; i++){
			if(this.circuit(possibleMoves[i][0], possibleMoves[i][1]))
				return true;

			this.markUnvisited(possibleMoves[i][0], possibleMoves[i][1]);
		}

		return false;

	}


	getPossibleMoves(x,y){
		let moves = [];

		let nX, nY;

		nX = x + 2;
		nY = y + 1;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x - 2;
		nY = y + 1;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x + 2;
		nY = y - 1;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x - 2;
		nY = y - 1;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x + 1;
		nY = y + 2;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x - 1;
		nY = y + 2;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x + 1;
		nY = y - 2;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		nX = x - 1;
		nY = y - 2;

		if (this.isValidSquare(nX, nY))
			moves.push([nX, nY, 0]);

		return moves;
	}

	getLikelyMoves(x,y){
		let moves = 0;

		let nX, nY;

		nX = x + 2;
		nY = y + 1;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x - 2;
		nY = y + 1;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x + 2;
		nY = y - 1;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x - 2;
		nY = y - 1;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x + 1;
		nY = y + 2;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x - 1;
		nY = y + 2;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x + 1;
		nY = y - 2;

		if (this.isValidSquare(nX, nY))
			moves++;

		nX = x - 1;
		nY = y - 2;

		if (this.isValidSquare(nX, nY))
			moves++;

		for (var i = 0; i < this.surroundingStart.length; i++)
			if(this.surroundingStart[i][0]==x && this.surroundingStart[i][1]==y)
				moves+=10;

		return moves;
	}

	markVisited(x,y){
		this.board[x][y]=++this.lastVisited;
	}

	markUnvisited(x,y){
		this.lastVisited--;
		this.board[x][y]=-1;
	}

	dispose(){
		this.c.remove();
		delete this;
	}
	sleep(ms) 
	{
		let e = new Date().getTime() + ms;
		while (new Date().getTime() <= e) {}
	}

	isFullCircuit(x,y){
		//x en y zijn eind positions, moet connectie hebben met start pos
		let moves = [];

		let nX, nY;

		nX = x + 2;
		nY = y + 1;

		if (this.isStartPos(nX, nY))
			return true

		nX = x - 2;
		nY = y + 1;

		if (this.isStartPos(nX, nY))
			return true

		nX = x + 2;
		nY = y - 1;

		if (this.isStartPos(nX, nY))
			return true

		nX = x - 2;
		nY = y - 1;

		if (this.isStartPos(nX, nY))
			return true

		nX = x + 1;
		nY = y + 2;

		if (this.isStartPos(nX, nY))
			return true

		nX = x - 1;
		nY = y + 2;

		if (this.isStartPos(nX, nY))
			return true

		nX = x + 1;
		nY = y - 2;

		if (this.isStartPos(nX, nY))
			return true

		nX = x - 1;
		nY = y - 2;

		if (this.isStartPos(nX, nY))
			return true

		return false;


	}
	isStartPos(x, y){
		return x >= 0 && x < this.size && y >= 0 && y < this.size && x==this.startPos[0] && y==this.startPos[1];
	}

}