Function.prototype.inherits = function(Parent) {
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject(speed, name) {
    this.speed = speed;
    this.name = name;
}

MovingObject.prototype.move = function() {
    console.log(`${this.name} is moving!`);
}

function Asteroid(speed, name, material) {
    MovingObject.call(this, speed, name);
    this.material = material;
}

Asteroid.inherits(MovingObject);

let foo = new Asteroid('fast', 'foo', 'rocky');
console.log(foo.move());