
function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 30);
  this.len = map(this.z, 0, 30, 10, 25);
  this.yspeed = map(this.z, 0, 30, 1, 90);
  this.xspeed = 1;
  this.dirr = 0;

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 30, 0, 0.1);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }


  this.windDir = function(){
    this.x = this.x + this.xspeed;

    if (this.x > width+200){
      this.x = random(-300,0);
    }
    if (this.x < -200){
      this.x = random(width,width+300)
    }
  }



  this.show = function() {
    var thick = map(this.z, 0, 20, .1, 2);
    strokeWeight(thick);
    stroke(255,150);
    line(this.x, this.y, this.x+this.dirr, this.y+this.len);
  }
}
