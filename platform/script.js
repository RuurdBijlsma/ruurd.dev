$(document).ready(function(){

	c=$('canvas');
	cWidth=900;
	cHeight=600;
	updateSize();
	canvas=c[0];
	ctx=canvas.getContext('2d');

	charHeight=20;
	charWidth=10;

	collisions=[];

	ded=-1;
	respawn();

	fps=30;
	drawing=self.setInterval(draw, 1000/fps);

	$(document).keydown(function(e){
		if (e.which==38)
			upDown=true;
		if (e.which==40)
			downDown=true;
		if (e.which==37)
			leftDown=true;
		if (e.which==39)
			rightDown=true;
	});
	$(document).keyup(function(e){
		if (e.which==38)
			upDown=false;
		if (e.which==40)
			downDown=false;
		if (e.which==37)
			leftDown=false;
		if (e.which==39)
			rightDown=false;
	});

	collisions.push([640, cHeight-50, 100, 120]);
	collisions.push([200, cHeight-50, 100, 120]);
	collisions.push([400, cHeight-100, 100, 50]);

	mdown=false;
	c.mousedown(function(e){
		if(e.which==1){
			startx=e.pageX-c.offset().left;
			starty=e.pageY-c.offset().top;
			mousex=e.pageX-c.offset().left;
			mousey=e.pageY-c.offset().top;
			mdown=true;
		}else if(e.which==3){
			var ix=e.pageX-c.offset().left;
			var ij=e.pageY-c.offset().top;
			for (var i = collisions.length - 1; i >= 0; i--) {
				if(checkCollision([ix, ij, 1, 1], [collisions[i][0], collisions[i][1], collisions[i][2], collisions[i][3]])){
					collisions.splice(i,1);
				}
			};
		}
	});
	c.mouseup(function(e){
		if(e.which==1){
			mdown=false;
			if(typeof startx!='undefined'){
				if(!checkCollision([x, y, charWidth, charHeight], [startx, starty, mousex-startx, mousey-starty])){
					collisions.push([startx, starty, mousex-startx, mousey-starty]);
				}
			}
		}
	});
	c.mousemove(function(e){
		if(e.which==1){
			mousex=e.pageX-c.offset().left;
			mousey=e.pageY-c.offset().top;
		}
	});

});
function updateSize () {
	c.attr('width', cWidth);
	c.attr('height', cHeight);
	c.css('left','calc(50% - '+cWidth/2+'px)');
	c.css('top','calc(50% - '+cHeight/2+'px)');
}
function respawn () {
	ded++;
	x=cWidth/2;
	y=cHeight-charHeight-200;

	speed=[0, 0];
	upDown=false;
	downDown=false;
	leftDown=false;
	rightDown=false;
	touchingGround=true;
	gravity=0.5;
	acceleration=.5;
	maxSpeed=10;
	jump=10;
	touchDown=false;
	debug=false;
}
function checkCollision (obj1, obj2) {//toekomstige x van player aangeven
	var x1=obj1[0];
	var y1=obj1[1];
	var w1=obj1[2];
	var h1=obj1[3];

	var x2=obj2[0];
	var y2=obj2[1];
	var w2=obj2[2];
	var h2=obj2[3];

	var collide=false;
	var collidex=false;
	var collidey=false;

	if(x1<x2+w2&&x1+w1>x2){
		collidex=true;
	}

	if(debug){
		drawLinex(y1);
		drawLinex(y1+h1);
		drawLinex(y2);
		drawLiney(x1);
		drawLiney(x2);
		drawLiney(x2+w2);
		drawLiney(x1);
		drawLiney(x1+w1);
	}

	if(y1+h1>y2&&y1<y2+h2){
		collidey=true;
	}
	if(collidey&&collidex)
		collide=true;

	return collide
}
function drawLinex (y) {
	ctx.fillStyle='red';
	ctx.fillRect(0, y, cWidth, 1);
}
function drawLiney (x) {
	ctx.fillStyle='red';
	ctx.fillRect(x, 0, 1, cHeight);
}
function draw () {
	ctx.fillStyle='skyblue';
	ctx.fillRect(0, 0, cWidth, cHeight);

	if(mdown){

		if(checkCollision([x, y, charWidth, charHeight], [startx, starty, mousex-startx, mousey-starty])){
			ctx.fillStyle='rgba(200,0,0,0.5)';
		}else{
			ctx.fillStyle='rgba(0,0,0,0.5)';
		}
		ctx.fillRect(startx, starty, mousex-startx, mousey-starty);
	}

	for (var i = collisions.length - 1; i >= 0; i--) {
		ctx.fillStyle='black';
		ctx.fillRect(collisions[i][0], collisions[i][1], collisions[i][2], collisions[i][3]);
	};

	if(!touchingGround){
		if(y>=cHeight-charHeight){
			respawn();
		}else{
			speed[1]-=gravity;
		}
	}
	if(upDown&&touchingGround){
		speed[1]+=jump;
		touchingGround=false;
	}
	if(rightDown)
		speed[0]+=acceleration;
	if(leftDown)
		speed[0]-=acceleration;

	if(rightDown&&speed[0]>=maxSpeed){//als je naar rechts wil maar al op max speed zit
		speed[0]=maxSpeed;
	}
	if(leftDown&&speed[0]<=-1*maxSpeed){//als je naar links wil maar al op max speed zit
		speed[0]=-1*maxSpeed;
	}

	if(x+charWidth/2>cWidth){
		x=0;
	}
	if(x+charWidth/2<0){
		x=cWidth-charWidth;
	}

	botsy=[];
	botsx=[];
	for (var i = collisions.length - 1; i >= 0; i--) {
		if(speed[0]!=0){
			botsx.push(checkCollision([x+speed[0], y, charWidth, charHeight], [collisions[i][0], collisions[i][1], collisions[i][2], collisions[i][3]]));
		}
		if(speed[1]!=0||touchDown){
			botsy.push(checkCollision([x, y-speed[1], charWidth, charHeight], [collisions[i][0], collisions[i][1], collisions[i][2], collisions[i][3]]));
		}
	};

	if(botsx.indexOf(true)!=-1){
		speed[0]=0;
	}

	touchDown=false;
	if(botsy.indexOf(true)!=-1){
		if(speed[1]<0){
			touchDown=true;
			touchingGround=true;
		}
		speed[1]=0;
	}

	if(touchDown){
		for (var i = 0; i < collisions.length; i++) {
			for(var a=0; a<20; a++){
				if(checkCollision([x, y+a, charWidth, charHeight], [collisions[i][0], collisions[i][1], collisions[i][2], collisions[i][3]])) {
					y+=a-1;
					break;
				}
			}
		}
	}

	if(touchingGround){
		gt=[];
		for (var i = collisions.length - 1; i >= 0; i--) {
			gt.push(checkCollision([x, y+4, charWidth, charHeight], [collisions[i][0], collisions[i][1], collisions[i][2], collisions[i][3]]));
		}
		if(gt.indexOf(true)==-1){
			touchingGround=false;
		}
	}

	if(speed[0]>0&&touchingGround){//als je naar links gaat maar niks indrukt vertraag je 
		if(speed[0]<0.3){
			speed[0]=0;
		}else{
			speed[0]-=.3;
		}
	}
	if(speed[0]<0&&touchingGround){//als je naar rechts gaat maar niks indrukt vertraag je 
		if(speed[0]>-0.3){
			speed[0]=0;
		}else{
			speed[0]+=.3;
		}
	}

	x+=speed[0];
	y-=speed[1];

	ctx.fillStyle='#FF6600';
	ctx.fillRect(x, y, charWidth, charHeight);
}