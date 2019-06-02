<html lang='nl'>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-35913371-8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-35913371-8');
    </script>
	<meta charset='utf-8' />
	<title>Ruurd Bijlsma - Portfolio</title>
	<meta name='theme-color' content='#4674C7'>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<meta name='mobile-web-app-capable' content='yes'>
	<link rel='icon' sizes='192x192' href='img/favicon.png'>
	<link rel='shortcut icon' type='image/png' href='img/favicon.png'><!-- Favicon moet 192x192 zijn -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500,700,900' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' href='main.css'>
	<link rel="stylesheet" href="fa/css/font-awesome.min.css">
	<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
	<script src='script.js' type='text/javascript'></script>
	<script src='gol.js' type='text/javascript'></script>
</head>
<body>

	<nav id='menu'>
		<a active href='#p1'>Hoofdpagina</a>
		<a href='#p2'>Wie ben ik</a>
		<a href='#p3'>Wat kan ik</a>
		<a href='#p4'>Wat wil ik</a>
		<a href='#p5'>Projecten</a>
		<a href='#p6'>Contact</a>
	</nav>
	<div id='page1'>
		<canvas id='trailCanvas' width='1920' height='800'></canvas>
		<canvas id='golCanvas' width='1920' height='800'></canvas>
		<div id='controls'>
			<input type='button' onclick='nextGeneration();redrawBoard();' value='Stap'>
			<input min="1" type='number' step='10' placeholder="Snelheid (lager is sneller)" id='speedVal' value='30'>
			<input type='button' onclick='start()' value='Start'>
			<input type='button' onclick='stop()' value='Stop'>
			<input type='number' step='5' min="2" placeholder="Grid size" id='gridVal' value='20'>
			<input type='button' onclick='newBoard();stop()' value='New game'>
			<select id='presetSelector' onchange=setPreset()>
				<option>Selecteer een waarde</option>
				<option>Horizontale lijn</option>
				<option>3 Horizontale lijnen</option>
				<option>Verticale lijn</option>
			</select>
			<input type='button' onclick='toggleGrid()' value='Grid aan/uit'>
			<input type='button' onclick='toggleTrail()' value='Trail aan/uit'>

		</div>
		<div id='background-frame'>
			<div id='background'></div>
		</div>
		<div id='lichtzwart'></div>
		<img src='img/sick.png' onload='wissel()'>
		<div id='titel'>
			<header>Portfolio van Ruurd Bijlsma</header>
			<p>
				Op deze pagina staat mijn portfolio van NHL Informatica. In dit portfolio staan mijn afgemaakte opdrachten en informatie over mij. Er staat ook informatie over projecten die ik heb gemaakt en waar ik bezig mee ben. In het contact gedeelte kunt u een mail sturen om contact op te nemen. 
			</p>
			<div id='socialicons'>
				<a href="https://plus.google.com/u/0/+RuurdBijlsma" target="_blank">
					<i class="fa fa-google-plus"></i>
				</a>
				<a href="https://www.facebook.com/ruurd.bijlsma" target="_blank">
					<i class="fa fa-facebook"></i>
				</a>
				<a href="https://github.com/ruurdbijlsma" target="_blank">
					<i class="fa fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/profile/view?id=AAIAABCkFqYBvHw653Uo6DfcXo-QSdW_Kt8661k&trk=nav_responsive_tab_profile_pic" target="_blank">
					<i class="fa fa-linkedin "></i>
				</a>
			</div>
			<a id='aboutbutton' href='#p2'>
				Wie ben ik
				<i class="fa fa-long-arrow-right"></i>
			</a>
		</div>
	</div>

	<div id='page2'>
		<div class='wrap'>
			<div id='wiskunde'>
				<input type='text' placeholder='Formule' id='input' onkeyup="checkenter(event)">
				<table id='output'>
				</table>
			</div>
			<div id='f1' class='foto'></div>
			<a href='#p2' class='bigtext'>
				Wie ben ik
			</a>
			<div class='hr'></div>
			<div id='omcard' class='card'>
				<ul>
					<li>Naam: <p selectable>Ruurd Bijlsma</p></li>
					<li>Mail: <a selectable href='mailto:ruurdbijlsma@gmail.com'>ruurdbijlsma@gmail.com</a></li>
					<li>Telefoon: <p selectable>0658648550</p></li>
					<li>School: <p selectable>NHL Hogeschool</p></li>
					<li>Klas: <p selectable>I1b Informatica</p></li>
					<li>Mentor: <p selectable>Fiona Sariedine</p></li>
				</ul>
			</div>
			<article>
				<p>Ik ben Ruurd Bijlsma, ik woon in Sneek. Ik ben graag bezig met hobby projecten zoals web apps of desktop apps. Ik ben al zo'n 3 jaar bezig met web development.</p><br>
				<p>Ik ben creatief, ik kan zelfstandig werken en ik ben een problem solver. Ik ben informatica gaan studeren, omdat ik deze vaardigheden hier kan toepassen en verbeteren. Deze opleiding staat me ook toe om later ideeën te bedenken en om producten te ontwikkelen.</p><br>
				<p>Ik heb een nadenkende leerstijl en ik vertrouw op mijn gezonde verstand. Hierdoor kan ik goede code schrijven en problemen snel oplossen op een slimme manier. Ik heb ook vaak ideeën voor leuke projecten, daarom heb ik nu ook al 110 verschillende projecten gemaakt als hobby, ik heb dan een idee die ik wil testen en maak er een project van.</p>
			</article>
		</div>
	</div>

	<div id='page3'>
		<div class='wrap'>
			<div class='foto' id='f2'></div>
			<a href='#p3' class='bigtext'>
				Wat kan ik
			</a>
			<div class='hr'>
			</div>
			<div id='skills' class='card'>
				<div class='skill'><p>PHP</p><div value='73'></div></div>
				<div class='skill'><p>CSS</p><div value='92'></div></div>
				<div class='skill'><p>JS</p><div value='93'></div></div>
				<div class='skill'><p>C#</p><div value='77'></div></div>
				<div class='skill'><p>C++</p><div value='60'></div></div>
				<div class='skill'><p>Haskell</p><div value='61'></div></div>
				<div class='skill'><p>Design</p><div value='75'></div></div>
				<div class='skill'><p>Graphics</p><div value='65'></div></div>
			</div>
			<div id='experience'>
				<h1>Ervaring</h1>
				<div id='exp1'>
					<h2>116</h2>
					<p>Web Projecten</p>
				</div>
				<div id='exp2'>
					<h2>12</h2>
					<p>Desktop Apps</p>
				</div>
				<div id='exp3'>
					<h2>63</h2>
					<p>Photoshop</p>
				</div>
				<div id='exp4'>
					<h2>83</h2>
					<p>3D Graphics</p>
				</div>
			</div>
			<article>
				<p>
					Ik heb al zo'n 3 jaar ervaring met web development. Dat is dan ook een van mijn sterkste punten. Ik heb al zo'n 110 projecten gemaakt, onder andere een roosterprogramma voor school, een muziek speler in de browser (die ik dagelijks gebruik) en een grafische calculator. Er zijn ook nog veel vaardigheden waar ik op kan verbeteren, maar daar studeer ik natuurlijk informatica op de NHL.
				</p>
			</article>
		</div>
	</div>

	<div id='page4'>
		<div class='wrap'>
			<div class='foto' id='f3'></div>
			<a href='#p4' class='bigtext'>
				Wat wil ik
			</a>
			<div class='hr'>
			</div>
			<div id='funcard' class='card'>
				<h2>Ik zoek een baan als:</h2>
				<ul>
					<li>Functie: <p>Programmeur</p></li>
					<li>Type: <p>Creatief</p></li>
					<li>Locatie: <p>Midden Nederland</p></li>
					<li>Bedrijf: <p>Groter bedrijf</p></li>
				</ul>
			</div>
			<article>
				<p>
					Ik wil in een baan gewoon leuk werk doen waar ik genoeg mee verdien om van te leven. Het liefst is deze baan bij een groot bedrijf waar men projectmatig werkt, met goede collega's om mee samen te werken. Ik zoek naar afwisselend werk en een baan waar ik creativiteit kan toepassen.
				</p>
				<p>
					Ik zoek naar een baan in midden Nederland of misschien het buitenland, dit doe ik omdat ik graag een baan heb waar ik niet steeds hetzelfde doe, hier zou ik gek van worden. In grotere steden zijn meer bedrijven die unieke dingen doen waar ik werk zou kunnen vinden en ik aan verschillende soorten projecten kan werken. Mijn voorkeur ligt wel bij Nederland, zodat ik dan nog makkelijk op bezoek bij familie en ik ken de taal al.
				</p>
			</article>
		</div>
	</div>

	<div id='page5'>
		<div class='wrap'>
			<div class='foto' id='f4'></div>
			<a href='#p5' class='bigtext'>
				Projecten
			</a>
			<div class='hr'></div>
			<div id='projects'>
				<a class='card' target='_blank' href='https://github.com/jornvanwier/RacegameInformaticaNHL'>
					<div class='projimg' style="background-image:url(img/projRace.png);"></div>
					<div class='projtitle'>Project Racegame</div>
					<div class='projdesc'>Dit is het eerste project dat ik op de studie Informatica heb gemaakt. Het is een 2d race spel waar je met 2 spelers rond een circuit moet rijden en op je brandstof moet letten.</div>
				</a>
				<a class='card' target='_blank' href='https://ruurd.dev/Calculator'>
					<div class='projimg' style="background-image:url(img/calc.png);"></div>
					<div class='projtitle'>Grafische Calculator</div>
					<div class='projdesc'>Een grafische calculator die zo veel mogelijk kan dat een echte grafische calculator kan. Hij kan grafieken plotten (ook het complexe gedeelte), hij kan de afgeleide van een grafiek plotten en hij kan natuurlijk ook normale berekeningen uitvoeren.</div>
				</a>
				<a class='card' target='_blank' href='https://github.com/RuurdBijlsma/Music'>
					<div class='projimg' style="background-image:url(img/music.png);"></div>
					<div class='projtitle'>Desktop Muziekspeler</div>
					<div class='projdesc'>Dit is een hobby project waar ik de laatste tijd mee bezig ben geweest. Ik maak deze applicatie omdat ik vind dat er geen goede muziekspelers te krijgen zijn. Het is gemaakt met als universele Windows 10 app in C#.</div>
				</a>
				<a class='card'>
					<div class='projimg' style="background-image:url(img/pfeg.png);"></div>
					<div class='projtitle'>Pillarfight</div>
					<div class='projdesc'>Pillarfight is een first-person shooter dat ik samen met 4 anderen heb gemaakt als eindproject voor informatica op de middelbare school.</div>
				</a>
				<a class='card href' onclick="toggleGol()">
					<div class='projimg' style="background-image:url(img/gol.png);"></div>
					<div class='projtitle'>Game of life</div>
					<div class='projdesc'>Ik heb een klein spelletje in deze website verstopt, als je game of life typt, of op deze knop klikt kan je het spelen. Dit is niet het enige wat verstopt is op deze site!</div>
				</a>
				<a class='card' target='_blank' href='https://youtu.be/T6pviv1pVfo'>
					<div class='projimg' style="background-image:url(img/domotica.jpg);"></div>
					<div class='projtitle'>Domotica</div>
					<div class='projdesc'>Dit is een project van school, het doel was om iets te automatiseren met een Arduino en RF zenders/ontvangers. Wij hebben een machine gemaakt die een biertje ophaalt en open maakt.</div>
				</a>
				<a class='card' target='_blank' href='https://github.com/RuurdBijlsma/Hex'>
					<div class='projimg' style="background-image:url(img/hex.png);"></div>
					<div class='projtitle'>Hex</div>
					<div class='projdesc'>Hex is een opdracht voor algoritmiek, het doel was om een programma te maken dat zelf het spel hex kan spelen. Ik heb gebruik gemaakt van minimax met Alpha-beta pruning om uit te zoeken welke zet hij moet maken en ik heb 2 verschillende eval algoritmes geïmplementeerd.</div>
				</a>
				<a class='card'>
					<div class='projimg' style="background-image:url(img/website.png);"></div>
					<div class='projtitle'>Staazje.frl</div>
					<div class='projdesc'>Dit is een website om stages te beheren voor studenten op de NHL.</div>
				</a>
				<input type='button' id='moreProj' onclick='showMore()' value='Meer tonen'>
				<div style="display:none"></div>
				<?php
				$dirs = array_filter(glob('*'), 'is_dir');
				foreach($dirs as &$dir){
					if($dir!="img" && $dir!="fa" && $dir!="SocketShutdown"){
						echo "<a class='card web' target='_blank' href='./$dir'>
						<div class='webtitle'>$dir</div>
					</a>";
				}
			}
			?>
			</div>
		</div>
	</div>
</div>

<div id='page6'>
	<div class='wrap'>
		<div class='foto' id='f5'></div>
		<a href='#p6' class='bigtext'>
			Contact
		</a>
		<div class='hr'></div>
		<div class='card'>
			<h2>Stuur me een bericht!</h2>
			<input tabindex='2'type='email' placeholder='Email adres zender'><input type='email' placeholder='Email adres ontvanger'>
			<textarea onkeyup="checkGol(event)" tabindex='2'></textarea>
			<input type='button' value='Verzenden' onclick='sendMsg()' id='btn'>
		</div>
		<h2>Locatie</h2>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.183636094473!2d5.647448315993594!3d53.03503690568396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8f1d6a2c08db3%3A0x736c505bdebd0e0d!2sHemdijk+3%2C+8601+XH+Sneek!5e0!3m2!1sen!2snl!4v1444847109720" width="1010" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
	</div>
</div>
</body>
</html>
