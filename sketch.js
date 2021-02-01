var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17
var player
var enimy,enimy1,enimy2,enimy3
var g
var k1,k2,k3,k4,e1
var keys=0
var PLAY=2
var END=1
var WIN=0
var gameState=PLAY
var i1,i2,i3,i4,i5,i6,i7,i,i8
var vid,pl,gp
function preload(){
   e1=loadImage("download3.png")
   i=loadImage("images (4).jpg")
   pl=loadImage("download (1).png")
   gp=loadImage("download (8).5.png")
}
function setup() {
  createCanvas(1300,700);
  g=new Group()
  if (gameState===PLAY){
  i1=createSprite(204,80,250,50)
  i1.addImage(i)
  i1.height=0.1
  i2=createSprite(590,80,250,50)
  i2.addImage(i)
  i2.height=0.1 
  i3=createSprite(975,80,250,50)
  i3.addImage(i)
  i3.height=0.1
  i4=createSprite(1363,80,250,50)
  i4.addImage(i)
  i4.height=0.1
  i5=createSprite(215,220,250,50)
  i5.addImage(i)
  //i5.height=0.1
  i5.scale=1.1
  i6=createSprite(590,220,250,50)
  i6.addImage(i)
  i6.scale=1.1
  i7=createSprite(975,220,250,50)
  i7.addImage(i)
  i7.scale=1.1
  i8=createSprite(1363,220,250,50)
  i8.addImage(i)
  i8.scale=1.1
  i5=createSprite(215,370,250,50)
  i5.addImage(i)
  //i5.height=0.1
  i5.scale=1.1
  i6=createSprite(590,370,250,50)
  i6.addImage(i)
  i6.scale=1.1
  i7=createSprite(975,370,250,50)
  i7.addImage(i)
  i7.scale=1.1
  i8=createSprite(1363,370,250,50)
  i8.addImage(i)
  i8.scale=1.1
  i5=createSprite(215,520,250,50)
  i5.addImage(i)
  //i5.height=0.1
  i5.scale=1.1
  i6=createSprite(590,520,250,50)
  i6.addImage(i)
  i6.scale=1.1
  i7=createSprite(975,520,250,50)
  i7.addImage(i)
  i7.scale=1.1
  i8=createSprite(1363,520,250,50)
  i8.addImage(i)
  i8.scale=1.1
  g.add(wall1=createSprite(550,150,1200,10))
  wall1.shapeColor="brown"
  wall2=createSprite(400,60,10,90)
  wall2.shapeColor="brown"
  wall3=createSprite(800,60,10,90)
  wall3.shapeColor="brown"
  wall4=createSprite(1200,80,10,150)
  wall4.shapeColor="brown"
  g.add(wall5=createSprite(550,300,1200,10))
  wall5.shapeColor="brown"
  wall6=createSprite(400,200,10,90)
  wall6.shapeColor="brown"
  wall7=createSprite(800,200,10,90)
  wall7.shapeColor="brown"
  wall8=createSprite(1200,230,10,150)
  wall8.shapeColor="brown"
  g.add(wall9=createSprite(550,450,1200,10))
  wall9.shapeColor="brown"
  wall11=createSprite(400,350,10,90)
  wall11.shapeColor="brown"
  wall12=createSprite(800,350,10,90)
  wall12.shapeColor="brown"
  wall13=createSprite(1200,380,10,150)
  wall13.shapeColor="brown"
  g.add(wall14=createSprite(600,600,1200,10))
  wall14.shapeColor="brown"
   wall9=createSprite(400,500,10,90)
  wall9.shapeColor="brown"
   wall9=createSprite(800,500,10,90)
  wall9.shapeColor="brown"
   wall9=createSprite(1200,530,10,150)
  wall9.shapeColor="brown"
  g.add(wall15=createSprite(600,10,1200,10))
  wall15.shapeColor="brown"
  g.add(wall16=createSprite(5,300,10,600))
  wall16.shapeColor="brown"
  g.add(wall17=createSprite(1200,300,10,600))
  wall17.shapeColor="brown"
  player=createSprite(600,200,10,10)
  player.shapeColor="brown"
  player.addImage(pl)
  player.scale=0.2
  enimy=createSprite(100,420,20,20)
  enimy.shapeColor="green"
  enimy.velocityX=+4
  enimy.velocityY=-4
  enimy.scale=0.2
  enimy.addImage(gp)
  enimy1=createSprite(100,130,20,20)
  enimy1.shapeColor="green"
  enimy1.velocityX=+3
  enimy1.velocityY=-3
  enimy1.scale=0.2
  enimy1.addImage(gp)
  enimy2=createSprite(100,280,20,20)
  enimy2.shapeColor="green"
  enimy2.velocityX=+6
  enimy2.velocityY=-6
  enimy2.scale=0.2
  enimy2.addImage(gp)
  enimy3=createSprite(100,580,20,20)
  enimy3.shapeColor="green"
  enimy3.velocityX=+5
  enimy3.velocityY=-5
  enimy3.scale=0.2
  enimy3.addImage(gp)
  k1=createSprite(20,140,10,10)
  k1.addImage(e1)
  k1.scale=0.1
  k1.shapeColor="yellow"
  k2=createSprite(20,290,10,10)
  k2.addImage(e1)
  k2.scale=0.1
  k2.shapeColor="yellow"
  k3=createSprite(20,440,10,10)
  k3.addImage(e1)
  k3.scale=0.1
  k3.shapeColor="yellow"
  k4=createSprite(1190,590,10,10)
  k4.addImage(e1)
  k4.scale=0.1
  k4.shapeColor="yellow"
  }
  camera.zoom=camera.zoom+0.8
}
function draw() {
  background(243,27,45);

  if (gameState===PLAY){
  if (player.isTouching(k1)){
    k1.destroy()
   keys=keys+1
  }
  text("keys"+keys,100,100)  
  if (player.isTouching(k2)){
    k2.destroy()
   keys=keys+1
  }
  text("keys"+keys,100,100)  
  if (player.isTouching(k3)){
    k3.destroy()
   keys=keys+1
  }
  text("keys"+keys,100,100)  
  if (player.isTouching(k4)){
    k4.destroy()
   keys=keys+1
  }
  text("keys"+keys,100,100)  
  if (keyDown("right")) {
    player.x=player.x+5;
  }
  if (keyDown("left")) {
    player.x=player.x-5;
  }
  if (keyDown("up")) {
    player.y=player.y-5;
  }
  if (keyDown("down")) {
    player.y=player.y+5;
  }
  player.bounceOff(g);
  if (keys===4){
     var s=createSprite(400,200,50,50)
    k4.shapeColor="yellow"
  }
  enimy1.bounceOff(g)
  enimy2.bounceOff(g)
  enimy3.bounceOff(g)
  if (enimy.isTouching(player)||enimy1.isTouching(player)||enimy2.isTouching(player)||enimy3.isTouching(player)){
    gameState=END
  }
  if (keys===4){
    gameState=WIN
  }
}

 

camera.x=player.x
camera.y=player.y
//camera.zoom=camera.zoom
  ghost()
  if (gameState===END){
    createCanvas(0,0)
    vid=createVideo("Video_20210201184236654_by_VideoShow.mp4")
    vid.loop()
    vid.lop()
    vid.size(1200,500)
  }
   drawSprites();
   text()
  if (gameState===END){
    background(255,255,255)

    textSize(50)
    fill(255,0,0)
    text("GAMEOVER",200,200)
   
    
    
  }
  if (gameState===WIN){
    background(255,255,255)
    textSize(50)
    fill(255,0,0)
    text("GAMEOVER",200,200)
    text("YOU WIN",200,250)
  }
}
 function ghost(){
  // enimy.bounce(enimy1)

  r=random(1,2)
  
  if(enimy.velocityX==0&&enimy.collide(g))
  {
    if(r==1)
    {
     enimy.velocityX=5;
    }
    else
    {
      enimy.velocityX=5
    }
    enimy.velocityY=0;
    enimy.bounceOff(g);
  }
  
   if(enimy.velocityY==0&&enimy.collide(g))
  {
    if(r==1)
    {
     enimy.velocityY=5;
    }
    else
    {
      enimy.velocityY=-5
    }
    enimy.velocityX=0;
  
  }
  enimy.bounceOff(g);
 }
 