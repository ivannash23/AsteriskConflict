function Stars(){
	this.fps = 30;
	this.camvas = null;
	this.height = 0;
	this.width = 0;
	this.minVelocity = 15;
	this.maxVelocity = 30;
	this.stars = 100;
	this.intervalId = 0;
}

Stars.prototype.initialise = function(div) {

	this.containerDiv = div;
	this.width = window.innerWidth;
	this.height = window.innerHeight;

	window.addEventListener('resize', function resize(event){
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.draw();
	});

	var canvas = document.createElement('canvas');
	div.appendChild(canvas);
	this.canvas = canvas;
	this.canvas.width = this.width;
	this.canvas.height = this.height;

};