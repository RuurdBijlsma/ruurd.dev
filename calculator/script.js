$(window).ready(function(){

	display=$('#display');
	controls=$('#controls');
	graphcontrols=$('#graphcontrols');
	buttons=$('#buttons');

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mobile=true;

		$('body').append("<style>#numpad>input{transition:0s}#buttons>input{transition:0s}</style>");
	}else{
		mobile=false;
		$('body').append("<style>#numpad>input:hover{box-shadow:inset 0px 0px 0px 900px rgba(0,0,0,0.2);}#numpad>input:active{box-shadow:inset 0px 0px 0px 900px rgba(0,0,0,0.4);}#buttons>input:hover{box-shadow:inset 0px 0px 0px 200px rgba(0,0,0,0.2);}</style>");
	}

	$('#inputs>input').eq(0).attr('disabled',mobile);

	var k=0;
	while($('*').length>k){
		$('*').eq(k).attr('tabindex','-1');
		k++;
	}
	$('#inputs>input').eq(0).attr('tabindex','1');
	$('#hidhid').attr('tabindex','2');

	f1=1;
	f2=2;
	f3=3;
	f4=4;
	f5=5;
	f6=6;
	f7=7;
	f8=8;
	f9=9;
	f10=10;

	canvases=$('.c');
	canvasGRID=$('#cGRID');
	canvasBG=$('#cBG');
	canvas1=$('#c1');
	canvas2=$('#c2');
	canvas3=$('#c3');
	canvas4=$('#c4');
	canvas5=$('#c5');
	canvas6=$('#c6');
	canvas7=$('#c7');
	canvas8=$('#c8');
	canvas9=$('#c9');
	canvas10=$('#c10');
	canvasLOAD=$('#cLOAD');

	textfield=$('#input');
	output=$('#output>ul');
	message=$('#message');
	gmessage=$('#gmessage');
	lis=$('#output>ul>li');
	bol=$('#bol');

	fps=['een','twee','drie','vier','vijf','zes','zeven','acht','negen','tien'];
	mobilelayout=false;

	selected=0;
	works=true;
	fopen=false;
	scrollDisable=false;
	second=false;
	postderivplot=false;
	toggo=true;
	remo=true;
	intervalset=false;

	if(localStorage.getItem('angle')===null){
		angle='deg';
		localStorage.angle=angle;
	}
	angle=localStorage.angle;
	$("input[onclick='changeAngle()']").eq(0).val(angle.toUpperCase());
	$("input[onclick='changeAngle()']").eq(1).val(angle.toUpperCase());
	$("input[onclick='changeAngle()']").eq(2).val(angle.toUpperCase());

	if(mobile&&!mobilelayout){
		$("#buttons>input[type='button']").on("touchstart", function() {

			textfield.val(textfield.val()+$(this).val());

			selected=0;
			lis.css('background-color','transparent');

			textfield.css('background-color','rgba(255,255,255,0.8)');
			textfield.css('color','black');

			textfield.val(textfield.val().replace(/SIN/g, 'sin('));
			textfield.val(textfield.val().replace(/COS/g, 'cos('));
			textfield.val(textfield.val().replace(/TAN/g, 'tan('));
			if(textfield.val().substring(textfield.val().length-1,textfield.val().length)=='√'){
				textfield.val(textfield.val()+'(');
			}
			textfield.val(textfield.val().replace(/LOG/g, 'log('));
		});

		$("#numpad>input").on("touchstart", function() {
			$(this).attr('style','transition:.3s;box-shadow:inset 0px 0px 0px 80px rgba(0,0,0,0.4)');
		});

		$("#numpad>input").on("touchend", function() {
			$(this).attr('style','box-shadow:inset 0px 0px 0px 80px rgba(0,0,0,0.0);transition:0s');
		});

		$("#numpad>input[type='button']").on("touchstart", function() {

			var val=$(this).val();
			var field=$('#inputs>input').eq(functionindex);
			field.val(field.val()+val);

			field.val(field.val().replace(/SINH/g, 'sinh('));
			field.val(field.val().replace(/COSH/g, 'cosh('));
			field.val(field.val().replace(/TANH/g, 'tanh('));
			field.val(field.val().replace(/SIN/g, 'sin('));
			field.val(field.val().replace(/COS/g, 'cos('));
			field.val(field.val().replace(/TAN/g, 'tan('));
			field.val(field.val().replace(/LOG/g, 'log('));
			if(field.val().substring(field.val().length-6,field.val().length)=='nDeriv'){
				field.val(field.val()+'(');
			}
			if(field.val().substring(field.val().length-1,field.val().length)=='√'){
				field.val(field.val()+'(');
			}
			if(mobile){
				$('#butts>header>input').val('⇐ F'+(functionindex+1)+' = '+field.val());
			}
			if(second){
				toggle2ND();
			}

		});
	}else{
		$("#buttons>input[type='button']").click(function(){


			textfield.val(textfield.val()+$(this).val());

			selected=0;
			lis.css('background-color','transparent');

			textfield.css('background-color','rgba(255,255,255,0.8)');
			textfield.css('color','black');

			textfield.val(textfield.val().replace(/SIN/g, 'sin('));
			textfield.val(textfield.val().replace(/COS/g, 'cos('));
			textfield.val(textfield.val().replace(/TAN/g, 'tan('));
			textfield.val(textfield.val().replace(/LOG/g, 'log('));
			if(textfield.val().substring(textfield.val().length-1,textfield.val().length)=='√'){
				textfield.val(textfield.val()+'(');
			}
		});

		$("#numpad>input[type='button']").click(function(){

			var val=$(this).val();
			var field=$('#inputs>input').eq(functionindex);
			field.val(field.val()+val);

			field.val(field.val().replace(/SINH/g, 'sinh('));
			field.val(field.val().replace(/COSH/g, 'cosh('));
			field.val(field.val().replace(/TANH/g, 'tanh('));
			field.val(field.val().replace(/SIN/g, 'sin('));
			field.val(field.val().replace(/COS/g, 'cos('));
			field.val(field.val().replace(/TAN/g, 'tan('));
			if(field.val().substring(field.val().length-6,field.val().length)=='nDeriv'){
				field.val(field.val()+'(');
			}
			if(field.val().substring(field.val().length-1,field.val().length)=='√'){
				field.val(field.val()+'(');
			}
			field.val(field.val().replace(/LOG/g, 'log('));
			if(mobile){
				$('#butts>header>input').val('⇐ F'+(functionindex+1)+' = '+field.val());
			}
			if(second){
				toggle2ND();
			}

		});
	}



	display.css('height',($(window).height()/2.5)+'px');
	controls.css('height','calc(100% - '+(($(window).height()/2.5)+'px')+')');
	canvases.css('height',(($(window).height()/2.5)+Number(textfield.css('height').replace(/\D/g,'')))+'px');
	graphcontrols.css('height','calc(100% - '+(($(window).height()/2.5)+Number(textfield.css('height').replace(/\D/g,'')))+'px)');

	canvases.attr('height',(($(window).height()/2.5)+Number(textfield.css('height').replace(/\D/g,''))));
	canvases.attr('width',$(window).width());

	$(window).bind('mousewheel', function(e){
		if(scrollDisable){
			return false;
		}
	});
	$(window).bind('DOMMouseScroll', function(e){
		if(scrollDisable){
			return false;
		}
	});

	self.setTimeout(function(){

		cGRID=document.getElementById('cGRID');
		ctxGRID = cGRID.getContext("2d");
		cBG=document.getElementById('cBG');
		ctxBG = cBG.getContext("2d");
		c1=document.getElementById('c1');
		ctx1 = c1.getContext("2d");
		c2=document.getElementById('c2');
		ctx2 = c2.getContext("2d");
		c3=document.getElementById('c3');
		ctx3 = c3.getContext("2d");
		c4=document.getElementById('c4');
		ctx4 = c4.getContext("2d");
		c5=document.getElementById('c5');
		ctx5 = c5.getContext("2d");
		c6=document.getElementById('c6');
		ctx6 = c6.getContext("2d");
		c7=document.getElementById('c7');
		ctx7 = c7.getContext("2d");
		c8=document.getElementById('c8');
		ctx8 = c8.getContext("2d");
		c9=document.getElementById('c9');
		ctx9 = c9.getContext("2d");
		c10=document.getElementById('c10');
		ctx10 = c10.getContext("2d");
		cLOAD=document.getElementById('cLOAD');
		ctxLOAD = cLOAD.getContext("2d");

		cwidth=canvases.width();
		cheight=canvases.height();

		var ratio=cheight/10;

		minx=Math.round((-cwidth/ratio)/10)*10;
		maxx=Math.round((cwidth/ratio)/10)*10;
		miny=-10;
		maxy=10;

		stepx=cwidth/(maxx-minx);
		stepy=cheight/(maxy-miny);

		$('#window>label>input').eq(0).val(maxx-minx);
		$('#window>label>input').eq(1).val(maxy-miny);

		ctxBG.beginPath();
		ctxBG.strokeStyle='#ccc';
		ctxBG.moveTo(cwidth/2,0);
		ctxBG.lineTo(cwidth/2,cheight);
		ctxBG.moveTo(0,cheight/2);
		ctxBG.lineTo(cwidth,cheight/2);
		ctxBG.stroke();

		ctxBG.fillStyle='#000';
		ctxBG.font="15px Roboto";
		ctxBG.fillText(' '+(cheight/2/stepy),cwidth/2+5,20);
		ctxBG.fillText(' '+(cwidth/2/stepx),cwidth-50,cheight/2-10);
		ctxBG.fillText('-'+(cwidth/2/stepx),5,cheight/2-10);
		ctxBG.fillText('-'+(cheight/2/stepy),cwidth/2+5,cheight-10);

		drawGrid();

	},300);

	$('#inputs>input').keyup(function(e){
		if(e.which==13){
			plot();
		}
	});
	$('#inputs>input').focus(function(){
		$('#inputs>input').css('box-shadow','inset 0px 0px 0px 200px rgba(255,255,255,0.5)');
		$('#inputs>input').eq(Number($(this).attr('placeholder').replace(/\D/g,''))-1).css('box-shadow','inset 0px 0px 0px 3px rgba(0,0,0,0.2)');

		functionindex=Number($(this).attr('placeholder').replace(/\D/g,''))-1;

		fp=$('#inputs>input').eq(functionindex).val();
		fp=fp.replace(/e/gi, "E");
		fp=fp.replace(/×/gi, "*");
		fp=fp.replace(/÷/gi, "/");
		if(angle=='deg'){
			fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
			fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
			fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
		}
		fp=fp.replace(/log/gi, "log10");
		fp=fp.replace(/pi/gi, "PI");
		fp=fp.replace(/π/gi, "PI");
		fp=fp.replace(/√/gi, "sqrt");
		fp=fp.replace(/x/gi, "(x)");

		fp=fp.toLowerCase();
		fp=fp.replace(/x/gi, "H");
	});
	$('#inputs>input').eq(0).focus();

	if(mobile){
		$('#inputs>input').on("touchstart", function() {
			$('#inputs>input').css('box-shadow','inset 0px 0px 0px 200px rgba(255,255,255,0.5)');
			$('#inputs>input').eq(Number($(this).attr('placeholder').replace(/\D/g,''))-1).css('box-shadow','inset 0px 0px 0px 3px rgba(0,0,0,0.2)');

			functionindex=Number($(this).attr('placeholder').replace(/\D/g,''))-1;

			fp=$('#inputs>input').eq(functionindex).val();

			fp=fp.replace(/e/gi, "E");
			fp=fp.replace(/×/gi, "*");
			fp=fp.replace(/÷/gi, "/");
			if(angle=='deg'){
				fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
				fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
				fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
			}
			fp=fp.replace(/log/gi, "log10");
			fp=fp.replace(/pi/gi, "PI");
			fp=fp.replace(/π/gi, "PI");
			fp=fp.replace(/√/gi, "sqrt");
			fp=fp.replace(/x/gi, "(x)");

			fp=fp.toLowerCase();
			fp=fp.replace(/x/gi, "H");
		});
	}

	$('#hidhid').focus(function(){
		plot($('#inputs>input').length-1);
		checkload=self.setInterval(function(){
			if(!loading){
				$('#inputs>input').eq($('#inputs>input').length-1).focus();
				$('#inputs>input').eq($('#inputs>input').length-1).select();
				clearInterval(checkload);
			}
		},300);
	});

	$('#window>label>input').keydown(function(e){
		if(e.which==13){
			minx=-1*Number($('#window>label>input').eq(0).val())/2;
			maxx=Number($('#window>label>input').eq(0).val())/2;
			miny=-1*Number($('#window>label>input').eq(1).val())/2;
			maxy=Number($('#window>label>input').eq(1).val())/2;

			setWindowsize(minx,maxx,miny,maxy);
		}
	});
	self.setTimeout(function(){
		canvases.mousemove(function(e){
			cmmx=Math.round(((e.pageX-canvases.offset().left-cwidth/2)/stepx)*100)/100;
			var h=cmmx;

			imag=false;

			if(fp.indexOf('nderiv')!=-1){
				cmmy=deltav[e.pageX-canvases.offset().left]*stepy;
			}else{

				if(typeof(fp)!='undefined'&&fp!==''){

					if(typeof(math.eval(fp.replace(/H/g,h)).im)==='undefined'){

						cmmy=Math.round(math.eval(fp.replace(/H/g,h))*1000)/1000;

					}else{
						if(math.eval(fp.replace(/H/g,h)).re===0){
							cmtxt=Math.round(math.eval(fp.replace(/H/g,h)).im*1000)/1000+'i';
							cmmy=Math.round(math.eval(fp.replace(/H/g,h)).im*1000)/1000;
							imag=true;
						}else{
							var i=(Math.round(math.eval(fp.replace(/H/g,h)).im*1000)/1000);
							if(i<0){
								var sym=' - ';
							}else{
								var sym=' + ';
							}
							cmtxt=(Math.round(math.eval(fp.replace(/H/g,h)).re*1000)/1000)+sym+Math.abs(i)+'i';
							cmmy=Math.round(math.eval(fp.replace(/H/g,h)).re*1000)/1000;
							imag=true;
						}
					}

				}else{
					cmmy=Math.round(((e.pageY-canvases.offset().top-cheight/2)/stepy)*-100)/100;
					bol.css('opacity','0');
				}
			}

			if(!imag){
				cmtxt=cmmy;
			}
			ctxBG.beginPath();
			ctxBG.clearRect(-5,-5,cwidth/2-5,cheight/2-25);
			ctxBG.fillStyle='#000';
			ctxBG.font="15px Roboto";
			ctxBG.fillText('X: '+cmmx,5,17);
			ctxBG.fillText('Y: '+cmtxt,6,34);

			drawGrid();

			bol.css('left',(e.pageX-5)+'px');
			bol.css('top',(((cmmy*stepy)*-1)+cheight/2-5)+'px');
		});
		canvases.mouseleave(function(){
			ctxBG.clearRect(-5,-5,cwidth/2-5,cheight/2-25);
			bol.css('opacity','0');
		});
		canvases.mouseenter(function(){
			bol.css('opacity','1');
		});
		canvases.blur(function(){
			ctxBG.clearRect(-5,-5,cwidth/2-5,cheight/2-25);
			bol.css('opacity','0');
		});

		//mobile:
		canvases.on("touchstart", function(ev) {
			bol.css('opacity','1');
		});

		canvases.on("touchmove", function(ev) {
			var e = ev.originalEvent.touches[0];

			cmmx=Math.round(((e.pageX-canvases.offset().left-cwidth/2)/stepx)*100)/100;
			var h=cmmx;

			imag=false;

			if(fp.indexOf('nderiv')!==-1){
				cmmy=deltav[Math.round(e.pageX-canvases.offset().left)]*stepy;
			}else{

				if(typeof(fp)!=='undefined'&&fp!==''){

					if(typeof(math.eval(fp.replace(/H/g,h)).im)==='undefined'){

						cmmy=Math.round(math.eval(fp.replace(/H/g,h))*1000)/1000;

					}else{
						if(math.eval(fp.replace(/H/g,h)).re===0){
							cmtxt=Math.round(math.eval(fp.replace(/H/g,h)).im*1000)/1000+'i';
							cmmy=Math.round(math.eval(fp.replace(/H/g,h)).im*1000)/1000;
							imag=true;
						}else{
							var i=(Math.round(math.eval(fp.replace(/H/g,h)).im*1000)/1000);
							if(i<0){
								var sym=' - ';
							}else{
								var sym=' + ';
							}
							cmtxt=(Math.round(math.eval(fp.replace(/H/g,h)).re*1000)/1000)+sym+Math.abs(i)+'i';
							cmmy=Math.round(math.eval(fp.replace(/H/g,h)).re*1000)/1000;
							imag=true;
						}
					}

				}else{
					cmmy=Math.round(((e.pageY-canvases.offset().top-cheight/2)/stepy)*-100)/100;
					bol.css('opacity','0');
				}
			}

			if(!imag){
				cmtxt=cmmy;
			}
			ctxBG.beginPath();
			ctxBG.clearRect(-5,-5,cwidth/2-5,cheight/2-25);
			ctxBG.fillStyle='#000';
			ctxBG.font="15px Roboto";
			ctxBG.fillText('X: '+cmmx,5,17);
			ctxBG.fillText('Y: '+cmtxt,6,34);

			bol.css('left',(e.pageX-5)+'px');
			bol.css('top',(((cmmy*stepy)*-1)+cheight/2-5)+'px');
		});
	},300);
	$('.toggle').mousedown(function(){
		toggletoggle($(this).text());
	});
	$('.remove').mousedown(function(){
		removefun($(this).attr('i'));
	});

	// var a=0;
	// while(119>a){
	// 	if(a.toString().length==1){
	// 		$('body').append("<img src='img/seq/calc00" a ".png' class='hid'>");
	// 	}
	// 	if(a.toString().length==2){
	// 		$('body').append("<img src='img/seq/calc0" a ".png' class='hid'>");
	// 	}
	// 	if(a.toString().length==3){
	// 		$('body').append("<img src='img/seq/calc" a ".png' class='hid'>");
	// 	}
	// 	a++;
	// }

	// img=$('.hid').eq(0)[0];

	// $('.hid').eq($('hid').length-1).load(function(){
	// 	ctxLOAD.drawImage(img,0,0,canvasLOAD.width(),canvasLOAD.height());
	// });
});


function toggletoggle (jo) {

	console.log(jo);

	var tog=$('.toggle').eq(Number(jo.substring(1))-1);
	var putin=$('#inputs>input').eq(Number(jo.substring(1))-1);
	var canan=$("#display>canvas").eq(Number(jo.substring(1))+1);
	console.log('tog = ',tog);
	console.log('putin = ',putin);
	console.log('canan = ',canan);

	if(putin.val()!==''){
		if(toggo){
			if(tog.attr('active')=='no'){
				tog.css('opacity','1');
				putin.css('opacity','1');
				putin.css('pointer-events','auto');
				canan.css('opacity','1');
				tog.attr('active','yes');
				toggo=false;

				putin.focus();
			}else{
				tog.css('opacity','.4');
				putin.css('opacity','.4');
				putin.css('pointer-events','none');
				canan.css('opacity','0');
				tog.attr('active','no');

				$('#inputs>input').eq(Number($(".toggle[active='yes']").eq(0).text().substring(1)-1)).focus();

				toggo=false;
			}
			self.setTimeout(function(){
				toggo=true;
			},20);
		}
	}

}

function removefun (jo) {
	removetimer=2000;
	var putin=$('#inputs>input').eq(Number(jo));
	var tog=$('.toggle').eq(Number(jo));
	var rem=$('.remove').eq(Number(jo));
	if($('#inputs>input').length!=1){
		if(remo){

			fps[$('#inputs>input').length-2]='';
			console.log('fps['+($('#inputs>input').length-2)+'] = '+fps[$('#inputs>input').length-2]);

			putin.remove();
			tog.remove();
			rem.remove();

			var b=0;
			while($('#inputs>input').length>b){
				$('.toggle').eq(b).text('Y'+(b+1));
				$('.remove').eq(b).attr('i',b);
				$('#inputs>input').eq(b).attr('placeholder','Y'+(b+1));
				resetCanvas(b+1);
				b++;
			}

			remo=false;
			if(!intervalset){
				removeinterval=self.setInterval(function(){
					remo=true;
					removetimer-=200;
					intervalset=true;
					if(removetimer<=0){
						plotall('zoomoverride');
						removetimer=2000;
						clearInterval(removeinterval);
						intervalset=false;
					}
				},200);
			}
		}
	}
}

function setWindowsize (minx, maxx, miny, maxy) {
	minx=minx;
	maxx=maxx;
	miny=miny;
	maxy=maxy;

	stepx=cwidth/(maxx-minx);
	stepy=cheight/(maxy-miny);

	resetCanvas('BG')

	ctxBG.strokeStyle='#ccc';
	ctxBG.moveTo(cwidth/2,0);
	ctxBG.lineTo(cwidth/2,cheight);
	ctxBG.moveTo(0,cheight/2);
	ctxBG.lineTo(cwidth,cheight/2);
	ctxBG.stroke();

	ctxBG.font="15px Roboto";
	ctxBG.fillText(' '+(cheight/2/stepy),cwidth/2+5,20);
	ctxBG.fillText(' '+(cwidth/2/stepx),cwidth-50,cheight/2-10);
	ctxBG.fillText('-'+(cwidth/2/stepx),5,cheight/2-10);
	ctxBG.fillText('-'+(cheight/2/stepy),cwidth/2+5,cheight-10);

	drawGrid();

	$('#window>label>input').eq(1).val(maxy-miny);
	$('#window>label>input').eq(0).val(maxx-minx);

	plotall('zoomoverride');
}
function zoomfit () {
	if(typeof(fp)!='undefined'){
		var vars=getMaxy();
		maxy=math.max(math.abs(vars));
		miny=-maxy;

		setWindowsize(minx,maxx,miny,maxy);
	}else{
		msg('Plot a function first');
	}
}
function zoomsquare () {
	var ratio=cheight/maxy;

	maxx=cwidth/ratio;
	minx=-maxx;
	setWindowsize(minx,maxx,miny,maxy);
}
function zoomstandard () {
	maxx=10;
	minx=-maxx;
	maxy=10;
	miny=-maxy;
	setWindowsize(minx,maxx,miny,maxy);
}

function toggle2ND () {
	if(second){
		second=false;
		$("#numpad>input[value='2ND']").css('color','white');
		$("#numpad>input[value='2ND']").css('text-shadow','none');
		$("#numpad>input[value='SINH']").val('SIN');
		$("#numpad>input[value='COSH']").val('COS');
		$("#numpad>input[value='TANH']").val('TAN');
		$("#numpad>input[value='nDeriv']").val(',');
		$("#numpad>input[value='F1']").val('1');
		$("#numpad>input[value='F2']").val('2');
		$("#numpad>input[value='F3']").val('3');
		$("#numpad>input[value='F4']").val('4');
		$("#numpad>input[value='F5']").val('5');
		$("#numpad>input[value='F6']").val('6');
		$("#numpad>input[value='F7']").val('7');
		$("#numpad>input[value='F8']").val('8');
		$("#numpad>input[value='F9']").val('9');
		$("#numpad>input[value='F10']").val('0');
	}else{
		second=true;
		$("#numpad>input[value='2ND']").css('color','rgb(8, 244, 190)');
		$("#numpad>input[value='2ND']").css('text-shadow','0px 0px 14px rgb(8, 244, 190)');
		$("#numpad>input[value='SIN']").val('SINH');
		$("#numpad>input[value='COS']").val('COSH');
		$("#numpad>input[value='TAN']").val('TANH');
		$("#numpad>input[value=',']").val('nDeriv');
		$("#numpad>input[value='1']").val('F1');
		$("#numpad>input[value='2']").val('F2');
		$("#numpad>input[value='3']").val('F3');
		$("#numpad>input[value='4']").val('F4');
		$("#numpad>input[value='5']").val('F5');
		$("#numpad>input[value='6']").val('F6');
		$("#numpad>input[value='7']").val('F7');
		$("#numpad>input[value='8']").val('F8');
		$("#numpad>input[value='9']").val('F9');
		$("#numpad>input[value='0']").val('F10');
	}
}

//todo:
//1: mogelijkheid om functies te selecteren en dan fp=(die functie) hebben zodat mousemove ding goed werkt met meerdere functies DOne
//: 1 functie per canvas en bg canvas maken DONE
// haakje sluiten optioneel maken net als in calculator gedeelte DONe
// grafieken zoals y=√(X) en log(x) goed plotten DOne
// zoom fit bij complex numbers
//2: maxx minx maxy en maxy instellen
//3: slepen en zoomen in canvas

$(window).resize(onresize);

function onresize () {
	display.css('height',($(window).height()/2.5)+'px');
	controls.css('height','calc(100% - '+(($(window).height()/2.5)+'px')+')');
	canvases.css('height',(($(window).height()/2.5)+Number(textfield.css('height').replace(/\D/g,'')))+'px');
	graphcontrols.css('height','calc(100% - '+(($(window).height()/2.5)+Number(textfield.css('height').replace(/\D/g,'')))+'px)');

	canvases.attr('height',(($(window).height()/2.5)+Number(textfield.css('height').replace(/\D/g,''))));
	canvases.attr('width',$(window).width());

	if(fopen){
		self.setTimeout(function(){

			self.setTimeout(function(){
				controls.css('display','none');
				graphcontrols.css('transition','0s');
				self.setTimeout(function(){
					graphcontrols.css('top','0px');
					self.setTimeout(function(){
						graphcontrols.css('transition','0.3s');
					},10);
				},10);
			},300);


			cwidth=canvases.width();
			cheight=canvases.height();

			stepx=cwidth/(maxx-minx);
			stepy=cheight/(maxy-miny);

			resetCanvas('BG');

			ctxBG.beginPath();
			ctxBG.strokeStyle='#ccc';
			ctxBG.moveTo(cwidth/2,0);
			ctxBG.lineTo(cwidth/2,cheight);
			ctxBG.moveTo(0,cheight/2);
			ctxBG.lineTo(cwidth,cheight/2);
			ctxBG.stroke();

			ctxBG.font="15px Roboto";
			ctxBG.fillText(' '+(cheight/2/stepy),cwidth/2+5,20);
			ctxBG.fillText(' '+(cwidth/2/stepx),cwidth-50,cheight/2-10);
			ctxBG.fillText('-'+(cwidth/2/stepx),5,cheight/2-10);
			ctxBG.fillText('-'+(cheight/2/stepy),cwidth/2+5,cheight-10);

			drawGrid();

			plotall('zoomoverride');

			if(!mobilelayout){
				$('#butts').css('height',$('#butts').height()+'px');
				self.setTimeout(function(){
					$('#butts').css('height','auto');
				},20);
			}

		},300);
	}

	if($(window).width()<850&&!mobilelayout){
		$('#butts').css('width','100%');
		if($('#numpad').css('display')!='none'){
			$('#butts').css('height','400px');
		}else{
			$('#butts').css('height','194px');
		}
		graphcontrols.css('overflow','auto');
		$('#inputs').css('overflow','hidden');
		$('#inputs').css('width','100%');
		mobilelayout=true;
	}else if(mobilelayout&&$(window).width()>=850){
		$('#butts').css('width','400px');
		$('#butts').css('height','auto');
		graphcontrols.css('overflow','visible');
		$('#inputs').css('overflow','auto');
		$('#inputs').css('width','calc(100% - 400px)');
		mobilelayout=false;
	}
}

function checkKey (e) {
	textfield.css('background-color','rgba(255,255,255,0.8)');
	textfield.css('color','black');

	if(e.which!=65&&e.which!=17){
		textfield.val(textfield.val().replace(/\*/gi, "×"));
		textfield.val(textfield.val().replace(/\//gi, "÷"));
		textfield.val(textfield.val().replace(/x/g, "X"));
		textfield.val(textfield.val().replace(/y/g, "Y"));
	}

	if(e.which==13){
		if(textfield.val()!==''){
			run();
		}else{
			OK();
		}
	}
	if(e.which==38||e.which==40){
		if(e.which==38){
			up();
		}else{
			down();
		}
	}else{
		selected=0;
		lis.css('background-color','transparent');
	}
}

function run () {
	q=textfield.val();



	if(q!==''){
		try{

			ip=textfield.val();
			ip=ip.replace(/×/gi, "*");
			ip=ip.replace(/÷/gi, "/");
			//ip=ip.replace(/e/gi, "E");
			if(angle=='deg'){
				ip=ip.replace(/sin\(/gi, 'sin((PI/180)*');
				ip=ip.replace(/cos\(/gi, 'cos((PI/180)*');
				ip=ip.replace(/tan\(/gi, 'tan((PI/180)*');
			}
			ip=ip.replace(/log/gi, "log10");
			ip=ip.replace(/pi/gi, "PI");
			ip=ip.replace(/π/gi, "PI");
			ip=ip.replace(/=/gi, "==");
			ip=ip.replace(/√/gi, "sqrt");
			ip=ip.toLowerCase();

			a=math.eval(ip);
			if(a<(1/9999999999999)&&a>(-1/9999999999999)){
				a=0;
			}
			works=true;
			textfield.val('');

			output.append("<li onclick=\"clickli('"+q+"')\">"+q+"</li><li onclick=\"clickli('"+a+"')\" class='right'>"+a+"</li><div class='hr'></div>");
			lis=$('#output>ul>li');

			$('#output').animate({
				scrollTop: $('#output')[0].scrollHeight
			}, 500);

		}catch(err){
			if(err.message.indexOf('Parenthesis ) expected (char')!=-1&&works){
				textfield.val(textfield.val()+')');
				works=false;
				run();
			}else{
				if(!works){
					works=true;
					textfield.val(textfield.val().substring(0,textfield.val().length-1));
				}
				textfield.css('background-color','maroon');
				textfield.css('color','white');
				msg(err.message);
			}
		}
	}
}

function clickli (c) {
	textfield.val(textfield.val()+c);
}

function msg (txt) {
	message.html(txt);
	message.css('opacity','1');
	self.setTimeout(function(){
		message.css('opacity','0');
	},5000);
}
function gmsg (txt) {
	gmessage.html(txt);
	gmessage.css('opacity','1');
	self.setTimeout(function(){
		gmessage.css('opacity','0');
	},5000);
}

function clearfunction () {
	var field=$('#inputs>input').eq(functionindex);
	field.val('');
	if(mobile){
		$('#butts>header>input').val('⇐ BACK TO CALCULATOR');
	}
	plot();
}
function backspacefunction () {
	var field=$('#inputs>input').eq(functionindex);
	field.val(field.val().substring(0,field.val().length-1));
	if(mobile){
		$('#butts>header>input').val('⇐ F'+(functionindex+1)+' = '+field.val());
	}
}
function clearall () {
	textfield.css('background-color','rgba(255,255,255,0.8)');
	textfield.css('color','black');
	selected=0;
	lis.css('background-color','transparent');

	if(textfield.val()===''){
		output.html('');
		lis=$('#output>ul>li');
	}else{
		textfield.val('');
	}
}
function backspace () {
	textfield.css('background-color','rgba(255,255,255,0.8)');
	textfield.css('color','black');
	selected=0;
	lis.css('background-color','transparent');

	if(textfield.val().length!==0){
		textfield.val(textfield.val().substring(0,textfield.val().length-1));
	}
}
function sinus (v) {
	if(angle=='deg'){
		var a = Math.sin(v*(Math.PI/180));
		if(a>1/9999999999999||a<-1/9999999999999){
			return a;
		}else{
			return 0;
		}
	}else{
		return Math.sin(v);
	}
}
function cosinus (v) {
	if(angle=='deg'){
		var a = Math.cos(v*(Math.PI/180));
		if(a>1/9999999999999||a<-1/9999999999999){
			return a;
		}else{
			return 0;
		}
	}else{
		return Math.cos(v);
	}
}
function tanges (v) {
	if(angle=='deg'){
		var a = Math.tan(v*(Math.PI/180));
		if(a>1/9999999999999||a<-1/9999999999999){
			return a;
		}else{
			return 0;
		}
	}else{
		return Math.tan(v);
	}
}
function loga (base, val) {
	if(typeof(val)=='undefined'){
		return Math.log10(base);
	}else{
		return Math.log10(val)/Math.log10(base);
	}
}
function root (root, n) {
	if(typeof(n)=='undefined'){
		return Math.sqrt(root);
	}else{
		return Math.pow(n, 1/root);
	}
}
function pow (num, exponent) {
	if(typeof(exponent)=='undefined'){
		return Math.pow(num, 2);
	}else{
		return Math.pow(num, exponent);
	}
}

function changeAngle () {
	if(angle=='deg'){
		angle='rad';
		localStorage.angle=angle;
		$("input[onclick='changeAngle()']").eq(0).val('RAD');
		$("input[onclick='changeAngle()']").eq(1).val('RAD');
		$("input[onclick='changeAngle()']").eq(2).val('RAD');
	}else{
		angle='deg';
		localStorage.angle=angle;
		$("input[onclick='changeAngle()']").eq(0).val('DEG');
		$("input[onclick='changeAngle()']").eq(1).val('DEG');
		$("input[onclick='changeAngle()']").eq(2).val('DEG');
	}
	plotall('override');
}

function OK () {
	textfield.val(textfield.val()+lis.eq(lis.length-selected).text());
	selected=0;
	lis.css('background-color','transparent');
}
function up () {
	if(selected<lis.length){
		selected++;
		lis.css('background-color','transparent');
		lis.eq(lis.length-selected).css('background-color','rgba(0,0,0,0.3)');
		st=((lis.length-selected)*40.5);
		$('#output').animate({
			scrollTop:st
		}, 100);
	}
}
function down () {
	if(selected>1){
		selected--;
		lis.css('background-color','transparent');
		lis.eq(lis.length-selected).css('background-color','rgba(0,0,0,0.3)');
		st=((lis.length-selected)*40.5);
		$('#output').animate({
			scrollTop:st
		}, 100);
	}
}
function funup (){
	if(functionindex>0){
		if(functionindex!=$('#inputs>input').length-1){
			plot(functionindex);
		}
		while(0<functionindex){
			functionindex--;
			if($('.toggle').eq(functionindex).attr('active')=='yes'){
				$('#inputs>input').eq(functionindex).focus();
				if(mobile){
					var field=$('#inputs>input').eq(functionindex);
					$('#butts>header>input').val('⇐ F'+(functionindex+1)+' = '+field.val());
				}
				break;
			}
		}
	}
}
function fundown (){
	if(functionindex<$('#inputs>input').length){
		if(functionindex!=$('#inputs>input').length-1){
			plot(functionindex);
		}
		while($('#inputs>input').length>functionindex){
			functionindex++;
			if($('.toggle').eq(functionindex).attr('active')=='yes'){
				$('#inputs>input').eq(functionindex).focus();
				if(mobile){
					var field=$('#inputs>input').eq(functionindex);
					$('#butts>header>input').val('⇐ F'+(functionindex+1)+' = '+field.val());
				}
				break;
			}
		}
	}
}

function functionWindow () {
	if(fopen){
		fopen=false;
		controls.css('display','block');
		self.setTimeout(function(){
			controls.css('bottom','0px');
			graphcontrols.css('top','0px');
			self.setTimeout(function(){
				graphcontrols.css('display','none');
			},300);
			canvases.css('top','-'+canvases.height()+'px');
			controls.css('opacity','1');
			scrollDisable=false;
		},10);
	}else{
		fopen=true;
		graphcontrols.css('display','block');
		graphcontrols.css('top','-'+graphcontrols.height()+'px');
		controls.css('bottom','-'+controls.height()+'px');
		controls.css('opacity','0');
		canvases.css('top','0');
		self.setTimeout(function(){
			controls.css('display','none');
			graphcontrols.css('transition','0s');
			self.setTimeout(function(){
				graphcontrols.css('top','80px');
				self.setTimeout(function(){
					graphcontrols.css('transition','0.3s');
					if(mobile){
						onresize();
					}
				},50);
			},10);
		},300);
		//scrollDisable=true;
	}
}
function resetCanvas (id) {
	var ctx = $('#c'+id)[0].getContext("2d");
	a=ctx;
	ctx.clearRect(-5,-5,cwidth+5,cheight+5);
}
function plotall (o) {
	if(typeof(o)!='undefined'){
		if(o=='override'){
			var b=0;
			while($('#inputs>input').length>b){
				var val=$('#inputs>input').eq(b).val().toLowerCase();
				if($('#inputs>input').eq(b).val()!==''&&(val.indexOf('sin')!==-1||val.indexOf('cos')!=-1||val.indexOf('tan')!=-1)){
					plot(b, 'override');
				}
				b++;
			}
		}else if(o=='zoomoverride'){
			var b=0;
			while($('#inputs>input').length>b){
				if($('#inputs>input').eq(b).val()!==''){
					plot(b, 'override');
				}
				b++;
			}
		}
	}else{
		var b=0;
		while($('#inputs>input').length>b){
			if($('#inputs>input').eq(b).val()!==''){
				plot(b);
			}
			b++;
		}
	}
}

function plot (which, o) {

	if(typeof(which)!='undefined'){
		var index=which;
	}else{
		var index=functionindex;
	}
	if(typeof(o)!='undefined'){
		or=true;
	}else{
		or=false;
	}
	console.log(index, or);

	if($('#inputs>input').eq(index).val()!=fps[index]||or){

		startloading(index);
		self.setTimeout(function(){

			var b=0;
			nogo=false;
			if($('#inputs>input').eq(index).val()===''||($('#inputs>input').length-2<index&&or)){
				resetCanvas(index+1);
				fps[index]='';
			}else{
				while($('#inputs>input').length>b){
					if($('#inputs>input').eq(b).val()===''){
						nogo=true;
					}else if($('#inputs>input').eq(b).val().toLowerCase().indexOf('nderiv')!=-1&&!postderivplot){
						var targetf=getnDerivFunction($('#inputs>input').eq(b).val());
						console.log('target function = '+targetf);
						if(index==targetf){
							postderivplot=true;
							numtoderivplot=b;
							console.log('plotting '+b+' after this');
						}
					}else if(postderivplot){
						postderivplot=false;
					}

					b++;
				}
				if($('#inputs>input').length>10){
					nogo=true;
					msg('10 functies is het maximum');//Moet anders
				}

				color=colors[index];

				if(!nogo){
					$('#inputs').append("<div class='toggle' active='yes'>Y"+(index+2)+"</div><input type='text' placeholder='Y"+(index+2)+" = ' tabindex='1'><div class='remove' i='"+(index+1)+"'>×</div>");
					$('#inputs>input').eq($('#inputs>input').length-1).attr('disabled',mobile);

					$('#inputs>input').eq($('#inputs>input').length-2).css('background-color',color);
					$('#inputs>input').eq($('#inputs>input').length-2).css('color','white');

					$('#inputs>input').keyup(function(e){
						if(e.which==13){
							plot();
						}
						if(e.which==9){
							e.preventDefault();
						}
					});
					if(mobile){
						$('#inputs>input').click(function(){
							$('#inputs>input').css('box-shadow','inset 0px 0px 0px 200px rgba(255,255,255,0.5)');
							$('#inputs>input').eq(Number($(this).attr('placeholder').replace(/\D/g,''))-1).css('box-shadow','inset 0px 0px 0px 3px rgba(0,0,0,0.2)');

							functionindex=Number($(this).attr('placeholder').replace(/\D/g,''))-1;

							fp=$('#inputs>input').eq(functionindex).val();

							fp=fp.replace(/e/gi, "E");
							fp=fp.replace(/×/gi, "*");
							fp=fp.replace(/÷/gi, "/");
							if(angle=='deg'){
								fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
								fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
								fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
							}
							fp=fp.replace(/log/gi, "log10");
							fp=fp.replace(/pi/gi, "PI");
							fp=fp.replace(/π/gi, "PI");
							fp=fp.replace(/√/gi, "sqrt");
							fp=fp.replace(/x/gi, "(x)");

							fp=fp.toLowerCase();
							fp=fp.replace(/x/gi, "H");
						});
					}
					$('#inputs>input').focus(function(){
						$('#inputs>input').css('box-shadow','inset 0px 0px 0px 200px rgba(255,255,255,0.5)');
						$('#inputs>input').eq(Number($(this).attr('placeholder').replace(/\D/g,''))-1).css('box-shadow','inset 0px 0px 0px 3px rgba(0,0,0,0.2)');

						functionindex=Number($(this).attr('placeholder').replace(/\D/g,''))-1;

						fp=$('#inputs>input').eq(functionindex).val();

						fp=fp.replace(/e/gi, "E");
						fp=fp.replace(/×/gi, "*");
						fp=fp.replace(/÷/gi, "/");
						if(angle=='deg'){
							fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
							fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
							fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
						}
						fp=fp.replace(/log/gi, "log10");
						fp=fp.replace(/pi/gi, "PI");
						fp=fp.replace(/π/gi, "PI");
						fp=fp.replace(/√/gi, "sqrt");
						fp=fp.replace(/x/gi, "(x)");

						fp=fp.toLowerCase();
						fp=fp.replace(/x/gi, "H");
					});
					$('.toggle').eq($('#inputs>input').length-2).unbind('mousedown');
					$('.toggle').mousedown(function(){
						toggletoggle($(this).text());
					});
					$('.remove').eq($('#inputs>input').length-2).unbind('mousedown');
					$('.remove').mousedown(function(){
						removefun($(this).attr('i'));
					});
				}
				$('#inputs>input').eq($('#inputs>input').length-2).unbind('blur');
				$('#inputs>input').eq($('#inputs>input').length-2).blur(function(){
					plot();
				});

				id=index+1;
				resetCanvas(id);

				fp=$('#inputs>input').eq(index).val();
				fps[index]=fp;
				fp=fp.replace(/e/gi, "E");
				fp=fp.replace(/×/gi, "*");
				fp=fp.replace(/÷/gi, "/");
				if(angle=='deg'){
					fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
					fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
					fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
					fp=fp.replace(/sinh\(/gi, 'sinh((PI/180)*');
					fp=fp.replace(/cosh\(/gi, 'cosh((PI/180)*');
					fp=fp.replace(/tanh\(/gi, 'tanh((PI/180)*');
				}
				fp=fp.replace(/log/gi, "log10");
				fp=fp.replace(/pi/gi, "PI");
				fp=fp.replace(/π/gi, "PI");
				fp=fp.replace(/√/gi, "sqrt");
				fp=fp.replace(/x/gi, "(x)");

				fp=fp.toLowerCase();
				fp=fp.replace(/x/gi, "H");

				if(getnDerivFunction(fp)!='nonderiv'){

					nderiv(getnDerivFunction(fp, index));

				}else{
					x=minx;
					prevx=x;
					prevy=miny;

					h=minx;
					needspostpass=false;
					imarray=[];
					range=[];

					while(h<=maxx){
						h+=1/stepx;
						try{
							if(typeof(math.eval(fp.replace(/H/g,h)).im)==='undefined'||math.eval(fp.replace(/H/g,h)).re!==0){
								if(typeof(math.eval(fp.replace(/H/g,h)).re)!=='undefined'){
									eval('addval('+math.eval(fp.replace(/H/g,h)).re+', color, id)');
									needspostpass=true;
									imarray.push(math.eval(fp.replace(/H/g,h)).im);
									range.push(h);
								}else{
									eval('addval('+math.eval(fp.replace(/H/g,h))+', color, id)');
								}
							}else if(math.eval(fp.replace(/H/g,h)).re===0){
								// prevx=h;
								// prevy=math.eval(fp.replace(/H/g,h)).im;
								if(!needspostpass){
									eval('addval('+math.eval(fp.replace(/H/g,h)).im+', '+orange+', id)');
									gmsg('Orange line is imaginary part');
								}
							}

						}catch(err){
							if(err.message.indexOf('Parenthesis ) expected (char')!=-1&&works){
								$('#inputs>input').eq(functionindex).val($('#inputs>input').eq(functionindex).val()+')');
								works=false;
								plot();
							}else{
								if(!works){
									works=true;
									$('#inputs>input').eq(functionindex).val($('#inputs>input').eq(functionindex).val().substring(0,$('#inputs>input').eq(functionindex).val().length-1));
								}
								msg(err.message+'<br>On function F'+(functionindex+1));
							}
						}
					}
				}
				if(needspostpass){
					postPass(imarray,range);
				}
				if(postderivplot){
					console.log('postderivplotting '+numtoderivplot+' now');
					plot(numtoderivplot,'override');
				}
			}
			self.setTimeout(function(){
				stoploading(index);
			},30);
		},150);
	}else{
		console.log('superveel tijd bespaard :D');
	}
}

function postPass (yvars, xvars) {
	startloading(functionindex);
	var b=0;
	var color='transparent';
	while(yvars.length>b){
		h=xvars[b];
		if(b>0){
			color='orange';
			gmsg('Orange line is imaginary part');
		}
		addval(yvars[b], color, (functionindex + 1));
		b++;
	}
	stoploading(functionindex);
}

function addval (v, color, id) {
	if(typeof(color)=='undefined'){
		color='#000';
	}
	y=v;
	x=h;

	var ctx=$('#c'+id)[0].getContext('2d');

	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo((prevx+maxx)*stepx,(prevy-maxy)*stepy*-1);
	ctx.lineTo((x+maxx)*stepx,(y-maxy)*stepy*-1);
	ctx.clearRect(-5, -5, 6, cheight+5);
	prevx=x;
	prevy=y;
	ctx.stroke();
	ctx.closePath();
}
colors=['#e51c23','#9c27b0','#3f51b5','#03a9f4','#00bcd4','#009688','#259b24','#8bc34a','#cddc39','#ffeb3b','#00bcd4','#ffc107','#5677fc','#ff9800','#ff5722','#673ab7','#795548','#e91e63'];


function getMaxy () {

	np=[];

	var a=0;
	while($('#inputs>input').length-1>a){

		fp=$('#inputs>input').eq(a).val();
		fp=fp.replace(/e/gi, "E");
		fp=fp.replace(/×/gi, "*");
		fp=fp.replace(/÷/gi, "/");
		if(angle=='deg'){
			fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
			fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
			fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
		}
		fp=fp.replace(/log/gi, "log10");
		fp=fp.replace(/pi/gi, "PI");
		fp=fp.replace(/π/gi, "PI");
		fp=fp.replace(/√/gi, "sqrt");
		fp=fp.replace(/x/gi, "(x)");

		fp=fp.toLowerCase();
		fp=fp.replace(/x/gi, "H");

		x=minx;
		prevx=x;
		prevy=miny;

		h=minx;
		vp=[];

		while(h<=maxx){
			h+=1/stepx;
			try{
				vp.push(math.eval(fp.replace(/H/g,h)));
			}catch(err){
				msg(err.message);
			}
		}
		np.push(math.max(vp));
		np.push(math.min(vp));
		a++;
	}
	return [math.round(math.min(np),6), math.round(math.max(np))];
}

function openid (id) {
	if(id=='functions'){
		$('#butts>header>input').val('⇐ BACK TO CALCULATOR');
		$('#butts>header>input').attr('onclick','functionWindow()');
	}else{
		$('#butts>header>input').val('⇐ BACK TO FUNCTIONS');
		$('#butts>header>input').attr('onclick',"openid('functions')");
	}
	if(id=='numpad'){
		$('#butts').css('height','100%');
		if(mobilelayout){
			$('#inputs>input').css('opacity','1');
		}
	}else{
		$('#butts').css('height','100%');
	}
	$('#butts>div').css('display','none');
	$('#'+id).css('display','block');
}

function getnDerivFunction (fp) {
	if(fp.toLowerCase().indexOf('nderiv')!=-1){
		needspostpass=false;
		if(fp.indexOf('f10')!=-1){
			if(fp.length!=11){
				msg('nDeriv has to be alone');
				if($('#inputs>input').eq(10-1).length>0&&$('#inputs>input').eq(10-1).val!==''){
					return Number(fp.split('nderiv(f')[1].split(')')[0])-1;
				}else{
					msg('The targeted function is empty');
				}
			}
		}else{
			if(fp.indexOf('nderiv(f')==-1){
				msg('nDeriv has to have a function between its brackets');
			}else{
				if(fp.length!=10){
					msg('nDeriv has to be alone');
				}else{
				if($('#inputs>input').eq((Number(fp.split('nderiv(f')[1].split(')')[0]))-1).length>0&&$('#inputs>input').eq((Number(fp.split('nderiv(f')[1].split(')')[0]))-1).val()!==''){						return Number(fp.split('nderiv(f')[1].split(')')[0])-1;
					}else{
						msg('The targeted function is empty');
					}
				}
			}
		}
	}else{
		return 'nonderiv';
	}
}

function nderiv (targetindex, currentindex) {
	startloading(currentindex);
	if(typeof(currentindex)=='undefined'){
		var index=functionindex;
	}else{
		var index=currentindex;
	}

	fp=$('#inputs>input').eq(targetindex).val();
	fp=fp.replace(/e/gi, "E");
	fp=fp.replace(/×/gi, "*");
	fp=fp.replace(/÷/gi, "/");
	if(angle=='deg'){
		fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
		fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
		fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
	}
	fp=fp.replace(/log/gi, "log10");
	fp=fp.replace(/pi/gi, "PI");
	fp=fp.replace(/π/gi, "PI");
	fp=fp.replace(/√/gi, "sqrt");
	fp=fp.replace(/x/gi, "(x)");

	fp=fp.toLowerCase();
	fp=fp.replace(/x/gi, "H");

	x=minx;
	prevx=x;
	prevy=miny;

	h=minx;
	deltav=[];
	derivimarray=[];
	derivrange=[];
	reoldv=math.eval(fp.replace(/H/g,minx));
	imoldv=math.eval(fp.replace(/H/g,minx));
	needsderivpostpass=false;

	while(h<=maxx){
		h+=1/stepx;
		try{



			if(typeof(math.eval(fp.replace(/H/g,h)).im)==='undefined'||math.eval(fp.replace(/H/g,h)).re!==0){
				if(typeof(math.eval(fp.replace(/H/g,h)).re)!=='undefined'){
					deltav.push(math.eval(fp.replace(/H/g,h)).re-reoldv);
					reoldv=math.eval(fp.replace(/H/g,h)).re;
					needsderivpostpass=true;
					derivimarray.push(math.eval(fp.replace(/H/g,h)).im-imoldv);
					imoldv=math.eval(fp.replace(/H/g,h)).im;
					//derivrange.push(h);
					//imaginair en reeel
				}else{
					deltav.push(math.eval(fp.replace(/H/g,h))-reoldv);
					reoldv=math.eval(fp.replace(/H/g,h));
					derivimarray.push(0);
					//niet-imaginair
				}
			}else if(math.eval(fp.replace(/H/g,h)).re==0){
				//alleen imaginair
				if(!needsderivpostpass){
					deltav.push(math.eval(fp.replace(/H/g,h)).im-imoldv);
					imoldv=math.eval(fp.replace(/H/g,h)).im;
					//derivrange.push(h);
				}
			}



		}catch(err){
			msg(err.message);
		}
	}

	var b=0;
	h=minx;
	while(deltav.length>b){
		h+=1/stepx;
		addval((deltav[b]*stepy), color, (index + 1));
		console.log('plotted derivative on '+(index + 1));
		b++;
	}
	var b=0;
	h=minx;
	while(derivimarray.length>b){
		h+=1/stepx;
		if(derivimarray[b]!=0){
			addval((derivimarray[b]*stepy), 'orange', (index + 1));
			console.log('plotted orange derivative on ' (index + 1));
		}
		b++;
	}

	fp=$('#inputs>input').eq(functionindex).val();
	fp=fp.replace(/e/gi, "E");
	fp=fp.replace(/×/gi, "*");
	fp=fp.replace(/÷/gi, "/");
	if(angle=='deg'){
		fp=fp.replace(/sin\(/gi, 'sin((PI/180)*');
		fp=fp.replace(/cos\(/gi, 'cos((PI/180)*');
		fp=fp.replace(/tan\(/gi, 'tan((PI/180)*');
	}
	fp=fp.replace(/log/gi, "log10");
	fp=fp.replace(/pi/gi, "PI");
	fp=fp.replace(/π/gi, "PI");
	fp=fp.replace(/√/gi, "sqrt");
	fp=fp.replace(/x/gi, "(x)");

	fp=fp.toLowerCase();
	fp=fp.replace(/x/gi, "H");
	stoploading(currentindex);
}

function showloading () {
	canvasLOAD.css('opacity','1');
	vida=0;
	loading=self.setInterval(function(){
		img=$('.hid').eq(vida)[0];
		ctxLOAD.clearRect(-5,-5,canvasLOAD.width()+5,canvasLOAD.height()+5);
		ctxLOAD.drawImage(img,0,-1*canvasLOAD.height()/2,canvasLOAD.width(),canvasLOAD.height()*2);
		vida++;
		if(vida==119){
			vida=0;
		}
	},(1000/40));
}
function hideloading () {
	canvasLOAD.css('opacity','0');
	clearInterval(loading);
	vida=0;
}

function startloading (index) {
	loading=true;
	$('.toggle').eq(index).append('<div></div>');

	$('.toggle').eq(index).css('color','transparent');
	self.setTimeout(function(){
		$('.toggle>div').eq(index).css('background-size','50% 50%');
	},10);
}
function stoploading (index) {
	loading=false;
	$('.toggle>div').eq(index).css('background-size','0% 0%');
	$('.toggle').eq(index).css('color','white');
	self.setTimeout(function(){
		$('.toggle>div').eq(index).remove();
	},300);

}

function drawGrid () {
	resetCanvas('GRID');

	var offsetX=Number('.'+((cwidth/stepx)/(maxy/2)).toFixed(20).split('.')[1]);
	console.log(offsetX);

	var a=0;
	while((cwidth/stepx)/(maxy/2)>=a){
		a++;
		ctxGRID.beginPath();
		ctxGRID.strokeStyle='#eee';
		ctxGRID.lineWidth=1;
		ctxGRID.moveTo(a*stepx*(maxy/2)-(Math.ceil((cwidth/stepx)/(maxy/2)/2)*stepx*(maxy/2)-cwidth/2),0);
		ctxGRID.lineTo(a*stepx*(maxy/2)-(Math.ceil((cwidth/stepx)/(maxy/2)/2)*stepx*(maxy/2)-cwidth/2),cheight);
		ctxGRID.stroke();
	}
	var a=0;
	while((cheight/stepy)/(maxy/2)>=a){
		a++;
		ctxGRID.beginPath();
		ctxGRID.strokeStyle='#eee';
		ctxGRID.lineWidth=1;
		ctxGRID.moveTo(0,a*stepy*(maxy/2));
		ctxGRID.lineTo(cwidth,a*stepy*(maxy/2));
		ctxGRID.stroke();
	}
}