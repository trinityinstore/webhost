

function setup() {
	createCanvas(500, 500);



}

function flower (x,y,stem,top,tall,r,g,b){
	fill(0,255,0);
	rectMode(CENTER);
	rect(x,(y+(tall/2)),stem,tall);
	fill(r,g,b);
	ellipse(x,y,top,top,);	
	
}

function draw() {

	background(50,50,100);
		
	flower (100,300,20,59,100,255,0,0);
	flower (200,250,20,80,120,0,255,0);
	flower (300,300,20,40,140,0,0,255);
	flower (400,300,20,59,100,255,0,0);
	flower (500,300,20,59,100,255,0,0);
	
}