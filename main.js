function Space() {
    this.fps = 30;
    this.camvas = null;
    this.height = 0;
    this.width = 0;
    this.minVelocity = 15;
    this.maxVelocity = 30;
    this.stars = 100;
    this.intervalId = 0;
}

Space.prototype.initialise = function(div) {

    this.containerDiv = div;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    window.addEventListener('resize', function resize(event) {
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

function Star(x, y, size, velocity) {

    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
}

Space.prototype.start = function(first_argument) {

    var stars = [];
    for (var i = 0; i < this.stars; i++) {
        stars[i] = new Star(Math.random() * this.width, Math.random() * this.height, Math.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
    }
    this.starts = stars;

    var self = this;

    this.intervalId = setInterval(function() {
        self.update();
        self.draw();
    }, 1000 / this.fps);
};

Space.prototype.update = function() {
    var dt = 1 / this.fps;
    for(var i=0; i<this.stars.length; i++) {
        var star = this.stars[i];
        star.y += dt * star.velocity;
        //  If the star has moved from the bottom of the screen, spawn it at the top.
        if(star.y > this.height) {
            this.stars[i] = new Star(Math.random()*this.width, 0, Math.random()*3+1, 
               (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
        }
    }
};

Space.prototype.draw = function() {
    
    //  Get the drawing context.
    var ctx = this.canvas.getContext("2d");
 
    // Draw the background.
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.width, this.height);
 
    //  Draw stars.
    ctx.fillStyle = '#ffffff';
    for(var i=0; i&lt;this.stars.length;i++) {
        var star = this.stars[i];
        ctx.fillRect(star.x, star.y, star.size, star.size);
    }
};