togglestart=true;

function start(){
	if(togglestart){
		self.setTimeout(function(){
			if(y){
				n=true;
				y=false;
			}
		},1000)
		moveright();
		aleft();
		powerup=self.setInterval(function(){
			if(g){
				randomblock();
			}
		},Math.random()*1+1000);
		l=true;
		document.getElementById('startknop').innerHTML='Stop';
		togglestart=false;
	}else{
		spacemove();
		stopmove();
		document.getElementById('startknop').innerHTML='Start';
		clearInterval(powerup);
		togglestart=true;
		l=false;
	}
}


l=true;

function first(){
	g=0;

	vierkillid=document.getElementById('vierkill');
	vijfkillid=document.getElementById('vijfkill');
	vierscoreid=document.getElementById('vierscore');
	vijfscoreid=document.getElementById('vijfscore');
	vierdeathid=document.getElementById('vierdeath');
	vijfdeathid=document.getElementById('vijfdeath');

	vierkant=document.getElementById('vier');
	vijfkant=document.getElementById('vijf');
	down=self.setInterval(function(){h=1},50000);
	up=self.setInterval(function(){h=1},50000);
	left=self.setInterval(function(){h=1},50000);
	right=self.setInterval(function(){h=1},50000);
	s=self.setInterval(function(){h=1},50000);
	w=self.setInterval(function(){h=1},50000);
	a=self.setInterval(function(){h=1},50000);
	d=self.setInterval(function(){h=1},50000);

	rect1=$('#vier');
	rect2=$('#vijf');

	winW = 1920;
	winH = 1080;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	self.setTimeout(function(){g=1},400);
	viersnelheid=50;
	vijfsnelheid=50;
	movedown();
	setTimeout(function(){
		moveup();
	},51);
	setTimeout(function(){
		moveleft();
	},102);
	setTimeout(function(){
		moveright();
	},153);
	setTimeout(function(){
		stopmove();
	},204);
	setTimeout(function(){
		vierkant.style.left='0px';
		vierkant.style.top='43px';
	},255);

	sdown();
	setTimeout(function(){
		wup();
	},51);
	setTimeout(function(){
		aleft();
	},102);
	setTimeout(function(){
		dright();
	},153);
	setTimeout(function(){
		spacemove();
	},204);
	setTimeout(function(){
		vijfkant.style.right='0px';
		vijfkant.style.bottom='0px';
		l=false;
	},255);	
}
dpx='0';
upx='0';
rpx='0';
lpx='0';

sdpx='0';
wupx='0';
drpx='0';
alpx='0';


function randomblock () {
	console.log(Math.random());
	banaan=document.getElementById('banaan');
	appel=document.getElementById('appel');
	peer=document.getElementById('peer');


	banaan.style.top=Math.random()*winH+'px';
	banaan.style.left=Math.random()*winW+'px';
	appel.style.top=Math.random()*winH+'px';
	appel.style.left=Math.random()*winW+'px';
	peer.style.top=Math.random()*winH+'px';
	peer.style.left=Math.random()*winW+'px';


	rfruit=Math.floor(Math.random()*3);

	if(rfruit==0){
		banaan.style.display='block';
		setTimeout(function(){
			banaan.style.display='none';
		},5000);
	}
	if(rfruit==1){
		appel.style.display='block';
		setTimeout(function(){
			appel.style.display='none';
		},5000);
	}
	if(rfruit==2){
		peer.style.display='block';
		setTimeout(function(){
			peer.style.display='none';
		},5000);
	}
	if(rfruit==3){
		splash('Lucky bastard');
		vierscore=7777777777777777;
		vierscoreid.innerHTML=vierscore;
		vijfscore=7777777777777777;
		vijfscoreid.innerHTML=vijfscore;
	}
}

y=true;
n=false;


function showKeyCode(e) {
	kpres=e.keyCode + "\n";
	if(l){
		if(kpres==38){
			moveup();
		}if(kpres==40){
			movedown();
		}if(kpres==37){
			moveleft();
		}if(kpres==39){
			self.setTimeout(function(){
				if(y){
					n=true;
					y=false;
				}
			},1000)
			moveright();
		}if(kpres==13||kpres==96){
			stopmove();
		}
		if(kpres==87){
			wup();
		}if(kpres==83){
			sdown();
		}if(kpres==65){
			aleft();
		}if(kpres==68){
			dright();
		}if(kpres==32){
			spacemove();
		}
	}
}

function slide(){
	if ('pageX' in event) {
		var pageX = event.pageX;
	}
	else {
		var pageX = event.clientX + document.documentElement.scrollLeft;
	}
	bar=document.getElementById('snelheidoverlay');
	opa=document.getElementById('snelheidklikker');

	var winW = 1920, winH = 1080;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	percent=pageX/winW;
	bar.style.width=percent*100+"%";
	opa.innerHTML="Snelheid: "+Math.floor(percent*100);
	if (percent==0){percent=0.000001}
	percentage=percent*100;
	newspeed(percentage);
}

function newspeed (speed) {
	viersnelheid=1000/parseInt(speed);
	vijfsnelheid=1000/parseInt(speed);
	vierkant.style.transitionDuration=viersnelheid/1000+'s';
	vijfkant.style.transitionDuration=vijfsnelheid/1000+'s';

}

function movedown () {
	stopmove();
	down=self.setInterval(function(){
		vierkant.style.top=dpx+20+'px';
		dpx=parseInt(vierkant.style.top.substring(0, vierkant.style.top.length - 2));
		viercheckdead();
	},viersnelheid);
}
function moveup () {
	stopmove();
	up=self.setInterval(function(){
		vierkant.style.top=dpx-20+'px';
		dpx=parseInt(vierkant.style.top.substring(0, vierkant.style.top.length - 2));
		viercheckdead();
	},viersnelheid);
}
function moveleft () {
	stopmove();
	left=self.setInterval(function(){
		vierkant.style.left=lpx-20+'px';
		lpx=parseInt(vierkant.style.left.substring(0, vierkant.style.left.length - 2));
		viercheckdead();
	},viersnelheid);
}
function moveright () {
	stopmove();
	right=self.setInterval(function(){
		vierkant.style.left=lpx+20+'px';
		lpx=parseInt(vierkant.style.left.substring(0, vierkant.style.left.length - 2));
		viercheckdead();
	},viersnelheid);
}

function stopmove () {
	clearInterval(down);
	clearInterval(up);
	clearInterval(left);
	clearInterval(right);
}




function sdown () {
	spacemove();
	s=self.setInterval(function(){
		vijfkant.style.bottom=sdpx-20+'px';
		sdpx=parseInt(vijfkant.style.bottom.substring(0, vijfkant.style.bottom.length - 2));
		vijfcheckdead();
	},vijfsnelheid);
}
function wup () {
	spacemove();
	w=self.setInterval(function(){
		vijfkant.style.bottom=sdpx+20+'px';
		sdpx=parseInt(vijfkant.style.bottom.substring(0, vijfkant.style.bottom.length - 2));
		vijfcheckdead();
	},vijfsnelheid);
}
function aleft () {
	spacemove();
	a=self.setInterval(function(){
		vijfkant.style.right=alpx+20+'px';
		alpx=parseInt(vijfkant.style.right.substring(0, vijfkant.style.right.length - 2));
		vijfcheckdead();
	},vijfsnelheid);
}
function dright () {
	spacemove();
	a=self.setInterval(function(){
		vijfkant.style.right=alpx-20+'px';
		alpx=parseInt(vijfkant.style.right.substring(0, vijfkant.style.right.length - 2));
		vijfcheckdead();
	},vijfsnelheid);
}

function spacemove () {
	clearInterval(s);
	clearInterval(w);
	clearInterval(a);
	clearInterval(d);
}


vijfappel=0;
vijfpeer=0;
vijfbanaan=0;
vijfdeath=0;
vierappel=0;
vierpeer=0;
vierbanaan=0;
vierdeath=0;
vierkill=0;
vijfkill=0;

function vijfcheckdead () {
	if(vijfkant.style.bottom.substring(0, vijfkant.style.bottom.length - 2)<0||vijfkant.style.right.substring(0, vijfkant.style.right.length - 2)<0||vijfkant.style.bottom.substring(0, vijfkant.style.bottom.length - 2)>winH-vijfkant.style.height||vijfkant.style.right.substring(0, vijfkant.style.right.length - 2)>winW-vijfkant.style.width){
		if(g){
			splash('Rood is dood, heeft nu '+vijfdeath+' deaths');
			vijfdeath++;
			console.log('vijf heeft in totaal '+vijfdeath+' deaths');
			updatescore();
			spacemove();
		}
	}
	if(isOverlap('vier','vijf')){
		vierdeath++;
		console.log('vier heeft in totaal '+vierdeath+' deaths');
		vijfkill++;
		console.log('vijf heeft in totaal '+vijfkill+' kills');
		updatescore();
		splash('Botsing');
		spacemove();
	}
	if(isOverlap('vijf','appel')){
		vijfappel++;
		splash('Rood heeft een appel gepakt!</br></br>'+vijfappel+' appels tot nu toe.</br>Wit is nu voor 3 seconden bevroren');
		updatescore();
		console.log('vijf heeft in totaal '+vijfappel+' appels');
		irritant=self.setInterval(function(){
			stopmove();
		},10);
		setTimeout(function(){clearInterval(irritant)},3000);
		document.getElementById('appel').style.display='none';
	}
	if(isOverlap('vijf','peer')){
		vijfpeer++;
		splash('Rood heeft een peer gepakt!</br></br>'+vijfpeer+' peren tot nu toe.');
		updatescore();
		console.log('vijf heeft in totaal '+vijfpeer+' peren');
		document.getElementById('peer').style.display='none';
	} 
	if(isOverlap('vijf','banaan')){
		vijfbanaan++;
		splash('Rood heeft een banaan gepakt!</br></br>'+vijfbanaan+' bananen tot nu toe.</br>Rood gaat nu '+Math.round(Math.pow(1.4,vijfbanaan)*100)/100+'x sneller');
		updatescore();
		console.log('vijf heeft in totaal '+vijfbanaan+' bananen');
		document.getElementById('banaan').style.display='none';
		vijfsnelheid=vijfsnelheid/1.4;
	}
}
function viercheckdead () {
	if(vierkant.style.top.substring(0, vierkant.style.top.length - 2)<0||vierkant.style.left.substring(0, vierkant.style.left.length - 2)<0||vierkant.style.top.substring(0, vierkant.style.top.length - 2)>winH-vierkant.style.height||vierkant.style.left.substring(0, vierkant.style.left.length - 2)>winW-vierkant.style.width){
		if(g){
			vierdeath++;
			splash('Wit is dood, heeft nu '+vierdeath+' deaths');
			console.log('vier heeft in totaal '+vierdeath+' deaths');
			updatescore();
			stopmove();
		}
	}
	if(isOverlap('vier','vijf')){
		vijfdeath++;
		console.log('vijf heeft in totaal '+vijfdeath+' deaths');
		vierkill++;
		console.log('vier heeft in totaal '+vierkill+' kills');
		updatescore();
		splash('Botsing');
		stopmove();
	}
	if(isOverlap('vier','appel')){
		if(n){
			vierappel++;
			splash('Wit heeft een appel gepakt!</br></br>'+vierappel+' appels tot nu toe.</br>Rood is nu voor 3 seconden bevroren');
			updatescore();
			console.log('vier heeft in totaal '+vierappel+' appels');
			irritant=self.setInterval(function(){
				spacemove();
			},10);
			setTimeout(function(){clearInterval(irritant)},3000);
			document.getElementById('appel').style.display='none';
		}
	}
	if(isOverlap('vier','peer')){
		if(n){
			vierpeer++;
			splash('Wit heeft een peer gepakt!</br></br>'+vierpeer+' peren tot nu toe.');
			updatescore();
			console.log('vier heeft in totaal '+vierpeer+' peren');
			document.getElementById('peer').style.display='none';
		}
	}
	if(isOverlap('vier','banaan')){
		if(n){
			vierbanaan++;
			splash('Wit heeft een banaan gepakt!</br></br>'+vierbanaan+' bananen tot nu toe.</br>Wit gaat nu '+Math.round(Math.pow(1.4,vierbanaan)*100)/100+'x sneller');
			updatescore();
			console.log('vier heeft in totaal '+vierbanaan+' bananen');
			document.getElementById('banaan').style.display='none';
			viersnelheid=viersnelheid/1.4;
			newspeed(1000/viersnelheid);
		}
	}
}

function isOverlap(idOne,idTwo){
	var objOne=$("#"+idOne),
		objTwo=$("#"+idTwo),
		offsetOne = objOne.offset(),
		offsetTwo = objTwo.offset(),
		topOne=offsetOne.top,
		topTwo=offsetTwo.top,
		leftOne=offsetOne.left,
		leftTwo=offsetTwo.left,
		widthOne = objOne.width(),
		widthTwo = objTwo.width(),
		heightOne = objOne.height(),
		heightTwo = objTwo.height();
	var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne 
			&& topTwo > topOne && topTwo < topOne+heightOne,
		rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
			&& topTwo > topOne && topTwo < topOne+heightOne,
		leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne 
			&& topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,
		rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
			&& topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
	return leftTop || rightTop || leftBottom || rightBottom;
}

function splash (message) {
	splashbox=document.getElementById('splashmessage');
	splashbox.innerHTML=message;
	splashbox.style.opacity=1;
	setTimeout(function(){
		splashbox.style.opacity=0;
	},6500);
}

function updatescore () {
	vijfscore=vijfappel+2*vijfpeer+vijfbanaan+vijfkill*2-vijfdeath*2;
	vierscore=vierappel+2*vierpeer+vierbanaan+vierkill*2-vierdeath*2;
	vijfdeathid.innerHTML=vijfdeath;
	vierdeathid.innerHTML=vierdeath;
	vierkillid.innerHTML=vierkill;
	vijfkillid.innerHTML=vijfkill;
	vierscoreid.innerHTML=vierscore;
	vijfscoreid.innerHTML=vijfscore;
}