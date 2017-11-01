function Ball() {
  this.x = 0;
  this.y = 0;
  this.Dimx = 30; 

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 30, 0, 0.1);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }
