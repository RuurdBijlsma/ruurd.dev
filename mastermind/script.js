//todo
//make game
//set grid size
//verlies ding maken

$(document).ready(function(){
	mobile=false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mobile=true;
	}
	board=$('#board');
	wrap=$('#wrap');
	colors=$('#colors');
	settings=$('#settings');

	colordown=false;
	settopen=false;
	pincolors=['red','green','blue','orange','black','purple','white','grey'];

	setGame(4,12,6);
});

function setGame (columns, rows, ncolors) {
	index=0;
	colors.html
	board.html('');
	window.rows=rows;
	window.columns=columns;
	window.ncolors=ncolors;

	var a=0;
	colors.html('');
	while(ncolors>a){
		colors.append("<div c='"+pincolors[a]+"' style='background-color:"+pincolors[a]+"'></div>");
		a++;
	}
	if(mobile){
		$('#colors>div').on('touchstart',selectColor);
	}else{
		$('#colors>div').on('mousedown',selectColor);
	}

	codecolors=[];
	var a=0;
	while(columns>a){
		codecolors.push(pincolors[Math.floor(Math.random()*ncolors)]);
		a++;
	}

	diff=columns/rows*ncolors/6;
	if(diff>.83){
		diff=100;
	}else{
		diff=diff/.83*100;
	}
	console.log('difficulty = '+Math.round(diff*10)/10+'%');

	var width=((columns+1)*50+columns*5);
	board.css('width',width+'px');
	width+=50;
	wrap.css('width',width+'px');
	var height=ncolors*40+(ncolors-1)*5;
	wrap.css('min-height',height+'px');

	var a=0;
	while(rows>a){
		ap="<div i='"+a+"' class='row'>";
		aph='';
		var b=0;
		while(columns>b){
			if(a==0){
				ap+="<div class='active'></div>";
			}else{
				ap+='<div></div>';
			}
			aph+="<div class='pin'></div>";
			b++;
		}
		ap+="<div h>"+aph+'</div>';
		board.append(ap+'</div>');
		a++;
	}

	$('div[h]').click(function(){
		if(index==$(this).parent().attr('i')){
			check();
		}
	});
	$('div[h]').css('background','rgba(0,0,0,0.2)');
	$('div[h]').css('cursor','default');
	$('div[i='+index+']').find('div[h]').css('background','rgba(0,0,0,0.4) url(img/ok.png) no-repeat center/60%');
	$('div[i='+index+']').find('div[h]').css('cursor','pointer');
}

function selectColor (e) {
	if(mobile){
		poi=e;
		startx=poi.originalEvent.changedTouches[0].pageX;
		starty=poi.originalEvent.changedTouches[0].pageY;
	}else{
		startx=e.pageX;
		starty=e.pageY;
	}
	colelem=$(this);
	c=colelem.attr('c');
	$("#colors>div[style*='"+c+"']").css('transition','0s');
	$("#colors>div[style*='"+c+"']").css('pointer-events','none');
	colordown=true;
	$('#colors>div').css('box-shadow','0px 0px 20px 0px rgba(0,0,0,0.2)');
	$("#colors>div[style*='"+c+"']").css('box-shadow','0px 0px 30px 0px rgba(0,0,0,0.5), inset 0px 0px 0px 2px white');
	$('.active').bind('mouseup', function(e){
		try{
			e=e.originalEvent.touches[0];
		}catch(e){}
		e.target.style.background=c;
		e.target.setAttribute('c',c);
	});
}

$(document).mousemove(move);
$(document).mouseup(stopmove);
$(document).on('touchend',stopmove);

function move (e) {
	if(colordown){
		$("#colors>div[style*='"+c+"']").css('transform','translate('+(e.pageX-startx)+'px,'+(e.pageY-starty)+'px)');
	}
}
function stopmove (e) {
	target=e.target.toString();
	$('#colors>div').css('pointer-events','auto');
	if(target=='[object HTMLBodyElement]'){
		$('.active').unbind();
		$('#colors>div').css('box-shadow','0px 0px 30px 0px rgba(0,0,0,0.2)');
	}
	if(colordown){
		colordown=false;
		$("#colors>div[style*='"+c+"']").css('transition','0.2s');
		setTimeout(function() {
			$("#colors>div[style*='"+c+"']").css('transform','translate(0,0)');
			$("#colors>div[style*='"+c+"']").css('pointer-events','auto');
		}, 10);
	}
}

function check () {
	var tempcolors=codecolors.slice();
	var a=0;
	checkcolors=[];
	while($('div[i='+index+']').children().length-1>a){
		checkcolors.push($('div[i='+index+']').children().eq(a).attr('c'));
		a++;
	}
	var white=0;
	var black=0;
	var a=0;
	while(checkcolors.length>a){
		if(codecolors[a]==checkcolors[a]){
			black++;
			console.log('black');
		}
		a++;
	}
	var a=0;
	while(checkcolors.length>a){
		if(tempcolors.indexOf(checkcolors[a])!==-1){
			white++;
			tempcolors.splice(tempcolors.indexOf(checkcolors[a]),1);
		}
		a++;
	}
	white-=black;
	var a=0;
	$('div[i='+index+'] .pin').css('background-color','rgba(0,0,0,0)');
	while(a<black){
		$('div[i='+index+'] .pin').eq(a).css('background-color','black');
		a++;
	}
	var a=0;
	while(a<white){
		$('div[i='+index+'] .pin').eq(black+a).css('background-color','white');
		a++;
	}
	if(black==columns){
		alert('win');
		if(columns>=9&&colors>=8){
			setGame(columns,rows-1,ncolors);
		}else if(columns>=9){
			setGame(columns,rows+1,ncolors+1);
		}else if(colors>=8){
			setGame(columns+1,rows+1,ncolors);
		}else{
			setGame(columns+1,rows+1,ncolors+1);
		}
	}else{
		nextrow();
	}
}
function nextrow () {
	index++;
	if(index>=rows){
		alert('You lost, the answer was '+codecolors.join(' '));
		update();
	}
	$('.active').unbind();
	$('div[i='+index+']').find('div[h]');
	$('.active').attr('class','');
	$('div[i='+index+']').children().attr('class','active');
	$('div[h]').css('background','rgba(0,0,0,0.2)');
	$('div[h]').css('cursor','default');
	$('div[i='+index+']').find('div[h]').css('background','rgba(0,0,0,0.4) url(img/ok.png) no-repeat center/60%');
	$('div[i='+index+']').find('div[h]').css('cursor','pointer');
	$('.active').bind('mouseup', function(e){
		e.target.style.background=c;
		e.target.setAttribute('c',c);
	});
}

function getsett () {
	if(settopen){
		settopen=false;
		settings.css('left','-317px');
	}else{
		settopen=true;
		settings.css('left','0px');
	}
}
function checkkey (e) {
	if(e.which==13){
		update();
	}
}
function setRange () {
	$('input[type=number]').eq(0).val($('#colrange').val());
	$('input[type=number]').eq(1).val($('#rowrange').val());
	$('input[type=number]').eq(2).val($('#klerange').val());
}
function update () {
	$('input[type=number]').eq(0).val($('#colrange').val());
	$('input[type=number]').eq(1).val($('#rowrange').val());
	$('input[type=number]').eq(2).val($('#klerange').val());
	setGame(Number($('#colrange').val()),Number($('#rowrange').val()),Number($('#klerange').val()));
}