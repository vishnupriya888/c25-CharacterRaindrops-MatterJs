var object, objects;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;

function generateString(length){
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz"
  var charactersLength = characters.length;

  for(var i = 0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  objects = [];
}

function draw() {
  background(0,100);  

	Engine.update(engine);

  if(frameCount % 20 === 0){
    var textPicked = generateString(3);
    object = new FallingObject(random(1, 800), -100);
    objects.push([object, textPicked]);
  }

  for(var x = 0; x < objects.length; x++){
    objects[x][0].display(objects[x][1]);
  }
}