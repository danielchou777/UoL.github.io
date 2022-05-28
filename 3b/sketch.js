/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;

var floorPos_y;
var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;
var isFound = false;

var treePos_x;
var treePos_y;
var canyon;
var collectable;
var mountain;
var cloud1;
var cloud2;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

    treePos_x = 800;
	treePos_y = 432;

	canyon = {
		x_pos: 150,
		width: 100 
	}

	collectable = {
		x_pos: 100, 
		y_pos: 405, 
		size: 50
	}

	mountain = {
		x_pos: 400,
		y_pos: 182,
		width: 400 
	}

	cloud1 = { 
		x_pos: 220,
		y_pos: 100,
		width: 50
	}

    cloud2 = { 
		x_pos: 720,
		y_pos: 70,
		width: 60
	}
}


function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    //Cloud1
	fill(255, 255, 255);
	ellipse(cloud1.x_pos, cloud1.y_pos, cloud1.width*7/5, cloud1.width*68/50);
	ellipse(cloud1.x_pos-30, cloud1.y_pos, cloud1.width, cloud1.width);
	ellipse(cloud1.x_pos+30, cloud1.y_pos, cloud1.width, cloud1.width);
    
    //Cloud2
	fill(255, 255, 255);
	ellipse(cloud2.x_pos, cloud2.y_pos, cloud2.width*7/5, cloud2.width*68/50);
	ellipse(cloud2.x_pos-30, cloud2.y_pos, cloud2.width, cloud2.width);
	ellipse(cloud2.x_pos+30, cloud2.y_pos, cloud2.width, cloud2.width);


	//Mountain
	beginShape();
	fill(30 ,144, 225, 150);
	vertex(mountain.x_pos, mountain.y_pos + 250)
	vertex(mountain.x_pos + mountain.width, mountain.y_pos + 250);
	vertex(mountain.x_pos + 150 + (1/4 * mountain.width), mountain.y_pos);
	vertex(mountain.x_pos + 150, mountain.y_pos);
	endShape();

	beginShape();
	fill(255, 255, 255, 240);
	vertex(mountain.x_pos + 250, mountain.y_pos);
	vertex(mountain.x_pos + 150, mountain.y_pos);
	vertex(mountain.x_pos + 120, mountain.y_pos+50);
	vertex(mountain.x_pos + 280, mountain.y_pos+50);
	endShape();

    //Tree
    //Tree
	//trunk
	fill(139, 69, 19);
	rect(treePos_x, treePos_y - 105, 40, 105);
	//leaves
	fill(34, 139, 34);
	// triangle(800, 327, 940, 327, 870, 227);
	triangle(treePos_x - 50, treePos_y - 105, treePos_x + 90, treePos_y - 105, treePos_x + 20, treePos_y - 205);
	// triangle(815, 267, 925, 267, 870, 197);
	triangle(treePos_x - 35, treePos_y - 165, treePos_x + 75, treePos_y - 165, treePos_x + 20, treePos_y - 235);

    //draw the canyon
    //Canyon
	fill(100, 155, 255);
	rect(canyon.x_pos, 432, canyon.width, 144);
	fill(65 ,105, 255);
	rect(canyon.x_pos, 472, canyon.width, 104);

    //falling down the canyon 
    if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width && gameChar_y >= floorPos_y)
    {   
        isPlummeting = true;
    }

    if(isPlummeting == true)
    {
        gameChar_y += 10;
    }

    // Collectable
    if(isFound == false)
    {
        noStroke();
        fill(218, 112, 240);
        ellipse(collectable.x_pos, collectable.y_pos, collectable.size - 27, collectable.size)
        fill(100, 155, 255);
        triangle(collectable.x_pos, collectable.y_pos - 11, collectable.x_pos -10, collectable.y_pos-30,collectable.x_pos+10, collectable.y_pos-30);

    }

    if(dist(gameChar_x, gameChar_y - 20, collectable.x_pos, collectable.y_pos) < 30)
    {
        isFound = true;
    }
	//the game character
	if(isLeft && isFalling)
	{
		// body
		fill(120);
		ellipse(gameChar_x, gameChar_y - 22, 30, 35);
		// head
		stroke(0);
		strokeWeight(0)
		fill(120);
		beginShape();
		vertex(gameChar_x + 13, gameChar_y - 68);
		vertex(gameChar_x + 12, gameChar_y - 37);
		vertex(gameChar_x - 15, gameChar_y - 37);
		vertex(gameChar_x - 14, gameChar_y - 68);
		endShape(CLOSE);
		// eyes
		fill(255, 255, 255);
		ellipse(gameChar_x - 14, gameChar_y - 53, 8, 13);
		ellipse(gameChar_x - 8, gameChar_y - 53, 12, 15);
		strokeWeight(3);
		point(gameChar_x - 10, gameChar_y - 56);
		strokeWeight(2);
		point(gameChar_x - 16, gameChar_y - 56);
		// hands
		stroke(90);
		strokeWeight(0.5);
		fill(120);
		ellipse(gameChar_x, gameChar_y - 32, 8, 8);
		noStroke();
		rect(gameChar_x-5, gameChar_y -30, 10, 5);

		strokeWeight(1);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		// body
		fill(120);
		ellipse(gameChar_x, gameChar_y - 22, 30, 35);
		// head
		stroke(0);
		strokeWeight(0)
		fill(120);
		beginShape();
		vertex(gameChar_x + 15, gameChar_y - 68);
		vertex(gameChar_x + 14, gameChar_y - 37);
		vertex(gameChar_x - 13, gameChar_y - 37);
		vertex(gameChar_x - 12, gameChar_y - 68);
		endShape(CLOSE);
		// eyes
		fill(255, 255, 255);
		ellipse(gameChar_x + 14, gameChar_y - 52, 8, 13);
		ellipse(gameChar_x + 8, gameChar_y - 51, 12, 15);
		strokeWeight(3);
		point(gameChar_x + 10, gameChar_y - 55);
		strokeWeight(2);
		point(gameChar_x + 16, gameChar_y - 55);
		// hands
		stroke(90);
		strokeWeight(0.5);
		fill(120);
		ellipse(gameChar_x, gameChar_y - 32, 8, 8);
		noStroke();
		rect(gameChar_x-5, gameChar_y -30, 10, 5);

		strokeWeight(1);

	}
	else if(isLeft)
	{
		// add your walking left code
		// legs
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 6, 30, 8);
		// body
		fill(120);
		ellipse(gameChar_x, gameChar_y - 22, 30, 35);
		// head
		stroke(0);
		strokeWeight(0)
		fill(120);
		beginShape();
		vertex(gameChar_x + 13, gameChar_y - 68);
		vertex(gameChar_x + 12, gameChar_y - 37);
		vertex(gameChar_x - 15, gameChar_y - 37);
		vertex(gameChar_x - 14, gameChar_y - 68);
		endShape(CLOSE);
		// eyes
		fill(255, 255, 255);
		ellipse(gameChar_x - 14, gameChar_y - 53, 8, 13);
		ellipse(gameChar_x - 8, gameChar_y - 53, 12, 15);
		strokeWeight(3);
		point(gameChar_x - 10, gameChar_y - 54);
		strokeWeight(2);
		point(gameChar_x - 16, gameChar_y - 53);
		
		strokeWeight(1);
	}
	else if(isRight)
	{
		// legs
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 6, 30, 8);
		// body
		fill(120);
		ellipse(gameChar_x, gameChar_y - 22, 30, 35);
		// head
		stroke(0);
		strokeWeight(0)
		fill(120);
		beginShape();
		vertex(gameChar_x + 15, gameChar_y - 68);
		vertex(gameChar_x + 14, gameChar_y - 37);
		vertex(gameChar_x - 13, gameChar_y - 37);
		vertex(gameChar_x - 12, gameChar_y - 68);
		endShape(CLOSE);
		// eyes
		fill(255, 255, 255);
		ellipse(gameChar_x + 14, gameChar_y - 53, 8, 13);
		ellipse(gameChar_x + 8, gameChar_y - 53, 12, 15);
		strokeWeight(3);
		point(gameChar_x + 10, gameChar_y - 54);
		strokeWeight(2);
		point(gameChar_x + 16, gameChar_y - 55);

		strokeWeight(1);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		// body
		fill(120);
		ellipse(gameChar_x, gameChar_y - 22, 30, 35);
		// head
		stroke(0);
		strokeWeight(0)
		fill(120);
		beginShape();
		vertex(gameChar_x + 16, gameChar_y - 68);
		vertex(gameChar_x + 20, gameChar_y - 37);
		vertex(gameChar_x - 17, gameChar_y - 37);
		vertex(gameChar_x - 18, gameChar_y - 68);
		endShape(CLOSE);
		// eyes
		fill(255, 255, 255);
		ellipse(gameChar_x - 5.7, gameChar_y - 51, 12, 15);
		ellipse(gameChar_x + 4.7, gameChar_y - 55, 14, 17);
		strokeWeight(3);
		point(gameChar_x - 4.7, gameChar_y - 55);
		strokeWeight(4);
		point(gameChar_x + 3.7, gameChar_y - 56);
		// hands
		noStroke();
		fill(120);
		ellipse(gameChar_x + 16, gameChar_y - 31, 7, 7);
		ellipse(gameChar_x - 16, gameChar_y - 29, 9, 8);
		
		strokeWeight(1);
	}
	else
	{
		// add your standing front facing code
		// legs
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 6, 30, 8);
		// body
		fill(120);
		ellipse(gameChar_x, gameChar_y - 22, 30, 35);
		// head
		stroke(0);
		strokeWeight(0)
		fill(120);
		beginShape();
		vertex(gameChar_x + 16, gameChar_y - 68);
		vertex(gameChar_x + 20, gameChar_y - 37);
		vertex(gameChar_x - 17, gameChar_y - 37);
		vertex(gameChar_x - 18, gameChar_y - 68);
		endShape(CLOSE);
		// eyes
		fill(255, 255, 255);
		ellipse(gameChar_x - 5.7, gameChar_y - 51, 12, 15);
		ellipse(gameChar_x + 4.7, gameChar_y - 55, 14, 17);
		strokeWeight(3);
		point(gameChar_x - 4.7, gameChar_y - 53);
		strokeWeight(4);
		point(gameChar_x + 3.7, gameChar_y - 53);
		
		strokeWeight(1);
	}
    
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isLeft == true)
	{
		gameChar_x -= 2;
	}

	if(isRight == true)
	{
		gameChar_x += 2;
	}

	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 1;
		isFalling = true;
	}
	else
	{
		isFalling = false;
	}

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	if(keyCode == 37)
	{
		isLeft = true;
	}

	if(keyCode == 39)
	{
		isRight = true;
	}

	if(keyCode == 32)
	{
        console.log(gameChar_y);
		if(gameChar_y == floorPos_y){             
			gameChar_y -= 100;
		}
	}
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	if(keyCode == 37)
	{
		isLeft = false;
	}

	if(keyCode == 39)
	{
		isRight = false;
	}
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
v