class Steel{
	constructor(x,y,r)
   {
      var options = 
	  {
       'restitution' : 0.8,               
       'friction' : 3,  
       'density' : 30
	  }
	  this.x=x;
	  this.y=y;
	  this.r=r;
	  this.body=Bodies.circle(this.x,this.y,(this.r-20)/2, options)
	  World.add(world,this.body);
   } 
	display()
	{
		  var pos=this.body.position;		
		  push()
	      translate(pos.x,pos.y);
		  rectMode(CENTER)
          strokeWeight(4);
		  stroke("grey");
		  fill("grey");
          rect(0,0,this.r,this.r);
		  pop()
    }
}
