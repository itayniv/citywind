
class Tile{
	constructor(_x, _y, _xsize, _ysize,_opacity){
		this.x = _x;
		this.y = _y;
		this.width = _xsize;
		this.height = _ysize;
		this.shouldDraw = true;
		this.opacity = 255;
	}
	draw(){
		if(!this.shouldDraw){
			noStroke();
			fill(255,255,255,this.opacity);
			rect(this.x,this.y,this.width,this.height);
			this.opacity = this.opacity - 5;

		}
	}
	update(index){

		if ( (y >= (h-noteBox/2)) && this.shouldDraw == true){
				if (this.shouldDraw == true){
					this.shouldDraw = false;
					currnote = Math.ceil(x/noteWidth);

    				}
    			}
		if  (y >= (h-noteBox/2)){
			this.shouldDraw = true;
			//console.log(this.shouldDraw);
		}

	}
}
