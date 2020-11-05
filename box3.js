class Wall3
{
     constructor(x,y){

      var option = {
         isStatic: true
      }

        this.body = Bodies.rectangle(x,y,10,100,option);
        World.add(world,this.body)
     }
        display(){
            var pos = this.body.position
            rectMode(CENTER);
            fill('red')
            rect(pos.x,pos.y,10,100);
        }
     
}