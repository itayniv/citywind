
function touchAnim() {
  this.x = width/2;
  this.y = height/2;
  this.z = random(0, 20);
  this.size = 40;
  this.len = map(this.z, 0, 20, 10, 25);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.xspeed = 1;
  this.dirr = 0;
  this.transperancy = 255;

  this.animate = function() {
    this.transperancy  = this.transperancy - .35;

  }




  this.show = function() {
    var thick = map(this.z, 0, 20, .1, 2);
    //strokeWeight(thick);
    fill(255,this.transperancy)
    ellipse(this.x, this.y, this.size);
  }
}
