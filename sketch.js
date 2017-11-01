
var w = 0;
var h = 0;
var windslider = 0;
var rainspeed = 4;
var notefq = 900;
var osc;
var playing = false;
var rain = [];
var rainCount = 100;
var raindir = 0;
var winddirectionX = 0;
var winddirectionY = 10;
var boxRotation = 90;
var boxX = 200;
var ellipseXpos = 0;
var ellipseYpos = 0;
var currposX = 0;
var currposY = 0;
var gravity = 0.5;
var speed = 0;
var dist1 = 0;
var noteBox = 50;
var x = 400;
var y = 200;
var currX = 0;
var currY = 0;
var currCity = 0;
var windir = 0;
var newWind = 1;
var newWinddeg = 0;
var DimX = 30;
var DimY = 30;
//var gravity = .08;
var wind = 0;
var speedY = 1;
var speedX = 0;
var noteWidth = 0;
var inlocation = true;
var maxSpeed = 9;
var minSpeed = -9;

var currnote = 0;
var particles = [];
var tiles = [];
var pushers = [];
var drops = [];
var cities = ['Manchester','tel aviv','istanbul', 'gaza','haifa',
,'baltimore', 'Kochi', 'Taipei', 'Juneau', 'Cologne',
'Glasgow', 'Tokyo', 'Amsterdam', 'Seattle', 'Brussels',
'Hong Kong', 'New York', 'Bergen', 'New Orleans',
'Singapore', 'Vancouver', 'Kirkwall','jerusalem'	, 'osaka', 'london','barcelona'];

var opacity = 255;

//var animation = [];
var animation;

function setup() {

	frameRate(60); //frame rate of sketch


  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(notefq);
  osc.amp(0);
  osc.start();

	w = windowWidth;
	h = windowHeight;
	currposX = windowWidth/2
	canvas = createCanvas(w, h);

	noStroke();
  background(0);


	for(let i = 0; i < 7; i ++){
		tiles.push(new Tile( (i)*w/7, h-30, (w/7), 90));

	}

	for (var i = 0; i < 200; i++) {
	    drops[i] = new Drop();
	  }



}

function draw() {



  background(0,0,0,200);

	for (var i = 0; i < drops.length; i++) {
			drops[i].fall();
			drops[i].show();
			drops[i].windDir();

			var mappedwind = map(newWind, 0, 3, 0, 14);

			if (newWinddeg > 180){
				mappedwind = -mappedwind;
			}
			drops[i].xspeed = mappedwind;
			drops[i].dirr = mappedwind;
		}

	console.log(mappedwind);


	noteWidth = (w/7);
	if ( (y >= (h-noteBox/2)) ){
		currnote = Math.ceil(x/noteWidth);
	}

	fill(255);
	text(cities[currCity] , 20, 20, 200, 100); // Text wraps within text box
	text("wind speed" + " " + newWind, 20, 40, 200, 100); // Text wraps within text box
	text("wind deg" + " " + newWinddeg, 20, 60, 200, 100); // Text wraps within text box

  ellipse(x,y,DimX);

  speedY = speedY + gravity;
	speedX = speedX + wind;


  y = y + speedY;
  x = x + speedX;

	if (speedX > maxSpeed){
		speedX = maxSpeed;
	}

	if (speedX < minSpeed){
		speedX = minSpeed;
	}







	for(let i = 0; i < 7; i++){
		tiles[i].draw(x, y);
		tiles[i].update(i);

			if(currnote  == i + 1){
				if(tiles[i].shouldDraw== true){
					//notefq = currnote*2
					tiles[i].opacity = 255;
					//console.log("Tile number " + (i+1) + " was hit");
					tiles[i].shouldDraw = false;
					// currCity = Math.round(random(0,17));
					// //console.log(currCity);
					// console.log(cities[currCity]);
					//osc.freq(notefq*(tiles[i]*100));

					if ( (speedY > 0) && (y >= height-DimX/2) ){
						currCity = Math.round(random(0,23));
						//console.log(currCity);
						//console.log(cities[currCity]);
						loadJSON("https://api.openweathermap.org/data/2.5/weather?q="
					 + cities[currCity] +
					 "&appid=d21e79452f4461671f1ccf2a209d48c3", jsonLoaded);
 //console.log(currnote);
							// ramp amplitude to 0.5 over 0.1 seconds
								if (currnote == 1){
									osc.freq(261.626);
									osc.amp(0.9, 0.09);
									//console.log("hit1")
								}
								if (currnote == 2){
									osc.freq(293.665);
									osc.amp(0.9, 0.09);
									// console.log("hit2")

								}
								if (currnote == 3){
									osc.freq(329.628);
									osc.amp(0.9, 0.09);
									// console.log("hit3")

								}
								if (currnote == 4){
									osc.freq(349.228);
									osc.amp(0.9, 0.09);
									// console.log("hit4")

								}
								if (currnote == 5){
									osc.freq(391.995);
									osc.amp(0.9, 0.09);
									// console.log("hit5")

								}
								if (currnote == 6){
									osc.freq(440.000);
									osc.amp(0.9, 0.09);
									// console.log("hit6")

								}
								if (currnote == 7){
									osc.freq(493.883);
									osc.amp(0.9, 0.09);
									// console.log("hit7")

								}

						}
						if ( (speedY < 0) && (y <= height) ){
							// console.log("off");
							osc.amp(0, 0.5);
						}
					}

			}

			//wind = map(mouseX,0,width,-1,1);
			//wind = map
			wind = map(newWind, 0, 3,-0.5, 0.5);
			if (newWinddeg > 180){
				wind = -wind;
			}

	}






  if (y >= height-DimX/2){
		y = y-2;
    speedY = -(speedY+.4);
  }

  if (y <= DimX/2){
  	speedY = -(speedY+.4);
  }

  if (x >= width - DimX/2){
  	speedX = -(speedX+20);
		//x = width;
  }

  if (x <= 0+DimX/2){
  speedX = -(speedX-20);
	//x = 0;
  }
}



function updateText() {
  nameP.html(nameInput.value());
}

function jsonNotLoaded(er) {
	//console.log(er);
}

function jsonLoaded(newdata) {
  //console.log(newdata);
   	newWind = newdata.wind.speed;
	 	newWinddeg = newdata.wind.deg;
	//console.log(newWind, newWinddeg);



}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    gravity = gravity - .2;
  } else if (keyCode === DOWN_ARROW) {
    gravity = gravity + .2;
  } else if (keyCode === LEFT_ARROW) {
    wind = wind - .005;
  }	else if (keyCode === RIGHT_ARROW) {
    wind = wind + .005;
  }

}
