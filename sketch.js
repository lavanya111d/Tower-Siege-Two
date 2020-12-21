const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  stroke(255)
  ground1 = new Ground(400,780,800,20);
//level one
  box1 = new box(330,235,30,40);
  box2 = new box(360,235,30,40);
  box3 = new box(390,235,30,40);
  box4 = new box(420,235,30,40);
  box5 = new box(450,235,30,40);
//level two
  box6 = new box(360,194,30,40);
  box7 = new box(390,194,30,40);
  box8 = new box(420,194,30,40);
//lever three
  box9 = new box(390,155,30,40);
  polygon = new Polygon(50,200,50,50);
  chain = new SlingShot(polygon.body, {x: 50, y: 50});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("blue");
  Engine.update(engine);
  background(0); 
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground1.display();

  chain.display();

  polygon.display();
}
