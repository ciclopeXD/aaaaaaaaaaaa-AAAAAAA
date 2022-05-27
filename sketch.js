const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var colitaDeAlgodon;
var boton
var blink, eat, sad;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
  blink= loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");
  eat = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  boton=createImg("cut_button.png");
  boton.position(225,20);
  boton.size(40,40);
  blink.frameDelay=15;
  sad.frameDelay=10;
eat.frameDelay=10;
colitaDeAlgodon = createSprite(400,605,10,10);

colitaDeAlgodon.scale=0.2;
colitaDeAlgodon.addAnimation("blink",blink);
colitaDeAlgodon.addAnimation("sad",sad);
colitaDeAlgodon.addAnimation("eat",eat);
colitaDeAlgodon.changeAnimation("blink");
boton.mouseClicked(drop);
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);
if(fruit !=null){
image(food,fruit.position.x,fruit.position.y,70,70);
}
  
  rope.show();
  Engine.update(engine);
  ground.show();

  if(collide(fruit,colitaDeAlgodon)==true){ 
    colitaDeAlgodon.changeAnimation('eat'); 
  }
  drawSprites();
}

function drop(){
rope.break();
fruit_con.botonDoofenshmirtz();
fruit_con=null
}